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
    this.date = date;
    this.Jerusalem_in = JSON.stringify(Jerusalem_in).includes('\\r') ? '' : Jerusalem_in;
    this.Jerusalem_out = JSON.stringify(Jerusalem_out).includes('\\r') ? '' : Jerusalem_out;
    this.Tel_Aviv_in = JSON.stringify(Tel_Aviv_in).includes('\\r') ? '' : Tel_Aviv_in;
    this.Tel_Aviv_out = JSON.stringify(Tel_Aviv_out).includes('\\r') ? '' : Tel_Aviv_out;
    this.Hayfa_in = JSON.stringify(Hayfa_in).includes('\\r') ? '' : Hayfa_in;
    this.Hayfa_out = JSON.stringify(Hayfa_out).includes('\\r') ? '' : Hayfa_out;
    this.Beer_Sheva_in = JSON.stringify(Beer_Sheva_in).includes('\\r') ? '' : Beer_Sheva_in;
    this.Beer_Sheva_out = JSON.stringify(Beer_Sheva_out).includes('\\r') ? '' : Beer_Sheva_out;
  }
}
