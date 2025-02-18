
export default function DynamicPages({params}: { params: { id: string }}){
    const pageId = params.id;     // id here is the name of the folder you have mentioned in the square brackets

    return (
        <div>
            <h1>
                Hey there i am page with id as {pageId}
            </h1>
        </div>
    )
}