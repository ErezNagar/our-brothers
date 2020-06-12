import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import izkorLogo from "./izkor.png";
import FALLEN_SOLDIERS from "./fallenSoldiers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Press from "./Press";

const SortButton = ({ text, onClick, isActive }) => (
  <button
    className={isActive ? "button-sort active" : "button-sort"}
    onClick={onClick}
  >
    {text}
  </button>
);
SortButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
SortButton.defaultProps = {
  isActive: false,
};

const ListItemComponent = ({ soldier }) => {
  const delimiter = " · ";
  const ageString = `בן ${soldier.age}`;
  const dateString = soldier.date
    ? `${delimiter}נפל ב-${soldier.date}, ${soldier.hebrewDate}`
    : "";
  return (
    <li className="list-item">
      <div>{`${soldier.lastName} ${soldier.firstName}`}</div>
      <div className="list-item details" dir="rtl">
        {`${ageString}${dateString}`}
        {soldier.izkorLink && (
          <>
            {" · "}
            <a
              href={soldier.izkorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="izkor-logo"
                src={izkorLogo}
                alt="עמוד יזכור"
                title="עמוד יזכור"
              />
              <span className="izkor">{" עמוד יזכור"}</span>
            </a>
          </>
        )}
      </div>
    </li>
  );
};
ListItemComponent.propTypes = {
  soldier: PropTypes.shape({
    id: PropTypes.number.isRequired,
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    date: PropTypes.string,
    hebrewDate: PropTypes.string,
    izkorLink: PropTypes.string,
  }).isRequired,
};

export default class App extends React.Component {
  state = {
    isSortByLastName: true,
    isSortByFirstName: false,
    isSortByAge: false,
    isSortByDate: false,
  };

  sortByDate = () =>
    FALLEN_SOLDIERS.filter((soldier) => soldier.date !== "").sort((a, b) => {
      var datePartsA = a.date.match(/(\d+)/g);
      var datePartsB = b.date.match(/(\d+)/g);
      const dateA = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
      const dateB = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]);
      return dateA - dateB;
    });

  sortByAge = () => FALLEN_SOLDIERS.sort((a, b) => a.age - b.age);

  sortByFirstName = () =>
    FALLEN_SOLDIERS.sort((a, b) =>
      a.firstName.localeCompare(b.firstName, "he-IL")
    );

  sortByLastName = () =>
    FALLEN_SOLDIERS.sort((a, b) =>
      a.lastName.localeCompare(b.lastName, "he-IL")
    );

  handleSortByLastName = (e) => {
    this.setState({
      isSortByLastName: true,
      isSortByFirstName: false,
      isSortByAge: false,
      isSortByDate: false,
    });
  };

  handleSortByFirstName = (e) => {
    this.setState({
      isSortByLastName: false,
      isSortByFirstName: true,
      isSortByAge: false,
      isSortByDate: false,
    });
  };

  handleSortByAge = (e) => {
    this.setState({
      isSortByLastName: false,
      isSortByFirstName: false,
      isSortByAge: true,
      isSortByDate: false,
    });
  };

  handleSortByDate = (e) => {
    this.setState({
      isSortByLastName: false,
      isSortByFirstName: false,
      isSortByAge: false,
      isSortByDate: true,
    });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <p>אלו האחים שלנו</p>
        </header>
        <div className="description" dir="rtl">
          <p>
            במשרד הביטחון קיימת רשימת נופלים רשמית לכל מערכות ישראל, מששת הימים
            ועד לצוק איתן. לתקופת הלחימה בדרום לבנון אין. נאלצנו לספור אותם
            בעצמנו.
          </p>
          <p>
            בימים אלו מציינים 20 שנים ליציאה מרצועת הביטחון בדרום לבנון. מדינת
            ישראל לא מגדירה את התקופה הזאת, לא מחשיבה אותה כמלחמה ולא סופרת את
            חלליה.
          </p>
          <p>
            675 נפלו בלבנון מיום סיום מלחמת שלום הגליל (מלחמת לבנון ה-1)
            ב-29/9/1982 ועד ליום היציאה מרצועת הביטחון ב-24/5/2000.
          </p>
          <p>אלה האחים שלנו, ושוב, כמו אז, אספנו אותם.</p>
        </div>
        <div className="credit">
          הרשימה הנ"ל היא פרי עבודתם ומחקרם של יוסי קאופמן, עודד קרמר וחיים
          הר־זהב
        </div>
        <div className="listContainer">
          <div className="sort-container">
            <div className="sort-title">מיין לפי:</div>
            <div className="sort-option">
              <SortButton
                text={"שם משפחה"}
                onClick={this.handleSortByLastName}
                isActive={this.state.isSortByLastName}
              />
            </div>
            <div className="sort-option">
              <SortButton
                text={"שם פרטי"}
                onClick={this.handleSortByFirstName}
                isActive={this.state.isSortByFirstName}
              />
            </div>
            <div className="sort-option">
              <SortButton
                text={"גיל"}
                onClick={this.handleSortByAge}
                isActive={this.state.isSortByAge}
              />
            </div>
            <div className="sort-option">
              <SortButton
                text={"תאריך נפילה"}
                onClick={this.handleSortByDate}
                isActive={this.state.isSortByDate}
              />
            </div>
          </div>
          <ul>
            {this.state.isSortByLastName &&
              this.sortByLastName().map((soldeir) => (
                <ListItemComponent key={soldeir.id} soldier={soldeir} />
              ))}
            {this.state.isSortByFirstName &&
              this.sortByFirstName().map((soldeir) => (
                <ListItemComponent key={soldeir.id} soldier={soldeir} />
              ))}
            {this.state.isSortByAge &&
              this.sortByAge().map((soldeir) => (
                <ListItemComponent key={soldeir.id} soldier={soldeir} />
              ))}
            {this.state.isSortByDate &&
              this.sortByDate().map((soldeir) => (
                <ListItemComponent key={soldeir.id} soldier={soldeir} />
              ))}
          </ul>
        </div>
        <footer className="footer">
          <p className="footer-top">יהי זכרם ברוך</p>
          <ul className="footer-bottom">
            <li>
              <a
                href="mailto: erez.nagar@gmail.com"
                rel="noopener noreferrer"
                alt="Email: erez.nagar@gmail.com"
                title="צור קשר"
              >
                <svg
                  className="footer-link-svg"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="mail"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                </svg>
                צור קשר
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ErezNagar/our-brothers"
                target="_blank"
                rel="noopener noreferrer"
                alt="Github"
                title="עמוד גיטהאב"
              >
                <svg
                  className="footer-link-svg"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="github"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
                גיטהאב
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
