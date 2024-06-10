import { useState, useEffect } from 'react'
import MessageItem from './MessageItem';



const MessageDisplay = ({ messages }) => {

    return (
        <>
            <div id="messageContainer" className="w-full h-[80vh] first-line bg-gradient-to-t from-neutral-300 to-neutral-200 dark:bg-gradient-to-br dark:from-slate-900 dark:to-gray-900 pt-2 px-4 sm:px-10 overflow-y-scroll">
                {messages.map((message) => (
                    <MessageItem key={message.id} body={message.body} />
                ))}
            </div>

        </>
    )
}

export default MessageDisplay

