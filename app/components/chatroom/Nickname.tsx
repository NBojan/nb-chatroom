"use client"

import { useState } from "react";
import { toast } from "react-toastify";
import { useGlobalContext } from "@/app/context";

const Nickname = () => {
    const { setUser } = useGlobalContext();
    const [nickname, setNickname] = useState("");

    const changeNickname = () => {
        if(!nickname.trim()) return;
        setUser(nickname.trim());
        setNickname("");
        toast.success("User updated");
    }

    return (
      <div className="flex flex-col xs:flex-row items-center xs:items-stretch space-y-2 xs:space-y-0 mb-6">
        <input
          type="text"
          placeholder="Your nickname..."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="form-input"
          maxLength={12}
        />

        <button
          type="button"
          className="btn-prim form-btn"
          disabled={nickname.length < 1}
          onClick={changeNickname}
        >
          Update nickname
        </button>
      </div>
    );
}

export default Nickname;