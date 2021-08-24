export default class Shabat {
  _id = '';
  parasha = '';
  hebDate = '';
  date = '';
  Jerusalem_in = '';
  Jerusalem_out = '';
  Tel_Aviv_in = '';
  Tel_Aviv_out = '';
  Hayfa_in = '';
  Hayfa_out = '';
  Beer_Sheva_in = '';
  Beer_Sheva_out = '';
  constructor(
    _id,
    date,
    hebDate,
    parasha,
    Jerusalem_in,
    Jerusalem_out,
    Tel_Aviv_in,
    Tel_Aviv_out,
    Hayfa_in,
    Hayfa_out,
    Beer_Sheva_in,
    Beer_Sheva_out,
  ) {
    this._id = _id;

    if (parasha.includes('ראש השנה')) {
      this.parasha = " חג: ראש השנה";
    } else if (parasha.includes('יום כיפור')) {
      this.parasha = 'חג: יום הכיפורים';
    } else if (parasha.includes('שחוהמ"ס	')) {
      this.parasha = 'שבת חוה"מ סוכות';
    } else if (parasha.includes('שחוהמ"פ')) {
      this.parasha = 'שבת חול המועד פסח';
    } else if (
      parasha.includes("סוכות") ||
      parasha.includes("שמחת תורה") ||
      parasha.includes("פסח") ||
      parasha.includes('שביעי של פסח') ||
      parasha.includes('שבועות')
    ) {
      this.parasha = 'חג: ' + parasha;
    } else {
      this.parasha = 'פרשת ' + parasha;
    }

    this.hebDate = hebDate;
    this.date = new Date(date);
    let month = String(this.date .getMonth() + 1);
    let day = String(this.date .getDate());
    const year = String(this.date .getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    this.date = `${day}/${month}/${year}`;

    
    this.Jerusalem_in = Jerusalem_in.slice(0, 5);;
    this.Jerusalem_out = Jerusalem_out.slice(0, 5);;
    this.Tel_Aviv_in = Tel_Aviv_in.slice(0, 5);;
    this.Tel_Aviv_out = Tel_Aviv_out.slice(0, 5);;
    this.Hayfa_in = Hayfa_in.slice(0, 5);
    this.Hayfa_out = Hayfa_out.slice(0, 5);;
    this.Beer_Sheva_in = Beer_Sheva_in.slice(0, 5);;
    this.Beer_Sheva_out = Beer_Sheva_out.slice(0, 5);;
  }
}
