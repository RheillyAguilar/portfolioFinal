
import imageTwo from '../../assets/image-one.jpg';

export default function About() {
  return (
    <>
        <section className="text-[#5e5946] h-[100vh] p-5 flex flex-col items-center justify-center gap-24">
            <div className="font-bold">
                <p className="text-lg">Get to know more</p>
                <h1 className="text-5xl">About Me!</h1>
            </div>



           <div className='flex flex-wrap items-center justify-center gap-28'>
                {/* EDUCATION AND EXPERIENCES */} 
                <div className="flex flex-col gap-5 items-center">
                    <div className="w-[637px] h-[250px] bg-[#5e5946] text-[#e7e5d9] flex flex-col items-center justify-center text-center rounded-lg text-2xl">
                        <h1 className="mb-10 font-bold">👨🏼‍🎓Education</h1>
                        <div className="text-start">
                            <h1>Bachelor of Science in Computer Science</h1>
                            <h1>AMA Computer College - Pasig Branch</h1>
                            <h1>2021 - Present</h1>
                        </div>
                    </div>

                    <div className="w-[637px] h-[250px] bg-[#5e5946] text-[#e7e5d9] flex flex-col items-center justify-center text-center rounded-lg text-2xl">
                        <h1 className="mb-10 font-bold">👨🏻‍💻Intern/OJT Experience</h1>
                        <div className="text-start">
                            <h1>Shoppable Business B2B</h1>
                            <h1>Poblacion Makati Manila</h1>
                            <h1>September 2024 - Present</h1>
                        </div>
                    </div>
                </div>

                {/* IMAGE  */}
                <div>
                    <img src={imageTwo} alt="" className='w-[500px] h-[520px] rounded-lg' />
                </div>
            </div>






        </section>
    
    </>
  )
}
