import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.name}>
            <h1>Tshireletso Mpudu</h1>
            <h2 className={classes.title}>Junior Software Developer</h2>

        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutme'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}