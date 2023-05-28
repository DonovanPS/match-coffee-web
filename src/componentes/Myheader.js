import logo from '../images/logo.svg';
import { Link } from 'react-scroll';

export function Myheader() {
    return (
        <header className="App-header">
        <div className="container">
            <div className="cabezote">
                <img className="logo" src={logo} alt="Logo Match Coffee" title="Match Coffee" />
                <nav className="menu">
                    <ul>
                        <li>
                            <Link activeClass="active" to="section1" smooth={true} duration={500}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="section2" smooth={true} duration={500} offset={-100}>Match</Link>
                        </li>
                        <li>
                            <Link to="section3" smooth={true} duration={500} offset={-100}>Descarga la app</Link>
                        </li>
                        <li><Link to="section4" smooth={true} duration={500} offset={-100}>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}