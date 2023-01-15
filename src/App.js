import './App.css';
import profilePic from './Photo.jpg'
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

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  const [skillItemsShown, setSkillItemsShown] = useState([]);
  var myRef = React.createRef();
  const [alert, setAlert] = useState({ message: "", error: false });

  var age = new Date().getFullYear() - 2006;
  if(new Date().getMonth() < 7){
    age = age - 1;
  }

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

    emailjs.sendForm('service_dsep4q3', 'template_37cqiah', e.target, 'user_Wk9qoMVIaGi5lHkbSUDMu')
      .then((result) => {
        setAlert({ message: "Email Sent!", error: false })
        setTimeout(() => {
          setAlert({ message: "", error: false })
        }, 1000);
      }, (error) => {
        setAlert({ message: "Email Not Sent, Try Again later!", error: true })
        setTimeout(() => {
          setAlert({ message: "", error: false })
        }, 1000);
      });
  }

  return (
    <div className="App">
      <NavBar className="animate__animated animate__lightSpeedInLeft" />
      <div>
        <h1 style={{ color: 'white', textAlign: 'center', position: 'relative' }}><div id='about' className="LinkID"></div>About</h1>
      </div>
      <div className="aboutDiv">
        <img data-aos="fade-right" src={profilePic} alt="Loading..." className="profileImg" />
        <div>
          <h3 data-aos="fade-left" data-aos-delay="500" >
            I am a {age}-year-old full-stack developer who has a passion for web and mobile app development.</h3>
          <h3 data-aos="fade-left" data-aos-delay="550">
            I have more than two years of experience in programming.</h3>
          <h3 data-aos="fade-left" data-aos-delay="600">
            I started my journey at the start of 2019, and this was when I saw that technology is the future!</h3>
          <h3 data-aos="fade-left" data-aos-delay="650">
            I also had an interest in coding and stuff since I was a child.</h3>
          <h3 data-aos="fade-left" data-aos-delay="700">
            I am interested in both long-term and short-term projects.</h3>
          <h2 data-aos="fade-left" data-aos-delay="1000">
            Why would you choose me?
          </h2>
          <ul style={{ listStyleType: "none" }}>
            <li data-aos="fade-left" data-aos-delay="1050"><i className="fa fa-check" /> I care about your time and I won't cross deadline</li>
            <li data-aos="fade-left" data-aos-delay="1100"><i className="fa fa-check" /> I never share your project with anyone else</li>
            <li data-aos="fade-left" data-aos-delay="1150"><i className="fa fa-check" /> I will 100% satisfy my clients</li>
            <li data-aos="fade-left" data-aos-delay="1200"><i className="fa fa-check" /> Free changes after 2 days of delivery</li>
          </ul>
        </div>
      </div>
      <h1 style={{ color: 'white', textAlign: 'center', clear: 'both', position: 'relative' }}><div id='skills' className="LinkID"></div>Skills</h1>
      <div className="skillDiv">
        <div className="skillFrontEnd">
          <h2 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" style={{ textAlign: 'center', color: 'white' }}>Front End</h2>

          <div data-aos="fade-right" data-aos-id="skl1" data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
            <ProgressBar id="Bar1" title="HTML:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
            <ProgressBar id="Bar2" title="CSS:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
            <ProgressBar id="Bar3" title="React.js:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="250">
            <ProgressBar id="Bar4" title="React Native:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <ProgressBar id="Bar5" title="Expo:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="350">
            <ProgressBar id="Bar6" title="XML:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">
            <ProgressBar id="Bar12" title="Unity:" fontSize={15} total={100} time={40} speed={2} start={0} />
          </div>
        </div>
        <div className="skillBackEnd">
          <h2 data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" style={{ textAlign: 'center', color: 'white' }}>Back End</h2>

          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
            <ProgressBar id="Bar7" title="Node.js:" fontSize={15} total={50} time={40} speed={1} start={0} />
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
            <ProgressBar id="Bar8" title="Express:" fontSize={15} total={50} time={40} speed={1} start={0} />
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
            <ProgressBar id="Bar9" title="MongoDB:" fontSize={15} total={80} time={40} speed={1} start={0} />
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="250">
            <ProgressBar id="Bar10" title="Java:" fontSize={15} total={75} time={40} speed={1} start={0} />
          </div>
          <div data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <ProgressBar id="Bar11" title="C#:" fontSize={15} total={60} time={40} speed={1} start={0} />
          </div>
        </div>
      </div>
      <h1 style={{ color: 'white', textAlign: 'center', position: 'relative' }}><div id='projects' className="LinkID"></div>Projects</h1>

      <div className="projectsParentCon">
        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="projectCon project1">
          <h3 className="imageSliderTitle">App</h3>
          <ImageSlider images={mealMonkeyPictures} parentContainerClassName="slider" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="projectCon project2">
          <h3 className="imageSliderTitle">App</h3>
          <ImageSlider images={eComPictures} parentContainerClassName="slider" />
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="projectCon project3">
          <h3 className="imageSliderTitle">Website</h3>
          <ImageSlider images={webPictures} parentContainerClassName="slider" />
        </div>
      </div>

      <h1 style={{ color: 'white', textAlign: 'center', marginTop: 130, position: 'relative' }}><div id='contact' className="LinkID"></div>Contact</h1>

      <div className="contactCon">
        <form className="contactForm" onSubmit={sendEmail}>
          <h2 data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="leaveMsgTxt">Leave a message</h2>
          <label data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="contactFormLabel">Your Name<span className="contactFormLabelRequired">(required)</span></label>
          <input data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="50" className="contactInput" required type="text" placeholder="Your Name" name="user_name" />
          <label data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="100" className="contactFormLabel" >Your Email<span className="contactFormLabelRequired">(required)</span></label>
          <input data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="150" className="contactInput" required type="email" placeholder="Your Email" name="user_email" />
          <label data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="200" className="contactFormLabel">Message<span className="contactFormLabelRequired">(required)</span></label>
          <textarea data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="250" className="anim_delay_800ms contactInput" rows="7" required placeholder="Your Message" name="message" />
          <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-delay="300" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <input className="contactFormBtn" type="submit" value="Send" />
            {alert.message && <h4 style={alert.error ? { color: 'red' } : { color: 'green' }}>{alert.message}</h4>}
          </div>
        </form>
        <div className="contactInfoCon">
          <h4 data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="contactInfoTitle">Email:</h4>
          <h5 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="50" className="contactInfoData userSelect" >immalijawad@gmail.com</h5>
          <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="50" className="contactInfoDivider"></div>
          <h4 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="100" className="contactInfoTitle">Phone Number:</h4>
          <h5 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="150" className="contactInfoData userSelect">+92 313 0115441</h5>
          <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="150" className="contactInfoDivider"></div>
          <h4 data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="200" className="contactInfoTitle">On The Web:</h4>
          <a data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="250" href="https://www.fiverr.com/mali_jawad" target="blank" className="contactInfoLink">Fiverr</a>
          <a data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="300" href="https://www.upwork.com/freelancers/~010cb17d30152e395c" target="blank" className="contactInfoLink">Upwork</a>
          <a data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="350" href="https://github.com/aliJawadDev" target="blank" className="contactInfoLink">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
