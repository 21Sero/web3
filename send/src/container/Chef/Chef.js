import React from 'react';
import { images } from "../../constants"
import Subheading from "../../components/SubHeding/Subheading";
import "./chef.css"

const Chef = () => {
    return (
        <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
                <img src={images.chef} alt="chef"/>
            </div>
            <div className="app__wrapper_info">
                <Subheading title="Chef`s Word"/>
                <h1 className="headtext__cormorant">What we believe in </h1>
                <div className="app__chef-content">
                    <div className="app__chef-content_quote">
                        <img src={images.quote} alt="quote"/>
                        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus et fuga in laborum quae!</p>
                    </div>
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis cumque ducimus eligendi, esse excepturi exercitationem illo maxime pariatur quam, quibusdam reprehenderit saepe sunt ullam unde? Eum minima tempore velit?</p>
                </div>
                <div className="app__chef-sign ">
                    <p> Sero Harutyunyan </p>
                    <p className="p__opensans">
                        Chef & Founder
                    </p>
                    <img src={images.sign} alt="sign" />
                </div>
            </div>
        </div>
    );
};

export default Chef;