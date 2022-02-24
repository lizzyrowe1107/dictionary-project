import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import './Results.css';

export default function Results(props) {
    //console.log(props.results);
    
    // if something in results show results
    if (props.results) {
            return (
            <div className="Results">
                <section>
                    <h2>
                        {props.results.word}
                    </h2>

                    {props.results.phonetics.map(function(phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetic phonetic={phonetic} />

                            </div>
                        )
                    })}
                </section>

                {props.results.meanings.map(function(meaning, index) {
                    //return meaning.definitions[0].definition; // "definitions[0].definition" -> get this by console log response
                    
                    //send meaning to new component meaning
                    return (
                        <section key={index}> 
                            <Meaning meaning={meaning} /> 
                        </section>
                    );

                })}



            </div>


            );

        } else {
            return null;
              
        }


    
}