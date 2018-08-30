import { KEYSTORAGE } from './../constants';
import { formatData, concatStringToDate } from './../utils';

export const getList = () => {
  let storage = localStorage.getItem(KEYSTORAGE);
  storage = JSON.parse(storage);

  if (!localStorage.hasOwnProperty(KEYSTORAGE)) {
    return [];
  }
  storage.forEach( i => {
    let str  = concatStringToDate(i.date,  i.time)
    const date =  new Date(str);
    i.datetime = date.getTime();
    i.dateFormated = formatData(str, date);
  })

  storage.sort(function(a, b){
    return new Date(a.datetime) - new Date(b.datetime);
  });

  return storage;
}

export const setList = (data) => {
  if (localStorage.hasOwnProperty(KEYSTORAGE)) {
    let storage = localStorage.getItem(KEYSTORAGE);
    storage = JSON.parse(storage);
    storage.push(data);
    localStorage.setItem(KEYSTORAGE, JSON.stringify(storage));
  } else {
    const attractions = [data];
    localStorage.setItem(KEYSTORAGE, JSON.stringify(attractions));
  }
}