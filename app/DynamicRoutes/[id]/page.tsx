export default function Routes({params}:{params:{id:string}}){
   const route = params.id;
    return (
        <div>
            You are on the page with id {route}
        </div>
    )
}