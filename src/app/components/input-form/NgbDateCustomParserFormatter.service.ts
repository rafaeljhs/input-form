import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import * as moment from 'moment';
@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {

  readonly DT_FORMAT = 'DD/MM/YYYY';


  constructor() {
    super();
  }

  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split("/");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { day: toInteger(dateParts[0]), month: null, year: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date
      ? `${isNumber(date.day) ? padNumber(date.day) : ""}/${isNumber(date.month) ? padNumber(date.month) : ""}/${
      date.year
      }`
      : "";
  }
}
export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}

export function formatStringNbg(date: any): Date {


  console.log(date)
  if (!date) return null;
  let mdt = moment([date.year, date.month - 1, date.day]);
  if (!mdt.isValid()) return date;
  return mdt.toDate();
}



export function formatDateNgb(date) {
  const d = new Date(date);
  let month =  (d.getMonth() + 1);
  let day =  d.getDate();
  const year = d.getFullYear();

  console.log({year, month, day})

  return {year, month, day};
}
