import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';


export async function POST(req:NextRequest){
    const body = await req.json();
    const {username,password} = body;
    // ideally we should check in the database that the credientials are correct or not
    // but for now lets assume that the credientials are correct

   const token = await jwt.sign({username,password},"SECRET_KEY");
   // this is how we return in case of node js 
   // return res.status(200).json({token});
   // but in next js we have to return the object with status and json key as done below
   return{
        status:200,
        json:{  
            token
        }
    }
}