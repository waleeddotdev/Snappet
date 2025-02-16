"use client"

import { useState, useEffect } from "react";
import RightSidebar from "@/components/right-sidebar/right-sidebar";
import Sidebar, { Skeleton } from "@/components/sidebar/sidebar";
import dynamic from "next/dynamic";

const View = dynamic(() => import("@/components/view/view"), { ssr: false, loading: () => 
   <div className="w-full h-full justify-center items-center flex">
        <Skeleton className="h-[80vh] w-full" />
       
   </div>
 });

export default function Home() {
   

    return (
        <>
            <main className="w-full xl:flex hidden flex-row max-h-[100vh] h-full">
                <Sidebar />
                <div className="w-full h-full flex pr-5 justify-center items-center">
                    <View />
                </div>
                <div className="absolute bottom-0 flex justify-end items-end flex-col right-0 p-5">
                    <a
                        target="_blank"
                        href="https://waleeddotdev.netlify.app"
                        className="underline opacity-50 hover:opacity-90 transition-opacity"
                    >
                        Made by Waleed Nasir with <span className="text-red-600">❤</span>
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/waleeddotdev/Snappet"
                        className="underline opacity-50 hover:opacity-90 transition-opacity"
                    >
                        Want to contribute? <span className="text-green-400">Click Here</span>
                    </a>
                </div>
                <RightSidebar />
            </main>

            <div className="flex flex-col justify-center items-center xl:hidden w-full h-full bg-gray-900 text-white text-center p-6">
                <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-md">
                    <p className="text-xl font-semibold">⚠ Unsupported Device</p>
                    <p className="text-sm mt-2 text-gray-300">
                        This tool does not support small devices. <br />
                        Please use a laptop or PC for the best experience.
                    </p>
                    <p className="mt-3 text-gray-400">Sorry for the inconvenience. 🙏</p>
                </div>
            </div>
        </>
    );
}
