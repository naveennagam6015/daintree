import React, { useState } from 'react';
import './App.css';
import one from './assets/company1.png';
import two from './assets/company2.png';
import three from './assets/company3.png';
import four from './assets/company4.png';
import banner from './assets/Banner.jpg';
import card from './assets/4fde44a021fbb6cebb24a10d5736d613.jpg';
import csImage from '/src/assets/image1.png';
import aaImage from '/src/assets/image2.png';
import siImage from '/src/assets/image3.png';
import Footer from './Footer';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(csImage);

  const handleMouseOver = (image) => {
    setBackgroundImage(image);
  };
  return (
    <div className='m-0 p-0 bg-black'>
      <div className='bg-black p-5 m-0'>
        {/* banner  */}
        <section>
          <div className='text-white p-12 m-5 flex items-center'>
            <div className='blue padding-80 d-flex center Bannerheight card-border'>
              <div className='w-1/2'>
                <h2 className='text-4xl font-bold leading-tight font64'>
                  Innovative IT solutions to streamline, scale, and succeed.
                </h2>
              </div>
              <div className='w-1/2 ms-5'>
                <img src={banner} width={520} height={256} alt="IT Solutions" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className='m-5'>
          
          <div className=' mt'>
            <h2 className='font100 mb-5 text-white'>
            Let’s make something great 
            </h2>
          </div>
          <h2 className='text-white font64'>
            What we <span className='colorBlue'>Offer</span>
          </h2>
          <p className='text-white font28'>Businesses trust Daintree Technologies for innovative IT solutions that drive growth, efficiency, and digital transformation.</p>



          <div className="main center d-flex mt-5 mb-5 spacebtn">
            <div className="content">
              <h2 className="cs font52" onMouseOver={() => handleMouseOver(banner)}>Cloud solutions</h2>
              <h2 className="aa font52" onMouseOver={() => handleMouseOver(aaImage)}>AI & Automation</h2>
              <h2 className="si font52" onMouseOver={() => handleMouseOver(siImage)}>System Integration</h2>
              <h2 className="cy font52" onMouseOver={() => handleMouseOver(aaImage)}>Cyber Security</h2>
            </div>
            <div className="image-box">
              <p className='text-white'>
              Scalable, secure, and optimized cloud architecture for modern businesses
              </p>
              <div className="image-change" style={{ backgroundImage: `url(${backgroundImage})` }}> </div>
            </div>
          </div>

          <h2 className='text-white pt-5 font64 width70'>
            Cutting-edge tech, seamless
            solutions – all in one place.
          </h2>
          <button className='font44 blue btn-border pt-2 pb-2'>Get Started</button>

        </section>

      </div>

      <div className='blue mt p-3 justcntr'>
        <h2 className='font100 text-white'>
          Let’s make something great
          {/* together */}
        </h2>
      </div>
      <div className='p-5 m-5'>
        <h2 className='text-white font44'>
          Daintree Technologies
        </h2>
        <p className='text-white font28'>
          At Daintree Technologies, we specialize in <span className='colorBlue underline'>cutting-edge IT solutions </span> that drive business growth, efficiency, and digital transformation. From building <span className='colorBlue'>custom software</span>  and <span className='colorBlue'>AI automation</span> to cloud solutions and <span className='colorBlue'>cybersecurity </span> , we empower businesses with innovative technology <span className='colorBlue'>tailored to their needs </span>. Our mission is to simplify complexity, enhance performance, and future-proof your success in the ever-evolving digital landscape.
        </p>
      </div>


      {/* card  */}

      <div className='bg-black p-5 m-0'>
        <h2 className='text-white ms-5 font64'>
          What we’ve done for our clients
        </h2>
        {/* <img src={card} width={300} height={450} alt="IT Solutions" className="rounded-lg shadow-lg" /> */}
        <div className='d-flex mt-5 spacebtn'>
          <div className='bgimg'>
            <h2 className='font24'>
              Blog
            </h2>
            <h2 className=' font20'>
              What we learned designing a new cyber security application
            </h2>
          </div>
          <div className='bg-white-color'>
            <h2 className='font24'>
              Blog
            </h2>
            <h2 className=' font20'>
              What we learned designing a new cyber security application
            </h2>
          </div>
          <div className='bgimg'>
            <h2 className='font24'>
              Blog
            </h2>
            <h2 className=' font20'>
              What we learned designing a new cyber security application
            </h2>
          </div>
          <div className='bg-white-color'>
            <h2 className='font24'>
              Blog
            </h2>
            <h2 className=' font20'>
              What we learned designing a new cyber security application
            </h2>
          </div>
        </div>
      </div>

      <div>
        <h2 className='text-white font64 mt-5 ms-5 pt-5'>
          People we made happy
        </h2>
        <div className='blue d-flex spacearng  pt-5 pb-5 mt-5'>
          <img src={one} width={300} alt="IT Solutions" className="rounded-lg shadow-lg" />
          <img src={two} width={300} alt="IT Solutions" className="rounded-lg shadow-lg" />
          <img src={three} width={300} alt="IT Solutions" className="rounded-lg shadow-lg" />
          <img src={four} width={300} alt="IT Solutions" className="rounded-lg shadow-lg" />


        </div>
      </div>

      <div className='mt-5 ms-5 p-5'>
        <h2 className='colorBlue font64 mt-5  width70'>
          Let’s get to work and build something great together
        </h2>
        <button className='font44 colorBlue bg-white mt-5 mb-5 btn-border pt-2 pb-2'>Get Started</button>
      </div>

      <Footer />
    </div>

  );
}