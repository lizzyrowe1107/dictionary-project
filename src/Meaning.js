import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";


export default function Meaning(props) {
    //console.log(props.meaning) to see what is being passed to this component
    return (
        
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>

            {props.meaning.definitions.map(function(definition, index) {
                
                return (
                    <div key={index}>

                        <div className="definition">
                            {definition.definition}
                        </div>

                        <div className="example">
                            {definition.example}
                        </div>


                        <Synonyms synonyms={definition.synonyms} />
                        


                    </div>
                )
                
                //<p>{definition.definitions[0].definition}</p> this was the path to find the first definition - replaced with loop
                //<p>{definition.definitions[0].example}</p>

            })}

        </div>
        


    );
}