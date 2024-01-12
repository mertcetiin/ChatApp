"use client";
import { auth, provider } from '../lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function ButtonIndex({ user }: any) {

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
            <button
                onClick={toggleAuthentication}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
                {user ? `Log out` : 'Log in'}
            </button>
        </div>
    )
}

export default ButtonIndex;