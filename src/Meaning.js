import React from "react";


export default function Meaning(props) {
    //console.log(props.meaning) to see what is being passed to this component
    return (
        
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>

            {props.meaning.definitions.map(function(definition, index) {
                
                return (
                    <div key={index}>
                        <p>
                        {definition.definition}
                        <br />
                        <em>{definition.example}</em>

                        </p>

                    </div>
                )
                
                //<p>{definition.definitions[0].definition}</p> this was the path to find the first definition - replaced with loop
                //<p>{definition.definitions[0].example}</p>

            })}

        </div>
        


    );
}