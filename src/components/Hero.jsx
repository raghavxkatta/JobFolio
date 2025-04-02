import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import{ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';
function Hero() {
    gsap.registerPlugin(ScrollTrigger);
    const heroRef = useRef(null);
    useGSAP(()=>{
        gsap.from(heroRef.current,{
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:heroRef.current,
                start:'top center',
                end:'bottom center',
            }
        })
    })
    return (
            <div className="relative container h-[300px] flex flex-col justify-center  items-center bg-black">
           <div ref={heroRef}>
                <h1 className="font-medium text-3xl text-yellow-500 mb-4">Welcome to JobFolio</h1>
                <p className="mb-4 text-white">Your one-stop solution for managing job applications and finding suitable jobs accordingly</p>
                <button className="border bg-yellow-500 font-semibold text-black p-3 rounded-md hover:scale-105   cursor-pointer transition-all duration-300 flex items-center">Get Started</button>
                </div>
        </div>
    );
}

export default Hero;