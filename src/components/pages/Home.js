import React, { useState } from "react";
import axios from "axios";

const url = "https://mcagames.com.br/wp-json/wc/store/products";

function getProducts() {
  axios
    .get(url)

    .then((response) => {
      const responseBody = JSON.stringify(response.data);
      console.log(responseBody);
    })

    .catch((error) => console.error(error));
}

export default function Home() {
  return <div id="home" className="container">
    <button onClick={getProducts}>Clique aqui</button>
  </div>;
}
