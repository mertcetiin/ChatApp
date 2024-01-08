"use client";

function UserTwo({ message }: any) {

    const time = message.createdAt?.seconds ? new Date(message.createdAt.seconds * 1000) : null;

    if (!time) {
        return null
    }

    const hoursTime = time.getHours();
    const minutesTime = time.getMinutes();

    let formattedHours = hoursTime < 10 ? `0${hoursTime}` : hoursTime;
    let formattedMinutes = minutesTime < 10 ? `0${minutesTime}` : minutesTime;

    return (

        <div className="flex justify-end">
            <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span className="block">{message.text}</span>
                <p className="ml-4 text-xs">{formattedHours}:{formattedMinutes}</p>
            </div>
        </div>
    )
}

export default UserTwo;