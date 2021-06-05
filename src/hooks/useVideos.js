import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    const [key] = useState('AIzaSyBQTB10jydTYqEKKXhZHyCOsEry6lj-iiI');

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                type: 'video',
                maxResults: 5,
                key: key
            }
        });

        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;