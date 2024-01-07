import UserTwo from './userTwo';
import UserOne from './userOne';

function ChatIndex({ messages }: any) {

    return (
        <div>
            {messages.map((message: any) => (
                <div key={message.id}>
                    {message.user === "user1" ? (
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