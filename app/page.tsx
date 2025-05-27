"use client";

import DeveloperHero from "./Components/mainCard";
import NameEffect from "./Components/nameEffect";


export default function Home() {

  return (
    <>
    <script defer data-domain="nishul.dev" src="https://plausible.io/js/script.js"></script>

    <div className="md:flex justify-between items-center w-full min-h-screen px-8 lg:px-28 py-8 relative overflow-hidden">
            <div>
             <NameEffect />
            </div>
            
            <div className="relative z-10 mt-12 md:mt-0 md:ml-8 w-full md:w-auto">
             <DeveloperHero />
            </div>
        </div>
        </>
    );
}