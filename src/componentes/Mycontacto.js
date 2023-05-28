import React, { useState } from 'react';
import signoszodiaco from '../images/signoszodiaco.png';

export function Mycontacto(props) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');
    const [terminos, setTerminos] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Comentario:', comentario);
        console.log('Acepta los términos y condiciones:', terminos);
    }

    return (
        <section id="toContacto" className="contenido-formulario">
            <div className="container flexform">
                <form className="formulario" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>
                            <h2>Formulario de Contacto</h2>
                        </legend>
                        <div className="contenedor-form">
                            <div className="campo">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="campo">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="campo">
                                <label htmlFor="comentario">Comentario</label>
                                <textarea id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} ></textarea>
                            </div>
                            <div className="campo terminos">
                                <input type="checkbox" id="terminos" checked={terminos} onChange={(e) => setTerminos(e.target.checked)} />
                                <label htmlFor="terminos">Acepto los Términos y Condiciones</label>
                            </div>
                            <div className="submit">
                                <input type="submit" value="Enviar" />
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div className="comtenido-img">
                    <img src={signoszodiaco} alt="signo zodiaco" className="img-form" />
                </div>
            </div>
        </section>
    );
}
