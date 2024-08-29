import axios from 'axios'
// https://api.themoviedb.org/3/movie/550?api_key=59947a01dedfacaaeb60096d5ae1e04a
const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
});
export default instance;