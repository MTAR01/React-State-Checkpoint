import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer with a love for learning.",
        imgSrc: "https://via.placeholder.com/150", // Replace with an actual image URL
        profession: "Software Engineer",
      },
      shows: false,
      mountedTime: 0,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} style={{ maxWidth: '150px' }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p className="mt-3">
          Time interval since mounted: {mountedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;
