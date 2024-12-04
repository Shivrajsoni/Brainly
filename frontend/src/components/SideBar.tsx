import { Sidebaritem } from "./Sidebaritem"
import { Twittericon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import BrainlyLogo from "../icons/BrainlyLogo"
export const SideBar= ()=>{
    return  <div className="min-h-screen fixed border-r-8 w-72 bg-white left-0 top-0">
        <div className="text-3xl font-mono pl-5 pt-5 flex gap-5 items-center hover:cursor-pointer ">
            BRAINLY 
            {<BrainlyLogo/>}
        </div>
        <div className="pt-4 ">
       <Sidebaritem text = {"Youtube"} icon  ={<YoutubeIcon/>}/>
       <Sidebaritem text ={"Twitter"} icon = {<Twittericon/>} />
    </div>

    </div>
    

}