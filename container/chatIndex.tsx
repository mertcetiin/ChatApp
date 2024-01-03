import InputIndex from '@/components/inputIndex';
import UserOne from '@/components/userOne';
import UserTwo from '@/components/userTwo';
import React from 'react'

function ChatIndex() {
    return (
        <div className="font-san">
            <div className="">
                <div className="bg-teal-500 text-white p-4 flex items-center justify-between">
                    <span className="text-lg font-semibold">Chat App</span>
                </div>
                <div className="p-4 flex items-center">
                    <UserOne />
                    <UserTwo />
                </div>
            </div>
            <InputIndex />
        </div >
    )
}

export default ChatIndex;