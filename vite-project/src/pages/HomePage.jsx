
import React, { useState } from 'react';

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='header'>
      <div className="image-container">
        <img
          src=".\public\images\profile.jpg"
          alt="profile"
          className='profile'
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        {isHovered && (
          <p className="image-hover-text">
            I am driven by a strong desire to learn and grow in the ever-evolving world of technology. With a solid foundation in programming languages and a knack for problem-solving, I am dedicated to honing my skills and staying up-to-date with the latest industry trends. I thrive in collaborative environments and enjoy working on diverse projects that challenge me to think creatively. As I embark on my journey to become a professional software developer, I am eager to connect with like-minded individuals, explore exciting opportunities, and contribute to innovative solutions that make a difference.
          </p>
        )}
      </div>

      <footer className="footer">
      <a href="https://www.linkedin.com/in/tshireletso-mpudu-80916226a/" target="_blank" className='button-link'>
        <button className='button'>Lets talk!</button>
      </a>
    </footer>

    </div>

          
   
  );
}

export default HomePage;
