import { NextApiRequest, NextApiResponse } from "next";


export default async function handler (req: NextApiRequest, res: NextApiResponse){
    if(req.method === "GET"){
        res.send('Users');
    }else if (req.method === "POST"){
        res.status(200).send('Post');
    }
}