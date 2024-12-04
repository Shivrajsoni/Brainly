



// Always Use First letter UpperCase for Declaration

import { useState } from "react"
import { Button } from "../components/Button"
import { CardComponent } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModel"
import { PlusIcon  } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { SideBar } from "../components/SideBar"
export function Dashboard() {

  const [modalOpen , setModalOpen] = useState(true);
  return (
    <div>
      <div>
        <SideBar/>
      </div>
      <div className="p-4 pl-72 bg-gray-100 h-screen">
      <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}} />
      <div className="flex justify-end gap-4">
      <Button text= "Connect" variant="secondary" startIcon={<ShareIcon/>}></Button>
      <Button text= "Add" onClick ={()=>setModalOpen(true)} variant="primary" startIcon={<PlusIcon/>}></Button>
      </div>
      
    
    <div className="flex gap-4 pt-4">
    <CardComponent cardType="Youtube" cardTitle="First Youtube" cardLink="https://www.youtube.com/watch?v=r1Bi10Xt0fc"/>

    <CardComponent cardType="Youtube" cardTitle="First Youtube" cardLink="https://www.youtube.com/watch?v=r1Bi10Xt0fc"/>


    </div>

      

    </div>

    </div>

    
   )
}
