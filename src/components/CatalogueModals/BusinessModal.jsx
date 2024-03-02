import React from "react";

import { Tooltip } from 'react-tooltip';
import {
    Magnifier,
    GlassMagnifier,
} from "react-image-magnifiers";


function BusinessModal() {
    return (
        <div>

            {/* MODALS */}

            <div className="modal fade" id="BusinessModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-4" id="exampleModalLabel" style={{ fontWeight: '700' }}>Linea Business</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* ------------------- MODAL CAROUSEL --------------------*/}

                            <div id="carouselBusiness" className="carousel carousel-dark slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carouselBusiness" data-bs-slide-to="7" aria-label="Slide 8"></button>

                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/1.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/1.svg "} // Optional
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
                                                        <div data-tooltip-id="B1Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B1Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B1Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="B1RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B1MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B1blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B1AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Turquesa"
                                                            data-tooltip-content="TURQUESA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B1Turquesa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1AzulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B1AzulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1VerdeManzana"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="B1VerdeManzana" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1VerdeLimon"
                                                            data-tooltip-content="VERDE LIMON"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(116, 192, 74)' }}>
                                                            <Tooltip id="B1VerdeLimon" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1VerdeFluor"
                                                            data-tooltip-content="VERDE FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(88, 219, 69)' }}>
                                                            <Tooltip id="B1VerdeFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Marron"
                                                            data-tooltip-content="MARRÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(110, 44, 58)' }}>
                                                            <Tooltip id="B1Marron" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B1Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Naranja"
                                                            data-tooltip-content="NARANJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(241, 74, 21)' }}>
                                                            <Tooltip id="B1Naranja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Oro"
                                                            data-tooltip-content="ORO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(235, 119, 17)' }}>
                                                            <Tooltip id="B1Oro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1AmarilloPaja"
                                                            data-tooltip-content="AMARILLO PAJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(246, 227, 133)' }}>
                                                            <Tooltip id="B1AmarilloPaja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1AmarilloFluor"
                                                            data-tooltip-content="AMARILLO FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(255, 244, 22)' }}>
                                                            <Tooltip id="B1AmarilloFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="B1Kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Morado"
                                                            data-tooltip-content="MORADO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'purple' }}>
                                                            <Tooltip id="B1Morado" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Fucsia"
                                                            data-tooltip-content="FUCSIA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(219, 5, 131)' }}>
                                                            <Tooltip id="B1Fucsia" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1Rosafluor"
                                                            data-tooltip-content="ROSA FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(254, 29, 169)' }}>
                                                            <Tooltip id="B1Rosafluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B1RosaPalo"
                                                            data-tooltip-content="PALO DE ROSA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(250, 188, 214)' }}>
                                                            <Tooltip id="B1RosaPalo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="2000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/2.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/2.svg "} // Optional
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
                                                        <div data-tooltip-id="B2Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B2Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B2Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="B2RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B2MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B2blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B2AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Turquesa"
                                                            data-tooltip-content="TURQUESA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B2Turquesa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2AzulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B2AzulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2VerdeManzana"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="B2VerdeManzana" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2VerdeLimon"
                                                            data-tooltip-content="VERDE LIMON"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(116, 192, 74)' }}>
                                                            <Tooltip id="B2VerdeLimon" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2VerdeFluor"
                                                            data-tooltip-content="VERDE FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(88, 219, 69)' }}>
                                                            <Tooltip id="B2VerdeFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Marron"
                                                            data-tooltip-content="MARRÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(110, 44, 58)' }}>
                                                            <Tooltip id="B2Marron" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B2Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Naranja"
                                                            data-tooltip-content="NARANJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(241, 74, 21)' }}>
                                                            <Tooltip id="B2Naranja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Oro"
                                                            data-tooltip-content="ORO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(235, 119, 17)' }}>
                                                            <Tooltip id="B2Oro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2AmarilloPaja"
                                                            data-tooltip-content="AMARILLO PAJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(246, 227, 133)' }}>
                                                            <Tooltip id="B2AmarilloPaja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2AmarilloFluor"
                                                            data-tooltip-content="AMARILLO FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(255, 244, 22)' }}>
                                                            <Tooltip id="B2AmarilloFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="B2Kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Morado"
                                                            data-tooltip-content="MORADO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'purple' }}>
                                                            <Tooltip id="B2Morado" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Fucsia"
                                                            data-tooltip-content="FUCSIA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(219, 5, 131)' }}>
                                                            <Tooltip id="B2Fucsia" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2Rosafluor"
                                                            data-tooltip-content="ROSA FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(254, 29, 169)' }}>
                                                            <Tooltip id="B2Rosafluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B2RosaPalo"
                                                            data-tooltip-content="PALO DE ROSA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(250, 188, 214)' }}>
                                                            <Tooltip id="B2RosaPalo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="3000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/3.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/3.svg "} // Optional
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
                                                        <div data-tooltip-id="B3Jaspe"
                                                            data-tooltip-content="JASPE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/Jaspe.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B3Jaspe" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B3Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="B3RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B3MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B3blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B3AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3Turquesa"
                                                            data-tooltip-content="TURQUESA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B3Turquesa" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3VerdeManzana"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="B3VerdeManzana" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3VerdeFluor"
                                                            data-tooltip-content="VERDE FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(88, 219, 69)' }}>
                                                            <Tooltip id="B3VerdeFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B3Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3AmarilloFluor"
                                                            data-tooltip-content="AMARILLO FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(255, 244, 22)' }}>
                                                            <Tooltip id="B3AmarilloFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B3Rosafluor"
                                                            data-tooltip-content="ROSA FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(254, 29, 169)' }}>
                                                            <Tooltip id="B3Rosafluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="4000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/4.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/4.svg "} // Optional
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
                                                        <div data-tooltip-id="B4Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B4Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4RoyalAzul"
                                                            data-tooltip-content="AZUL ROYAL"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(22, 50, 172)' }}>
                                                            <Tooltip id="B4RoyalAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B4MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B4blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4VerdeManzana"
                                                            data-tooltip-content="VERDE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 112, 0)' }}>
                                                            <Tooltip id="B4VerdeManzana" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4VerdeLimon"
                                                            data-tooltip-content="VERDE LIMON"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(116, 192, 74)' }}>
                                                            <Tooltip id="B4VerdeLimon" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4Marron"
                                                            data-tooltip-content="MARRÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(110, 44, 58)' }}>
                                                            <Tooltip id="B4Marron" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B4Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4Naranja"
                                                            data-tooltip-content="NARANJA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(241, 74, 21)' }}>
                                                            <Tooltip id="B4Naranja" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4AmarilloFluor"
                                                            data-tooltip-content="AMARILLO FLUOR"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(255, 244, 22)' }}>
                                                            <Tooltip id="B4AmarilloFluor" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4RojoEscarlata"
                                                            data-tooltip-content="ROJO ESCARLATA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(240, 86, 105)' }}>
                                                            <Tooltip id="B4RojoEscarlata" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4Aqua"
                                                            data-tooltip-content="AZUL AQUA"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(42, 181, 185)' }}>
                                                            <Tooltip id="B4Aqua" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4Carbon"
                                                            data-tooltip-content="GRIS CARBÓN"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(84, 86, 91)' }}>
                                                            <Tooltip id="B4Carbon" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4GrisOxford"
                                                            data-tooltip-content="GRIS OXFORD"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(147, 149, 152)' }}>
                                                            <Tooltip id="B4GrisOxford" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B4AzulCobalto"
                                                            data-tooltip-content="AZUL COBALTO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(7, 67, 107)' }}>
                                                            <Tooltip id="B4AzulCobalto" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="5000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/5.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/5.svg "}
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
                                                        <div data-tooltip-id="B5MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B5MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B5blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B5blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B5AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B5AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B5Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B5Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="6000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/6.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/6.svg "}
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
                                                        <div data-tooltip-id="B6Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B6Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B6MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B6blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B6AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6AzulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B6AzulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B6Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6Kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="B6Kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6Rayasrey"
                                                            data-tooltip-content="RAYAS REY"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/RayasRey.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B6Rayasrey" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B6OxfordMarino"
                                                            data-tooltip-content="OXFORD MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(71, 73, 115)' }}>
                                                            <Tooltip id="B6OxfordMarino" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>
                                    <div className="carousel-item  " data-bs-interval="7000">

                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/7.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/7.svg "}
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
                                                        <div data-tooltip-id="B7Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B7Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B7MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B7blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B7AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7AzulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B7AzulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B7Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7Kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="B7Kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7Rayasrey"
                                                            data-tooltip-content="RAYAS REY"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/RayasRey.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B7Rayasrey" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B7OxfordMarino"
                                                            data-tooltip-content="OXFORD MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(71, 73, 115)' }}>
                                                            <Tooltip id="B7OxfordMarino" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>


                                    </div>
                                    <div className="carousel-item  " data-bs-interval="8000">
                                        <GlassMagnifier
                                            imageSrc={"img/BusinessImg/8.svg "}
                                            imageAlt="Example"
                                            largeImageSrc={"img/BusinessImg/8.svg "}
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
                                                        <div data-tooltip-id="B8Negro"
                                                            data-tooltip-content="NEGRO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'black' }}>
                                                            <Tooltip id="B8Negro" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8MarinoAzul"
                                                            data-tooltip-content="AZUL MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(0, 17, 46)' }}>
                                                            <Tooltip id="B8MarinoAzul" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8blanco"
                                                            data-tooltip-content="BLANCO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'white' }}>
                                                            <Tooltip id="B8blanco" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8AzulCeleste"
                                                            data-tooltip-content="AZUL CELESTE"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(97, 144, 230)' }}>
                                                            <Tooltip id="B8AzulCeleste" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8AzulCielo"
                                                            data-tooltip-content="AZUL CIELO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(45, 141, 232)' }}>
                                                            <Tooltip id="B8AzulCielo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8Rojo"
                                                            data-tooltip-content="ROJO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'red' }}>
                                                            <Tooltip id="B8Rojo" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8Kaki"
                                                            data-tooltip-content="KAKI"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(174, 155, 135)' }}>
                                                            <Tooltip id="B8Kaki" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8Rayasrey"
                                                            data-tooltip-content="RAYAS REY"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundImage: `url(${"img/RayasRey.jpg"})`, backgroundSize: 'contain' }}>
                                                            <Tooltip id="B8Rayasrey" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div data-tooltip-id="B8OxfordMarino"
                                                            data-tooltip-content="OXFORD MARINO"
                                                            data-tooltip-place="top"
                                                            className="circle"
                                                            data-tip="Tooltip text"
                                                            style={{ backgroundColor: 'rgb(71, 73, 115)' }}>
                                                            <Tooltip id="B8OxfordMarino" className='Tooltip' classNameArrow="example-arrow" style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', fontWeight: '600', padding: '5px', borderRadius: '15px' }} />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            {/*-------------------- C O L O R - G R I D  ----------------*/}
                                        </div>

                                    </div>



                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselBusiness" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselBusiness" data-bs-slide="next">
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

export default BusinessModal;