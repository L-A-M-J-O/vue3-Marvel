// cores/DataCore.js
import { sendDataRequest, sendDataRequestID, sendDataRequestImage, sendDataRequestIDComics, sendDataRequestIDSeries, sendDataRequestName, sendDataRequestComics } from '../externalServices/getDataMarvel';
import { SuperHeroe } from '../../domain/models/SuperHeroe';
export async function sendData() {
    // Realizar lógica adicional si es necesario
}

export async function listData(): Promise<SuperHeroe[]> {
    const response = await sendDataRequest();
    return response.results
}
export async function listDataComics() {
    const response = await sendDataRequestComics();
    return response.results
}
export async function ListDataName(name: string) {
    const response = await sendDataRequestName(name);
    return response.results
}
export async function listDataImage() {
    const response = await sendDataRequestImage();
    return response
}
export async function DetailsData(id: number) {
    const response = await sendDataRequestID(id);
    return response.results
}
export async function DetailsDataComics(id: number) {
    const response = await sendDataRequestIDComics(id);
    return response.results
}
export async function DetailsDataSeries(id: number) {
    const response = await sendDataRequestIDSeries(id);
    return response.results
}
