import { ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
export  const Banner = () => {
    return (
     <>
    <div
    className=' mb-60 lg:mb-1 relative  text-center lg:min-h-screen '
    >
    <Parallax speed={-15}>
      <div className="   -z-10   w-full slow">
        <Image
            src="https://media.discordapp.net/attachments/972456002844766228/1091712713010462801/Main_Logo.png?width=1036&height=1036"
            alt="Picture of the author"
            width={500}
            height={500}
            className=' my-28 mx-auto'
            />
            {/* a button */}
            <div className="flex flex-col items-center justify-center">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#f9af05] to-[#fab518] group-hover:from-[#f9af05] group-hover:to-to-[#fab518] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#fab518] dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 font-mono transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register Now
              </span>
            </button>
            </div>

      </div>
    </Parallax>
    <Parallax speed={15}>

      <div
        className=" absolute lg:-top-[520px] -top-[400px] z-10  text-center  w-full  text-[#fab518] heading text-6xl font-lovelo-line-bold lg:font-lovelo-line-light lg:text-9xl font-bold "
        >
          <h1
          className=''
          >INGENIUS 2023</h1>
        </div>

    </Parallax>
    </div>
     

     
     </>
    );
  };
  
  