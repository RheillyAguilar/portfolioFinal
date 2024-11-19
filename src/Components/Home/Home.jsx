
import imageOne from '../../assets/image-one.jpg';

export default function Home() {
  return (
    <>
        <section className='flex flex-wrap items-center justify-evenly gap-10 h-[88vh] p-5'>
        <div>
            <img src={imageOne} alt="" className="w-[32rem] rounded-xl imageOne" />
        </div>
        <div className='w-[42rem] text-[#5e5946]'>
            <h1 className='text-5xl mb-3'>👋🏼 Hello, I’m <span className='font-bold'>Rheilly Aguilar</span></h1>
            <p className='text-2xl'>As a <span>front-end developer</span>, I craft responsive, user-focused websites that seamlessly blend aesthetics and functionality, ensuring optimal performance across alldevices. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I’m passionate about creating intuitive digital experiences that bring designs to life.</p>
        </div>
        </section>
    </>
  )
}
