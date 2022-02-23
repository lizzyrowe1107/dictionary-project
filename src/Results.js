import React from "react";


export default function Results(props) {
    //console.log(props.results)
    
    // if something in results show results
    if (props.results) {
            return (
            <div className="Results">
                Hello from results



            </div>


            );

        } else {
            return null;
              
        }


    
}