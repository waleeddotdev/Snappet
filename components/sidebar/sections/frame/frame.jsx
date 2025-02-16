import { IoIosArrowForward } from "react-icons/io";
import CustomModal from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";
import { truncateString } from "@/lib/truncate-string";
import { useState } from "react";
import useStore from "@/store/store";
import Bg from "./bg";
import BgImage from "./bgImage";

const Frame = () => {

    const dimensions = {
        "general": [
            { name: "default", "aspect_ratio": "16:9", "width": 1920, "height": 1080 },
            { name: "default", "aspect_ratio": "3:2", "width": 1920, "height": 1280 },
            { name: "default", "aspect_ratio": "4:3", "width": 1920, "height": 1440 },
            { name: "default", "aspect_ratio": "5:4", "width": 1920, "height": 1536 },
            { name: "default", "aspect_ratio": "1:1", "width": 1920, "height": 1920 },
            { name: "default", "aspect_ratio": "4:5", "width": 1080, "height": 1350 },
            { name: "default", "aspect_ratio": "3:4", "width": 1080, "height": 1440 },
            { name: "default", "aspect_ratio": "2:3", "width": 1080, "height": 1620 },
            { name: "default", "aspect_ratio": "9:16", "width": 1080, "height": 1920 }
        ],
        "platforms": {
            "Instagram": [
                { "name": "Post", "aspect_ratio": "1:1", "width": 1080, "height": 1080 },
                { "name": "Portrait", "aspect_ratio": "4:5", "width": 1080, "height": 1350 },
                { "name": "Story", "aspect_ratio": "9:16", "width": 1080, "height": 1920 }
            ],
            "Twitter": [
                { "name": "Tweet", "aspect_ratio": "16:9", "width": 1200, "height": 675 },
                { "name": "Cover", "aspect_ratio": "3:1", "width": 1500, "height": 500 }
            ],
            "Dribbble": [
                { "name": "Shot", "aspect_ratio": "4:3", "width": 2800, "height": 2100 }
            ],
            "YouTube": [
                { "name": "Banner", "aspect_ratio": "16:9", "width": 2560, "height": 1440 },
                { "name": "Thumbnail", "aspect_ratio": "16:9", "width": 1280, "height": 720 },
                { "name": "Video", "aspect_ratio": "16:9", "width": 1920, "height": 1080 }
            ]
        }
    }

    // const [frameDimension, setFrameDimension] = useState({ name: "default", aspect_ratio: "16:9", width: 1920, height: 1080 });

    const { frameDimension, setFrameDimension } = useStore()
    const [custom, setCustom] = useState({ width: frameDimension.width, height: frameDimension.height })

    const checkAndSetCustomDimension = (customWidth, customHeight, minWidth, maxWidth, minHeight, maxHeight) => {
        if (customWidth >= minWidth && customWidth <= maxWidth && customHeight >= minHeight && customHeight <= maxHeight) {
            // Handle edge case for zero height
            if (customHeight === 0) {
                setFrameDimension({
                    name: "custom",
                    aspect_ratio: "1:1",
                    width: customWidth,
                    height: customHeight
                });
                return;
            }

            // Function to calculate the greatest common divisor
            const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

            // Get the simplified aspect ratio
            const divisor = gcd(customWidth, customHeight);
            const aspectRatio = `${customWidth / divisor}:${customHeight / divisor}`;

            setFrameDimension({
                name: "custom",
                aspect_ratio: aspectRatio,
                width: customWidth,
                height: customHeight
            });
        } else {
            alert("Custom dimensions exceed the allowed limits.");
        }
    };

    return (
        <>
            <div className="space-y-[25px] h-full pb-[25px]" >
                <div className="space-y-[15px]">
                    <CustomModal button={<>
                        <span>{frameDimension.name.charAt(0).toUpperCase() + frameDimension.name.slice(1)} <span className="text-card-foreground">- {frameDimension.aspect_ratio}</span></span>
                        <IoIosArrowForward size={20} />
                    </>}
                        modal={<>
                            <div className="  px-[15px] py-[13px]  ">
                                <div className="flex items-center space-x-2">
                                    <input
                                        value={custom.width}
                                        onChange={(e) => setCustom({ width: e.target.value, height: custom.height })}
                                        className="bg-card py-2 border-card border rounded-btn h-10 px-4 w-1/2"
                                        type="number"
                                        min={400}
                                        max={10000}
                                    />
                                    <input
                                        value={custom.height}
                                        onChange={(e) => setCustom({ width: custom.width, height: e.target.value })}
                                        className="bg-card py-2 border-card border rounded-btn h-10 px-4 w-1/2"
                                        type="number"
                                        min={400}
                                        max={10000}
                                    />
                                    <div
                                        onClick={() => checkAndSetCustomDimension(custom.width, custom.height, 400, 10000, 400, 10000)}
                                        className="text-xs font-semibold cursor-pointer bg-white rounded-btn h-full px-2 text-black py-2"
                                    >
                                        Set
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-[15px]">
                                    {dimensions.general.map((dimension, index) => (
                                        <div className="w-full" key={index}>
                                            <DimensionItem frameDimension={frameDimension} setFrameDimension={setFrameDimension}  {...dimension} />
                                        </div>
                                    ))}
                                </div>
                                {Object.entries(dimensions.platforms).map(([platform, dimensions]) => (
                                    <div key={platform} className="mt-5">
                                        <h3 className="text-base">{platform}</h3>
                                        <div className="mt-2 border-b border-card-foreground" />
                                        <div className="grid grid-cols-3 gap-[15px] mt-2">
                                            {dimensions.map((dimension, index) => (
                                                <div className="w-full" key={index}>
                                                    <DimensionItem frameDimension={frameDimension} setFrameDimension={setFrameDimension} {...dimension} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </>}
                    />

                </div>
                <div className="space-y-[25px]">
                    <BgImage/>
                    <Bg />
                </div>
            </div>
        </>
    )
}

export default Frame


const DimensionItem = ({ name, height, width, aspect_ratio, frameDimension, setFrameDimension }) => {
    const isSelected = frameDimension.width === width && frameDimension.height === height && frameDimension.name === name;

    return (
        <div
            className={`w-full h-28 hover:bg-card flex flex-col justify-between items-center rounded-md transition-colors cursor-pointer space-y-1 p-2 ${!isSelected ? 'opacity-50' : ''}`}
            onClick={() => setFrameDimension({ name, aspect_ratio, width, height })}
        >
            <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                <div className="max-h-24 h-full w-full flex justify-center items-center">
                    <div
                        className="flex justify-center m-auto border border-[#6b6b6b] max-h-full items-center text-base rounded-md overflow-hidden"
                        style={{
                            aspectRatio: aspect_ratio.replace(':', '/'),
                        }}
                    >
                        <div className="m-2">
                            {aspect_ratio}
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs">{width} x {height}</p>
            </div>
        </div>
    );
}
