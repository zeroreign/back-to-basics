import axios, { AxiosRequestConfig } from "axios";

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
};

let reqOptions = {
  url: "https://pokeapi.co/api/v2/pokemon/gengar",
  method: "GET",
  headers: headersList,
} as AxiosRequestConfig;

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
});


