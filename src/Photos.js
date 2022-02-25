import React from "react";
import './Photos.css';

export default function Photos(props) {
    //console.log(props.photos);  this is to see what the data was passed from Dictionary

    //if we have something from props.photos then...
    if (props.photos) {
        return (

            <section className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-4" key={index}>
                                <a href={photo.src.orginal} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} className="img-fluid" alt=""></img>

                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>

        );

    } else {
        return null;
    }



}