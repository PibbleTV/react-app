const ChatBox: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-chatbox text-white text-[1.3rem] p-4%">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="mb-2% mt-2%">
          <h1>User: this is so fun</h1>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;