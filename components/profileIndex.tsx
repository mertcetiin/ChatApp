
function ProfileIndex({ user }: any) {

    const userName = user?.displayName || 'Anonymous';

    return (
        <div className="relative flex items-center space-x-2">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                {userName ? userName[0] : ''}
            </div>
            <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                    <span className="text-lg text-gray-600">{userName}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileIndex;