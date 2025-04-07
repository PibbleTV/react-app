import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Stream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initPlayer = () => {
      if (videoRef.current) {

        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource('http://localhost:7500/hls/live/gamingstream.m3u8');
          hls.attachMedia(videoRef.current);


          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS.js error:', data);
          });
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {

          videoRef.current.src = 'http://localhost:7500/hls/live/gamingstream.m3u8';
          videoRef.current.play();
        }
      }
    };

    initPlayer();

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="w-full h-50% relative mx-auto">
      <video
        ref={videoRef}
        className="w-50% h-full"
        controls
        autoPlay
        muted
      />
    </div>
  );
};

export default Stream;
