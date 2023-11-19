import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { username, email, password, img, isAdmin, isActive, phone } = body;
    const newUser = await prisma.user.create({
      data: { username, email, password, img, isAdmin, isActive, phone },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ message: "POST error", error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const UsersinDB = await prisma.user.findMany();

    return NextResponse.json(UsersinDB);
  } catch (error) {
    return NextResponse.json({ message: "GET error", error }, { status: 500 });
  }
};
