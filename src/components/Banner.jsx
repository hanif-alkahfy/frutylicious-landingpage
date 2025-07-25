const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-box">
        <h2 className="banner-title">
          Now you can get <br /> our juice
        </h2>
        <p className="banner-description">
          It is a long established fact that a reader will be distracted by readable content of a page when looking at
        </p>
        <button className="banner-button"
        onClick={() => {
          window.open(
            "https://wa.me/6281226467574?text=Halo%20Frutylicious!%20Saya%20ingin%20memesan%20jus%20segar%20dari%20menu%20kalian.%20Mohon%20informasinya%20ya!",
            "_blank"
          );
        }}>
        order now</button>
      </div>
    </section>
  );
};

export default Banner;
