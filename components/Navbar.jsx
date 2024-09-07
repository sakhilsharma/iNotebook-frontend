import { Link } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
export default function Navabr() {
    return (
        <div className='w-[80%]  position-relative '>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link active" to="/About">About</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}