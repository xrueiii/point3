import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { ReservationTable, RoomInfoTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import nodemailer from 'nodemailer';

const reservationSchema = z.object({
    displayName: z.string(),
    email: z.string(),
    date: z.string(),
    span: z.number(),
    roomId: z.string(),
    phone: z.string(),
})

type reservationRequest = z.infer<typeof reservationSchema>

export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        reservationSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { displayName, email, date, span, roomId, phone } = data as reservationRequest;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'point3.tw@gmail.com',
            pass: 'qzcsdflmvxaexqdx'
        }
    });
    const [room] = await db
        .select({
            roomName: RoomInfoTable.roomName
        })
        .from(RoomInfoTable)
        .where(eq(RoomInfoTable.roomId, roomId))
        .execute()
    // Define the email options
    const mailOptions = {
        from: 'point3.tw@gmail.com',
        to: email,
        subject: '0.3練團室預約成功通知！',
        text: `${displayName}您好！\n您在${date},${span+10}:00~${span+11}:00預約${room.roomName}，預定成功。給我準時來歐~`
    };

    try {
        await db
            .insert(ReservationTable)
            .values({
                displayName: displayName,
                email: email,
                date: date,
                span: span,
                phone: phone,
                roomId: roomId,
            })
            .onConflictDoNothing()
            .execute();
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "reservation success!"},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong when making reservation" },
            { status: 500 },
        );
    }
}

