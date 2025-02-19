
// client side rendering

"use client"
import axios from "axios"
import { useEffect, useState } from "react"

// export default  function  (){
//     const [data,setData] = useState(null);

// useEffect(()=>{
//  const response =  axios.get('/api/v1/profile',
    // {
    //     headers:{
    //      localStorage.getItem('token')
    //     }
    // })
//  .then((response)=>{
//      const data = response.data.message;
//      setData(data);
//     });
// })


//     return (
//         <div>
//             <h1>Profile Page</h1>
//             <h1>{data}</h1>
//         </div>
//     )
// }


// server side rendering

export default async  function  (){

 const response = await axios.get('/api/v1/profile',
    {
        headers:{
         localStorage.getItem('token')
        }
    });
 
 const data = response.data.message;

    return (
        <div>
            <h1>Profile Page</h1>
            <h1>{data}</h1>
        </div>
    )
}
