import React from "react";
import { Booking } from "@/types/Booking";
import useModalStore from "@/stores/useModal";

import { useFormik } from "formik";

import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import createHmac from "create-hmac";
import axios from "axios";
type Props = {};

const BookingForm = (props: Props) => {
  const { closeModal } = useModalStore();
  const apiPost = useMutation({
    mutationFn: ({ data, sign }: { data: Booking; sign: string }) => {
      return axios.post("/api/booking", data, {
        headers: {
          "Content-Type": "application/json",
          "x-sign": sign,
        },
      });
    },
  });
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const initialValues: Booking = {
    name: "",
    email: "",
    phone: "",
    note: "",
    date: "",
    time: "",
  };
  const validation = useFormik<Booking>({
    initialValues,
    onSubmit: (values) => {
      if (apiPost.isPending) return;
      const sign = createHmac("sha256", "shhhh")
        .update(JSON.stringify(values))
        .digest("hex");
      apiPost.mutate({ data: values, sign });
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .length(10, "Phone number must be exactly 10 digits")
        .required("Phone is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string()
        .required("Time is required")
        .test(
          "is-greater",
          "Booking time must be greater than current time",
          function (value) {
            const { date, time } = this.parent;
            const bookingDateTime = new Date(`${date}T${time}`);
            return bookingDateTime.getTime() > new Date().getTime();
          }
        )
        .test(
          "is-before-closing",
          "Booking time must be before closing time (11:00 PM)",
          function (value) {
            const { date, time } = this.parent;
            const bookingDateTime = new Date(`${date}T${time}`);
            const closingTime = new Date(`${date}T23:00`);
            return bookingDateTime.getTime() < closingTime.getTime();
          }
        ),
    }),
  });
  React.useEffect(() => {
    if (apiPost.isSuccess) {
      validation.resetForm();
      closeModal();
    }
  }, [apiPost.isSuccess]);

  console.log(apiPost.error);

  return (
    <div className="bg-white p-4 w-96">
      {apiPost.isError && (
        <div className="bg-red-400 w-full">
          {(apiPost.error as any).response.data.error}
        </div>
      )}
      <h1 className="text-2xl font-bold">Booking Form</h1>
      <form onSubmit={validation.handleSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Name"
            className="border p-2"
            disabled={apiPost.isPending}
            {...validation.getFieldProps("name")}
          />
          {validation.touched.name && validation.errors.name ? (
            <div className="text-red-500">{validation.errors.name}</div>
          ) : null}
          <input
            type="email"
            placeholder="Email"
            className="border p-2"
            disabled={apiPost.isPending}
            {...validation.getFieldProps("email")}
          />
          {validation.touched.email && validation.errors.email ? (
            <div className="text-red-500">{validation.errors.email}</div>
          ) : null}
          <input
            type="text"
            placeholder="Phone"
            className="border p-2"
            disabled={apiPost.isPending}
            {...validation.getFieldProps("phone")}
          />
          {validation.touched.phone && validation.errors.phone ? (
            <div className="text-red-500">{validation.errors.phone}</div>
          ) : null}
          <div className="flex flex-row w-full">
            <input
              type="date"
              min={minDate}
              max={maxDate}
              placeholder="Date"
              className="border p-2 w-1/2"
              {...validation.getFieldProps("date")}
            />
            <input
              min="08:00"
              max="23:00"
              type="time"
              placeholder="Time"
              className="border p-2 w-1/2"
              {...validation.getFieldProps("time")}
            />
          </div>

          {validation.touched.time && validation.errors.time ? (
            <div className="text-red-500 w-full">{validation.errors.time}</div>
          ) : null}
          <textarea
            placeholder="Note"
            className="border p-2"
            disabled={apiPost.isPending}
            {...validation.getFieldProps("note")}
          />
          <button
            disabled={apiPost.isPending}
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            {apiPost.isPending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <button
        onClick={() => closeModal()}
        disabled={apiPost.isPending}
        className="bg-red-500 text-white p-2 rounded mt-2 w-full"
      >
        Close
      </button>
    </div>
  );
};

export default BookingForm;
