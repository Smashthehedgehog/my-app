import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="sonic-beige">
      <div className="sidebar-layout d-flex">
        { /* Sidebar */}
        <div className="App-sidebar d-flex flex-column">
          
          <div className='m-4'></div>
          <div className='App-sidebar-stuff d-flex flex-column align-items-center'>
            <p className="headline-4-large">
                MA
            </p>

            <div className='App-sidebar-horizontal-line'></div>
          </div>
          <div className='m-2'></div>
        </div>

        { /* Content */}
        <div className="App-content d-flex flex-column">
          {/* Main content */}
          <div className='m-4'></div>
          <div className="App-content-stuff d-flex flex-column">
            <div className="header-container d-flex flex-column justify-content-center">
              <p className='headline-3-large'> Hello, my name is</p>
              <p className='display-1-large sonic-blue-text'> Michael Chibuikem Ani</p>
              <p className='headline-3-small'> A mathematician, gamer, musician, gymbro, and your company's next
              influential Software Engineer</p>
            </div>
            <div className='m-4'></div>
            <p className='display-3-large sonic-blue-text'>What do I do?</p>
            <div className='topic-line sonic-red'></div>
            <div className='body-container row g-2'>
              <div className="col-md-7 col-12">
                <p className='subhead-1-small sonic-grey-text'>I specialize in web development under multiple frameworks,
                such as React and Bootstrap, requiring me to have extensive understanding of CSS, HTML, and Javascript. But I
                am not just limited to web development, I am also proficient in coding for languages focused on maintanence, such
                as Java, and data analysis, such as Bootstrap.</p>
              </div>
              <div className="col-md-5 col-12">
                Picture of my estudious self here
              </div>
            </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
