"use client"

import { BiSolidMessageDetail } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BsImageFill } from "react-icons/bs";


import { BsGrid1X2Fill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Mockup = dynamic(() => import("./sections/mockup/mockup"), { ssr: false, loading: () => 
   <div className="space-y-4">
        <Skeleton className="h-[60px]" />
        <Skeleton className="h-[60px]" />
        <Skeleton className="h-[150px]" />
        <Skeleton className="h-[150px]" />
        <Skeleton className="h-[250px]" />
        <Skeleton className="h-[250px]" />
        <Skeleton className="h-[150px]" />
   </div>
 });
const Frame = dynamic(() => import("./sections/frame/frame"), { ssr: false, loading: () => 
    <div className="space-y-4">
        <Skeleton className="h-[70px]" />
        <Skeleton className="h-[80px]" />
        <Skeleton className="h-[100px]" />
        
    </div>
 });


const Sidebar = () => {
    return (
        <div className="justify-between w-full max-w-[320px] relative flex p-5 flex-col max-h-screen gap-[10px]  h-full">
            {/* <Header /> */}
            <div className="card h-full hide-scrollbar overflow-y-scroll p-0">
                <Tabs defaultValue="mockup" className="w-full h-full p-0">
                    <TabsList>
                        <TabsTrigger value="mockup">
                            <BsGrid1X2Fill size={18} />
                            Mockup
                        </TabsTrigger>
                        <TabsTrigger value="frame">
                            <BsImageFill size={18} />
                            Frame
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="mockup"><Mockup /></TabsContent>
                    <TabsContent value="frame"><Frame /></TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Sidebar

const Header = () => {
    return (
        <div className="card ">
            <div className="flex flex-row items-center gap-[5px] justify-center">
                <img className="w-[40px]" src="/assets/logo-nocursor.png" />
                <p className="font-bold text-lg text-card-foreground">Snappet</p>
            </div>
            <BiSolidMessageDetail size={20} />
        </div>
    )
}

export const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={cn(
                "bg-gradient-to-r from-btn to-btn animate-pulse w-full h-full rounded-card",
                className
            )}
            {...props}
        ></div>
    );
};
