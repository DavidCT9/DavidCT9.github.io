import { NavLink } from 'react-router-dom';




function Navbar() {
    return (
        <div>
            <header className="p-2 " style={{ backgroundColor: 'black' }}>
                <div className="container">

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <img src="/img/AZLogo.svg" className="bi me-2" width="40" height="40" />
                            <span className=" titleHeader  animatedItem" style={{ color: 'white', fontSize: 'x-large' }}>Empresarial</span>
                        </a>

                        <ul className=" titleHeader nav nav-underline justify-content-center  animatedItem" style={{ marginLeft: '10%' }}>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" activeclassname='active' aria-current="page" style={{ color: 'white' }}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Catalogo' className="nav-link " activeclassname='active' style={{ color: 'white' }}>Catalogo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Contacto' className="nav-link " activeclassname='active'  style={{ color: 'white' }}>Contacto</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </header>



        </div>
    );
}

export default Navbar;
