import { useState } from "react"
import { Button } from "./button"
import { AnimatePresence, motion } from "framer-motion"

const CustomModal = ({ button, modal, IsButton = true, buttonVariant, isLeft = false, isCenter = false }) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            {IsButton ? <Button variant={buttonVariant} onClick={() => setOpen(!open)}>
                {button}
            </Button> : <div onClick={() => setOpen(!open)}> {button} </div>}

                {!isCenter ? <AnimatePresence className="relative" presenceAffectsLayout={false} mode="wait">
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
                            style={{
                                right: isLeft ? "0px" : "auto",
                            }}
                            className={`fixed  translate-y-2  z-[100]`}>
                            <div className="bg-btn border border-[#2f2f2f] overflow-scroll h-full hide-scrollbar backdrop-blur-lg rounded-card max-w-[400px] max-h-[500px]">
                                {/* <div className="overflow-scroll h-full hide-scrollbar"> */}
                                {modal}
                                {/* </div> */}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence> :
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
                                onClick={() => setOpen(false)}
                                className={`fixed flex justify-center items-center w-full h-full top-0 left-0   z-[100]`}>
                                <div onClick={(e) => e.stopPropagation()} className="bg-btn border  border-[#2f2f2f] overflow-scroll h-fit hide-scrollbar backdrop-blur-lg rounded-card max-w-[400px] max-h-[500px]">
                                    {modal}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                }
                <AnimatePresence presenceAffectsLayout={false} mode="wait">
                    {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed bg-black/5 backdrop-blur-sm z-[50] w-screen h-screen top-0 left-0" />}
                </AnimatePresence>
            </div>
    )
}

            export default CustomModal