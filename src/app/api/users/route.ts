import { NextResponse } from "next/server";

export function GET(url: string){
    return NextResponse.json({
        forsalebyowner: 'Benjamin'
    })
}