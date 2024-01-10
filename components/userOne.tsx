
function UserOne({ message, user }: any) {

    const time = message.createdAt?.seconds ? new Date(message.createdAt.seconds * 1000) : null;

    if (!time) {
        return null
    }

    const hoursTime = time.getHours();
    const minutesTime = time.getMinutes();

    let formattedHours = hoursTime < 10 ? `0${hoursTime}` : hoursTime;
    let formattedMinutes = minutesTime < 10 ? `0${minutesTime}` : minutesTime;

    const userName = user?.displayName || 'Anonymous';

    return (
        <div className="flex mt-2 items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                <div>
                    <span className="px-4 py-2 text-sm rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                        {message.text}
                        <p className="float-right mt-2 ml-3 text-xs text-blue-200">{formattedHours}:{formattedMinutes}</p>
                    </span>
                </div>
            </div>
            <div className="w-6 h-6 text-xs flex items-center justify-center rounded-full text-white bg-blue-600 order-2">
                {userName ? userName[0] : ''}
            </div>
        </div>
    )
}

export default UserOne;