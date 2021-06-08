import './App.css';
import profilePic from './Photo.jpeg'
import React, { useState, useEffect } from 'react';
import { ProgressBar, NavBar, ImageSlider } from './MyComponent';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import mealMonkey0 from './MealMonkey/0.jpeg'
import mealMonkey1 from './MealMonkey/1.jpeg'
import mealMonkey2 from './MealMonkey/2.jpeg'
import mealMonkey3 from './MealMonkey/3.jpeg'
import mealMonkey4 from './MealMonkey/4.jpeg'
import mealMonkey5 from './MealMonkey/5.jpeg'
import mealMonkey6 from './MealMonkey/6.jpeg'
import mealMonkey7 from './MealMonkey/7.jpeg'
import mealMonkey8 from './MealMonkey/8.jpeg'
import mealMonkey9 from './MealMonkey/9.jpeg'

import eCom0 from './ECom/0.jpeg'
import eCom1 from './ECom/1.jpeg'
import eCom2 from './ECom/2.jpeg'
import eCom3 from './ECom/3.jpeg'
import eCom4 from './ECom/4.jpeg'
import eCom5 from './ECom/5.jpeg'
import eCom6 from './ECom/6.jpeg'
import eCom7 from './ECom/7.jpeg'
import eCom8 from './ECom/8.jpeg'
import eCom9 from './ECom/9.jpeg'
import eCom10 from './ECom/10.jpeg'
import eCom11 from './ECom/11.jpeg'

import web0 from './WebUI/0.png'
import web1 from './WebUI/1.png'
import web2 from './WebUI/2.png'
import web3 from './WebUI/3.jpeg'



