function Banner() {
  return (
    <section className="produtos-banner">
      <div className="container produtos-banner-content">
        <div className="produtos-banner-copy">
          <span className="produtos-tag">Produtos</span>
          <h1>
            Soluções completas para a sua <span>Residência</span>
          </h1>
          <p>
            Explore nossos produtos selecionados para atender a sua demanda!
          </p>
        </div>

        <div className="produtos-banner-image">
          <div className="produtos-banner-card"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
