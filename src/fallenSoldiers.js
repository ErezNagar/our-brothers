const FALLEN_SOLDIERS = [
  {
    firstName: "יאסר",
    lastName: "אבו זידאן",
    age: 26,
  },
  {
    firstName: "סובחי",
    lastName: "אבו חמד",
    age: 43,
    date: "03.07.1995",
    hebrewDate: "ה' בתמוז תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%95%D7%91%D7%97%D7%99%20%D7%90%D7%91%D7%95%20%D7%97%D7%9E%D7%93/en_1a55c5d1384a9966f2ca4aabcb43ff3c",
  },
  {
    firstName: "גאלב (מוניר)",
    lastName: "אבו מנסור",
    age: 32,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%90%D7%9C%D7%91%20%D7%90%D7%91%D7%95%20%D7%9E%D7%A0%D7%A1%D7%95%D7%A8/en_73f76d30bc3e6f034a8f7af7655e40f6",
  },
  {
    firstName: "נוהד",
    lastName: "אבו רוקון",
    age: 38,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%95%D7%94%D7%93%20%D7%90%D7%91%D7%95%20%D7%A8%D7%95%D7%A7%D7%95%D7%9F/en_d8c3bfa8b0b24f1a1462179160b736d7",
  },
  {
    firstName: "עאמד (סאמר)",
    lastName: "אבו ריש",
    age: 35,
    date: "28.02.1999",
    hebrewDate: 'י"ב באדר תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%90%D7%93%20%D7%90%D7%91%D7%95%20%D7%A8%D7%99%D7%A9/en_f0b4b709b507058f710553bcfc2b65f4",
  },
  {
    firstName: "אמציה-יהודה",
    lastName: "אבודרם",
    age: 22,
    date: "02.12.1982",
    hebrewDate: 'ט"ז בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%A6%D7%99%D7%94%20%D7%90%D7%91%D7%95%D7%93%D7%A8%D7%94%D7%9D/en_cbe19146b45fd18d6b0c2c1e7cc69bfa",
  },
  {
    firstName: "ניסים",
    lastName: "אביטן",
    age: 19,
    date: "01.11.1984",
    hebrewDate: "ז' בחשון תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%90%D7%91%D7%99%D7%98%D7%9F/en_0180674b7ccc81529a80b75ecdbd07f7",
  },
  {
    firstName: "אסף (אסי)",
    lastName: "אבני",
    age: 20,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkor:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3%20%D7%90%D7%91%D7%A0%D7%99/en_9095aa02796cc110b6240210fcc5f9b0",
  },
  {
    firstName: "חיים-מאיר",
    lastName: "אבנר",
    age: 28,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D-%D7%9E%D7%90%D7%99%D7%A8%20%D7%90%D7%91%D7%A0%D7%A8/en_cce34376b39660e4a67ef3760c451c8a",
  },
  {
    firstName: "אבי-משה",
    lastName: "אבקסיס",
    age: 20,
    date: "06.12.1994",
    hebrewDate: "ד' בטבת תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99-%D7%9E%D7%A9%D7%94%20%D7%90%D7%91%D7%A7%D7%A1%D7%99%D7%A1/en_4dd61e05cee2ad6b793f2720b4ce11dc",
  },
  {
    firstName: "שי",
    lastName: "אבקסיס",
    age: 22,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%99%20%D7%90%D7%91%D7%A7%D7%A1%D7%99%D7%A1/en_f9df173c2da951a0654e937b200a0839",
  },
  {
    firstName: "נחום-אורי",
    lastName: "אברהם",
    age: 20,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%97%D7%95%D7%9D-%D7%90%D7%95%D7%A8%D7%99%20%D7%90%D7%91%D7%A8%D7%94%D7%9D/en_c0749000d9f20279b3330a03a8eb55a8",
  },
  {
    firstName: "איתן",
    lastName: "אברהמי",
    age: 19,
    date: "16.12.1984",
    hebrewDate: 'כ"ג בכסלו תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%90%D7%91%D7%A8%D7%94%D7%9E%D7%99/en_cb80fd3c08054cc409842f6dba9ff970",
  },
  {
    firstName: "ישראל-ויאצ'סלב",
    lastName: "אברמוב",
    age: 24, //-------------------------------------------------
    date: "03.08.1983",
    hebrewDate: 'כ"ד באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%9E%D7%95%D7%91%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%95%D7%99%D7%90%D7%A6'%D7%A1%D7%9C%D7%91/en_4446a65dc53f8be9c529753e6f521afd",
  },
  {
    firstName: "מנחם (אולג)",
    lastName: "אברמוב",
    age: 18, // -----------------------------------------------
    date: "17.02.1985",
    hebrewDate: 'כ"ו בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A0%D7%97%D7%9D%20%D7%90%D7%91%D7%A8%D7%9E%D7%95%D7%91/en_ac3d910d14b25663b0c3bd1fdd348326",
  },
  {
    firstName: "אריה-שמעון",
    lastName: "אברמזון",
    age: 22,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%94-%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%90%D7%91%D7%A8%D7%9E%D7%96%D7%95%D7%9F/en_f1aa90fc4382453478338f4db1d30a8a",
  },
  {
    firstName: "שמואל (שמוליק)",
    lastName: "אדיב",
    age: 29,
    date: "26.04.1988",
    hebrewDate: "ט' באייר תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%95%D7%90%D7%9C%20%D7%90%D7%93%D7%99%D7%91/en_d36c2d6ae991da05774c7a683de36562",
  },
  {
    firstName: "איתי-אבי",
    lastName: "אדלר",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%99-%D7%90%D7%91%D7%99%20%D7%90%D7%93%D7%9C%D7%A8/en_65f6da398760fcb68aaaefb043efd3b8",
  },
  {
    firstName: "משה",
    lastName: "אדלשטיין",
    age: 31,
    date: "08.06.1983",
    hebrewDate: 'כ"ז בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%90%D7%93%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_75177b75bcb4db26d8f51677d1c84090",
  },
  {
    firstName: "יואל",
    lastName: "אדרת",
    age: 36,
    date: "06.07.1983",
    hebrewDate: 'כ"ה בתמוז תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%9C%20%D7%90%D7%93%D7%A8%D7%AA/en_cc3d23d1e09584cfbd96710c637107e6",
  },
  {
    firstName: "שלמה",
    lastName: "אהרון",
    age: 48,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%90%D7%94%D7%A8%D7%95%D7%9F/en_1bb33d744428f21f17e02a3f3f3393a4",
  },
  {
    firstName: "סרג'יו",
    lastName: "אהרונוביץ",
    age: 21,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%A8%D7%92%D7%99%D7%95%20%D7%90%D7%94%D7%A8%D7%95%D7%A0%D7%95%D7%91%D7%99%D7%A5/en_00a448ed0817613bea404a9c38e2a9c8",
  },
  {
    firstName: "יששכר (איסי)",
    lastName: "אהרוני",
    age: 31,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A9%D7%9B%D7%A8%20%D7%90%D7%94%D7%A8%D7%95%D7%A0%D7%99/en_cc518ed7e78e6aef6987576fd52171e6",
  },
  {
    firstName: "אהרון-אורי",
    lastName: "אוחיון",
    age: 24,
    date: "29.05.1983",
    hebrewDate: 'י"ז בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%94%D7%A8%D7%95%D7%9F-%D7%90%D7%95%D7%A8%D7%99%20%D7%90%D7%95%D7%97%D7%99%D7%95%D7%9F/en_98ad946f1f91d98d8a11db76d547e75f",
  },
  {
    firstName: "משה",
    lastName: "אוחיון",
    age: 20,
    date: "25.01.1995",
    hebrewDate: 'כ"ד בשבט תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%90%D7%95%D7%97%D7%99%D7%95%D7%9F/en_216ffd6ff50a0ade26ed2d82d643f2d5",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "אוחנה",
    age: 24,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%90%D7%95%D7%97%D7%A0%D7%94/en_6b38971c8dbbace7c4c1b27c78b8d12e",
  },
  {
    firstName: "יעקב",
    lastName: "אוחנה",
    age: 20,
    date: "20.11.1988",
    hebrewDate: 'י"א בכסלו תשמ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%90%D7%95%D7%97%D7%A0%D7%94/en_0ff8ee80fce10fedaa84695ff0bb441c",
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "אוחנונה",
    age: 25,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C%20%D7%90%D7%95%D7%97%D7%A0%D7%95%D7%A0%D7%94/en_8c9709bc07d594885d540cf862b2b87f",
  },
  {
    firstName: "משה (מוישיק)",
    lastName: "אומן אוקסמן",
    age: 49,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%90%D7%95%D7%9E%D7%9F%20%D7%90%D7%95%D7%A7%D7%A1%D7%9E%D7%9F/en_3adf28adaf149b9d24c21368b85d7f69",
  },
  {
    firstName: "יצחק (איציק)",
    lastName: "אורבכר",
    age: 37,
    date: "28.03.1983",
    hebrewDate: 'ט"ו בניסן תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%90%D7%95%D7%A8%D7%91%D7%9B%D7%A8/en_fbd9a7b4bcee2d3c87a7345f3cf223aa",
  },
  {
    firstName: "אבשלום",
    lastName: "אורן",
    age: 24,
    date: "06.08.1994",
    hebrewDate: 'כ"ט באב תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%95%D7%A8%D7%9F/en_a4b6248f59053494af27cd6eb2a6fc85",
  },
  {
    firstName: "אורי",
    lastName: "אזולאי",
    age: 25,
    date: "24.10.1996",
    hebrewDate: 'י"ב בחשון תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/en_f2f6dfbba7444494cac5e2ec3a323cc6",
  },
  {
    firstName: "אמיל",
    lastName: "אזולאי",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%9C%20%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/en_046bb65342460501ef9c38ea170ac725",
  },
  {
    firstName: "מקס",
    lastName: "אזולאי",
    age: 29,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A7%D7%A1%20%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/en_1d0d1d87cb0f90164b7ec96a7eb7f028",
  },
  {
    firstName: "ערן",
    lastName: "אזולאי",
    age: 19,
    date: "13.10.1995",
    hebrewDate: 'י"ט בתשרי תשנ"ו',
    izkorLink: "en_4bb97a79c1a89c650a07511324b150f7",
  },
  {
    firstName: "שלום",
    lastName: "אטדג'י",
    age: 20,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%95%D7%9D%20%D7%90%D7%98%D7%93%D7%92%D7%99/en_4e5898ce05c8c47469267219cc33a20b",
  },
  {
    firstName: "ראובן-שמעון",
    lastName: "איבגי",
    age: 20,
    date: "12.10.1995",
    hebrewDate: 'י"ט בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%90%D7%95%D7%91%D7%9F-%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%90%D7%99%D7%91%D7%92%D7%99/en_572e19e51f24be421f863612266cd880",
  },
  {
    firstName: "צחי",
    lastName: "איטח",
    age: 19,
    date: "11.02.2000",
    hebrewDate: "ה' באדר א' תש\"ס",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%97%D7%99%20%D7%90%D7%99%D7%98%D7%97/en_c107e8c7ddf6e8de96499564a0cd9826",
  },
  {
    firstName: "גיל",
    lastName: "אייזן",
    age: 21,
    year: 1997,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%9C%20%D7%90%D7%99%D7%99%D7%96%D7%9F/en_9687b950f6b48b689533794d74c9963f",
  },
  {
    firstName: "רונן",
    lastName: "אילון",
    age: 20,
    date: "10.04.1987",
    hebrewDate: 'י"ב בניסן תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%90%D7%99%D7%9C%D7%95%D7%9F/en_a8dca87a7bbff89240ee9dc817361cfc",
  },
  {
    firstName: "חזקיה-דריוש (חזי)",
    lastName: "אימני",
    age: 19,
    date: "28.12.1984",
    hebrewDate: "ה' בטבת תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%96%D7%A7%D7%99%D7%94-%D7%93%D7%A8%D7%99%D7%95%D7%A9%20%D7%90%D7%99%D7%9E%D7%A0%D7%99/en_7cd7591a754852e17b6b5738bd28fde4",
  },
  {
    firstName: "האני",
    lastName: "אל הייב",
    age: 29,
    date: "18.06.1995",
    hebrewDate: "כ' בסיון תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%90%D7%A0%D7%99%20%D7%90%D7%9C%20%D7%94%D7%99%D7%99%D7%91/en_8953027fb13e85e6eb5ca0f533edaa2c",
  },
  {
    firstName: "עמר",
    lastName: "אל־קבץ",
    age: 22,
    date: "28.02.1999",
    hebrewDate: 'י"ב באדר תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%A8%20%D7%90%D7%9C-%D7%A7%D7%91%D7%A5/en_b39805ceec006e12935f06bfa9eba8c9",
  },
  {
    firstName: "רמאון",
    lastName: "אלאב",
    age: 19,
    date: "19.01.1991",
    hebrewDate: "ה' בשבט תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%90%D7%91%20%D7%A8%D7%9E%D7%90%D7%95%D7%9F/en_1fbb7a48efd57235ead46d256f299a70",
  },
  {
    firstName: "יעקב (קובי)",
    lastName: "אלגמיס",
    age: 21,
    date: "15.06.1997",
    hebrewDate: 'י"א בסיון תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%90%D7%9C%D7%92%D7%9E%D7%99%D7%A1/en_b8acf6dbb455bedf8d3c7775f380b8f3",
  },
  {
    firstName: "אודי-יהודה",
    lastName: "אלגרבלי",
    age: 22,
    date: "06.07.1994",
    hebrewDate: 'כ"ז בתמוז תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%93%D7%99-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%90%D7%9C%D7%92%D7%A8%D7%91%D7%9C%D7%99/en_34f600a15fed62e2b320ab90c8b50db4",
  },
  {
    firstName: "שלמה-מרדכי",
    lastName: "אלגרבלי",
    age: 19,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%90%D7%9C%D7%92%D7%A8%D7%91%D7%9C%D7%99/en_b7dd20eac63060ae4631a36c5a9e23de",
  },
  {
    firstName: "נחום",
    lastName: "אלה",
    age: 19,
    date: "16.11.1998",
    hebrewDate: 'כ"ז בחשון תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%97%D7%95%D7%9D%20%D7%90%D7%9C%D7%94/en_2e62a00ec40fa26d425e0eb29b76eb5a",
  },
  {
    firstName: "אסף-שלמה",
    lastName: "אלון",
    age: 21,
    date: "19.04.1987",
    hebrewDate: "כ' בניסן תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3-%D7%A9%D7%9C%D7%9E%D7%94%20%D7%90%D7%9C%D7%95%D7%9F/en_b0c1d780f91d8f300e646deb8eabc537",
  },
  {
    firstName: "גיא",
    lastName: "אליאש",
    age: 21,
    date: "09.10.1987",
    hebrewDate: 'ט"ז בתשרי תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90%20%D7%90%D7%9C%D7%99%D7%90%D7%A9/en_b7d57cda504c249f3fc22469ad252bf9",
  },
  {
    firstName: "ישי",
    lastName: "אליאש",
    age: 22,
    date: "28.01.1991",
    hebrewDate: 'י"ג בשבט תשנ"א',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%99%20%D7%90%D7%9C%D7%99%D7%90%D7%A9/en_4fb42ac83c893f903ff6be3335da62dc",
  },
  {
    firstName: "איתמר",
    lastName: "אליה",
    age: 21,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9E%D7%A8%20%D7%90%D7%9C%D7%99%D7%94/en_1be58cd37ad59e7b2932ca82c4b4b9b0",
  },
  {
    firstName: "עופר",
    lastName: "אליהו",
    age: 20,
    date: "26.01.1992",
    hebrewDate: 'כ"א בשבט תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%A4%D7%A8%20%D7%90%D7%9C%D7%99%D7%94%D7%95/en_c6b01a53b05cc6e25b6c56236ad55145",
  },
  {
    firstName: "אמנון",
    lastName: "אליעז",
    age: 46,
    date: "21.12.1982",
    hebrewDate: "ה' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%A0%D7%95%D7%9F%20%D7%90%D7%9C%D7%99%D7%A2%D7%96/en_a795fa13b6beae41c364ec05f533b7ab",
  },
  {
    firstName: "ערן",
    lastName: "אלכאוי",
    age: 24,
    date: "20.02.1992",
    hebrewDate: 'ט"ז באדר א\' תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%90%D7%9C%D7%9B%D7%90%D7%95%D7%99/en_53f82c5e1b62788885ad9cc7f2784297",
  },
  {
    firstName: "אמתי",
    lastName: "אלמדון",
    age: 20,
    date: "29.08.1996",
    hebrewDate: 'י"ד באלול תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%AA%D7%99%20%D7%90%D7%9C%D7%9E%D7%93%D7%95%D7%9F/en_e3ef14a4c67982f91f16455bdd5669a4",
  },
  {
    firstName: "ציון",
    lastName: "אלמלם",
    lastName: "אלמעלם", //-<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    age: 22,
    date: "12.09.1984",
    hebrewDate: 'ט"ו באלול תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%99%D7%95%D7%9F%20%D7%90%D7%9C%D7%9E%D7%A2%D7%9C%D7%9D/en_11e685c40586594ccf01aef658488a59",
  },
  {
    firstName: "שלמה (שלומי)",
    lastName: "אלפסי",
    age: 19,
    date: "10.12.1983",
    hebrewDate: "ה' בטבת תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%90%D7%9C%D7%A4%D7%A1%D7%99/en_8dc5a898ee5af819391fecaea10c6159",
  },
  {
    firstName: "עידן",
    lastName: "אלפר",
    age: 21,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%99%D7%93%D7%9F%20%D7%90%D7%9C%D7%A4%D7%A8/en_667227139acc96f1159e8560e6ff5fc5",
  },
  {
    firstName: "אליהו",
    lastName: "אלקיים",
    age: 19,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%94%D7%95%20%D7%90%D7%9C%D7%A7%D7%99%D7%99%D7%9D/en_84b1a7afab33faccef5690c68b93b815",
  },
  {
    firstName: "אברהם (ממושי)",
    lastName: "אלרן לזרוביץ",
    age: 38,
    date: "17.01.1985",
    hebrewDate: 'כ"ד בטבת תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%90%D7%9C%D7%A8%D7%9F%20%D7%9C%D7%96%D7%A8%D7%95%D7%91%D7%99%D7%A5/en_40b53a59e9dc6bd03c083bcb73f6aae5",
  },
  {
    firstName: "רחמים (רמי)",
    lastName: "לוי אלשייך",
    age: 21,
    date: "17.02.1986",
    hebrewDate: "ח' באדר א' תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%97%D7%9E%D7%99%D7%9D%20%D7%9C%D7%95%D7%99%20%D7%90%D7%9C%D7%A9%D7%99%D7%99%D7%9A/en_21a4fd06022e681fbcfc95a9489bf3ae",
  },
  {
    firstName: "אבנר",
    lastName: "אלתר",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A0%D7%A8%20%D7%90%D7%9C%D7%AA%D7%A8/en_7511653fb47b8593ebc56aaeeef34832",
  },
  {
    firstName: "ניב",
    lastName: "אמויאל",
    age: 19,
    date: "25.10.1992",
    hebrewDate: 'כ"ח בתשרי תשנ"ג',
  },
  {
    firstName: "משה",
    lastName: "אמסלם",
    age: 19,
    date: "10.12.1982",
    hebrewDate: 'כ"ד בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%90%D7%9E%D7%A1%D7%9C%D7%9D/en_68fc83ce3f40b7ed1c383632295413ca",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "אמרוסי",
    age: 22,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%90%D7%9E%D7%A8%D7%95%D7%A1%D7%99/en_c20a89fcd00c6b35359e3550fde31705",
  },
  {
    firstName: "אברהם (אלה)",
    lastName: "אסולין",
    age: 21,
    date: "25.10.1992",
    hebrewDate: 'כ"ח בתשרי תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%95%D7%9C%D7%99%D7%9F%20%D7%90%D7%91%D7%A8%D7%94%D7%9D/en_fb9476cd23372265eca0e7274012caea",
  },
  {
    firstName: "עמית",
    lastName: "אסולין",
    age: 21,
    date: "25.06.1998",
    hebrewDate: "א' בתמוז תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%99%D7%AA%20%D7%90%D7%A1%D7%95%D7%9C%D7%99%D7%9F/en_846420189b6d92aab4d29339a65b27d8",
  },
  {
    firstName: "סמיר",
    lastName: "אסעד",
    age: 30,
    date: "12.09.1991",
    hebrewDate: "ד' בתשרי תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%9E%D7%99%D7%A8%20%D7%90%D7%A1%D7%A2%D7%93/en_7c610df5004b26ea703f35e108fdab3b",
  },
  {
    firstName: "אברהם-גד (אבי)",
    lastName: "אפנר",
    age: 21,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A4%D7%A0%D7%A8%20%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%92%D7%93/en_2cdfa37ed086fe2f63a5b2a0a31b2343",
  },
  {
    firstName: "עזרא (עוזי)",
    lastName: "אפרים",
    age: 23,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%96%D7%A8%D7%90%20%D7%90%D7%A4%D7%A8%D7%99%D7%9D/en_b0cbefb1a2637249bac909cc3bf52e6c",
  },
  {
    firstName: "שגיא",
    lastName: "ארזי",
    age: 23,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%92%D7%99%D7%90%20%D7%90%D7%A8%D7%96%D7%99/en_360cde91648673bca88f5a117e81f02e",
  },
  {
    firstName: "אביב-אברהם (אבי)",
    lastName: "אריאל",
    age: 22,
    date: "17.04.1985",
    hebrewDate: 'כ"ו בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%91-%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%90%D7%A8%D7%99%D7%90%D7%9C/en_082f4288c821ceb9819d36bd3888cac6",
  },
  {
    firstName: "ערן (ערנו)",
    lastName: "אריאל",
    age: 20,
    date: "22.09.1998",
    hebrewDate: "ב' בתשרי תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%90%D7%A8%D7%99%D7%90%D7%9C/en_04a4da1b92618182c0854c916e2f19dd",
  },
  {
    firstName: "עופר",
    lastName: "אריאלי",
    age: 21,
    date: "20.05.1993",
    hebrewDate: 'כ"ט באייר תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%A4%D7%A8%20%D7%90%D7%A8%D7%99%D7%90%D7%9C%D7%99/en_f05f876303a6d004cc6544283ae1a7af",
  },
  {
    firstName: "רן-ראובן",
    lastName: "ארמן",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9F-%D7%A8%D7%90%D7%95%D7%91%D7%9F%20%D7%90%D7%A8%D7%9E%D7%9F/en_15c19202bb44288b9ad5a84638a0b9e0",
  },
  {
    firstName: "עומר",
    lastName: "אשד",
    age: 20,
    date: "22.09.1998",
    hebrewDate: "ב' בתשרי תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%9E%D7%A8%20%D7%90%D7%A9%D7%93/en_583a982317cd45a5537db75f1ff299c8",
  },
  {
    firstName: "נועם",
    lastName: "אשכול",
    age: 21,
    date: "10.04.1983",
    hebrewDate: 'כ"ז בניסן תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%95%D7%A2%D7%9D%20%D7%90%D7%A9%D7%9B%D7%95%D7%9C/en_a71aa65d9ea30a26d0df02e9a61b663e",
  },
  {
    firstName: "רונן",
    lastName: "אשל",
    age: 21,
    date: "26.02.1998",
    hebrewDate: "ל' בשבט תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%90%D7%A9%D7%9C/en_80de51a054f0a60c7ab1b41d7091f7cc",
  },
  {
    firstName: "עזרא",
    lastName: "אשר",
    age: 22,
    date: "24.05.1993",
    hebrewDate: "ד' בסיון תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%96%D7%A8%D7%90%20%D7%90%D7%A9%D7%A8/en_a12e67c9c3d4e855541d508480fe5bb0",
  },
  {
    firstName: "רוני",
    lastName: "אשר",
    age: 30,
    date: "13.03.1985",
    hebrewDate: "כ' באדר תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%99%20%D7%90%D7%A9%D7%A8/en_5b8b6b679d0e22dce2ba61dabe2cfc0a",
  },
  {
    firstName: "אלון-אברהם חי",
    lastName: "בביאן",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%95%D7%9F-%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%97%D7%99%20%D7%91%D7%91%D7%99%D7%90%D7%9F/en_2430aae15830267b1cbe7e618ad6807c",
  },
  {
    firstName: "דוד",
    lastName: "בגדדי",
    age: 50,
    date: "08.03.1984",
    hebrewDate: "ד' באדר ב' תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%91%D7%92%D7%93%D7%93%D7%99/en_c4d9dc3a54e5d3b01713679fd41ab3b3",
  },
  {
    firstName: "אברהם",
    lastName: "בדו",
    age: 36,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%91%D7%93%D7%95/en_f3ec755761636077cd5d50dc861e39da",
  },
  {
    firstName: "יעקב",
    lastName: "בדרי",
    age: 29,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%91%D7%93%D7%A8%D7%99/en_eee198ce08cfe8412cc72333d6ae7d6d",
  },
  {
    firstName: "הרצל",
    lastName: "בובליל",
    age: 18,
    date: "03.10.1983",
    hebrewDate: 'כ"ו בתשרי תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A8%D7%A6%D7%9C%20%D7%91%D7%95%D7%91%D7%9C%D7%99%D7%9C/en_c4311cdc3da43e5bba9d7ccd315b2977",
  },
  {
    firstName: "יונתן",
    lastName: "בוידן",
    age: 19,
    date: "25.07.1993",
    hebrewDate: "ז' באב תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A0%D7%AA%D7%9F%20%D7%91%D7%95%D7%99%D7%93%D7%9F/en_db9a155683b9b50b3f02a9d395571a88",
  },
  {
    firstName: "אריה",
    lastName: "בוירסקי",
    age: 22,
    date: "05.08.1984",
    hebrewDate: "ז' באב תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%94%20%D7%91%D7%95%D7%99%D7%A8%D7%A1%D7%A7%D7%99/en_ec35c874f0ed755fe76231229bc3154b",
  },
  {
    firstName: "רמי",
    lastName: "בוכריס",
    age: 20,
    date: "26.05.1984",
    hebrewDate: 'כ"ה באייר תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9E%D7%99%20%D7%91%D7%95%D7%9B%D7%A8%D7%99%D7%A1/en_fa5e5d1fe66d84e261f0d460bbf59a97",
  },
  {
    firstName: "יואל",
    lastName: "בונקר",
    age: 19,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%9C%20%D7%91%D7%95%D7%A0%D7%A7%D7%A8/en_b3e71b4842a7ed944fabbde6c77ea0d1",
  },
  {
    firstName: "צבי",
    lastName: "בוסקילה",
    age: 20,
    date: "26.05.1984",
    hebrewDate: 'כ"ה באייר תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%91%D7%99%20%D7%91%D7%95%D7%A1%D7%A7%D7%99%D7%9C%D7%94/en_158c113e1c0497f4b9777adbc1447fd3",
  },
  {
    firstName: "זהר",
    lastName: "בועז",
    age: 21,
    date: "02.04.1985",
    hebrewDate: 'י"א בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%94%D7%A8%20%D7%91%D7%95%D7%A2%D7%96/en_12108073bb13ba0ba6cfab82c6f7804e",
  },
  {
    firstName: "אברהם-יעקב (אבי)",
    lastName: "בוק",
    age: 22,
    year: 1997,
    date: "07.09.1997",
    hebrewDate: "ה' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%99%D7%A2%D7%A7%D7%91%20%D7%91%D7%95%D7%A7/en_dbec43c58d9c1f1f6e8e6c155b8c51f6",
  },
  {
    firstName: "מישל",
    lastName: "בוקובזה",
    age: 19,
    date: "05.12.1982",
    hebrewDate: 'י"ט בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%A9%D7%9C%20%D7%91%D7%95%D7%A7%D7%95%D7%91%D7%96%D7%94/en_3dc8db89d11c2023479ceb40016361b4",
  },
  {
    firstName: "חיים",
    lastName: "בוקטוס",
    age: 21,
    date: "05.05.1983",
    hebrewDate: 'כ"ב באייר תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%91%D7%95%D7%A7%D7%98%D7%95%D7%A1/en_305deb0f580fb2e30ff6276271d4a3e8",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "בחרי",
    age: 38,
    date: "22.08.1984",
    hebrewDate: 'כ"ה באב תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%91%D7%97%D7%A8%D7%99/en_21c971920506a137fd3462381f642b2e",
  },
  {
    firstName: "פול",
    lastName: "ביבס",
    age: 26,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%95%D7%9C%20%D7%91%D7%99%D7%91%D7%A1/en_ac30ff01f53f2f299e2e4d4d215378d4",
  },
  {
    firstName: "אורן-אורי",
    lastName: "ביטון",
    age: 21,
    date: "08.01.1997",
    hebrewDate: 'כ"ט בטבת תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%9F-%D7%90%D7%95%D7%A8%D7%99%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_bd3a9706c5390ffdf532e1ccc48f2434",
  },
  {
    firstName: "דוד",
    lastName: "ביטון",
    age: 38,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_83c1e742b957114698f2cf15f9076e44",
  },
  {
    firstName: "יואב",
    lastName: "ביטון",
    age: 25,
    date: "16.05.1992",
    hebrewDate: 'י"ד באייר תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%91%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_c1209908a9257699db2e8d20dd57abcf",
  },
  {
    firstName: "מאיר (מיקי)",
    lastName: "ביטון",
    age: 29,
    date: "14.01.1985",
    hebrewDate: 'כ"א בטבת תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_ac82505b3b7c82cc71e2f74205487186",
  },
  {
    firstName: "מימון-אמנון",
    lastName: "ביטון",
    age: 19,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9E%D7%95%D7%9F-%D7%90%D7%9E%D7%A0%D7%95%D7%9F%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_0dbdad7dd83f9b1445934ce56699cb05",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "ביטון",
    age: 29,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_2cac06864a1a04e77f0c564050047689",
  },
  {
    firstName: "משה (מושיקו)",
    lastName: "ביטון",
    age: 21,
    date: "20.08.1998",
    hebrewDate: 'כ"ט באב תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_4d44f5f28565a1c8a6ee39b0e1e43463",
  },
  {
    firstName: "ניסים",
    lastName: "ביטון",
    age: 35,
    date: "28.02.1984",
    hebrewDate: 'כ"ה באדר א\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%91%D7%99%D7%98%D7%95%D7%9F/en_6aea3d96f8510cf3a238eee8e2bf9381",
  },
  {
    firstName: "שגיא",
    lastName: "בלאו",
    age: 19,
    date: "19.10.1988",
    hebrewDate: "ט' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%92%D7%99%D7%90%20%D7%91%D7%9C%D7%90%D7%95/en_fc9d41ec3b150663d43fbc7864cb28d8",
  },
  {
    firstName: "ניצן",
    lastName: "בלדרן",
    age: 20,
    date: "25.11.1998",
    hebrewDate: "ז' בכסלו תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A6%D7%9F%20%D7%91%D7%9C%D7%93%D7%A8%D7%9F/en_f965af678d2ae8057dd921ccd94dd1f4",
  },
  {
    firstName: "איתן",
    lastName: "בלחסן",
    age: 30,
    date: "23.02.1999",
    hebrewDate: "ז' באדר תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%91%D7%9C%D7%97%D7%A1%D7%9F/en_6c56f6d5144a509d3514512c5d9d2cac",
  },
  {
    firstName: "רונן-יהודה",
    lastName: "בלטי",
    age: 21,
    date: "04.03.1987",
    hebrewDate: "ד' באדר תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%91%D7%9C%D7%97%D7%A1%D7%9F/en_6c56f6d5144a509d3514512c5d9d2cac",
  },
  {
    firstName: "רפי (רפאל)",
    lastName: "בללטי",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%A4%D7%99%20%D7%91%D7%9C%D7%9C%D7%98%D7%99/en_a71a1831abd4618d817d6c39b5c50fcd",
  },
  {
    firstName: "שרון",
    lastName: "בן אריה",
    age: 22,
    date: "06.04.1992",
    hebrewDate: "ג' בניסן תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%9F%20%D7%90%D7%A8%D7%99%D7%94%20%D7%A9%D7%A8%D7%95%D7%9F/en_c9668c14d691a9b0d1e42431e7cb10a7",
  },
  {
    firstName: "אברהם-גל",
    lastName: "בוזגלו",
    age: 28,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%91%D7%9F-%D7%92%D7%9C%20%D7%91%D7%95%D7%96%D7%92%D7%9C%D7%95/en_3b8bf0db11d7912ffae425d0845fecba",
  },
  {
    firstName: "גיא-יוסף",
    lastName: "דב",
    age: 21,
    date: "10.07.1986",
    hebrewDate: "ג' בתמוז תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90-%D7%99%D7%95%D7%A1%D7%A3%20%D7%91%D7%9F-%D7%93%D7%91/en_2217eeac0fa46e273c112e87eeb11fc3",
  },
  {
    firstName: "אלעד-אפרים",
    lastName: "בן דוד",
    age: 23,
    date: "13.04.1993",
    hebrewDate: 'כ"ב בניסן תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%A2%D7%93-%D7%90%D7%A4%D7%A8%D7%99%D7%9D%20%D7%91%D7%9F-%D7%93%D7%95%D7%93/en_b52101c0a33dbff5284801274017dbdc",
  },

  {
    firstName: "עמרי",
    lastName: "בן זכרי",
    age: 19,
    date: "07.10.1987",
    hebrewDate: 'ט"ו בתשרי תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%A8%D7%99%20%D7%91%D7%9F-%D7%96%D7%9B%D7%A8%D7%99/en_1ef3c14d8a05bfa104a9b8caf9b73706",
  },
  {
    firstName: "אילן",
    lastName: "בן חיים",
    age: 21,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%91%D7%9F-%D7%97%D7%99%D7%99%D7%9D/en_a61b4798140676d21188f8dc204be5c6",
  },
  {
    firstName: "שמעון",
    lastName: "בן יצחק",
    age: 24,
    date: "26.05.1983",
    hebrewDate: 'י"ד בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%91%D7%9F-%D7%99%D7%A6%D7%97%D7%A7/en_72f165b54b0dc8289087a4672b87edfa",
  },
  {
    firstName: "דוד (דודו)",
    lastName: "בן עמי",
    age: 18,
    date: "24.11.1983",
    hebrewDate: 'י"ח בכסלו תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%91%D7%9F-%D7%A2%D7%9E%D7%99/en_17d66d17a950204e3154fb6562c10d2c",
  },
  {
    firstName: "שלום",
    lastName: "בן עמי",
    age: 23,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%95%D7%9D%20%D7%91%D7%9F-%D7%A2%D7%9E%D7%99/en_ce273ae4e28f5defedf86fb65f749a7b",
  },
  {
    firstName: "משה",
    lastName: "בן צור",
    age: 20,
    date: "17.11.1983",
    hebrewDate: 'י"ב בכסלו תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%91%D7%9F-%D7%A6%D7%95%D7%A8/en_77e430bbd82b4793a969bcf857779ca6",
  },
  {
    firstName: "יעקב",
    lastName: "בן שאנן",
    age: 44,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%91%D7%9F-%D7%A9%D7%90%D7%A0%D7%9F/en_72c8a6e54e5b71c1788e657a4d508d7d",
  },
  {
    firstName: "אלון",
    lastName: "בן שחר",
    age: 21,
    date: "20.02.1986",
    hebrewDate: 'י"א באדר א\' תשמ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%9F-%D7%A9%D7%97%D7%A8%20%D7%90%D7%9C%D7%95%D7%9F/en_c3042fd9589c30fc6ff6fc71eb0da40a",
  },
  {
    firstName: "משה",
    lastName: "בן אבו",
    age: 22,
    date: "26.09.1986",
    hebrewDate: 'כ"ב באלול תשמ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%91%D7%9F%20%D7%90%D7%91%D7%95/en_854763a64404a5792c6d57bb0f1e7873",
  },
  {
    firstName: "יוסף",
    lastName: "בן אור",
    age: 33,
    date: "08.06.1983",
    hebrewDate: 'כ"ז בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%91%D7%9F%20%D7%90%D7%95%D7%A8/en_f46bb582d8bfd65212f8e7f5910e0bca",
  },
  {
    firstName: "ניר",
    lastName: "בן חיים",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8%20%D7%91%D7%9F%20%D7%97%D7%99%D7%99%D7%9D/en_d821558c5c96aac707c425a2a024066d",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "בן מוחא",
    age: 19,
    date: "16.11.1998",
    hebrewDate: 'כ"ח בחשון תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%91%D7%9F%20%D7%9E%D7%95%D7%97%D7%90/en_204f8af47fbe1fe391c49fd4f57465cf",
  },
  {
    firstName: "אשל-אמיר",
    lastName: "בן משה",
    age: 21,
    dte: "10.06.1996",
    hebrewDate: 'כ"ג בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A9%D7%9C-%D7%90%D7%9E%D7%99%D7%A8%20%D7%91%D7%9F%20%D7%9E%D7%A9%D7%94/en_027e8b348794340e7f57f0347d67198d",
  },
  {
    firstName: "אליהו",
    lastName: "בן עזרה",
    age: 23,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%9F%20%D7%A2%D7%96%D7%A8%D7%90%20%D7%90%D7%9C%D7%99%D7%94%D7%95/en_4c57d9498db1ab18ed948787dc365228",
  },
  {
    firstName: "רמי",
    lastName: "בן צבי",
    age: 26,
    date: "12.03.1987",
    hebrewDate: 'י"א באדר תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9E%D7%99%20%D7%91%D7%9F%20%D7%A6%D7%91%D7%99/en_8ab7c3e9237f0585b28a0f09a4fa5a7e",
  },
  {
    firstName: "קובי",
    lastName: "בן שם",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A7%D7%95%D7%91%D7%99%20%D7%91%D7%9F%20%D7%A9%D7%9D/en_23cd7fad03c45d28253ce587553c3b0b",
  },
  {
    firstName: "אברהם",
    lastName: "בן שמואל",
    age: 36,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%91%D7%9F%20%D7%A9%D7%9E%D7%95%D7%90%D7%9C/en_7cb3a3c8bccf6b0e4489717eaa85149b",
  },
  {
    firstName: "רונן",
    lastName: "בן אריה",
    age: 20,
    date: "18.01.2000",
    hebrewDate: 'י"א בשבט תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%91%D7%9F-%D7%90%D7%A8%D7%99%D7%94/en_fc39e528d5e30e30985cb1a39b6a0723",
  },
  {
    firstName: "יעקב (פקו)",
    lastName: "בנוליאל",
    age: 26,
    date: "31.07.1983",
    hebrewDate: 'כ"א באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%91%D7%A0%D7%95%D7%9C%D7%99%D7%90%D7%9C/en_0021f06310bddc1a2e9631b71c3d7048",
  },
  {
    firstName: "יצחק-צחי",
    lastName: "בנטוב",
    age: 28,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7-%D7%A6%D7%97%D7%99%20%D7%93%D7%A8%20%D7%91%D7%A0%D7%98%D7%95%D7%91/en_c44653762baec49ef4972bee54096042",
  },
  {
    firstName: "יוסי",
    lastName: "בניון",
    age: 21,
    date: "11.05.1984",
    hebrewDate: "ט' באייר תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A0%D7%99%D7%95%D7%9F%20%D7%99%D7%95%D7%A1%D7%99/en_1f7dba26d6768919e62afcd94ee75eeb",
  },
  {
    firstName: "אופיר-אשר",
    lastName: "בסול",
    age: 21,
    date: "14.09.1997",
    hebrewDate: 'י"ב באלול תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%90%D7%A9%D7%A8%20%D7%91%D7%A1%D7%95%D7%9C/en_d32045f606962af474e597d8dd56ed67",
  },
  {
    firstName: "בנימין (בני)",
    lastName: "בסירטמן",
    age: 20,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F%20%D7%91%D7%A1%D7%99%D7%A8%D7%98%D7%9E%D7%9F/en_9b5b0ce5b837d612dcfeb0051ddf28e9",
  },
  {
    firstName: "אברהם (אבי)",
    lastName: "בצלאל",
    age: 20,
    date: "16.10.1984",
    hebrewDate: "כ' בתשרי תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%91%D7%A6%D7%9C%D7%90%D7%9C/en_e4495bb247ff462c09e6ec6e8db34975",
  },
  {
    firstName: "ארז-איתן",
    lastName: "בצלאל",
    age: 19,
    date: "11.05.1983",
    hebrewDate: 'כ"ט באייר תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%96-%D7%90%D7%99%D7%AA%D7%9F%20%D7%91%D7%A6%D7%9C%D7%90%D7%9C/en_7ea64a7007df805076ce2c27b43f3c79",
  },
  {
    firstName: "ניר",
    lastName: "בר",
    age: 20,
    date: "12.06.1986",
    hebrewDate: "ה' בסיון תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8%20%D7%91%D7%A8/en_a27940179c705f3b2159251602b1fb5a",
  },
  {
    firstName: "אבי",
    lastName: "בר-נס",
    age: 26,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%20%D7%91%D7%A8-%D7%A0%D7%A1/en_3e45ec5e741e54be2f787591e3626699",
  },
  {
    firstName: "חיים",
    lastName: "בר-נתן",
    age: 19,
    date: "12.12.1992",
    hebrewDate: 'י"ח בכסלו תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%91%D7%A8-%D7%A0%D7%AA%D7%9F/en_909d120498c757e4f2c2da40c0876e21",
  },
  {
    firstName: "שלמה",
    lastName: "בר-ציון",
    age: 48,
    date: "04.09.1983",
    hebrewDate: 'כ"ו באלול תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A8-%D7%A6%D7%99%D7%95%D7%9F%20%D7%A9%D7%9C%D7%9E%D7%94/en_0e0a891ab09ee4b11d9fc04fb5f554ca",
  },
  {
    firstName: "יצחק (איציק)",
    lastName: "בר אלי",
    age: 27,
    date: "10.02.1985",
    hebrewDate: 'י"ט בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%91%D7%A8%20%D7%90%D7%9C%D7%99/en_0aeeff8be4d70debbecbc83f7a40aa74",
  },
  {
    firstName: "דרור",
    lastName: "בראשי",
    age: 22,
    date: "12.10.1995",
    hebrewDate: 'י"ט בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A8%D7%95%D7%A8%20%D7%91%D7%A8%D7%90%D7%A9%D7%99/en_11dcb6fcd9b63a6c057a5f92c7bd5979",
  },
  {
    firstName: "עירן",
    lastName: "ברג",
    age: 19,
    date: "22.02.1994",
    hebrewDate: 'י"א באדר תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%99%D7%A8%D7%9F%20%D7%91%D7%A8%D7%92/en_a9831b3c82c0e8afb44ebc5dd0081f79",
  },
  {
    firstName: "יוחנן (יוני)",
    lastName: "ברגר",
    age: 18,
    date: "04.01.1984",
    hebrewDate: 'כ"ט בטבת תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%97%D7%A0%D7%9F%20%D7%91%D7%A8%D7%92%D7%A8/en_b7d7d58f7c7cbbfd88c33d3f29588298",
  },
  {
    firstName: "דוד",
    lastName: "ברדה",
    age: 20,
    date: "30.01.1983",
    hebrewDate: 'ט"ז בשבט תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%91%D7%A8%D7%93%D7%94/en_1a83a0fca2e8febb4ca064f107732f61",
  },
  {
    firstName: "יעקב (קובי)",
    lastName: "ברדס יעקב",
    age: 19,
    date: "07.06.1987",
    hebrewDate: "י' בסיון תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%91%D7%A8%D7%93%D7%A1%20%D7%99%D7%A2%D7%A7%D7%91/en_f26d33a41608bb5abaafcf971352d817",
  },
  {
    firstName: "חן-חנוך",
    lastName: "ברוד",
    age: 22,
    date: "24.10.1985",
    hebrewDate: "ט' בחשון תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%9F-%D7%97%D7%A0%D7%95%D7%9A%20%D7%91%D7%A8%D7%95%D7%93/en_8a2c125243274fc81fd92be8508da2c1",
  },
  {
    firstName: "עזרא",
    lastName: "ברוך",
    age: 21,
    date: "10.02.1985",
    hebrewDate: 'י"ט בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%96%D7%A8%D7%90%20%D7%91%D7%A8%D7%95%D7%9A/en_ed5f2bc4fa60b55aaace8f616eb4a82c",
  },
  {
    firstName: "ברוך",
    lastName: "ברונשטיין",
    age: 37,
    date: "03.10.1982",
    hebrewDate: 'ט"ז בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A8%D7%95%D7%9A%20%D7%91%D7%A8%D7%95%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_d3927734fdde072c04141b1dc642f0e5",
  },
  {
    firstName: "משה",
    lastName: "ברי",
    age: 23,
    date: "13.04.1993",
    hebrewDate: 'כ"ב בניסן תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%91%D7%A8%D7%99/en_965fc8af1cbbfa0259fc42523d2b44e7",
  },
  {
    firstName: "סלמאן",
    lastName: "ברכאת",
    age: 32,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%9C%D7%9E%D7%9F%20%D7%91%D7%A8%D7%9B%D7%90%D7%AA/en_c188812372fbeb853be8ff109008fd6e",
  },
  {
    firstName: "יצחק (איציק)",
    lastName: "ברכה",
    age: 39,
    date: "21.05.1983",
    hebrewDate: "ט' בסיון תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%91%D7%A8%D7%9B%D7%94/en_2d79707b17bd57e8b77a98b7e2a64c2f",
  },
  {
    firstName: "בן-ציון-הכהן (בני)",
    lastName: "ברנדלר",
    age: 19,
    date: "23.09.1984",
    hebrewDate: 'כ"ז באלול תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%9F-%D7%A6%D7%99%D7%95%D7%9F-%D7%94%D7%9B%D7%94%D7%9F%20%D7%91%D7%A8%D7%A0%D7%93%D7%9C%D7%A8/en_36b38efd13f63982a1d5f20f28ea9ff2",
  },
  {
    firstName: "זאב-דובי",
    lastName: "ברנט",
    age: 20,
    date: "26.08.1990",
    hebrewDate: "ה' באלול תש\"ן",
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%90%D7%91-%D7%93%D7%95%D7%91%D7%99%20%D7%91%D7%A8%D7%A0%D7%98/en_d611606cad704b1483dd2f1ccd48db12",
  },
  {
    firstName: "עובד-עובדיה",
    lastName: "ברניץ",
    age: 22,
    date: "12.04.1983",
    hebrewDate: "ל' בניסן תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%91%D7%93-%D7%A2%D7%95%D7%91%D7%93%D7%99%D7%94%20%D7%91%D7%A8%D7%A0%D7%99%D7%A5/en_2c129d4a9b498ca9c076268364732320",
  },
  {
    firstName: "יונתן (יוני)",
    lastName: "ברנס",
    age: 20,
    date: "24.01.1988",
    hebrewDate: "ה' בשבט תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A0%D7%AA%D7%9F%20%D7%91%D7%A8%D7%A0%D7%A1/en_f9caf303804b294b0d6efc5bc38c4eb8",
  },
  {
    firstName: "נועם-מיכאל",
    lastName: "ברנע",
    age: 21,
    date: "12.04.1999",
    hebrewDate: 'כ"ו בניסן תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%95%D7%A2%D7%9D-%D7%9E%D7%99%D7%9B%D7%90%D7%9C%20%D7%91%D7%A8%D7%A0%D7%A2/en_eb15a6e3217cb892305c022b2664eabc",
  },
  {
    firstName: "מרקו-מאיר",
    lastName: "ברנשטיין",
    age: 21,
    date: "04.05.1988",
    hebrewDate: 'י"ז באייר תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%A7%D7%95-%D7%9E%D7%90%D7%99%D7%A8%20%D7%91%D7%A8%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_7d94e945a2713f1c953d28f57edcc8ab",
  },
  {
    firstName: "יבגני",
    lastName: "ברצלבסקי",
    age: 19,
    date: "06.08.1994",
    hebrewDate: 'כ"ט באב תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%91%D7%92%D7%A0%D7%99%20%D7%91%D7%A8%D7%A6%D7%9C%D7%91%D7%A1%D7%A7%D7%99/en_63ca7e00507f4cb66bef6ad4a6999ed4",
  },
  {
    firstName: "דותן",
    lastName: "ברק",
    age: 20,
    date: "27.08.1995",
    hebrewDate: "ב' באלול תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%AA%D7%9F%20%D7%91%D7%A8%D7%A7/en_c0f94c43ed9b9d180a88b58b83925a10",
  },
  {
    firstName: "יהודה-יאיר",
    lastName: "ברק",
    age: 20,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%99%D7%90%D7%99%D7%A8%20%D7%91%D7%A8%D7%A7/en_9055124a423f15385dcf1896fd49fc25",
  },
  {
    firstName: "שגיא (סגוש)",
    lastName: "ברקוביץ",
    age: 22,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%92%D7%99%D7%90%20%D7%91%D7%A8%D7%A7%D7%95%D7%91%D7%99%D7%A5/en_69ec3dc93108bbdc05e7cd8fc36e8785",
  },
  {
    firstName: "שלמה",
    lastName: "ברקת",
    age: 48,
    date: "11.07.1983",
    hebrewDate: "א' באב תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%91%D7%A8%D7%A7%D7%AA/en_f161cb6e9b970cb16d71e57d6cc09c15",
  },
  {
    firstName: "אבשלום (אבי)",
    lastName: "בשארי",
    age: 20,
    date: "04.02.1988",
    hebrewDate: 'ט"ז בשבט תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A9%D7%9C%D7%95%D7%9D%20%D7%91%D7%A9%D7%90%D7%A8%D7%99/en_606d3e86f6bfa004e061f317926a6d8d",
  },
  {
    firstName: "חוסיין",
    lastName: "בשיר",
    age: 35,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%95%D7%A1%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8/en_5e7a933bca70a97ae9b7e82b44caee91",
  },
  {
    firstName: "מחמוד",
    lastName: "ג'ומעה",
    age: 22,
    date: "04.03.1996",
    hebrewDate: 'י"ג באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%97%D7%9E%D7%95%D7%93%20%D7%92%D7%95%D7%9E%D7%A2%D7%94/en_3416860cbc142ae52adcb60d296a7cb3",
  },
  {
    firstName: "סעדאללה",
    lastName: "גאנם",
    age: 35,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%A2%D7%93%D7%90%D7%9C%D7%9C%D7%94%20%D7%92%D7%90%D7%A0%D7%9D/en_ce42ea8129f870e208306821f6152e4d",
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "גאקמן",
    age: 19,
    date: "12.03.1984",
    hebrewDate: "ח' באדר ב' תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C%20%D7%92%D7%90%D7%A7%D7%9E%D7%9F/en_3455c10552eb4e67e08a278a8a7ba334",
  },
  {
    firstName: "דוד",
    lastName: "גבאי",
    age: 19,
    date: "06.12.1982",
    hebrewDate: 'כ"א בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%92%D7%91%D7%90%D7%99/en_6b5b3158538aee26a7bb3094657a4efa",
  },
  {
    firstName: "יעקב (קובי)",
    lastName: "גבאי",
    age: 20,
    date: "24.05.1993",
    hebrewDate: "ד' בסיון תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%92%D7%91%D7%90%D7%99/en_a358816d64f69e623d1368a5946318a5",
  },
  {
    firstName: "אסף",
    lastName: "גביש",
    age: 22,
    date: "27.06.1984",
    hebrewDate: 'כ"ז בסיון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3%20%D7%92%D7%91%D7%99%D7%A9/en_d82daf3714c5d8fdb9db91476cb0407e",
  },
  {
    firstName: "זאב גבע",
    lastName: "גרינברג",
    age: 29,
    date: "23.09.1984",
    hebrewDate: 'כ"ו באלול תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%90%D7%91%20%D7%92%D7%91%D7%A2%20%D7%92%D7%A8%D7%99%D7%A0%D7%91%D7%A8%D7%92/en_dd958d65afbfdfa813dde29999207fdf",
  },
  {
    firstName: "אברהם גבע",
    lastName: "קליך",
    age: 32,
    date: "29.02.1984",
    hebrewDate: 'כ"ו באדר א\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A2%20%D7%90%D7%91%D7%A8%D7%94%D7%9D/en_6161f7c0519bff807de44eb48c861f4f",
  },
  {
    firstName: "עידן",
    lastName: "גבריאל",
    age: 20,
    year: 1996,
    date: "10.06.1996",
    hebrewDate: 'כ"ג בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%99%D7%93%D7%9F%20%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C/en_b5fff9dcaf7e0abfd67f2fac03cd3669",
  },
  {
    firstName: "ציון",
    lastName: "גבריאל",
    age: 21,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%99%D7%95%D7%9F%20%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C/en_cff4c4ca76a03cccad3be85229e14c04",
  },
  {
    firstName: "רישרד (ריצ'רד)",
    lastName: "גברילוביץ",
    age: 23,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%9C%D7%95%D7%91%D7%99%D7%A5%20%D7%A8%D7%99%D7%A9%D7%A8%D7%93/en_b224d2eb70092f03758cd99ef69a2e46",
  },
  {
    firstName: "מולטו-אשר",
    lastName: "גדעון",
    age: 21,
    date: "04.02.1997",
  },
  {
    firstName: "אבישי (שייקוש)",
    lastName: "גדרון",
    age: 19,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A9%D7%99%20%D7%92%D7%93%D7%A8%D7%95%D7%9F/en_5538d5c564dbcc8f2b091ca9e5169981",
  },
  {
    firstName: "אייל",
    lastName: "גואטה",
    age: 21,
    date: "17.08.1999",
    hebrewDate: "ה' באלול תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%99%D7%9C%20%D7%92%D7%95%D7%90%D7%98%D7%94/en_1006f00b1e747c656f073a68d410a4a4",
  },
  {
    firstName: "אברהם",
    lastName: "גודינצקי",
    age: 20,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%92%D7%95%D7%93%D7%99%D7%A0%D7%A6%D7%A7%D7%99/en_48a51806e1b061967cba93c2a0bf9fa3",
  },
  {
    firstName: "מיכה (מיכי)",
    lastName: "גוטליב",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9B%D7%94%20%D7%92%D7%95%D7%98%D7%9C%D7%99%D7%91/en_f5bf04d0dbd3f2915baef6f1eeb9950e",
  },
  {
    firstName: "יוסי (יוסקה)",
    lastName: "גוילי",
    age: 23,
    date: "16.07.1991",
    hebrewDate: "ו' באב תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%99%20%D7%92%D7%95%D7%99%D7%9C%D7%99/en_677c966d855920efb02f5530f0549625",
  },
  {
    firstName: "תומר",
    lastName: "גולדברג",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%95%D7%9E%D7%A8%20%D7%92%D7%95%D7%9C%D7%93%D7%91%D7%A8%D7%92/en_ba8c15a48285e74d4a314504e842ea86",
  },
  {
    firstName: "שבתאי",
    lastName: "גולמבה",
    age: 22,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%91%D7%AA%D7%90%D7%99%20%D7%92%D7%95%D7%9C%D7%9E%D7%91%D7%94/en_637417d61c2c80f8f052553816ec5915",
  },
  {
    firstName: "ריקרדו-דניאל",
    lastName: "גולמן",
    age: 28,
    date: "19.03.1984",
    hebrewDate: 'ט"ו באדר ב\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%99%D7%A7%D7%A8%D7%93%D7%95-%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%92%D7%95%D7%9C%D7%9E%D7%9F/en_08ea766f9028208e6920eaa5a5c80086",
  },
  {
    firstName: "אביב-ששון",
    lastName: "גולן",
    age: 24,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%91-%D7%A9%D7%A9%D7%95%D7%9F%20%D7%92%D7%95%D7%9C%D7%9F/en_52360b7890ffdfd754595d0acdeae87e",
  },
  {
    firstName: "אסף-חנן",
    lastName: "גולן",
    age: 19,
    date: "25.10.1992",
    hebrewDate: 'כ"ח בתשרי תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3-%D7%97%D7%A0%D7%9F%20%D7%92%D7%95%D7%9C%D7%9F/en_41810ef2cfc529ce49277a1a015d3d1c",
  },
  {
    firstName: "גיא",
    lastName: "גולן",
    age: 21,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90%20%D7%92%D7%95%D7%9C%D7%9F/en_62d16a663ece1cdb251c2de335fce532",
  },
  {
    firstName: "אביב",
    lastName: "גונן",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%91%20%D7%92%D7%95%D7%A0%D7%9F/en_d16e8de7ae30d3743cd8fad645ef018a",
  },
  {
    firstName: "עמרי-ספי (המיש)",
    lastName: "גונן",
    age: 21,
    date: "18.02.1989",
    hebrewDate: 'י"ג באדר א\' תשמ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%A8%D7%99-%D7%A1%D7%A4%D7%99%20%D7%92%D7%95%D7%A0%D7%9F/en_65b846a049641d33d6a1a70d46b4fb8e",
  },
  {
    firstName: "יצחק (איז'ו)",
    lastName: "גוס",
    age: 30,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%92%D7%95%D7%A1/en_9d048603a047134f6ae98e95ac7154ff",
  },
  {
    firstName: "בני גור",
    lastName: "גבירץ",
    age: 36,
    date: "11.04.1985",
    hebrewDate: "כ' בניסן תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A0%D7%99%20%D7%92%D7%95%D7%A8%20%D7%92%D7%91%D7%99%D7%A8%D7%A5/en_c9ac21444b9926f70d927bcd8ef1bfe2",
  },
  {
    firstName: "גנאדי",
    lastName: "גורבנוב",
    age: 19,
    date: "02.12.1993",
    hebrewDate: 'י"ח בכסלו תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%A0%D7%90%D7%93%D7%99%20%D7%92%D7%95%D7%A8%D7%91%D7%A0%D7%95%D7%91/en_c6d1f62f9e3fafe18504f1a1ff52f45e",
  },
  {
    firstName: "ישראל גורן",
    lastName: "ויצקוביץ",
    age: 28,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%92%D7%95%D7%A8%D7%9F%20%D7%95%D7%99%D7%A6%D7%A7%D7%95%D7%91%D7%99%D7%A5/en_5fc4cacd211bb51e9dadafdb588fa740",
  },
  {
    firstName: "תמיר",
    lastName: "גלזר",
    age: 24,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%9E%D7%99%D7%A8%20%D7%92%D7%9C%D7%96%D7%A8/en_2201e32cee0daadc3003487ce9be87a6",
  },
  {
    firstName: "עמיר",
    lastName: "גלילי",
    age: 40,
    date: "11.07.1983",
    hebrewDate: "א' באב תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%99%D7%A8%20%D7%92%D7%9C%D7%99%D7%9C%D7%99/en_b4ef43e1651bc983b8c4414122a29410",
  },
  {
    firstName: "יבגני",
    lastName: "גלרמן",
    age: 21,
    date: "11.05.1995",
    hebrewDate: 'י"א באייר תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%91%D7%92%D7%A0%D7%99%20%D7%92%D7%9C%D7%A8%D7%9E%D7%9F/en_a50353f3647077f022e36d271df414d1",
  },
  {
    firstName: "ניר-ישראל",
    lastName: "גנדלברג",
    age: 20,
    date: "24.12.1996",
    hebrewDate: 'ט"ו בטבת תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%92%D7%A0%D7%93%D7%9C%D7%91%D7%A8%D7%92/en_957ddb7620cb84b55e485821e95c2e36",
  },
  {
    firstName: "אלברט-אברהם",
    lastName: "גנון",
    age: 30,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%91%D7%A8%D7%98-%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%92%D7%A0%D7%95%D7%9F/en_2a5762d77ccdc67d464d35293f086f7d",
  },
  {
    firstName: "ולרי",
    lastName: "גנזמן",
    age: 22,
    date: "20.08.1996",
    hebrewDate: "ה' באלול תשנ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%9C%D7%A8%D7%99%20%D7%92%D7%A0%D7%96%D7%9E%D7%9F/en_2ceb02824b32a67314c7d28ddf249bf2",
  },
  {
    firstName: "ידידיה",
    lastName: "גפן",
    age: 20,
    date: "06.02.2000",
    hebrewDate: "ל' בשבט תש\"ס",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%93%D7%99%D7%93%D7%99%D7%94%20%D7%92%D7%A4%D7%9F/en_8d2187cbf12717105f0ab28f964e098b",
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "גפני",
    age: 30,
    date: "29.05.1983",
    hebrewDate: 'י"ז בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C%20%D7%92%D7%A4%D7%A0%D7%99/en_14abaa6c7f1499ca338bf932e0468ae5",
  },
  {
    firstName: "אמיר",
    lastName: "גפר",
    age: 18,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%92%D7%A4%D7%A8/en_c17d03a35a7129a73c07fecfa5eae66fc",
  },
  {
    firstName: "אהוד (אודי)",
    lastName: "גראוברט",
    age: 22,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%94%D7%95%D7%93%20%D7%92%D7%A8%D7%90%D7%95%D7%91%D7%A8%D7%98/en_721ad2d50ac36086d0dfa751ceb51826",
  },
  {
    firstName: "צבי",
    lastName: "גרוסמן",
    age: 22,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%91%D7%99%20%D7%92%D7%A8%D7%95%D7%A1%D7%9E%D7%9F/en_c61fdb73d56878883cffa695e4e82db7",
  },
  {
    firstName: "משה",
    lastName: "גרידי",
    age: 31,
    date: "04.11.1982",
    hebrewDate: 'י"ח בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%92%D7%A8%D7%99%D7%93%D7%99/en_acee1379d1c36791e33e897a1eb01e7e",
  },
  {
    firstName: "דוד",
    lastName: "גרינולד",
    age: 20,
    date: "18.01.1984",
    hebrewDate: 'י"ד בשבט תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%92%D7%A8%D7%99%D7%A0%D7%95%D7%9C%D7%93/en_8643b0f5de991243abd98b8b3021522b",
  },
  {
    firstName: "יעקב",
    lastName: "גרנדה",
    age: 39,
    date: "27.05.1983",
    hebrewDate: 'ט"ו בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%92%D7%A8%D7%A0%D7%93%D7%94/en_66033218124d3d33ba8aa5773a6d0f21",
  },
  {
    firstName: "דוד-יעקב",
    lastName: "גרנית",
    age: 22,
    date: "23.02.1999",
    hebrewDate: "ז' באדר תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93-%D7%99%D7%A2%D7%A7%D7%91%20%D7%92%D7%A8%D7%A0%D7%99%D7%AA/en_9505ea3395e8bca7de087756e5c3d3ce",
  },
  {
    firstName: "ארז",
    lastName: "גרשטיין",
    age: 39,
    date: "28.02.1999",
    hebrewDate: 'י"ב באדר תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%96%20%D7%92%D7%A8%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_7bf834833ba258ef053750365be9f66c",
  },
  {
    firstName: "צחי",
    lastName: "דאלי",
    age: 20,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%97%D7%99%20%D7%93%D7%90%D7%9C%D7%99/en_853a347177e5dd4878abb39c4b210a12",
  },
  {
    firstName: "יהונתן (יוני)",
    lastName: "דבירי",
    age: 20,
    date: "26.02.1998",
    hebrewDate: "ל' בשבט תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%A0%D7%AA%D7%9F%20%D7%93%D7%91%D7%99%D7%A8%D7%99/en_58cc134d992839130a12478d669b2908",
  },
  {
    firstName: "מאהר",
    lastName: "דגש",
    age: 27,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%92%D7%A9%20%D7%9E%D7%90%D7%94%D7%A8/en_fa8ed4e550ff5f4cab2b383c7f09d70d",
  },
  {
    firstName: "אורי",
    lastName: "דהאן",
    age: 29,
  },
  {
    firstName: "אסף",
    lastName: "דהאן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "יורם-יעקב",
    lastName: "דהאן",
    age: 32,
    year: 1996,
  },
  {
    firstName: "מאיר",
    lastName: "דהן",
    age: 25,
  },
  {
    firstName: "מוריס",
    lastName: "דהן",
    age: 31,
  },
  {
    firstName: "משה",
    lastName: "דהן",
    age: 19,
  },
  {
    firstName: "עמרם",
    lastName: "דהן",
    age: 18,
  },
  {
    firstName: "ניר",
    lastName: "דובב",
    age: 19,
  },
  {
    firstName: "אורי",
    lastName: "דוד",
    age: 19,
  },
  {
    firstName: "ארז-טל",
    lastName: "דוד",
    age: 20,
  },
  {
    firstName: "שמעון (שימי)",
    lastName: "דוד",
    age: 21,
  },
  {
    firstName: "נפתלי (תלי)",
    lastName: "דודלס",
    age: 24,
  },
  {
    firstName: "רועי (דומבי)",
    lastName: "דומב",
    age: 20,
  },
  {
    firstName: "זהר",
    lastName: "דורון",
    age: 21,
    year: 1998,
  },
  {
    firstName: "סלאמה",
    lastName: "דיאב",
    age: 26,
  },
  {
    firstName: "סמיר",
    lastName: "דיב",
    age: 22,
  },
  {
    firstName: "עופר",
    lastName: "דיין",
    age: 21,
  },
  {
    firstName: "וילי",
    lastName: "דיקמן",
    age: 59,
  },
  {
    firstName: "הנרי (ריקו)",
    lastName: "דנה",
    age: 45,
  },
  {
    firstName: "שמעיה-אביחי",
    lastName: "דנוך",
    age: 19,
  },
  {
    firstName: "סטפן-איציק",
    lastName: "דניאל",
    age: 29,
  },
  {
    firstName: "נתנאל",
    lastName: "דניאלוב",
    age: 21,
  },
  {
    firstName: "דן",
    lastName: "דרום",
    age: 28,
  },
  {
    firstName: "אלכסנדר",
    lastName: "דרוקר",
    age: 38,
  },
  {
    firstName: "מרדכי",
    lastName: "דרעי",
    age: 20,
  },
  {
    firstName: "מרדכי",
    lastName: "דרעי",
    age: 19,
  },
  {
    firstName: "חסן",
    lastName: "הדאיה",
    age: 28,
  },
  {
    firstName: "אריק-סלומון",
    lastName: "הוימן",
    age: 24,
  },
  {
    firstName: "מרקוס",
    lastName: "הוכשטיין",
    age: 21,
  },
  {
    firstName: "אביקם-אבי (ראובן)",
    lastName: "הופמן",
    age: 19,
  },
  {
    firstName: "אלחנדרו-אלה",
    lastName: "הופמן",
    age: 19,
    year: 1997,
  },
  {
    firstName: "עלי",
    lastName: "הורנר",
    age: 48,
  },
  {
    firstName: "נאייף",
    lastName: "הייב",
    age: 35,
  },
  {
    firstName: "יוחנן-אברהם",
    lastName: "הילברג",
    age: 23,
    year: 1997,
  },
  {
    firstName: "דורון",
    lastName: "הירשקוביץ",
    age: 20,
    year: 1999,
  },
  {
    firstName: "יעקב הכהן",
    lastName: "טראב-מסלתון",
    age: 21,
  },
  {
    firstName: "יצחק-מאיר (איציק)",
    lastName: "הלוי קליין",
    age: 25,
  },
  {
    firstName: "אורי",
    lastName: "הלמן",
    age: 21,
  },
  {
    firstName: "משה",
    lastName: "הרוש",
    age: 23,
    year: 1996,
  },
  {
    firstName: "יואב",
    lastName: "הרשושנים",
    age: 21,
  },
  {
    firstName: "עשהאל (אסי)",
    lastName: "והב",
    age: 20,
  },
  {
    firstName: "שי",
    lastName: "וולשטיין",
    age: 22,
  },
  {
    firstName: "חנן (חוני)",
    lastName: "וורבר",
    age: 23,
  },
  {
    firstName: "רמזי",
    lastName: "וחש",
    age: 27,
  },
  {
    firstName: "ארי-יחיאל",
    lastName: "וידל",
    age: 20,
  },
  {
    firstName: "מאיר-שלמה",
    lastName: "וידמן",
    age: 35,
  },
  {
    firstName: "שמואל-ינאי",
    lastName: "ויינשטוק",
    age: 20,
  },
  {
    firstName: "ברוך",
    lastName: "וייצמן",
    age: 39,
  },
  {
    firstName: "יעקב (ג'קי)",
    lastName: "וייר",
    age: 21,
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "וינשטוק",
    age: 19,
  },
  {
    firstName: "יובל",
    lastName: "וינשטיין",
    age: 24,
  },
  {
    firstName: "ישי-רונן",
    lastName: "ויסמן",
    age: 22,
  },
  {
    firstName: "ארנון",
    lastName: "וספי",
    age: 19,
  },
  {
    firstName: "אייל דרור",
    lastName: "וקנין",
    age: 21,
  },
  {
    firstName: "רון",
    lastName: "ורדי",
    age: 20,
  },
  {
    firstName: "רון",
    lastName: "ורנר",
    age: 22,
  },
  {
    firstName: "רונן",
    lastName: "ז'ורנו",
    age: 21,
  },
  {
    firstName: "יהושע-יוסף",
    lastName: "זאדה",
    age: 28,
  },
  {
    firstName: "איתן",
    lastName: "זהבי",
    age: 28,
  },
  {
    firstName: "דן (דני)",
    lastName: "זהבי",
    age: 19,
    year: 1997,
  },
  {
    firstName: "שאול (שאולי)",
    lastName: "זהבי",
    age: 27,
  },
  {
    firstName: "שמעון",
    lastName: "זהבי",
    age: 39,
  },
  {
    firstName: "זאביק",
    lastName: "זומרפלד",
    age: 21,
    year: 1997,
  },
  {
    firstName: "דוד",
    lastName: "זונטג",
    age: 47,
  },
  {
    firstName: "זיאד",
    lastName: "זיאדה",
    age: 21,
  },
  {
    firstName: "סאלח-כאמל",
    lastName: "זידאן",
    age: 24,
  },
  {
    firstName: "אמיר",
    lastName: "זידנר",
    age: 19,
  },
  {
    firstName: "חנן (חנינה) זיו",
    lastName: "זזניקביץ",
    age: 30,
  },
  {
    firstName: "עוזי",
    lastName: "זילבר",
    age: 42,
  },
  {
    firstName: "אלכסנדר-לרנד (אלכס)",
    lastName: "זינגר",
    age: 25,
  },
  {
    firstName: "יאיר",
    lastName: "זינר",
    age: 30,
  },
  {
    firstName: "אוהד",
    lastName: "זך",
    age: 19,
    year: 1998,
  },
  {
    firstName: "ניסים-ניר",
    lastName: "זלאיט",
    age: 20,
  },
  {
    firstName: "רפאל (רפי)",
    lastName: "זנגוויל",
    age: 24,
    year: 2000,
  },
  {
    firstName: "אורן",
    lastName: "זריף",
    age: 21,
    year: 1997,
  },
  {
    firstName: "רוקון ח'טיב",
    lastName: "זויהד",
    age: 20,
  },
  {
    firstName: "חמד",
    lastName: "חאטיב",
    age: 26,
  },
  {
    firstName: "כיואן",
    lastName: "חאמד",
    age: 30,
  },
  {
    firstName: "חליל",
    lastName: "חדאד",
    age: 28,
  },
  {
    firstName: "גיא-שלם",
    lastName: "חדד",
    age: 21,
  },
  {
    firstName: "יוסף (שושן)",
    lastName: "חדד",
    age: 31,
  },
  {
    firstName: "יצחק-יהודה (צ'יקו)",
    lastName: "חדד",
    age: 19,
  },
  {
    firstName: "מוחמד",
    lastName: "חוג'יראת",
    age: 27,
    year: 1996,
  },
  {
    firstName: "ערן",
    lastName: "חודדה",
    age: 20,
  },
  {
    firstName: "יחזקאל",
    lastName: "חורש",
    age: 39,
    year: 1997,
  },
  {
    firstName: "ישראל",
    lastName: "חושני",
    age: 35,
  },
  {
    firstName: "ניב",
    lastName: "חזון",
    age: 19,
  },
  {
    firstName: "אבנר-כפיר",
    lastName: "חזי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "אילן",
    lastName: "חזיזה",
    age: 20,
  },
  {
    firstName: "אפרים (אפי)",
    lastName: "חזן",
    age: 24,
  },
  {
    firstName: "גולן (גולי)",
    lastName: "חזן",
    age: 20,
  },
  {
    firstName: "שמעון",
    lastName: "חזן",
    age: 24,
  },
  {
    firstName: "נג'ם",
    lastName: "חזראן",
    age: 20,
  },
  {
    firstName: "מהדי",
    lastName: "חטיב",
    age: 21,
    year: 1997,
  },
  {
    firstName: "יוסף",
    lastName: "חי-ציון",
    age: 38,
  },
  {
    firstName: "אברהם",
    lastName: "חידו",
    age: 41,
  },
  {
    firstName: "רונן (רונני)",
    lastName: "חיון",
    age: 19,
    year: 1997,
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "חיים",
    age: 23,
  },
  {
    firstName: "שאול (שאולי)",
    lastName: "חילביץ",
    age: 20,
  },
  {
    firstName: "שבתאי",
    lastName: "חכמון",
    age: 37,
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "חליבה",
    age: 18,
  },
  {
    firstName: "אהוד-שמשון",
    lastName: "חלמיש",
    age: 20,
  },
  {
    firstName: "זהר",
    lastName: "חלמיש",
    age: 21,
  },
  {
    firstName: "רונן",
    lastName: "חלפון",
    age: 35,
    year: 1997,
  },
  {
    firstName: "חיים",
    lastName: "חנוך",
    age: 19,
  },
  {
    firstName: "דרור (דורי)",
    lastName: "חנן",
    age: 20,
  },
  {
    firstName: "עמית (מיצכה)",
    lastName: "חסדאי",
    age: 21,
  },
  {
    firstName: "אשר",
    lastName: "חסין",
    age: 23,
  },
  {
    firstName: "עופר",
    lastName: "חרוש",
    age: 20,
  },
  {
    firstName: "סאלח",
    lastName: "טאפש",
    age: 21,
  },
  {
    firstName: "רז",
    lastName: "טבי",
    age: 22,
    year: 1997,
  },
  {
    firstName: "אריה",
    lastName: "טובול",
    age: 20,
  },
  {
    firstName: "לירז (רז)",
    lastName: "טיטו",
    age: 21,
    year: 1999,
  },
  {
    firstName: "גיא",
    lastName: "טל",
    age: 20,
  },
  {
    firstName: "אילן טל",
    lastName: "טאוסיג",
    age: 33,
  },
  {
    firstName: "איתן טל",
    lastName: "טמקין",
    age: 42,
  },
  {
    firstName: "תדהר",
    lastName: "טמפלהוף",
    age: 24,
    year: 2000,
  },
  {
    firstName: "רון",
    lastName: "טנדיט",
    age: 20,
  },
  {
    firstName: "אסף-יחזקאל",
    lastName: "טננבאום",
    age: 21,
  },
  {
    firstName: "אביב",
    lastName: "טרוטנר",
    age: 20,
  },
  {
    firstName: "שמעון יהב",
    lastName: "והב",
    age: 31,
  },
  {
    firstName: "נפתלי יהב",
    lastName: "שוסטק",
    age: 36,
  },
  {
    firstName: "אמיר",
    lastName: "יואלי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "ירון",
    lastName: "יוגב",
    age: 22,
  },
  {
    firstName: "רוסלן",
    lastName: "יוסיפוב",
    age: 21,
    year: 1997,
  },
  {
    firstName: "יחזקאל",
    lastName: "יחיא",
    age: 37,
  },
  {
    firstName: "אהרן",
    lastName: "ינובסקי",
    age: 37,
  },
  {
    firstName: "רונן (צ'פל)",
    lastName: "יפה",
    age: 19,
  },
  {
    firstName: "ארז",
    lastName: "יצחק",
    age: 19,
    year: 1996,
  },
  {
    firstName: "צור-צבי",
    lastName: "ישראל",
    age: 22,
  },
  {
    firstName: "נדב",
    lastName: "ישראלי",
    age: 20,
  },
  {
    firstName: "מיכאל (מיקי)",
    lastName: "כץ",
    age: 20,
    year: 1997,
  },
  {
    firstName: "ליאור-בנימין",
    lastName: "כביר",
    age: 20,
  },
  {
    firstName: "הראל",
    lastName: "כברה",
    age: 21,
  },
  {
    firstName: "אור",
    lastName: "כהן",
    age: 20,
    year: 1998,
  },
  {
    firstName: "אייל-מיקי",
    lastName: "כהן",
    age: 20,
    year: 1998,
  },
  {
    firstName: "אייל (בבי)",
    lastName: "כהן",
    age: 19,
  },
  {
    firstName: "אילן",
    lastName: "כהן",
    age: 21,
  },
  {
    firstName: "דוד (דידי)",
    lastName: "כהן",
    age: 21,
  },
  {
    firstName: "דותן-יצחק",
    lastName: "כהן",
    age: 22,
    year: 1997,
  },
  {
    firstName: "טל",
    lastName: "כהן",
    age: 20,
  },
  {
    firstName: "יהודה",
    lastName: "כהן",
    age: 40,
  },
  {
    firstName: "יהודה (אודי)",
    lastName: "כהן",
    age: 18,
  },
  {
    firstName: "יוסף (ג'רארד)",
    lastName: "כהן",
    age: 40,
  },
  {
    firstName: "יעקב",
    lastName: "כהן",
    age: 23,
  },
  {
    firstName: "ירמי",
    lastName: "כהן",
    age: 23,
    year: 1997,
  },
  {
    firstName: "מאיר (דובי)",
    lastName: "כהן",
    age: 20,
  },
  {
    firstName: "רוברט (רובי)",
    lastName: "כהן",
    age: 21,
  },
  {
    firstName: "רונן",
    lastName: "כהן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "רמי",
    lastName: "כהן",
    age: 24,
  },
  {
    firstName: "שחר",
    lastName: "כהן",
    age: 20,
  },
  {
    firstName: "שלמה",
    lastName: "כהן",
    age: 32,
  },
  {
    firstName: "ששון",
    lastName: "כהן",
    age: 25,
  },
  {
    firstName: "תום",
    lastName: "כיתאין",
    age: 21,
    year: 1997,
  },
  {
    firstName: "גדעון (גידי)",
    lastName: "כליף",
    age: 27,
  },
  {
    firstName: "מרדכי",
    lastName: "כליפה",
    age: 29,
  },
  {
    firstName: "עמוס",
    lastName: "כלפה",
    age: 29,
    year: 1998,
  },
  {
    firstName: "אורן",
    lastName: "כמיל",
    age: 19,
  },
  {
    firstName: "חיים",
    lastName: "כנפו",
    age: 19,
  },
  {
    firstName: "חן",
    lastName: "כנרתי",
    age: 22,
  },
  {
    firstName: "סאלח",
    lastName: "כעבייה",
    age: 22,
  },
  {
    firstName: "רפי (פירוז)",
    lastName: "כשר",
    age: 20,
  },
  {
    firstName: "אבי",
    lastName: "לב",
    age: 18,
  },
  {
    firstName: "גל",
    lastName: "לב-רן",
    age: 22,
    year: 1997,
  },
  {
    firstName: "דב (דובי)",
    lastName: "לבבי",
    age: 27,
  },
  {
    firstName: "ישעיהו (אישי)",
    lastName: "לביא",
    age: 31,
  },
  {
    firstName: "יריב",
    lastName: "להב",
    age: 22,
  },
  {
    firstName: "אבישי",
    lastName: "לוי",
    age: 27,
    year: 1997,
  },
  {
    firstName: "אייל",
    lastName: "לוי",
    age: 20,
  },
  {
    firstName: "דב",
    lastName: "לוי",
    age: 20,
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "לוי",
    age: 21,
    year: 1996,
  },
  {
    firstName: "יצחק (איציק)",
    lastName: "לוי",
    age: 19,
  },
  {
    firstName: "ישי-דב",
    lastName: "לוי",
    age: 20,
  },
  {
    firstName: "מישאל-אייל",
    lastName: "לוי",
    age: 22,
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "לוי",
    age: 20,
  },
  {
    firstName: "שילה",
    lastName: "לוי",
    age: 21,
    year: 1997,
  },
  {
    firstName: "רם",
    lastName: "לוינס",
    age: 22,
    year: 1997,
  },
  {
    firstName: "גל",
    lastName: "לוינסון",
    age: 21,
  },
  {
    firstName: "דוד (דודי)",
    lastName: "לזימי",
    age: 20,
  },
  {
    firstName: "מרדכי (מולו)",
    lastName: "ליבליך",
    age: 37,
  },
  {
    firstName: "אברהם (אבי)",
    lastName: "לימואי",
    age: 21,
    year: 1998,
  },
  {
    firstName: "גד (גדי)",
    lastName: "ליפסקי",
    age: 19,
  },
  {
    firstName: "פנחס (פיני)",
    lastName: "ליפשיץ",
    age: 34,
  },
  {
    firstName: "יורם לירן",
    lastName: "(ליקרמן)",
    age: 35,
  },
  {
    firstName: "נדב",
    lastName: "לישצינסקי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "לירון",
    lastName: "לנג",
    age: 20,
  },
  {
    firstName: "דביר",
    lastName: "לניר",
    age: 22,
    year: 1997,
  },
  {
    firstName: "אילן",
    lastName: "לנציצקי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "אמיר",
    lastName: "מאיר",
    age: 19,
    year: 2000,
  },
  {
    firstName: "לזר",
    lastName: "מאיר",
    age: 46,
  },
  {
    firstName: "חיים",
    lastName: "מדר",
    age: 36,
  },
  {
    firstName: "יוסף",
    lastName: "מויאל",
    age: 21,
  },
  {
    firstName: "דוד",
    lastName: "מועלם",
    age: 18,
  },
  {
    firstName: "משה",
    lastName: "מועלם",
    age: 32,
    year: 1997,
  },
  {
    firstName: "חסין",
    lastName: "מוקטרן",
    age: 33,
  },
  {
    firstName: "אביב",
    lastName: "מור",
    age: 20,
  },
  {
    firstName: "אילן",
    lastName: "מור",
    age: 20,
  },
  {
    firstName: "דביר-יעקב",
    lastName: "מור-חיים",
    age: 20,
  },
  {
    firstName: "יורם",
    lastName: "מור יוסף",
    age: 19,
  },
  {
    firstName: "גמיל",
    lastName: "מורד",
    age: 32,
  },
  {
    firstName: "דניאל-ישראל",
    lastName: "מושיץ",
    age: 21,
  },
  {
    firstName: "גלעד",
    lastName: "מושל",
    age: 20,
    year: 1997,
  },
  {
    firstName: "רן",
    lastName: "מזומן",
    age: 22,
    year: 1997,
  },
  {
    firstName: "בועז",
    lastName: "מזר",
    age: 20,
  },
  {
    firstName: "אברהם",
    lastName: "מזרחי",
    age: 20,
  },
  {
    firstName: "יצחק (צחי)",
    lastName: "מזרחי",
    age: 21,
    year: 1996,
  },
  {
    firstName: "עדי",
    lastName: "מזרחי",
    age: 33,
  },
  {
    firstName: "ציון",
    lastName: "מזרחי",
    age: 24,
  },
  {
    firstName: "אליהו",
    lastName: "מטלון",
    age: 40,
  },
  {
    firstName: "אמיר",
    lastName: "מי-טל",
    age: 29,
  },
  {
    firstName: "גל",
    lastName: "מיזלס",
    age: 24,
    year: 1997,
  },
  {
    firstName: "גד",
    lastName: "מיינפלד",
    age: 19,
  },
  {
    firstName: "ולדיסלב",
    lastName: "מיכאילוב",
    age: 22,
    year: 1997,
  },
  {
    firstName: "אפרים (אפי)",
    lastName: "מיכאל",
    age: 28,
  },
  {
    firstName: "אברהם (אבי)",
    lastName: "מילר",
    age: 23,
  },
  {
    firstName: "דניאל (דני)",
    lastName: "מילר",
    age: 21,
  },
  {
    firstName: "שחר",
    lastName: "מינס",
    age: 21,
    year: 1998,
  },
  {
    firstName: "זהר",
    lastName: "מינץ",
    age: 21,
    year: 1996,
  },
  {
    firstName: "עידן",
    lastName: "מינקר",
    age: 21,
    year: 1997,
  },
  {
    firstName: "הלל",
    lastName: "מישייב",
    age: 20,
  },
  {
    firstName: "גלעד-משה",
    lastName: "מישייקר",
    age: 20,
    year: 1997,
  },
  {
    firstName: "נדב-מנחם",
    lastName: "מלוא",
    age: 24,
    year: 1997,
  },
  {
    firstName: "רונן-ויקטור",
    lastName: "מלכה",
    age: 19,
  },
  {
    firstName: "צחי מלכה",
    lastName: "גרינברג",
    age: 21,
    year: 2000,
  },
  {
    firstName: "שבתאי",
    lastName: "מלכי",
    age: 26,
  },
  {
    firstName: "דני",
    lastName: "מלמד",
    age: 21,
  },
  {
    firstName: "יעקב (קובי)",
    lastName: "מלמד",
    age: 20,
    year: 1997,
  },
  {
    firstName: "מנדל (מישה)",
    lastName: "מלמד",
    age: 37,
  },
  {
    firstName: "ודים",
    lastName: "מלניק",
    age: 34,
    year: 1997,
  },
  {
    firstName: "אורן-אברהם",
    lastName: "מלצר",
    age: 21,
  },
  {
    firstName: "אריה",
    lastName: "ממו",
    age: 25,
  },
  {
    firstName: "איתן-יעקב",
    lastName: "ממן",
    age: 26,
    year: 1997,
  },
  {
    firstName: "גיורא",
    lastName: "ממן",
    age: 19,
  },
  {
    firstName: "שמעון",
    lastName: "מנדיל",
    age: 26,
  },
  {
    firstName: "סלאח",
    lastName: "מעדי",
    age: 33,
  },
  {
    firstName: "אורי",
    lastName: "מעוז",
    age: 22,
  },
  {
    firstName: "ישראל",
    lastName: "מעטוף",
    age: 21,
  },
  {
    firstName: "מרדכי הראל",
    lastName: "מעלומיה",
    age: 49,
  },
  {
    firstName: "יהודה",
    lastName: "מצגר",
    age: 21,
  },
  {
    firstName: "צבי-יהודה (צביקה)",
    lastName: "מקליס",
    age: 21,
  },
  {
    firstName: "אלון",
    lastName: "מרון",
    age: 26,
  },
  {
    firstName: "יוסף-יהודה (ספי)",
    lastName: "מרמלשטיין",
    age: 26,
  },
  {
    firstName: "אליהו (אלי)",
    lastName: "מרסיאנו",
    age: 32,
  },
  {
    firstName: "אברהם",
    lastName: "משה",
    age: 19,
  },
  {
    firstName: "דרור",
    lastName: "משה",
    age: 22,
  },
  {
    firstName: "יורם",
    lastName: "משה",
    age: 18,
  },
  {
    firstName: "עמאד",
    lastName: "נבואני",
    age: 21,
  },
  {
    firstName: "משה-מולו",
    lastName: "נגטו",
    age: 23,
    year: 1999,
  },
  {
    firstName: "מעוז",
    lastName: "נגר",
    age: 20,
  },
  {
    firstName: "שלמה",
    lastName: "נגר",
    age: 19,
  },
  {
    firstName: "בנימין (בני)",
    lastName: "נהון",
    age: 21,
  },
  {
    firstName: "אהד-ניר",
    lastName: "נחמיאס",
    age: 20,
    year: 1998,
  },
  {
    firstName: "ליאור",
    lastName: "ניב",
    age: 21,
    year: 2000,
  },
  {
    firstName: "אוהד (דדי)",
    lastName: "ניסים",
    age: 20,
  },
  {
    firstName: "יובל",
    lastName: "ניר",
    age: 22,
    year: 1997,
  },
  {
    firstName: "מוחמד",
    lastName: "נפאע",
    age: 31,
  },
  {
    firstName: "גיא",
    lastName: "נתנאל",
    age: 19,
  },
  {
    firstName: "מרזוק",
    lastName: "סאבק",
    age: 44,
  },
  {
    firstName: "משה (שיקו)",
    lastName: "סבן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "צפריר (צפי)",
    lastName: "סגל",
    age: 20,
  },
  {
    firstName: "ניב",
    lastName: "סדן",
    age: 19,
    year: 1997,
  },
  {
    firstName: "ישראל-משולם סדן",
    lastName: "נפחא",
    age: 21,
  },
  {
    firstName: "גדי",
    lastName: "סואד",
    age: 20,
  },
  {
    firstName: "דיאב",
    lastName: "סואעד",
    age: 36,
  },
  {
    firstName: "גיא",
    lastName: "סודאי",
    age: 19,
  },
  {
    firstName: "יצחק",
    lastName: "סויסה",
    age: 22,
  },
  {
    firstName: "שמעון",
    lastName: "סוסן",
    age: 44,
  },
  {
    firstName: "יורם",
    lastName: "סופי",
    age: 18,
  },
  {
    firstName: "רונן",
    lastName: "סופר",
    age: 21,
  },
  {
    firstName: "צבי (צביקה)",
    lastName: "סטנקוב",
    age: 19,
  },
  {
    firstName: "אסף-יעקב",
    lastName: "סיבוני",
    age: 21,
    year: 1997,
  },
  {
    firstName: "יוסף",
    lastName: "סילוק",
    age: 20,
  },
  {
    firstName: "עמיר",
    lastName: "סיני",
    age: 20,
  },
  {
    firstName: "ריאד",
    lastName: "סיף",
    age: 20,
  },
  {
    firstName: "שמשון",
    lastName: "סלימי",
    age: 37,
  },
  {
    firstName: "יהודה",
    lastName: "סלם",
    age: 20,
    year: 1998,
  },
  {
    firstName: "משה",
    lastName: "סלע",
    age: 36,
  },
  {
    firstName: "עמית-ששון",
    lastName: "סלע",
    age: 21,
  },
  {
    firstName: "אליעזר (אלי)",
    lastName: "סלפטר",
    age: 30,
  },
  {
    firstName: "אורי",
    lastName: "סמואלוב",
    age: 21,
    year: 1998,
  },
  {
    firstName: "נביל",
    lastName: "סמור",
    age: 19,
  },
  {
    firstName: "אבנר",
    lastName: "סנחאני",
    age: 20,
  },
  {
    firstName: "פואד",
    lastName: "סעד",
    age: 33,
  },
  {
    firstName: "מרדכי",
    lastName: "סעידיאן",
    age: 23,
  },
  {
    firstName: "יואב",
    lastName: "סקל",
    age: 20,
  },
  {
    firstName: "וסאם",
    lastName: "סרחאן",
    age: 20,
  },
  {
    firstName: "חוסין-עמיר",
    lastName: "עאמר",
    age: 31,
  },
  {
    firstName: "כרים",
    lastName: "עאמר",
    age: 23,
  },
  {
    firstName: "ריאד",
    lastName: "עאמר",
    age: 28,
  },
  {
    firstName: "זהר-סבח",
    lastName: "עבדה",
    age: 35,
  },
  {
    firstName: "ניר",
    lastName: "עברון",
    age: 21,
  },
  {
    firstName: "ישיש",
    lastName: "עדן",
    age: 44,
    year: 1997,
  },
  {
    firstName: "אברהם אבי",
    lastName: "עובד",
    age: 31,
  },
  {
    firstName: "אריאל",
    lastName: "עובדיה",
    age: 21,
  },
  {
    firstName: "אמיל",
    lastName: "עווידה",
    age: 23,
  },
  {
    firstName: "שקד",
    lastName: "עוזרי",
    age: 25,
    year: 2000,
  },
  {
    firstName: "חמדי",
    lastName: "עוקלה",
    age: 47,
  },
  {
    firstName: "רוני",
    lastName: "עזרא",
    age: 19,
  },
  {
    firstName: "שרון",
    lastName: "עזריאל",
    age: 19,
  },
  {
    firstName: "מוחמד",
    lastName: "עיסאת",
    age: 31,
  },
  {
    firstName: "יהונתן (יוני)",
    lastName: "עמדי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "דניאל (דני)",
    lastName: "עמר",
    age: 20,
  },
  {
    firstName: "יהודה",
    lastName: "עמר",
    age: 25,
  },
  {
    firstName: "יותם",
    lastName: "ענבר",
    age: 20,
  },
  {
    firstName: "נדים",
    lastName: "ענבר",
    age: 19,
  },
  {
    firstName: "רם",
    lastName: "ענבר",
    age: 22,
  },
  {
    firstName: "נועם",
    lastName: "עציוני",
    age: 20,
    year: 1997,
  },
  {
    firstName: "שי (שייקה)",
    lastName: "עקירב",
    age: 20,
  },
  {
    firstName: "גמאל",
    lastName: "פארס",
    age: 30,
  },
  {
    firstName: "נאזם",
    lastName: "פארס",
    age: 26,
  },
  {
    firstName: "סלמאן",
    lastName: "פארס",
    age: 25,
  },
  {
    firstName: "רביח",
    lastName: "פארס",
    age: 30,
  },
  {
    firstName: "מוחמד-אלהייב",
    lastName: "פואז",
    age: 27,
  },
  {
    firstName: "צביקה",
    lastName: "פוגל",
    age: 28,
  },
  {
    firstName: "גדעון",
    lastName: "פוזנר",
    age: 22,
    year: 1997,
  },
  {
    firstName: "שלמה (שלומי)",
    lastName: "פיזואתי",
    age: 19,
    year: 1997,
  },
  {
    firstName: "דן (דנסי)",
    lastName: "פיליפ",
    age: 26,
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "פינק",
    age: 21,
  },
  {
    firstName: "אברהם-אבא (אבי)",
    lastName: "פישר",
    age: 22,
  },
  {
    firstName: "דוד",
    lastName: "פלד-חדד",
    age: 43,
  },
  {
    firstName: "מנחם (מני)",
    lastName: "פלדמן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "משה",
    lastName: "פנדו",
    age: 38,
  },
  {
    firstName: "לירון",
    lastName: "פניני",
    age: 22,
  },
  {
    firstName: "ויטלי",
    lastName: "פסחוב",
    age: 20,
    year: 1997,
  },
  {
    firstName: "שותא",
    lastName: "פפיסמידוב",
    age: 27,
  },
  {
    firstName: "אלק",
    lastName: "פרגמנט",
    age: 32,
  },
  {
    firstName: "רז",
    lastName: "פרומוביץ",
    age: 19,
    year: 1998,
  },
  {
    firstName: "אורי-שרגא",
    lastName: "פרידמן",
    age: 21,
  },
  {
    firstName: "מגן",
    lastName: "פרידמן",
    age: 22,
    year: 1998,
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "פרמוטי",
    age: 21,
  },
  {
    firstName: "הרן-אליעזר",
    lastName: "פרנס",
    age: 21,
    year: 1997,
  },
  {
    firstName: "צור",
    lastName: "פרנס",
    age: 21,
    year: 1996,
  },
  {
    firstName: "אוריאל",
    lastName: "פרץ",
    age: 22,
    year: 1998,
  },
  {
    firstName: "ארמונד",
    lastName: "פרץ",
    age: 38,
  },
  {
    firstName: "ערן-חי",
    lastName: "פרץ",
    age: 21,
    year: 1997,
  },
  {
    firstName: "יפתח",
    lastName: "פשחור",
    age: 20,
  },
  {
    firstName: "ארן-ערן",
    lastName: "צבאג",
    age: 20,
  },
  {
    firstName: "ירון",
    lastName: "צופיוף הכהן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "אלון",
    lastName: "צור",
    age: 30,
  },
  {
    firstName: "יונתן",
    lastName: "צירקל",
    age: 22,
    year: 1997,
  },
  {
    firstName: "יאיר",
    lastName: "צפריר",
    age: 21,
  },
  {
    firstName: "נפתלי",
    lastName: "צריקר",
    age: 19,
  },
  {
    firstName: "אמנון",
    lastName: "קדמון",
    age: 19,
  },
  {
    firstName: "הדר",
    lastName: "קהתי",
    age: 19,
  },
  {
    firstName: "נדב",
    lastName: "קובץ",
    age: 21,
  },
  {
    firstName: "בן ציון",
    lastName: "קובריגרו",
    age: 38,
  },
  {
    firstName: "יעקב-פביאן",
    lastName: "קוזמה",
    age: 20,
    year: 1997,
  },
  {
    firstName: "גיל",
    lastName: "קוטלר",
    age: 37,
  },
  {
    firstName: "הנרי",
    lastName: "קורץ",
    age: 29,
  },
  {
    firstName: "רוני-יהודה",
    lastName: "קורקוס",
    age: 20,
  },
  {
    firstName: "יוסי",
    lastName: "קורקין",
    age: 33,
    year: 1997,
  },
  {
    firstName: "פאדי",
    lastName: "קזאמל",
    age: 19,
    year: 1997,
  },
  {
    firstName: "פריד",
    lastName: "קזאמל",
    age: 42,
  },
  {
    firstName: "תומר קידר",
    lastName: "צ'יז'יק",
    age: 21,
    year: 1997,
  },
  {
    firstName: "עלי",
    lastName: "קיס",
    age: 20,
  },
  {
    firstName: "שחר-יעקב",
    lastName: "קיסוס",
    age: 21,
    year: 1997,
  },
  {
    firstName: "חי",
    lastName: "קלומיטי",
    age: 19,
  },
  {
    firstName: "אלמוג",
    lastName: "קליין",
    age: 21,
  },
  {
    firstName: "יואל (חוליו)",
    lastName: "קלכמן",
    age: 23,
  },
  {
    firstName: "רועי",
    lastName: "קלר",
    age: 21,
    year: 1999,
  },
  {
    firstName: "רונן",
    lastName: "קמחי דוזי",
    age: 20,
    year: 1999,
  },
  {
    firstName: "שומטו",
    lastName: "קסהון",
    age: 21,
    year: 1997,
  },
  {
    firstName: "אמיר",
    lastName: "קרא",
    age: 21,
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "קרואני",
    age: 18,
  },
  {
    firstName: "תם",
    lastName: "קרין",
    age: 20,
    year: 1996,
  },
  {
    firstName: "סעיד",
    lastName: "קשקוש",
    age: 30,
  },
  {
    firstName: "רונן",
    lastName: "ראובן",
    age: 19,
  },
  {
    firstName: "אילן",
    lastName: "רבא",
    age: 22,
  },
  {
    firstName: "בעז",
    lastName: "רביד",
    age: 27,
  },
  {
    firstName: "אידור",
    lastName: "רבינוביץ'",
    age: 20,
  },
  {
    firstName: "ויטאלי",
    lastName: "רדינסקי",
    age: 33,
    year: 1997,
  },
  {
    firstName: "ארנון",
    lastName: "רדיע",
    age: 37,
  },
  {
    firstName: "יניב",
    lastName: "רואימי",
    age: 21,
    year: 1996,
  },
  {
    firstName: "גל",
    lastName: "רודובסקי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "מרדכי (מקסי)",
    lastName: "רוזנברג",
    age: 47,
  },
  {
    firstName: "שחר",
    lastName: "רוזנברג",
    age: 20,
    year: 1997,
  },
  {
    firstName: "גיל",
    lastName: "רוזנטל",
    age: 24,
  },
  {
    firstName: "נתנאל (נתי)",
    lastName: "רוזנטל",
    age: 20,
  },
  {
    firstName: "אסף",
    lastName: "רוזנפלד",
    age: 21,
    year: 1998,
  },
  {
    firstName: "הלל-דוד",
    lastName: "רוזנר",
    age: 19,
  },
  {
    firstName: "אלעד",
    lastName: "רוטהולץ",
    age: 21,
  },
  {
    firstName: "אסף",
    lastName: "רוטנברג",
    age: 20,
    year: 1997,
  },
  {
    firstName: "רם (רמו)",
    lastName: "רוטנברג",
    age: 22,
    year: 1999,
  },
  {
    firstName: "אילן",
    lastName: "רועה",
    age: 32,
    year: 1999,
  },
  {
    firstName: "טל",
    lastName: "רז",
    age: 20,
  },
  {
    firstName: "האשם",
    lastName: "רחאל",
    age: 31,
  },
  {
    firstName: "כאמל",
    lastName: "רחאל",
    age: 27,
    year: 1997,
  },
  {
    firstName: "מאג'ד (אבו חאלד)",
    lastName: "רחאל",
    age: 35,
  },
  {
    firstName: "מנצור",
    lastName: "רחאל",
    age: 24,
  },
  {
    firstName: "יצחק",
    lastName: "רחימוב",
    age: 40,
  },
  {
    firstName: "דני (ביג'ן)",
    lastName: "רחמנו",
    age: 24,
  },
  {
    firstName: "משה (מוריס)",
    lastName: "רחמני",
    age: 46,
  },
  {
    firstName: "יובל",
    lastName: "רטיג",
    age: 18,
  },
  {
    firstName: "דניאל (דני)",
    lastName: "ריי",
    age: 19,
  },
  {
    firstName: "מנחם (מלמל)",
    lastName: "רייך",
    age: 22,
  },
  {
    firstName: "רפי",
    lastName: "רייכרט",
    age: 32,
  },
  {
    firstName: "עמוס",
    lastName: "רימון",
    age: 40,
  },
  {
    firstName: "ליאור",
    lastName: "רמון",
    age: 21,
    year: 1996,
  },
  {
    firstName: "שחר",
    lastName: "רפאלי",
    age: 21,
  },
  {
    firstName: "ניקולאי",
    lastName: "רפופורט",
    age: 24,
    year: 1998,
  },
  {
    firstName: "פיטר-פנחס",
    lastName: "רפופורט",
    age: 22,
  },
  {
    firstName: "גלעד",
    lastName: "שאול",
    age: 20,
  },
  {
    firstName: "יותם בומבון",
    lastName: "שאולי",
    age: 19,
  },
  {
    firstName: "ירון שביט",
    lastName: "רקר",
    age: 21,
  },
  {
    firstName: "נביל",
    lastName: "שבסו",
    age: 24,
  },
  {
    firstName: "ליאור",
    lastName: "שבתאי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "צפריר",
    lastName: "שובל",
    age: 22,
    year: 1997,
  },
  {
    firstName: "ערן",
    lastName: "שוהם",
    age: 21,
  },
  {
    firstName: "אושרי",
    lastName: "שוורץ",
    age: 19,
    year: 1997,
  },
  {
    firstName: "רועי",
    lastName: "שוקרון",
    age: 21,
    year: 1997,
  },
  {
    firstName: "יקיר",
    lastName: "שושי",
    age: 21,
  },
  {
    firstName: "גאלב",
    lastName: "שחיידם",
    age: 20,
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "שטייר",
    age: 21,
  },
  {
    firstName: "מיכאל",
    lastName: "שטינלוף",
    age: 40,
  },
  {
    firstName: "עמרם",
    lastName: "שטרית",
    age: 44,
  },
  {
    firstName: "ברוך",
    lastName: "שטרן",
    age: 21,
  },
  {
    firstName: "ארז",
    lastName: "שטרק",
    age: 21,
    year: 1997,
  },
  {
    firstName: "איתמר",
    lastName: "שי",
    age: 21,
    year: 1997,
  },
  {
    firstName: "איתי",
    lastName: "שיבק",
    age: 21,
  },
  {
    firstName: "אמיר (ג'ימי)",
    lastName: "שייך",
    age: 19,
  },
  {
    firstName: "תומר",
    lastName: "שייחי",
    age: 19,
  },
  {
    firstName: "אברהם-ניסן (אבי)",
    lastName: "שכטר",
    age: 20,
  },
  {
    firstName: "ישי",
    lastName: "שכטר",
    age: 21,
    year: 1996,
  },
  {
    firstName: "יובל",
    lastName: "שלו",
    age: 19,
  },
  {
    firstName: "עומר",
    lastName: "שליט סגל",
    age: 19,
    year: 1997,
  },
  {
    firstName: "ראובן",
    lastName: "שללאשוילי",
    age: 46,
  },
  {
    firstName: "יפתח",
    lastName: "שלפוברסקי",
    age: 21,
    year: 1997,
  },
  {
    firstName: "משה",
    lastName: "שמוחה",
    age: 34,
  },
  {
    firstName: "מאיר",
    lastName: "שמול",
    age: 20,
  },
  {
    firstName: "אייל",
    lastName: "שמח",
    age: 21,
  },
  {
    firstName: "נועם",
    lastName: "שמחה",
    age: 21,
  },
  {
    firstName: "מאיר",
    lastName: "שמי",
    age: 25,
  },
  {
    firstName: "יניב",
    lastName: "שמיאל",
    age: 20,
    year: 1997,
  },
  {
    firstName: "שלום (שלוה)",
    lastName: "שמילשוילי",
    age: 20,
  },
  {
    firstName: "ערן",
    lastName: "שמיר",
    age: 22,
    year: 1997,
  },
  {
    firstName: "ידג",
    lastName: "שמעון",
    age: 21,
    year: 1997,
  },
  {
    firstName: "איל",
    lastName: "שמעוני",
    age: 21,
    year: 1997,
  },
  {
    firstName: "אלכסנדר (אליק)",
    lastName: "שניידרמן",
    age: 26,
  },
  {
    firstName: "נתאי",
    lastName: "שפטס",
    age: 23,
  },
  {
    firstName: "יואב",
    lastName: "שפיגל",
    age: 22,
  },
  {
    firstName: "יצחק-יצחקי",
    lastName: "שפירא",
    age: 21,
    year: 1996,
  },
  {
    firstName: "אורן",
    lastName: "שפר",
    age: 19,
  },
  {
    firstName: "אליעזר (אלי)",
    lastName: "שפר",
    age: 20,
  },
  {
    firstName: "מרדכי",
    lastName: "שקדי",
    age: 48,
  },
  {
    firstName: "רתם",
    lastName: "שרביט",
    age: 20,
    year: 1997,
  },
  {
    firstName: "יואב",
    lastName: "שרון",
    age: 22,
  },
  {
    firstName: "צפריר (צפי)",
    lastName: "שרוני שער",
    age: 22,
    year: 1997,
  },
  {
    firstName: "ניר-מרדכי",
    lastName: "שרייבמן",
    age: 20,
    year: 1997,
  },
  {
    firstName: "הראל",
    lastName: "שרם",
    age: 21,
  },
  {
    firstName: "גיל (גילי)",
    lastName: "שרעבי",
    age: 20,
    year: 1997,
  },
  {
    firstName: "נחמיה",
    lastName: "שרעבי",
    age: 49,
  },
  {
    firstName: "גיל-מרדכי (גילי)",
    lastName: "שרף",
    age: 19,
  },
  {
    firstName: "סעיד",
    lastName: "שרף",
    age: 33,
  },
  {
    firstName: "נתן",
    lastName: "שרפי",
    age: 19,
  },
  {
    firstName: "יניב",
    lastName: "ששון",
    age: 21,
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "תדמור",
    age: 29,
  },
  {
    firstName: "יהודה-ליאון",
    lastName: "תובל",
    age: 40,
  },
  {
    firstName: "אסלאן",
    lastName: "תחאוחו",
    age: 21,
    year: 1996,
  },
  {
    firstName: "ראגב חסאן",
    lastName: "תחאוקי",
    age: 19,
  },
];
export default FALLEN_SOLDIERS;
