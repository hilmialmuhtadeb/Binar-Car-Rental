import React from 'react'
import './home.scss'
import CommonButton from '../../ui/atom/commonButton'
import carHeroImage from '../../../assets/images/car-hero.png'

const Home = () => {
  return (
    <div className="hero-section">
      <div className="left-side">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <CommonButton text="Mulai Sewa Mobil" />
      </div>
      <div className="right-side">
        <img src={carHeroImage} alt="Car Hero" />
      </div>
    </div>
  )
}

export default Home