import React, { useState, useEffect } from 'react';
import classes from './Education.module.css';

/**
 * React component for displaying education details, technical skills, and soft skills.
 * The component includes a fade-in animation when it mounts.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the Education component.
 */

function Education() {
  // State to manage the visibility for the fade-in animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`${classes.container} ${isVisible ? classes.visible : ''}`}>
      <div>
        <h2 className={classes.title}>Education</h2>

        <h3>H.F Tlou High School</h3>
        <p>Matric 2020</p>

        <h3>Cape Peninsula University of Technology</h3>
        <p>Retail Business Management 2021 to date</p>

        <h3>CodeSpace</h3>
        <p>Software Development 2023 to date</p>
      </div>

      <div>
        <h2 className={classes.title}>Technical skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
          <li>GIT</li>
          <li>NODE.js</li>
          <li>GitHub</li>
          <li>REACT.js</li>
          <li>NEXT.js</li>
        </ul>
      </div>

      <div>
        <h2 className={classes.title}>Soft Skills</h2>
        <ul>
          <li>TEAMWORK</li>
          <li>ADAPTABILITY</li>
          <li>PROBLEM SOLVING</li>
          <li>ATTENTION TO DETAIL</li>
          <li>CONTINUOUS LEARNING</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
