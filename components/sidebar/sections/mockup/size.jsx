import { motion } from "framer-motion";
import React from "react";
import { Slider } from "./Border";
import useStore from "@/store/store";
import debounce from "lodash/debounce";

const Size = () => {

    const {
        width,
        setWidth,
        height,
        setHeight,
        scale,
        setScale,
        paddingX,
        setPaddingX,
        paddingY,
        setPaddingY,
        position,
        setPosition
    } = useStore()

    return (
        <div className="space-y-1">

            <p className="font-semibold text-xs opacity-50">SIZE & POSITION</p>
            <div className="pt-1 flex flex-col gap-2">
                <Slider
                    name="Width"
                    value={width}
                    max={800}
                    min={100}
                    setValue={setWidth}
                />
                <Slider
                    name="Height"
                    value={height}
                    max={800}
                    min={100}
                    setValue={setHeight}
                />
                <Slider
                    name="Scale"
                    value={scale}
                    max={5}
                    step={0.1}
                    min={0}
                    setValue={setScale}
                />
                <Slider
                    name="Padding X"
                    value={paddingX}
                    max={50}
                    step={1}
                    min={0}
                    setValue={setPaddingX}
                />
                <Slider
                    name="Padding Y"
                    value={paddingY}
                    max={50}
                    step={1}
                    min={0}
                    setValue={setPaddingY}
                />
                <div>
                    <Position position={position} setPosition={setPosition} />
                </div>
            </div>
        </div>
    );
};

export default Size;

const Position = ({ position, setPosition }) => {
    const constraintRef = React.useRef(null);
    const ref = React.useRef(null);
    const initialPosition = { x: 192 / 2, y: 194 / 2 };
    // const [position, setPosition] = React.useState(initialPosition);



    const handleDrag = (_event, info) => {
        const transform = ref.current?.style.transform;
        if (transform) {
            const matches = transform.match(
                /translateX\((\d+)px\)\s+translateY\((\d+)px\)/
            );
            if (matches) {
                setPosition({
                    x: matches[1] ? parseInt(matches[1], 10) : 0,
                    y: matches[2] ? parseInt(matches[2], 10) : 0,
                });
            }
        }
        if (transform === "none") {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleReset = () => {
        setPosition(initialPosition);
    };



    return (
        <>
            <div
                ref={constraintRef}
                className="w-full rounded-xl overflow-hidden pattern bg-background relative h-[250px]"
            >
                <motion.div
                    drag
                    ref={ref}
                    transition={{ type: "smooth" }}
                    dragElastic={0}
                    dragMomentum={false}
                    dragConstraints={constraintRef}
                    className="size-14 z-10 absolute bg-card rounded-full border border-btn"
                    style={{
                        cursor:
                            position.x !== initialPosition.x ||
                                position.y !== initialPosition.y
                                ? "grabbing"
                                : "pointer",
                    }}
                    onDrag={debounce(handleDrag, 2.5)}
                    initial={{ x: position.x, y: position.y }}
                    animate={{ x: position.x, y: position.y }}
                    whileHover={{ cursor: "grab" }}
                    whileDrag={{ cursor: "grabbing" }}
                />

                <div className="absolute bottom-2 left-2 text-xs text-card-foreground">
                    x: {position.x}, y: {position.y}
                </div>
            </div>
            <button
                onClick={handleReset}
                disabled={
                    position.x === initialPosition.x || position.y === initialPosition.y
                }
                className="bg-btn border border-[#2f2f2f] w-full mt-2  text-center text-xs hover:bg-btn-hover px-[5px] rounded-lg py-2"
            >
                <p
                    className={`text-text ${position.x !== initialPosition.x || position.y !== initialPosition.y
                        ? "opacity-100 cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                        }`}
                >
                    Reset
                </p>
            </button>
        </>
    );
};
