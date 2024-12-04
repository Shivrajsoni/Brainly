
import { InputComponent } from "../components/Input"
import { Button } from "../components/Button"
import { useRef } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function SignInPage() {
    const navigate = useNavigate();
    
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signin (){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center rounded-md">
        <div className = " rounded=xl border min-w-48 bg-slate-50">
            <InputComponent refernce={usernameRef} placeholder = "username"/>
            <InputComponent  refernce = {passwordRef}  placeholder = "password"/>
            <div className="pl-14 py-2">
            <Button  fullWidth={true}  variant = "primary" onClick={signin} text = "SIGNIN" />
            </div>
            
        </div>
    </div>
}