import React, { useEffect, useRef} from "react";
import "./Video.css";

const VideoComponent = ({ src }) => {
    const videoRef = useRef (null);

    useEffect (() => {
        if (videoRef.current) {
            videoRef.current.play ();
        }
    }, []); 

    return (
        <div className="video-container">
        <video ref={videoRef} loop muted className="video-element">
            <source src={src} />
        </video>
        </div>
    );

};

export default VideoComponent;

