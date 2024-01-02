import InputIndex from '@/components/inputIndex';
import User1 from '@/components/user1';
import User2 from '@/components/user2';
import React from 'react'

function ChatIndex() {
    return (
        <div className="font-sans bg-gray-800 h-screen flex">
            <div className="flex-1 flex flex-col">

                <div className="bg-teal-500 text-white p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">Chat App</span>
                </div>

                <div className="p-4 flex items-center">
                    <User1 />
                    <User2 />
                </div>
            </div>
            <InputIndex />
        </div >
    )
}

export default ChatIndex;