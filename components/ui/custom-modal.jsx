import { useState } from "react"
import { Button } from "./button"
import { AnimatePresence, motion } from "framer-motion"

const CustomModal = ({ button, modal }) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button onClick={() => setOpen(!open)}>
                {button}
            </Button>
            <AnimatePresence className="relative" presenceAffectsLayout={false} mode="wait">
                {open && (
                    <motion.div
                        layout
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(20px)",
                            transition: { type: "smooth", duration: 0.2 }
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(20px)",
                            transition: { type: "smooth", duration: 0.2 }
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: { type: "smooth", duration: 0.2 }
                        }}
                        className=" fixed  translate-y-2  z-[100]">
                        <div className="bg-btn border border-[#2f2f2f] backdrop-blur-lg rounded-card w-[400px] h-[500px]">
                            <div className="overflow-scroll h-full hide-scrollbar">
                                {/* <div className="grid  px-[15px] py-[13px] grid-cols-3 gap-[0px]">
                                    {Object.entries(monacoThemes).map(([key, value]) => (
                                        <ThemeItem key={key} name={value} theme={theme} setTheme={setTheme} />
                                    ))}
                                </div> */}
                                {modal}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {open && <div onClick={() => setOpen(false)} className="fixed bg-transparent z-[50] w-screen h-screen top-0 left-0" />}
        </div>
    )
}

export default CustomModal