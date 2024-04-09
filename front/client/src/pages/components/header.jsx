import React from 'react';

function Header() {
    return (
        <header className="header" id="header">
            <section className="section banner">
                <div className="left">
                    <h1>¡Bienvenido </h1>
                    <p>a nuestra comunidad de moda! </p>
                </div>
                <div className="right">
                    <img src="../../src/images/banner.png" alt="" />
                </div>
            </section>
        </header>
    );
}

export default Header;
