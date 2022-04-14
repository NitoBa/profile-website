import { useState } from "react";
import { Modal } from "./modal";

/* eslint-disable @next/next/no-img-element */
export function TechsUsed() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTech, setSelectedTech] = useState<"node" | "react" | "flutter">("node");

    function selectTech(tech: "node" | "react" | "flutter") {
        setSelectedTech(tech);
        setModalIsOpen(true);
    }

    return (
        <>
        { modalIsOpen && (
            <Modal onClose={()=> setModalIsOpen(false)}>
                {
                    selectedTech === "node" && (
                        <p className="text-text-body gap-4">
                            <img src="assets/images/NodeJs.svg" alt="nodejs" className="inline-block" />
                        </p>
                    )
                }
                {
                    selectedTech === "react" && (
                        <p className="text-text-body gap-4">
                            <img src="assets/images/ReactJs.svg" alt="reactjs" className="inline-block" />
                        </p>
                    )
                }
                {
                    selectedTech === "flutter" && (
                        <p className="text-text-body gap-4">
                            <img src="assets/images/Flutter.svg" alt="flutter" className="inline-block" />
                        </p>
                    )
                }
            </Modal>
        )}
        <section id="techs" className="mt-36">
            <h2 className="text-text-title text-3xl">Tecnologias que ultilizo</h2>
            <div className="grid grid-cols-3 mt-16 gap-4">
                <div onClick={() => selectTech('node')} className="cursor-pointer hover:brightness-90 transition-all duration-300 group bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16 transition-all duration-300 group-hover:translate-y-2" src="assets/icons/nodejs.svg" alt="Node Js Icon" />
                    <h1 className="text-text-title">Back End - Node Js</h1>
                </div>
                <div onClick={() => selectTech('react')} className="cursor-pointer hover:brightness-90 transition-all duration-300 group bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16 transition-all duration-300 group-hover:translate-y-2" src="assets/icons/reactjs.svg" alt="React Js Icon" />
                    <h1 className="text-text-title">Front End - React Js</h1>
                </div>
                <div onClick={() => selectTech('flutter')} className="cursor-pointer hover:brightness-90 transition-all duration-300 group bg-background-fg gap-y-5 rounded-2xl flex flex-col items-center justify-center p-4">
                    <img className="w-16 transition-all duration-300 group-hover:translate-y-2" src="assets/icons/flutter.svg" alt="Flutter Icon" />
                    <h1 className="text-text-title">Mobile - Flutter</h1>
                </div>
            </div>
        </section>
        </>
    )
}