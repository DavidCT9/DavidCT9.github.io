import { NavLink } from 'react-router-dom';



function Footer() {
    var year =new Date().getFullYear();

    return (
        <div  style={{backgroundColor:'black'}}>
            <div className="container" >
                <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4  mb-0">
                    <div className="col-md-4 mr-4 d-flex align-items-center justify-content-center ">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img src="img/AZLogo.svg" className="bi" width="40" height="40" />
                        </a>
                        <span className="mb-3 mb-md-0" style={{color:'white', fontSize:'large'}}>Empresarial © {year}</span>
                    </div>

                    <ul className="nav justify-content-center mr-4 ml-4">
                        <li className="nav-item footer-item"><NavLink to='/' className="nav-link px-2 " style={{color:'white'}}>Inicio</NavLink></li>
                        <li className="nav-item footer-item"><NavLink to='/Catalogo' className="nav-link px-2 " style={{color:'white'}}>Catalogo</NavLink></li>
                        <li className="nav-item footer-item"><NavLink to='/Contacto' className="nav-link px-2 " style={{color:'white'}}>Contacto</NavLink></li>

                    </ul>


                    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="https://api.whatsapp.com/send?phone=3311662772" target="_blank" rel="noopener noreferrer"><img src="img/Whats.svg" className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#" target="_blank" rel="noopener noreferrer"><img src="img/Instagram.svg" className="bi" width="24" height="24" /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#" target="_blank" rel="noopener noreferrer"><img src="img/Face.svg" className="bi" width="26" height="26" /></a></li>
                    </ul>
                </footer>
            </div>

        </div>
    );
}

export default Footer;