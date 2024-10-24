import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ message: "User Exists" }, { status: 304 });
    }

    // secure password kortysi jeno keo hack na korey tai bcrypt use
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const resp = await userCollection.insertOne({...newUser, password: hashedPassword});


    ////////////
    // const resp = await userCollection.insertOne({newUser});
// ///////////////



    return NextResponse.json({ message: "User Created succesfully" },{ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },{ status: 500 });
  }
};
