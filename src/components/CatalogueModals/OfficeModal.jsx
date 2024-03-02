import React from "react";

import { Tooltip } from 'react-tooltip';
import {
    Magnifier,
    GlassMagnifier,
} from "react-image-magnifiers";


function OfficeModal() {
    return (
        <div>

            {/* MODALS */}

            <div className="modal fade" id="OfficeModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-4" id="exampleModalLabel" style={{ fontWeight: '700' }}>Linea Office</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* ------------------- MODAL CAROUSEL --------------------*/}

                            <div id="carouselOffice" className="carousel carousel-dark slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="13" aria-label="Slide 14"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="14" aria-label="Slide 15"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="15" aria-label="Slide 16"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="16" aria-label="Slide 17"></button>
                                    <button type="button" data-bs-target="#carouselOffice" data-bs-slide-to="17" aria-label="Slide 18"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/1.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/1.svg "} // Optional
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="1Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="1Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="1Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="1Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="1RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="1RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="1MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="1MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="1blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="1blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="2000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/2.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/2.svg "} // Optional
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center " style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="2Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="2Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="2Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="2Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="2RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="2RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="2MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="2MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="2blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="2blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="3000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/3.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/3.svg "} // Optional
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="3Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="3Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="3RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="3MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="3blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3arena"
                                                            data-tooltip-content="ARENA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(245, 241, 230)' }}>
                                                            <Tooltip id="3arena" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3lavanda"
                                                            data-tooltip-content="LAVANDA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(130, 121, 176)' }}>
                                                            <Tooltip id="3lavanda" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3rosaPastel"
                                                            data-tooltip-content="ROSA PASTEL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(245, 189, 214)' }}>
                                                            <Tooltip id="3rosaPastel" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3NegroJAspe"
                                                            data-tooltip-content="JASPE NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/NegroJaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="3NegroJAspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3VerdeBosque"
                                                            data-tooltip-content="VERDE BOSQUE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(44, 70, 53)' }}>
                                                            <Tooltip id="3VerdeBosque" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3Marron"
                                                            data-tooltip-content="MARRÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(110, 44, 58)' }}>
                                                            <Tooltip id="3Marron" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="3rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 6, 24)' }}>
                                                            <Tooltip id="3rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="4000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/4.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/4.svg "} // Optional
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '10%', marginLeft: '15%' }}>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="4Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="4Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="4RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="4MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="4blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4NegroJAspe"
                                                            data-tooltip-content="JASPE NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/NegroJaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="4NegroJAspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="4rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 6, 24)' }}>
                                                            <Tooltip id="4rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="5000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/5.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/5.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '10%', marginLeft: '15%' }}>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="5Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="5Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="5RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="5MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="5blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5NegroJAspe"
                                                            data-tooltip-content="JASPE NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/NegroJaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="5NegroJAspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div data-tooltip-id="5rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 6, 24)' }}>
                                                            <Tooltip id="5rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="6000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/6.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/6.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="6Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="6Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="6RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="6MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="6blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6lima"
                                                            data-tooltip-content="LIMA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(160, 220, 126)' }}>
                                                            <Tooltip id="6lima" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6jade"
                                                            data-tooltip-content="JADE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(35, 172, 130)' }}>
                                                            <Tooltip id="6jade" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6fucsia"
                                                            data-tooltip-content="FUCSIA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(219, 5, 131)' }}>
                                                            <Tooltip id="6fucsia" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6turquesa"
                                                            data-tooltip-content="TURQUESA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(68, 170, 221)' }}>
                                                            <Tooltip id="6turquesa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6naranja"
                                                            data-tooltip-content="NARANJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(241, 74, 21)' }}>
                                                            <Tooltip id="6naranja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6Marron"
                                                            data-tooltip-content="MARRÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(110, 44, 58)' }}>
                                                            <Tooltip id="6Marron" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 6, 24)' }}>
                                                            <Tooltip id="6rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="7000">

                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/7.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/7.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="7Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="7Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="7RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="7RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="7MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="7MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="7blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="7blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="6gris"
                                                            data-tooltip-content="GRIS"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'gray' }}>
                                                            <Tooltip id="6gris" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="7rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 6, 24)' }}>
                                                            <Tooltip id="7rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>


                                    </div>
                                    <div className="carousel-item  " data-bs-interval="8000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/8.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/8.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="8indigoClaro"
                                                            data-tooltip-content="INDIGO CLARO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 65, 120)' }}>
                                                            <Tooltip id="8indigoClaro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>


                                    </div>
                                    <div className="carousel-item  " data-bs-interval="9000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/9.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/9.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="9rosa"
                                                            data-tooltip-content="ROSA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(233, 217, 216)' }}>
                                                            <Tooltip id="9rosa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="9cobalto"
                                                            data-tooltip-content="COBALTO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(135, 155, 196)' }}>
                                                            <Tooltip id="9cobalto" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="9blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="9blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="9gris"
                                                            data-tooltip-content="GRIS"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(69, 72, 77)' }}>
                                                            <Tooltip id="9gris" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="9azulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(161, 176, 207)' }}>
                                                            <Tooltip id="9azulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="10000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/10.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/10.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="10rosa"
                                                            data-tooltip-content="ROSA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(233, 217, 216)' }}>
                                                            <Tooltip id="10rosa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="10cobalto"
                                                            data-tooltip-content="COBALTO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(135, 155, 196)' }}>
                                                            <Tooltip id="10cobalto" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="10blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="10blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="10gris"
                                                            data-tooltip-content="GRIS"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(69, 72, 77)' }}>
                                                            <Tooltip id="10gris" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="10azulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(161, 176, 207)' }}>
                                                            <Tooltip id="10azulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="11000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/11.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/11.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11azulFrancia"
                                                            data-tooltip-content="AZUL FRANCIA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(100, 140, 200)' }}>
                                                            <Tooltip id="11azulFrancia" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11gris"
                                                            data-tooltip-content="GRIS"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(70, 73, 78)' }}>
                                                            <Tooltip id="11gris" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="11blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11vino"
                                                            data-tooltip-content="VINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(95, 16, 19)' }}>
                                                            <Tooltip id="11vino" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="11negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11azulMarino"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(4, 23, 52)' }}>
                                                            <Tooltip id="11azulMarino" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(195, 7, 24)' }}>
                                                            <Tooltip id="11rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="11beige"
                                                            data-tooltip-content="BEIGE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 168, 142)' }}>
                                                            <Tooltip id="11beige" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="12000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/12.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/12.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="12azulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(161, 176, 207)' }}>
                                                            <Tooltip id="12azulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="12verde"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="12verde" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="12MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="12MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="13000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/13.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/13.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="13azulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(161, 176, 207)' }}>
                                                            <Tooltip id="13azulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="13verde"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="13verde" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="13MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="13MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="14000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/14.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/14.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="14azulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(161, 176, 207)' }}>
                                                            <Tooltip id="14azulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="14verde"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="14verde" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="14MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="14MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="15000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/15.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/15.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="15indigoOscuro"
                                                            data-tooltip-content="ÍNDIGO OSCURO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(14, 29, 58)' }}>
                                                            <Tooltip id="15indigoOscuro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="16000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/16.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/16.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="16indigoOscuro"
                                                            data-tooltip-content="ÍNDIGO OSCURO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(14, 29, 58)' }}>
                                                            <Tooltip id="16indigoOscuro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="17000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/17.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/17.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="17negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="17negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="17kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="17kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="17MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="17MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="18000">
                                        <GlassMagnifier
                                            imageSrc={  "img/OfficeImg/18.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={  "img/OfficeImg/18.svg "}
                                            className="d-block w-100 h-100"
                                            style={{ borderRadius: '5%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', width:'10dvw' }} />
                                        <div className="carousel-caption  d-md-block">
                                        </div>

                                        <div className="container" style={{ position: 'relative', bottom: '12px', textAlign: 'center', paddingBottom: '6%' }}>
                                            <h4 style={{ fontWeight: '700', margin: '5%' }}>{/*Colores Disponibles*/}</h4>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                            <div className="container text-center">
                                                <div className="row justify-content-md-center gy-2" style={{ marginRight: '5%', marginLeft: '5%' }}>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="18negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="18negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="18kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="18kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="18MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="18MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>

                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOffice" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselOffice" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>

                            {/* ------------------- MODAL CAROUSEL --------------------*/}



                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button type="button" className="btn btn-lg btn-outline-dark rounded-pill" data-bs-dismiss="modal" style={{ fontWeight: '500' }}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODALS */}

        </div>
    );
}

export default OfficeModal;