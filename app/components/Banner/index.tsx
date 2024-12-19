"use client";
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const ADHDModule = () => {
    return (
        <div id="adhd-module" className="bg-[#FFF] min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8">
                <div className="bg-white w-full min-h-screen mt-14 rounded-lg overflow-hidden">
                    <div className="mt-10vh p-6">
                        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce={true}>
                            <h1 className="text-lg text-gray-700 font-medium mb-2 text-left">
                                Almost There Doc, Your Input Matters
                            </h1>
                            <h2 className="text-gray-400 text-left mb-6">ADHD Module - Draft</h2>
                        </Fade>
                        <div className="bg-[#CBB59D] rounded-xl p-8 min-h-[600px] relative max-xl mx-auto shadow-md overflow-hidden">
                            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
                                <h2 className="text-[32px] mt-8 font-bold text-white mb-4 leading-tight">
                                    Understanding ADHD
                                </h2>
                                <p className="text-white text-md leading-relaxed mb-4">
                                    ADHD, Or Attention-Deficit/ Hyperactivity Disorder, Affects Millions
                                    Worldwide.
                                </p>
                                <p className="text-white text-lg font-medium">A Guide by Dr. Kim</p>
                            </Fade>
                            <div
                                className="absolute bottom-0 right-10 w-[380px] h-[380px] rounded-full overflow-hidden translate-x-1/4 translate-y-1/4"
                                style={{ clipPath: "circle(60% at 50% 50%)" }}
                            >
                                <Image
                                    src="/images/Banner/image9.svg" // Update this to your actual image path
                                    alt="Doctor Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 pt-5">
                        <button className="bg-[#7A939E] text-white text-lg font-medium py-3 px-6 rounded-lg w-full text-center">
                            Validate the Content
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ADHDModule;
