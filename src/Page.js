import Pg from './page.module.css';
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './Images/logos.png';
import Logo1 from './Images/caliberlogo.png';
import Work1 from './Images/company1.png';
import Work2 from './Images/insta.png';
import Work3 from './Images/company2.png';
import Work4 from './Images/portfolio.png';
import Work5 from './Images/visionpro.png';
import Work6 from './Images/google.png';
import Work7 from './Images/caliber.png';
import Work8 from './Images/airmagic.png';
import Work9 from './Images/iphone.png';
import Work10 from './Images/smart.png';
import Work11 from './Images/company3.png';
import Work12 from './Images/company4.png';
import Work13 from './Images/jass.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link }  from 'react-scroll';

export default function Page() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [mobileView, setMobileView] = useState(false);
 
  const handleToggleNav = () => {
    if (mobileView) {
      setShowNavLinks(!showNavLinks);
    }
  };

  const checkScreenSize = () => {
    setMobileView(window.innerWidth <= 750);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <main>
      <div className={Pg.main}>
        <div className={Pg.nav}>
          <div className={Pg.navb}>
            <h1>Portfolio</h1>
            <button className={Pg.navicon} onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={`${Pg.navb1} ${mobileView ? 'flex-column' : ''}`}
              style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}
            >
              <Link className={Pg.lk} to="#">
                Home</Link>
             <Link to='about' smooth={true} duration={800} className={Pg.lk} >About</Link>
             <Link to='works' smooth={true} duration={800} className={Pg.lk} >Works</Link>
             <Link to='services' smooth={true} duration={800} className={Pg.lk} >Services</Link>
             <Link to='contact' smooth={true} duration={2000} className={Pg.lk}>Contact</Link>
           </div>
           
          </div>
        </div>
        <div className={Pg.maincont} >
          <div className={Pg.cont}>
            <div className={Pg.cont1}>
              <h2 style={{ "--i": 2 }}>Hello , I'm</h2>
              <h1 style={{ "--i": 3 }}>Vignesh</h1>
              <p  style={{ "--i": 4 }}> Digital Marketing, Software training, Brand management</p>
            </div>
            <div className={Pg.cont2}>
              <a style={{ "--i": 5 }} className={Pg.bt1} href='http://www.linkedin.com/in/vignesh-p-g-b051ba300'><FontAwesomeIcon  className={Pg.icn11} icon={faLinkedinIn} /></a>
              <a style={{ "--i": 6 }} className={Pg.bt1} href='https://github.com/vigneshpg9585'><FontAwesomeIcon  className={Pg.icn11} icon={faGithub} /></a>
              <a style={{ "--i": 7 }} className={Pg.bt1} href='https://www.instagram.com/alone._.viky/?utm_source=ig_web_button_share_sheet'><FontAwesomeIcon  className={Pg.icn11} icon={faInstagram} /></a>
              <a style={{ "--i": 8 }} className={Pg.bt1} href='https://wa.me/9585629974'><FontAwesomeIcon  className={Pg.icn11} icon={faWhatsapp} /></a>
            </div>
          </div>
          <div className={Pg.img}>
            <img style={{ "--i": 1 }} className={Pg.image1} src={Logo} alt="logo"/>
          </div>
        </div>
        <div id='about' className={Pg.maincont1} data-aos="fade-right" data-aos-delay="500">
          <img data-aos="fade-left" data-aos-delay="200" className={Pg.image2} src={Logo} alt="logo"/>
          <div className={Pg.abt2}>
           <h1 data-aos="fade-right" data-aos-delay="300">Who am I?</h1>
           <p data-aos="fade-right" data-aos-delay="400">I am a Computer Science Engineering student curently pursing on Pavai College of Technology with a growing passion for digital marketing, social media management, and coding. I have completed internships as a Social Media Manager at OrangeSugar and as an Influence Marketing Intern at Virality X, where I developed skills in managing social media platforms and influencer campaigns. Alongside this, I enjoy teaching Technomatirx plant simulation software to polytechnic students and have developed a solid foundation in managing educational content.

