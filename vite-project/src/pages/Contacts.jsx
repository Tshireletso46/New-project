import classes from './Contacts.module.css'

export default function Contacts() {
  return (
    <div>
      <h1>Contact Me</h1>
      <a href="tshirempudu@gmail.com">tshirempudu@gmail.com</a>
      <form className={classes.form} >
<div className={classes.control}>
    <label htmlFor='name'>Name</label>
    <input type='text' required id='name'/>
</div>
<div className={classes.control}>
    <label htmlFor='surname'>Surname</label>
    <input type='text' required id='surname' />
</div>
<div className={classes.control}>
    <label htmlFor='description'>Leave a message for me</label>
    <textarea id='description' required rows='5' ></textarea>
</div>
<div className={classes.actions}>
    <button>Send</button>
</div>
        </form>
    </div>
  )
}