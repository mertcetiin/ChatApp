import UserTwo from './userTwo';
import UserOne from './userOne';
import { auth } from '@/lib/firebase';

function ChatIndex({ messages, user }: any) {

    const currentUser = auth.currentUser;

    return (
        <div>
            {messages.map((message: any) => (
                <div key={message.id}>
                    {currentUser && message.uid === currentUser.uid ? (
                        <UserOne message={message} user={user} />
                    ) : (
                        <UserTwo message={message} user={user} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ChatIndex;