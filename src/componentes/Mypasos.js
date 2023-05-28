import iconocelular from '../images/iconocelular.png';
import iconocasa from '../images/iconocasa.png';
import iconotaza from '../images/iconotaza.png';
import iconoestrella from '../images/iconoestrella.png';

export function Mypasos(props) {
    return (
        <section id="toMatch" className="section">
            <div className="container">
                <h2 className="subtitulo">¿CÓMO HAGO MATCH?</h2>
                <div className="cont-flex-icons">
                    <div className="conticons">
                        <img src={iconocelular} alt="" />
                        <h3>REGÍSTRATE</h3>
                        <p>Descarga la app, regístrate y conoce personas</p>
                    </div>
                    <div className="conticons">
                        <img src={iconocasa} alt="" />
                        <h3>ESCOGE</h3>
                        <p>El establecimiento de tu agrado para tu primera cita</p>
                    </div>
                    <div className="conticons">
                        <img src={iconotaza} alt="" />
                        <h3>DISFRUTA</h3>
                        <p>La experiencia Match Coffee en el establecimiento</p>
                    </div>
                    <div className="conticons">
                        <img src={iconoestrella} alt="" />
                        <h3>CALIFICA</h3>
                        <p>La experiencia en nuestra app y haz que más personas nos conozcan</p>
                    </div>
                </div>
            </div>
        </section>
    );
}