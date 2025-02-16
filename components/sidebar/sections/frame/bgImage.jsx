import { color, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useStore from "@/store/store";
import { IoImage } from "react-icons/io5";
import { FaUnsplash } from "react-icons/fa";
import CustomModal from "@/components/ui/custom-modal";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { Upload } from "lucide-react";
import { FiUpload } from "react-icons/fi";


const BgImage = () => {

    const [color, setColor] = useState("#ffffff")
    const [firstTime, setFirstTime] = useState(true)
    const {
        bgImage,
        setBgImage
    } = useStore()

    useEffect(() => {
        if(firstTime){
            setFirstTime(false)
            return
        }
        setBgImage({ type: "color", value: color })
    }, [color])

    function selectImageFile() {
        return new Promise((resolve, reject) => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/png, image/jpeg, image/jpg"; // Restrict file types

            input.onchange = (event) => {
                const file = event.target.files[0];

                if (!file) {
                    reject("No file selected");
                    return;
                }

                // Create a URL for the selected file
                const imageUrl = URL.createObjectURL(file);
                resolve(imageUrl);
            };

            input.click(); // Open file picker
        });
    }


    return (
        <div className="space-y-1">
            <p className="font-semibold text-xs opacity-50">BACKGROUND</p>
            <div className="grid grid-cols-4 z-0 grid-rows-1 rounded-lg  gap-[5px]">
                <BgItem
                    icon={<img className="w-[25px] opacity-95" src="/assets/transparent.png" />}
                    name="Trans"
                    onClick={() => setBgImage({ type: "transparent", value: "none" })}
                />
                <CustomModal
                    IsButton={false}
                    button={<>
                        <BgItem
                            icon={<div className="size-[25px] rounded-full opacity-95" style={{ backgroundColor: color }}></div>}
                            name="Color" />
                    </>}
                    modal={<>
                        <div className="p-[15px] space-y-2">
                            <HexColorPicker color={color} onChange={setColor} />
                            <input value={color} prefix="#" onChange={(e) => setColor(e.target.value)} className="bg-card  py-2 border-card border rounded-btn h-10  w-full" placeholder="Hex Code" type="text" />
                        </div>
                    </>} />
                <CustomModal
                    button={
                        <BgItem
                            icon={<IoImage size={25} className=" opacity-95" />}
                            name="Image"
                        />
                    }
                    IsButton={false}
                    modal={<>
                        <div className="p-[15px] flex flex-col justify-center items-center gap-[5px] space-y-2">
                            <input onChange={(e) => setBgImage({ type: "image", value: e.target.value })} value={bgImage.url} className="bg-card px-4 py-2 border-card border rounded-btn h w-full" placeholder="Image URL" type="search" />
                            <div onClick={async () => { const imageUrl = await selectImageFile(); setBgImage({ type: "image", value: imageUrl }) }} className="p-2 w-full flex justify-center gap-2 font-semibold items-center rounded-btn cursor-pointer bg-white text-black">
                                <FiUpload color="black" size={20} /> Upload
                            </div>
                        </div>
                    </>}
                />
                <BgItem
                    icon={<FaUnsplash size={25} className=" opacity-95" />}
                    name="Unsplash"
                />
            </div>

        </div>
    );
};

export default BgImage;

const BgItem = ({
    icon,
    name,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer"
        >
            <div className="z-10 relative inset-0  flex flex-col justify-center items-center gap-2 w-full rounded-md">
                <div className="p-3 rounded-xl bg-background hover:bg-btn  transition-colors overflow-hidden justify-center items-center flex">
                    {icon}
                </div>
                <p
                    className={`text-xs text-center  font-medium 
                        }`}
                >
                    {name}
                </p>
            </div>

        </div>
    );
};
