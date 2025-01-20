import useStore from "@/store/store";
import { motion } from "framer-motion";
import React from "react";

const Border = () => {
    const {
        borderRadius,
        setBorderRadius
    } = useStore()

    return (
        <div className="space-y-1">
            <p className="font-semibold text-xs opacity-50">BORDER</p>
            <div className="grid border grid-cols-3 p-2 z-0 grid-rows-1 rounded-lg bg-background gap-[7px]">
                <BorderItem
                    borderRadius={borderRadius}
                    setBorderRadius={setBorderRadius}
                    itemborderRadius={0}
                    name="Sharp"
                />
                <BorderItem
                    borderRadius={borderRadius}
                    setBorderRadius={setBorderRadius}
                    itemborderRadius={20}
                    name="Curved"
                />
                <BorderItem
                    borderRadius={borderRadius}
                    setBorderRadius={setBorderRadius}
                    itemborderRadius={40}
                    name="Round"
                />
            </div>
            <div className="pt-1">
                <Slider
                    name="Radius"
                    value={borderRadius}
                    max={40}
                    min={0}
                    setValue={setBorderRadius}
                />
            </div>
        </div>
    );
};

export default Border;

const BorderItem = ({
    borderRadius,
    setBorderRadius,
    itemborderRadius,
    name,
}) => {
    return (
        <div
            onClick={() => {
                setBorderRadius(itemborderRadius);
            }}
            className="relative cursor-pointer"
        >
            <div className="z-10 relative inset-0 p-2 flex flex-col justify-center items-center gap-2 w-full rounded-[5px]">
                <img
                    className="rounded-xl size-[35px]"
                    src="https://shots.so/image/border-modes/sharp.png"
                />
                <p
                    className={`text-xs text-center  font-medium ${borderRadius === itemborderRadius ? "text-text" : "text-text-secondary"
                        }`}
                >
                    {name}
                </p>
            </div>
            {borderRadius === itemborderRadius && (
                <motion.div
                    transition={{
                        duration: 0.2,
                    }}
                    layout
                    layoutId="border"
                    className="bg-card border w-full h-full absolute top-0 rounded-[5px] left-0 z-0"
                />
            )}
        </div>
    );
};


export const Slider = ({
    value,
    setValue,
    max,
    min,
    name,
    step = 1,
}) => {
    return (
        <div className="w-full cursor-pointer group rounded-lg relative border ">
            <input
                className="w-full opacity-100 transition duration-150 group-hover:opacity-80 cursor-pointer slider absolute top-0 z-[10]"
                type="range"
                value={value}
                step={step}
                onChange={(e) => {
                    if (step < 1) {
                        setValue(e.target.value)
                    } else {
                        setValue(parseInt(e.target.value))
                    }
                }}
                min={min}
                max={max}
            ></input>
            <div className="w-full relative h-[30px] overflow-hidden rounded-lg bg-background">
                <div className="w-full select-none pointer-events-none z-[10] relative h-full px-2 flex flex-row justify-between items-center">
                    <span className="text-xs text-text opacity-50">{name}</span>
                    <span className="text-xs text-text opacity-50">{value}</span>
                </div>
                <motion.div
                    style={{
                        width: `${((value - min) / (max - min)) * 100}%`,
                    }}
                    className="w-full group-hover:opacity-80 transition duration-150 opacity-100 rounded-r-lg select-none z-[5] absolute top-0 h-[30px] bg-btn"
                />
            </div>
        </div>
    );
};
