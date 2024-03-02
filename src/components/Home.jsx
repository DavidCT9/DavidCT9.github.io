import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


function Home() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (
        <div >

            {/* -------------------------------- CAROUSEL  -----------------------------------*/}

            <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        {isMobile ? <img src="img/HomeImg/1.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            : <img src="img/HomeImg/PC1.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>}

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Bienvenido a AZ empresarial</h1>
                                <p className="opacity-75">Conoce a la empresa mexicana que le dara identidad a tu empresa mediante el uniforme.</p>
                                <p><a className="btn btn-lg btn-outline-light rounded-pill" href="#ID">Conocenos</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        {isMobile ? <img src="img/HomeImg/2.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            : <img src="img/HomeImg/PC2.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>}
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Contamos con un extenso catalogo</h1>
                                <p>Nuestra empresa diseña y fabrica uniformes personalizados diferentes industrias y cubriendo los requisitos de estas. </p>
                                <p><NavLink to='/Catalogo' className="btn btn-lg btn-outline-light rounded-pill" >Conocelo Aqui</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {isMobile ? <img src="img/HomeImg/3.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
                            : <img src="img/HomeImg/PC3.svg" className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>}
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Viste y personaliza a tu empresa</h1>
                                <p>Contactanos para hacer sus uniformes a la medida, personalizados y a su gusto</p>
                                <p><NavLink to='/Contacto' className="btn btn-lg btn-outline-light rounded-pill" >¡Mandanos un mensaje!</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* -------------------------------- IDENTIDAD  -----------------------------------*/}

            <div className="element row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-5  shadow-lg" style={{ margin: "3dvw", backgroundColor: 'white', boxShadow: '50px 10px 10px rgba(0, 0, 0, 0.5)' }} id='ID'>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3" style={{}}>
                    <h5 className="mb-4 display-4 lh-1 " style={{ fontWeight: '600', color: 'black' }}>Nuestra Identidad</h5>
                    <p className="lead" style={{ fontWeight: '400', color: '#636363' }}><em>Somos AZ empresarial, una prestigiosa organización con una <strong> trayectoria de 15 años en la creación y diseño de uniformes empresariales. </strong>Nuestro enfoque se centra en el desarrollo de soluciones a corde a sus necesidades, diseñadas específicamente para satisfacer a cada uno de nuestros socios y clientes.</em></p>

                </div>
                <div className="col-lg-3 offset-lg-1 p-0 overflow-hidden " style={{ textAlign: 'center' }}>
                    <img src="img/HomeImg/Identity.svg" className="rounded-lg-3 mb-3" style={{ width: "200px", height: '200px' }}></img>
                </div>
            </div>

            {/* -------------------------------- CARACTERISTICAS  -----------------------------*/}

            <div className="container px-4 py-5" id="featured-3">
                <h1 className="pb-2 border-bottom" style={{ fontWeight: '700', fontStyle: 'bold', textAlign: 'center' }}>PORQUE SOMOS LA MEJOR OPCIÓN</h1>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3" style={{ alignContent: 'center' }}>
                            <img src="img/HomeImg/Personalization.png" alt='Personalization' className="bi" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Flexibilidad y personalización</em></h3>
                        <p style={{ color: '#636363' }}>En nuestra empresa, nos destacamos por ofrecer un servicio de personalización y fabricación de uniformes empresariales. Nos caracteriza nuestra flexibilidad para adaptarnos a las necesidades de cada empresa, asegurando que cada uniforme refleje su identidad única y cumpla con sus requisitos específicos.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-4" >
                            <img src="img/HomeImg/Quality.png" className="bi"/>
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Calidad</em> </h3>
                        <p style={{ color: '#636363' }}>En AZ Empresarial, ofrecemos uniformes empresariales de alta calidad, hechos a medida con atención meticulosa al detalle, garantizando durabilidad, comodidad y sofisticación para representar a tu empresa de la mejor manera.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                            <img src="img/HomeImg/Consulting.png" className="bi" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis" style={{ alignItems: 'center', textAlign: 'center' }}><em>Asesoría de imagen empresarial</em></h3>
                        <p style={{ color: '#636363' }}>Nosotros nos identificamos por brindar una asesoría integral en imagen empresarial, guiando a nuestros clientes en cada paso del proceso de venta. Para que su empresa proyecte una imagen relacionada con el giro de su negocio.</p>

                    </div>
                </div>
            </div>


            {/* WhatsApp PushButton */}
            <a href="https://api.whatsapp.com/send?phone=3311662772" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <img src="img/whatsapp-pushButton.svg" className="bi" />
            </a>
            
        </div>
    );
}

export default Home;
