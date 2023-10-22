const Footer = () => {
    return (  
        <footer>
            <div className="h-[4rem] container mx-auto flex flex-col items-center justify-center">
                <p>
                    <span className="text-white">© </span>
                    <span className="text-blue-400 font-semibold">NBChattenzi</span>
                </p>

                <p className="text-white">
                    <span>NBojan, </span>
                    <span>{new Date().getFullYear()}</span>
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;