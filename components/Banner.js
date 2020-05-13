import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Clock from './clock';
import video from '../assets/images/teaser.mp4';


class Banner extends Component {
    state = {
        deadline: 'July 20, 2020',
        // videoId: {video},
        playing: true,
        volume: 0,
        muted: true,
        loop: true,
        controls: false,
        pip: false
    }

    render() {
        return (
            <div className="banner-holder">
                <div className="yt-wrapper">
                    <video className="yt-video" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                        Your browser is not supported!
                    </video>
                    {/* <ReactPlayer width="100%" height="100%" className="yt-video" pip={this.state.pip} url={require('../assets/images/teaser.mp4')} controls={this.state.controls} playing={this.state.playing} loop={this.state.loop} volume={this.state.volume} muted={this.state.muted} /> */}
                </div>
                <div className="banner">
                    <div className="banner__cd-timer">
                        <Clock deadline={this.state.deadline} />

                    </div>
                </div>

            </div>
        );
    }
}

export default Banner;