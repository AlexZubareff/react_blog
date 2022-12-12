import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <ul className="navBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chats">Chats</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/articles">Articles</Link></li>
        </ul>
    )
}