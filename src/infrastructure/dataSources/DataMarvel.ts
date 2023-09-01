// cores/DataCore.js
import { sendDataRequest } from '../externalServices/getDataMarvel';
import { SuperHeroe } from '@/domain/models/SuperHeroe';
export async function sendData() {
    // Realizar lógica adicional si es necesario
}

export async function listData(): Promise<SuperHeroe[]> {
    const response = await sendDataRequest();
    return response.results
}
