
import { InputComponent } from "./Input"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { useRef, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
// controlled Component 


enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}
export function CreateContentModal ({open,onClose}){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();

    const [type,setType] = useState(ContentType.Youtube)

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })


    }

    return <div>
        {open && <div className="bg-slate-400 w-screen h-screen fixed top-0 left-0 opacity-70 flex justify-center">
           <div className="flex flex-col justify-center">
            <span
            className="bg-white opacity-100 p-4 rounded-xl">
                <div className="flex justify-end" onClick={onClose}>
                    <CrossIcon/>
                </div>
                <div>
                    <InputComponent refernce={titleRef} placeholder = {"Title"}/>
                <InputComponent refernce={linkRef} placeholder = {"Link"}/>
                </div>
                
                <div className="flex justify-center items-center">
                <h2>Type</h2>
                    <Button text = "Youtube" variant = {type === ContentType.Youtube ?"primary":"secondary"} onClick={()=>{setType(ContentType.Youtube)}} ></Button>
                    <Button text = "Twitter"  variant = {type === ContentType.Twitter ?"primary":"secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                </div>

                <div className="flex justify-center">
                <Button variant = "primary"
                onClick={addContent} text = "submit"></Button>
                </div>



            </span>
           </div>            
            </div>}
    </div>
}

