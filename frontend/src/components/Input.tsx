
export function InputComponent({reference,placeholder}: {placeholder:string, refernce:any}){
    return <div>
        <input placeholder = {placeholder} className="px-4 py-2 m-2"
        ref = {reference} 
        ></input>
    </div>
}