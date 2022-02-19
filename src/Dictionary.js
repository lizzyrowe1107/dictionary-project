import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");


    function search(event) {
        event.preventDefault();

        alert(`Searching ${keyword} definition`)

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