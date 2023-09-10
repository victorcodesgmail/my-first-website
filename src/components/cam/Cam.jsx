import React from 'react'
import './cam.css'

const Cam = () => {
  const cameraFeed = document.getElementById('cameraFeed');
navigator.mediaDevices.getUserMedia({video:true})
.then(
    stream =>{
        cameraFeed.srcObject = stream;
    }
    )
.catch(error => {
    console.error('error accessing camera:', error)
});
  return (

 <div className='divv'>
<video id="cameraFeed" autoplay>

        </video>
        </div>
  )
}

export default Cam