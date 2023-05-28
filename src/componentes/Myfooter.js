import logofooter from '../images/logo-footer.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

export function Myfooter() {
    return (
        <footer>
        <div className="container contFooter">
            <div className="columnfooter">
                <div className="cont-logo">
                    <img src={logofooter} alt="LogoFooter" />
                </div>
                <div className="cont-direccion">
                    <h3>Encuentranos</h3>
                    <p>Carrera 48 B 123 -09 Medllín, colombia</p>
                    <p>312 687 4565</p>
                </div>
                <div className="cont-redes">
                    <h3>Síguenos</h3>
                    <div className="redes">
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright - Todos los derechos reservados</p>
        </div>
    </footer>
    );
  }