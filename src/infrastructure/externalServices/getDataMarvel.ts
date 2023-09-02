// adapters/ApiAdapter.js
import axios from 'axios';

const clavePublic = "2389d640572fef7a1ed788b134a4fd4c"
const hashed = "29550348fabb943a30932492e0aff76e"
export async function sendDataRequest() {
    // try {
    //     const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${clavePublic}&hash=${hashed}`)
    //         .then((data) => { return data.data.data });
    //     return response
    // } catch (error) {
    //     throw error;
    // }
}
export async function sendDataRequestID(id: number) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${clavePublic}&hash=${hashed}`)
            .then(({ data }) => { return data.data });
        return response
    } catch (error) {
        throw error;
    }
}