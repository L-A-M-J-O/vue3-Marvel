// composables/useData.js
import { sendData, listData, DetailsData, listDataImage, DetailsDataComics, DetailsDataSeries, ListDataName, listDataComics, listDataComicsName, listDataSeries } from '../infrastructure/dataSources/DataMarvel';
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
  function fetchDataSeries(){
    return listDataSeries()
  }
  function fetchDataComicsName(name: string) {
    return listDataComicsName(name)
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
    fetchDataSeries,
    fetchDataComicsName,
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
