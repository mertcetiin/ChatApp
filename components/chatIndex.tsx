"use client";
import UserTwo from './userTwo';
import UserOne from './userOne';
import { auth } from '@/lib/firebase';
import { useEffect, useRef } from 'react';

function ChatIndex({ messages, user }: any) {

    const currentUser = auth.currentUser;
    const chatContainerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div ref={chatContainerRef} style={{ overflowY: 'auto' }}>
            {messages.map((message: any, uid: any) => (
                <div key={uid}>
                    {currentUser && message.uid === currentUser.uid ? (
                        <UserOne message={message} user={user} />
                    ) : (
                        <UserTwo message={message} user={user} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ChatIndex;