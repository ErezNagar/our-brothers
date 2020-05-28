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
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%90%D7%96%D7%95%D7%9C%D7%90%D7%99/en_4bb97a79c1a89c650a07511324b150f7",
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
    izkor:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%91%20%D7%90%D7%9E%D7%95%D7%99%D7%90%D7%9C/en_f31732dd731647ec7b6f54bb8f25f637",
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
    date: "29.04.1983",
    hebrewDate: 'ט"ז באייר תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%93%D7%94%D7%90%D7%9F/en_bc6c46a040c6ee71ee6ec29153c67124",
  },
  {
    firstName: "אסף",
    lastName: "דהאן",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3%20%D7%93%D7%94%D7%90%D7%9F/en_132d5782036d3e5745078a7dc66c1e52",
  },
  {
    firstName: "יורם-יעקב",
    lastName: "דהאן",
    age: 32,
    date: "30.05.1996",
    hebrewDate: 'י"ב בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A8%D7%9D-%D7%99%D7%A2%D7%A7%D7%91%20%D7%93%D7%94%D7%90%D7%9F/en_911a00c51dc2dea432c45fcde59b5491",
  },
  {
    firstName: "מאיר",
    lastName: "דהן",
    age: 25,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8%20%D7%93%D7%94%D7%9F/en_9a7720962c1d99009cbbb80014a83ae3",
  },
  {
    firstName: "מוריס",
    lastName: "דהן",
    age: 31,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%A8%D7%99%D7%A1%20%D7%93%D7%94%D7%9F/en_ef9474194d2de34e76399de34e45450c",
  },
  {
    firstName: "משה",
    lastName: "דהן",
    age: 19,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%93%D7%94%D7%9F/en_e2b60b53db20db7f818ae9f55fe3e6fa",
  },
  {
    firstName: "עמרם",
    lastName: "דהן",
    age: 18,
    date: "29.11.1982",
    hebrewDate: 'י"ג בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%A8%D7%9D%20%D7%93%D7%94%D7%9F/en_c5f2853029caac40ddd2423e2f7f0275",
  },
  {
    firstName: "ניר",
    lastName: "דובב",
    age: 19,
    date: "18.02.1993",
    hebrewDate: 'כ"ח בשבט תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8%20%D7%93%D7%95%D7%91%D7%91/en_6368587f7b061f25862ea785e2879e9e",
  },
  {
    firstName: "אורי",
    lastName: "דוד",
    age: 19,
    date: "25.09.1995",
    hebrewDate: "א' בתשרי תשנ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%93%D7%95%D7%93/en_14fe912cc2f6551a546559656eea7bce",
  },
  {
    firstName: "ארז-טל",
    lastName: "דוד",
    age: 20,
    date: "10.03.1996",
    hebrewDate: 'י"ט באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%96-%D7%98%D7%9C%20%D7%93%D7%95%D7%93/en_ec0098c8fa6c0fbde882854574ab7384",
  },
  {
    firstName: "שמעון (שימי)",
    lastName: "דוד",
    age: 21,
    date: "09.06.1983",
    hebrewDate: 'כ"ח בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%93%D7%95%D7%93/en_24a06b498b1a437c6648b624dbdfccbf",
  },
  {
    firstName: "נפתלי (תלי)",
    lastName: "דודלס",
    age: 24,
    date: "10.06.1983",
    hebrewDate: 'כ"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%A4%D7%AA%D7%9C%D7%99%20%D7%93%D7%95%D7%93%D7%9C%D7%A1/en_1ce4744f59adcfc1e0f9d3ced425f0ff",
  },
  {
    firstName: "רועי (דומבי)",
    lastName: "דומב",
    age: 20,
    date: "26.11.1990",
    hebrewDate: "י' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A2%D7%99%20%D7%93%D7%95%D7%9E%D7%91/en_9f9ea5cfd8d44fc73fe94af121b910cd",
  },
  {
    firstName: "זהר",
    lastName: "דורון",
    age: 21,
    date: "05.10.1998",
    hebrewDate: 'ט"ו בתשרי תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%94%D7%A8%20%D7%93%D7%95%D7%A8%D7%95%D7%9F/en_2fddce5aa342beb436f6adba901415cf",
  },
  {
    firstName: "סלאמה",
    lastName: "דיאב",
    age: 26,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%9C%D7%90%D7%9E%D7%94%20%D7%93%D7%99%D7%90%D7%91/en_d9c8215865599115488bda8aaa0b6508",
  },
  {
    firstName: "סמיר",
    lastName: "דיב",
    age: 22,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%9E%D7%99%D7%A8%20%D7%93%D7%99%D7%91/en_16722b4a2906eacfc61621983a1d65db",
  },
  {
    firstName: "עופר",
    lastName: "דיין",
    age: 21,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%A4%D7%A8%20%D7%93%D7%99%D7%99%D7%9F/en_5345a644a80453de1cf31cfe4b0f1f5f",
  },
  {
    firstName: "וילי",
    lastName: "דיקמן",
    age: 59,
    date: "10.03.1984",
    hebrewDate: "ו' באדר ב' תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%99%D7%9C%D7%99%20%D7%93%D7%99%D7%A7%D7%9E%D7%9F/en_4de6c7f2bfefb2bad6b504ac164933d9",
  },
  {
    firstName: "הנרי (ריקו)",
    lastName: "דנה",
    age: 45,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A0%D7%A8%D7%99%20%D7%93%D7%A0%D7%94/en_31f66f18c20d8bfee0209a1b5f95193b",
  },
  {
    firstName: "שמעיה-אביחי",
    lastName: "דנוך",
    age: 19,
    date: "04.07.1994",
    hebrewDate: 'כ"ה בתמוז תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%99%D7%94-%D7%90%D7%91%D7%99%D7%97%D7%99%20%D7%93%D7%A0%D7%95%D7%9A/en_7eb48a0838d28f416224a4afd778b0bf",
  },
  {
    firstName: "סטפן-איציק",
    lastName: "דניאל",
    age: 29,
    date: "27.12.1983",
    hebrewDate: 'כ"א בטבת תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%A1%D7%98%D7%A4%D7%9F/en_5beef01307cf745828c7efe6895684c5",
  },
  {
    firstName: "נתנאל",
    lastName: "דניאלוב",
    age: 21,
    date: "27.08.1984",
    hebrewDate: 'כ"ט באב תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C%20%D7%93%D7%A0%D7%99%D7%90%D7%9C%D7%95%D7%91/en_8af276fa43e8c25e27840f42aa3b40a8",
  },
  {
    firstName: "דן",
    lastName: "דרום",
    age: 29,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%9F%20%D7%93%D7%A8%D7%95%D7%9D/en_bba40e110c60610dc26a80f20e9767f1",
  },
  {
    firstName: "אלכסנדר",
    lastName: "דרוקר",
    age: 38,
    date: "15.10.1982",
    hebrewDate: 'כ"ח בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%9B%D7%A1%D7%A0%D7%93%D7%A8%20%D7%93%D7%A8%D7%95%D7%A7%D7%A8/en_8bfcbeeead61633be9234c44ca1ab3b5",
  },
  {
    firstName: "מרדכי",
    lastName: "דרעי",
    age: 20,
    date: "13.11.1984",
    hebrewDate: 'י"ח בחשון תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%93%D7%A8%D7%A2%D7%99/en_6a31817d0d882a079a36cad43335cf56",
  },
  {
    firstName: "מרדכי",
    lastName: "דרעי",
    age: 19,
    date: "25.10.1983",
    hebrewDate: 'י"ט בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%93%D7%A8%D7%A2%D7%99/en_0430ed41e3dd1350156c9f5eca4cea36",
  },
  {
    firstName: "חסן",
    lastName: "הדאיה",
    age: 28,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%A1%D7%9F%20%D7%94%D7%93%D7%90%D7%99%D7%94/en_3764e5c5a982d2d1a4dd4b8aba119c64",
  },
  {
    firstName: "אריק-סלומון",
    lastName: "הוימן",
    age: 24,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%A7-%D7%A1%D7%9C%D7%95%D7%9E%D7%95%D7%9F%20%D7%94%D7%95%D7%99%D7%9E%D7%9F/en_cb79bd579112e7f672909b301d11cc0f",
  },
  {
    firstName: "מרקוס",
    lastName: "הוכשטיין",
    age: 21,
    date: "01.04.1985",
    hebrewDate: "י' בניסן תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%A7%D7%95%D7%A1%20%D7%94%D7%95%D7%9B%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_eb8aadcc1c22c1cc07ea7b0ac3a61bda",
  },
  {
    firstName: "אביקם-אבי (ראובן)",
    lastName: "הופמן",
    age: 19,
    date: "03.07.1994",
    hebrewDate: 'כ"ד בתמוז תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A7%D7%9D-%D7%90%D7%91%D7%99%20%D7%94%D7%95%D7%A4%D7%9E%D7%9F%20%D7%94%D7%95%D7%A4%D7%9E%D7%9F/en_b575e3e677b51495d2ec57360ac4631a",
  },
  {
    firstName: "אלחנדרו-אלה",
    lastName: "הופמן",
    age: 19,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%97%D7%A0%D7%93%D7%A8%D7%95-%D7%90%D7%9C%D7%94%20%D7%94%D7%95%D7%A4%D7%9E%D7%9F/en_3f89d41103434d74fabd040a279347e2",
  },
  {
    firstName: "עלי",
    lastName: "הורנר",
    age: 48,
    date: "03.10.1982",
    hebrewDate: 'ט"ז בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9C%D7%99%20%D7%94%D7%95%D7%A8%D7%A0%D7%A8/en_b11628012e226be1443b35ee48a4096e",
  },
  {
    firstName: "נאייף",
    lastName: "הייב",
    age: 35,
    date: "20.10.1991",
    hebrewDate: 'י"ב בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%90%D7%99%D7%99%D7%A3%20%D7%94%D7%99%D7%99%D7%91/en_b122074b508939a333063bcea983e9ae",
  },
  {
    firstName: "יוחנן-אברהם",
    lastName: "הילברג",
    age: 23,
    year: 1997,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%97%D7%A0%D7%9F-%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%94%D7%99%D7%9C%D7%91%D7%A8%D7%92/en_3687e5b9e9d26c8994d816a7dbcb9b8a",
  },
  {
    firstName: "דורון",
    lastName: "הירשקוביץ",
    age: 20,
    date: "17.08.1999",
    hebrewDate: "ה' באלול תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%A8%D7%95%D7%9F%20%D7%94%D7%99%D7%A8%D7%A9%D7%A7%D7%95%D7%91%D7%99%D7%A5/en_7ae45b535c89e5a0500739d1ab03b5fc",
  },
  {
    firstName: "יעקב הכהן",
    lastName: "טראב-מסלתון",
    age: 21,
    date: "17.03.1985",
    hebrewDate: 'כ"ד באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%94%D7%9B%D7%94%D7%9F%20%D7%98%D7%A8%D7%90%D7%91-%D7%9E%D7%A1%D7%9C%D7%AA%D7%95%D7%9F/en_e563e667323939b889768b4b3b62d507",
  },
  {
    firstName: "יצחק-מאיר (איציק)",
    lastName: "הלוי קליין",
    age: 25,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7-%D7%9E%D7%90%D7%99%D7%A8%20%D7%94%D7%9C%D7%95%D7%99%20%D7%A7%D7%9C%D7%99%D7%99%D7%9F/en_15c56cbf07e23b47d4463e9dc91a3a6f",
  },
  {
    firstName: "אורי",
    lastName: "הלמן",
    age: 21,
    date: "04.03.1996",
    hebrewDate: 'י"ד באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%94%D7%9C%D7%9E%D7%9F/en_91d8f56006edde44a47cca8590c7e5ba",
  },
  {
    firstName: "משה",
    lastName: "הרוש",
    age: 23,
    date: "30.05.1996",
    hebrewDate: 'י"ב בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%94%D7%A8%D7%95%D7%A9/en_55b60e734c55ab301ce93cd551d06711",
  },
  {
    firstName: "יואב",
    lastName: "הרשושנים",
    age: 21,
    date: "07.02.1994",
    hebrewDate: 'כ"ו בשבט תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A8%D7%A9%D7%95%D7%A9%D7%A0%D7%99%D7%9D%20%D7%99%D7%95%D7%90%D7%91%20/en_f320251b067708e507a0339b690dc6f5",
  },
  {
    firstName: "עשהאל (אסי)",
    lastName: "והב",
    age: 20,
    date: "13.04.1983",
    hebrewDate: "ל' בניסן תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A9%D7%94%D7%90%D7%9C%20%D7%95%D7%94%D7%91/en_ea4fcb6e66736a63ea8b95a880326c03",
  },
  {
    firstName: "שי",
    lastName: "וולשטיין",
    age: 22,
    date: "25.07.1994",
    hebrewDate: 'י"ז באב תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%99%20%D7%95%D7%95%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_d3c4a358289348a2df501cc5b2c67870",
  },
  {
    firstName: "חנן (חוני)",
    lastName: "וורבר",
    age: 23,
    date: "16.02.1984",
    hebrewDate: 'י"ג באדר א\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%A0%D7%9F%20%D7%95%D7%95%D7%A8%D7%91%D7%A8/en_8b2ee008b61d422579068c59a49630e1",
  },
  {
    firstName: "רמזי",
    lastName: "וחש",
    age: 27,
    date: "26.04.1988",
    hebrewDate: "ט' באייר תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9E%D7%96%D7%99%20%D7%95%D7%97%D7%A9/en_9b9db0422814f7fcc73e023d7646037a",
  },
  {
    firstName: "ארי-יחיאל",
    lastName: "וידל",
    age: 20,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%90%D7%9C%20%D7%95%D7%99%D7%93%D7%9C/en_d7855248f0f2528d95956f528f2c7775",
  },
  {
    firstName: "מאיר-שלמה",
    lastName: "וידמן",
    age: 35,
    date: "16.03.1983",
    hebrewDate: "ב' בניסן תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8-%D7%A9%D7%9C%D7%9E%D7%94%20%D7%95%D7%99%D7%93%D7%9E%D7%9F/en_cf8e0e23161b4b659c9e9f30720e5747",
  },
  {
    firstName: "שמואל-ינאי",
    lastName: "ויינשטוק",
    age: 20,
    date: "27.12.1982",
    hebrewDate: 'י"א בטבת תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%95%D7%90%D7%9C-%D7%99%D7%A0%D7%90%D7%99%20%D7%95%D7%99%D7%99%D7%A0%D7%A9%D7%98%D7%95%D7%A7/en_9771df5578cc120d60f4a29325bdc829",
  },
  {
    firstName: "ברוך",
    lastName: "וייצמן",
    age: 39,
    date: "21.04.1983",
    hebrewDate: "ח' באייר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A8%D7%95%D7%9A%20%D7%95%D7%99%D7%99%D7%A6%D7%9E%D7%9F/en_3141c242e86b7bc40ed7f64b765890d2",
  },
  {
    firstName: "יעקב (ג'קי)",
    lastName: "וייר",
    age: 21,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%95%D7%99%D7%99%D7%A8/en_a6a21352922174d70c0c3f35c8d02703",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "וינשטוק",
    age: 19,
    date: "30.07.1995",
    hebrewDate: "ג' באב תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%95%D7%99%D7%A0%D7%A9%D7%98%D7%95%D7%A7/en_ceb4ddc0584217debfdafa047d4b2fa5",
  },
  {
    firstName: "יובל",
    lastName: "וינשטיין",
    age: 24,
    date: "26.11.1990",
    hebrewDate: "י' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%91%D7%9C%20%D7%95%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_76855d83fa560893f0d1727752bfe539",
  },
  {
    firstName: "ישי-רונן",
    lastName: "ויסמן",
    age: 22,
    date: "15.09.1987",
    hebrewDate: 'כ"ב באלול תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%99-%D7%A8%D7%95%D7%A0%D7%9F%20%D7%95%D7%99%D7%A1%D7%9E%D7%9F/en_269bcd8667fecfdec987eb94fd6b0953",
  },
  {
    firstName: "ארנון",
    lastName: "וספי",
    age: 19,
    date: "08.05.1983",
    hebrewDate: 'כ"ה באייר תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%A0%D7%95%D7%9F%20%D7%95%D7%A1%D7%A4%D7%99/en_3b0ae2089b7c5e1b0f0961472ee2afac",
  },
  {
    firstName: "אייל דרור",
    lastName: "וקנין",
    age: 21,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%99%D7%9C%20%D7%93%D7%A8%D7%95%D7%A8%20%D7%95%D7%A7%D7%A0%D7%99%D7%9F/en_fa5058f6888d03b909f4f3a0c1f42d00",
  },
  {
    firstName: "רון",
    lastName: "ורדי",
    age: 20,
    date: "29.08.1984",
    hebrewDate: "א' באלול תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%9F%20%D7%95%D7%A8%D7%93%D7%99/en_e0d11ee72d7ad613d51e9f336df12092",
  },
  {
    firstName: "רון",
    lastName: "ורנר",
    age: 22,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%9F%20%D7%95%D7%A8%D7%A0%D7%A8/en_4f72ad30d5b744af230bdd5bf8e2c5f1",
  },
  {
    firstName: "רונן",
    lastName: "ז'ורנו",
    age: 21,
    date: "29.10.1991",
    hebrewDate: 'כ"א בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96'%D7%95%D7%A8%D7%A0%D7%95%20%D7%A8%D7%95%D7%A0%D7%9F/en_ce12b9752832a421f55352e8ab7278d6",
  },
  {
    firstName: "יהושע-יוסף",
    lastName: "זאדה",
    age: 28,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%A9%D7%A2-%D7%99%D7%95%D7%A1%D7%A3%20%D7%96%D7%90%D7%93%D7%94/en_a3ba59ec6c8876a0f50426d4cadbbd65",
  },
  {
    firstName: "איתן",
    lastName: "זהבי",
    age: 28,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%96%D7%94%D7%91%D7%99/en_6958c37173d77b183529de82803bf215",
  },
  {
    firstName: "דן (דני)",
    lastName: "זהבי",
    age: 19,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%9F%20%D7%96%D7%94%D7%91%D7%99/en_6b74cb769885094d09672e7af7eaf837",
  },
  {
    firstName: "שאול (שאולי)",
    lastName: "זהבי",
    age: 27,
    date: "18.02.1985",
    hebrewDate: 'כ"ז בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%90%D7%95%D7%9C%20%D7%96%D7%94%D7%91%D7%99/en_46cbdf738733798de51f30612629d1c3",
  },
  {
    firstName: "שמעון",
    lastName: "זהבי",
    age: 39,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%96%D7%94%D7%91%D7%99/en_5b6f6581082605da2267662a803002e3",
  },
  {
    firstName: "זאביק",
    lastName: "זומרפלד",
    age: 21,
    date: "15.05.1997",
    hebrewDate: "ט' באייר תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%90%D7%91%D7%99%D7%A7%20%D7%96%D7%95%D7%9E%D7%A8%D7%A4%D7%9C%D7%93/en_9dfdd6e6ac80f8fda24f6b340657b1b2",
  },
  {
    firstName: "דוד",
    lastName: "זונטג",
    age: 47,
    date: "06.11.1982",
    hebrewDate: "כ' בחשון תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%96%D7%95%D7%A0%D7%98%D7%92/en_b44f60a64e6183e54ed476a099f98123",
  },
  {
    firstName: "זיאד",
    lastName: "זיאדה",
    age: 21,
    date: "05.03.1984",
    hebrewDate: "א' באדר ב' תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%99%D7%90%D7%93%20%D7%96%D7%99%D7%90%D7%93%D7%94/en_6184bcabc63363d963a4f06fce251971",
  },
  {
    firstName: "סאלח-כאמל",
    lastName: "זידאן",
    age: 24,
    date: "20.03.1996",
    hebrewDate: 'כ"ט באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%90%D7%9C%D7%97-%D7%9B%D7%90%D7%9E%D7%9C%20%D7%96%D7%99%D7%93%D7%90%D7%9F/en_7ab2e1fb2b006ba55554f6123c5abbab",
  },
  {
    firstName: "אמיר",
    lastName: "זידנר",
    age: 19,
    date: "22.02.1988",
    hebrewDate: "ה' באדר תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%96%D7%99%D7%93%D7%A0%D7%A8/en_6534f79e61f2c528e8f396f2c4ec5f9d",
  },
  {
    firstName: "חנן (חנינה) זיו",
    lastName: "זזניקביץ",
    age: 30,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%A0%D7%9F%20%D7%96%D7%99%D7%95%20%D7%96%D7%96%D7%A0%D7%99%D7%A7%D7%91%D7%99%D7%A5/en_8e82ff6475a056105ab7a63892ba1c31",
  },
  {
    firstName: "עוזי",
    lastName: "זילבר",
    age: 42,
    date: "28.10.1982",
    hebrewDate: 'י"א בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%96%D7%99%20%D7%96%D7%99%D7%9C%D7%91%D7%A8/en_a06c806519b35f0560d288fdbe45838d",
  },
  {
    firstName: "אלכסנדר-לרנד (אלכס)",
    lastName: "זינגר",
    age: 25,
    date: "15.09.1987",
    hebrewDate: 'כ"ב באלול תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%9B%D7%A1%D7%A0%D7%93%D7%A8-%D7%9C%D7%A8%D7%A0%D7%93%20%D7%96%D7%99%D7%A0%D7%92%D7%A8/en_97b9cbaf780f10c26c03d25c2ee848fe",
  },
  {
    firstName: "יאיר",
    lastName: "זינר",
    age: 30,
    date: "12.09.1984",
    hebrewDate: 'ט"ו באלול תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%96%D7%99%D7%A0%D7%A8/en_4d1d80794ed9ae254958cd58a30fcd9f",
  },
  {
    firstName: "אוהד",
    lastName: "זך",
    age: 19,
    date: "30.12.1998",
    hebrewDate: 'י"א בטבת תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%94%D7%93%20%D7%96%D7%9A/en_c406b8a0c96a8597963356271395080b",
  },
  {
    firstName: "ניסים-ניר",
    lastName: "זלאיט",
    age: 20,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%A0%D7%99%D7%A1%D7%99%D7%9D%20%D7%96%D7%9C%D7%90%D7%99%D7%98/en_dc4cd166a0a048bcf547d72e4ce41cd3",
  },
  {
    firstName: "רפאל (רפי)",
    lastName: "זנגוויל",
    age: 24,
    date: "25.01.2000",
    hebrewDate: 'י"ח בשבט תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%A4%D7%90%D7%9C%20%D7%96%D7%A0%D7%92%D7%95%D7%95%D7%99%D7%9C/en_5a80b4f2eb0889bdd94434a0e0394930",
  },
  {
    firstName: "אורן",
    lastName: "זריף",
    age: 21,
    date: "28.08.1997",
    hebrewDate: 'כ"ה באב תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%9F%20%D7%96%D7%A8%D7%99%D7%A3/en_f1f8d567828f7ef6e740b7ccc873e9fa",
  },
  {
    firstName: "רוקון ח'טיב",
    lastName: "זויהד",
    age: 20,
    date: "10.03.1985",
    hebrewDate: ' י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A7%D7%95%D7%9F%20%D7%97%D7%98%D7%99%D7%91%20%D7%96%D7%95%D7%99%D7%94%D7%93/en_38e7495db299e700b0b38c338d0bd268",
  },
  {
    firstName: "חמד",
    lastName: "חאטיב",
    age: 26,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%90%D7%98%D7%99%D7%91%20%D7%97%D7%9E%D7%93/en_6bbe8386f81a3745d257deee4d139128",
  },
  {
    firstName: "כיואן",
    lastName: "חאמד",
    age: 30,
    date: "19.12.1994",
    hebrewDate: 'ט"ז בטבת תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9B%D7%99%D7%95%D7%90%D7%9F%20%D7%97%D7%90%D7%9E%D7%93/en_16d391f0747dd879199f120dedd63842",
  },
  {
    firstName: "חליל",
    lastName: "חדאד",
    age: 28,
    date: "",
    hebrewDate: "",
    izkorLink: "",
  },
  {
    firstName: "גיא-שלם",
    lastName: "חדד",
    age: 21,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90-%D7%A9%D7%9C%D7%9D%20%D7%97%D7%93%D7%93/en_786b6e6ab2c85a238a4c2e92dbc544fc",
  },
  {
    firstName: "יוסף (שושן)",
    lastName: "חדד",
    age: 31,
    date: "11.11.1982",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%97%D7%93%D7%93/en_977666096368f521e5cb8032b65c1f0d",
  },
  {
    firstName: "יצחק-יהודה (צ'יקו)",
    lastName: "חדד",
    age: 19,
    date: "11.11.1982",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%97%D7%93%D7%93/en_5140dc79fbd3a454e53fdb91ede41241",
  },
  {
    firstName: "מוחמד",
    lastName: "חוג'יראת",
    age: 27,
    date: "07.12.1996",
    hebrewDate: 'כ"ו בכסלו תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%97%D7%9E%D7%93%20%D7%97%D7%95%D7%92%D7%99%D7%A8%D7%90%D7%AA/en_f2beaab12015f7fc294abfc607e32749",
  },
  {
    firstName: "ערן",
    lastName: "חודדה",
    age: 20,
    date: "03.07.1994",
    hebrewDate: 'כ"ד בתמוז תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%97%D7%95%D7%93%D7%93%D7%94/en_162f700a47aa037ac13a152ab4d6c2af",
  },
  {
    firstName: "יחזקאל",
    lastName: "חורש",
    age: 39,
    date: "11.11.1982",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%97%D7%96%D7%A7%D7%90%D7%9C%20%D7%97%D7%95%D7%A8%D7%A9/en_87d24bc72e2718a7f39f5f93577a5256",
  },
  {
    firstName: "ישראל",
    lastName: "חושני",
    age: 35,
    date: "04.02.1997",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%97%D7%95%D7%A9%D7%A0%D7%99/en_4f1a0a0d399bff91be2cbe8573094b72",
  },
  {
    firstName: "ניב",
    lastName: "חזון",
    age: 19,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%91%20%D7%97%D7%96%D7%95%D7%9F/en_79ee0dff5770147407268f19e01ace54",
  },
  {
    firstName: "אבנר-כפיר",
    lastName: "חזי",
    age: 20,
    date: "19.03.1997",
    hebrewDate: "י' באדר ב' תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A0%D7%A8-%D7%9B%D7%A4%D7%99%D7%A8%20%D7%97%D7%96%D7%99/en_075641b1b4714e32786ea6c4b5ab05e2",
  },
  {
    firstName: "אילן",
    lastName: "חזיזה",
    age: 20,
    date: "10.04.1987",
    hebrewDate: 'י"ב בניסן תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%97%D7%96%D7%99%D7%96%D7%94/en_8e4827e392aa8ad5fa374b55214e7a6c",
  },
  {
    firstName: "אפרים (אפי)",
    lastName: "חזן",
    age: 24,
    date: "10.06.1983",
    hebrewDate: 'כ"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A4%D7%A8%D7%99%D7%9D%20%D7%97%D7%96%D7%9F/en_9e47877926a318075e1772f4d344471e",
  },
  {
    firstName: "גולן (גולי)",
    lastName: "חזן",
    age: 20,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%95%D7%9C%D7%9F%20%D7%97%D7%96%D7%9F/en_2752f97573d8511d55d38f0ae374630d",
  },
  {
    firstName: "שמעון",
    lastName: "חזן",
    age: 24,
    date: "11.11.1982",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%97%D7%96%D7%9F/en_d2a3abf96ff8a3b123cacc57523dbb52",
  },
  {
    firstName: "נג'ם",
    lastName: "חזראן",
    age: 20,
    date: "12.06.1989",
    hebrewDate: "ט' בסיון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%92%D7%9D%20%D7%97%D7%96%D7%A8%D7%90%D7%9F/en_80c396980b60591c01fbe8733bbdf774",
  },
  {
    firstName: "מהדי",
    lastName: "חטיב",
    age: 21,
    date: "18.10.1997",
    hebrewDate: 'י"ח בתשרי תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%94%D7%93%D7%99%20%D7%97%D7%98%D7%99%D7%91/en_8c5411eb40b95e27a76209553f3e155e",
  },
  {
    firstName: "יוסף",
    lastName: "חי-ציון",
    age: 38,
    date: "03.10.1982",
    hebrewDate: 'ט"ז בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%97%D7%99-%D7%A6%D7%99%D7%95%D7%9F/en_7ef4b50f76c3eed61526c4b61fa152c1",
  },
  {
    firstName: "אברהם",
    lastName: "חידו",
    age: 41,
    date: "18.02.1985",
    hebrewDate: 'כ"ז בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%97%D7%99%D7%93%D7%95/en_b12eed3c12b581d7a530bc1fe60cacfb",
  },
  {
    firstName: "רונן (רונני)",
    lastName: "חיון",
    age: 19,
    date: "18.10.1997",
    hebrewDate: 'י"ז בתשרי תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%97%D7%99%D7%95%D7%9F/en_0476ee6f77194d6c6472eb88b307a739",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "חיים",
    age: 23,
    date: "18.04.1985",
    hebrewDate: 'כ"ז בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%97%D7%99%D7%99%D7%9D/en_0cd56e00f3700a7d59ce9c6040304d9f",
  },
  {
    firstName: "שאול (שאולי)",
    lastName: "חילביץ",
    age: 20,
    date: "29.10.1991",
    hebrewDate: 'כ"א בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%90%D7%95%D7%9C%20%D7%97%D7%99%D7%9C%D7%91%D7%99%D7%A5/en_aaa056ee1815c55fccc55894113b868a",
  },
  {
    firstName: "שבתאי",
    lastName: "חכמון",
    age: 37,
    date: "11.11.1982",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%91%D7%AA%D7%90%D7%99%20%D7%97%D7%9B%D7%9E%D7%95%D7%9F/en_fd7708ed04f2f63706c6146de9e0631f",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "חליבה",
    age: 18,
    date: "07.11.1984",
    hebrewDate: 'י"ב בחשון תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%97%D7%9C%D7%99%D7%91%D7%94/en_b632657feb5886135cb08ef47eb2a291",
  },
  {
    firstName: "אהוד-שמשון",
    lastName: "חלמיש",
    age: 20,
    date: "24.05.1993",
    hebrewDate: "ד' בסיון תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%94%D7%95%D7%93-%D7%A9%D7%9E%D7%A9%D7%95%D7%9F%20%D7%97%D7%9C%D7%9E%D7%99%D7%A9/en_9212c5c04df3e605c59a68c3b672196a",
  },
  {
    firstName: "זהר",
    lastName: "חלמיש",
    age: 21,
    date: "18.05.1993",
    hebrewDate: 'כ"ז באייר תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%94%D7%A8%20%D7%97%D7%9C%D7%9E%D7%99%D7%A9/en_b356a958dfdf58adcafd56f1f97a285a",
  },
  {
    firstName: "רונן",
    lastName: "חלפון",
    age: 35,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%97%D7%9C%D7%A4%D7%95%D7%9F/en_b286a58b9b8c1e4d2751a914504c6398",
  },
  {
    firstName: "חיים",
    lastName: "חנוך",
    age: 19,
    date: "20.10.1991",
    hebrewDate: 'י"ב בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%97%D7%A0%D7%95%D7%9A/en_7baae630367c98d9b259bab43d316453",
  },
  {
    firstName: "דרור (דורי)",
    lastName: "חנן",
    age: 20,
    date: "05.08.1985",
    hebrewDate: 'י"ח באב תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A8%D7%95%D7%A8%20%D7%97%D7%A0%D7%9F/en_ede84616507d740c1e5860a27d5fd46c",
  },
  {
    firstName: "עמית (מיצכה)",
    lastName: "חסדאי",
    age: 21,
    date: "21.03.1994",
    hebrewDate: "ט' בניסן תשנ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%99%D7%AA%20%D7%97%D7%A1%D7%93%D7%90%D7%99/en_4c05451b66bed521dd1f027e5618c247",
  },
  {
    firstName: "אשר",
    lastName: "חסין",
    age: 23,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A9%D7%A8%20%D7%97%D7%A1%D7%99%D7%9F/en_8182d43cbc7da8355c02d33aea6d8c92",
  },
  {
    firstName: "עופר",
    lastName: "חרוש",
    age: 20,
    date: "29.08.1994",
    hebrewDate: 'כ"ג באלול תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%A4%D7%A8%20%D7%97%D7%A8%D7%95%D7%A9/en_54320823d85faa1cec6b283dbfb03775",
  },
  {
    firstName: "סאלח",
    lastName: "טאפש",
    age: 21,
    date: "06.04.1992",
    hebrewDate: "ג' בניסן תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%90%D7%9C%D7%97%20%D7%98%D7%90%D7%A4%D7%A9/en_7fc14107dcd596439f83ea7f7a9eced4",
  },
  {
    firstName: "רז",
    lastName: "טבי",
    age: 22,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%96%20%D7%98%D7%91%D7%99/en_774c3cbbde95e28b21a6e57e5e05d331",
  },
  {
    firstName: "אריה",
    lastName: "טובול",
    age: 20,
    date: "31.07.1986",
    hebrewDate: 'כ"ד בתמוז תשמ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%94%20%D7%98%D7%95%D7%91%D7%95%D7%9C/en_520241937bc5100df6be4f109d6ff7fc",
  },
  {
    firstName: "לירז (רז)",
    lastName: "טיטו",
    age: 21,
    date: "23.02.1999",
    hebrewDate: "ז' באדר תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%A8%D7%96%20%D7%98%D7%99%D7%98%D7%95/en_eeb9cca7a08c3c2782c487ade83dfcd0",
  },
  {
    firstName: "גיא",
    lastName: "טל",
    age: 20,
    date: "26.11.1990",
    hebrewDate: "י' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90%20%D7%98%D7%9C/en_2fd56d947f942733309c6801224fbaef",
  },
  {
    firstName: "אילן טל",
    lastName: "טאוסיג",
    age: 33,
    date: "19.10.1988",
    hebrewDate: "ח' בחשון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%98%D7%9C%20%D7%98%D7%90%D7%95%D7%A1%D7%99%D7%92/en_9bfcdf8e1862728693a57723ee5b3380",
  },
  {
    firstName: "איתן טל",
    lastName: "טמקין",
    age: 42,
    date: "17.01.1984",
    hebrewDate: 'י"ג בשבט תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%98%D7%9C%20%D7%98%D7%9E%D7%A7%D7%99%D7%9F/en_1ea8fcfcff49a103e945b35a5e1fc406",
  },
  {
    firstName: "תדהר",
    lastName: "טמפלהוף",
    age: 24,
    date: "31.01.2000",
    hebrewDate: 'כ"ד בשבט תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%93%D7%94%D7%A8%20%D7%98%D7%9E%D7%A4%D7%9C%D7%94%D7%95%D7%A3/en_437c0db4eebfb4f2a8b5f4316634acf3",
  },
  {
    firstName: "רון",
    lastName: "טנדיט",
    age: 20,
    date: "08.12.1987",
    hebrewDate: 'י"ז בכסלו תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%98%D7%A0%D7%93%D7%99%D7%98%20%D7%A8%D7%95%D7%9F/en_d0f1b57971177ad1942614a3c27bcd2f",
  },
  {
    firstName: "אסף-יחזקאל",
    lastName: "טננבאום",
    age: 21,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%98%D7%A0%D7%A0%D7%91%D7%90%D7%95%D7%9D%20%D7%90%D7%A1%D7%A3/en_f1d1a0482734774260e53285ccfdffba",
  },
  {
    firstName: "אביב",
    lastName: "טרוטנר",
    age: 20,
    date: "14.02.1993",
    hebrewDate: 'כ"ג בשבט תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%91%20%D7%98%D7%A8%D7%95%D7%98%D7%A0%D7%A8/en_0adecda750652d925481b9d24d255a29",
  },
  {
    firstName: "שמעון",
    lastName: "יהב והב",
    age: 31,
    date: "23.12.1982",
    hebrewDate: "ז' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%A4%D7%AA%D7%9C%D7%99%20%D7%99%D7%94%D7%91%20%D7%A9%D7%95%D7%A1%D7%98%D7%A7/en_76b59c72c2b4341980574b74b355ac93",
  },
  {
    firstName: "נפתלי",
    lastName: "יהב שוסטק",
    age: 36,
    date: "23.12.1982",
    hebrewDate: " ז' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%A4%D7%AA%D7%9C%D7%99%20%D7%99%D7%94%D7%91%20%D7%A9%D7%95%D7%A1%D7%98%D7%A7/en_76b59c72c2b4341980574b74b355ac93",
  },
  {
    firstName: "אמיר",
    lastName: "יואלי",
    age: 20,
    date: "08.10.1997",
    hebrewDate: "ז' בתשרי תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%99%D7%95%D7%90%D7%9C%D7%99/en_03459265897913023553db498ff9545b",
  },
  {
    firstName: "ירון",
    lastName: "יוגב",
    age: 22,
    date: "19.11.1990",
    hebrewDate: "ג' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A8%D7%95%D7%9F%20%D7%99%D7%95%D7%92%D7%91/en_796d38b0e5bc96a43adaaa73839a6593",
  },
  {
    firstName: "רוסלן",
    lastName: "יוסיפוב",
    age: 21,
    year: 1997,
    date: "14.09.1997",
    hebrewDate: 'י"ב באלול תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A1%D7%9C%D7%9F%20%D7%99%D7%95%D7%A1%D7%99%D7%A4%D7%95%D7%91/en_6e442d67a95db5f5190872a6a0c86920",
  },
  {
    firstName: "יחזקאל",
    lastName: "יחיא",
    age: 37,
    date: "23.05.1983",
    hebrewDate: 'י"ב בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%97%D7%96%D7%A7%D7%90%D7%9C%20%D7%99%D7%97%D7%99%D7%90/en_edfbb414abf065dd4038b6985e8a9521",
  },
  {
    firstName: "אהרן",
    lastName: "ינובסקי",
    age: 37,
    date: "02.12.1983",
    hebrewDate: 'כ"ו בכסלו תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%94%D7%A8%D7%9F%20%D7%99%D7%A0%D7%95%D7%91%D7%A1%D7%A7%D7%99/en_0f62cc21304fbd93165ec6771a08f8aa",
  },
  {
    firstName: "רונן (צ'פל)",
    lastName: "יפה",
    age: 19,
    date: "27.05.1983",
    hebrewDate: 'ט"ו בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%99%D7%A4%D7%94/en_c03dde76d2c83eb04e9a6c86d89fe556",
  },
  {
    firstName: "ארז",
    lastName: "יצחק",
    age: 19,
    date: "09.11.1996",
    hebrewDate: 'כ"ז בחשון תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%96%20%D7%99%D7%A6%D7%97%D7%A7/en_a01ca580ba69479d275af6115ffeed1f",
  },
  {
    firstName: "צור-צבי",
    lastName: "ישראל",
    age: 22,
    date: "12.09.1993",
    hebrewDate: 'כ"ו באלול תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%95%D7%A8-%D7%A6%D7%91%D7%99%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C/en_0e6765d48b7a87b0d0423a5e23ee141b",
  },
  {
    firstName: "נדב",
    lastName: "ישראלי",
    age: 20,
    date: "20.10.1991",
    hebrewDate: 'י"ב בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%93%D7%91%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99/en_8bff8846fdea12e1074dc97174244bc1",
  },
  {
    firstName: "מיכאל (מיקי)",
    lastName: "כץ",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9B%D7%90%D7%9C%20%D7%9B%D7%A5/en_2b6def2466fe21cbeb6555ebf046a859",
  },
  {
    firstName: "ליאור-בנימין",
    lastName: "כביר",
    age: 20,
    date: "08.07.1993",
    hebrewDate: 'י"ט בתמוז תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%90%D7%95%D7%A8-%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F%20%D7%9B%D7%91%D7%99%D7%A8/en_ec938e55f3585f8d50b6b2488896df07",
  },
  {
    firstName: "הראל",
    lastName: "כברה",
    age: 21,
    date: "15.03.1991",
    hebrewDate: 'כ"ט באדר תשנ"א',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A8%D7%90%D7%9C%20%D7%9B%D7%91%D7%A8%D7%94/en_6edd270c8dd714a88793c9a9a813f26a",
  },
  {
    firstName: "אור",
    lastName: "כהן",
    age: 20,
    date: "25.06.1998",
    hebrewDate: "א' בתמוז תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%20%D7%9B%D7%94%D7%9F/en_b99037f37b10e737680ebabc1d104100",
  },
  {
    firstName: "אייל-מיקי",
    lastName: "כהן",
    age: 20,
    date: "27.11.1998",
    hebrewDate: "ח' בכסלו תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%99%D7%9C-%D7%9E%D7%99%D7%A7%D7%99%20%D7%9B%D7%94%D7%9F/en_80ed48650fca4e5f8a76082cc6a7bb16",
  },
  {
    firstName: "אייל (בבי)",
    lastName: "כהן",
    age: 19,
    date: "05.08.1985",
    hebrewDate: 'י"ח באב תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%99%D7%9C%20%D7%9B%D7%94%D7%9F/en_8210249f986a9390d1891157e7bcfff9",
  },
  {
    firstName: "אילן",
    lastName: "כהן",
    age: 21,
    date: "13.01.1992",
    hebrewDate: "ח' בשבט תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%9B%D7%94%D7%9F/en_27f03d17908b59f8a8a83460683bfd72",
  },
  {
    firstName: "דוד (דידי)",
    lastName: "כהן",
    age: 21,
    date: "12.03.1985",
    hebrewDate: 'י"ט באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%9B%D7%94%D7%9F/en_0e2a4140d08c7cbbb6439a4ab41a30b0",
  },
  {
    firstName: "דותן-יצחק",
    lastName: "כהן",
    age: 22,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%AA%D7%9F-%D7%99%D7%A6%D7%97%D7%A7%20%D7%9B%D7%94%D7%9F/en_719dc838d3bd26fc0553e20e0aab8f05",
  },
  {
    firstName: "טל",
    lastName: "כהן",
    age: 20,
    date: "07.02.1994",
    hebrewDate: 'כ"ו בשבט תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%98%D7%9C%20%D7%9B%D7%94%D7%9F/en_486ed9733fbfec0d407ae7bf1225d255",
  },
  {
    firstName: "יהודה",
    lastName: "כהן",
    age: 40,
    date: "26.11.1984",
    hebrewDate: "ב' בכסלו תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%9B%D7%94%D7%9F/en_feb659e6b1026ede3cad2c8733fad33d",
  },
  {
    firstName: "יהודה (אודי)",
    lastName: "כהן",
    age: 18,
    date: "03.08.1983",
    hebrewDate: 'כ"ד באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%9B%D7%94%D7%9F/en_2f93f2005918c9fe26c8dcdcca0cfdc8",
  },
  {
    firstName: "יוסף (ג'רארד)",
    lastName: "כהן",
    age: 40,
    date: "18.08.1983",
    hebrewDate: "ט' באלול תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%9B%D7%94%D7%9F/en_1e7240a99604f25786005ebb32973dc2",
  },
  {
    firstName: "יעקב",
    lastName: "כהן",
    age: 23,
    date: "27.05.1987",
    hebrewDate: 'כ"ט באייר תשמ"ז',
    izkorLink: "",
  },
  {
    firstName: "ירמי",
    lastName: "כהן",
    age: 23,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A8%D7%9E%D7%99%20%D7%9B%D7%94%D7%9F/en_c8c3c37a7fd38952f6f22388a01f821b",
  },
  {
    firstName: "מאיר (דובי)",
    lastName: "כהן",
    age: 20,
    date: "18.10.1983",
    hebrewDate: 'י"ב בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8%20%D7%9B%D7%94%D7%9F/en_7d956cec235409830566450ce4482236",
  },
  {
    firstName: "רוברט (רובי)",
    lastName: "כהן",
    age: 21,
    date: "14.03.1985",
    hebrewDate: 'כ"ב באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%91%D7%A8%D7%98%20%D7%9B%D7%94%D7%9F/en_8e74df02e16cc1b619a1d1b21076a39b",
  },
  {
    firstName: "רונן",
    lastName: "כהן",
    age: 20,
    date: "10.08.1997",
    hebrewDate: "ז' באב תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%9B%D7%94%D7%9F/en_d544244f5aae765639c8b677f5d1f22a",
  },
  {
    firstName: "רמי",
    lastName: "כהן",
    age: 24,
    date: "04.11.1982",
    hebrewDate: 'י"ח בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9B%D7%94%D7%9F%20%D7%A8%D7%9E%D7%99/en_e7ed82df00c3d2f4459e9b08323a954f",
  },
  {
    firstName: "שחר",
    lastName: "כהן",
    age: 20,
    date: "29.10.1991",
    hebrewDate: 'כ"א בחשון תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%9B%D7%94%D7%9F/en_91eb3dbb2fba38cc1ebb0b6e7f52948b",
  },
  {
    firstName: "שלמה",
    lastName: "כהן",
    age: 32,
    date: "05.08.1983",
    hebrewDate: 'כ"ו באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%9B%D7%94%D7%9F/en_b7b97d5c4736890593fe928b424236ca",
  },
  {
    firstName: "ששון",
    lastName: "כהן",
    age: 25,
    date: "14.04.1983",
    hebrewDate: "א' באייר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%A9%D7%95%D7%9F%20%D7%9B%D7%94%D7%9F/en_9df4cd495c940ca192963f8b74377464",
  },
  {
    firstName: "תום",
    lastName: "כיתאין",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%95%D7%9D%20%D7%9B%D7%99%D7%AA%D7%90%D7%99%D7%9F/en_807060d00188a57df8841a1d6922f616",
  },
  {
    firstName: "גדעון (גידי)",
    lastName: "כליף",
    age: 27,
    date: "07.12.1983",
    hebrewDate: "ב' בטבת תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%93%D7%A2%D7%95%D7%9F%20%D7%9B%D7%9C%D7%99%D7%A3/en_d60a3f63b409db1c55ce38ee05d3cf56",
  },
  {
    firstName: "מרדכי",
    lastName: "כליפה",
    age: 29,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%9B%D7%9C%D7%99%D7%A4%D7%94/en_59415bff653c26ae55489dae36145362",
  },
  {
    firstName: "עמוס",
    lastName: "כלפה",
    age: 29,
    date: "20.08.1998",
    hebrewDate: 'כ"ט באב תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%95%D7%A1%20%D7%9B%D7%9C%D7%A4%D7%94/en_6b427f89a8fed3d65145a6ad5186757a",
  },
  {
    firstName: "אורן",
    lastName: "כמיל",
    age: 19,
    date: "15.09.1987",
    hebrewDate: 'כ"ב באלול תשמ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%9F%20%D7%9B%D7%9E%D7%99%D7%9C/en_6fbd6874ea112ffe77e58f51390d3836",
  },
  {
    firstName: "חיים",
    lastName: "כנפו",
    age: 19,
    date: "08.11.1987",
    hebrewDate: 'ט"ז בחשון תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%9B%D7%A0%D7%A4%D7%95/en_1628fbebac26ad271c1e4d28add1f962",
  },
  {
    firstName: "חן",
    lastName: "כנרתי",
    age: 22,
    date: "02.03.1994",
    hebrewDate: "כ' באדר תשנ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%9F%20%D7%9B%D7%A0%D7%A8%D7%AA%D7%99/en_4911d2b7cfc0d1e73dbcc8b03aac62a5",
  },
  {
    firstName: "סאלח",
    lastName: "כעבייה",
    age: 22,
    date: "13.10.1984",
    hebrewDate: 'י"ז בתשרי תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%90%D7%9C%D7%97%20%D7%9B%D7%A2%D7%91%D7%99%D7%99%D7%94/en_70521b90fc0d57d634dcafe70a437df0",
  },
  {
    firstName: "רפי (פירוז)",
    lastName: "כשר",
    age: 20,
    date: "17.03.1985",
    hebrewDate: 'כ"ד באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%A4%D7%99%20%D7%9B%D7%A9%D7%A8/en_f747c352ec7523cf8ede97a843b1366b",
  },
  {
    firstName: "אבי",
    lastName: "לב",
    age: 18,
    date: "10.12.1982",
    hebrewDate: 'כ"ד בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%20%D7%9C%D7%91/en_2212d4ca986a8bdd64735280d95e3d4d",
  },
  {
    firstName: "גל",
    lastName: "לב-רן",
    age: 22,
    date: "29.09.1997",
    hebrewDate: 'כ"ז באלול תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%20%D7%9C%D7%91-%D7%A8%D7%9F/en_d4c9f44398815495213bff236cdff1d1",
  },
  {
    firstName: "דב (דובי)",
    lastName: "לבבי",
    age: 27,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%91%20%D7%9C%D7%91%D7%91%D7%99/en_dfe4fa886ec902b46a06a5ed996b69bc",
  },
  {
    firstName: "ישעיהו (אישי)",
    lastName: "לביא",
    age: 31,
    date: "02.01.1983",
    hebrewDate: 'י"ז בטבת תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A2%D7%99%D7%94%D7%95%20%D7%9C%D7%91%D7%99%D7%90/en_46a5c8cdcf94e4a3a91903dfe1a28c3d",
  },
  {
    firstName: "יריב",
    lastName: "להב",
    age: 22,
    date: "21.03.1985",
    hebrewDate: 'כ"ח באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A8%D7%99%D7%91%20%D7%9C%D7%94%D7%91/en_c3d58882daa2658ff2ef00b888bf4801",
  },
  {
    firstName: "אבישי",
    lastName: "לוי",
    age: 27,
    year: 1997,
    date: "04.02.1997",

    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A9%D7%99%20%D7%9C%D7%95%D7%99/en_171704cac9fd95bd4cbbca62930b092f",
  },
  {
    firstName: "אייל",
    lastName: "לוי",
    age: 20,
    date: "08.07.1993",
    hebrewDate: 'י"ט בתמוז תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%99%D7%A9%D7%99%20%D7%9C%D7%95%D7%99/en_171704cac9fd95bd4cbbca62930b092f",
  },
  {
    firstName: "דב",
    lastName: "לוי",
    age: 20,
    date: "10.02.1985",
    hebrewDate: 'י"ט בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%91%20%D7%9C%D7%95%D7%99/en_018899d6d6721956a21a19adb363d3ba",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "לוי",
    age: 21,
    date: "24.12.1996",
    hebrewDate: 'י"ד בטבת תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%9C%D7%95%D7%99/en_e8f9fb35da18e6de6cbffef6063ffed0",
  },
  {
    firstName: "יצחק (איציק)",
    lastName: "לוי",
    age: 19,
    date: "21.07.1992",
    hebrewDate: "כ' בתמוז תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%9C%D7%95%D7%99/en_b650206f3103522710686e77788e2bf8",
  },
  {
    firstName: "ישי-דב",
    lastName: "לוי",
    age: 20,
    date: "02.02.1990",
    hebrewDate: "ז' בשבט תש\"ן",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%99-%D7%93%D7%91%20%D7%9C%D7%95%D7%99/en_cc6e04f93746df978ff40efb5808cbc9",
  },
  {
    firstName: "מישאל-אייל",
    lastName: "לוי",
    age: 22,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%A9%D7%90%D7%9C-%D7%90%D7%99%D7%99%D7%9C%20%D7%9C%D7%95%D7%99/en_864f3f334e52ad62e02182e6d22a8d2d",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "לוי",
    age: 20,
    date: "03.11.1983",
    hebrewDate: 'כ"ז בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%9C%D7%95%D7%99/en_67716b7a1706d3a41b257b1247881b00",
  },
  {
    firstName: "שילה",
    lastName: "לוי",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%99%D7%9C%D7%94%20%D7%9C%D7%95%D7%99/en_20e14f9b25e5978925d79458495c3207",
  },
  {
    firstName: "רם",
    lastName: "לוינס",
    age: 22,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9D%20%D7%9C%D7%95%D7%99%D7%A0%D7%A1/en_c4e2199a5dbdcb16fe1c0607c000e779",
  },
  {
    firstName: "גל",
    lastName: "לוינסון",
    age: 21,
    date: "07.02.1994",
    hebrewDate: 'כ"ו בשבט תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%20%D7%9C%D7%95%D7%99%D7%A0%D7%A1%D7%95%D7%9F/en_389cbaeb135f172bb9ee487c7f3c2061",
  },
  {
    firstName: "דוד (דודי)",
    lastName: "לזימי",
    age: 20,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%9C%D7%96%D7%99%D7%9E%D7%99/en_5af28c117d49daa9efae63f411681e24",
  },
  {
    firstName: "מרדכי (מולו)",
    lastName: "ליבליך",
    age: 37,
    date: "23.12.1982",
    hebrewDate: "ז' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%9C%D7%99%D7%91%D7%9C%D7%99%D7%9A/en_0aea6b5d83fbc16b482aea81854f8172",
  },
  {
    firstName: "אברהם (אבי)",
    lastName: "לימואי",
    age: 21,
    date: "27.05.1998",
    hebrewDate: "ג' בסיון תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%9C%D7%99%D7%9E%D7%95%D7%90%D7%99/en_da40e497254374a1072a55cadf19bc4c",
  },
  {
    firstName: "גד (גדי)",
    lastName: "ליפסקי",
    age: 19,
    date: "22.07.1993",
    hebrewDate: "ד' באב תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%93%20%D7%9C%D7%99%D7%A4%D7%A1%D7%A7%D7%99/en_3c1b85f6b9706d67b0f1cf70492bae47",
  },
  {
    firstName: "פנחס (פיני)",
    lastName: "ליפשיץ",
    age: 34,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%A0%D7%97%D7%A1%20%D7%9C%D7%99%D7%A4%D7%A9%D7%99%D7%A5/en_9692906b7348b8e2f30083c9c6d4ec83",
  },
  {
    firstName: "יורם (ליקרמן)",
    lastName: "לירן",
    age: 35,
    date: "06.02.1983",
    hebrewDate: 'כ"ב בשבט תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A8%D7%9D%20%D7%9C%D7%99%D7%A8%D7%9F/en_1b26a4ccfbbe2324134ea4f040795559",
  },
  {
    firstName: "נדב",
    lastName: "לישצינסקי",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%93%D7%91%20%D7%9C%D7%99%D7%A9%D7%A6%D7%99%D7%A0%D7%A1%D7%A7%D7%99/en_43c25133240f64bf163f35f5be0b8f1c",
  },
  {
    firstName: "לירון",
    lastName: "לנג",
    age: 20,
    date: "31.03.1995",
    hebrewDate: 'כ"ט באדר ב\' תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%A8%D7%95%D7%9F%20%D7%9C%D7%A0%D7%92/en_692fceee843f2948a92f39f77df356c4",
  },
  {
    firstName: "דביר",
    lastName: "לניר",
    age: 22,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%91%D7%99%D7%A8%20%D7%9C%D7%A0%D7%99%D7%A8/en_72eb82617655748a6d88081624bb5ed0",
  },
  {
    firstName: "אילן",
    lastName: "לנציצקי",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%9C%D7%A0%D7%A6%D7%99%D7%A6%D7%A7%D7%99/en_d8cb9b38c3bef860a1b33894040431a8",
  },
  {
    firstName: "אמיר",
    lastName: "מאיר",
    age: 19,
    date: "08.02.2000",
    hebrewDate: "ב' באדר א' תש\"ס",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%9E%D7%90%D7%99%D7%A8/en_4eac39b321969b0863f1739ee669b9bd",
  },
  {
    firstName: "לזר",
    lastName: "מאיר",
    age: 46,
    date: "31.05.1983",
    hebrewDate: 'י"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%96%D7%A8%20%D7%9E%D7%90%D7%99%D7%A8/en_9c151b340ccce30a995a74641525730d",
  },
  {
    firstName: "חיים",
    lastName: "מדר",
    age: 36,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%9E%D7%93%D7%A8/en_9f2c324d3236c7b98f53b22b28409fa6",
  },
  {
    firstName: "יוסף",
    lastName: "מויאל",
    age: 21,
    date: "30.03.1985",
    hebrewDate: "ח' בניסן תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%9E%D7%95%D7%99%D7%90%D7%9C/en_583646511677996cc07d3de48fc7e2b8",
  },
  {
    firstName: "דוד",
    lastName: "מועלם",
    age: 18,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%9E%D7%95%D7%A2%D7%9C%D7%9D/en_63b20e92d589c5bb61fb933d8674b2e0",
  },
  {
    firstName: "משה",
    lastName: "מועלם",
    age: 32,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%9E%D7%95%D7%A2%D7%9C%D7%9D/en_89b91cff9a2394453027c36d82079865",
  },
  {
    firstName: "חסין",
    lastName: "מוקטרן",
    age: 33,
    date: "04.06.1989",
    hebrewDate: "א' בסיון תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%A1%D7%99%D7%9F%20%D7%9E%D7%95%D7%A7%D7%98%D7%A8%D7%9F/en_12d17e493013b07ca891f52c285bc0f7",
  },
  {
    firstName: "אביב",
    lastName: "מור",
    age: 20,
    date: "25.09.1995",
    hebrewDate: "א' בתשרי תשנ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%A8%20%D7%90%D7%91%D7%99%D7%91/en_bb94ad9438bc4bd2b2c60763d7b48b4b",
  },
  {
    firstName: "אילן",
    lastName: "מור",
    age: 20,
    date: "01.04.1987",
    hebrewDate: "ב' בניסן תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%9E%D7%95%D7%A8/en_bc4db113f1101c4ebfcd52edf893dc8d",
  },
  {
    firstName: "דביר-יעקב",
    lastName: "מור-חיים",
    age: 20,
    date: "24.05.1993",
    hebrewDate: "ד' בסיון תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%91%D7%99%D7%A8-%D7%99%D7%A2%D7%A7%D7%91%20%D7%9E%D7%95%D7%A8-%D7%97%D7%99%D7%99%D7%9D/en_06788ed7fb01ab19ee0a61bf52ced604",
  },
  {
    firstName: "יורם",
    lastName: "מור יוסף",
    age: 19,
    date: "26.05.1984",
    hebrewDate: 'כ"ה באייר תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A8%D7%9D%20%D7%9E%D7%95%D7%A8%20%D7%99%D7%95%D7%A1%D7%A3/en_bd03ed9dae862503669d327c3541288b",
  },
  {
    firstName: "גמיל",
    lastName: "מורד",
    age: 32,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%A8%D7%93%20%D7%92%D7%9E%D7%99%D7%9C/en_9fa6c4f8e020b24a2f734fbf008ce73a",
  },
  {
    firstName: "דניאל-ישראל",
    lastName: "מושיץ",
    age: 21,
    date: "12.03.1985",
    hebrewDate: 'י"ט באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%9E%D7%95%D7%A9%D7%99%D7%A5/en_0985c4c8edf8d17f0d1e92a001439fd9",
  },
  {
    firstName: "גלעד",
    lastName: "מושל",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%D7%A2%D7%93%20%D7%9E%D7%95%D7%A9%D7%9C/en_70a91fdeff6de035ca284db1820761ad",
  },
  {
    firstName: "רן",
    lastName: "מזומן",
    age: 22,
    date: "15.05.1997",
    hebrewDate: "ט' באייר תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9F%20%D7%9E%D7%96%D7%95%D7%9E%D7%9F/en_061e73361aacdf7afa24c00370a22702",
  },
  {
    firstName: "בועז",
    lastName: "מזר",
    age: 20,
    date: "12.10.1986",
    hebrewDate: "ט' בתשרי תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%95%D7%A2%D7%96%20%D7%9E%D7%96%D7%A8/en_e6723dae4ee298a3ce598b4b032ce6db",
  },
  {
    firstName: "אברהם",
    lastName: "מזרחי",
    age: 20,
    date: "",
    hebrewDate: "",
    izkorLink: "",
  },
  {
    firstName: "יצחק (צחי)",
    lastName: "מזרחי",
    age: 21,
    date: "30.05.1996",
    hebrewDate: 'י"ב בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%9E%D7%96%D7%A8%D7%97%D7%99/en_88ecaa1f9f4a126b432878ed08034a66",
  },
  {
    firstName: "עדי",
    lastName: "מזרחי",
    age: 33,
    date: "05.01.1983",
    hebrewDate: "כ' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%93%D7%99%20%D7%9E%D7%96%D7%A8%D7%97%D7%99/en_052199a2d264162f8d09e7277f1fbfa1",
  },
  {
    firstName: "ציון",
    lastName: "מזרחי",
    age: 24,
    date: "04.05.1988",
    hebrewDate: 'י"ז באייר תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%96%D7%A8%D7%97%D7%99%20%D7%A6%D7%99%D7%95%D7%9F/en_a2a40425b0e0f4efba44a3c1ee5b9e42",
  },
  {
    firstName: "אליהו",
    lastName: "מטלון",
    age: 40,
    date: "03.01.1985",
    hebrewDate: "י' בטבת תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%94%D7%95%20%D7%9E%D7%98%D7%9C%D7%95%D7%9F/en_f641f2d43adcf63de15ff8bd75a6453e",
  },
  {
    firstName: "אמיר",
    lastName: "מי-טל",
    age: 29,
    date: "09.12.1988",
    hebrewDate: "א' בטבת תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%9E%D7%99-%D7%98%D7%9C/en_34365a04f136a3222f911ae245ce2924",
  },
  {
    firstName: "גל",
    lastName: "מיזלס",
    age: 24,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%20%D7%9E%D7%99%D7%96%D7%9C%D7%A1/en_89e0663bd8b7223af3b2266dd6409f7c",
  },
  {
    firstName: "גד",
    lastName: "מיינפלד",
    age: 19,
    date: "26.11.1990",
    hebrewDate: "י' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%99%D7%A0%D7%A4%D7%9C%D7%93%20%D7%92%D7%93/en_221fba7de938af88ad271e28fa931da5",
  },
  {
    firstName: "ולדיסלב",
    lastName: "מיכאילוב",
    age: 22,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%9C%D7%93%D7%99%D7%A1%D7%9C%D7%91%20%D7%9E%D7%99%D7%9B%D7%90%D7%99%D7%9C%D7%95%D7%91/en_9bf64ad20721fcf4a5d108d1472d1624",
  },
  {
    firstName: "אפרים (אפי)",
    lastName: "מיכאל",
    age: 28,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A4%D7%A8%D7%99%D7%9D%20%D7%9E%D7%99%D7%9B%D7%90%D7%9C/en_df253b9a7921b23d1f7b0787c4a6837f",
  },
  {
    firstName: "אברהם (אבי)",
    lastName: "מילר",
    age: 23,
    date: "09.07.1993",
    hebrewDate: "כ' בתמוז תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%9E%D7%99%D7%9C%D7%A8/en_b96b2a90ea8c6ce03d132460f74e85a9",
  },
  {
    firstName: "דניאל (דני)",
    lastName: "מילר",
    age: 21,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%9E%D7%99%D7%9C%D7%A8/en_462c6d4cf0bdbb4541cd7d4c0e714f88",
  },
  {
    firstName: "שחר",
    lastName: "מינס",
    age: 21,
    date: "30.07.1998",
    hebrewDate: "ז' באב תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%9E%D7%99%D7%A0%D7%A1/en_f932639e82876e3176ff5d0b909cd391",
  },
  {
    firstName: "זהר",
    lastName: "מינץ",
    age: 21,
    date: "19.09.1996",
    hebrewDate: "ו' בתשרי תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%94%D7%A8%20%D7%9E%D7%99%D7%A0%D7%A5/en_b76aedcc1c211d181132e73287e97f09",
  },
  {
    firstName: "עידן",
    lastName: "מינקר",
    age: 21,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%99%D7%93%D7%9F%20%D7%9E%D7%99%D7%A0%D7%A7%D7%A8/en_e83925dd9a60c1af7a512904ff0b2226",
  },
  {
    firstName: "הלל",
    lastName: "מישייב",
    age: 20,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%9C%D7%9C%20%D7%9E%D7%99%D7%A9%D7%99%D7%99%D7%91/en_3aad69d62ec9b3d293a46e7c3f5f66fc",
  },
  {
    firstName: "גלעד-משה",
    lastName: "מישייקר",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%D7%A2%D7%93-%D7%9E%D7%A9%D7%94%20%D7%9E%D7%99%D7%A9%D7%99%D7%99%D7%A7%D7%A8/en_9ce8b8d08855ae1e8e2dc1a64f9e8265",
  },
  {
    firstName: "נדב-מנחם",
    lastName: "מלוא",
    age: 24,
    date: "06.07.1997",
    hebrewDate: "א' בתמוז תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%93%D7%91-%D7%9E%D7%A0%D7%97%D7%9D%20%D7%9E%D7%9C%D7%95%D7%90/en_673a58ac5a58f2f0e3107bac0b7de041",
  },
  {
    firstName: "רונן-ויקטור",
    lastName: "מלכה",
    age: 19,
    date: "26.02.1986",
    hebrewDate: 'י"ח באדר א\' תשמ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F-%D7%95%D7%99%D7%A7%D7%98%D7%95%D7%A8%20%D7%9E%D7%9C%D7%9B%D7%94/en_54c404ee74349cba94cbc72d6e08fc63",
  },
  {
    firstName: "צחי",
    lastName: "מלכה גרינברג",
    age: 21,
    date: "31.01.2000",
    hebrewDate: 'כ"ד בשבט תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%97%D7%99%20%D7%9E%D7%9C%D7%9B%D7%94%20%D7%92%D7%A8%D7%99%D7%A0%D7%91%D7%A8%D7%92/en_80fdd0115218eeb8cdb9d6a29dbd4d53",
  },
  {
    firstName: "שבתאי",
    lastName: "מלכי",
    age: 26,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%91%D7%AA%D7%90%D7%99%20%D7%9E%D7%9C%D7%9B%D7%99/en_c788b96ddc6d280c216c755c37144854",
  },
  {
    firstName: "דני",
    lastName: "מלמד",
    age: 21,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%20%D7%9E%D7%9C%D7%9E%D7%93/en_51f986a40c74e9b0f4691f4965726904",
  },
  {
    firstName: "יעקב (קובי)",
    lastName: "מלמד",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91%20%D7%9E%D7%9C%D7%9E%D7%93/en_888fcd35363106518208509dc1c95891",
  },
  {
    firstName: "מנדל (מישה)",
    lastName: "מלמד",
    age: 37,
    date: "09.04.1985",
    hebrewDate: 'י"ח בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A0%D7%93%D7%9C%20%D7%9E%D7%9C%D7%9E%D7%93/en_c8be69d9ef175a05ecab4950aa220e43",
  },
  {
    firstName: "ודים",
    lastName: "מלניק",
    age: 34,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%93%D7%99%D7%9D%20%D7%9E%D7%9C%D7%A0%D7%99%D7%A7/en_8ea1aef97996f3ed38c8366cf77f71d3",
  },
  {
    firstName: "אורן-אברהם",
    lastName: "מלצר",
    age: 21,
    date: "16.07.1991",
    hebrewDate: "ו' באב תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%9F-%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%9E%D7%9C%D7%A6%D7%A8/en_2a553d22c095d478f3c116878b1b9354",
  },
  {
    firstName: "אריה",
    lastName: "ממו",
    age: 25,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%94%20%D7%9E%D7%9E%D7%95/en_6ca0ab0bfca62817105336cc7e58fa36",
  },
  {
    firstName: "איתן-יעקב",
    lastName: "ממן",
    age: 26,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F-%D7%99%D7%A2%D7%A7%D7%91%20%D7%9E%D7%9E%D7%9F/en_87ee2afbb7693bbf091c2a00ccee20d7",
  },
  {
    firstName: "גיורא",
    lastName: "ממן",
    age: 19,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%95%D7%A8%D7%90%20%D7%9E%D7%9E%D7%9F/en_a73bb1e82122474a340f2c03c9695acb",
  },
  {
    firstName: "שמעון",
    lastName: "מנדיל",
    age: 26,
    date: "16.03.1983",
    hebrewDate: "ב' בניסן תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%9F%20%D7%9E%D7%A0%D7%93%D7%99%D7%9C/en_88466f96227531af322ebd6a7ba0aee3",
  },
  {
    firstName: "סלאח",
    lastName: "מעדי",
    age: 33,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%90%D7%9C%D7%97%20%D7%9E%D7%A2%D7%93%D7%99/en_1f4725dfe23f6a1bf106043efc1f2d94",
  },
  {
    firstName: "אורי",
    lastName: "מעוז",
    age: 22,
    date: "13.07.1988",
    hebrewDate: 'כ"ח בתמוז תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%9E%D7%A2%D7%95%D7%96/en_2e0d44c0e8be36e152aa36cb2a5b59c4",
  },
  {
    firstName: "ישראל",
    lastName: "מעטוף",
    age: 21,
    date: "27.05.1992",
    hebrewDate: 'כ"ד באייר תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C%20%D7%9E%D7%A2%D7%98%D7%95%D7%A3/en_9a39aeced46a711ab25f12d5a4537d48",
  },
  {
    firstName: "מרדכי הראל",
    lastName: "מעלומיה",
    age: 49,
    date: "10.06.1983",
    hebrewDate: 'כ"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%94%D7%A8%D7%90%D7%9C%20%D7%9E%D7%A2%D7%9C%D7%95%D7%9E%D7%99%D7%94/en_e8059f56e379b30b5577b851bb239c39",
  },
  {
    firstName: "יהודה",
    lastName: "מצגר",
    age: 21,
    date: "07.08.1983",
    hebrewDate: 'כ"ח באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%9E%D7%A6%D7%92%D7%A8/en_200c0d3ef2362d1c6d085b4377a1dad8",
  },
  {
    firstName: "צבי-יהודה (צביקה)",
    lastName: "מקליס",
    age: 21,
    date: "20.04.1983",
    hebrewDate: "ח' באייר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%91%D7%99-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%9E%D7%A7%D7%9C%D7%99%D7%A1/en_ea63d03d409261ddbbd4728664180689",
  },
  {
    firstName: "אלון",
    lastName: "מרון",
    age: 26,
    date: "23.12.1982",
    hebrewDate: "ז' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%95%D7%9F%20%D7%9E%D7%A8%D7%95%D7%9F/en_5fa2c465f83ab2da43202a582826b1de",
  },
  {
    firstName: "יוסף-יהודה (ספי)",
    lastName: "מרמלשטיין",
    age: 26,
    date: "14.01.1985",
    hebrewDate: 'כ"א בטבת תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%9E%D7%A8%D7%9E%D7%9C%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_3e9f73105e5a0db4f3736d9f7ae0d929",
  },
  {
    firstName: "אליהו (אלי)",
    lastName: "מרסיאנו",
    age: 32,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%94%D7%95%20%D7%9E%D7%A8%D7%A1%D7%99%D7%90%D7%A0%D7%95/en_198e578df5a0ac8f85f1aec62a09a6a7",
  },
  {
    firstName: "אברהם",
    lastName: "משה",
    age: 19,
    date: "",
    hebrewDate: "",
    izkorLink: "",
  },
  {
    firstName: "דרור",
    lastName: "משה",
    age: 22,
    date: "",
    hebrewDate: "",
    izkorLink: "",
  },
  {
    firstName: "יורם",
    lastName: "משה",
    age: 18,
    date: "10.08.1983",
    hebrewDate: "ב' באלול תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A8%D7%9D%20%D7%9E%D7%A9%D7%94/en_37e92fc36e97b69e831d313e6470f341",
  },
  {
    firstName: "עמאד",
    lastName: "נבואני",
    age: 21,
    date: "07.03.1985",
    hebrewDate: 'י"ד באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%90%D7%93%20%D7%A0%D7%91%D7%95%D7%90%D7%A0%D7%99/en_73fea43c61db76e1508457fb167366b1",
  },
  {
    firstName: "משה-מולו",
    lastName: "נגטו",
    age: 23,
    date: "03.05.1999",
    hebrewDate: 'י"ז באייר תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%9C%D7%95-%D7%9E%D7%A9%D7%94%20%D7%A0%D7%92%D7%98%D7%95/en_d27dcb85eb5054fc3f348fdc80177a19",
  },
  {
    firstName: "מעוז",
    lastName: "נגר",
    age: 20,
    date: "20.04.1985",
    hebrewDate: 'כ"ט בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A2%D7%95%D7%96%20%D7%A0%D7%92%D7%A8/en_d8c88a8f79caa99317a2982c0d771d24",
  },
  {
    firstName: "שלמה",
    lastName: "נגר",
    age: 19,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%A0%D7%92%D7%A8/en_b3d7ef9c209d718f69e720cf42e65a3d",
  },
  {
    firstName: "בנימין (בני)",
    lastName: "נהון",
    age: 21,
    date: "09.06.1983",
    hebrewDate: 'כ"ח בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A0%D7%99%D7%9E%D7%99%D7%9F%20%D7%A0%D7%94%D7%95%D7%9F/en_0883d5cea9b2b20331372f382b7b55ce",
  },
  {
    firstName: "אהד-ניר",
    lastName: "נחמיאס",
    age: 20,
    date: "27.11.1998",
    hebrewDate: "ח' בכסלו תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%94%D7%93-%D7%A0%D7%99%D7%A8%20%D7%A0%D7%97%D7%9E%D7%99%D7%90%D7%A1/en_f666d68e916e8956e76360f9b71799e8",
  },
  {
    firstName: "ליאור",
    lastName: "ניב",
    age: 21,
    date: "31.01.2000",
    hebrewDate: 'כ"ד בשבט תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%90%D7%95%D7%A8%20%D7%A0%D7%99%D7%91/en_2ee90da08e0f75b6b6125127d4965e31",
  },
  {
    firstName: "אוהד (דדי)",
    lastName: "ניסים",
    age: 20,
    date: "08.09.1994",
    hebrewDate: "ג' בתשרי תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%94%D7%93%20%D7%A0%D7%99%D7%A1%D7%99%D7%9D/en_07b27622d9647a8e5bcebe0095da5666",
  },
  {
    firstName: "יובל",
    lastName: "ניר",
    age: 22,
    date: "30.05.1997",
    hebrewDate: 'כ"ד באייר תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%91%D7%9C%20%D7%A0%D7%99%D7%A8/en_e38c21b4abb67e22642066edc4f14e92",
  },
  {
    firstName: "מוחמד",
    lastName: "נפאע",
    age: 31,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%97%D7%9E%D7%93%20%D7%A0%D7%A4%D7%90%D7%A2/en_8430f24dd3d7c448a9116b5f60fd6eb0",
  },
  {
    firstName: "גיא",
    lastName: "נתנאל",
    age: 19,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90%20%D7%A0%D7%AA%D7%A0%D7%90%D7%9C/en_13ea715847fefae2ce1b4a0dbeaeedca",
  },
  {
    firstName: "מרזוק",
    lastName: "סאבק",
    age: 44,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%96%D7%95%D7%A7%20%D7%A1%D7%90%D7%91%D7%A7/en_bf0168be944cbc806d9c0128d75e6735",
  },
  {
    firstName: "משה (שיקו)",
    lastName: "סבן",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%A1%D7%91%D7%9F/en_0cb35f62b8f5833c03e9faa8ae1c3de2",
  },
  {
    firstName: "צפריר (צפי)",
    lastName: "סגל",
    age: 20,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8%20%D7%A1%D7%92%D7%9C/en_2aedb77bb3c5c135717af1e11a15202b",
  },
  {
    firstName: "ניב",
    lastName: "סדן",
    age: 19,
    date: "30.01.1997",
    hebrewDate: 'כ"ב בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%91%20%D7%A1%D7%93%D7%9F/en_9f9f2f04bedda6217c26db0b1c956dc1יש",
  },
  {
    firstName: "ישראל-משולם",
    lastName: "סדן נפחא",
    age: 21,
    date: "08.03.1986",
    hebrewDate: 'כ"ח באדר א\' תשמ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%9E%D7%A9%D7%95%D7%9C%D7%9D%20%D7%A1%D7%93%D7%9F%20%D7%A0%D7%A4%D7%97%D7%90/en_b19714e151f94eb367b717696d301624",
  },
  {
    firstName: "גדי",
    lastName: "סואד",
    age: 20,
    date: "26.07.1993",
    hebrewDate: "ח' באב תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%93%D7%99%20%D7%A1%D7%95%D7%90%D7%93/en_af9335630b677cc7532e189e0b5b580c",
  },
  {
    firstName: "דיאב",
    lastName: "סואעד",
    age: 36,
    date: "17.09.1988",
    hebrewDate: "ו' בתשרי תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%99%D7%90%D7%91%20%D7%A1%D7%95%D7%90%D7%A2%D7%93/en_a1a226b71eed4aca59a5d45e023e8d07",
  },
  {
    firstName: "גיא",
    lastName: "סודאי",
    age: 19,
    date: "23.12.1994",
    hebrewDate: "כ' בטבת תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%90%20%D7%A1%D7%95%D7%93%D7%90%D7%99/en_52187a3df56ddb9c8bae3c52eaa44408",
  },
  {
    firstName: "יצחק",
    lastName: "סויסה",
    age: 22,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%A1%D7%95%D7%99%D7%A1%D7%94/en_3dcd3cd4a6acae6a843a66c43125759d",
  },
  {
    firstName: "שמעון",
    lastName: "סוסן",
    age: 44,
    date: "",
    hebrewDate: "",
    izkorLink: "",
  },
  {
    firstName: "יורם",
    lastName: "סופי",
    age: 18,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A8%D7%9D%20%D7%A1%D7%95%D7%A4%D7%99/en_0fef037ccd24ab235e5d3da1e829d43d",
  },
  {
    firstName: "רונן",
    lastName: "סופר",
    age: 21,
    date: "06.11.1987",
    hebrewDate: 'י"ד בחשון תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%A1%D7%95%D7%A4%D7%A8/en_6b270e6f30ff59516df03169326a3c9d",
  },
  {
    firstName: "צבי (צביקה)",
    lastName: "סטנקוב",
    age: 19,
    date: "22.12.1982",
    hebrewDate: "ה' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%91%D7%99%20%D7%A1%D7%98%D7%A0%D7%A7%D7%95%D7%91/en_984c10918e64ac3110a6650bc4e59aab",
  },
  {
    firstName: "אסף-יעקב",
    lastName: "סיבוני",
    age: 21,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3-%D7%99%D7%A2%D7%A7%D7%91%20%D7%A1%D7%99%D7%91%D7%95%D7%A0%D7%99/en_1c0316973cd90112c6509ce50888fde1",
  },
  {
    firstName: "יוסף",
    lastName: "סילוק",
    age: 20,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%A1%D7%99%D7%9C%D7%95%D7%A7/en_c4ec90ef5f513e8738abd9fe930e4ab7",
  },
  {
    firstName: "עמיר",
    lastName: "סיני",
    age: 20,
    date: "17.07.1984",
    hebrewDate: 'י"ח בתמוז תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%99%D7%A8%20%D7%A1%D7%99%D7%A0%D7%99/en_b9ed05885c813e7b01d20eb96694f04c",
  },
  {
    firstName: "ריאד",
    lastName: "סיף",
    age: 20,
    date: "22.08.1984",
    hebrewDate: 'כ"ד באב תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%99%D7%90%D7%93%20%D7%A1%D7%99%D7%A3/en_e352d9c25d5a1dffea4f53aff3b3bca8",
  },
  {
    firstName: "שמשון",
    lastName: "סלימי",
    age: 37,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A9%D7%95%D7%9F%20%D7%A1%D7%9C%D7%99%D7%9E%D7%99/en_483e017f046ec36b65444f874dac5be8",
  },
  {
    firstName: "יהודה",
    lastName: "סלם",
    age: 20,
    date: "27.05.1998",
    hebrewDate: "ג' בסיון תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%A1%D7%9C%D7%9D/en_a545fa94960de2cec20e76c0cef2b333",
  },
  {
    firstName: "משה",
    lastName: "סלע",
    age: 36,
    date: "21.12.1982",
    hebrewDate: "ה' בטבת תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%A1%D7%9C%D7%A2/en_9f37bd5ea9d6feea5b30797830f536a4",
  },
  {
    firstName: "עמית-ששון",
    lastName: "סלע",
    age: 21,
    date: "10.12.1987",
    hebrewDate: "כ' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%99%D7%AA-%D7%A9%D7%A9%D7%95%D7%9F%20%D7%A1%D7%9C%D7%A2/en_6a7e61d370367c2ff36e2eb6c2fc19b9",
  },
  {
    firstName: "אליעזר (אלי)",
    lastName: "סלפטר",
    age: 30,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8%20%D7%A1%D7%9C%D7%A4%D7%98%D7%A8/en_4d61fa243d20900ca64cfe6fa2fed79f",
  },
  {
    firstName: "אורי",
    lastName: "סמואלוב",
    age: 21,
    date: "19.08.1998",
    hebrewDate: 'כ"ז באב תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%20%D7%A1%D7%9E%D7%95%D7%90%D7%9C%D7%95%D7%91/en_3df523c4f28298b3a8f848813dd130e8",
  },
  {
    firstName: "נביל",
    lastName: "סמור",
    age: 19,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%91%D7%99%D7%9C%20%D7%A1%D7%9E%D7%95%D7%A8/en_4fa14c9517b61fbc0f6f03cb6f92ee78",
  },
  {
    firstName: "אבנר",
    lastName: "סנחאני",
    age: 20,
    date: "04.11.1982",
    hebrewDate: 'י"ח בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A0%D7%A8%20%D7%A1%D7%A0%D7%97%D7%90%D7%A0%D7%99/en_c0cf2259471e77715223e4af30f7fe4d",
  },
  {
    firstName: "פואד",
    lastName: "סעד",
    age: 33,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%95%D7%90%D7%93%20%D7%A1%D7%A2%D7%93/en_b143624a713d37cfbe8e54c818a1f798",
  },
  {
    firstName: "מרדכי",
    lastName: "סעידיאן",
    age: 23,
    date: "10.12.1982",
    hebrewDate: 'כ"ד בכסלו תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A1%D7%A2%D7%99%D7%93%D7%99%D7%90%D7%9F/en_f9bde70d1f4ac9a3d9704d8896e99515",
  },
  {
    firstName: "יואב",
    lastName: "סקל",
    age: 20,
    date: "05.09.1986",
    hebrewDate: "א' באלול תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%91%20%D7%A1%D7%A7%D7%9C/en_91f9c1ef36cda402caecd7957770b787",
  },
  {
    firstName: "וסאם",
    lastName: "סרחאן",
    age: 20,
    date: "25.10.1992",
    hebrewDate: 'כ"ח בתשרי תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%A1%D7%90%D7%9D%20%D7%A1%D7%A8%D7%97%D7%90%D7%9F/en_9922050f72ffc7ffde20342017c34dd6",
  },
  {
    firstName: "חוסין-עמיר",
    lastName: "עאמר",
    age: 31,
    date: "04.03.1996",
    hebrewDate: 'י"ג באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%95%D7%A1%D7%99%D7%9F-%D7%A2%D7%9E%D7%99%D7%A8%20%D7%A2%D7%90%D7%9E%D7%A8/en_8a46af7cd4d5b5cf78f1cc485c2dcdb4",
  },
  {
    firstName: "כרים",
    lastName: "עאמר",
    age: 23,
    date: "19.11.1982",
    hebrewDate: "ג' בכסלו תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9B%D7%A8%D7%99%D7%9D%20%D7%A2%D7%90%D7%9E%D7%A8/en_1ed4f7d8ca60f9fb8713457deab4d5d4",
  },
  {
    firstName: "ריאד",
    lastName: "עאמר",
    age: 28,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%99%D7%90%D7%93%20%D7%A2%D7%90%D7%9E%D7%A8/en_5c518c92412bd7a4eb4668c1fb80901d",
  },
  {
    firstName: "זהר-סבח",
    lastName: "עבדה",
    age: 35,
    date: "23.06.1983",
    hebrewDate: 'י"ב בתמוז תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%96%D7%94%D7%A8-%D7%A1%D7%91%D7%97%20%D7%A2%D7%91%D7%93%D7%94/en_69df9f8304eaeed919dfb4ad3f1d6b1f",
  },
  {
    firstName: "ניר",
    lastName: "עברון",
    age: 21,
    date: "07.02.1994",
    hebrewDate: 'כ"ו בשבט תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8%20%D7%A2%D7%91%D7%A8%D7%95%D7%9F/en_5708adef95b3271342e41fcb3ed71564",
  },
  {
    firstName: "ישיש",
    lastName: "עדן",
    age: 44,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%82%D7%99%D7%A9%D7%82%20%D7%A2%D7%93%D7%9F/en_31cd696e71b4963d4d532f717d687553",
  },
  {
    firstName: "אברהם אבי",
    lastName: "עובד",
    age: 31,
    date: "21.06.1983",
    hebrewDate: 'י"א בתמוז תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%A2%D7%95%D7%91%D7%93/en_011567c3fbc750a0faf0a80b49ea1d7b",
  },
  {
    firstName: "אריאל",
    lastName: "עובדיה",
    age: 21,
    date: "11.12.1994",
    hebrewDate: "ח' בטבת תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%99%D7%90%D7%9C%20%D7%A2%D7%95%D7%91%D7%93%D7%99%D7%94/en_f807c9a12f254b55063f0b30927cff76",
  },
  {
    firstName: "אמיל",
    lastName: "עווידה",
    age: 23,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%9C%20%D7%A2%D7%95%D7%95%D7%99%D7%93%D7%94/en_cd7a4ab286ba2ecca125c7d3e39f53ea",
  },
  {
    firstName: "שקד",
    lastName: "עוזרי",
    age: 25,
    date: "04.05.2000",
    hebrewDate: 'כ"ט בניסן תש"ס',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%A7%D7%93%20%D7%A2%D7%95%D7%96%D7%A8%D7%99/en_95861947c23918613ef1779cc6182ded",
  },
  {
    firstName: "חמדי",
    lastName: "עוקלה",
    age: 47,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%9E%D7%93%D7%99%20%D7%A2%D7%95%D7%A7%D7%9C%D7%94/en_7c969a84e6cb6d8868a4faf49b09d899",
  },
  {
    firstName: "רוני",
    lastName: "עזרא",
    age: 19,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%99%20%D7%A2%D7%96%D7%A8%D7%90/en_98ae279a7f7198169a18b2be29f710ba",
  },
  {
    firstName: "שרון",
    lastName: "עזריאל",
    age: 19,
    date: "23.02.1985",
    hebrewDate: "ב' באדר תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%A8%D7%95%D7%9F%20%D7%A2%D7%96%D7%A8%D7%99%D7%90%D7%9C/en_0b2ab5bdb4a8142d48dd6b7be1ba50bf",
  },
  {
    firstName: "מוחמד",
    lastName: "עיסאת",
    age: 31,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%97%D7%9E%D7%93%20%D7%A2%D7%99%D7%A1%D7%90%D7%AA/en_896f3a6a2d0f7e6abfaa492e537ab82d",
  },
  {
    firstName: "יהונתן (יוני)",
    lastName: "עמדי",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%A0%D7%AA%D7%9F%20%D7%A2%D7%9E%D7%93%D7%99/en_5a37e7fe3c9e161bb0f40855242a74bf",
  },
  {
    firstName: "דניאל (דני)",
    lastName: "עמר",
    age: 20,
    date: "18.02.1986",
    hebrewDate: "ט' באדר א' תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%A2%D7%9E%D7%A8/en_b6a6f56b154152d578a4a7fea4bb14d0",
  },
  {
    firstName: "יהודה",
    lastName: "עמר",
    age: 25,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%A2%D7%9E%D7%A8/en_0c449da2ec402af00b644b2f435234d9",
  },
  {
    firstName: "יותם",
    lastName: "ענבר",
    age: 20,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%AA%D7%9D%20%D7%A2%D7%A0%D7%91%D7%A8/en_7a8e88e75d2aea2a4bbf0344a10a8618",
  },
  {
    firstName: "נדים",
    lastName: "ענבר",
    age: 19,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%93%D7%99%D7%9D%20%D7%A2%D7%A0%D7%91%D7%A8/en_919e3bb1523c2932e77b63dbddcf0d51",
  },
  {
    firstName: "רם",
    lastName: "ענבר",
    age: 22,
    date: "20.02.1992",
    hebrewDate: 'ט"ז באדר א\' תשנ"ב',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9D%20%D7%A2%D7%A0%D7%91%D7%A8/en_016d3a3a0d1236df1a1a85f9dc5774d8",
  },
  {
    firstName: "נועם",
    lastName: "עציוני",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%95%D7%A2%D7%9D%20%D7%A2%D7%A6%D7%99%D7%95%D7%A0%D7%99/en_2a80d815bbc7eeff317a0303b9499844",
  },
  {
    firstName: "שי (שייקה)",
    lastName: "עקירב",
    age: 20,
    date: "31.08.1989",
    hebrewDate: "ל' באב תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%99%20%D7%A2%D7%A7%D7%99%D7%A8%D7%91/en_96e5911ee07358e74cd554f50319df4f",
  },
  {
    firstName: "גמאל",
    lastName: "פארס",
    age: 30,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9E%D7%90%D7%9C%20%D7%A4%D7%90%D7%A8%D7%A1/en_25308441198d3ba1d69dbccbffcfeb8c",
  },
  {
    firstName: "נאזם",
    lastName: "פארס",
    age: 26,
    date: "02.08.1983",
    hebrewDate: 'כ"ג באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%90%D7%96%D7%9D%20%D7%A4%D7%90%D7%A8%D7%A1/en_be9b40b559eb15db01bea0b5cb2f3ed9",
  },
  {
    firstName: "סלמאן",
    lastName: "פארס",
    age: 25,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%9C%D7%9E%D7%90%D7%9F%20%D7%A4%D7%90%D7%A8%D7%A1/en_acbdc1688cdc940819f28361ea71e5f3",
  },
  {
    firstName: "רביח",
    lastName: "פארס",
    age: 30,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%91%D7%99%D7%97%20%D7%A4%D7%90%D7%A8%D7%A1/en_3f478916982588f710b5e8f9fc890da7",
  },
  {
    firstName: "מוחמד-אלהייב",
    lastName: "פואז",
    age: 27,
    date: "04.03.1996",
    hebrewDate: 'י"ג באדר תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%95%D7%97%D7%9E%D7%93-%D7%90%D7%9C%D7%94%D7%99%D7%99%D7%91%20%D7%A4%D7%95%D7%90%D7%96/en_915b83ded37cbab4e5e25cfafed41878",
  },
  {
    firstName: "צביקה",
    lastName: "פוגל",
    age: 28,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%91%D7%99%D7%A7%D7%94%20%D7%A4%D7%95%D7%92%D7%9C/en_444a17253e85694818acc114dc32b90f",
  },
  {
    firstName: "גדעון",
    lastName: "פוזנר",
    age: 22,
    date: "04.02.1997",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%93%D7%A2%D7%95%D7%9F%20%D7%A4%D7%95%D7%96%D7%A0%D7%A8/en_d6890cc209594c4456ba2ee71d5e4da4",
  },
  {
    firstName: "שלמה (שלומי)",
    lastName: "פיזואתי",
    age: 19,
    date: "04.02.1997",
    hebrewDate: "",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%9E%D7%94%20%D7%A4%D7%99%D7%96%D7%95%D7%90%D7%AA%D7%99/en_a362e5bdf0c2a6f90bc35e8728baf0c3",
  },
  {
    firstName: "דן (דנסי)",
    lastName: "פיליפ",
    age: 26,
    date: "25.10.1983",
    hebrewDate: 'י"ט בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%9F%20%D7%A4%D7%99%D7%9C%D7%99%D7%A4/en_a68d2a04193624f6590f3604608b4427",
  },
  {
    firstName: "יוסף (יוסי)",
    lastName: "פינק",
    age: 21,
    date: "17.02.1986",
    hebrewDate: "ח' באדר א' תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%A3%20%D7%A4%D7%99%D7%A0%D7%A7/en_b1c44a9094fad03e434f94a56dffacf9",
  },
  {
    firstName: "אברהם-אבא (אבי)",
    lastName: "פישר",
    age: 22,
    date: "19.08.1993",
    hebrewDate: "ג' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%90%D7%91%D7%90%20%D7%A4%D7%99%D7%A9%D7%A8/en_143f5b4e23eb07e4a18b0250fe9616ad",
  },
  {
    firstName: "דוד",
    lastName: "פלד-חדד",
    age: 43,
    date: "19.03.1984",
    hebrewDate: 'ט"ו באדר ב\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%95%D7%93%20%D7%A4%D7%9C%D7%93%20%D7%97%D7%93%D7%93/en_b85760ba79a9bab2ad1ccb29f558db24",
  },
  {
    firstName: "מנחם (מני)",
    lastName: "פלדמן",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A0%D7%97%D7%9D%20%D7%A4%D7%9C%D7%93%D7%9E%D7%9F/en_9d4fc3977dbeabe33ff564469e4219a8",
  },
  {
    firstName: "משה",
    lastName: "פנדו",
    age: 38,
    date: "31.05.1983",
    hebrewDate: 'י"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%A4%D7%A0%D7%93%D7%95/en_ab92b395aea1f4e22eed066a94940457",
  },
  {
    firstName: "לירון",
    lastName: "פניני",
    age: 22,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%A8%D7%95%D7%9F%20%D7%A4%D7%A0%D7%99%D7%A0%D7%99/en_a1dcbcdde0a463508f5fb8c613d7be58",
  },
  {
    firstName: "ויטלי",
    lastName: "פסחוב",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%A1%D7%97%D7%95%D7%91%20%20%D7%95%D7%99%D7%98%D7%9C%D7%99%20/en_9259cf98b84047f1190c9de784cb1605",
  },
  {
    firstName: "שותא",
    lastName: "פפיסמידוב",
    age: 27,
    date: "03.10.1982",
    hebrewDate: 'ט"ז בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%95%D7%AA%D7%90%20%D7%A4%D7%A4%D7%99%D7%A1%D7%9E%D7%99%D7%93%D7%95%D7%91/en_399d842b6faa02657ff389262583f9c2",
  },
  {
    firstName: "אלק",
    lastName: "פרגמנט",
    age: 32,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%A7%20%D7%A4%D7%A8%D7%92%D7%9E%D7%A0%D7%98/en_2929679b79683710af2f150a8fa53be3",
  },
  {
    firstName: "רז",
    lastName: "פרומוביץ",
    age: 19,
    date: "16.11.1998",
    hebrewDate: 'כ"ח בחשון תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%96%20%D7%A4%D7%A8%D7%95%D7%9E%D7%95%D7%91%D7%99%D7%A5/en_2944f34e109efa1ce73b1a3e1e02fe00",
  },
  {
    firstName: "אורי-שרגא",
    lastName: "פרידמן",
    age: 21,
    date: "10.04.1996",
    hebrewDate: 'כ"א בניסן תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99-%D7%A9%D7%A8%D7%92%D7%90%20%D7%A4%D7%A8%D7%99%D7%93%D7%9E%D7%9F/en_ef4cdc9ccb9eaf741201d6241bdee048",
  },
  {
    firstName: "מגן",
    lastName: "פרידמן",
    age: 22,
    date: "05.10.1998",
    hebrewDate: 'ט"ו בתשרי תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%92%D7%9F%20%D7%A4%D7%A8%D7%99%D7%93%D7%9E%D7%9F/en_d6aa0f4bbd03f33bebc51dd0e75f6144",
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "פרמוטי",
    age: 21,
    date: "22.02.1988",
    hebrewDate: "ה' באדר תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C%20%D7%A4%D7%A8%D7%9E%D7%95%D7%98%D7%99/en_cfdc285838e93a2689aa571ea7f6a58a",
  },
  {
    firstName: "הרן-אליעזר",
    lastName: "פרנס",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A8%D7%9F-%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8%20%D7%A4%D7%A8%D7%A0%D7%A1/en_c9b5844d6b6b73405ba2b355ee30c51b",
  },
  {
    firstName: "צור",
    lastName: "פרנס",
    age: 21,
    date: "19.09.1996",
    hebrewDate: "ו' בתשרי תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%95%D7%A8%20%D7%A4%D7%A8%D7%A0%D7%A1/en_80826bde85be36f2a7c35028033a1c1b",
  },
  {
    firstName: "אוריאל",
    lastName: "פרץ",
    age: 22,
    date: "25.11.1998",
    hebrewDate: "ז' בכסלו תשנ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%99%D7%90%D7%9C%20%D7%A4%D7%A8%D7%A5/en_9311332ca81acef28a7b72d240cf7ac2",
  },
  {
    firstName: "ארמונד",
    lastName: "פרץ",
    age: 38,
    date: "10.08.1983",
    hebrewDate: "א' באלול תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%9E%D7%95%D7%A0%D7%93%20%D7%A4%D7%A8%D7%A5/en_1628b178efbafa5c33f41cede338d098",
  },
  {
    firstName: "ערן-חי",
    lastName: "פרץ",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F-%D7%97%D7%99%20%D7%A4%D7%A8%D7%A5/en_5360e0476d5177159097af2f24206a7a",
  },
  {
    firstName: "יפתח",
    lastName: "פשחור",
    age: 20,
    date: "09.04.1985",
    hebrewDate: 'י"ח בניסן תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A4%D7%AA%D7%97%20%D7%A4%D7%A9%D7%97%D7%95%D7%A8/en_d985ab0214f2a8482bf654848cfc5f7d",
  },
  {
    firstName: "ארן-ערן",
    lastName: "צבאג",
    age: 20,
    date: "06.12.1995",
    hebrewDate: 'י"ג בכסלו תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%9F-%D7%A2%D7%A8%D7%9F%20%D7%A6%D7%91%D7%90%D7%92/en_fb79adfc52e9ab8da5169b514549ad85",
  },
  {
    firstName: "ירון",
    lastName: "צופיוף הכהן",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A8%D7%95%D7%9F%20%D7%A6%D7%95%D7%A4%D7%99%D7%95%D7%A3%20%D7%94%D7%9B%D7%94%D7%9F/en_c393ab38586e1726529c9160d2d46c5d",
  },
  {
    firstName: "אלון",
    lastName: "צור",
    age: 30,
    date: "21.10.1984",
    hebrewDate: 'כ"ה בתשרי תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%95%D7%9F%20%D7%A6%D7%95%D7%A8/en_9ebf3246719586ffbf0aefb89d554f2c",
  },
  {
    firstName: "יונתן",
    lastName: "צירקל",
    age: 22,
    date: "30.01.1997",
    hebrewDate: 'כ"ב בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A0%D7%AA%D7%9F%20%D7%A6%D7%99%D7%A8%D7%A7%D7%9C/en_6b20e32cc6f3c7d6eef33c0e2b05139a",
  },
  {
    firstName: "יאיר",
    lastName: "צפריר",
    age: 21,
    date: "31.01.1995",
    hebrewDate: "ל' בשבט תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%A6%D7%A4%D7%A8%D7%99%D7%A8/en_0489c0af067b1603dfca7feb1d0763c9",
  },
  {
    firstName: "נפתלי",
    lastName: "צריקר",
    age: 19,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%A4%D7%AA%D7%9C%D7%99%20%D7%A6%D7%A8%D7%99%D7%A7%D7%A8/en_0ec00811ce4be50ca86204b2a3a486c8",
  },
  {
    firstName: "אמנון",
    lastName: "קדמון",
    age: 19,
    date: "26.11.1990",
    hebrewDate: "י' בכסלו תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%A0%D7%95%D7%9F%20%D7%A7%D7%93%D7%9E%D7%95%D7%9F/en_5b1c1479ca98b237997be5db0235f33b",
  },
  {
    firstName: "הדר",
    lastName: "קהתי",
    age: 19,
    date: "19.12.1994",
    hebrewDate: 'ט"ז בטבת תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%93%D7%A8%20%D7%A7%D7%94%D7%AA%D7%99/en_eed99e234962aa9c41cb9469fd783664",
  },
  {
    firstName: "נדב",
    lastName: "קובץ",
    age: 21,
    date: "17.03.1985",
    hebrewDate: 'כ"ד באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%93%D7%91%20%D7%A7%D7%95%D7%91%D7%A5/en_07ca21d4406f7c4be462892940b41651",
  },
  {
    firstName: "בן ציון",
    lastName: "קובריגרו",
    age: 38,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%9F%20%D7%A6%D7%99%D7%95%D7%9F%20%D7%A7%D7%95%D7%91%D7%A8%D7%99%D7%92%D7%A8%D7%95/en_934b83ed9bfe7c41f6feb1c64dcef1d0",
  },
  {
    firstName: "יעקב-פביאן",
    lastName: "קוזמה",
    age: 20,
    date: "08.10.1997",
    hebrewDate: "ז' בתשרי תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A2%D7%A7%D7%91-%D7%A4%D7%91%D7%99%D7%90%D7%9F%20%D7%A7%D7%95%D7%96%D7%9E%D7%94/en_b179c8aa7fa16af0dec835dc6fe182ce",
  },
  {
    firstName: "גיל",
    lastName: "קוטלר",
    age: 37,
    date: "13.02.1995",
    hebrewDate: 'י"ג באדר א\' תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%9C%20%D7%A7%D7%95%D7%98%D7%9C%D7%A8/en_aa2978032996d68bcf1d163afeafaa79",
  },
  {
    firstName: "הנרי",
    lastName: "קורץ",
    age: 29,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A0%D7%A8%D7%99%20%D7%A7%D7%95%D7%A8%D7%A5/en_68f8a331864c9a3df99da03788d9b062",
  },
  {
    firstName: "רוני-יהודה",
    lastName: "קורקוס",
    age: 20,
    date: "16.07.1991",
    hebrewDate: "ו' באב תשנ\"א",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%99-%D7%99%D7%94%D7%95%D7%93%D7%94%20%D7%A7%D7%95%D7%A8%D7%A7%D7%95%D7%A1/en_78d785346275ad6ebd0b4c06197ef617",
  },
  {
    firstName: "יוסי",
    lastName: "קורקין",
    age: 33,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%A1%D7%99%20%D7%A7%D7%95%D7%A8%D7%A7%D7%99%D7%9F/en_4b02853b7690960493dfd0423939a4e7",
  },
  {
    firstName: "פאדי",
    lastName: "קזאמל",
    age: 19,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%90%D7%93%D7%99%20%D7%A7%D7%96%D7%90%D7%9E%D7%9C/en_cbcaa2fe19bc49be725ea8d2152d4202",
  },
  {
    firstName: "פריד",
    lastName: "קזאמל",
    age: 42,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%A8%D7%99%D7%93%20%D7%A7%D7%96%D7%90%D7%9E%D7%9C/en_0bfb9d814e7e2cf4725684f6d7ff7e95",
  },
  {
    firstName: "תומר קידר",
    lastName: "צ'יז'יק",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%95%D7%9E%D7%A8%20%D7%A7%D7%99%D7%93%D7%A8%20%D7%A6%D7%99%D7%96'%D7%99%D7%A7/en_39c521879840de4df459bfb5101660c8",
  },
  {
    firstName: "עלי",
    lastName: "קיס",
    age: 20,
    date: "12.11.1992",
    hebrewDate: 'ט"ז בחשון תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9C%D7%99%20%D7%A7%D7%99%D7%A1/en_a1323034976e24e41527fa164c43a977",
  },
  {
    firstName: "שחר-יעקב",
    lastName: "קיסוס",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8-%D7%99%D7%A2%D7%A7%D7%91%20%D7%A7%D7%99%D7%A1%D7%95%D7%A1/en_c9a39499ce3d862b7e6f43862c0c8cf4",
  },
  {
    firstName: "חי",
    lastName: "קלומיטי",
    age: 19,
    date: "23.01.1993",
    hebrewDate: "א' בשבט תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%97%D7%99%20%D7%A7%D7%9C%D7%95%D7%9E%D7%99%D7%98%D7%99/en_c6d5929f586cabd7454dcce9f93d2b89",
  },
  {
    firstName: "אלמוג",
    lastName: "קליין",
    age: 21,
    date: "29.10.1994",
    hebrewDate: 'כ"ד בחשון תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%9E%D7%95%D7%92%20%D7%A7%D7%9C%D7%99%D7%99%D7%9F/en_f5aa66dd1c5a7db586228d4f519a062a",
  },
  {
    firstName: "יואל (חוליו)",
    lastName: "קלכמן",
    age: 23,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%9C%20%D7%A7%D7%9C%D7%9B%D7%9E%D7%9F/en_c83deb45943b4fa7883fb373b2eec266",
  },
  {
    firstName: "רועי",
    lastName: "קלר",
    age: 21,
    date: "09.06.1999",
    hebrewDate: 'כ"ו בסיון תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A2%D7%99%20%D7%A7%D7%9C%D7%A8/en_7cc435b92999cd844a9e6c7f93d60ba9",
  },
  {
    firstName: "רונן",
    lastName: "קמחי דוזי",
    age: 20,
    date: "04.04.1999",
    hebrewDate: 'י"ח בניסן תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%A7%D7%9E%D7%97%D7%99%20%D7%93%D7%95%D7%96%D7%99/en_9d2e9305cbb99917246c745624afce66",
  },
  {
    firstName: "שומטו",
    lastName: "קסהון",
    age: 21,
    date: "01.09.1997",
    hebrewDate: 'כ"ט באב תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%95%D7%9E%D7%98%D7%95%20%D7%A7%D7%A1%D7%94%D7%95%D7%9F/en_ef7597011f50e15b4b17ac7927e9a997",
  },
  {
    firstName: "אמיר",
    lastName: "קרא",
    age: 21,
    date: "17.05.1995",
    hebrewDate: 'י"ז באייר תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A7%D7%A8%D7%90/en_cc8ee9856efd39b78e87220ff64acff0",
  },
  {
    firstName: "גבריאל (גבי)",
    lastName: "קרואני",
    age: 18,
    date: "03.10.1982",
    hebrewDate: 'ט"ז בתשרי תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%91%D7%A8%D7%99%D7%90%D7%9C%20%D7%A7%D7%A8%D7%95%D7%90%D7%A0%D7%99/en_ae8f4cfc8af74a4f816219e60f770389",
  },
  {
    firstName: "תם",
    lastName: "קרין",
    age: 20,
    date: "24.10.1996",
    hebrewDate: 'י"ב בחשון תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%9D%20%D7%A7%D7%A8%D7%99%D7%9F/en_1598e323c08a1645d255de8e3e26d84b",
  },
  {
    firstName: "סעיד",
    lastName: "קשקוש",
    age: 30,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%A2%D7%99%D7%93%20%D7%A7%D7%A9%D7%A7%D7%95%D7%A9/en_ba8bd9a05103c2090e5d3d14b0243b5e",
  },
  {
    firstName: "רונן",
    lastName: "ראובן",
    age: 19,
    date: "17.08.1988",
    hebrewDate: "ד' באלול תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A0%D7%9F%20%D7%A8%D7%90%D7%95%D7%91%D7%9F/en_064de26006c262f7113b2195eeafa53e",
  },
  {
    firstName: "אילן",
    lastName: "רבא",
    age: 22,
    date: "10.01.1991",
    hebrewDate: 'כ"ד בטבת תשנ"א',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%A8%D7%91%D7%90/en_0e750ab200e6874aa611400e3cc5110c",
  },
  {
    firstName: "בעז",
    lastName: "רביד",
    age: 27,
    date: "04.05.1988",
    hebrewDate: 'י"ז באייר תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A2%D7%96%20%D7%A8%D7%91%D7%99%D7%93/en_ed49ab2df57dfd48b0656706a7ba6fc6",
  },
  {
    firstName: "אידור",
    lastName: "רבינוביץ'",
    age: 20,
    date: "25.11.1987",
    hebrewDate: "ה' בכסלו תשמ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%91%D7%99%D7%A0%D7%95%D7%91%D7%99%D7%A5%20%D7%90%D7%99%D7%93%D7%95%D7%A8/en_ae8db2a44a71b5c3f0754d176ec20496",
  },
  {
    firstName: "ויטאלי",
    lastName: "רדינסקי",
    age: 33,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%95%D7%99%D7%98%D7%90%D7%9C%D7%99%20%D7%A8%D7%93%D7%99%D7%A0%D7%A1%D7%A7%D7%99/en_30b4dd496af108b7a742e7c9a125d598",
  },
  {
    firstName: "ארנון",
    lastName: "רדיע",
    age: 37,
    date: "11.11.1982",
    hebrewDate: 'כ"ה בחשון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%A0%D7%95%D7%9F%20%D7%A8%D7%93%D7%99%D7%A2/en_42746cf07c60e75d8b4b91e7a094680c",
  },
  {
    firstName: "יניב",
    lastName: "רואימי",
    age: 21,
    date: "10.06.1996",
    hebrewDate: 'כ"ג בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A0%D7%99%D7%91%20%D7%A8%D7%95%D7%90%D7%99%D7%9E%D7%99/en_3b9727c105d4a1035d88322f9d7d002f",
  },
  {
    firstName: "גל",
    lastName: "רודובסקי",
    age: 20,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%20%D7%A8%D7%95%D7%93%D7%95%D7%91%D7%A1%D7%A7%D7%99/en_b8b19d0ee9169da13c66f7c2bac41d01",
  },
  {
    firstName: "מרדכי (מקסי)",
    lastName: "רוזנברג",
    age: 47,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A8%D7%95%D7%96%D7%A0%D7%91%D7%A8%D7%92/en_22b6e234c9462fe84f715285d8af6f46",
  },
  {
    firstName: "שחר",
    lastName: "רוזנברג",
    age: 20,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%A8%D7%95%D7%96%D7%A0%D7%91%D7%A8%D7%92/en_d61bd90ec47b7d5e7dc8f0ac9d80dbb3",
  },
  {
    firstName: "גיל",
    lastName: "רוזנטל",
    age: 24,
    date: "01.07.1992",
    hebrewDate: "ל' בסיון תשנ\"ב",
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%9C%20%D7%A8%D7%95%D7%96%D7%A0%D7%98%D7%9C/en_ade866129ae6143486a4bd664023dfe6",
  },
  {
    firstName: "נתנאל (נתי)",
    lastName: "רוזנטל",
    age: 20,
    date: "23.12.1994",
    hebrewDate: "כ' בטבת תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%AA%D7%A0%D7%90%D7%9C%20%D7%A8%D7%95%D7%96%D7%A0%D7%98%D7%9C/en_a2d48a559663f85e4ef8eb5caee15936",
  },
  {
    firstName: "אסף",
    lastName: "רוזנפלד",
    age: 21,
    date: "26.02.1998",
    hebrewDate: "ל' בשבט תשנ\"ח",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3%20%D7%A8%D7%95%D7%96%D7%A0%D7%A4%D7%9C%D7%93/en_db9203a0e0e19374610ce7bdc1b41547",
  },
  {
    firstName: "הלל-דוד",
    lastName: "רוזנר",
    age: 19,
    date: "18.06.1995",
    hebrewDate: "כ' בסיון תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%9C%D7%9C-%D7%93%D7%95%D7%93%20%D7%A8%D7%95%D7%96%D7%A0%D7%A8/en_435b71a37bc696328595724ad953d67e",
  },
  {
    firstName: "אלעד",
    lastName: "רוטהולץ",
    age: 21,
    date: "30.07.1991",
    hebrewDate: 'י"ט באב תשנ"א',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%A2%D7%93%20%D7%A8%D7%95%D7%98%D7%94%D7%95%D7%9C%D7%A5/en_30f4207fffb0ea93df22b555d43c1500",
  },
  {
    firstName: "אסף",
    lastName: "רוטנברג",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%A3%20%D7%A8%D7%95%D7%98%D7%A0%D7%91%D7%A8%D7%92/en_5827df3abafee600c83acd64f64ed586",
  },
  {
    firstName: "רם (רמו)",
    lastName: "רוטנברג",
    age: 22,
    date: "10.07.1999",
    hebrewDate: 'כ"ו בתמוז תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%9D%20%D7%A8%D7%95%D7%98%D7%A0%D7%91%D7%A8%D7%92/en_5a7e157b0afe7045261832b74ac336bc",
  },
  {
    firstName: "אילן",
    lastName: "רועה",
    age: 32,
    date: "28.02.1999",
    hebrewDate: 'י"ב באדר תשנ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%9F%20%D7%A8%D7%95%D7%A2%D7%94/en_1a459084643ee08927ada7c79a0522aa",
  },
  {
    firstName: "טל",
    lastName: "רז",
    age: 20,
    date: "28.12.1983",
    hebrewDate: 'כ"ב בטבת תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%98%D7%9C%20%D7%A8%D7%96/en_113dcf457801a75e6b83cdd1d69f638c",
  },
  {
    firstName: "האשם",
    lastName: "רחאל",
    age: 31,
    date: "18.06.1995",
    hebrewDate: "כ' בסיון תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%90%D7%A9%D7%9D%20%D7%A8%D7%97%D7%90%D7%9C/en_a79a91f62f7cfe18bf51ce2aa2dfd518",
  },
  {
    firstName: "כאמל",
    lastName: "רחאל",
    age: 27,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9B%D7%90%D7%9E%D7%9C%20%D7%A8%D7%97%D7%90%D7%9C/en_d772f8ffaf3976a3852d3db0c49ab070",
  },
  {
    firstName: "מאג'ד (אבו חאלד)",
    lastName: "רחאל",
    age: 35,
    date: "19.08.1993",
    hebrewDate: "ב' באלול תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%92%D7%93%20%D7%A8%D7%97%D7%90%D7%9C/en_ff3cc5e75e01d36d58e56718d22552e1",
  },
  {
    firstName: "מנצור",
    lastName: "רחאל",
    age: 24,
    date: "10.07.1986",
    hebrewDate: "ג' בתמוז תשמ\"ו",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A0%D7%A6%D7%95%D7%A8%20%D7%A8%D7%97%D7%90%D7%9C/en_98dbf81811fbb7ace74bd0a6ea6568e1",
  },
  {
    firstName: "יצחק",
    lastName: "רחימוב",
    age: 40,
    date: "21.01.1990",
    hebrewDate: 'כ"ד בטבת תש"ן',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7%20%D7%A8%D7%97%D7%99%D7%9E%D7%95%D7%91/en_11253496f3729ea9bcac9ac23864db93",
  },
  {
    firstName: "דני (ביג'ן)",
    lastName: "רחמנו",
    age: 24,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%20%D7%A8%D7%97%D7%9E%D7%A0%D7%95/en_d56478590562a08e4fdbca6cdde6f61a",
  },
  {
    firstName: "משה (מוריס)",
    lastName: "רחמני",
    age: 46,
    date: "15.05.1983",
    hebrewDate: "ג' בסיון תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%A8%D7%97%D7%9E%D7%A0%D7%99/en_ea38608eb371f42943eb8e742a3ec6bd",
  },
  {
    firstName: "יובל",
    lastName: "רטיג",
    age: 18,
    date: "01.05.1993",
    hebrewDate: "י' באייר תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%91%D7%9C%20%D7%A8%D7%98%D7%99%D7%92/en_32f9059cd18c3d4a5f6f9379cd3da524",
  },
  {
    firstName: "דניאל (דני)",
    lastName: "ריי",
    age: 19,
    date: "09.07.1993",
    hebrewDate: "כ' בתמוז תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%93%D7%A0%D7%99%D7%90%D7%9C%20%D7%A8%D7%99%D7%99/en_1e29a1740b24c6ba84b0ef9cc2124275",
  },
  {
    firstName: "מנחם (מלמל)",
    lastName: "רייך",
    age: 22,
    date: "19.04.1983",
    hebrewDate: "ח' באייר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A0%D7%97%D7%9D%20%D7%A8%D7%99%D7%99%D7%9A/en_663f7b07bc74a2759470ebdf7b909206",
  },
  {
    firstName: "רפי",
    lastName: "רייכרט",
    age: 32,
    date: "16.02.1983",
    hebrewDate: "ג' באדר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%A4%D7%99%20%D7%A8%D7%99%D7%99%D7%9B%D7%A8%D7%98/en_741e08615d4d469e26534232e322b5b0",
  },
  {
    firstName: "עמוס",
    lastName: "רימון",
    age: 40,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%9E%D7%95%D7%A1%20%D7%A8%D7%99%D7%9E%D7%95%D7%9F/en_57c55661fe78df23d2f45da365afd348",
  },
  {
    firstName: "ליאור",
    lastName: "רמון",
    age: 21,
    date: "10.06.1996",
    hebrewDate: 'כ"ג בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%90%D7%95%D7%A8%20%D7%A8%D7%9E%D7%95%D7%9F/en_aaa9e6491d830d93eeffbaf3adbf6c5c",
  },
  {
    firstName: "שחר",
    lastName: "רפאלי",
    age: 21,
    date: "09.07.1993",
    hebrewDate: "כ' בתמוז תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%97%D7%A8%20%D7%A8%D7%A4%D7%90%D7%9C%D7%99/en_0045c8ca7cb19e70e47c24cb263ff383",
  },
  {
    firstName: "ניקולאי",
    lastName: "רפופורט",
    age: 24,
    date: "07.02.1998",
    hebrewDate: 'י"א בשבט תשנ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A7%D7%95%D7%9C%D7%90%D7%99%20%D7%A8%D7%A4%D7%95%D7%A4%D7%95%D7%A8%D7%98/en_86c7d3d9c8f1093d279a6aee6a824207",
  },
  {
    firstName: "פיטר-פנחס",
    lastName: "רפופורט",
    age: 22,
    date: "13.04.1993",
    hebrewDate: 'כ"ב בניסן תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A4%D7%99%D7%98%D7%A8-%D7%A4%D7%A0%D7%97%D7%A1%20%D7%A8%D7%A4%D7%95%D7%A4%D7%95%D7%A8%D7%98/en_5fddd578fc994f7b0dcefa26b324e4e4",
  },
  {
    firstName: "גלעד",
    lastName: "שאול",
    age: 20,
    date: "14.02.1985",
    hebrewDate: 'כ"ג בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%9C%D7%A2%D7%93%20%D7%A9%D7%90%D7%95%D7%9C/en_aef66c57c84ebe578b2116226d783a97",
  },
  {
    firstName: "יותם",
    lastName: "שאולי בומבון",
    age: 19,
    date: "17.02.1995",
    hebrewDate: 'י"ח באדר א\' תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%AA%D7%9D%20%D7%A9%D7%90%D7%95%D7%9C%D7%99%20%D7%91%D7%95%D7%9E%D7%91%D7%95%D7%9F/en_b189abd285fcfe57492c88674b0b5966",
  },
  {
    firstName: "ירון שביט",
    lastName: "רקר",
    age: 21,
    date: "31.05.1983",
    hebrewDate: 'י"ט בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A8%D7%95%D7%9F%20%D7%A9%D7%91%D7%99%D7%98%20%D7%A8%D7%A7%D7%A8/en_54cce6293056af5d7519aa980e705c83",
  },
  {
    firstName: "נביל",
    lastName: "שבסו",
    age: 24,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%91%D7%99%D7%9C%20%D7%A9%D7%91%D7%A1%D7%95/en_70f882dc5fa0adc0b5cef31f7c34d019",
  },
  {
    firstName: "ליאור",
    lastName: "שבתאי",
    age: 20,
    date: "28.02.1997",
    hebrewDate: 'כ"א באדר א\' תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9C%D7%99%D7%90%D7%95%D7%A8%20%D7%A9%D7%91%D7%AA%D7%90%D7%99/en_90540249a6ae36eba54797d28cccc647",
  },
  {
    firstName: "צפריר",
    lastName: "שובל",
    age: 22,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8%20%D7%A9%D7%95%D7%91%D7%9C/en_ee8eb5d2aa06cf46ab0feb32d8b84a98",
  },
  {
    firstName: "ערן",
    lastName: "שוהם",
    age: 21,
    date: "25.10.1992",
    hebrewDate: 'כ"ח בתשרי תשנ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%A9%D7%95%D7%94%D7%9D/en_0854b3d8f8e5541b8cf72d59fba74f45",
  },
  {
    firstName: "אושרי",
    lastName: "שוורץ",
    age: 19,
    date: "28.08.1997",
    hebrewDate: 'כ"ה באב תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A9%D7%A8%D7%99%20%D7%A9%D7%95%D7%95%D7%A8%D7%A5/en_1ba9cfc05bbcba78d4ecf9f177420167",
  },
  {
    firstName: "רועי",
    lastName: "שוקרון",
    age: 21,
    date: "28.08.1997",
    hebrewDate: 'כ"ה באב תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%95%D7%A2%D7%99%20%D7%A9%D7%95%D7%A7%D7%A8%D7%95%D7%9F/en_ffb7dc46825d0386bc262ed1a66435ee",
  },
  {
    firstName: "יקיר",
    lastName: "שושי",
    age: 21,
    date: "21.03.1994",
    hebrewDate: "ט' בניסן תשנ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A7%D7%99%D7%A8%20%D7%A9%D7%95%D7%A9%D7%99/en_6d579fdfb4d1ac637c5798f215ed9b54",
  },
  {
    firstName: "גאלב",
    lastName: "שחיידם",
    age: 20,
    date: "24.07.1983",
    hebrewDate: 'י"ד באב תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%90%D7%9C%D7%91%20%D7%A9%D7%97%D7%99%D7%99%D7%93%D7%9D/en_5705963c521af62c09840ad842805f12",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "שטייר",
    age: 21,
    date: "22.10.1988",
    hebrewDate: 'י"א בחשון תשמ"ט',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%98%D7%99%D7%99%D7%A8/en_38ee80fa14fcdfae91d5506bf94d57e2",
  },
  {
    firstName: "מיכאל",
    lastName: "שטינלוף",
    age: 40,
    date: "20.10.1982",
    hebrewDate: "ג' בחשון תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%99%D7%9B%D7%90%D7%9C%20%D7%A9%D7%98%D7%99%D7%A0%D7%9C%D7%95%D7%A3/en_ebd8d4960548c33134ffef12ed28811c",
  },
  {
    firstName: "עמרם",
    lastName: "שטרית",
    age: 44,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%98%D7%A8%D7%99%D7%AA%20%D7%A2%D7%9E%D7%A8%D7%9D/en_61327da99153a43aa34a724818b52fec",
  },
  {
    firstName: "ברוך",
    lastName: "שטרן",
    age: 21,
    date: "24.04.1985",
    hebrewDate: "ג' באייר תשמ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%91%D7%A8%D7%95%D7%9A%20%D7%A9%D7%98%D7%A8%D7%9F/en_97647e01fd4ba22640ca3ec2b298b7d3",
  },
  {
    firstName: "ארז",
    lastName: "שטרק",
    age: 21,
    year: 1997,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A8%D7%96%20%D7%A9%D7%98%D7%A8%D7%A7/en_f3a1440b0e368cd045ff063ff84dd1b2",
  },
  {
    firstName: "איתמר",
    lastName: "שי",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9E%D7%A8%20%D7%A9%D7%99/en_71535ab89e8cd352442830811c4c21ec",
  },
  {
    firstName: "איתי",
    lastName: "שיבק",
    age: 21,
    date: "09.09.1989",
    hebrewDate: "י' באלול תשמ\"ט",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%99%20%D7%A9%D7%99%D7%91%D7%A7/en_ee30f0d2280ea54095e6747caf4dd7ce",
  },
  {
    firstName: "אמיר (ג'ימי)",
    lastName: "שייך",
    age: 19,
    date: "23.01.1993",
    hebrewDate: "א' בשבט תשנ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9E%D7%99%D7%A8%20%D7%A9%D7%99%D7%99%D7%9A/en_55304f2eae4e1cfef19eed7c5b09fe0c",
  },
  {
    firstName: "תומר",
    lastName: "שייחי",
    age: 19,
    date: "22.08.1991",
    hebrewDate: 'י"ג באלול תשנ"א',
    izkorLink:
      "https://www.izkor.gov.il/%D7%AA%D7%95%D7%9E%D7%A8%20%D7%A9%D7%99%D7%99%D7%97%D7%99/en_8f649cf6cb1bd014de0402eef4952dfd",
  },
  {
    firstName: "אברהם-ניסן (אבי)",
    lastName: "שכטר",
    age: 20,
    date: "24.06.1984",
    hebrewDate: 'כ"ה בסיון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%A0%D7%99%D7%A1%D7%9F%20%D7%A9%D7%9B%D7%98%D7%A8/en_13ab9cc34d779bc5cfac47a24c6e3137",
  },
  {
    firstName: "ישי",
    lastName: "שכטר",
    age: 21,
    date: "10.06.1996",
    hebrewDate: 'כ"ג בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A9%D7%99%20%D7%A9%D7%9B%D7%98%D7%A8/en_44f163ce0ed8a54cbb6dddd1753e859c",
  },
  {
    firstName: "יובל",
    lastName: "שלו",
    age: 19,
    date: "02.08.1984",
    hebrewDate: "ד' באב תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%91%D7%9C%20%D7%A9%D7%9C%D7%95/en_16a90da3f2092f6ad81b3a2111ddd252",
  },
  {
    firstName: "עומר",
    lastName: "שליט סגל",
    age: 19,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%95%D7%9E%D7%A8%20%D7%A9%D7%9C%D7%99%D7%98%20%D7%A1%D7%92%D7%9C/en_f5bdb0a565ee8241202e5c4c16dba618",
  },
  {
    firstName: "ראובן",
    lastName: "שללאשוילי",
    age: 46,
    date: "22.05.1983",
    hebrewDate: "י' בסיון תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%90%D7%95%D7%91%D7%9F%20%D7%A9%D7%9C%D7%9C%D7%90%D7%A9%D7%95%D7%99%D7%9C%D7%99/en_c1b793b138368f3b8be3529f999cc61f",
  },
  {
    firstName: "יפתח",
    lastName: "שלפוברסקי",
    age: 21,
    date: "04.02.1997",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A4%D7%AA%D7%97%20%D7%A9%D7%9C%D7%A4%D7%95%D7%91%D7%A8%D7%A1%D7%A7%D7%99/en_47e3405bb3ee44797221a5181c49c3ee",
  },
  {
    firstName: "משה",
    lastName: "שמוחה",
    age: 34,
    date: "04.11.1983",
    hebrewDate: 'כ"ח בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A9%D7%94%20%D7%A9%D7%9E%D7%95%D7%97%D7%94/en_ac7bd91cdd29c5520e91666fd393bda2",
  },
  {
    firstName: "מאיר",
    lastName: "שמול",
    age: 20,
    date: "08.02.1985",
    hebrewDate: 'י"ז בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8%20%D7%A9%D7%9E%D7%95%D7%9C/en_bfbe862255d18649af09f43e2da73421",
  },
  {
    firstName: "אייל",
    lastName: "שמח",
    age: 21,
    date: "15.10.1995",
    hebrewDate: 'כ"א בתשרי תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%99%D7%99%D7%9C%20%D7%A9%D7%9E%D7%97/en_abdac15568d4b9aa9154a0347ca5af92",
  },
  {
    firstName: "נועם",
    lastName: "שמחה",
    age: 21,
    date: "20.06.1994",
    hebrewDate: 'י"א בתמוז תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%95%D7%A2%D7%9D%20%D7%A9%D7%9E%D7%97%D7%94/en_3a9ebf83e2bd7e9599f1777fbeab99d7",
  },
  {
    firstName: "מאיר",
    lastName: "שמי",
    age: 25,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%90%D7%99%D7%A8%20%D7%A9%D7%9E%D7%99/en_b749ebc26e4f8734ff841f094df319e0",
  },
  {
    firstName: "יניב",
    lastName: "שמיאל",
    age: 20,
    date: "05.09.1997",
    hebrewDate: "ג' באלול תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A0%D7%99%D7%91%20%D7%A9%D7%9E%D7%99%D7%90%D7%9C/en_1f5777b8c70629ccd8abf83b7fac993f",
  },
  {
    firstName: "שלום (שלוה)",
    lastName: "שמילשוילי",
    age: 20,
    date: "18.10.1983",
    hebrewDate: 'י"ב בחשון תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A9%D7%9E%D7%99%D7%9C%D7%A9%D7%95%D7%99%D7%9C%D7%99/en_e15149390b9b7a3b6073925004e2a690",
  },
  {
    firstName: "ערן",
    lastName: "שמיר",
    age: 22,
    date: "15.05.1997",
    hebrewDate: "ט' באייר תשנ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A2%D7%A8%D7%9F%20%D7%A9%D7%9E%D7%99%D7%A8/en_d75a1ae1e84e07e3406368e75610097d",
  },
  {
    firstName: "ידג",
    lastName: "שמעון",
    age: 21,
    date: "28.08.1997",
    hebrewDate: 'כ"ה באב תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%93%D7%92%20%D7%A9%D7%9E%D7%A2%D7%95%D7%9F/en_cdb1dbcafbdf24a66f767a125c74ea2a",
  },
  {
    firstName: "איל",
    lastName: "שמעוני",
    age: 21,
    date: "18.09.1997",
    hebrewDate: 'ט"ז באלול תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A9%D7%9E%D7%A2%D7%95%D7%A0%D7%99%20%D7%90%D7%99%D7%9C/en_fc3da7b0a1c07a1aa4fa70816e48fd1b",
  },
  {
    firstName: "אלכסנדר (אליק)",
    lastName: "שניידרמן",
    age: 26,
    date: "10.03.1985",
    hebrewDate: 'י"ז באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%9B%D7%A1%D7%A0%D7%93%D7%A8%20%D7%A9%D7%A0%D7%99%D7%99%D7%93%D7%A8%D7%9E%D7%9F/en_571d1757445ae96a47700fdbae0777e9",
  },
  {
    firstName: "נתאי",
    lastName: "שפטס",
    age: 23,
    date: "19.09.1995",
    hebrewDate: 'כ"ד באלול תשנ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%AA%D7%90%D7%99%20%D7%A9%D7%A4%D7%98%D7%A1/en_97d871fdd2189f3f666934d7865164ad",
  },
  {
    firstName: "יואב",
    lastName: "שפיגל",
    age: 22,
    date: "04.06.1983",
    hebrewDate: 'כ"ג בסיון תשמ"ג',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%91%20%D7%A9%D7%A4%D7%99%D7%92%D7%9C/en_b5df6a70855def10fef2cf0d0b4740cd",
  },
  {
    firstName: "יצחק-יצחקי",
    lastName: "שפירא",
    age: 21,
    date: "30.05.1996",
    hebrewDate: 'י"ב בסיון תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A6%D7%97%D7%A7-%D7%99%D7%A6%D7%97%D7%A7%D7%99%20%D7%A9%D7%A4%D7%99%D7%A8%D7%90/en_84bc7f97545a6f4642161ac1d79059aa",
  },
  {
    firstName: "אורן",
    lastName: "שפר",
    age: 19,
    date: "12.02.1985",
    hebrewDate: 'כ"ב בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%95%D7%A8%D7%9F%20%D7%A9%D7%A4%D7%A8/en_28353f40d2904f0fead8ac0bcdf3aeb1",
  },
  {
    firstName: "אליעזר (אלי)",
    lastName: "שפר",
    age: 20,
    date: "04.02.1988",
    hebrewDate: 'ט"ז בשבט תשמ"ח',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%9C%D7%99%D7%A2%D7%96%D7%A8%20%D7%A9%D7%A4%D7%A8/en_f82c33908b64b00cb09dd5a4d53e34bf",
  },
  {
    firstName: "מרדכי",
    lastName: "שקדי",
    age: 48,
    date: "28.02.1984",
    hebrewDate: 'כ"ה באדר א\' תשמ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A7%D7%93%D7%99/en_8a7ee0f4b36d033061b757e391e7142c",
  },
  {
    firstName: "רתם",
    lastName: "שרביט",
    age: 20,
    date: "30.01.1997",
    hebrewDate: 'כ"ב בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%AA%D7%9D%20%D7%A9%D7%A8%D7%91%D7%99%D7%98/en_497c9212a69e8c213fe74b028d585a7f",
  },
  {
    firstName: "יואב",
    lastName: "שרון",
    age: 22,
    date: "19.04.1987",
    hebrewDate: "כ' בניסן תשמ\"ז",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%95%D7%90%D7%91%20%D7%A9%D7%A8%D7%95%D7%9F/en_c5b4006585251d036b40f61aad6e69df",
  },
  {
    firstName: "צפריר (צפי)",
    lastName: "שרוני שער",
    age: 22,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8%20%D7%A9%D7%A8%D7%95%D7%A0%D7%99%20%D7%A9%D7%A2%D7%A8/en_5197eb03073ae1d482b451cba18749d7",
  },
  {
    firstName: "ניר-מרדכי",
    lastName: "שרייבמן",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%99%D7%A8-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%99%D7%99%D7%91%D7%9E%D7%9F/en_ac806f2538c5ff4b7f8e084e1d4f7b6f",
  },
  {
    firstName: "הראל",
    lastName: "שרם",
    age: 21,
    date: "10.12.1993",
    hebrewDate: 'כ"ו בכסלו תשנ"ד',
    izkorLink:
      "https://www.izkor.gov.il/%D7%94%D7%A8%D7%90%D7%9C%20%D7%A9%D7%A8%D7%9D/en_23047134bf471d412acee131f88806c0",
  },
  {
    firstName: "גיל (גילי)",
    lastName: "שרעבי",
    age: 20,
    date: "04.02.1997",
    hebrewDate: 'כ"ח בשבט תשנ"ז',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%9C%20%D7%A9%D7%A8%D7%A2%D7%91%D7%99/en_b99b48b9e2150e0286a4d634d9138d1a",
  },
  {
    firstName: "נחמיה",
    lastName: "שרעבי",
    age: 49,
    date: "14.09.1983",
    hebrewDate: "ח' בתשרי תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%97%D7%9E%D7%99%D7%94%20%D7%A9%D7%A8%D7%A2%D7%91%D7%99/en_6b82d0ffcdb41a5f7e4547b91554daec",
  },
  {
    firstName: "גיל-מרדכי (גילי)",
    lastName: "שרף",
    age: 19,
    date: "21.03.1985",
    hebrewDate: 'כ"ח באדר תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%92%D7%99%D7%9C-%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%A9%D7%A8%D7%A3/en_8d2ea7db67b739f58b3a47b795837e40",
  },
  {
    firstName: "סעיד",
    lastName: "שרף",
    age: 33,
    date: "11.11.1982",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A1%D7%A2%D7%99%D7%93%20%D7%A9%D7%A8%D7%A3/en_fab69dbf95b3e6b0b39e1f79f3cb1383",
  },
  {
    firstName: "נתן",
    lastName: "שרפי",
    age: 19,
    date: "23.02.1984",
    hebrewDate: "כ' באדר א' תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A0%D7%AA%D7%9F%20%D7%A9%D7%A8%D7%A4%D7%99/en_2fdcbe5b3dc1db01da31599ae522f78a",
  },
  {
    firstName: "יניב",
    lastName: "ששון",
    age: 21,
    date: "03.07.1995",
    hebrewDate: "ה' בתמוז תשנ\"ה",
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%A0%D7%99%D7%91%20%D7%A9%D7%A9%D7%95%D7%9F/en_780f24250a1f59e2a896a4f2d4446ddd",
  },
  {
    firstName: "מרדכי (מוטי)",
    lastName: "תדמור",
    age: 29,
    date: "16.02.1983",
    hebrewDate: "ג' באדר תשמ\"ג",
    izkorLink:
      "https://www.izkor.gov.il/%D7%9E%D7%A8%D7%93%D7%9B%D7%99%20%D7%AA%D7%93%D7%9E%D7%95%D7%A8/en_a169a0a07db6f61c3b254ce01728a4a2",
  },
  {
    firstName: "יהודה-ליאון",
    lastName: "תובל",
    age: 40,
    date: "10.02.1985",
    hebrewDate: 'י"ט בשבט תשמ"ה',
    izkorLink:
      "https://www.izkor.gov.il/%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%9C%D7%99%D7%90%D7%95%D7%9F%20%D7%AA%D7%95%D7%91%D7%9C/en_3595e35cb66a8a3a476ca5d30fac368c",
  },
  {
    firstName: "אסלאן",
    lastName: "תחאוחו",
    age: 21,
    date: "06.08.1996",
    hebrewDate: 'כ"א באב תשנ"ו',
    izkorLink:
      "https://www.izkor.gov.il/%D7%90%D7%A1%D7%9C%D7%90%D7%9F%20%D7%AA%D7%97%D7%90%D7%95%D7%97%D7%95/en_3d17ac8d8013b2036d69a3b7ea200b63",
  },
  {
    firstName: "ראגב חסאן",
    lastName: "תחאוקי",
    age: 19,
    date: "15.11.1983",
    hebrewDate: "ט' בכסלו תשמ\"ד",
    izkorLink:
      "https://www.izkor.gov.il/%D7%A8%D7%90%D7%92%D7%91%20%D7%97%D7%A1%D7%90%D7%9F%20%D7%AA%D7%97%D7%90%D7%95%D7%A7%D7%99/en_e0463569f6e17ecba17db14da61b5bb4",
  },
];
export default FALLEN_SOLDIERS;
