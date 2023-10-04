import Education from "../components/layout/Education";

function AboutMe() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'pdf-file\TSHIRELETSO MPUDU. CV (2).pdf';
    link.download = 'Tshireletso Mpudu CV';
    link.click ();
  };
  
  return (
    <div>
      <br />
      <button onClick={handleDownload}>Download my resume</button>
      <Education />
    </div>
  )
}

export default AboutMe
