"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import themes from "monaco-themes/themes/themelist";
import { defineTheme } from "@/lib/defineTheme";
import useStore from "@/store/store";
import { motion } from "framer-motion"
import CodeEditor from "../code-editor";

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
        lineHeight
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

    const editorRef = useRef(null);  // Reference to Monaco editor

    useEffect(() => {
        // Check if editor is initialized
        if (editorRef.current) {
            const model = editorRef.current.getModel();  // Get the model from the editor
            if (model) {
                monaco.editor.setModelLanguage(model, langauge);  // Set the new language
            }
        }
    }, [langauge]);

    useEffect(() => {
        // Function to get the editor theme's background color dynamically
        const updateThemeColor = () => {
            const editorElement = document.querySelector(
                ".monaco-editor"
            );
            if (editorElement) {
                const backgroundColor = window
                    .getComputedStyle(editorElement)
                    .getPropertyValue("background-color");
                setThemeColor(backgroundColor || "#1E1E1E"); // Fallback if the color can't be fetched
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




    return (
        <main
            style={{
                backgroundImage:
                    "url(https://assets.shots.so/original/desktop/sonoma-light.jpg)",
            }}
            className="bg-text-secondary bg-cover relative flex flex-row justify-center items-center overflow-hidden p-10 bg-no-repeat bg-center rounded-card w-full h-[70vh]"
        >
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
                className=" border overflow-hidden"
            >
                <div className="p-[20px]">
                    <div className="flex flex-row gap-2">
                        <div className="size-4 rounded-full bg-red-500" />
                        <div className="size-4 rounded-full bg-yellow-500" />
                        <div className="size-4 rounded-full bg-green-500" />
                    </div>

                </div>
                <CodeEditor fontSize={fontSize} langauge={langauge} theme={theme} lineHeight={lineHeight}  />
            </motion.div>
            <div></div>
        </main>
    );
};

export default View;
