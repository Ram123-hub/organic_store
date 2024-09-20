import {NextResponse} from "next/server"
import  Grocery  from "@/helpers/grocerySchema";
import { connect } from "@/lib/db"




export async function GET() {
    try{
    await connect();
    const groceries = await Grocery.find();
    return NextResponse.json(groceries)
    }catch(error)
    {
return NextResponse.json({message:'Error fetching groceries'},{status:500})
    }
}