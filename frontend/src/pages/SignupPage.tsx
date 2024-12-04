import { InputComponent } from "../components/Input"
import { Button } from "../components/Button"
import { useRef } from "react"
import axios from "axios";
import { BACKEND_URL} from "../config"
import { useNavigate } from "react-router-dom";
export function SignupPage() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    console.log(usernameRef.current?.value);
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            data:{
                username,
                password
            }
        })
        alert("User Signup Successfully");
        navigate("/signin");

    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center rounded-md">
        <div className = " rounded=xl border min-w-48 bg-slate-50">
            <InputComponent refernce = {usernameRef} placeholder = "username"/>
            {/* <input ref = {usernameRef} placeholder ="Enter Some Input"/> */}
            <InputComponent refernce = {passwordRef} placeholder = "password"/>
            <div className="pl-14 py-2">
            <Button  fullWidth={true}  variant = "primary" text = "SIGNUP" onClick={signup}   />
            </div>
            
        </div>
    </div>
}