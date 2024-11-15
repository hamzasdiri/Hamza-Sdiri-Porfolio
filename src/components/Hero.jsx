import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import Header from "./header/Header.jsx";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Hamza SDIRI</span>
          </h1>
          <h5 className="text-light" style={{ display: "inline-flex" }}>
            I'm a
            <span
              style={{
                color: "#915EFF",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Software Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h5>
        </div>
      </div>
      <Header />
     {/*  <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>*/}
    </section>
  );
};

export default Hero;
