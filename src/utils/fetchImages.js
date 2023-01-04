// import axios from 'axios';

// export const fetchImages = async ({ page, searchName })=> {
//   const url = 'https://pixabay.com/api/';
//   const key = '31754006-f43a1b08b2cea32f92fc299f3';

//   const filter = `?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

//   // const response =  await axios.get(`${url}${filter}`).then(response => response.data);
//   const response =  await axios.get(`${url}${filter}`);

//   return response.data;
// }


import axios from 'axios';
export async function fetchImages( searchTerm, perPage, page ) {     
    const API_URL = "https://pixabay.com/api/"; 
    const config = new URLSearchParams({
            key: "31399452-9d47890bb90445954f5179866",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            q: searchTerm,
            per_page: perPage,            
    });  
    try { 
        const response = await axios.get(`${API_URL}?page=${page}&${config}`);        
        return response.data;
    } 
    catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    }  
}