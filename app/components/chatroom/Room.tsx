"use client"
import { toast } from "react-toastify";
import { useGlobalContext } from "@/app/context";

const Room = ({room, icon} : {room: string; icon: JSX.Element}) => {
    const { activeRoom, setActiveRoom } = useGlobalContext();
    const changeRoom = () => {
        setActiveRoom(room.toLowerCase());
        toast.success("Room changed")
    }

    return (  
        <button 
          type="button" 
          className={`room-btn ${room === activeRoom ? "active-room" : "btn-prim"}`}
          onClick={changeRoom}
        >
            <span className="text-lg">{icon}</span>
            <span>{room}</span>
        </button>
    );
}
 
export default Room;