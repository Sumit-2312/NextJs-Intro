export default function CatchAllDynamicRoutes({ params }: { params: { routes?: string[] } }) {
    const Routes = params.routes || []; // Ensuring it doesn't break if undefined

    return (
        <div className="p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="text-4xl font-bold">This is the Catch-All Dynamic Routes Page</h1>
            <h2 className="text-2xl font-semibold mt-4">What are Catch-All Dynamic Routes?</h2>
            <p className="mt-2 text-lg">
                Catch-All Dynamic Routes match **any additional path segments** that are not explicitly defined in the routes folder. 
                <br />For example, if you have a route `/products`, but you also want `/products/electronics/laptops`, you can use `[...routes]`. <br />
                This single square brackets do not handle the /product page we need to create the seprate page.tsx file and for other we will create [..routes] inside which we will handle any route after /product <br />
                If you want to handle /product/* and /product all in on page.tsx file we can make the folders like /product/[...routes] and /product/page.tsx
            </p>

            <h2 className="text-2xl font-semibold mt-4">Captured Route Segments:</h2>
            {Routes.length > 0 ? (
                <ul className="list-disc ml-6 text-lg">
                    {Routes.map((route, index) => (
                        <li key={index}>{route}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-lg text-gray-500">No extra route segments captured.</p>
            )}
        </div>
    );
}
