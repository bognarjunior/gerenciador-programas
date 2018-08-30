export const formatData = (str, date) => {
  return (str === "1970-01-01 00:00:00") ? 
    'Sem data definida' : 
    date.toLocaleString();
}

export const concatStringToDate = (date, time) => {
  return ((date + ' ' + time) === ' ') ? 
    "1970-01-01 00:00:00" : 
    (date + ' ' + time) ;
}
