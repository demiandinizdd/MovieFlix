import React from 'react';
import { ReactComponent as MainImage } from 'core/assets/images/mainPageImg.svg';
import Navbar from 'core/components/Navbar';
import './styles.css';
// TODO: implement Authentication
// import Auth from '../Auth';

const Home = () => (
    <>
        <Navbar />
        <div className=" home-container">
            <div className="home-content">
                <div>
                    <h1 className="home-title">
                        Avalie Filmes
                    </h1>
                    <h3 className="home-subTitle">
                        Diga o que você achou do seu filme favorito
                    </h3>
                    <div className="home-main-image">
                        <MainImage />
                    </div>
                </div>
            </div>
        {/* <Auth />  */}
        </div>
    </>
)

export default Home;