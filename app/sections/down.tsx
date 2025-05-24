import Image from "next/image";

export default function Down() {
    return (
        <div className="flex justify-center items-center w-full bg-black min-h-screen px-8 lg:px-16 py-8">
            <div className="flex justify-between items-center w-full max-w-6xl gap-12">
                {/* Image Section */}
                <div className="flex-1 flex justify-center">
                    <div className="relative">
                        <Image 
                            src="/down.jpeg" 
                            alt="Work in Progress" 
                            width={500} 
                            height={500}
                            className="object-cover rounded-2xl shadow-2xl"
                            priority
                        />
                        {/* Optional overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center text-white">
                    <div className="space-y-6">
                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Work In 
                            <span className="block text-[#0084BE]">Progress</span>
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
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