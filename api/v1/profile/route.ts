import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    const Data = await req.json();
    const token = Data.token;
    const decoded = jwt.verify(token, 'SECRET_KEY');    
    NextResponse.json({
       message: "this is the response"
    })
}