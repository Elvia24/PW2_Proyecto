import Navbar from "./components/Navbar"
function Productos() {
    return (

        <div>
            <Navbar />
            <div>

                {/* <!-- All Products --> */}
                <section className="section all-products" id="products">
                    <div className="top container">
                        <h1>Todos Los Productos</h1>

                    </div>
                    <div className="product-center container">
                        <div className="product-item">
                            <div className="overlay">
                                <a href="productDetails.html" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-7.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="productDetails.html">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="#">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-5.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-6.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="#">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-7.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="#">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                        <div className="product-item">
                            <div className="overlay">
                                <a href="#" className="product-thumb">
                                    <img src="../../src/images/sample_images/product-4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="product-info">
                                <span> CATEGORIA</span>
                                <a href="#">Concepts Solid Pink Men’s Polo</a>
                                <h4>$150</h4>
                            </div>
                            <ul className="icons">
                                <li><i className="bx bxs-show"></i></li>
                                <li><i className="bx bx-cart"></i></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pagination">
                    <div className="container">
                        <span>1</span> <span>2</span> <span>3</span> <span>4</span>
                        <span><i className="bx bx-right-arrow-alt"></i></span>
                    </div>
                </section>


            </div>
            
        </div>
    );
}
export default Productos;