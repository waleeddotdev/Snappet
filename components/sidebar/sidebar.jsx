"use client"

import { TbDeviceGamepad3Filled } from "react-icons/tb";
import { BiSolidMessageDetail } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoMdImage } from "react-icons/io";
import Mockup from "./sections/mockup/mockup";
import Frame from "./sections/frame/frame";




const Sidebar = () => {
    return (
        <div className="justify-between w-full max-w-[320px] relative flex p-5 flex-col max-h-screen gap-[10px]  h-full">
            <Header />
            <div className="card h-full hide-scrollbar overflow-y-scroll">
                <Tabs defaultValue="mockup" className="w-full h-full">
                    <TabsList>
                        <TabsTrigger value="mockup">
                            <IoMdImage size={20} />
                            Mockup
                        </TabsTrigger>
                        <TabsTrigger value="frame">
                            <IoMdImage size={20} />
                            Frame
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="mockup"><Mockup /></TabsContent>
                    <TabsContent value="frame"><Frame/></TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Sidebar

const Header = () => {
    return (
        <div className="card !py-[15px]">
            <div className="flex flex-row items-center gap-[5px] justify-center">
                <TbDeviceGamepad3Filled size={20} />
                <p className="font-semibold text-lg text-card-foreground">Snappet</p>
            </div>
            <BiSolidMessageDetail size={20} />
        </div>
    )
}