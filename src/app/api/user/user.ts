import { NextApiRequest , NextApiResponse } from "next";
import client from "@/lib/dg";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST')
    {
        const {clerkId , email , name } = req.body

        try{
            const result = await client.query(
                'INSERT INTO users (clerk_id, email, name) VALUES ($1, $2, $3) ON CONFLICT (clerk_id) DO UPDATE SET email = EXCLUDED.email, name = EXCLUDED.name RETURNING *',
                [clerkId , email , name] 
            );
            res.status(200).json(result.rows[0]);
        }catch(error)
        {
            res.status(500).json({error:'Error saving user data'})
        }
    }else{
        res.status(405).json({error:'Method not allowed'})
    }
}