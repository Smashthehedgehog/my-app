import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {
  return (
      <div id="sidebar-layout" className="d-flex">
        { /* Sidebar */}
        <div className="App-sidebar d-flex flex-column">
          <img src={logo} className="App-logo" alt="logo" />
            <p className="d-flex justify-content-center headline-2-large">
                Michael Ani
            </p>
          
        </div>

        { /* Content */}
        <div className="App-content">
          {/* Main content */}
          <header className="header-container display-1-large">
            Introducing...<br/>
            Michael Ani<br/>
            A S.T.R.O.N.G. Developer
          </header>
          <div className="topic-container">
            <div className="topic-header d-flex flex-column display-3-large">
              About Me
            <div className="topic-header-line"></div>
            </div>
            <p className="headline-3-large d-flex flex-wrap">
              Hello everyone, my name is Michael Ani. I am a 21 year old Nigerian born in America with a passion for Computer
              Science. I love playing video games, notating music, coding, and working out. Many people consider me friendly,
              hardworking, helpful, and even quite quirky. Overall, I am a determined young man who will take on any
              challenge that comes his way.
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
