"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {};

const BookingAdminPage = (props: Props) => {
  const [page, setPage] = React.useState(0);

  const fetchProjects = (page = 0) =>
    axios.get("/api/booking?limit=10&page=" + page);

  const apiGet = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => fetchProjects(page),
    placeholderData: keepPreviousData,
  });
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Time</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>

          <Table.HeadCell>Note</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {apiGet.data?.data.map((booking: any) => (
            <Table.Row
              key={booking._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {booking._id}
              </Table.Cell>
              <Table.Cell>{booking.name}</Table.Cell>
              <Table.Cell>{booking.phone}</Table.Cell>
              <Table.Cell>{booking.email}</Table.Cell>
              <Table.Cell>{booking.time}</Table.Cell>
              <Table.Cell>{booking.date}</Table.Cell>
              <Table.Cell>{booking.note}</Table.Cell>
              <Table.Cell className="flex gap-3">
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  <FaEdit />
                </a>
                <a
                  href="#"
                  className="font-medium text-red-500 hover:underline dark:text-red-400"
                >
                  <FaTrash />
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default BookingAdminPage;
