import UserTwo from './userTwo';
import UserOne from './userOne';
import { auth } from '@/lib/firebase';

function ChatIndex({ messages }: any) {

    const currentUser = auth.currentUser;

    return (
        <div>
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