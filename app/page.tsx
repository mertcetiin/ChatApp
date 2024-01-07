"use client"
import HeaderIndex from "@/components/headerIndex";
import ProfileIndex from "@/components/profileIndex";
import InputIndex from "@/components/inputIndex";
import ChatIndex from "@/components/chatIndex";

import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";


export default function Home() {

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, 'messages')

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy('createdAt'))
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages: any = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      });
      setMessages(messages)
    });

    return () => unsuscribe()
  }, [messagesRef])

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
    <div className="container mx-auto">
      <div className="min-w-full border rounded mt-6">
        <div className="">
          <div className="w-full">
            <HeaderIndex />

            <ProfileIndex />

            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul className="space-y-2">
                {user ? <ChatIndex messages={messages} /> : ''}
              </ul>
            </div>
            <InputIndex user={user} newMessage={newMessage} setNewMessage={setNewMessage} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}