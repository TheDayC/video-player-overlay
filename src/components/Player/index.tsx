import React from 'react';

const url = 'https://buffup-public.s3.eu-west-2.amazonaws.com/video/toronto+nba+cut+3.mp4';

const Player: React.FC = () => {
    return (
        <div className="playerWrapper" data-player="primary-player">
            <video controls>
                <source src={url} type="video/mp4" />
                Please switch to a browser that supports HTML 5.
            </video>
        </div>
    );
};

export default Player;
