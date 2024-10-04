import React from "react";
import Card from "./components/card";
import Image from "next/image";
import background from "../app/image/background.jpg";
import model from "../app/image/model.png";
import flower from "../app/image/flower.jpg"

export default function Home() {
    return (
        <div>
            <Image
                src={background}
                alt="card-background-image"
                className="fixed
             m-h-full w-full h-full  object-cover min:w-full max:h-[full]: sm:w-[full] sm:h-[full] md:w-[full] md:h-[full]  lg-h-[full] "
            />

            {/* Container for Cards */}
            <div className="flex flex-wrap justify-center items-center gap-5 pt-52 p-4">
                {/* Card 1 */}
                <div className="relative w-full sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-105">
                    {/* Flower Image (Initial view) */}
                    <div className="bg-orange-200 rounded-lg shadow-lg">
                        <Image
                            src={flower}
                            alt="flower"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                        />
                    </div>

                    <div className="absolute inset-0 bg-orange-200 rounded-lg shadow-lg p-5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center">
                        <Image
                            src={model}
                            alt="dummy"
                            className="w-[90px] h-[90px] rounded-full mb-4"
                        />
                        <Card
                            name="Hamza"
                            rollno={892}
                            day="Sunday 7-10"
                            teachers="SIR MUBASHIR"
                        />
                    </div>
                </div>

                {/* Card for Faizan */}
                <div className="relative w-full sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-105">
                    <div className="bg-orange-200 rounded-lg shadow-lg">
                        <Image
                            src={flower}
                            alt="flower"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
                        />
                    </div>
                    <div className="absolute inset-0 bg-orange-200 rounded-lg shadow-lg p-5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px]">
                        <Image
                            src={model}
                            alt="dummy"
                            className="w-[90px] h-[90px] rounded-full mb-4"
                        />
                        <Card
                            name="Faizan"
                            rollno={5739}
                            day="Monday 9-12"
                            teachers="SIR NAEEM"
                        />
                    </div>
                </div>

                {/* Card for Aabir */}
                <div className="relative w-full sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-105">
                    <div className="bg-orange-200 rounded-lg shadow-lg">
                        <Image
                            src={flower}
                            alt="flower"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0 sm:w-[300px] md:w-[250px] lg:w-[300px] "
                        />
                    </div>
                    <div className="absolute inset-0 bg-orange-200 rounded-lg shadow-lg p-5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px]">
                        <Image
                            src={model}
                            alt="dummy"
                            className="w-[90px] h-[90px] rounded-full mb-4"
                        />
                        <Card
                            name="Aabir"
                            rollno={873}
                            day="Tuesday 2-5"
                            teachers="SIR ALI JAWWAD"
                        />
                    </div>
                </div>

                {/* Card for Arun */}
                <div className="relative w-full sm:w-[300px] md:w-[250px] lg:w-[300px] h-[300px] transition-transform duration-300 transform hover:scale-105">
                    <div className="bg-orange-200 rounded-lg shadow-lg">
                        <Image
                            src={flower}
                            alt="flower"
                            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-0 sm:w-[300px] md:w-[250px] lg:w-[300px] "
                        />
                    </div>
                    <div className="absolute inset-0 bg-orange-200 rounded-lg shadow-lg p-5 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center">
                        <Image
                            src={model}
                            alt="dummy"
                            className="w-[90px] h-[90px] rounded-full mb-4"
                        />
                        <Card
                            name="Arun"
                            rollno={873}
                            day="Wednesday 7-10"
                            teachers="SIR HAMZA SYED"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
