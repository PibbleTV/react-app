import ChatBox from '../components/streaming/chatbox';
import Videoplayer from '../components/streaming/videoplayer';

const Stream: React.FC = () => {
  return (
    <div className="flex h-[70.5vh] gap-3%">
      <div className="flex-1 pt-2% pl-3%">
        <Videoplayer />
      </div>
      <div className="flex-2 w-[30%] min-h-0 pt-2% pr-3%">
        <ChatBox />
      </div>
    </div>
  );
};

export default Stream;