export interface inputprops{
    placeholder :string,
    reference :  React.RefObject<HTMLInputElement |  null>,
    
}



export function InputComponent({placeholder, reference} : inputprops){
    return <input ref={reference} placeholder={placeholder} type="text" className={`w-full
            h-[2.5rem]
            pl-[0.8em]
            rounded-[10px]
            border-2 border-transparent
            bg-gray-600
            outline
            overflow-hidden
            transition-all duration-500
            hover:border-[#4A9DEC]
            hover:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]
            hover:bg-gray-500

            focus:border-[#4A9DEC]
            focus:shadow-[0_0_0_7px_rgba(74,157,236,0.2)]
            focus:bg-gray-400`}/>
}