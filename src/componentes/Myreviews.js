import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { calificacionService } from '../services/calificacionService';


export function Myreviews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        calificacionService.getCalificaciones().then((response) => {
            if (response.error) {
                console.log(response.error);
            } else {
                const responseData = Object.values(response)[0];

                setData(responseData);
            }
        });
    }, []);

    return (
        <section id="reviews">
            <div className="container">
                <h2>RESEÑAS</h2>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    {data.map((element, index) => {

                        const fields = element.fields;

                        const calificacion = parseInt( fields.calificacion.integerValue);

                        const foto = fields.foto.stringValue;

                        const nombre = fields.nombre.stringValue;
                        const opinion = fields.opinion.stringValue;


                        const starCount = 5; // Número total de estrellas a mostrar

                        if (calificacion === 0 && opinion === '') {
                            // No se muestra nada en este caso
                            return null;
                          }
                          
                          return (
                            <SwiperSlide key={index}>
                              <div className="card">
                                <div className="image">
                                  <img src={foto} alt="cliente" title={nombre} />
                                </div>
                                <h2 className="title">{nombre}</h2>
                                <p className="description">{opinion}</p>
                                <div className="rating" title={calificacion}>
                                  <span className="sr-only">Rating</span>
                                  {[...Array(starCount)].map((_, i) => (
                                    <span
                                      key={i}
                                      className={i < calificacion ? 'fa fa-star' : 'far fa-star'}
                                      aria-hidden="true"
                                    ></span>
                                  ))}
                                </div>
                              </div>
                            </SwiperSlide>
                          );
                       
                    })}
                </Swiper>
            </div>
        </section>
    );
}
