// тут я напишу код для навигационной панели

import { Link } from 'react-router-dom'
export function Li({ className, list_text, list_href }) {
    return (
        <li className={className}><a href={list_href}>
            {list_text}</a>
        </li>
    )
}

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'aqua', padding: '15px' }}>
            <ul style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/contacts">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar