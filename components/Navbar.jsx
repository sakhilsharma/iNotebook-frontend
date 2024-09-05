import { Link } from 'react-router-dom';
export default function Navabr() {
    return (
        <div>
            <div>
                <h2>Navbar</h2>
            </div>
            <div>
                <Link to="\Home"></Link>
                <Link to="\About"></Link>
            </div>
        </div>
    )
}