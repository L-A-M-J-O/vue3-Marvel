// composables/useData.js
import { sendData, listData } from '@/infrastructure/dataSources/DataMarvel';
export function useData() {
  function sendFormData() {
    return sendData();
  }

  function fetchDataList() { 
    return listData();
  }

  return {
    sendFormData,
    fetchDataList,
  };
}
