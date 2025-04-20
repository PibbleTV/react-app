import { useAuth } from "../../hooks/useAuth";


const ChatBox: React.FC = () => {
  
  const { authenticated } = useAuth();

  return (
    <>
    <div className="flex flex-col rounded-xl w-full h-full overflow-y-auto bg-chatbox text-white text-[1.5rem] p-4%">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="mb-2% mt-2%">
          <h1>User: this is so fun</h1>
        </div>
      ))}
    </div>
      {!authenticated ? (
    <div className="bg-chatbox rounded-xl flex items-center justify-center text-[1.5rem] mt-5% w-full h-10%">
      <h1>Sign up or log in to use the chat!</h1>
    </div>
      ) : (
    <div className="bg-chatbox rounded-xl flex items-center justify-center text-[1.5rem] mt-5% w-full h-10%">
      <h1>Logged in!</h1>
    </div>
      )}
    </>

  );
};

export default ChatBox;