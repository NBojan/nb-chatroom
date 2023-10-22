import { Chatroom, Footer, Header } from "./components";

const Home = () => {
  return (  
    <>
      <Header />

      <main className="page">
        <Chatroom />
      </main>

      <Footer />
    </>
  );
}
 
export default Home;