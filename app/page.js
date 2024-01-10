import Link from 'next/Link'

export default function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/fiesta1.avif" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Todos los eventos</h5>
              <p>Obten informacion sobre los eventos en la ciudad.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/portada.avif" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Disfruta</h5>
              <p>La fiesta es divertida con responsabilidad.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./img/portada2.avif"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Los mejores eventos</h5>
              <p>Calidad y diversion asegurada.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="mt-5">
        <h2 className="text-center m-3 " style={{ color: "#FF0049" }}>
          Ultimos eventos
        </h2>
        <div className="container m-2">
          <div className="row ">
            <div className="col-8">
              <h5 className="text-center">Social</h5>
              <ul className="list-group ">
                <li className="list-group-item text-bg-secondary">
                  Conferencia de desarrollo personal, Luis Castilleja
                </li>
                <li className="list-group-item text-bg-secondary">Nextcom</li>
              </ul>
              <h5 className="text-center">Deportivos</h5>
              <ul className="list-group ">
                <li className="list-group-item text-bg-secondary">An item</li>
              </ul>
              <h5 className="text-center">Culturales</h5>
              <ul className="list-group">
                <li className="list-group-item text-bg-secondary">An item</li>
                <li className="list-group-item text-bg-secondary">
                  A second item
                </li>
                <li className="list-group-item text-bg-secondary">
                  A third item
                </li>
              </ul>
            </div>
            <div className="col-4">
              <img
                src="./img/categoRIAS.avif"
                alt="..."
                className="object-fit-cover rounded p-0 m-0"
                width="500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5 text-center">
        <h2 className="m-4 " style={{ color: "#FF0049" }}>
          Todos los eventos
        </h2>
        <div className="card-group gap-4 m-4 border-0">
          <div className="card text-bg-secondary ">
            <img
              src="./img/social.avif"
              className="card-img-top"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Sociales</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn btn-primary text-center" href="/events">Leer más</Link>
              <p className="card-text">
                <small className="text-body-secondary">
                  Actualizado hace 5 minutos
                </small>
              </p>
            </div>
          </div>
          <div className="card  border-0">
            <img
              src="./img/cultural.avif"
              className="card-img-top"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Culturales</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <Link  className="btn btn-primary text-center" href="/events">Leer más</Link>
              <p className="card-text">
                <small className="text-body-secondary">
                  Actualizado hace 5 minutos
                </small>
              </p>
            </div>
          </div>
          <div className="card text-bg-secondary border-0">
            <img
              src="./img/deporte.avif"
              className="card-img-top object-fit-cover"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Deportivos</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <Link className="btn btn-primary text-center" href="/events">Leer más</Link>
              <p className="card-text">
                <small className="text-body-secondary">
                  Actualizado hace 5 minutos
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 style={{ color: "#FF0049" }}>Lugares &amp; sitios</h2>
        <div
          className="container text-bg-secondary rounded-4 mb-3"
          style={{ width: "40rem" }}
        >
          <div className="row">
            <div className="col m-3">
              <h2>Da un vistazo a nuestras instalaciones</h2>
              <img src="./img/bar.avif" alt="bar" />
              <Link href="/locales" className="btn btn-primary m-3">
                Ver mas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
