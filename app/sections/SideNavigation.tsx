"use client";
import { Github, Linkedin, Twitter, Mail, Code, User, Home} from 'lucide-react';
import Link from 'next/link';

export default function SideNavigation(){
    return(
        <>
        {/* Desktop Nav */}
        <div className="hidden lg:fixed lg:flex left-4 top-0 z-50 flex-col justify-between h-[94vh] py-6 px-4 bg-transparent">
          <div className='flex flex-col pt-6 gap-12 items-center'>
            
            <Link href="/">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-125">
                <Home className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/about">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <User className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/projects">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <Code className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/contact">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <Mail className="w-6 h-6" />
              </div>
            </Link>
          </div>

          {/* Bottom - Desktop */}
          <div className="flex flex-col gap-4 items-center pb-8">
            <Link href="https://github.com/nishuldhakar" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-gray-400 hover:scale-125" />
            </Link>
            <Link  href="https://www.linkedin.com/in/nishuldhakar/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-blue-800 hover:scale-125" />
            </Link>
            <Link href="https://x.com/intent/follow?screen_name=nishuldhakar" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-blue-400 hover:scale-125" />
            </Link>
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-gray-800">
          {/* Main Navigation Icons */}
          <div className='flex justify-center items-center gap-8 py-4'>
            <Link href="/">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <Home className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/about">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <User className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/projects">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <Code className="w-6 h-6" />
              </div>
            </Link>

            <Link href="/contact">
              <div className="nav-icon cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125">
                <Mail className="w-6 h-6" />
              </div>
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center items-center gap-8 py-3 border-t border-gray-800/50">
            <Github className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125" />
            <Linkedin className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125" />

            <Link href="https://x.com/intent/follow?screen_name=nishuldhakar" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 cursor-pointer transition-all duration-300 hover:text-green-400 hover:scale-125" />
            </Link>
            
          </div>
        </div>
        </>
    )
}