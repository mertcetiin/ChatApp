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
        <div className="flex items-center space-x-4 mr-4">
            <button onClick={toggleAuthentication} className="block ml-2 font-bold text-gray-600">
                {user ? `Log out` : 'Log in'}
            </button>
        </div>
    )
}

export default HeaderIndex;