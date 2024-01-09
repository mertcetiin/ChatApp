import UserTwo from './userTwo';
import UserOne from './userOne';
import { auth } from '@/lib/firebase';

function ChatIndex({ messages }: any) {

    const currentUser = auth.currentUser;

    const firstMessageDate = messages.length > 0 && messages[0].timestamp ? new Date(messages[0].timestamp.toDate()) : new Date();

    const day = firstMessageDate.getDate();
    const month = ("0" + (firstMessageDate.getMonth() + 1)).slice(-2);
    const year = firstMessageDate.getFullYear();

    return (
        <div>
            <p className='flex items-center justify-center -mt-6 bg-green-600 w-40 mx-auto text-sm text-white rounded-md'>{`${day}.${month}.${year}`}</p>
            {messages.map((message: any) => (
                <div className='mt-2' key={message.id}>
                    {currentUser && message.uid === currentUser.uid ? (
                        <UserTwo message={message} />
                    ) : (
                        <UserOne message={message} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ChatIndex;