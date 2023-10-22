import { Chatbox, MessageForm, Nickname, Rooms } from "..";

const Chatroom = () => {
    return (  
        <section className="container mx-auto lg:max-w-[1024px]">
            <Rooms />
            <Chatbox />
            <MessageForm />
            <Nickname />
        </section>
    );
}
 
export default Chatroom;