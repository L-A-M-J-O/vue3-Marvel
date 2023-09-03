// cores/DataCore.js
import { sendDataRequest, sendDataRequestID, sendDataRequestImage, sendDataRequestIDComics, sendDataRequestIDSeries } from '../externalServices/getDataMarvel';
import { SuperHeroe } from '../../domain/models/SuperHeroe';
export async function sendData() {
    // Realizar lógica adicional si es necesario
}

export async function listData(): Promise<SuperHeroe[]> {
    const response = await sendDataRequest();
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
