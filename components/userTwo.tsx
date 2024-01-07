"use client";
import { useEffect, useState } from 'react';

function UserTwo({ message }: any) {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const hoursTime = time.getHours();
    const minutesTime = time.getMinutes();

    let formattedHours = hoursTime < 10 ? `0${hoursTime}` : hoursTime;
    let formattedMinutes = minutesTime < 10 ? `0${minutesTime}` : minutesTime;

    return (

        <div className="flex justify-start">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span className="block">{message.text}</span>
                <p className="ml-4 text-xs">{formattedHours}:{formattedMinutes}</p>
            </div>
        </div>
    )
}

export default UserTwo;