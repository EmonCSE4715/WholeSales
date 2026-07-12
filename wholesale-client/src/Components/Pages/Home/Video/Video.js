import React from 'react';

const Video = () => {
  return (
    <div className='mt-20'>
      <iframe
        width="100%"
        height="515"
        src="https://www.youtube.com/embed/wf4F2-9UXUo?si=Gx9ogN-mjK9IXrcL&autoplay=1&loop=1&playlist=wf4F2-9UXUo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;