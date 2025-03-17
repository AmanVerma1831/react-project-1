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
        <div className='flex justify-center'>
            <div className='container flex flex-col items-center max-w-screen-xl'>
                <h1 className="text-3xl p-2 m-2 font-bold"> Instamart</h1>
                {sections.map((section, i) => (
                    <Section title={section.title} description={section.description} key={i}
                        isVisible={visibleSection === i}
                        setIsVisible={() => setIsVisibleSection(visibleSection === i ? null : i)} />
                ))}
            </div>
        </div>
    )
}

export default Instamart;