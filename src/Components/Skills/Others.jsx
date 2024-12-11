

export default function Others({ other }) {

    const background = [
        '#F4532E', // Git
        '#2D2E32', // Github
        '#313644', // Vercel
        '#0088D2', // VsCode
        '#34343B', // Figma
    ];

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="bg-[#5e5946] w-[600px] h-[450px] p-8 rounded-xl shadow-lg">
                    <h1 className="text-center text-[#e7e5d9] mb-8 text-2xl">Others</h1>
                    <div className="flex flex-wrap justify-center gap-y-8">
                        {other.map((other, index) => (
                            <div
                                key={other.id}
                                className={`relative flex items-center justify-center gap-2 w-[140px] h-[50px] rounded-md shadow-lg transform mr-4`}
                                style={{
                                    background: background[index % background.length],
                                    marginLeft: index % 2 === 0 ? '20px' : '0',
                                    transform: `translateY(${index % 2 === 0 ? '10px' : '0px'})`,
                                }}
                            >
                                <img src={other.image} alt={other.name} className="w-6 h-6" />
                                <h1 className="text-white text-sm font-medium">{other.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
