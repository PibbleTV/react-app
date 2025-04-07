const Stream: React.FC = () => {
  return (
    <>
      <video id="player" className="w-50% video-js vjs-default-skin" controls>
<source
  src="http://localhost:7000/hls/gamingstream.m3u8"
  type="application/x-mpegURL"
/>
      </video>
    </>
  );
};

export default Stream;
