import React from 'react';
import {images, data} from "../../constants"
import Subheading from "../../components/SubHeding/Subheading";
import Menuitem from "../../components/Menuitem/Menuitem";
import "./specialMenu.css"
const SpecialMenu = () => {
    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <Subheading title="Menu that fits you palatte"  />
                <h1 className="headtext__cormorant">Today`s Special</h1>
            </div>

            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine flex__center">
                    <p className="app__specialMenu-menu_heading"> Wine & Beer </p>
                    <div className="app__specialMenu_menu_items">
                        {data.wines.map((wine, index) => (
                            <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>

                        ))}
                    </div>
                </div>
                <div className="app__specialMenu-menu_img">
                    <img src={images.menu} alt="Menu"/>
                </div>

                <div className="app__specialMenu-menu_cocktails flex__center">
                    <p className="app__specialMenu-menu_heading"> Cocktails </p>
                    <div className="app__specialMenu_menu_items">
                        {data.cocktails.map((cocktail, index) => (
                            <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>

                        ))}
                    </div>
                </div>
            </div>

            <div style={{marginTop: "15px"}}>
                <button type="button" className="custom__button">
                View More
                </button>
            </div>
        </div>
    );
};

export default SpecialMenu;