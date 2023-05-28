import playstore from '../images/playstore.png';
import appstore from '../images/appstore.png';

export function Mydescargapp() {
    return (
        <section id="App" className="section">
            <div className="content">
                <div className="handphone"></div>
                <div className="botonesDescarga">
                    <div className="iconosApps">
                        <h3>Descarga la app Match Coffee y vive la experiencia</h3>
                        <a href="#">
                        <img className="appstore" src={appstore} alt="" />
                        </a>
                        <a href="#">
                        <img className="playstore" src={playstore} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
