import React from 'react'
import { auth, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth'

function HeaderIndex() {

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <div className="relative flex items-center justify-center p-3 border-b border-gray-300">
            <button onClick={signInWithGoogle} className="block ml-2 font-bold text-gray-600">Log in</button>
        </div>
    )
}

export default HeaderIndex;