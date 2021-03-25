export const dateConvertor = (date: string): string => {
  let convertedDate = new Date(Date.parse(date)).toDateString();
  let convertedTime = new Date(Date.parse(date)).toTimeString().split(":");
  return convertedDate + " - " + convertedTime[0] + ":" + convertedTime[1];
};

export const compare = (number1: number, number2: number): boolean => {
  return number1 > number2;
};

export const formatter = (num: number): string => {
  if (num < 10) {
    return "0".concat(num.toString());
  }
  return num.toString();
};

export const dateConvertorForAPI = (date: Date): string => {
  let day = formatter(date.getDate());
  let month = formatter(date.getMonth() + 1);
  let year = date.getFullYear();
  return year + "-" + month + "-" + day;
};
