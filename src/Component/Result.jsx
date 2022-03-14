import React, { useState, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";

export default function Result() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchItem, setSearchItem] = useState("");


    // const getIndexById = (id) => {
    //     return items.findIndex((item) => item.id === id);
    //   };
    
    useEffect(() => {
        const url = ``;
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw Error(response.status);
            }
          })
          .then((result) => {
            // setItems();
            // setIsLoaded(true);
          });
        
      }, []);


  return 
}
