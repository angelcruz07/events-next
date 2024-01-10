const Page = () => {
  return (
    <main className="contPrincipal">
      <section className="mt-5 mb-5 text-center">
        <h2 className="m-4 " style={{ color: "#FF0049" }}>
          Locales
        </h2>
        <div className="card-group gap-4 m-4 border-0">
          <div className="card text-bg-secondary ">
            <img
              src="./img/teatro.jpg"
              className="card-img-top"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Teatro</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a className="btn btn-primary text-center">Leer más</a>
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
              <h5 className="card-title text-center">Mueseo</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <a className="btn btn-primary text-center">Leer más</a>
              <p className="card-text">
                <small className="text-body-secondary">
                  Actualizado hace 5 minutos
                </small>
              </p>
            </div>
          </div>
          <div className="card text-bg-secondary border-0">
            <img
              src="./img/estadio.avif"
              className="card-img-top object-fit-cover"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Estadio</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <a className="btn btn-primary text-center">Leer más</a>
              <p className="card-text">
                <small className="text-body-secondary">
                  Actualizado hace 5 minutos
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
