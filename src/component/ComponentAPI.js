import React, { useState, useEffect } from "react";

const ComponentAPI = () => {
    const [apiDataArr, setApiDataArr] = useState();

    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                setApiDataArr(data.entries);
            })
        console.log(apiDataArr);
    })

    return (
        <>
            <div>API Call using useEffect</div>
            <ul class="list-group">
                {apiDataArr && apiDataArr.map((item) => (
                    <li class="list-group-item">{item.Description}</li>
                ))}
            </ul>
        </>
    )
}

export default ComponentAPI;