import React from 'react'
import { Link } from 'react-router-dom';

const Writing_TheRoughDraftOfTheWebsite = () => {
  return (
    <div className="App-content-stuff d-flex flex-column">
        <div className='blog-container d-flex flex-column mb-2 p-4'>
            <div className='d-flex justify-content-center mb-2'>
                <h1 className='newspaper-title text-center mb-3'>The Rough Draft of the Website</h1>
            </div>
            <div className='d-flex justify-content-between'>
                <p className='newspaper-legal'>27 May 2024</p>
                <p className='newspaper-legal'>Michael Ani</p>
            </div>
            <div className='horizontal-line-grey mt-3 mb-3'></div>
            <p className='newspaper-body'>When I graduated, I was trying to do anything to improve my chances of
            getting a job, and one thing I noticed I didn't have was a proper profile. The realization hit me when 
            I went on my co-intern from Amdocs Tom's LinkedIn, as he graduated as well. The first thing I noticed was 
            that he has a link to <Link to='https://www.tomkastoryano.com/' target='_blank' className='no-decoration'>his own website</Link>, 
            which he created from React.</p>
            <p className='newspaper-body'>Inspired by his creation, I wanted to look at multiple website portfolios that 
            were created from scratch, avoiding the use of a template so I can hone my frontend
            development skills naturally. I ended up finding <Link to='https://www.tomkastoryano.com/' target='_blank' className='no-decoration'>this portfolio </Link>
            by Robb Owen, an astounding showcase of web development whih several features:</p>
            <ul className='newspaper-body'>
                <li> Consideration of Accessibility. </li>
                <li> A multitude of pages.</li>
                <li> A responsive dropdown submenu.</li>
                <li> A layered SVG dependent on the mouse location.</li>
            </ul>
            <p className='newspaper-body'>From that, I decided to jump right in after looking up how to start a React app and go from there. I 
            made a Figma account but once I envisioned how I wanted my site to look like, I just started coding without putting anything into Figma. 
            I do think that I should have started with the Figma first but I couldn't help myself. It took a lot of Googling as well as I got stuck at
            a bunch of points, such as how to add animations, routers, icons, and more. Of course, that was nothing that 'npm install' couldn't fix.
            However, what gave me the biggest issue was the sidebar. I had trouble figuring out how to construct it. Even in it's current state, I still
            have issues with Accessiblity, especially when on focus:</p>
            <div></div>
            
            

        </div>
      
    </div>
  )
}

export default Writing_TheRoughDraftOfTheWebsite
