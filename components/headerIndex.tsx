"use client";
import { useState, useEffect } from 'react'
import { auth, provider } from '../lib/firebase';
import { User, signInWithPopup, signOut } from 'firebase/auth';

function HeaderIndex() {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            if (user) {
                await signOut(auth);
            } else {
                await signInWithPopup(auth, provider);
            }
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div className="relative flex items-center justify-center p-3 border-b border-gray-300">
            <button onClick={signInWithGoogle} className="block ml-2 font-bold text-gray-600">
                {user ? `Log out` : 'Log in'}
            </button>
        </div>
    )
}

export default HeaderIndex;