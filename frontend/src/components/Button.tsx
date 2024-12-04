import { ReactElement } from "react"
 
interface ButtonProps{
    variant :"primary"|"secondary",
    text:string,
    startIcon ?: ReactElement,
    onClick?:()=>void,
    className?:string,
    fullWidth?:boolean,
    loading?:boolean
}

// const variantClasses =(variant)=> {
//     if(variant==='primary'){
//         return 'bg-blue-500 hover:bg-blue-700 text-white font-bold  '
//     }
//     if(variant==='secondary'){
//         return 'bg-gray-500 hover:bg-gray-700 text-white font-bold '
//     }
// }
// const sizeClasses =(size)=> {
//     if(size==='sm'){
//         return 'px-4 py-2 text-sm'
//     }
//     if(size==='md'){
//         return 'px-6 py-3 text-md'
//     }
// }


// const sizeStyles = {
//     "lg":"px-8 py-4 text-xl rounded-xl",
//     "md":"px-4 py-2 text-md rounded-md",
//     "sm":"px-2 py-1 text-sm rounded-sm",
// }

const variantStyles = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600",
};

const defaultStyles = ' px-4 py-2 rounded-md flex items-center m-2';

export function Button(props:ButtonProps){
    return <button onClick ={props.onClick}  className={variantStyles[props.variant] + "" + defaultStyles + "" + `${props.fullWidth?"w-full flex justify-center items-center":""}`}
    >
        {props.startIcon && <>{props.startIcon}</>}
        {props.text}
    </button>
}

