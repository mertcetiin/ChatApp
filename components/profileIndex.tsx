"use client";
import { useEffect, useState } from 'react';
import { auth } from "@/lib/firebase";
import { User } from 'firebase/auth';


function ProfileIndex() {
    const [user, setUser] = useState<User | null>(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    const userName = user ? user.displayName : 'Anonymous';

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img className="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
            <span className="block ml-2 font-bold text-gray-600">{userName}</span>
        </div>
    )
}

export default ProfileIndex;