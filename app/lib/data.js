import prisma from "@/app/lib/prismaClient";
import { NextResponse } from "next/server";

export const fetchUsers = async (q) => {
  try {
    if (q === "") {
      const UsersinDB = await prisma.user.findMany();
      return NextResponse.json(UsersinDB);
    } else {
      const UsersinDB = await prisma.user.findMany({
        where: {
          username: {
            contains: q,
            mode: "insensitive",
          },
        },
      });
      return NextResponse.json(UsersinDB);
    }
  } catch (error) {
    return NextResponse.json({ message: "GET error", error }, { status: 500 });
  }
};

export const fetchUser = async (id) => {
  try {
    const UserinDB = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(UserinDB);
  } catch (error) {
    return NextResponse.json({ message: "GET error", error }, { status: 500 });
  }
};
