import Navbar from "./components/Navbar";

function ProductDetails() {
    return (
        <div>
            <Navbar />
            <div>
                <section className="section product-detail">
                    <div className="details container">
                        <div className="left image-container">
                            <div className="main">
                                <img src="../../src/images/sample_images/product-2.jpg" id="zoom" alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <span>CATEGORIA</span>
                            <h1>Boy’s T-Shirt By Handsome</h1>
                            <div className="price">$50</div>

                            <form className="form">
                                <label htmlFor="number">Cantidad:</label>
                                <input type="number" placeholder="1" min="1" />
                                <a href="carrito.html" className="addCart">Añadir a al Carrito</a>
                            </form>
                            <h3>DETALLE DEL PRODUCTO</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
                                delectus nulla voluptates nesciunt quidem laudantium, quisquam
                                voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProductDetails;
