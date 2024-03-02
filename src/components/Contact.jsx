import React from "react";
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        teamNum: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {


        e.preventDefault();
        emailjs.sendForm('service_g16rbu1', 'template_eyryzph', e.target, 'jklAb_u4-TUOHhCxJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <div>

            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">¡Contactanos!</h1>
                        <p className="col-lg-10 fs-4">¿Quieres uniformes que hagan brillar a tu empresa? Llena el formulario a tu lado y contáctanos. Juntos, crearemos la imagen perfecta para tu empresa. ¡Esperamos tu mensaje!</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary shadow-lg contact-form" onSubmit={onSubmit}>

                            <div className="form-floating mb-3">
                                <input required name="from_name" type="text" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={handleChange} />
                                <label htmlFor="floatingEmail">Nombre / Empresa</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input required type="email" name='reply_to' onChange={handleChange} className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                <label htmlFor="floatingEmail">Correo Electrónico</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea name="message" onChange={handleChange} className="form-control" id="floatingMessage" placeholder="Your message" style={{ height: '100px' }}></textarea>
                                <label htmlFor="floatingMessage">Mensaje</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="to_name" onChange={handleChange} className="form-control" id="floatingPhone" placeholder="33-33-33-33" />
                                <label htmlFor="floatingPhone">Numero de telefono (optional)</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input required name='teamNum' type="number" onChange={handleChange} className="form-control" id="floatingPhone" placeholder="Aprox" />
                                <label htmlFor="floatingPhone">Personas en su equipo</label>
                            </div>
                            <button className="button w-100 btn-lg " type="submit" value="Submit" >ENVIAR


                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;