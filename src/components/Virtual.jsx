import { useState, useRef, useEffect } from 'react';
import { Play, X, Volume2, VolumeX, Maximize, Pause } from 'lucide-react';

export default function VirtualTourPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  
  // Show controls when the video is playing
  useEffect(() => {
    if (isVideoPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVideoPlaying, showControls]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setShowControls(true);
    }
  };
    const handleProgressBarClick = (e) => {
    if (videoRef.current) {
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
      setShowControls(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleMouseMove = () => {
    if (isVideoPlaying) {
      setShowControls(true);
    }
  };

  return (
    <div id="virtual-tour" className="relative shadow-md md:w-[77%] p-10 mt-8 bg-white w-full h-screen overflow-hidden">
      {/* Main Content - Virtual Tour Video Container */}
      <div 
        className="relative w-[95%] h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Video Element with Poster/Thumbnail */}
        <video 
          ref={videoRef}
          src="video.mp4" 
          poster=""
          className="w-full h-full object-cover"
          onTimeUpdate={updateProgress}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onClick={togglePlayPause}
        />
        
        {/* Play Button Overlay - Only visible when video is not playing */}
        {!isVideoPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-10 overflow-hidden">
            <img src="/photo1.jpg" alt="" className=' w-full'/>
            {/* Play Button */}
            <button 
              onClick={handlePlayVideo}
              className=" absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              aria-label="Play virtual tour"
            >
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-transparent border-l-black ml-2"></div>
            </button>
            
            {/* Text Overlay */}
            <div className="mt-6 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide uppercase shadow-text">
                VIRTUAL TOUR
              </h1>
              <h2 className="text-xl md:text-2xl text-white mt-2 shadow-text">
                Balaji Estate C3 At Dombivli East
              </h2>
            </div>
          </div>
        )}
        
        {/* Video Controls - Only visible when video is playing and controls should be shown */}
        {isVideoPlaying && showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex items-center transition-opacity duration-300">
            <button 
              onClick={togglePlayPause}
              className="text-white mr-4 hover:text-orange-500 transition-colors"
              aria-label={isVideoPlaying ? "Pause" : "Play"}
            >
              {isVideoPlaying ? 
                <Pause size={24} /> : 
                <Play size={24} />
              }
            </button>
            
            <button 
              onClick={toggleMute}
              className="text-white mr-4 hover:text-orange-500 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? 
                <VolumeX size={24} /> : 
                <Volume2 size={24} />
              }
            </button>
            
            {/* Progress Bar */}
            <div className="flex-1 h-1 bg-gray-600 rounded-full mx-4 cursor-pointer"
            onClick={handleProgressBarClick}>
              
              <div 
                className="h-full bg-orange-500 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <button 
              onClick={handleFullscreen}
              className="text-white ml-4 hover:text-orange-500 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize size={24} />
            </button>
          </div>
        )}
      </div>
      
      {/* Side "Virtual Site Tour" Text */}
      <div className="absolute top-0 right-0 h-full flex items-center">
        <div className="transform rotate-90 mt-30 origin-right mr-6">
          <h3 className="text-3xl md:text-3xl font-bold text-orange-500 tracking-widest uppercase whitespace-nowrap">
            Virtual Site Tour
          </h3>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .border-l-16 {
          border-left-width: 16px;
        }
      `}</style>
    </div>
  );
}