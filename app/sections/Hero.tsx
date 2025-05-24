"use client";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex justify-between items-center w-full bg-black min-h-screen px-8 lg:px-16 py-8">
            {/* Left Content */}
            <div className="flex flex-col justify-start gap-6 max-w-xl text-white z-10 pt-20">
                   <div className="absolute inset-0 mt-40">
                    <Image src="/light.png" alt="Light Icon" width={1007} height={696} /></div>

                <div className="relative z-10 pl-14 mb-40">
                <h1 className=" font-sans font-extrabold text-6xl lg:text-[84px] leading-[1.1] tracking-tight">
                    Nishul D<span className="text-[#545454]">hakar</span>
                </h1>
                <div className=" font-sans font-medium text-lg lg:text-[20px] leading-relaxed max-w-lg">
                    <p className="text-white">
                        build modern, scalable web apps wi
                        <span className="text-[#545454]">th clean code and</span>
                    </p>
                    <p className="text-white">user-focused design.</p>
                </div>
                </div>
                
                <div className="relative z-10 px-20">
                {/* GitHub Button */}
                <button
                    onClick={() => window.open("https://github.com/nishuldhakar", "_blank")}
                    className="bg-[#0084BE] hover:bg-[#006DA3] text-white px-8 py-3 rounded-full font-medium text-base w-fit mt-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                    GitHub
                </button>
                </div>
                
            </div>
            {/* Right Content */}
            <div className="relative  z-10  flex items-center justify-center flex-shrink-0 w-1/2 h-screen">
        
                <div className="absolute inset-0 flex items-center justify-center mb-96">
                    <div className="animate-spin-slow">
                        <Image 
                            src="/tech.png" 
                            alt="Tech Stack Icons" 
                            width={779} 
                            height={779}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                <div className="relative z-10">
                    <Image 
                        src="/hero.png" 
                        alt="Hero Character" 
                        width={647} 
                        height={970 }
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <style jsx global>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
}