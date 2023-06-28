import React from 'react';
import { images } from "../../constants"
import "./aboutUs.css"
const AboutUs = () => {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
                <img src={images.G} alt="G letter"/>
            </div>

            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant"> About Us </h1>
                    <img src={images.spoon} alt="spoon" className="spoon__img"/>
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci animi at atque dolor eveniet explicabo ipsam iste magnam modi nihil officiis, quae quas rerum sunt, suscipit veniam voluptate.</p>
                    <button type="button" className="custom__button"> Know More </button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="knife"/>
                </div>

                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant"> Our History </h1>
                    <img src={images.spoon} alt="spoon" className="spoon__img"/>
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci animi at atque dolor eveniet explicabo ipsam iste magnam modi nihil officiis, quae quas rerum sunt, suscipit veniam voluptate.</p>
                    <button type="button" className="custom__button"> Know More </button>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;