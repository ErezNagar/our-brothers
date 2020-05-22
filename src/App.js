import React from "react";
import "./App.css";
import FALLEN_SOLDIERS from "./fallenSoldiers";

const App = () => (
  <div className="app">
    <header className="header">
      <p>אלו האחים שלנו</p>
    </header>
    <div className="description" dir="rtl">
      <p>
        במשרד הביטחון קיימת רשימת נופלים רשמית לכל מערכות ישראל, מששת הימים ועד
        לצוק איתן. לתקופת הלחימה בדרום לבנון אין. נאלצנו לספור אותם בעצמנו.
      </p>
      <p>
        בימים אלו מציינים 20 שנים ליציאה מרצועת הביטחון בדרום לבנון. מדינת ישראל
        לא מגדירה את התקופה הזאת, לא מחשיבה אותה כמלחמה ולא סופרת את חלליה.
      </p>
      <p>
        675 נפלו בלבנון מיום סיום מלחמת שלום הגליל (מלחמת לבנון ה-1)
        ב-29/9/1982 ועד ליום היציאה מרצועת הביטחון ב-24/5/2000.
      </p>
      <p>אלה האחים שלנו, ושוב, כמו אז, אספנו אותם.</p>
    </div>
    <div className="credit">
      הרשימה הנ"ל היא פרי עבודתם ומחקרם של יוסי קאופמן, עודד קרמר וחיים הר־זהב
    </div>
    <div className="listContainer">
      <ul>
        {FALLEN_SOLDIERS.map((soldier) => {
          let item = `${soldier.lastName} ${soldier.firstName} · בן ${soldier.age}`;
          if (soldier.year) {
            item += ` · נפל ב-${soldier.year}`;
          }
          return <li className="list-item">{item}</li>;
        })}
      </ul>
    </div>
    <footer className="footer">
      <p>יהי זכרם ברוך</p>
    </footer>
  </div>
);

export default App;
