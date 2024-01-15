import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
//import  {  } from "../../../../prisma/client";


console.log('Hit getUsers/route.ts line 7')
//export default async function handler (req: NextApiRequest, res: NextApiResponse){
async function handler(req: NextRequest, res: NextResponse) {    

    const prisma = new PrismaClient();

    if(req.method === "GET"){
    
    const users = await prisma.user.findMany()

    console.log('Line 13 getUsers data: ' + JSON.stringify(users))

    //return NextResponse.json('POST GET');
    return NextResponse.json(users);

    }else if (req.method === "POST"){
        //res.status(200).send('POST post');
        return NextResponse.json('POST post');
    }
}

export { handler as GET, handler as POST }