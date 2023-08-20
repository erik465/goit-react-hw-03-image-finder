import axios from "axios";

const ACCESS_KEY = '38253238-ec6a6e94acafbceabd9aec54b'



export const fetchImages = async(queue, page) =>{
    try
    {
        let response = await axios.get(`https://pixabay.com/api/?q=${queue}&page=${page}&key=${ACCESS_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        return response.data.hits;
    }
    catch(e)
    {
        console.warn("Error fetching")
    }
}