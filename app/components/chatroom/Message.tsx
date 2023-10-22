import { messageElement } from "./Chatbox";
import { formatDistanceToNow } from 'date-fns'

const Message = ({message, user, timestamp}: messageElement) => {
    const time = formatDistanceToNow(timestamp.toDate(), {addSuffix: true});
    return (  
        <div className="flex justify-between mb-4">
            <div className="space-y-1.5 leading-none sm:tracking-wide text-msg-resp">
                <p className="text-blue-400 font-semibold">{user}</p>
                <p className="text-white">{message}</p>
            </div>

            <p className="text-gray-400 text-xs">{time}</p>
        </div>
    );
}
 
export default Message;