import { useState } from "react";
import { motion } from "framer-motion"

const ImageFormat = ({ formatt, setFormatt }) => {
    return (
        <div>
            <p className="font-semibold text-xs opacity-50">IMAGE FORMAT</p>
            <div className="grid mt-1 border grid-cols-2 p-2 z-0 grid-rows-1 rounded-lg bg-background gap-[7px]">
                <ImageFormattItem
                    formatt={formatt}
                    setFormatt={setFormatt}
                    itemFormatt={"png"}
                />
                <ImageFormattItem
                    formatt={formatt}
                    setFormatt={setFormatt}
                    itemFormatt={"jpeg"}
                />

            </div>
        </div>
    )
}

export default ImageFormat

const ImageFormattItem = ({
    formatt,
    setFormatt,
    itemFormatt,
}) => {
    return (
        <div
            onClick={() => {
                setFormatt(itemFormatt);
            }}
            className="relative cursor-pointer"
        >
            <div className="z-10 relative inset-0 p-2 flex flex-col justify-center items-center gap-2 w-full rounded-[5px]">
                <p
                    className={`text-sm text-center  font-semibold ${formatt.toLowerCase() === itemFormatt.toLowerCase() ? "text-text" : "text-text-secondary"
                        }`}
                >
                    {itemFormatt.toUpperCase()}
                </p>
            </div>
            {formatt === itemFormatt && (
                <motion.div
                    transition={{
                        duration: 0.2,
                    }}
                    layout
                    layoutId="format"
                    className="bg-card border w-full h-full absolute top-0 rounded-[5px] left-0 z-0"
                />
            )}
        </div>
    );
};