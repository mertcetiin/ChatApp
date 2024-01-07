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

    console.log("userName:", userName);
    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                {userName ? userName[0] : ''}
            </div>
            <span className="block ml-2 font-bold text-gray-600">{userName}</span>
        </div>
    )
}

export default ProfileIndex;