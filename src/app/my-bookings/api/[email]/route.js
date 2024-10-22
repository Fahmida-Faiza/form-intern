
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("contact-bookings");
  const partyCollection = db.collection("party-bookings");
  const eventCollection = db.collection("event-bookings");
  try {
    const myBookings = await bookingsCollection.find({ email: params.email }).toArray()
    const pBookings = await partyCollection.find({ email: params.email }).toArray()
    const eBookings = await eventCollection.find({ email: params.email }).toArray()
      
    return NextResponse.json({ myBookings, pBookings, eBookings });
  } catch (error) {
    return NextResponse.json({ message: "No Data Found" });
  }
};