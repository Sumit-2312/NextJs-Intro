export default function Layout({children}:{children:React.ReactNode}){ // ReactNode basically means any valid react component
    return (
        <div className="flex flex-col gap-5 items-center mt-10 text-center">
            <h1 className="text-xl font-bold">This is the Layout for the route group folder</h1>
            <h2>What actually are route groupes?</h2>
            <p>
                Route groups are used for the better organization of the routes. <br />
                For example, if you have a group of routes that are related to the authentication of the user, <br />
                you can create a route group called Auth and put all the routes related to the authentication in that group.
            </p>
            {children}
        </div>
    )

}