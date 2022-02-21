import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        //console.log(response); to check the response

        //console.log(response.data[0]); after playing around only want first data point
    }


    function search(event) {
        event.preventDefault();

        

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;




        //make request using axios

        axios.get(apiUrl).then(handleResponse)

    }

    

    function handleKeywordChange(event) {
        //console.log(event) to find where the value is
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (

        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}>
                
                </input>
            </form>
        </div>

    );
}