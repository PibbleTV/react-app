import ChatBox from '../components/streaming/chatbox';
import Videoplayer from '../components/streaming/videoplayer';

const Stream: React.FC = () => {
  return (
    <div className="flex w-full h-[66%] gap-3%">
      <div className="flex-1 w-full h-full pt-2% pl-3%">
        <Videoplayer />
      </div>
      <div className="flex-2 w-[29%] pt-2% pr-3% overflow-y-auto">
        <ChatBox />
      </div>
    </div>
  );
};

export default Stream;