import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./Border";
import useStore from "@/store/store";

const Shadow = () => {

    const {
        shadowType,
        setShadowType,
        shadowOpacity,
        setShadowOpacity
    } = useStore()

    return (
        <div className="space-y-1">
            <p className="font-semibold text-xs opacity-50">SHADOW</p>
            <div className="grid grid-cols-3 p-2 z-0 grid-rows-1 rounded-lg bg-background gap-[7px]">
                <ShadowItem
                    shadow={shadowType}
                    setShadow={setShadowType}
                    itemShadow={"none"}
                    name="None"
                />
                <ShadowItem
                    shadow={shadowType}
                    setShadow={setShadowType}
                    itemShadow={"spread"}
                    name="Spread"
                />
                <ShadowItem
                    shadow={shadowType}
                    setShadow={setShadowType}
                    itemShadow={"hug"}
                    name="Hug"
                />
                {/* <ShadowItem
          shadow={shadow}
          setShadow={setShadow}
          itemShadow={"adaptive"}
          name="Adaptive"
        /> */}
            </div>
            <div className="pt-1">
                <Slider
                    name="Opacity"
                    value={shadowOpacity}
                    max={100}
                    min={0}
                    setValue={setShadowOpacity}
                />
            </div>
        </div>
    );
};

export default Shadow;

const ShadowItem = ({
    shadow,
    setShadow,
    itemShadow,
    name,
}) => {
    return (
        <div
            onClick={() => {
                setShadow(itemShadow);
            }}
            className="relative cursor-pointer"
        >
            <div className="z-10 relative inset-0 p-2 flex flex-col justify-center items-center gap-2 w-full rounded-md">
                <img
                    className="rounded-xl size-[35px]"
                    src="https://shots.so/image/border-modes/sharp.png"
                />
                <p
                    className={`text-xs text-center  font-medium ${shadow === itemShadow ? "text-text" : "text-text-secondary"
                        }`}
                >
                    {name}
                </p>
            </div>
            {shadow === itemShadow && (
                <motion.div
                    transition={{
                        duration: 0.2,
                    }}
                    layout
                    layoutId="Shadow"
                    className="bg-card border w-full h-full absolute top-0 rounded-md left-0 z-0"
                />
            )}
        </div>
    );
};
