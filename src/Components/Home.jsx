import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // State to control fade-in animation
  const [showLoginContainer, setShowLoginContainer] = useState(false);

  const images = [
    'https://tavitsphotography.com/wp-content/uploads/2019/10/Troon-Global-Leadership-Conference-2019-175.jpg',
    'https://t4.ftcdn.net/jpg/01/62/56/85/360_F_162568539_xraQkIbYxQD4GPiBUkzQXXudMwE6RYvF.jpg',
    'https://images.unsplash.com/photo-1701099153549-a94513b57f60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://i.insider.com/62cdb9828045920019aeaf45?width=800&format=jpeg&auto=webp',
    // Add more image URLs as needed
  ];

  const changingTexts = [
    "B.eventfull approaches every project with meticulous attention to detail and obsessive precision.",
    " Regardless of size and scope, we treat your event like a business with clear strategic goals, defined milestones, and a comprehensive plan to ensure that your event is delivered on time and on budget.",
    " At b.eventfull, we put your organization first. We learn about your business, we focus on your challenges, and we plan events to support your goals."
    // Add more changing texts as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeIn(true); // Trigger fade-in animation
      setTimeout(() => setFadeIn(false), 1000); // Reset fade-in animation after 1 second
    }, 3000); // Change slide and text every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length, changingTexts.length]);

  const toggleLoginContainer = () => {
    setShowLoginContainer(!showLoginContainer);
  };
  

  return (
    <div>
      <header>
      <img src='https://static.wixstatic.com/media/22af58_ca35a20ca0c7433d98cdda3920c8841f~mv2.png/v1/fill/w_500,h_500,al_c/22af58_ca35a20ca0c7433d98cdda3920c8841f~mv2.png' alt='logo' />
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/event-gallery">Event Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </nav>
      <section className="proud-section">
      <div className="background"></div> {/* Background image */}
      <div className="overlay"></div>
      <div className="content">
        <h2 className="section-heading">LUXUARY AT AFFORDABLE</h2>
        <img  src='https://weedit.photos/wp-content/themes/yootheme/cache/black-and-white-wedding-photos-eliminate-distractions-efe2c485.jpeg' alt="Proud Us Background"/>
        <img src='https://images.pexels.com/photos/5805082/pexels-photo-5805082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='proud'></img>
        <img src='https://i.pinimg.com/originals/35/67/a0/3567a002c651539944b59337a67f37e5.jpg' alt='proud'></img>
        <img src='https://img.freepik.com/free-photo/party-celebration-wallpaper-background-monochrome_53876-176738.jpg' alt='proud'></img>
        <p> Luxury Event Planning Boutique, based in South India planning with services across India and Internationally. We are team dedicated to making your wedding and other special event dreams come to life. From the initial consultation, to your special day (and everything in between) we’re there for you each step of the way – guiding, planning and coordinating everything – so that you can enjoy your dream day to the fullest! .</p>
      </div>
    </section>
    <section className="why-section">
    <div className="slideshow">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
        
      ))}
    </div>
    <div className='logo-container'>
    <img src='https://static.wixstatic.com/media/22af58_ca35a20ca0c7433d98cdda3920c8841f~mv2.png/v1/fill/w_500,h_500,al_c/22af58_ca35a20ca0c7433d98cdda3920c8841f~mv2.png' alt='logo1'/>
    </div>
    
          <p className={`changing-text ${fadeIn ? 'fade-in' : ''}`}>{changingTexts[currentImageIndex]}</p>
        
  </section>
  <section className="scrolling-text">
<div className="scrolling-text-container">
<marquee direction="left" behavior="scroll" scrollamount="10" style={{display: 'inline-block'}}>
  WEDDING. PRE & POST WEDDING PHOTOSHOOT. BIRTHDAY PARTIES. COOPERATE EVENTS. PRIVATE PARTIES . BABY SHOWER. 
</marquee>
</div>
</section>
      <div className="works-section">
        <div className='container'>
          <div className='text-block'> 
            <h3>b.eventful</h3>
            <p1>OUR  goal  IS  TO MAKE SURE YOUR EVENT IS EVERYTHING YOU dreamed  IT WOULD BE AND MORE - AFTER ALL, THIS IS  your  DAY!</p1>
          </div>
        </div>
      </div>
      <section className="features-section">
      <h2 className="section-heading">TELL US WHAT'S YOUR DAY AND WE WILL MAKE IT UNFORGOTTABLE!</h2>
        <div className="image-container-horizontal">
            <div>
            <img src='https://image.wedmegood.com/resized/800X/uploads/images/fe8115e5796b4af9b30411e854572537realwedding/2022-03-25_23-42-23.jpg' alt="feature-wedding"/>
            <p>Wedding</p>
            <button onClick={toggleLoginContainer}>Book Now</button>

          </div>
          <div>
            <img src='https://image1.masterfile.com/getImage/ODQ2LTAzMTYzNTA5ZW4uMDAwMDAwMDA=ACc85L/846-03163509en_Masterfile.jpg' alt='feature-bthday'></img>
            <p>Birthday Party</p>
            <button onClick={toggleLoginContainer}>Book Now</button> 

          </div>
          <div>
            <img src='https://www.photo8.co.uk/wp-content/uploads/2020/01/Birmingham-event-photographer.jpg' alt='feature-cooperate'></img>
            <p>Corporate Event</p>
            <button onClick={toggleLoginContainer}>Book Now</button> 

          </div>
          <div>
            <img src='https://madhatphotobooth.com/wp-content/uploads/2023/03/Kardashian-style-photo-booth-BW-15.jpg' alt='private parties'></img>
            <p>Private Party</p>
            <button onClick={toggleLoginContainer}>Book Now</button>

          </div>
          <div>
            <img src='https://img.freepik.com/premium-photo/pregnant-woman-hold-photo-picture-belly-ultrasound-scan-stomach-future-daughter-son-home-girl-expecting-newborn-motherhood-concept-baby-shower-black-white-photo_180731-5636.jpg' alt='babyshower'></img>
            <p>Baby Shower</p>
            <button onClick={toggleLoginContainer}>Book Now</button> 

          </div>
          </div>
          {showLoginContainer && <LoginContainer toggleLoginContainer={toggleLoginContainer} />}

            
         
      </section>
      <footer>
        <p>&copy; 2024 b.Eventful. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
