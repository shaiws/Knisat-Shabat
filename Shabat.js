export default class Shabat {
  constructor(_id, date, hebDate, parasha,
    Jerusalem_in, Jerusalem_out,
    TelAviv_in, TelAviv_out,
    Hayfa_in, Hayfa_out,
    BeerSheva_in, BeerSheva_out) {

    this._id = _id;

    // Parasha / holiday label
    if (parasha.includes('ראש השנה')) {
      this.parasha = 'חג: ראש השנה';
    } else if (parasha.includes('יום כיפור')) {
      this.parasha = 'חג: יום הכיפורים';
    } else if (parasha.includes('שחוהמ"ס')) {
      this.parasha = 'חג: שבת חוה"מ סוכות';
    } else if (parasha.includes('שחוהמ"פ')) {
      this.parasha = 'חג: שבת חול המועד פסח';
    } else if (
      parasha.includes('סוכות') || parasha.includes('שמחת תורה') ||
      parasha.includes('פסח') || parasha.includes('שביעי של פסח') ||
      parasha.includes('שבועות')
    ) {
      this.parasha = 'חג: ' + parasha;
    } else {
      this.parasha = 'פרשת ' + parasha;
    }

    this.hebDate = hebDate;

    // Format Gregorian date (Shabbat = Saturday)
    const d = new Date(date);
    this.date = _fmt(d);

    // Friday = day before
    const prev = new Date(d);
    prev.setDate(prev.getDate() - 1);
    this.prevDate = _fmt(prev);

    // Times
    this.Jerusalem_in  = Jerusalem_in.slice(0, 5);
    this.Jerusalem_out = Jerusalem_out.slice(0, 5);
    this.TelAviv_in    = TelAviv_in.slice(0, 5);
    this.TelAviv_out   = TelAviv_out.slice(0, 5);
    this.Hayfa_in      = Hayfa_in.slice(0, 5);
    this.Hayfa_out     = Hayfa_out.slice(0, 5);
    this.BeerSheva_in  = BeerSheva_in.slice(0, 5);
    this.BeerSheva_out = BeerSheva_out.slice(0, 5);
  }
}

function _fmt(d) {
  const day   = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${d.getFullYear()}`;
}
