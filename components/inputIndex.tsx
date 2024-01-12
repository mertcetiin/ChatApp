
function InputIndex({ newMessage, setNewMessage, handleSubmit, user }: any) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col flex-auto h-full p-6">
                <div
                    className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div
                        className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                        {user ? (
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                        name="message"
                                        required
                                        placeholder="Message..."
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-200 pl-4 h-10"
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Login to send messages..."
                                        className="text-sm flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        disabled
                                    />
                                </div>
                            </div>
                        )}
                        <div className="ml-4">
                            <button type="submit"
                                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                                <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InputIndex;