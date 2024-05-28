import "../assets/Componets/Bestseller.css";

const Bestseller = () => {
  return (
    <section className="best-seller">
      <div className="header">
        <h2 className="title">Best Seller</h2>
        <a href="#" className="more-link"></a>
      </div>
      <div className="items">
        <div className="item">
          <img src="/landingpage/image5.png" alt="item 1" />
        </div>
        <div className="item">
          <img src="/landingpage/image6.png" alt="item 2" />
        </div>
        <div className="item">
          <img src="/landingpage/image7.png" alt="item 3" />
        </div>
        <div className="item">
          <img src="/landingpage/image8.png" alt="item 4" />
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
