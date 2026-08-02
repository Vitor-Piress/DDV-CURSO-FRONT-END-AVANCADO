import "./index.css";
import img1 from "./assets/Faturamento-do-e-commerce-cresce.jpg";
import img2 from "./assets/bigWaveOffKanagawa.jpeg";
import img3 from "./assets/images2.jpeg";
import img4 from "./assets/images.jpeg";
import img5 from "./assets/gestao-de-e-commerce-1200x720.png";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Senta QLVH
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary ms-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
      <section id="carouselExample" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-image">
            <img
              src={img1}
              className="d-block w-100"
              alt="Carrinho de compras com caixas"
            />
          </div>
          <div className="carousel-item carousel-image">
            <img
              src={img2}
              className="d-block w-100"
              alt="Grande Onda de Kanagawa"
            />
          </div>
          <div className="carousel-item carousel-image">
            <img
              src={img3}
              className="d-block w-100"
              alt="Tecla de E-Commerce"
            />
          </div>
          <div className="carousel-item carousel-image">
            <img
              src={img4}
              className="d-block w-100"
              alt="Carrinho de compras com caixas"
            />
          </div>
          <div className="carousel-item carousel-image">
            <img
              src={img5}
              className="d-block w-100"
              alt="Cartão de crédito e-commerce"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <section>
        <h2 className="text-center m-4">Seção de Produtos</h2>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Big Wave of Kanagawa"
                />
                <div className="card-body">
                  <h5 className="card-title">Big Wave</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Big Wave of Kanagawa"
                />
                <div className="card-body">
                  <h5 className="card-title">Big Wave</h5>
                  <p className="card-text">
                    Some quick example text to build on the Big Wave and make up
                    the bulk of the card’s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Big Wave of Kanagawa"
                />
                <div className="card-body">
                  <h5 className="card-title">Big Wave</h5>
                  <p className="card-text">
                    Some quick example text to build on the Big Wave and make up
                    the bulk of the card’s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Big Wave of Kanagawa"
                />
                <div className="card-body">
                  <h5 className="card-title">Big Wave</h5>
                  <p className="card-text">
                    Some quick example text to build on the Big Wave and make up
                    the bulk of the card’s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Manter conectado?
                </label>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
