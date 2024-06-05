import {NextResponse} from "next/server";
import mongoose, { mongo } from "mongoose";
import {Car} from "@/lib/Model/Car";
import {connectionSrt} from "@/lib/db";
import {UserReviews} from "@/lib/Model/UserReview";

export async function GET(){
    

    let data = []
    try {
        await mongoose.connect(connectionSrt);
        data = await Car.find();
        
    } catch (error) {
        data={success:false}
    }

    return NextResponse.json({result:data,success:true})
}

export async function POST(req){
    const payload = await req.json();
    await mongoose.connect(connectionSrt);
    let userReview = new UserReviews(payload);
    const result = await userReview.save();
    return NextResponse.json({result,success:true})
}