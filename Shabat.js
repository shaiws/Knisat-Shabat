export default class Shabat {
  _id = "";
  parasha = "";
  heb_day = "";
  heb_month = "";
  heb_year = "";
  date = "";
  Jerusalem_in = "";
  Jerusalem_out = "";
  Tel_Aviv_in = "";
  Tel_Aviv_out = "";
  Hayfa_in = "";
  Hayfa_out = "";
  Beer_Sheva_in = "";
  Beer_Sheva_out = "";
  constructor(_id, parasha, heb_day, heb_month, heb_year, date, Jerusalem_in, Jerusalem_out, Tel_Aviv_in, Tel_Aviv_out, Hayfa_in, Hayfa_out, Beer_Sheva_in, Beer_Sheva_out) {
    this._id = _id;
    if (parasha.includes('פסח') || parasha.includes('עצרת') || parasha.includes('דראש') || parasha.includes('שבועות') || parasha.includes('סוכות') || parasha.includes('כיפור'))
      this.parasha = 'ערב חג: ' + parasha;
    else
      this.parasha = 'פרשת ' + parasha;
    this.heb_day = heb_day;
    this.heb_month = heb_month;
    this.heb_year = heb_year;
    this.date = date;
    this.Jerusalem_in = Jerusalem_in;
    this.Jerusalem_out = Jerusalem_out;
    this.Tel_Aviv_in = Tel_Aviv_in;
    this.Tel_Aviv_out = Tel_Aviv_out;
    this.Hayfa_in = Hayfa_in;
    this.Hayfa_out = Hayfa_out;
    this.Beer_Sheva_in = Beer_Sheva_in;
    this.Beer_Sheva_out = Beer_Sheva_out;

  }
}
