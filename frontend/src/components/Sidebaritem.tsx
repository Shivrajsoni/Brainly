import { ReactElement } from "react"

interface Sidebaritemprops {
    text:string,
    icon:ReactElement
}
export const Sidebaritem = (props:Sidebaritemprops) =>{
    return <div className="flex items-center p-4 gap-4 m-4 hover:bg-gray-200 cursor-pointer  hover:font-bold ">
         {props.icon}
        {props.text}
       
    </div>
}