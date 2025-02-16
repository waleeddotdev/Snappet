import { useState } from "react";
import { motion } from "framer-motion"

const ImageQaulity = ({setQuality, quality}) => {


    return (
        <div>
            <p className="font-semibold text-xs opacity-50">IMAGE FORMAT</p>
            <div className="grid mt-1 border grid-cols-3 p-2 z-0 grid-rows-1 rounded-lg bg-background gap-[7px]">
                <ImageQaulityItem
                    quality={quality}
                    setQuality={setQuality}
                    itemQaulity={"1"}
                    name="Standard"
                />
                <ImageQaulityItem
                    quality={quality}
                    setQuality={setQuality}
                    itemQaulity={"2"}
                    name="High"
                />
                <ImageQaulityItem
                    quality={quality}
                    setQuality={setQuality}
                    itemQaulity={"3"}
                    name="Extra"
                />
            </div>
        </div>
    )
}

export default ImageQaulity

const ImageQaulityItem = ({
    quality,
    setQuality,
    itemQaulity,
    name
}) => {
    return (
        <div
            onClick={() => {
                setQuality(itemQaulity);
            }}
            className="relative cursor-pointer"
        >
            <div className="z-10 relative inset-0 p-2 flex flex-col justify-center items-center gap-2 w-full rounded-[5px]">
                <p
                    className={`text-base text-center  font-medium ${quality.toLowerCase() === itemQaulity.toLowerCase() ? "text-text" : "text-text-secondary"
                        }`}
                >
                    {itemQaulity.toUpperCase()}<span className="text-xs font-medium">x</span>
                </p>
                <p className="text-xs text-center font-medium">{name}</p>
            </div>
            {quality === itemQaulity && (
                <motion.div
                    transition={{
                        duration: 0.2,
                    }}
                    layout
                    layoutId="qaulity"
                    className="bg-card border w-full h-full absolute top-0 rounded-[5px] left-0 z-0"
                />
            )}
        </div>
    );
};