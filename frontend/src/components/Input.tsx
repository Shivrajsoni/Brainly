
export function InputComponent({onChange,placeholder}: {placeholder:string, onChange:()=>void}){
    return <div>
        <input placeholder = {placeholder} className="px-4 py-2 m-2"
        onChange = {onChange} 
        ></input>
    </div>
}