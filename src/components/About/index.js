import React from 'react';
import profilePic from "../../assets/images/profile-image2.png";

function About() {
  return (
   <div className="row">
     <div className="column-1">
       <figure>
       <img src={profilePic} className="profile-picture" alt="profile of person" />
       </figure>
     </div>
     <div className="column-2">
       <h2>Hello There</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra. Urna condimentum mattis pellentesque id nibh tortor. Risus in hendrerit gravida rutrum. Volutpat commodo sed egestas egestas. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Integer feugiat scelerisque varius morbi. Dui nunc mattis enim ut tellus. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Dolor sit amet consectetur adipiscing elit.</p>
       <button className="contact-btn">Let's Talk</button>
     </div>
   </div>
  );
}

export default About;
