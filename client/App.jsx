import React from "react";
import ReactDOM from "react-dom";

import CommentsSection from './components/CommentsSection.jsx'
import SearchBar from './components/SearchBar.jsx'
import VideoList from './components/VideoList.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div >
          <div className="row fullWidth">
            <div className="col-xl-6 fullWidth">
              <VideoPlayer />
              <CommentsSection />
            </div>
            <div className="col-xl-6 fullWidth">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"))

