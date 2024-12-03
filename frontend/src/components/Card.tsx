
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    cardTitle?:string;
    cardLink?:string;
    cardType:"twitter"|"Youtube";
} 

export const CardComponent = (props:CardProps) =>{
    return <div className="bg-white rounded-md p-2 shadow-md border-r border-gray-200 max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between ">
            <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
                <ShareIcon/>
            </div>
            {props.cardTitle}
            </div>

            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <ShareIcon/>
                </div>
                <div className="text-gray-500">
                    <a href = {props.cardLink} target ="_blank">
                    <ShareIcon/>
                    </a>
                </div>
            </div>
        </div>

        <div>
                    {props.cardType ==="twitter"  &&
                    <blockquote className="twitter-tweet">
                     <a href= {props.cardLink}></a>
                    </blockquote>}

                    {props.cardType === "Youtube" &&  <iframe   className= "w-full"src={props.cardLink?.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} 
                    
        </div>


    </div>
}