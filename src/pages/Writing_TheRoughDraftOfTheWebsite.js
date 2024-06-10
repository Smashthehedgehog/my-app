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
            that he has a link to <Link to='https://www.tomkastoryano.com/' target='_blank' className='no-decoration'>his own website,</Link> which he created from React.</p>
            
            

        </div>
      
    </div>
  )
}

export default Writing_TheRoughDraftOfTheWebsite
