"use client";
import { auth, provider } from '../lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function HeaderIndex({ user }: any) {

    const toggleAuthentication = async () => {
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
            <button onClick={toggleAuthentication} className="block ml-2 font-bold text-gray-600">
                {user ? `Log out` : 'Log in'}
            </button>
        </div>
    )
}

export default HeaderIndex;