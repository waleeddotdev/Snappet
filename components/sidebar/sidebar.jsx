"use client"

import { TbDeviceGamepad3Filled } from "react-icons/tb";
import { BiSolidMessageDetail } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Mockup from "./sections/mockup/mockup";
import Frame from "./sections/frame/frame"; import { BsImageFill } from "react-icons/bs";


import { BsGrid1X2Fill } from "react-icons/bs";



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