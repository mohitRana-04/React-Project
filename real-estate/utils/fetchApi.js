import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "e2d016a6c0mshba3d35f89db5c25p169b55jsnfe8166bf3cbe",
    },
  });

  return data;
};
