// composables/useData.js
import { sendData, listData, DetailsData, listDataImage, DetailsDataComics, DetailsDataSeries, ListDataName, listDataComics } from '../infrastructure/dataSources/DataMarvel';
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
  function fetchDataName(name: string) {
    return ListDataName(name)
  }
  function fetchDataComics() {
    return listDataComics();
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
    fetchDataComics,
    DetailsSeries,
    DetailsComics,
    fetchDataListImage,
    fetchDataName,
    DetailsDataList,
    sendFormData,
    fetchDataList,
  };
}
