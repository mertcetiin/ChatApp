"use client"
import HeaderIndex from "@/components/headerIndex";
import ProfileIndex from "@/components/profileIndex";
import UserOne from "@/components/userOne";
import UserTwo from "@/components/userTwo";
import InputIndex from "@/components/inputIndex";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "@/lib/firebase";

export default function Home() {

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
  }, [])


  return (
    <div className="container mx-auto">
      <div className="min-w-full border rounded mt-6">
        <div className="">
          <div className="w-full">
            <HeaderIndex />

            <ProfileIndex />

            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul className="space-y-2">
                <UserOne messages={messages} />
                <UserTwo />
              </ul>
            </div>
            <InputIndex />
          </div>
        </div>
      </div>
    </div>
  )
}