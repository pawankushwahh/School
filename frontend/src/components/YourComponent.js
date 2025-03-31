import { API_URL } from '../api/config';

const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/test`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}; 