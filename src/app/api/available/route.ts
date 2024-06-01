import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { ReservationTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

const availableSchema = z.object({
    roomId: z.string(),
    date: z.string(),
})

type availableRequest = z.infer<typeof availableSchema>


export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        availableSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { roomId, date } = data as availableRequest;
    var availableRoom = [1,1,1,1,1,1,1,1,1,1,1,1]

    try {
        const temp = await db
            .select({
                span: ReservationTable.span,
            })
            .from(ReservationTable)
            .where(and(eq(ReservationTable.date, date), eq(ReservationTable.roomId, roomId)))
            .execute()
        temp.forEach((element)=>{
            availableRoom[element.span] = 0
        })
        return NextResponse.json(
            { availableRooms: availableRoom},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong: GET" },
            { status: 500 },
        );
    }
}