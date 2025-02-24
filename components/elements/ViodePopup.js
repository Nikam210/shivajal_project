import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function VideoPopup() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <a onClick={() => setOpen(true)} className="popup-video play-btn">
        <i className="fab fa-youtube" />
      </a>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="RBr-bQwX9-E"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
