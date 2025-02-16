export default function Signup(){
    return (
    <div className="flex  items-center justify-center h-screen w-screen">
        <div className="  w-fit p-4 bg-slate-100 gap-5 flex flex-col rounded-lg min-w-96 min-h-96">
            <h2 className="text-black w-full text-center font-bold text-4xl ">Signup</h2>
            <div className="flex flex-col text-black gap-3 my-10">
                <CustomInput heading='Username' type="text" placeholder="Enter Username"/>
                <CustomInput heading="Password" type="text" placeholder="Enter Password"/>
            </div>
           <div className="w-full text-center"> <button className="px-3 py-1 rounded-lg bg-green-800 w-fit ">Submit</button></div>
        </div>
    </div>
    )
}



export function CustomInput({heading,type,placeholder}){
    return (
    <div className="flex flex-col">
        <label className="font-bold">{heading}:</label>
        <input type={type} placeholder={placeholder} className="p-2 border border-gray-300 rounded-md"/>
    </div>
    )

}