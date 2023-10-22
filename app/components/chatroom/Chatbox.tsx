"use client"
import { Message } from "..";
import { db } from "@/firebase";
import { useGlobalContext } from "@/app/context";
import { useEffect, useRef, useState } from "react";
import { Timestamp, collection, onSnapshot, orderBy, query } from "firebase/firestore";

export interface messageElement {
    id: string;
    message: string;
    user: string;
    timestamp: Timestamp
}

const Chatbox = () => {
    const { activeRoom } = useGlobalContext();
    const containerRef = useRef(null) as any;
    const [messages, setMessages] = useState<messageElement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, activeRoom), orderBy('timestamp', "asc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const msgsToPush = [] as any;
            querySnapshot.forEach((doc) => {
                msgsToPush.push({id: doc.id, ...doc.data()})
            });
            setMessages(msgsToPush);
            setLoading(false);
            
          });
          return () => unsub()
    }, [activeRoom])

    useEffect(() => {
      const container = containerRef.current;
      container.scrollBy({top: container.scrollHeight, left: 0, behavior: "smooth",});
    }, [messages])

    return (
      <div
        className="h-[500px] p-4 border-2 border-gray-400 rounded mb-8 overflow-y-scroll scrollbar-none xs:scrollbar-thin"
        ref={containerRef}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <p className="text-white">Loading messages...</p>
            <div className="loading w-[20px] h-[20px]"></div>
          </div>
        ) : (
          <div className="messages">
            {messages.length < 1 ? (
              <p className="text-white">Be the first to leave a message.</p>
            ) : (
              messages.map((message) => (
                <Message key={message.id} {...message} />
              ))
            )}
          </div>
        )}
      </div>
    );
}
 
export default Chatbox;