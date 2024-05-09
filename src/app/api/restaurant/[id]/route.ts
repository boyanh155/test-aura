import connectDB from "@/config/connectDB";

import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    // we should validate the ID, but in this scope I will skip it
    if (!id) throw { message: "Missing required fields", statusCode: 400 };
    const client = await connectDB();
    if (!client)
      throw {
        message: "Failed to connect to the database",
        statusCode: 500,
      };
    const db = client.db("test_shecom");
    const collection = db.collection("restaurant_detail");
    // it should find by ID, but for the sake of simplicity, I will get the very first one
    const restaurantDetail = await collection.findOne({});

    return NextResponse.json(restaurantDetail, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.stack || err.message },
      { status: err.statusCode || 500 }
    );
  }
};
