import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./Border";
import useStore from "@/store/store";

const Font = () => {

    const { fontSize, setFontSize, lineHeight, setLineHeight } = useStore()

    return (
        <div className="space-y-1">
            <p className="font-semibold text-xs opacity-50">FONT</p>
            <div className="pt-1 space-y-2">
                <Slider
                    name="Font Size"
                    value={fontSize}
                    max={35}
                    min={10}
                    setValue={setFontSize}
                />
                <Slider
                    name="Line Height"
                    value={lineHeight}
                    max={3}
                    min={0.1}
                    step={0.1}
                    setValue={setLineHeight}
                />
            </div>
        </div>
    );
};

export default Font;
