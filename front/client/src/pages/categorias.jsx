import Navbar from "./components/Navbar"
function Categorias() {
    return (

        <div>
            <Navbar />
            <div>
                <div className="container">

                    {/* <!-- Categories Section --> */}
                    <section className="section category">
                        <div className="top container">
                            <h1>Todas Las Categorias De Productos</h1>
                        </div>
                        <div className="cat-center ">
                            <div className="cat">

                                <img src="../../src/images/sample_images/cat3.jpg" alt="" />

                                <div>
                                    <p>WOMEN'S WEAR 2</p>
                                </div>
                                <span className="description">este es un ejemplo de la descripcion cat1</span>

                            </div>
                            <div className="cat">
                                <img src="../../src/images/sample_images/cat2.jpg" alt="" />
                                <div>
                                    <p>ACCESSORIES</p>
                                </div>
                                <span className="description">este es un ejemplo de la descripcion cat2</span>

                            </div>
                            <div className="cat">
                                <img src="../../src/images/sample_images/cat1.jpg" alt="" />
                                <div>
                                    <p>MEN'S WEAR</p>
                                </div>
                                <span className="description">este es un ejemplo de la descripcion cat3</span>

                            </div>
                            <div className="cat">
                                <img src="../../src/images/sample_images/accessories.jpg" alt="" />
                                <div>
                                    <p>accessories</p>
                                    
                                </div>
                                <span className="description">este es un ejemplo de la descripcion cat4</span>
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

        </div>
    );
}
export default Categorias;