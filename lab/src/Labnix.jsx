import React from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p1.png",
    model: "Melt Flow",
  },
  {
    id: 2,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p2.png",
    model: "Melt Flow",
  },
  {
    id: 3,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p3.png",
    model: "Melt Flow",
  },
  {
    id: 5,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p5.png",
    model: "Melt Flow",
  },
  {
    id: 6,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p6.png",
    model: "Melt Flow",
  },
  {
    id: 7,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p7.png",
    model: "Melt Flow",
  },
  {
    id: 8,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p8.png",
    model: "Melt Flow",
  },
  {
    id: 8,
    name: "Salt Spray Chamber Stand",
    img: "/assets/p9.png",
    model: "Melt Flow",
  },
];

const Labnix = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="logo" width={100} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Catalogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacts Us
                </a>
              </li>
            </ul>
            <form class="d-flex " role="search ">
              <button class="btn btn-outline-success me-2" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <div>
        <h3 className="text-center fw-bold mt-4">FEATURED CATEGORIES</h3>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 p-4 m-1"
                style={{ backgroundColor: "#f8f9fa" }}
                width={10}
              >
                <img src={product.img} alt={product.name} width={100} />
                <p className="text-muted fw-bold">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Trending at Labnix</h2>
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card border shadow-sm p-3">
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-fluid rounded me-md-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="text-center text-md-start">
                    <h5 className="fw-bold">{product.name}</h5>
                    <p className="text-muted">{product.model}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start gap-1 mt-2">
                  <button className="btn btn-outline-primary w-100">
                    View
                  </button>
                  <button className="btn btn-outline-secondary w-100">
                    Quote
                  </button>
                  <button className="btn btn-outline-success w-100">
                    Catalog
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-4">Suggested Products</h2>
        <div className="row">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className={`mb-4 ${
                index === 0 ? "col-12 col-lg-6" : "col-12 col-md-6 col-lg-3"
              }`}
            >
              <div className="card border shadow-sm p-3 h-100">
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-fluid rounded me-md-3"
                    style={{
                      width: index === 0 ? "150px" : "100px",
                      height: index === 0 ? "150px" : "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="text-center text-md-start">
                    {index === 0 && (
                      <h5 className="text-primary fw-bold">
                        {product.category}
                      </h5>
                    )}
                    <h6 className="fw-bold">{product.name}</h6>
                    {index === 0 && (
                      <p className="text-muted">
                        existing keeping the buttons full width and making the
                        first product larger
                      </p>
                    )}
                  </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                  <button className="btn btn-outline-primary w-100">
                    View
                  </button>
                  {index !== 0 && (
                    <button className="btn btn-outline-success w-100">
                      Catalog
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <footer className="py-4 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <img src="./assets/logo.png" alt="logo" width={100} />
                <p className="small">
                  In eu libero ligula. Fusce eget metus lorem, ac viverra leo.
                  Nullam convallis arcu vel pellentesque sodales.
                </p>
                <div className="d-flex gap-2">
                  <a href="#" className="text-light fs-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.072 5.656 21.222 10.438 22V14.89H7.899V12h2.539V9.797c0-2.509 1.492-3.897 3.776-3.897 1.097 0 2.242.195 2.242.195v2.507H15.75c-1.463 0-1.92.907-1.92 1.833V12h3.271l-.522 2.89h-2.749V22C18.344 21.222 22 17.072 22 12.073z" />
                    </svg>
                  </a>

                  <a href="#" className="text-light fs-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.46 6.011c-.77.34-1.6.572-2.46.678a4.296 4.296 0 001.88-2.39 8.593 8.593 0 01-2.72 1.04 4.287 4.287 0 00-7.3 3.91 12.152 12.152 0 01-8.82-4.47 4.278 4.278 0 001.33 5.72 4.22 4.22 0 01-1.94-.54v.05c0 2.1 1.5 3.86 3.49 4.26a4.2 4.2 0 01-1.93.07 4.287 4.287 0 004 2.96 8.612 8.612 0 01-5.32 1.83c-.34 0-.68-.02-1.01-.06a12.166 12.166 0 006.56 1.92c7.87 0 12.18-6.53 12.18-12.19 0-.19 0-.39-.01-.58a8.61 8.61 0 002.11-2.2z" />
                    </svg>
                  </a>

                  <a href="#" className="text-light fs-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8 7H8v8h3v-8zm-1.5-4A1.5 1.5 0 008 7.5 1.5 1.5 0 009.5 9 1.5 1.5 0 0011 7.5 1.5 1.5 0 009.5 6zM17 10h-3v8h3v-4c0-2 2-2.2 2-1.8V10z" />
                    </svg>
                  </a>

                  <a href="#" className="text-light fs-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 4.5c-3.97 0-7.5 3.03-7.5 7.5s3.53 7.5 7.5 7.5c4.07 0 7.5-3.43 7.5-7.5H12V9h9c0 .65-.07 1.27-.2 1.87l-.08.4h-4.72v3h4.37c-.77 2.2-3.02 3.75-5.87 3.75a6 6 0 01-6-6 6 6 0 016-6c1.65 0 3.14.67 4.24 1.76l1.42-1.42A8.479 8.479 0 0012 4.5z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-bold">Latest News</h5>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="news1.jpg"
                    alt="news"
                    className="me-2 rounded"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <a href="#" className="text-light text-decoration-none small">
                    Did son unreserved themselves indulgence its
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="news2.jpg"
                    alt="news"
                    className="me-2 rounded"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <a href="#" className="text-light text-decoration-none small">
                    Rapturous am eagerness it as resolving household
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="fw-bold">Quick Links</h5>
                <ul className="list-unstyled small">
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-light text-decoration-none">
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="fw-bold">Best Seller</h5>
                <ul className="list-unstyled small">
                  <li>Flow Indexer NMF1</li>
                  <li>Melt Flow Indexer NMF1-101</li>
                  <li>NMF1-105 Melt Flow Indexer</li>
                  <li>Videohive</li>
                  <li>Melt Flow Indexer</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-3">
              <p className="mb-0 small">
                &copy; Copyright. All rights reserved 2024.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Labnix;
