const BASE_URL = "https://api.sampleapis.com/movies";
export const fetchMovies = async (category) => {
 const response = await fetch(`${BASE_URL}/${category}`);
 const data = await response.json();
 return data;
};

