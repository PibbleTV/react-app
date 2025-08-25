import ChatBox from '../components/streaming/chatbox';
import Videoplayer from '../components/streaming/videoplayer';
import temp from "../../public/temp.png"
import like from "../../public/like.png"
import eye from "../../public/eye.png"

const Stream: React.FC = () => {
  return (
    <>
    <div className='p-[2.5%] pb-0'>
    <div className="flex h-[73vh] gap-[3%]">
      <div className="flex-1">
        <Videoplayer />
      </div>
      <div className="flex-2 w-[23%] min-h-0">
        <ChatBox />
      </div>
    </div>

    <div className='flex flex-row w-[69.8%] mt-[1.5%]'>
      
      <div className='h-[6%] w-[6%]'>
        <img className='rounded-full' src={temp}></img>
      </div>

      <div className='flex flex-col justify-center ml-[2%]'>
          <h1 className='text-[1.2rem]'>Streamer</h1>
          <h1 className='text-[1.5rem]'>A very entertaining live broadcast!</h1>
      </div>


        <div className='flex flex-row h-10% max-w-50% gap-1%'>

          <div className='flex flex-col h-20% w-20% items-center'>
            <button className="pl-10% pr-10% text-center pt-2% pb-2% text-[1.2rem] font-bold bg-defaultBtn">FOLLOW</button>
            <div className='flex flex-row gap-15% mt-6% justify-center items-center'>
              <img className='w-[30%] h-40%' src={eye}></img>
              <h1 className='font-bold'>1</h1>
            </div>
          </div>
          <div className='flex flex-col h-20% w-20% items-center'>
            <button className="pl-10% pr-10% text-center pt-2% pb-2% text-[1.2rem] font-bold bg-defaultBtn">DONATE</button>
            <div className='flex flex-row gap-15% mt-6% justify-center items-center'>
              <img className='w-[30%] h-40%' src={like}></img>
              <h1 className='font-bold'>0</h1>
            </div>
          </div>
        </div>
   
    </div>
</div>
    </>
  );
};

export default Stream;