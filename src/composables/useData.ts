// composables/useData.js
import { sendData, listData, DetailsData, listDataImage} from '../infrastructure/dataSources/DataMarvel';
export function useData() {
  function sendFormData() {
    return sendData();
  }
  function fetchDataListImage() {
    return listDataImage();
  }
  function fetchDataList() { 
    return listData();
  }
  function DetailsDataList(id: number) {
    return DetailsData(id);
  }
  return {
    fetchDataListImage,
    DetailsDataList,
    sendFormData,
    fetchDataList,
  };
}
