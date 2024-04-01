import Navbar from "./components/Navbar"

function inicio() {
    return (
        <div>
            <header className="header" id="header">

                <div >
                    <Navbar />
                </div>

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

            <section className="section new-arrival">
                <div className="title">
                    <h1>NUEVO</h1>
                    <p>Descubre los nuevos productos que tenemos para ti</p>
                </div>

                <div className="product-center">
                    <div className="product-item">
                        <div className="overlay">
                            <a href="productDetails.html" className="product-thumb">
                                <img src="../../src/images/product-1.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="productDetails.html">Quis Nostrud Exercitation</a>
                            <h4>$700</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-3.jpg" alt="" />
                            </a>

                        </div>

                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Sonata White Men’s Shirt</a>
                            <h4>$800</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Concepts Solid Pink Men’s Polo</a>
                            <h4>$150</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-4.jpg" alt="" />
                            </a>

                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Edor do eiusmod tempor</a>
                            <h4>$900</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-5.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Edor do eiusmod tempor</a>
                            <h4>$100</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-6.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Edor do eiusmod tempor</a>
                            <h4>$500</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-7.jpg" alt="" />
                            </a>

                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Edor do eiusmod tempor</a>
                            <h4>$200</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                    <div className="product-item">
                        <div className="overlay">
                            <a href="" className="product-thumb">
                                <img src="../../src/images/product-2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="product-info">
                            <span>CATEGORIA</span>
                            <a href="">Edor do eiusmod tempor</a>
                            <h4>$560</h4>
                        </div>
                        <ul className="icons">
                            <li><i className='bx bxs-show'></i></li>
                            <li><i className="bx bx-cart"></i></li>
                        </ul>
                    </div>
                </div>
            </section>


        </div>
    );
}
export default inicio;