I have hands-on experience in Android app development, having built a simple web-based app and explored Android system modifications. I'm passionate about exploring emerging technologies, and my skills in communication, problem-solving, and team management allow me to excel in collaborative environments.</p>
           <a  href='https://drive.google.com/file/d/1lITqYUSZvqE14Pqjvc-oVil2MzcFXb6v/view?usp=sharing' className={Pg.bt3}>Download Resume</a>
          </div>
        </div>
        <div id='services' className={Pg.maincont4}data-aos="fade-left" data-aos-delay="500">
          
        </div>
        <div className={Pg.maincont2}>
          <div className={Pg.sk1}>
            <h1 data-aos="fade-right" data-aos-delay="500">My Skills</h1>
            <p data-aos="fade-left" data-aos-delay="500">- Passionate CSE student, digital marketer, Android Developer, problem-solver, and tech enthusiast. -</p>
          </div>
          <div className={Pg.sk2}>
              <div className={Pg.skk1}>
                  <div data-aos="fade-right" data-aos-delay="500" className={Pg.sk21}>
                    <h1>Social media management</h1>
                    <p>Social media management entails creating and scheduling content to engage audiences and build brand awareness while analyzing metrics to enhance strategies.</p>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="600" className={Pg.sk21}>
                    <h1>Influencer marketing</h1>
                    <p>Influencer marketing involves collaborating with social media influencers to promote products or services, leveraging their audience reach to enhance brand visibility and trust.</p>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="700" className={Pg.sk21}>
                    <h1>Software training</h1>
                    <p>Software training focuses on educating users on how to effectively use specific software tools and applications, improving their skills and productivity in a professional setting.</p>
                  </div>
                  <div  data-aos="fade-right" data-aos-delay="800" className={Pg.sk21}>
                    <h1>digital marketing</h1>
                    <p>Digital marketing involves promoting products or services online using various channels, such as social media, email, and search engines, to reach and engage target audiences effectively.</p>
                  </div>
              </div>
              <div className={Pg.skk2}>
                 <div data-aos="fade-left" data-aos-delay="200" className={Pg.skk21}>
                    <h2>SEO</h2>
                    <span className={Pg.bar}><span className={Pg.react}></span><p className={Pg.barp}> - 75%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="300" className={Pg.skk21}>
                    <h2>Influencer Marketing</h2>
                    <span className={Pg.bar}><span className={Pg.html}></span><p className={Pg.barp}> - 80%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="400" className={Pg.skk21}>
                    <h2>Software training</h2>
                    <span className={Pg.bar}><span className={Pg.css}></span><p className={Pg.barp}> - 80%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="500" className={Pg.skk21}>
                    <h2>Digital marketing</h2>
                    <span className={Pg.bar}><span className={Pg.next}></span><p> -70%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="600" className={Pg.skk21}>
                    <h2>Brand Management</h2>
                    <span className={Pg.bar}><span className={Pg.tail}></span><p> - 60%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="700" className={Pg.skk21}>
                    <h2>Video editing</h2>
                    <span className={Pg.bar}><span className={Pg.node}></span><p> - 60%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="800" className={Pg.skk21}>
                    <h2>App develpoment</h2>
                    <span className={Pg.bar}><span className={Pg.mongo}></span><p> - 70%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="900" className={Pg.skk21}>
                    <h2>Analytics and Reporting</h2>
                    <span className={Pg.bar}><span className={Pg.mysql}></span><p> - 65%</p></span>
                  </div>
              </div>
          </div>
        </div>
        <div className={Pg.maincont3}>
          <div className={Pg.mainc1}>
            <h1 id='works' data-aos="fade-left" data-aos-delay="500">My Work Experience</h1>
          </div>
          <div className={Pg.mainc2}>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work1} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>OrangeSugar</h1>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.orangesugar.in'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}> . Assisting in the development and implementation of social media strategies.<br></br>
. Creating and curating engaging content for our social media platforms.<br></br>
. Monitoring social media channels for trends and feedback.<br></br>
. Analyzing social media metrics and providing insights to improve engagement.</p><br></br><br></br><br></br><br></br><br></br><br></br>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work3} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>ViralityX</h1>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://viralityx.co'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>

                 </div>
               </div>
              
               <p className={Pg.prp}>. Social Media comments.<br></br>
. Influencer Outreach.<br></br>
. Agency Outreach.</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work12} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>INSOURCE DESIGN TECH</h1>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.insourcedesigntech.com'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
              
               <p className={Pg.prp}>. Designed and implemented social media marketing strategies to enhance brand visibility and audience engagement.<br></br>  
. Planned and executed targeted marketing campaigns, driving awareness and lead generation for workshops and training programs.<br></br>   
. Developed and managed content calendars to ensure consistent and impactful messaging across platforms.<br></br>   
. Conducted performance analysis of social media campaigns, optimizing strategies based on key metrics and audience insights.<br></br>   
. Collaborated with cross-functional teams to implement innovative campaign ideas, boosting audience participation and industry outreach.</p><br></br><br></br><br></br><br></br>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work11} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Psyber Incorporation</h1>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://psyber.co'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
              
               <p className={Pg.prp}> • Create and schedule content for various social media platforms.<br></br>
. Engage with followers and monitor social media trends.<br></br>
. Develop social media strategies to increase engagement and followers.<br></br>
. Extract data such as turf details, Justdial leads, and owner contact information.<br></br>
. Create and send email and WhatsApp marketing campaigns.<br></br>
. Segment email lists and personalize email content.<br></br>
. Analyze email and WhatsApp campaign performance and generate reports.<br></br>
. Monitor campaign performance and optimize for better ROI.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project.</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   
                 </div>
                
               </div>
              
          
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                  
                 </div>
                 <div className={Pg.mn2}>
                 
                 </div>
               </div>
               
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                  
                 </div>
                 <div className={Pg.mn2}>
                  
                 </div>
               </div>
              
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   
                 </div>
                 <div className={Pg.mn2}>
                   
                 </div>
               </div>
              
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   
                 </div>
                 <div className={Pg.mn2}>
                  
                 </div>
               </div>
              
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                  
                 </div>
                 <div className={Pg.mn2}>
                   
                 </div>
               </div>
              
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                  
                 </div>
                 <div className={Pg.mn2}>
                 </div>
               </div>
              
            </div>
            <div data-aos="fade-right" data-aos-delay="100" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   
                 </div>
                 <div className={Pg.mn2}>
                
                 </div>
               </div>
          
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                  
                 </div>
                 <div className={Pg.mn2}>
                 </div>
               </div>
               
            </div>
          </div>
        </div>
        <div id='contact' className={Pg.maincont5} data-aos="fade-left" data-aos-delay="400" >
          <div className={Pg.contact}>
            <div className={Pg.contact2}>
              <h1>Personal Email: <span className={Pg.sp}><b>pgvignesh32@gmail.com</b></span></h1>
              <h1>Contact Number: <span className={Pg.sp}><b>9585629974</b></span></h1>

            </div>
            <img className={Pg.image121} src={Logo} alt="logo"/>
            <div className={Pg.contact1}>
            <h1>Follow me on Instagram: <span className={Pg.sp}><b>
            @alone._.viky</b></span></h1>
            </div>
          </div>
        </div>
     </div>  
    </main>
  );
}
