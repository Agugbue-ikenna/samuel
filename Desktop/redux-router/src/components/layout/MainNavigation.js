import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Greate <span>Q</span>uotes</div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                ({ color: isActive ? 'red' : 'white' })}
                            to="/quotes">All Quote
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                ({ color: isActive ? 'red' : 'white' })}
                            to="/new-quotes">Add a Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
       
    )
}

export default MainHeader;