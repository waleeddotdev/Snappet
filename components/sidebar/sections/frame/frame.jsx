import { IoIosArrowForward } from "react-icons/io";
import CustomModal from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";
import { truncateString } from "@/lib/truncate-string";

const Frame = () => {


    return (
        <>
            <div className="space-y-[25px] h-full pb-[25px]" >
                <div className="space-y-[15px]">
                    {/* <CustomModal button={<>
                        <span>Template <span className="text-card-foreground">- {truncateString(theme, 15)}</span></span>
                        <IoIosArrowForward size={20} />
                    </>}
                        modal={<>
                            <div className="grid  px-[15px] py-[13px] grid-cols-3 gap-[0px]">
                                {Object.entries(monacoThemes).map(([key, value]) => (
                                    <ThemeItem key={key} id={key} name={value} theme={theme} setTheme={setTheme} />
                                ))}
                            </div>
                        </>}
                    />
                    <CustomModal button={<>
                        <span>Langauge <span className="text-card-foreground">- {truncateString(langauge, 15)}</span></span>
                        <IoIosArrowForward size={20} />
                    </>}
                        modal={<>
                            <div className="grid  px-[15px] py-[13px] grid-cols-2 gap-[5px]">
                                {langauges.filter(lan => !lan.id.toLowerCase().includes("freemarker")).map((lan, index) => {

                                    if (lan?.aliases?.length >= 1) {
                                        return (
                                            <Button onClick={() => setLangauge(lan.aliases[0].toLowerCase())} className={`bg-card ${langauge === lan.aliases[0].toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                                {lan.aliases[0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                                            </Button>
                                        )
                                    }

                                    if (langauge?.aliases) {
                                        return (
                                            <Button onClick={() => setLangauge(lan.aliases.toLowerCase())} className={`bg-card ${langauge === lan.aliases.toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                                {lan.aliases.map(alias => alias.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())).join(", ")}
                                            </Button>
                                        )
                                    }

                                    return (
                                        <Button onClick={() => setLangauge(lan.id.toLowerCase())} className={`bg-card ${langauge === lan.id.toLowerCase() ? "opacity-100" : "opacity-50"}`} key={index}>
                                            {lan.id.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
                                        </Button>
                                    )
                                })}
                            </div>
                        </>}
                    /> */}

                </div>
                <div className="space-y-[25px]">
                    {/* <Style /> */}
                    {/* <Border />
                    <Shadow />
                    <Size />
                    <Font /> */}
                </div>
            </div>
        </>
    )
}

export default Frame
