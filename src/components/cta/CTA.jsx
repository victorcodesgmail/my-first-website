import React from 'react'
import './cta.css'
// import { useHistory } from 'react-router-dom';

const CTA = () => {
  

//   const handleCapture = () => {

  
//     if (isCameraPaused) {
//       // If the camera is paused, resume the video stream.
//       cameraFeed.play();
//     } else {
//       // If the camera is not paused, pause the video stream.
//       cameraFeed.pause();
//     }
//     setCameraPaused(!isCameraPaused); // Toggle the camera state
//   };

//   const [isCameraPaused, setCameraPaused] = React.useState(false); // Initialize camera state

//   // ... Rest of your component ...

 
//     // Toggle the camera state
  
  

//   const cameraFeed = document.getElementById('cameraFeed');
// let isCameraFrozen = true; // Initialize a variable to track whether the camera is frozen.

// navigator.mediaDevices.getUserMedia({ video: false})
//   .then(stream => {
//     cameraFeed.srcObject = stream;

//     // Add a click event listener to the video element to toggle freezing/unfreezing.
//     cameraFeed.addEventListener('click', () => {
//       if (isCameraFrozen) {
//         // If the camera is frozen, resume the video stream.
//         cameraFeed.play();
//         isCameraFrozen = false;
//       } else {
//         // If the camera is not frozen, pause the video stream.
//         cameraFeed.pause();
//         isCameraFrozen = true;
//       }
//     });
//   })
//   .catch(error => {
//     console.error('Error accessing camera:', error);
//   });

//   const handleLogin = () => {
//    history.push('./page')
//   };
  return (
    <>
    <div>
        

        <div className = "section__padding">

      
           

        <h1>HEY STUDENT, WELCOME TO EDU CAFE</h1>
        <h2>Kindly details below and we will get your profile</h2> 
        <h1>Account Details</h1>
            <h3>USERNAME*</h3>
            <input type = "text" placeholder='ENTER YOUR USERNAME'></input>
            <h3>Email address *</h3>

            <input type="email" placeholder = "ENTER YOUR EMAIL"/>
            <h3>password*</h3>
            <input type = "text" placeholder = "password" />
            <h3>Confirm password</h3>
            <input type='text' placeholder = "confirm your password"/>
        </div>

        <div className='section__padding'>
            <h1>Profile Details</h1>
            <h3>name</h3>
            <input type="text" placeholder='ENTER YOUR FULLNAME' />
            <h3>field of research</h3>
            <input type = "text" placeholder='enter your field of research' />
            <h3>Biography</h3>
            <input type = "text" placeholder='what do you want yur students to know about' />
            <h3>profile photo</h3>
            <video className="video" id="cameraFeed" autoPlay>

           </video>
            <video></video>
            {/* <button onClick={handleCapture}>{isCameraPaused ? 'Resume' : 'Capture'}</button> */}
            <h3>OR</h3>
            <input type="text" placeholder = "copy and paste email address of your profile picture" />
            {/* <button type='button' onClick={handleLogin}><Link to="card"><h2>LOG In</h2></Link></button>  */}
            
        </div>

    </div>
    </>
  )
}
    
  


export default CTA