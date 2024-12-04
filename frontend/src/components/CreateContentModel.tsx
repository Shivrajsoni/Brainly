
import { InputComponent } from "./Input"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
// controlled Component 
export function CreateContentModal ({open,onClose}){
    return <div>
        {open && <div className="bg-slate-400 w-screen h-screen fixed top-0 left-0 opacity-70 flex justify-center">
           <div className="flex flex-col justify-center">
            <span
            className="bg-white opacity-100 p-4 rounded-xl">
                <div className="flex justify-end" onClick={onClose}>
                    <CrossIcon/>
                    
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

