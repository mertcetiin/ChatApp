import InputIndex from '@/components/inputIndex';
import User1 from '@/components/user1';
import User2 from '@/components/user2';
import React from 'react'

function ChatIndex() {
    return (
        <div className="font-sans bg-gray-800 h-screen flex">
            <div className="flex-1 flex flex-col">

                <div className="bg-teal-500 text-white p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">WhatsApp</span>
                    <span className="text-sm">Online</span>
                </div>

                <div className="flex-1 overflow-y-auto p-4">

                </div>


                <div className="p-4 flex items-center">
                    <textarea placeholder="Mesajınızı yazın..." className="flex-1 p-2 border rounded-md"></textarea>
                    <button className="bg-teal-500 text-white px-4 py-2 ml-2 rounded-md">Gönder</button>
                </div>
            </div>
            <User1 />
            <User2 />
            <InputIndex />
        </div >
    )
}

export default ChatIndex;