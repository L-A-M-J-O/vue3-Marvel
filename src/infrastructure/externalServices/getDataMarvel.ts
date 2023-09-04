// adapters/ApiAdapter.js
import axios from 'axios';

const clavePublic = "2389d640572fef7a1ed788b134a4fd4c"
const hashed = "29550348fabb943a30932492e0aff76e"
export async function sendDataRequest() {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${clavePublic}&hash=${hashed}&limit=30`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestComics() {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${clavePublic}&hash=${hashed}&limit=18`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestSeries() {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=${clavePublic}&hash=${hashed}&limit=10`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestSeriesName(name: string) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=${clavePublic}&hash=${hashed}&titleStartsWith=${name}`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}

export async function sendDataRequestComicsName(name: string) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${clavePublic}&hash=${hashed}&titleStartsWith=${name}`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestName(name: string) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${clavePublic}&hash=${hashed}&nameStartsWith=${name}`)
            .then((data) => { return data.data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestImage() {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=${clavePublic}&hash=${hashed}`);

        const dataImage = response.data.data.results;

        if (dataImage.length > 0) {
            const miniaturas = dataImage.map((personaje: any) => {
                return {
                    image: personaje.thumbnail.path + '.' + personaje.thumbnail.extension,
                };
            });

            return miniaturas;
        } else {
            throw new Error('No se encontraron imagenes.');
        }
    } catch (error) {
        throw error;
    }
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
export async function sendDataRequestIDComics(id: number) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=${clavePublic}&hash=${hashed}`)
            .then(({ data }) => { return data.data });
        return response
    } catch (error) {
        throw error;
    }
}
export async function sendDataRequestIDSeries(id: number) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1&apikey=${clavePublic}&hash=${hashed}`)
            .then(({ data }) => { return data.data });
        return response
    } catch (error) {
        throw error;
    }
}