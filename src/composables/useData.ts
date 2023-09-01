// composables/useData.js
import { sendData, listData, DetailsData } from '../infrastructure/dataSources/DataMarvel';
export function useData() {
  function sendFormData() {
    return sendData();
  }

  function fetchDataList() { 
    return listData();
  }
  function DetailsDataList(id: number) {
    console.log(id)
    return DetailsData(id);
  }
  return {
    DetailsDataList,
    sendFormData,
    fetchDataList,
  };
}
