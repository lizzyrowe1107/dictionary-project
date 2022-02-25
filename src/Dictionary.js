import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {

    //make state for when the keyword changes
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null); 
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        //console.log(response); to check the response
        //console.log(response.data[0]); after playing around only want first data point;
        //console.log(response.data[0].meanings[0].definitions[0].definition);

        setResults(response.data[0])
    }

    function search() {

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        //make request using axios
        axios.get(apiUrl).then(handleResponse)

    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
        
    }

    function handleKeywordChange(event) {
        //console.log(event) to find where the value is
        //console.log(event.target.value);
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (

            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}>
                        
                        </input>
                    </form>
                    
                </section>
    
                <Results results={results} />
            </div>
    
        );
    } else {
        load();
        return "Loading..."
    }



    
}