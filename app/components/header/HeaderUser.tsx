"use client"
import { useGlobalContext } from "@/app/context";

const HeaderUser = () => {
    const { user } = useGlobalContext();
    return (
      <div className="flex space-x-1 text-resp">
        <p className="hidden xs:block text-white">User:</p>
        {user.length < 1 ? (
          <div className="loading w-[20px] h-[20px]"></div>
        ) : (
          <p className="text-blue-400 font-semibold">{user}</p>
        )}
      </div>
    );
}

export default HeaderUser;