import productsSchema from "@/helpers/productsSchema";
import { connect } from "@/lib/db";
import {NextResponse} from "next/server"




export async function GET() {
    try{
    await connect();
    const products = await productsSchema.find();
    return NextResponse.json(products)
    }catch(error)
    {
return NextResponse.json({message:'Error fetching products'},{status:500})
    }
}