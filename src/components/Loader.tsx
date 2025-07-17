import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-[9999] opacity-0 transition-opacity duration-300 pointer-events-none" />
    );
  }

  return (
    <>
      <style>{`
        @keyframes ghostFloat {
          0%, 49% { transform: translateY(0px); }
          50%, 100% { transform: translateY(-10px); }
        }
        
        @keyframes ghostFlicker0 {
          0%, 49% { background-color: hsl(var(--c4-primary)); }
          50%, 100% { background-color: transparent; }
        }
        
        @keyframes ghostFlicker1 {
          0%, 49% { background-color: transparent; }
          50%, 100% { background-color: hsl(var(--c4-primary)); }
        }
        
        @keyframes ghostEyeMovement {
          0%, 49% { transform: translateX(0px); }
          50%, 99% { transform: translateX(10px); }
          100% { transform: translateX(0px); }
        }
        
        @keyframes ghostShadowMovement {
          0%, 49% { opacity: 0.5; }
          50%, 100% { opacity: 0.2; }
        }
        
        .ghost-container {
          position: relative;
          animation: ghostFloat 0.5s infinite;
        }
        
        .ghost-body {
          position: relative;
          width: 140px;
          height: 140px;
        }
        
        .ghost-grid {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(14, 1fr);
          grid-template-rows: repeat(14, 1fr);
          grid-template-areas:
            "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
            "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
            "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
            "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
            "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
            "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
            "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
            "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
        }
        
        .ghost-section, .ghost-spike {
          background-color: hsl(var(--c4-primary));
        }
        
        .ghost-top0 { grid-area: top0; }
        .ghost-top1 { grid-area: top1; }
        .ghost-top2 { grid-area: top2; }
        .ghost-top3 { grid-area: top3; }
        .ghost-top4 { grid-area: top4; }
        .ghost-st0 { grid-area: st0; }
        .ghost-st1 { grid-area: st1; }
        .ghost-st2 { grid-area: st2; }
        .ghost-st3 { grid-area: st3; }
        .ghost-st4 { grid-area: st4; }
        .ghost-st5 { grid-area: st5; }
        
        .ghost-an1 { grid-area: an1; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an2 { grid-area: an2; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an3 { grid-area: an3; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an4 { grid-area: an4; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an5 { grid-area: an5; }
        .ghost-an6 { grid-area: an6; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an7 { grid-area: an7; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an8 { grid-area: an8; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an9 { grid-area: an9; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an10 { grid-area: an10; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an11 { grid-area: an11; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an12 { grid-area: an12; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an13 { grid-area: an13; animation: ghostFlicker0 0.5s infinite; }
        .ghost-an14 { grid-area: an14; }
        .ghost-an15 { grid-area: an15; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an16 { grid-area: an16; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an17 { grid-area: an17; animation: ghostFlicker1 0.5s infinite; }
        .ghost-an18 { grid-area: an18; animation: ghostFlicker0 0.5s infinite; }
        
        .ghost-eye {
          width: 40px;
          height: 50px;
          position: absolute;
          top: 30px;
        }
        
        .ghost-eye-left { left: 10px; }
        .ghost-eye-right { right: 30px; }
        
        .ghost-eye::before {
          content: "";
          background-color: hsl(var(--background));
          width: 20px;
          height: 50px;
          transform: translateX(10px);
          display: block;
          position: absolute;
        }
        
        .ghost-eye::after {
          content: "";
          background-color: hsl(var(--background));
          width: 40px;
          height: 30px;
          transform: translateY(10px);
          display: block;
          position: absolute;
        }
        
        .ghost-pupil {
          width: 20px;
          height: 20px;
          background-color: hsl(var(--foreground));
          border: 1.5px solid hsl(var(--background));
          position: absolute;
          top: 20px;
          z-index: 1;
          animation: ghostEyeMovement 3s infinite;
        }
        
        .ghost-pupil-left { left: 0px; }
        .ghost-pupil-right { right: 20px; }
        
        .ghost-shadow {
          background-color: hsl(var(--foreground) / 0.3);
          width: 140px;
          height: 140px;
          position: absolute;
          border-radius: 50%;
          transform: rotateX(80deg);
          filter: blur(20px);
          top: 80%;
          animation: ghostShadowMovement 0.5s infinite;
        }
      `}</style>
      
      <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center transition-opacity duration-300">
        <div className="ghost-container scale-75 sm:scale-100">
          <div className="ghost-body">
            {/* Main ghost body grid */}
            <div className="ghost-grid">
              {/* Top sections */}
              <div className="ghost-section ghost-top0"></div>
              <div className="ghost-section ghost-top1"></div>
              <div className="ghost-section ghost-top2"></div>
              <div className="ghost-section ghost-top3"></div>
              <div className="ghost-section ghost-top4"></div>
              
              {/* Bottom spikes */}
              <div className="ghost-section ghost-st0"></div>
              <div className="ghost-section ghost-st1"></div>
              <div className="ghost-section ghost-st2"></div>
              <div className="ghost-section ghost-st3"></div>
              <div className="ghost-section ghost-st4"></div>
              <div className="ghost-section ghost-st5"></div>
              
              {/* Animated spikes */}
              <div className="ghost-spike ghost-an1"></div>
              <div className="ghost-spike ghost-an2"></div>
              <div className="ghost-spike ghost-an3"></div>
              <div className="ghost-spike ghost-an4"></div>
              <div className="ghost-spike ghost-an5"></div>
              <div className="ghost-spike ghost-an6"></div>
              <div className="ghost-spike ghost-an7"></div>
              <div className="ghost-spike ghost-an8"></div>
              <div className="ghost-spike ghost-an9"></div>
              <div className="ghost-spike ghost-an10"></div>
              <div className="ghost-spike ghost-an11"></div>
              <div className="ghost-spike ghost-an12"></div>
              <div className="ghost-spike ghost-an13"></div>
              <div className="ghost-spike ghost-an14"></div>
              <div className="ghost-spike ghost-an15"></div>
              <div className="ghost-spike ghost-an16"></div>
              <div className="ghost-spike ghost-an17"></div>
              <div className="ghost-spike ghost-an18"></div>
            </div>
            
            {/* Eyes */}
            <div className="ghost-eye ghost-eye-left">
              <div className="ghost-pupil ghost-pupil-left"></div>
            </div>
            <div className="ghost-eye ghost-eye-right">
              <div className="ghost-pupil ghost-pupil-right"></div>
            </div>
          </div>
          
          {/* Shadow */}
          <div className="ghost-shadow"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;