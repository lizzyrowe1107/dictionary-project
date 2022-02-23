import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {

    //make state for when the keyword changes
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null); // object {}

    function handleResponse(response) {
        //console.log(response); to check the response
        //console.log(response.data[0]); after playing around only want first data point;
        //console.log(response.data[0].meanings[0].definitions[0].definition);

        setResults(response.data[0])
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

            <Results results={results} />
        </div>

    );
}