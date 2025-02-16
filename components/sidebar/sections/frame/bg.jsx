import { motion } from "framer-motion";
import React from "react";
import useStore from "@/store/store";
import debounce from "lodash/debounce";
import { Slider } from "../mockup/Border";

const Bg = () => {

    const {
        noise,
        blur,
        setNoise,
        setBlur
    } = useStore()

    return (
        <div className="space-y-1">

            <p className="font-semibold text-xs opacity-50">EFFECTS</p>
            <div className="pt-1 flex flex-col gap-2">
                <Slider
                    name="Noise"
                    value={noise}
                    max={100}
                    min={0}
                    setValue={setNoise}
                />
                <Slider
                    name="Blur"
                    value={blur}
                    max={30}
                    min={0}
                    setValue={setBlur}
                />
            </div>
        </div>
    );
};

export default Bg;
