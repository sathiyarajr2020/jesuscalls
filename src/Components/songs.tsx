import React from 'react';
import './songs.css';

// Replace these with your YouTube video links or IDs
const videos = [
  {
    id: '1',
    title: 'A Musical Tribute To Dr. Paul Dhinakaran',
    youtubeLink: 'https://www.youtube.com/embed/16VUmKjc4jk?si=TtEBbUUBhqyTcsT6',
  },
  {
    id: '2',
    title: 'Stella Ramola & Daniel Davidson | Tamil Worship',
    youtubeLink: 'https://www.youtube.com/embed/aPACGIlYEYE?si=JcbRHuIsRo_SwRLm',
  },
  {
    id: '3',
    title: 'Bro. D.G.S. Dhinakaran\'s Greatest Hits',
    youtubeLink: 'https://www.youtube.com/embed/KDsWsAesfYs?si=GlrrOwDRNp15pK82',
  },
  {
    id: '4',
    title: 'Arise Jukebox',
    youtubeLink: 'https://www.youtube.com/embed/iZDl3ebZOYA?si=-L7zcFYXsQN5j7SA',
  },
  {
    id: '5',
    title: 'Kaalam Maarum',
    youtubeLink: 'https://www.youtube.com/embed/6eefPFzIoAw?si=U4RQTIApL6lgTtGS',
  },
];

const LatestSongs: React.FC = () => {
  return (
    <div className="latest-songs-container">
      <h2>Our Latest Songs</h2>
      <div className="songs-grid">
        {videos.map((video) => (
          <div key={video.id} className="song-card">
            <iframe
              width="100%"
              height="200"
              src={video.youtubeLink}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSongs;
