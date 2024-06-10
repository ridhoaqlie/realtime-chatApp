
const MessageItem = ({ body }) => {


    return (
        //     <div className="flex items-start gap-2.5 my-4">
        //         <img className="w-8 h-8 rounded-full border-2 border-black" src="../../public/img/avatar_1.svg" alt="" />
        //         <div className="flex flex-col sm:max-w-[700px] w-full sm:w-fit  leading-1.5 p-4 border-gray-200 bg-gray-300 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        //             <div className="flex items-center space-x-2 rtl:space-x-reverse">
        //                 <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
        //                 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        //             </div>
        //             <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{body}</p>
        //         </div>
        //     </div>
        //     <div className="chat chat-start">
        //     <div className="chat-image avatar">
        //       <div className="w-10 rounded-full">
        //         <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //       </div>
        //     </div>
        //     <div className="chat-header">
        //       Obi-Wan Kenobi
        //       <time className="text-xs opacity-50">12:45</time>
        //     </div>
        //     <div className="chat-bubble">You were the Chosen One!</div>
        //     <div className="chat-footer opacity-50">
        //       Delivered
        //     </div>
        //   </div>
        <div className="chat chat-start mb-3">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header text-black dark:text-white">
                Anakin
                <time className=" ms-2 text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble bg-white dark:bg-gray-800 text-black dark:text-white">{body}</div>
        </div>
    )
}

export default MessageItem

