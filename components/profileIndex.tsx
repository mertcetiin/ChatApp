
function ProfileIndex({ user }: any) {

    const userName = user?.displayName || 'Anonymous';

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200">
                {userName ? userName[0] : ''}
            </div>
            <span className="block ml-2 font-bold text-gray-600">{userName}</span>
        </div>
    )
}

export default ProfileIndex;