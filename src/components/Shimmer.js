const Shimmer = () => {
    return (
        <section className="text-gray-700 body-font flex justify-center">
            <div className="container p-24 mx-auto max-w-screen-xl">
                <div className="flex flex-wrap">
                    {Array(10).fill("").map((e, index) => (
                        <div className="p-4 md:w-1/4" key={index}>
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center animate-pulse"></div>
                                <div className="p-6">
                                    <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                                    <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                                    <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                                    <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                                    <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shimmer;