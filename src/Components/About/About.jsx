import imageTwo from '../../assets/image-one.jpg';

export default function About() {
    return (
        <section className="text-[#5e5946] min-h-[100vh] p-5 flex flex-col items-center justify-center gap-16 about">
            <div className="text-center font-bold">
                <p className="text-md">Get to know more</p>
                <h1 className="text-4xl">About Me!</h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-32">
                {/* EDUCATION AND EXPERIENCES */}
                <div className="flex flex-col gap-8 items-center max-w-[90%] ">
                    <div className="w-full md:max-w-[637px] xl:w-[637px] h-[250px] bg-[#5e5946] text-[#e7e5d9] flex flex-col items-center justify-center text-center rounded-lg text-lg p-5">
                        <h1 className="mb-5 font-bold text-xl">👨🏼‍🎓 Education</h1>
                        <div className="text-start space-y-2">
                            <h1>Bachelor of Science in Computer Science</h1>
                            <h1>AMA Computer College - Pasig Branch</h1>
                            <h1>2021 - Present</h1>
                        </div>
                    </div>

                    <div className="w-full md:max-w-[637px] xl:w-[637px] h-[250px] bg-[#5e5946] text-[#e7e5d9] flex flex-col items-center justify-center text-center rounded-lg text-lg p-5">
                        <h1 className="mb-5 font-bold text-xl">👨🏻‍💻 Intern/OJT Experience</h1>
                        <div className="text-start space-y-2">
                            <h1>Shoppable Business B2B</h1>
                            <h1>Poblacion Makati Manila</h1>
                            <h1>September 2024 - Present</h1>
                        </div>
                    </div>
                </div>

                {/* IMAGE */}
                <div>
                    <img
                        src={imageTwo}
                        alt="About Me"
                        className="w-[450px] h-[520px] rounded-lg"/>
                </div>
            </div>
        </section>
    );
}
