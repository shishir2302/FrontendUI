import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import pht1 from "../components/pht1.png";
import pht2 from "../components/pht2.png";
import gif from "../components/j4x.gif";

export default function Scroll() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 2,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);
    return (
        <>
            <section className="overflow-hidden static bg-[#2C3863] text-[white]">
                <div ref={triggerRef}>
                    <div
                        ref={sectionRef}
                        className="flex w-[400vw] h-[100vh] relative flex-row"
                    >
                        <div className="h-[100vh] w-[100vw] flex  items-center text-[#FFFDD0]">
                            <h2 className="text-7xl mr-[105px] ml-[20px] ">
                                Hey!!What's up?My name is Shishir Singh.I am a Frontend
                                Developer with few months of experience. <strong>&#8594;</strong> 
                            </h2>
                        </div>
                        <div className="h-[100vh] w-[100vw] flex justify-center items-center space-x-6">
                            <div className="w-[50%] mb-[110px]">
                                <Image src={pht1} alt="pht" className=""></Image>
                                <button className="text-xs rounded-full border border-[white] m-[10px] p-[8px]">
                                    UI/UX
                                </button>
                                <button className="text-xs rounded-full border border-[white] m-[10px] p-[8px]">
                                    DESIGN
                                </button>
                            </div>
                            <div className="w-[45%] mt-[40px] ">
                                <button className="text-xs rounded-full border border-[white] m-[10px] p-[8px]">
                                    ART DIRECTION
                                </button>
                                <button className="text-xs rounded-full border border-[white] m-[10px] p-[8px]">
                                    UI/UX
                                </button>
                                <Image src={pht2} alt="1" className=""></Image>
                            </div>
                        </div>
                        <div className="h-[100vh] w-[100vw] flex justify-center items-center border-0 rounded-lg ">
                            <div className="globe" id="home-globe-2">
                                <svg
                                    width="1072"
                                    height="457"
                                    viewBox="0 0 1072 457"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1071 228.832C1071 354.662 831.473 456.664 536 456.664C240.527 456.664 1 354.662 1 228.832C1 103.009 240.527 1 536 1C831.473 1 1071 103.009 1071 228.832Z"
                                        stroke="#252525"
                                        strokeWidth="0.5"
                                    ></path>
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M897.739 228.832C897.739 354.662 735.778 456.664 536.006 456.664C336.226 456.664 174.266 354.662 174.266 228.832C174.266 103.009 336.226 1 536.006 1C735.778 1 897.739 103.009 897.739 228.832Z"
                                        stroke="#252525"
                                        strokeWidth="0.5"
                                    ></path>
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M715.351 228.832C715.351 354.662 635.053 456.664 536 456.664C436.954 456.664 356.656 354.662 356.656 228.832C356.656 103.009 436.954 1 536 1C635.053 1 715.351 103.009 715.351 228.832Z"
                                        stroke="#252525"
                                        strokeWidth="0.5"
                                    ></path>
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        d="M1 228.823L1071 228.823"
                                        stroke="#252525"
                                        strokeWidth="0.5"
                                    ></path>
                                    <path
                                        vectorEffect="non-scaling-stroke"
                                        opacity="1"
                                        d="M536 1L536 456.893"
                                        stroke="#252525"
                                    ></path>
                                </svg>
                            </div>    
                        </div>
                        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
                            <Image src={gif} className="w-[80vw]"></Image>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
