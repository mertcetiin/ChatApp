"use client";
import { VscSend } from "react-icons/vsc";


function InputIndex() {

    return (
        <div>
            <input
                type="text" className='outline-none' />
            <button className="bg-gray-800 text-white px-4 py-2 ml-2 rounded-md hover:bg-gray-400"
            ><VscSend /></button>
        </div>
    )
}

export default InputIndex;