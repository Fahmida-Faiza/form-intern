// insert data to the database in new booking order confirm button
// save to the database


// import { connectDB } from "@/lib/connectDB";

// export const POST = async (request) => {
//   const newBooking = await request.json();

//   const db = await connectDB();
//   const bookingsCollection = db.collection("bookings");
//   try {
//     const res = await bookingsCollection.insertOne(newBooking);
//     return Response.json({ message: " Booked Successfully" }, { status: 200 });
//   } catch (error) {
//     return Response.json({ message: " something went wrong" }, { status: 400 });
//   }
// };


import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const booking = await request.json();

  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const newBooking = await bookingsCollection.insertOne(booking);
    return NextResponse.json({ message: "service Booked Successfully" });
  } catch (error) {
    console.log(error);
  }
};

