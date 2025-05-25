import Image from "next/image";

export default function Down() {
    return (
        <div className="flex  justify-center items-center w-full bg-black min-h-screen px-16  lg:px-16">
            <div className="md:flex justify-between items-center w-full max-w-6xl md:gap-12">
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        <Image 
                            src="/result.png" 
                            alt="Work in Progress" 
                            width={1000} 
                            height={800}
                            className="object-cover rounded-2xl shadow-2xl"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center text-white mb-72">
                    <div className="md:space-y-6 ">
                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Work In 
                            <span className="block text-[#0084BE]">Progress</span>
                        </h2>
                        
                        <p className="hidden md:block text-xl text-gray-300 leading-relaxed max-w-lg">
                            Something amazing is being crafted here. 
                            Stay tuned for exciting updates coming soon.
                        </p>
                        
                        <div className="flex items-center gap-4 text-gray-400">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-[#0084BE] rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-[#0084BE] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-[#0084BE] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            <span className="text-sm font-medium">Building something great...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}