"use client"
import { useGlobalContext } from "@/app/context";

const Room = ({room, icon} : {room: string; icon: JSX.Element}) => {
    const { activeRoom, setActiveRoom } = useGlobalContext();
    
    return (  
        <button 
          type="button" 
          className={`room-btn ${room === activeRoom ? "active-room" : "btn-prim"}`}
          onClick={() => setActiveRoom(room.toLowerCase())}
        >
            <span className="text-lg">{icon}</span>
            <span>{room}</span>
        </button>
    );
}
 
export default Room;