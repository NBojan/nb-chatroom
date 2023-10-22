import { Room } from "..";
import { rooms } from "@/app/utils/helpingHand";

const Rooms = () => {
    return (  
        <div className="py-6">
            <div 
              className="flex flex-col xs:flex-row justify-center space-y-4 xs:space-y-0 space-x-0 xs:space-x-4 md:space-x-6 lg:space-x-8"
            >
                {rooms.map(room => <Room key={room.id} {...room} />)}
            </div>
        </div>
    );
}
 
export default Rooms;