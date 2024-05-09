import connectDB from "@/config/connectDB";

import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
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
