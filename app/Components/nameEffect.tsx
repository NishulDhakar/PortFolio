"use client";
import Image from "next/image";
import PhysicalSwitch from "./PhysicalSwitch";
import { useState } from "react";

export default function NameEffect(){
      const [lightOn, setLightOn] = useState(false);
    
      const toggleLight = () => {
        setLightOn(!lightOn);
      };
    
      return (
        <>        
          <div className="fixed top-8 right-8 z-20">
            <PhysicalSwitch
              isOn={lightOn} 
              onToggle={toggleLight}
            />
          </div>
        <div className="flex flex-col justify-start gap-6 max-w-xl text-white z-10 pt-20">
        
                <div className="absolute z-10 inset-0 lg:px-36 px-32 transition-opacity duration-500 opacity-100">
                <Image src="/lamp.png" alt="Light Icon" width={307} height={696} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                
                {/* Light Effect */}
                {lightOn && (
                  <div className="absolute inset-0 lg:mt-44 mt-16 lg:px-14 pl-6 transition-opacity duration-500 opacity-100 ">
                    <Image src="/light3.png" alt="Light Icon" width={507} height={696} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                )}
              
                {/* Text Content */}
                <div className="relative z-10 lg:pl-14 pl-24 lg:mb-40 mt-32">
                  <h1 className="font-sans font-extrabold text-6xl lg:text-[84px] leading-[1.1] tracking-tight">
                    <span className={`transition-colors duration-500 ${lightOn ? 'text-white' : 'text-[#545454]'}`}>
                      Nishul Dh
                      <span className='lg:text-[#545454]'>
                        akar
                      </span>
                    </span>
                  </h1>
        
                  <div className="hidden lg:block font-sans font-medium text-lg lg:text-[20px] leading-relaxed max-w-lg">
                    <p className={`transition-colors duration-500 ${lightOn ? 'text-white' : 'text-[#545454]'}`}>
                      build modern, scalable web apps with cle
                      <span className="text-[#545454]">an code and</span>
                    </p>
                    <p className={`transition-colors duration-500 ${lightOn ? 'text-white' : 'text-[#545454]'}`}>
                      user-focused design.
                    </p>
                  </div>
                </div>
              </div>
        </>
    )
}
