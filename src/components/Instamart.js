import React, { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2 w-full">
            <div className='flex justify-between'>
                <h3 className="font-bold text-xl">{title}</h3>
                <button className='font-bold px-10 cursor-pointer bg-gray-200'
                    onClick={setIsVisible}
                >
                    <span className={`inline-block transition-transform duration-300 ${isVisible ? '' : 'rotate-180'}`}>^</span>
                </button>
            </div>
            {isVisible && <p className='bg-gray-200 border-gray-600 border-t-1 p-1'>{description}</p>}
        </div>
    )
}

const Instamart = () => {

    const [visibleSection, setIsVisibleSection] = useState(null);
    const sections = [
        {
            title: "About Instamart",
            description: "About On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        },
        {
            title: "Team Instamart",
            description: "Team On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        },
        {
            title: "Careers",
            description: "Careers On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
    ];

    return (
        <>
            <div className='flex justify-center mt-10'>
                <div className='container flex flex-col items-center max-w-screen-xl'>

                    {/* Hero Section */}
                    <section className="text-gray-700 body-font bg-gray-100 p-8 rounded-md">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                    Groceries Delivered in 90 Minutes
                                    <br className="hidden lg:inline-block" />
                                    Freshness Guaranteed!
                                </h1>
                                <p className="mb-8 leading-relaxed">
                                    Get your daily essentials delivered lightning-fast. From farm-fresh produce to household necessities, we've got you covered with the best quality items at competitive prices.
                                </p>
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                        Start Shopping
                                    </button>
                                    <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                                        How It Works
                                    </button>
                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img
                                    className="object-cover object-center rounded"
                                    alt="fresh groceries"
                                    src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
                                    WHY CHOOSE US
                                </h2>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                    Your Instant Grocery Solution
                                </h1>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {[
                                    {
                                        icon: '⏱️',
                                        title: "Fast Delivery",
                                        desc: "Get your order delivered in 90 minutes or less"
                                    },
                                    {
                                        icon: '🍎',
                                        title: "Fresh Products",
                                        desc: "Daily quality checks ensure maximum freshness"
                                    },
                                    {
                                        icon: '💰',
                                        title: "Best Prices",
                                        desc: "Price match guarantee on all grocery items"
                                    }
                                ].map((feature, index) => (
                                    <div className="p-4 md:w-1/3" key={index}>
                                        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white text-xl">
                                                    {feature.icon}
                                                </div>
                                                <h2 className="text-gray-900 text-lg title-font font-medium">
                                                    {feature.title}
                                                </h2>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="leading-relaxed text-base">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                <img
                                    alt="shopping app"
                                    className="object-cover object-center h-full w-full "
                                    src="https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                {[
                                    {
                                        step: "1",
                                        title: "Browse & Select",
                                        desc: "Choose from 5000+ products across categories"
                                    },
                                    {
                                        step: "2",
                                        title: "Checkout Securely",
                                        desc: "Multiple payment options including COD"
                                    },
                                    {
                                        step: "3",
                                        title: "Receive Delivery",
                                        desc: "Track your order in real-time until delivery"
                                    }
                                ].map((step, index) => (
                                    <div className="flex flex-col mb-10 lg:items-start items-center" key={index}>
                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 text-xl font-bold mb-5">
                                            {step.step}
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                                {step.title}
                                            </h2>
                                            <p className="leading-relaxed text-base">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Product Categories */}
                    <section className="text-gray-700 body-font border-t border-gray-200">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    Popular Categories
                                </h1>
                                <p className="lg:w-1/2 w-full leading-relaxed text-base">
                                    Explore our wide range of grocery categories tailored to your daily needs
                                </p>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {[
                                    { name: "Fresh Fruits & Vegetables", icon: "🍏" },
                                    { name: "Dairy & Eggs", icon: "🥛" },
                                    { name: "Bakery & Snacks", icon: "🍞" },
                                    { name: "Meat & Seafood", icon: "🥩" },
                                    { name: "Beverages", icon: "🧃" },
                                    { name: "Household Essentials", icon: "🏠" }
                                ].map((category, index) => (
                                    <div className="xl:w-1/3 md:w-1/2 p-4" key={index}>
                                        <div className="border border-gray-300 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 text-2xl mb-4">
                                                {category.icon}
                                            </div>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                                {category.name}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <main className="w-full flex justify-center flex-wrap sm:flex-row-reverse gap-3 p-4 md:mt-6">
                        <div className="px-4 max-w-[640px]">
                            <img
                                src="https://raw.githubusercontent.com/prajwal89/audiostory-app-landing-page/ec384e241176d1bfddac9df979c14e37a05a7afe/dist/static/logo.png"
                                className="h-20 py-4"
                                alt="Instamart Logo"
                            />

                            <h1 className="font-extrabold text-[36px] md:text-[50px] leading-10 md:leading-normal">
                                Fresh Groceries Delivered
                                <br />
                                in 90 Minutes Flat!
                            </h1>

                            <p className="py-8 text-xl md:text-2xl font-bold text-gray-600">
                                Your one-stop solution for fresh produce, pantry staples
                                <br />
                                and household essentials - delivered lightning fast!
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="flex gap-4">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Shop Now
                                    </button>

                                    <button className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg">
                                        Download App
                                    </button>
                                </div>

                                <div className="flex items-center gap-6 mt-8 pl-1">
                                    <a className="text-gray-700 hover:text-green-600 transition-colors"
                                        aria-label="Visit our Instagram"
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8">
                                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                        </svg>
                                    </a>

                                    <a className="text-gray-700 hover:text-green-600 transition-colors"
                                        aria-label="Contact us on WhatsApp"
                                        href="https://wa.me/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8">
                                            <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </a>

                                    <a className="text-gray-700 hover:text-green-600 transition-colors"
                                        aria-label="Watch on YouTube"
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8">
                                            <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-lg flex justify-center items-center">
                            <img
                                src="https://raw.githubusercontent.com/prajwal89/audiostory-app-landing-page/ec384e241176d1bfddac9df979c14e37a05a7afe/dist/static/watch_on_youtube.png"
                                className="h-[600px] rounded-xl shadow-lg"
                                alt="Grocery Delivery App Preview"
                            />
                        </div>
                    </main>
                    <h1 className="text-3xl py-10 m-2 font-bold"> Instamart</h1>
                    {sections.map((section, i) => (
                        <Section title={section.title} description={section.description} key={i}
                            isVisible={visibleSection === i}
                            setIsVisible={() => setIsVisibleSection(visibleSection === i ? null : i)} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Instamart;