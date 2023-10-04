import React, { useState, useEffect } from 'react'
import classes from './Projects.module.css'

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`${classes.container} ${isVisible ? classes.visible : ''}`}>
      {/* <h2 className={classes.title}>My Projects</h2> */}
     <div>
      <h2 className={classes.title}>Book Coonect</h2>
     <decription>For this project I had user stories to meet the requirements of the Book Connect. I had a list of books where the user had to view a list of book previews, including titles and authors to discover new books to read. The books had to display it's summary and the date publication. The user should be able to search and filter the book using a specific text phrases if the user does not know the title of the book, the books had to also be filtered by authors and genre. There also had to be an option for the user to toggle between dark and light mode. </decription>
     <p>Tchnologies used: Javascript, </p>
     </div>

     <div >
      <h2 className={classes.title}>Podcast</h2>
      <description>For this project, I had to biuld a podcast app allowing users to browse various podcast shows, play episodes, and track their favourite episodes. I aslo had to use the API to fetch the data of the podcast</description>
      <p>Technologies used: React, MUI </p>
     </div>

     <div >
      <h2 className={classes.title}>Meme Generator</h2>
      <description>For this I had a set of images that the user can browse through to generate new memes</description>
      <p>Technologies used: React</p>
     </div>
    </div>
  )
}

export default Projects;
