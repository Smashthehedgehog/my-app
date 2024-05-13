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
            <div className='d-flex flex-column flex-sm-row justify-content-between gap-2 mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" width="30px" height="30px"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></svg>
            </div>

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
            <div className='body-container row g-2 mb-5'>
              <div className="col-md-7 col-12">
                <p className='subhead-1-large text-dark'>I specialize in web development under multiple frameworks,
                such as React and Bootstrap, requiring me to have extensive understanding of CSS, HTML, and Javascript. But I
                am not just limited to web development, I am also proficient in coding for languages focused on maintanence, such
                as Java, and data analysis, such as Bootstrap.</p>
              </div>
              <div className="col-md-5 col-12">
                Picture of my estudious self here
              </div>
            </div>
            <p className='display-3-large sonic-blue-text'>Projects and Experience</p>
            <div className='topic-line sonic-red'></div>
            <div className='d-flex flex-column mb-5'>
              <div className='sonic-card mb-4'>
                <div className='row'>
                  <div className='col-2'>
                      <svg width="100%" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.636 0-31.99-14.34-31.99-31.99s14.354-31.99 31.99-31.99 31.992 14.34 31.992 31.99-14.356 31.99-31.992 31.99z m0-47.984c-8.826 0-15.996 7.184-15.996 15.994s7.17 15.994 15.996 15.994c8.824 0 15.996-7.184 15.996-15.994s-7.172-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.81-9.73l31.99-143.956c0.954-4.296 5.202-6.984 9.544-6.078a8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8.004 8.004 0 0 1-7.812 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a8.01 8.01 0 0 1 6.074-9.544c4.376-0.906 8.59 1.782 9.542 6.078l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z" fill="" /><path d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 640.086H56.14a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998z m-903.722-15.996h895.726V112.248H64.138v511.842z" fill="" /><path d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.056 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.932 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z" fill="" /><path d="M967.86 831.778H56.14c-31.396 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.558 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982zM88.13 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v527.838a7.994 7.994 0 0 1-7.998 7.998z" fill="" /><path d="M72.136 160.232H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 208.218H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 256.204H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 304.19H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 352.174H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 400.16H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 448.144H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM72.136 496.13H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 544.116H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.996a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM72.136 592.102H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM200.096 160.232h-63.98c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 208.218h-191.94c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h191.94c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM232.086 208.218H152.11c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h79.976c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 256.204h-15.994c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM408.032 256.204H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h239.926c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM216.09 352.174H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.58 7.998-8 7.998zM456.016 352.174H248.082c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h207.936c4.422 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM456.016 304.19H184.1c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h271.916c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM456.016 400.16h-63.98a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h63.98a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM408.032 448.144H152.11a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h255.922a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM280.072 544.116h-127.96a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h127.96a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM456.016 496.13h-79.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h79.974a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM344.052 496.13H168.106a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h175.946a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM200.096 592.102h-63.98c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 448.144h-15.994a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998zM360.046 400.16h-191.94a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h191.942a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998z" fill="" /><path d="M512 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25A7.994 7.994 0 0 1 512 96.252a7.992 7.992 0 0 1 7.996 7.998v527.838a7.992 7.992 0 0 1-7.996 7.998z" fill="" /><path d="M903.878 544.116a7.984 7.984 0 0 1-6.7-3.638l-97.27-149.634-97.266 149.634c-2.39 3.732-7.372 4.748-11.058 2.358a8.012 8.012 0 0 1-2.344-11.074l103.968-159.952c2.938-4.544 10.464-4.544 13.402 0l103.968 159.952a8.012 8.012 0 0 1-2.344 11.074c-1.34 0.872-2.856 1.28-4.356 1.28z" fill="" /><path d="M631.964 544.116a7.998 7.998 0 0 1-6.656-12.434l63.98-95.876a8 8 0 0 1 13.308 0l31.524 47.25a8 8 0 0 1-2.218 11.09c-3.672 2.42-8.636 1.468-11.09-2.218l-24.868-37.278-57.328 85.904a7.99 7.99 0 0 1-6.652 3.562zM631.964 432.15c-22.058 0-39.988-17.94-39.988-39.988s17.93-39.988 39.988-39.988c22.054 0 39.988 17.94 39.988 39.988 0.002 22.048-17.932 39.988-39.988 39.988z m0-63.98c-13.23 0-23.992 10.762-23.992 23.992s10.762 23.992 23.992 23.992 23.992-10.762 23.992-23.992-10.76-23.992-23.992-23.992z" fill="" /><path d="M919.876 544.116H567.984c-4.422 0-8-3.576-8-7.998V328.182a7.994 7.994 0 0 1 8-7.998h351.89a7.992 7.992 0 0 1 7.996 7.998v207.936a7.988 7.988 0 0 1-7.994 7.998z m-343.896-15.994h335.898V336.18H575.98v191.942z" fill="" /><path d="M919.876 160.232H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" fill="" /><path d="M919.876 288.194a7.99 7.99 0 0 1-7.996-7.998v-127.96c0-4.42 3.574-7.998 7.996-7.998s7.996 3.576 7.996 7.998v127.96a7.992 7.992 0 0 1-7.996 7.998z" fill="" /><path d="M919.876 288.194H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z" fill="" /><path d="M871.89 224.212H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h303.906c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998z" fill="" /><path d="M919.876 592.102H567.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.578 7.996 7.998s-3.574 7.998-7.994 7.998z"/>
                      </svg>
                  </div>
                  <div className='col-md-8 col-7'>
                    <div className='d-flex flex-column'>
                      <div className='headline-3-large'>Website Creation</div>
                      <p className='body-1-large'>Inspired by my work at Amdocs and multiple portfolios that I have seen, I
                      decided to make a website portfolio of my own. Thus, successfully creating a simple but dynamic and Accessible
                      website.</p>
                    </div>
                    <div className='d-flex flex-wrap gap-4 subhead-1-large align-items-center mb-1'>
                      <div className='skill-pill'>
                        Bootstrap
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
                        </svg>
                      </div>
                      <div className='skill-pill'>React
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                        </svg>
                      </div>
                      <div className='skill-pill'>HTML
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path>
                        </svg>
                      </div>
                      <div className='skill-pill'>CSS
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
	                        <path d="M16.5 1.26l-2.407 12.064-7.277 2.416-6.316-2.416 0.643-3.223h2.688l-0.263 1.33 3.818 1.457 4.398-1.457 0.614-3.068h-10.929l0.524-2.686h10.94l0.345-1.73h-10.931l0.533-2.687h13.62z" fill="#000000" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 col-3'>
                    <p className='legal-1-demi font-italic text-dark'><i>APR 2024 - PRES</i></p>
                  </div>
                </div>
              </div>

              <div className='sonic-card mb-4'>
                <div className='row'>
                  <div className='col-2'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="100%" viewBox="0 0 300.000000 223.000000"
                    preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,223.000000) scale(0.100000,-0.100000)">
                        <path d="M253 2216 c3 -8 31 -101 62 -208 31 -106 58 -201 61 -210 5 -17 43
                        -18 611 -18 425 0 617 -3 644 -11 52 -16 108 -64 130 -113 15 -33 19 -66 19
                        -178 l0 -137 -618 -3 -617 -3 -84 -29 c-266 -93 -441 -323 -458 -602 -7 -116
                        14 -218 69 -334 33 -68 57 -100 127 -171 70 -70 103 -94 171 -127 151 -73 151
                        -73 773 -70 l552 3 85 31 c199 71 350 223 422 424 23 65 23 68 26 627 3 618 2
                        629 -58 757 -85 179 -253 317 -446 366 -73 19 -113 20 -777 20 -595 0 -698 -2
                        -694 -14z m1527 -1463 c0 -113 -4 -146 -19 -179 -22 -48 -82 -101 -131 -114
                        -20 -6 -236 -10 -521 -10 l-485 0 -55 28 c-130 66 -157 232 -56 339 71 74 52
                        72 695 73 l572 0 0 -137z"/>
                        <path d="M2460 1115 l0 -225 271 0 c213 0 270 3 266 13 -2 6 -21 71 -41 142
                        -20 72 -48 167 -62 213 l-25 82 -204 0 -205 0 0 -225z"/>
                      </g>
                    </svg>
                  </div>
                  <div className='col-md-8 col-7'>
                    <div className='d-flex flex-column'>
                      <div className='headline-3-large'>Website Creation</div>
                      <p className='body-1-large'>Inspired by my work at Amdocs and multiple portfolios that I have seen, I
                      decided to make a website portfolio of my own. Thus, successfully creating a simple but dynamic and Accessible
                      website.</p>
                    </div>
                    <div className='d-flex flex-wrap gap-4 subhead-1-large align-items-center mb-1'>
                      <div className='skill-pill'>
                        Bootstrap
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
                        </svg>
                      </div>
                      <div className='skill-pill'>React
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                        </svg>
                      </div>
                      <div className='skill-pill'>HTML
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path>
                        </svg>
                      </div>
                      <div className='skill-pill'>CSS
                        <svg width="35px" height="35px" style={{marginLeft: '5px'}} viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
	                        <path d="M16.5 1.26l-2.407 12.064-7.277 2.416-6.316-2.416 0.643-3.223h2.688l-0.263 1.33 3.818 1.457 4.398-1.457 0.614-3.068h-10.929l0.524-2.686h10.94l0.345-1.73h-10.931l0.533-2.687h13.62z" fill="#000000" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 col-3'>
                    <p className='legal-1-demi font-italic text-dark'><i>APR 2024 - PRES</i></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
