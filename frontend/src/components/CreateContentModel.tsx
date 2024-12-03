
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
// controlled Component 
export function CreateContentModal ({open,onClose}){
    return <div>
        {open && <div className="bg-slate-400 w-screen h-screen fixed top-0 left-0 opacity-70 flex justify-center">
           <div className="flex flex-col justify-center">
            <span
            className="bg-white opacity-100 p-4 rounded-xl">
                <div className="flex justify-end">
                    <div onClick={onClose}>
                    <CrossIcon/>
                    </div>
                    
                </div>
                <div>
                    <InputComponent placeholder = {"Title"}/>
                    <InputComponent placeholder = "Link"/>
                </div>
                <div className="flex justify-center">
                <Button variant = "primary" text = "submit"></Button>
                </div>



            </span>
           </div>            
            </div>}
    </div>
}

function InputComponent({onChange,placeholder}: {onChange:()=>void}){
    return <div>
        <input placeholder = {placeholder} className="px-4 py-2 m-2"
        onChange = {onChange} 
        ></input>
    </div>
}