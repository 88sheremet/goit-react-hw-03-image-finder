import axios from 'axios';

export default async function fetchImages({ query, page = 1, perPage = 12 }) {
  const url = 'https://pixabay.com/api/';
  const key = '31754006-f43a1b08b2cea32f92fc299f3';

  const filter = `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}
// `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12