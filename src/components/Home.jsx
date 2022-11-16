import imagen1 from "./img/imagen1.jpg"
import casco from "./img/casco.webp"
import textiles from "./img/textiles.png"
import equipaje from "./img/equipaje.png"

function Home(props) {
    return (
        <div className="App-header">
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        class="active"
                        aria-label="Slide 1"
                        aria-current="true"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        class=""
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        class=""
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img src={imagen1} alt="D" width={"100%"} height={"80%"} />
                        <div class="container">
                            <div class="carousel-caption text-start"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen1} alt="D" width={"100%"} height={"80%"} />

                        <div class="container">
                            <div class="carousel-caption"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen1} alt="D" width={"100%"} height={"80%"} />
                        <div class="container">
                            <div class="carousel-caption text-end"></div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <hr>
            
            </hr>
            <div class="container marketing">

                
                <div class="row">
                    <div class="col-lg-4">
                    <img src={casco} alt="D" width={"140"} height={"140"} class="bd-placeholder-img rounded-circle"/>

                        <h2 class="fw-normal">Cascos</h2>
                        <p>Es importante tanto a nivel de seguridad como de estética, te ofrecemos una amplia variedad de tipos de cascos de moto para elegir.</p>
                        <p><a class="btn btn-secondary" href="./categorias">Ver detalles &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                    <img src={textiles} alt="D" width={"140"} height={"140"} class="bd-placeholder-img rounded-circle"/>


                        <h2 class="fw-normal">Textiles</h2>
                        <p>El equipamiento encima de una moto es básico para minimizar las consecuencias de una caída o accidente, te ofrecemos una amplia variedad de elementos de proteccion.</p>
                        <p><a class="btn btn-secondary" href="./categorias">Ver detalles &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                    <img src={equipaje} alt="D" width={"140"} height={"140"} class="bd-placeholder-img rounded-circle"/>
                        <h2 class="fw-normal">Equipaje</h2>
                        <p>¿Planeas un viaje en tu moto?, prepárate con los productos que tenemos para llevar tu equipaje: bolsos de viaje, maletas laterales y soportes.</p>
                        <p><a class="btn btn-secondary" href="./categorias">Ver detalles &raquo;</a></p>
                    </div>
                </div>
                <div class="container">
                <iframe title="map" src="https://www.google.com/maps/d/embed?mid=1Rb20XiXDXxXgELBJxU4UPi3N3UE&ehbc=2E312F" width={"100%"} height="480"></iframe>
                </div>
                
                </div>
                
                </div>

        


    );
}

export default Home;