function App() {
  init("user_Wk9qoMVIaGi5lHkbSUDMu");
  useEffect(() => {
    scrollChange();
    document.addEventListener('scroll', function (e) {
      scrollChange();
    });
  });
  function scrollChange() {
    var lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 0) {
      setSkillTextShown(true);
    }
    if (lastKnownScrollPosition > 100) {
      setSkillsShown(true);
    }
    if (lastKnownScrollPosition > 250) {
      setSkillItemsShown(true);
    }
    if (lastKnownScrollPosition > 550) {
      setProjectsShown(true)
    }
    if (lastKnownScrollPosition > 800) {
      setProjectSlidersShown(true)
    }
    if(lastKnownScrollPosition > 1200){
      setContactShown(true);
    }
    if(lastKnownScrollPosition > 1350){
      setContactDetailShown(true);
    }
  }
  const [skillTextShown, setSkillTextShown] = useState(false);
  const [skillsShown, setSkillsShown] = useState(false);
  const [skillItemsShown, setSkillItemsShown] = useState(false);
  const [projectsShown, setProjectsShown] = useState(false);
  const [projectSlidersShown, setProjectSlidersShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [contactDetailShown, setContactDetailShown] = useState(false);

  const [alert, setAlert] = useState({message:"",error: false});


  const mealMonkeyPictures = [
    mealMonkey0,
    mealMonkey1,
    mealMonkey2,
    mealMonkey3,
    mealMonkey4,
    mealMonkey5,
    mealMonkey6,
    mealMonkey7,
    mealMonkey8,
    mealMonkey9,
  ];

  const eComPictures = [
    eCom0,
    eCom1,
    eCom2,
    eCom3,
    eCom4,
    eCom5,
    eCom6,
    eCom7,
    eCom8,
    eCom9,
    eCom10,
    eCom11,
  ];

  const webPictures = [
    web0,
    web1,
    web2,
    web3
  ]

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_icyvrh2', 'template_37cqiah', e.target, 'user_Wk9qoMVIaGi5lHkbSUDMu')
      .then((result) => {
        setAlert({message:"Email Sent!", error:false})
        setTimeout(() => {
        setAlert({message:"", error:false})
        }, 1000);
      }, (error) => {
        setAlert({message:"Email Not Sent, Try Again later!", error:true})
        setAlert({message:"", error:false})
      });
  }

  return (
    <div className="App">
      <NavBar className="animate__animated animate__lightSpeedInLeft" />
      <div>
        <h1 className="animate__animated animate__bounceInDown anim_delay_50ms" style={{ color: 'white', textAlign: 'center' }}>About</h1>
      </div>
      <div className="aboutDiv">
        <img src={profilePic} alt="Loading..." className="animate__animated animate__bounceInLeft anim_delay_500ms profileImg" />
        <div style={{ color: 'white', marginRight: 50 }}>
          <h3 className="animate__animated animate__bounceInRight anim_delay_500ms">
            I am a 14-year-old full-stack developer who has a passion for web and mobile app development.</h3>
          <h3 className="animate__animated animate__bounceInRight anim_delay_500ms">
            I have more than two years of experience in programming.</h3>
          <h3 className="animate__animated animate__bounceInRight anim_delay_500ms">
            I started my journey at the start of 2019, and this was when I saw that technology is the future!</h3>
          <h3 className="animate__animated animate__bounceInRight anim_delay_500ms">
            I also had an interest in coding and stuff since I was a child.</h3>
          <h3 className="animate__animated animate__bounceInRight anim_delay_500ms">
            I am interested in both long-term and short-term projects.</h3>
          <i style={{ color: "#fff", fontSize: 20 }} className="fa fa-cart" />
          <h2 className="animate__animated animate__bounceInRight anim_delay_600ms">
            Why would you choose me?
          </h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="animate__animated animate__bounceInRight anim_delay_650ms"><i className="fa fa-check" /> I care about your time and I won't cross deadline</li>
            <li className="animate__animated animate__bounceInRight anim_delay_700ms"><i className="fa fa-check" /> I never share your project with anyone else</li>
            <li className="animate__animated animate__bounceInRight anim_delay_750ms"><i className="fa fa-check" /> I will 100% satisfy my clients</li>
            <li className="animate__animated animate__bounceInRight anim_delay_800ms"><i className="fa fa-check" /> Free changes after 2 days of delivery</li>
          </ul>
        </div>
      </div>
      <h1 className={skillTextShown ? "animate__animated animate__bounceInDown" : "hidden"} style={{ color: 'white', textAlign: 'center', clear: 'both' }}>Skills</h1>
      <div className="skillDiv">
        <div className="skillFrontEnd">
          <h2 className={skillsShown ? "animate__animated animate__bounceInLeft skillType" : "hidden skillType"} style={{ textAlign: 'center', color: 'white' }}>Front End</h2>
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_300ms" : "hidden"} title="HTML:" popup="HyperText Markup Language (HTML) is a simple markup system used to create hypertext documents that are portable from one platform to another." fontSize={15} total={100} time={40} speed={2} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_350ms" : "hidden"} title="CSS:" popup="CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files." fontSize={15} total={100} time={40} speed={2} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_400ms" : "hidden"} title="React.js:" popup="React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”." fontSize={15} total={100} time={40} speed={2} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_450ms" : "hidden"} title="React Native:" popup="React Native is a framework for building native iOS and Android applications using JavaScript. It's based on the same concepts as React, but uses native components instead of web components to render a user interface (UI)." fontSize={15} total={100} time={40} speed={2} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_500ms" : "hidden"} title="Expo:" popup="Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase." fontSize={15} total={100} time={40} speed={2} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInLeft anim_delay_550ms" : "hidden"} title="XML:" popup="In Android, an XML-based layout is a file that defines the different widgets to be used in the UI and the relations between those widgets and their containers." fontSize={15} total={100} time={40} speed={2} start={0} />
        </div>
        <div className="skillBackEnd">
          <h2 className={skillsShown ? "animate__animated animate__bounceInRight skillType" : "hidden skillType"} style={{ textAlign: 'center', color: 'white' }}>Back End</h2>
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInRight anim_delay_300ms" : "hidden"} title="Node.js:" popup="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser." fontSize={15} total={50} time={40} speed={1} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInRight anim_delay_350ms" : "hidden"} title="Express:" popup="Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs." fontSize={15} total={50} time={40} speed={1} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInRight anim_delay_400ms" : "hidden"} title="MongoDB:" popup="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas." fontSize={15} total={80} time={40} speed={1} start={0} />
          <ProgressBar startProgress={skillItemsShown} className={skillItemsShown ? "animate__animated animate__bounceInRight anim_delay_450ms" : "hidden"} title="Java:" popup="Java is a High Level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible." fontSize={15} total={75} time={40} speed={1} start={0} />
        </div>
      </div>
      <h1 className={projectsShown ? "animate__animated animate__bounceInDown" : "hidden"} style={{ color: 'white', textAlign: 'center' }}>Projects</h1>

      <div className="projectsParentCon">
        <div className="projectCon project1">
          <h3 className={projectSlidersShown ? "animate__animated animate__bounceInLeft imageSliderTitle" : "hidden"}>App</h3>
          <ImageSlider parentContainerClassName={projectSlidersShown ? "animate__animated animate__bounceInLeft" : "hidden"} images={mealMonkeyPictures} parentContainerStyle={{ height: 500, width: 400, margin: 'auto' }} />
        </div>
        <div className="projectCon project2">
          <h3 className={projectSlidersShown ? "animate__animated animate__bounceInDown imageSliderTitle" : "hidden"}>App</h3>
          <ImageSlider parentContainerClassName={projectSlidersShown ? "animate__animated animate__bounceInDown" : "hidden"} images={eComPictures} parentContainerStyle={{ height: 500, width: 400, margin: 'auto' }} />
        </div>
        <div className="projectCon project3">
          <h3 className={projectSlidersShown ? "animate__animated animate__bounceInRight imageSliderTitle" : "hidden"}>Website</h3>
          <ImageSlider parentContainerClassName={projectSlidersShown ? "animate__animated animate__bounceInRight" : "hidden"} images={webPictures} parentContainerStyle={{ height: 500, width: 400, margin: 'auto' }} />
        </div>
      </div>

      <h1 className={contactShown ? "animate__animated animate__bounceInDown" : "hidden"} style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>Contact</h1>

      <div className="contactCon">
        <form className="contactForm" onSubmit={sendEmail}>
          <label className={contactDetailShown ? "animate__animated animate__bounceInLeft contactFormLabel" : "hidden"}>Your Name<span className="contactFormLabelRequired">(required)</span></label>
          <input className={contactDetailShown ? "animate__animated animate__bounceInLeft contactInput" : "hidden"} required type="text" placeholder="Your Name" name="user_name" />
          <label className={contactDetailShown ? "animate__animated animate__bounceInLeft anim_delay_400ms contactFormLabel" : "hidden"} >Your Email<span className="contactFormLabelRequired">(required)</span></label>
          <input className={contactDetailShown ? "animate__animated animate__bounceInLeft anim_delay_400ms contactInput" : "hidden"} required type="email" placeholder="Your Email" name="user_email" />
          <label className={contactDetailShown ? "animate__animated animate__bounceInLeft anim_delay_800ms contactFormLabel" : "hidden"}>Message<span className="contactFormLabelRequired">(required)</span></label>
          <textarea className={contactDetailShown ? "animate__animated animate__bounceInLeft anim_delay_800ms contactInput" : "hidden"} rows="7" required placeholder="Your Message" name="message" />
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <input className={contactDetailShown ? "animate__animated animate__bounceInLeft anim_delay_1s contactFormBtn" : "hidden"} type="submit" value="Send" />
          {alert.message && <h4 style={alert.error ? {color:'red'} : {color:'green'}}>{alert.message}</h4>}
          </div>
        </form>
        <div className="contactInfoCon">
          <h4 className={contactDetailShown ? "animate__animated animate__bounceInRight contactInfoTitle" : "hidden"}>Email:</h4>
          <h5 className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_200ms contactInfoData" : "hidden"} >immalijawad@gmail.com</h5>
          <div className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_250ms contactInfoDivider" : "hidden"}></div>
          <h4 className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_400ms contactInfoTitle" : "hidden"}>Phone Number:</h4>
          <h5 className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_400ms contactInfoData" : "hidden"}>+92 313 0115441</h5>
          <div className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_450ms contactInfoDivider" : "hidden"}></div>
          <h4 className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_800ms contactInfoTitle" : "hidden"}>On The Web:</h4>
          <a href="https://www.fiverr.com/mali_jawad" target="blank" className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_850ms contactInfoLink" : "hidden"}>Fiverr</a>
          <a href="https://www.upwork.com/freelancers/~010cb17d30152e395c" target="blank" className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_900ms contactInfoLink" : "hidden"}>Upwork</a>
          <a href="https://github.com/aliJawadDev" target="blank" className={contactDetailShown ? "animate__animated animate__bounceInRight anim_delay_950ms contactInfoLink" : "hidden"}>Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
