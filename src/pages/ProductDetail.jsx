import "../assets/Componets/ProductDetail.css";
import Header from "../components/Header";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className="product-detail">
        <div className="div">
          <div className="frame">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="like" src="img/like.svg" alt="Like Icon" />
              </div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper">About this Product</div>
              <p className="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                congue vestibulum arcu in dignissim. Mauris convallis vitae urna
                quis mattis. Nam orci libero, pulvinar eu turpis nec, sagittis
                tempor felis. Nunc eget feugiat lorem. Donec tellus justo,
                porttitor eu cursus cursus, pellentesque ut quam. Curabitur at
                arcu
              </p>
            </div>
          </div>
          <div className="text-wrapper-2">You may also like</div>
          <div className="frame-3">
            {/* Konten untuk item-item yang direkomendasikan */}
          </div>
          {/* Konten untuk ulasan produk */}
          <div className="frame-7">
            {/* Konten untuk detail produk, variant, dan tombol beli */}
          </div>
          {/* Konten untuk gambar-gambar lain yang terkait dengan produk */}
          <div className="carousel">
            {/* Konten untuk carousel gambar produk */}
          </div>
          {/* Tombol WhatsApp */}
          <div className="whatsapp-white">
            <div className="whats-app">
              <img
                className="combined-shape"
                src="img/combined-shape-2.svg"
                alt="WhatsApp Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
