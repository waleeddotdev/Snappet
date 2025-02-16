import { IoIosArrowForward } from "react-icons/io";
import Style from "./style";
import Border from "./Border";
import Shadow from "./shadow";
import Size from "./size";
import Font from "./font";
import monacoThemes from "monaco-themes/themes/themelist";
import React, { useState } from "react";
import CustomModal from "@/components/ui/custom-modal";
import * as monaco from "monaco-editor";
import { Button } from "@/components/ui/button";
import useStore from "@/store/store";
import { truncateString } from "@/lib/truncate-string";
import { set } from "lodash";

const Mockup = () => {

    const {
        theme,
        langauge,
        setTheme,
        setLangauge
    } = useStore()

    const [search, setSearch] = useState("");
    const [template, setTemplate] = useState("");

    const langauges = React.useMemo(() => monaco.languages.getLanguages(), []);

    return (
        <>
            <div className="space-y-[25px] h-full pb-[25px]" >
                <div className="space-y-[15px]">
                    <CustomModal button={<>
                        <span>Template <span className="text-card-foreground">- {truncateString(theme, 15)}</span></span>
                        <IoIosArrowForward size={20} />
                    </>}
                        modal={
                            <>
                                <div className="px-[15px] w-full pt-[13px] grid-cols-2 gap-[5px]">
                                    <input value={template} onChange={(e) => setTemplate(e.target.value)} className="bg-card py-2 border-card border rounded-btn h-10 px-4 w-full" placeholder="Search" type="search" />
                                </div>
                                <div className="grid  px-[14px]  py-[13px] grid-cols-3 gap-[0px]">
                                    {Object.entries(monacoThemes).filter(([key]) => template === "" || key.toLowerCase().includes(template.toLowerCase())).map(([key, value]) => (
                                        <ThemeItem key={key} id={key} name={value} theme={theme} setTheme={setTheme} />
                                    ))}
                                </div>
                            </>
                        }
                    />
                    <CustomModal button={<>
                        <span>Langauge <span className="text-card-foreground">- {truncateString(langauge, 15)}</span></span>
                        <IoIosArrowForward size={20} />
                    </>}
                        modal={<>
                            <div className="px-[15px] w-full pt-[13px] grid-cols-2 gap-[5px]">
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-card py-2 border-card border rounded-btn h-10 px-4 w-full" placeholder="Search" type="search" />
                            </div>
                            <div className="grid  px-[15px] pt-[10px] pb-[13px] grid-cols-2 gap-[5px]">
                                {langauges.filter(lan => !lan.id.toLowerCase().includes("freemarker") && (search === "" || lan.id.toLowerCase().includes(search.toLowerCase()))).map((lan, index) => {

                                    if (lan?.id?.toLowerCase().includes("wgsl")) {
                                        return null;
                                    }

                                    if (lan?.aliases?.length >= 1) {
                                        return (
                                            <Button onClick={() => setLangauge(lan.aliases[0].toLowerCase())} className={`bg-card ${langauge === lan.aliases[0].toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                                {lan.aliases[0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                                            </Button>
                                        );
                                    }

                                    if (langauge?.aliases) {
                                        return (
                                            <Button onClick={() => setLangauge(lan.aliases.toLowerCase())} className={`bg-card ${langauge === lan.aliases.toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                                {lan.aliases.map(alias => alias.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())).join(", ")}
                                            </Button>
                                        );
                                    }

                                    return (
                                        <Button onClick={() => setLangauge(lan.id.toLowerCase())} className={`bg-card ${langauge === lan.id.toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                            {lan.id.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                                        </Button>
                                    );
                                })}
                            </div>

                        </>}
                    />

                </div>
                <div className="space-y-[25px]">
                    {/* <Style /> */}
                    <Border />
                    <Shadow />
                    <Size />
                    <Font />
                </div>
            </div>
        </>
    )
}

export default Mockup


const ThemeItem = ({ name, id, theme = "amy", setTheme }) => {
    return (
        <div onClick={() => setTheme(id.toLowerCase())} className={`w-full cursor-pointer transition duration-150 p-3 rounded-btn space-y-2 h-full ${name.toLowerCase() === theme ? "bg-card opacity-100" : "opacity-50 hover:opacity-100"}`}>
            <img
                className="rounded-btn"
                src="https://shots.so/mockups/Screenshot/styles/default.png"
            />
            <div className=" text-center text-xs">
                {name}
            </div>
        </div>
    );
};
