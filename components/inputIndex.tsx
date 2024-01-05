"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";

function InputIndex() {

    const [newMessage, setNewMessage] = useState('');

    const messagesRef = collection(db, 'messages')

    const user = auth.currentUser;
    const userName = user ? user.displayName : "Anonymous";

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (newMessage === '') return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: userName,
        });
        setNewMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <input type="text"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message" required placeholder="Message..." />
                <button type="submit">
                    <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>

            </div>
        </form>
    )
}

export default InputIndex;