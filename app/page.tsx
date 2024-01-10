"use client"
import HeaderIndex from "@/components/headerIndex";
import ProfileIndex from "@/components/profileIndex";
import InputIndex from "@/components/inputIndex";
import ChatIndex from "@/components/chatIndex";

import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, db } from "@/lib/firebase";


export default function Home() {

  const [user, setUser] = useState(auth.currentUser || null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);


  const messagesRef = collection(db, 'messages');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);


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
  }, [])


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (newMessage === '') return;

    if (!auth.currentUser) {
      console.error('User is not authenticated.');
      return;
    }

    const { uid, displayName } = auth.currentUser
    try {
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: user ? user.displayName || "Anonymous" : "Anonymous",
        uid,
      });
      setNewMessage('')
    } catch (error) {
      console.error('Message could not be added:', error)
    }

  }

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-gray-100">

      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <ProfileIndex user={user} />
        <HeaderIndex user={user} />
      </div>

      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {user && <ChatIndex messages={messages} user={user} />}
      </div>

      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <InputIndex
          user={user}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSubmit={handleSubmit}
        />
      </div>

    </div>
  )
}