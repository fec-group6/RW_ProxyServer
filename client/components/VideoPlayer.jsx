import React from "react";


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: ''
    };
  }

  componentDidMount() {
    fetch("/video-player-service/api/get-video?videoId=EtH9Yllzjcc")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            videoURL: result.videoURL
          });
        }
      )
  }

  render() {
    return (

      <iframe width="750" height="500"
        src={this.state.videoURL}>
      </iframe>
    );
  }
}
export default VideoPlayer;


