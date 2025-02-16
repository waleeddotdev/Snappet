"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import themes from "monaco-themes/themes/themelist";
import { defineTheme } from "@/lib/defineTheme";
import useStore from "@/store/store";
import { motion } from "framer-motion"
import CodeEditor from "../code-editor";
import { set } from "lodash";

const View = () => {
    const [themeColor, setThemeColor] = useState("#1E1E1E");
    const {
        theme,
        setTheme,
        langauge,
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
        lineHeight,
        frameDimension,
        blur,
        noise,
        bgImage,
    } = useStore()


    useEffect(() => {
        console.log("langauge:", langauge);

        function handleThemeChange(th) {
            const theme = th;
            console.log("theme in handleThemeChange", theme);

            if (["light", "vs-dark"].includes(theme)) {
                setTheme(theme);
            } else {
                defineTheme(theme).then((_) => setTheme(theme));
            }
        }

        handleThemeChange(theme);
    }, [theme]);

    const limitRef = useRef(null);

    const editorRef = useRef(null);  // Reference to Monaco editor

    useEffect(() => {
        if (typeof window === "undefined") return;
        // Check if editor is initialized
        if (editorRef.current) {
            const model = editorRef.current.getModel();  // Get the model from the editor
            if (model) {
                monaco.editor.setModelLanguage(model, langauge);  // Set the new language
            }
        }
    }, [langauge]);

    useEffect(() => {
        console.log("typeof window:", typeof window);

        if (typeof window === "undefined") {
            console.log("updateThemeColor: window is undefined");
            return;
        }

        // Function to get the editor theme's background color dynamically
        const updateThemeColor = () => {

            if (typeof window === "undefined") {
                console.log("updateThemeColor: window is undefined");
                return;
            }

            console.log("typeof window:", typeof window);

            const editorElement = document.querySelector(
                ".monaco-editor"
            );
            if (editorElement) {
                const backgroundColor = getComputedStyle(editorElement)
                    .getPropertyValue("background-color");
                setThemeColor(backgroundColor || "#1E1E1E");
            }
        };

        // Update the theme color initially and whenever the theme changes
        updateThemeColor();

        // Optional: Add a mutation observer to listen for theme changes
        const observer = new MutationObserver(updateThemeColor);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [theme]);


    function getBoxShadow(shadowType, shadowOpacity) {
        const shadowMap = {
            none: 'none', // No shadow
            spread: '0px 12px 30px 10px rgba(0, 0, 0, OPACITY)',
            hug: '0px 4px 8px rgba(0, 0, 0, OPACITY)',
        };

        const normalizedOpacity = Math.max(0, Math.min(shadowOpacity, 100)) / 100;

        const boxShadow = (shadowMap[shadowType] || 'none').replace('OPACITY', normalizedOpacity);

        return boxShadow;
    }

    const [scaledWidth, setScaledWidth] = useState(0);
    const [scaledHeight, setScaledHeight] = useState(0);


    const getScaledDimensions = (aspectRatio) => {
        console.log("getScaledDimensions", { aspectRatio, limitRef });
        if (!limitRef.current) return { width: 0, height: 0 }; // Handle edge case where limitRef isn't rendered yet

        const { width: maxWidth, height: maxHeight } = limitRef.current.getBoundingClientRect();
        console.log("getScaledDimensions", { maxWidth, maxHeight });
        const [aspectW, aspectH] = aspectRatio.split(":").map(Number);

        // Start with the best fit width
        let scaledWidth = Math.min(maxWidth, (maxHeight * aspectW) / aspectH);
        let scaledHeight = (scaledWidth / aspectW) * aspectH;

        // Ensure height doesn't exceed maxHeight
        if (scaledHeight > maxHeight) {
            scaledHeight = maxHeight;
            scaledWidth = (scaledHeight / aspectH) * aspectW;
        }

        console.log("getScaledDimensions", { scaledWidth, scaledHeight });
        return { width: scaledWidth, height: scaledHeight };
    };

    useEffect(() => {
        console.log("ScaledDimensions useEffect", { frameDimension, limitRef });

        const { width: scaledWidth, height: scaledHeight } = getScaledDimensions(frameDimension.aspect_ratio);
        setScaledWidth(scaledWidth);
        setScaledHeight(scaledHeight);

        console.log("ScaledDimensions useEffect", { scaledWidth, scaledHeight });

    }, [frameDimension.aspect_ratio, limitRef]);


    return (
        <div
            ref={limitRef}
            style={{
                width: "100%", // Parent takes full width
                height: "80vh", // Adjust this if needed
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >

            <main
                id="myDiv"
                style={{
                    backgroundImage: `url(${bgImage?.value || ""})`,
                    backgroundColor: bgImage.type === "color" ? bgImage.value : "",
                    width: `${scaledWidth}px`,
                    height: `${scaledHeight}px`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="relative flex justify-center overflow-hidden rounded-card items-center p-10"
            >
                <div
                    style={{
                        backdropFilter: `blur(${blur}px)`,
                    }}
                    className="w-full h-full z-0 absolute top-0 left-0"
                />
                <div
                    style={{
                        backgroundImage: `url(/assets/noise.svg)`,
                        backgroundPosition: "center",
                        mixBlendMode: "overlay",
                        opacity: `${noise}%`,
                    }}
                    className="w-full h-full z-0 absolute top-0 left-0"
                />


                <motion.div

                    style={{
                        backgroundColor: themeColor,
                        borderRadius: borderRadius,
                        borderColor: themeColor,
                        boxShadow: getBoxShadow(shadowType, shadowOpacity),
                        width,
                        height,
                        scale,
                        padding: `${paddingY}px ${paddingX}px`,
                        x: position.x - 96,
                        y: position.y - 97

                    }}
                    transition={{ duration: 0.2, style: "smooth", ease: "easeInOut" }}
                    className=" border z-10 overflow-hidden"
                >
                    <div className="p-[20px]">
                        <div className="flex flex-row gap-2">
                            <div className="size-4 rounded-full bg-red-500" />
                            <div className="size-4 rounded-full bg-yellow-500" />
                            <div className="size-4 rounded-full bg-green-500" />
                        </div>

                    </div>
                    <CodeEditor fontSize={fontSize} langauge={langauge} theme={theme} lineHeight={lineHeight} />
                </motion.div>
                <div></div>
            </main>
        </div>
    );
};

export default View;
