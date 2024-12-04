import { InputComponent } from "../components/Input"

export function SignupPage() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className = "bg-white rounded border min-w-48">
            <InputComponent placeholder = "username"/>
            <InputComponent placeholder = "password"/>
            <Button variant = "primary" text = "SIGNUP" />
        </div>
    </div>
}