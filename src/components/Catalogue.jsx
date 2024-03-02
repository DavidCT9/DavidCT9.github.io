import React from "react";
import { Button } from 'react-bootstrap';
import OfficeModal from "./CatalogueModals/OfficeModal"
import BusinessModal from "./CatalogueModals/BusinessModal";



function Catalogue() {

    return (
        <div>

            {/* -------------------------------- CATALOGO  ------------------------------------*/}


            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom" style={{ fontSize: '5dvh', fontWeight: '700', textAlign: 'center' }}>CATALOGO 2024</h2>

                {/*Primera fila */}

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">

                        <Button className='h-100 w-100 ' variant="" data-bs-toggle="modal" data-bs-target="#OfficeModal" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${"img/ModalCovers/1.png"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '80%' }}>Office</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg" alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#BusinessModal" style={{ padding: '0' }}>

                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${"img/ModalCovers/2.png"})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold cardText" style={{ opacity: '70%' }}>Business</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg" alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>



                </div>
                {/* P E N D I N G

                <div className="col">
                    <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                            <div className="d-flex flex-column h-100 p-3 pb-1 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Hotelería</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src=" img/AZLogo.svg" alt="Bootstrap" width="32" height="32" className="" ></img>
                                    </li>
                                    <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                        <small>California</small>
                                    </li>
                                    <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                        <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Button>
                </div>
             */}


                {/*Segunda fila */}
                {/* P E N D I N G


                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url( "img/Quality.gif"})` }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '70%' }}>Industria Alimenticia</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg" alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Clínica</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg" alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>

                    <div className="col">
                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>

                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                                <div className="d-flex flex-column h-100 p-3 pb-1 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ opacity: '70%' }}>Seguridad</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg  " alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>

            */}


                {/*Tercera fila */}

                {/* P E N D I N G

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    <div className="col">

                        <Button className='h-100 w-100' variant="" data-bs-toggle="modal" data-bs-target="#CatalogueItem1" style={{ padding: '0' }}>
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url( "img/Quality.gif"})` }}>
                                <div className="d-flex flex-column h-100 p-3 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold " style={{ opacity: '70%' }}>Agropecuario</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src=" img/AZLogo.svg  " alt="Bootstrap" width="32" height="32" className="" ></img>
                                        </li>
                                        <li className="d-flex align-items-center me-3" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                            <small>California</small>
                                        </li>
                                        <li className="d-flex align-items-center" style={{ visibility: 'hidden' }}>
                                            <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                                            <small>5d</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Button>

                    </div>


                </div>

                             */}



            </div>

            <OfficeModal />
            <BusinessModal/>


            <a href="https://api.whatsapp.com/send?phone=3311662772" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <img src=" img/whatsapp-pushButton.svg" className="bi" />
            </a>
        </div>
    );
}

export default Catalogue;