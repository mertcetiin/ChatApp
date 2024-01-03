"use client";
import { useEffect, useState } from 'react';

function UserTwo() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const hoursTime = time.getHours();
    const minutesTime = time.getMinutes();

    // let formattedHours = hoursTime < 10 ? `0${hoursTime}` : hoursTime;
    // let formattedMinutes = minutesTime < 10 ? `0${minutesTime}` : minutesTime;

    return (
        <div className="flex items-end ml-32">
            <div className="bg-green-500 text-white p-2 rounded-lg mb-2 max-w-2/3">
                <div className="flex items-center">
                    <p className="text-sm flex-1">User 2</p>
                    <p className="mt-6 ml-2 text-xs">{hoursTime}:{minutesTime}</p>
                </div>
            </div>
        </div>
    )
}

export default UserTwo;