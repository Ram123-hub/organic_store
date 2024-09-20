import {NextResponse} from "next/server"
import  Juices  from "@/helpers/juicesSchema";
import { connect } from "@/lib/db"


export async function GET() {
    try{
    await connect();
    const juice = await Juices.find();
    return NextResponse.json(juice)
    }catch(error)
    {
return NextResponse.json({message:'Error fetching Juices'},{status:500})
    }
}