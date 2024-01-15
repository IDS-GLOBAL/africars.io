import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";

type ResponseData = {
    message: string
}

console.log(' Hit My man route.tsx')


//async function handler(req: NextApiRequest, res: NextApiResponse) {
async function handler(request: NextRequest, response: NextResponse) {
        
    const prisma = new PrismaClient();
    console.log('Line 14 getPosts Hit req', request)
    console.log('Line 14 getPosts Hit req', JSON.stringify(request.method))
    console.log('Line 15 getPosts Hit res', JSON.stringify(response))
    //res.status(200).json({ name: 'John Doe' })
    if(request.method === 'GET'){
        try {
            //Get primsa to fetch the post
            
            const data = await prisma.post.findMany();
            console.log('Line 21 data: ' + JSON.stringify(data))
            return NextResponse.json(data);
        } catch (error) {
            return NextResponse.json(error);
        }
    }

}

export { handler as GET, handler as POST }