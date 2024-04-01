import Navbar from "./components/Navbar"
function Categorias() {
    return (

        <div>
            <Navbar />
            <div>
                <div class="container">

                    {/* <!-- Categories Section --> */}
                    <section class="section category">
                        <div class="top container">
                            <h1>Todas Las Categorias De Productos</h1>
                        </div>
                        <div class="cat-center">
                            <div class="cat">
                                <img src="../../src/images/sample_images/cat3.jpg" alt="" />
                                <div>
                                    <p>WOMEN'S WEAR</p>
                                </div>
                            </div>
                            <div class="cat">
                                <img src="../../src/images/sample_images/cat2.jpg" alt="" />
                                <div>
                                    <p>ACCESSORIES</p>
                                </div>
                            </div>
                            <div class="cat">
                                <img src="../../src/images/sample_images/cat1.jpg" alt="" />
                                <div>
                                    <p>MEN'S WEAR</p>
                                </div>
                            </div>
                            <div class="cat">
                                <img src="../../src/images/sample_images/accessories.jpg" alt="" />
                                <div>
                                    <p>accessories</p>
                                </div>
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