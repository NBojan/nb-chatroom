"use client";

import { db } from "@/firebase";
import { useState } from "react";
import { useGlobalContext } from "@/app/context";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const MessageForm = () => {
  const { user, activeRoom } = useGlobalContext();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!message.trim()) return
    else {
        setLoading(true);

        const uploadMessage = await addDoc(collection(db, activeRoom), {
            user,
            message: message.trim(),
            timestamp: Timestamp.fromDate(new Date())
        })
        
        setMessage("");
        setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col xs:flex-row items-center xs:items-stretch space-y-2 xs:space-y-0 mb-6"
    >
      <input
        type="text"
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-input"
      />

      <button
        type="submit"
        className="btn-prim form-btn"
        disabled={message.length < 1 || loading}
      >
        {loading ? <div className="loading w-[20px] h-[20px]"></div> : "Send"}
      </button>
    </form>
  );
};

export default MessageForm;
