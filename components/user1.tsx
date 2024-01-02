"use client";
import { useEffect, useState } from 'react';

function User1() {

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
        <div>
            <p>User 1</p>
            <div>
                <textarea placeholder="Mesajınızı yazın..." className="flex-1 p-2 border rounded-md"></textarea>
                <p>{formattedHours}:{formattedMinutes}</p>
            </div>
        </div>
    )
}

export default User1;