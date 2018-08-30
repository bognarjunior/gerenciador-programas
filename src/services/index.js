import { KEYSTORAGE } from './../constants';

export const getList = () => {
  let storage = localStorage.getItem(KEYSTORAGE);
  storage = JSON.parse(storage);

  storage.forEach( i => {
    let str  = ((i.date + ' ' + i.time) === ' ') ? "1970-01-01 00:00:00" : (i.date + ' ' + i.time) ;
    const date =  new Date(str);
    i.datetime = date.getTime();
    i.dateFormated = (str === "1970-01-01 00:00:00") ? 'Sem data definida' : date.toLocaleString();
  })

  storage.sort(function(a, b){
    return new Date(a.datetime) - new Date(b.datetime);
  });

  return storage || [];
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