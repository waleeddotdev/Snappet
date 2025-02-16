"use client"
import { FaArrowDown } from "react-icons/fa6";
import CustomModal from "../ui/custom-modal";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ImageFormat from "./sections/image-format";
import ImageQaulity from "./sections/image-quality";
import { Button } from "../ui/button";
import { FaSave } from "react-icons/fa";
import useStore from "@/store/store";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import TemplateName from "./sections/template-name";
import { exportDivAsImage } from "@/lib/exportDivAsImage";



const RightSidebar = () => {

    const [templates, setTemplates] = useState([])
    const [templateName, setTemplateName] = useState("")

    const { theme, langauge, style, borderRadius, shadowType, shadowOpacity, width, height, scale, paddingX, paddingY, position, fontSize, lineHeight, } = useStore()

    useEffect(() => {
        // get templates from the local storage

        const templates = localStorage.getItem("templates");
        if (templates) {
            setTemplates(JSON.parse(templates));
        }

    })
    const saveTemplate = () => {

        const newTemplate = {
            id: Date.now(),
            name: templateName,
            theme,
            langauge,
            style,
            borderRadius,
            shadowType,
            shadowOpacity,
            width,
            height,
            scale,
            paddingX,
            paddingY,
            position,
            fontSize,
            lineHeight
        }

        const templates = localStorage.getItem("templates");
        if (templates) {
            const currentTemplates = JSON.parse(templates);
            currentTemplates.push(newTemplate);
            localStorage.setItem("templates", JSON.stringify(currentTemplates));
        } else {
            localStorage.setItem("templates", JSON.stringify([newTemplate]));
        }

        setTemplates([...templates, newTemplate]);

        setTemplateName("")

    }

    return (
        <div className=" w-full absolute max-w-[320px] top-0 right-0 flex p-5 flex-col max-h-screen gap-[15px] ">
            <Header />
            {/* <div className="card !justify-start gap-[15px] h-full w-full py-[15px] flex !flex-col hide-scrollbar overflow-y-scroll">
                <CustomModal isCenter={true} button={
                    <>
                        <span>Save As Template</span>
                        <FaSave size={20} />
                    </>
                }

                    modal={
                        <>
                            <div className=" p-[15px] w-[350px] flex flex-col gap-[15px] font-semibold text-foreground">
                                <p>Template Settings</p>
                                <TemplateName onChange={(e) => { saveTemplate() }} templateName={templateName} setTemplateName={setTemplateName} />
                                <div className=" w-full flex flex-row justify-end items-end ">
                                    <div onClick={() => { saveTemplate() }} className="px-[12px] py-[10px] cursor-pointer flex flex-row justify-between items-center text-black bg-white rounded-btn w-fit hover:opacity-80  gap-[5px] ">
                                        <p className="font-semibold text-sm text-card-foreground">Save</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }

                />

                <div className="flex flex-col justify-start items-start gap-[15px]">

                    {templates.map((template) => {
                        return <TemplateItem data={template} />
                    })}
                </div>



            </div> */}
        </div>
    )
}

export default RightSidebar

const Header = () => {

    const [qaulity, setQuality] = useState("1");
    const [formatt, setFormatt] = useState("png");

    return (
        <div className="border pr-[15px] hover:opacity-90 transition-all cursor-pointer   flex flex-row justify-between items-center text-black bg-white rounded-card">
            <div onClick={() => { exportDivAsImage(parseInt(qaulity), formatt.toLowerCase(), "output") }} className="flex w-full pl-[15px] py-[12px]  flex-row items-center gap-[5px] justify-start">
                <FaArrowDown color="black" size={18} />
                <p className="font-semibold text-base text-card-foreground">Export</p>
                <span className="text-xs text-card-foreground">{qaulity}x</span>
                <span className="text-xs text-card-foreground">.</span>
                <span className="text-xs text-card-foreground">{formatt.toUpperCase()}</span>
            </div>
            <CustomModal isLeft={true} buttonVariant="white" button={<>
                <IoSettingsOutline size={20} />
            </>} modal={<>
                <div className=" p-[15px] w-[300px] flex flex-col gap-[15px] font-semibold text-foreground">
                    <p>Export Settings</p>
                    <ImageFormat setFormatt={setFormatt} formatt={formatt} />
                    <ImageQaulity setQuality={setQuality} quality={qaulity} />
                </div>
            </>} />

        </div>
    )
}


const TemplateItem = ({ data }) => {

    const delTemplate = (id) => {
        const templates = localStorage.getItem("templates");
        if (templates) {
            const currentTemplates = JSON.parse(templates);
            const newTemplates = currentTemplates.filter((template) => template.id !== id);
            localStorage.setItem("templates", JSON.stringify(newTemplates));
        }
    }

    const [hover, setHover] = useState(false);

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut", type: "spring" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
            backgroundImage: "url(https://shots.so/mockups/Screenshot/styles/default.png)"
        }} className="w-full bg-red-500 cursor-pointer relative h-[150px] rounded-btn overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : "100%" }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col justify-end items-center w-full p-3 bg-gradient-to-t scale-110 from-black/80 to-transparent absolute bottom-0 left-0"
            >
                <p className="opacity-80 text-sm">{data?.name || data?.id}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : "100%" }}
                transition={{ duration: 0.2 }}
                className="h-full p-3 scale-110 absolute top-0 right-0"
            >
                <div onClick={() => { delTemplate(data.id) }} className="opacity-80 curswor-pointer text-sm">
                    <MdDeleteOutline size={25} color="red" />
                </div>
            </motion.div>
        </motion.div>
    )
}