import connectDB from "@/config/connectDB";
import crypto from "crypto";

import { NextResponse, NextRequest } from "next/server";
export const GET = async (req: NextRequest) => {
  try {
    const params = req.nextUrl.searchParams;
    const limit = parseInt(params.get("limit") || "10");
    const page = parseInt(params.get("page") || "0");
    const client = await connectDB();
    if (!client)
      throw {
        message: "Failed to connect to the database",
        statusCode: 500,
      };
    const db = client.db("test_shecom");
    const collection = db.collection("user_booking");

    const bookings = await collection
      .find()
      .skip(limit * page)
      .limit(limit)
      .toArray();

    return NextResponse.json(bookings, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.stack || err.message },
      { status: err.statusCode || 500 }
    );
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const sign = req.headers.get("x-sign");
    if (!sign)
      throw {
        message: "Invalid signature",
        statusCode: 400,
      };
    const secret = "shhhh";
    const body = await req.json();
    const _sign = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(body))
      .digest("hex");
    console.log(_sign, sign);
    if (sign !== _sign)
      throw {
        message: "Invalid signature",
        statusCode: 400,
      };
    const { name, email, phone, note } = body;
    if (!name || !email || !phone)
      throw {
        message: "Missing required fields",
        statusCode: 400,
      };
    const client = await connectDB();
    if (!client)
      throw {
        message: "Failed to connect to the database",
        statusCode: 500,
      };
    const db = client.db("test_shecom");
    const collection = db.collection("user_booking");

    const newBooking = await collection.insertOne({
      name,
      email,
      phone,
      note,
    });

    return NextResponse.json(newBooking, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.stack || err.message },
      { status: err.statusCode || 500 }
    );
  }
};
