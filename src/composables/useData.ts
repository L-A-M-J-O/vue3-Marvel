// composables/useData.js
import { sendData, listData, DetailsData, listDataImage, DetailsDataComics, DetailsDataSeries } from '../infrastructure/dataSources/DataMarvel';
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
  function DetailsComics(id: number) {
    return DetailsDataComics(id);
  }
  function DetailsSeries(id: number) {
    return DetailsDataSeries(id);
  }
  return {
    DetailsSeries,
    DetailsComics,
    fetchDataListImage,
    DetailsDataList,
    sendFormData,
    fetchDataList,
  };
}
