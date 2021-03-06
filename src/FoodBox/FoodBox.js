/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function FoodBox ({name,calories,image,quantity,handleAdd}){
    return(
    <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{name}</strong> <br />
                        <small>{calories} cal</small>
                    </p>
                </div>
            </div>
            <div className="l">
                <div className="field has-addons">
                    <div className="control">
                        <input id="quantity" className="input" type="number" placeholder="1" />
                    </div>
                    <div className="control">
                            <button onClick={handleAdd} className="button is-info">
                                +
                            </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
    );
}

export default FoodBox;