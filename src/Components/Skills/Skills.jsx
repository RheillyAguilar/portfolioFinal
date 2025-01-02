import Others from "./Others";


export default function Skills({ language, other }) {
    const background = [
        '#f57251', // HTML5
        '#2c487f', // CSS3
        '#e6b400', // JavaScript
        '#006899', // React
        '#246881', // Tailwind
        '#2196f3', // Material UI
        '#f89820', // Java
        '#44883e', // Node.js
        '#00758f', // MySQL
        '#3949ab'  // Dart
    ];

    return (
        <>
            <section className="min-h-[100vh] bg-[#e7e5d9] p-5 flex flex-col items-center justify-center" id="skill">
                {/* Section Header */}
                <div className="text-center font-bold mb-[64px] text-[#5e5946]">
                    <p className="text-md">Get to know more about my</p>
                    <h1 className="text-4xl">Skills!</h1>
                </div>

                <div className="flex flex-wrap items-center gap-10 justify-center">
                    {/* Skills Container */}
                    <div className="flex items-center justify-center">
                        <div className="bg-[#5e5946] w-[600px] h-[450px] p-8 rounded-xl shadow-lg">
                            <h1 className="text-center text-[#e7e5d9] mb-8 text-2xl">Web Development</h1>
                            <div className="flex flex-wrap justify-center gap-y-8">
                                {language.map((language, index) => (
                                    <div
                                        key={language.id}
                                        className={`relative flex items-center justify-center gap-2 w-[140px] h-[50px] rounded-md shadow-lg transform mr-4`}
                                        style={{
                                            background: background[index % background.length],
                                            marginLeft: index % 2 === 0 ? '20px' : '0',
                                            transform: `translateY(${index % 2 === 0 ? '10px' : '0px'})`,
                                        }}
                                    >
                                        <img src={language.image} alt={language.name} className="w-6 h-6" />
                                        <h1 className="text-white text-sm font-medium">{language.name}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <Others other={other}/>

                </div>


            </section>
        </>
    );
}
