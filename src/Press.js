import React from "react";
import PropTypes from "prop-types";
import PRESS_LIST from "./pressList";
import "./pressPage.css";
import ClipboardJS from "clipboard";
new ClipboardJS(".press-item-share");

const PressItem = ({ item }) => (
  <article className="press-item-container" id={`press${item.id}`}>
    <div className="press-item-container-padding">
      <a href={`/#/press#press${item.id}`}>
        <header className="press-item-header">
          <h1>{item.title}</h1>
        </header>
      </a>
      {item.description && (
        <div className="press-item-description">{item.description}</div>
      )}

      <div className="press-item-date">{item.date}</div>
      <p className="press-item-body">{item.body}</p>
    </div>
    <footer className="press-item-footer">
      <div className="press-item-container-padding flex">
        <div className="flex-item">{item.date}</div>
        <div
          className="press-item-share flex-item"
          data-clipboard-text={`/#/press#press${item.id}`}
        >
          שתף
        </div>
      </div>
    </footer>
  </article>
);

PressItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    link: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

const PressTwitterItem = ({ item }) => (
  <article className="press-item-container">
    <div className="press-item-container-padding">
      <p
        className="press-item-body"
        dangerouslySetInnerHTML={{ __html: item.body }}
      ></p>
    </div>
    <footer className="press-item-footer">
      <div className="press-item-container-padding flex">
        <div className="flex-item">{item.date}</div>
        <div className="press-item-share flex-item">שתף</div>
      </div>
    </footer>
  </article>
);

PressTwitterItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

class PressPage extends React.Component {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    setTimeout(() => {
      scrollToAnchor();
    }, 1000);

    window.onhashchange = scrollToAnchor;
  }

  render() {
    return (
      <>
        <header className="press-page-header-container" dir="rtl">
          <div className="press-page-header title">
            ועד הפעולה להכרה במלחמה ברצועת הביטחון
          </div>
          <div className="press-page-header subtitle">פרסומים</div>
        </header>
        <div className="press-contact" dir="rtl">
          <ul>
            <li>יוסי קאופמן (יוסיפון): yossifoon@fresh.co.il</li>
            <li>חיים הר-זהב: haimhzpr@gmail.com</li>
          </ul>
        </div>
        <div className="page" dir="rtl">
          {PRESS_LIST.map((item) =>
            item.type === "twitter" ? (
              <PressTwitterItem key={item.id} item={item} />
            ) : (
              <PressItem key={item.id} item={item} />
            )
          )}
        </div>
        <footer className="press-footer"></footer>
      </>
    );
  }
}

export default PressPage;
