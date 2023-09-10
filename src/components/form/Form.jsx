import React from 'react'
import './form.css'

const Form = () => {

  return (
    <div>
        <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form method="post" action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
        <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <label for="personal-account"><input id="personal-account" type="radio" name="account-type" class="inline" /> Personal Account</label>
        <label for="business-account"><input id="business-account" type="radio" name="account-type" class="inline" /> Business Account</label>
        <label for="terms-and-conditions">
          <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" class="inline" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
        </label>
      </fieldset>
      <fieldset>
        <label for="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file" /></label>
        <label for="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
        <label for="referrer">How did you hear about us?
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label for="bio">Provide a bio:
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
        </label>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default Form


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import './students.css';

// const Students = () => {
//   const [isCameraPaused, setCameraPaused] = useState(false); // Initialize camera state
//   const cameraFeedRef = useRef(null); // Reference to the camera feed element
//   const history = useHistory(); // Get the history object for navigation

//   useEffect(() => {
//     // Get the camera feed element and initialize the camera
//     const cameraFeed = cameraFeedRef.current;

//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then(stream => {
//         cameraFeed.srcObject = stream;

//         // Add a click event listener to the video element to toggle freezing/unfreezing.
//         cameraFeed.addEventListener('click', () => {
//           if (isCameraPaused) {
//             // If the camera is frozen, resume the video stream.
//             cameraFeed.play();
//             setCameraPaused(false);
//           } else {
//             // If the camera is not frozen, pause the video stream.
//             cameraFeed.pause();
//             setCameraPaused(true);
//           }
//         });
//       })
//       .catch(error => {
//         console.error('Error accessing camera:', error);
//       });
//   }, []); // Empty dependency array to run this effect only once when the component mounts

//   const handleLogin = () => {
//     history.push('./page'); // Navigate to the 'page' route
//   };

//   return (
//     <div>
//       <div className="section__padding">
//         <h1>HEY STUDENT, WELCOME TO EDU CAFE</h1>
//         <h2>Kindly fill in the details below, and we will get your profile</h2>
//         <h1>Account Details</h1>
//         <h3>USERNAME*</h3>
//         <input type="text" placeholder="ENTER YOUR USERNAME" />
//         <h3>Email address *</h3>
//         <input type="email" placeholder="ENTER YOUR EMAIL" />
//         <h3>Password*</h3>
//         <input type="password" placeholder="Password" />
//         <h3>Confirm password</h3>
//         <input type="password" placeholder="Confirm your password" />
//       </div>

//       <div className="section__padding">
//         <h1>Profile Details</h1>
//         <h3>Name</h3>
//         <input type="text" placeholder="ENTER YOUR FULL NAME" />
//         <h3>Field of Research</h3>
//         <input type="text" placeholder="Enter your field of research" />
//         <h3>Biography</h3>
//         <input type="text" placeholder="What do you want your students to know about?" />
//         <h3>Profile Photo</h3>
//         <video className="video" id="cameraFeed" autoPlay ref={cameraFeedRef}></video>
//         <button onClick={() => handleCapture()}>
//           {isCameraPaused ? 'Resume' : 'Capture'}
//         </button>
//         <h3>OR</h3>
//         <input type="text" placeholder="Copy and paste email address of your profile picture" />
//         <button type="button" onClick={handleLogin}>
//           Submit
//         </button>
//         <Link to="card">Login as a Student</Link>
//       </div>
//     </div>
//   );
// };

// export default Students;
