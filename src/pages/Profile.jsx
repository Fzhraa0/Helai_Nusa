import "../assets/Componets/Profile.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHome,
  faHeart,
  faStar,
  faBell,
  faLanguage,
  faCreditCard,
  faUniversity,
  faHeadset,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="/profile/profile.png"
              alt="Profile Picture"
              className="profile-picture"
            />
            <div className="profile-info">
              <h1 className="profile-name">Ayu Lestari</h1>
              <p className="profile-email">SepAsep@gmail.com</p>
            </div>
            <button className="edit-profile-button">
              <Link to="/EditProfile">Edit Profile</Link>
            </button>
          </div>
          <div className="order-status">
            <div className="status-card">
              <h2>To Pay</h2>
              <div className="product">
                <img
                  src="/profile/profile1.png"
                  alt="Product Image"
                  className="product-image"
                />
                <div className="product-info">
                  <p className="product-name">Nama Produk</p>
                  <p className="product-description">Deskripsi Produk</p>
                </div>
              </div>
              {/* Ulangi struktur serupa untuk produk tambahan jika diperlukan */}
            </div>
            <div className="status-card">
              <h2>To Ship</h2>
              <div className="product">
                <img
                  src="/profile/profile1.png"
                  alt="Product Image"
                  className="product-image"
                />
                <div className="product-info">
                  <p className="product-name">Nama Produk</p>
                  <p className="product-description">Deskripsi Produk</p>
                </div>
              </div>
              {/* Ulangi struktur serupa untuk produk tambahan jika diperlukan */}
            </div>
            <div className="status-card">
              <h2>To Receive</h2>
              <div className="product">
                <img
                  src="/profile/profile1.png"
                  alt="Product Image"
                  className="product-image"
                />
                <div className="product-info">
                  <p className="product-name">Nama Produk</p>
                  <p className="product-description">Deskripsi Produk</p>
                </div>
              </div>
              {/* Ulangi struktur serupa untuk produk tambahan jika diperlukan */}
            </div>
            <div className="status-card">
              <h2>Done</h2>
              <div className="product">
                <img
                  src="/profile/profile1.png"
                  alt="Product Image"
                  className="product-image"
                />
                <div className="product-info">
                  <p className="product-name">Nama Produk</p>
                  <p className="product-description">Deskripsi Produk</p>
                </div>
              </div>
              {/* Ulangi struktur serupa untuk produk tambahan jika diperlukan */}
            </div>
          </div>

          <div className="column">
            <h2>Aktivitas</h2>
            <div className="item">
              <FontAwesomeIcon icon={faHome} />
              <a href="/Landingpage">Home</a>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faHeart} />
              <span>Wishlist</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faStar} />
              <span>Review</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faBell} />
              <span>Notifikasi</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faLanguage} />
              <span>Bahasa</span>
            </div>
          </div>
          <div className="column">
            <h2>Pembayaran</h2>
            <div className="item">
              <FontAwesomeIcon icon={faCreditCard} />
              <span>Konfigurasi Pembayaran</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faUniversity} />
              <span>Rekening Bank</span>
            </div>
          </div>
          <div className="column">
            <h2>Bantuan dan Keamanan</h2>
            <div className="item">
              <FontAwesomeIcon icon={faHeadset} />
              <span>Layanan Pelanggan</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faUserShield} />
              <span>Aktivitas Login</span>
            </div>
          </div>
          <div className="contact-button">
            <img src="whatsapp-icon.png" alt="Ikon WhatsApp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
