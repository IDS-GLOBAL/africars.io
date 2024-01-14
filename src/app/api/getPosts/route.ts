import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

type ResponseData = {
    message: string
}

console.log(' Hit My man route.tsx')

//async function handler(req: NextApiRequest, res: NextApiResponse) {
export async function handler(req: NextRequest, res: NextResponse) {

    console.log('Line 14 getPosts Hit req', req)
    console.log('Line 15 getPosts Hit res', res)
    //res.status(200).json({ name: 'John Doe' })
    if(req.method === 'GET'){
        try {
            //Get primsa to fetch the post
            const data = prisma.post.findMany();
            console.log('Line 21 data: ' + JSON.stringify(data))
            return NextResponse.json(data);
        } catch (error) {
            return NextResponse.json(error);
        }
    }

}

export { handler as GET, handler as POST }