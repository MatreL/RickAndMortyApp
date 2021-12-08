import axios from "axios";

export const rickAndMortyServices = (function () {
  const urlAllCharacters = "https://rickandmortyapi.com/api/";

  const getAll = async (page = 1) => {
    const response = await axios.get(
      `${urlAllCharacters}/character/?page=${page}`
    );
    return response.data["results"];
  };

  const getAllLocation = async () => {
    const response = await axios.get(`${urlAllCharacters}/location`);
    return response.data["results"];
  };

  return { getAll, getAllLocation };
})();
