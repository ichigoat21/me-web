import type { ReactElement } from "react";
import { ArrowIcon } from "../icons/arrow";
import { Githubv2Icon } from "../icons/githubv2";

interface projectProps{
    variant : "light-blue" | "blue" | "dark-blue"
    name : string,
    heading : string,
    descript : string,
    image : ReactElement,
    github : string,
    live : string
}

const variantStyle = {
    "light-blue" : "bg-blue-500",
    "blue" : "bg-blue-600",
    "dark-blue" : "bg-blue-700"
}


export function ProjectSection({variant, name, heading, descript, image, github, live}: projectProps){
    return <div
    className="grid md:grid-cols-2 grid-cols-1 mx-4 md:mx-8 my-6 my:12 justify-center items-center space-x-8"
    ><div className={`flex
                flex-col
                items-center
                justify-center
                w-80 md:w-150 h-60 md:h-100 px-6 py-4
                ${variantStyle[variant]}
                rounded-md
                transition
                delay-150 duration-200 ease-in-out
                hover:bg-blue-500
                hover:scale-105 
                space-y-6`}
              >
           <div className="w-full flex flex-col justify-center items-center">
            <div>
              <p className="font-display text-lg">{name}</p> 
            </div>
            <p className="text-xs">{heading} </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            {image}
        </div>
    </div>
    <div>
        <div className="w-80 md:w-150 h-60 bg-black flex flex-col items-center justify-center">
            <p className="text-white font-display text-lg overflow-hidden">
            {descript}
            </p>
            <div className="w-full flex items-center justify-center text-white text-sm space-x-2 my-3">
                <div className="flex items-center justify-center cursor-pointer hover:bg-gray-900">
                <a href={`${github}`}target="_blank"> <Githubv2Icon/></a>
                <a href={`${github}`} target="_blank">Github</a>
                </div>
                <div className="flex items-center justify-center cursor-pointer hover:bg-gray-900">
                <a href={`${live}`} target="_blank"> <ArrowIcon/></a>
                 <a href={`${live}`} target="_blank">Live Link</a>
                </div>
            
            </div>
        </div>
    </div>
    </div> 
}