import PropTypes from "prop-types";
import React from "react";
// import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = () => {
  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency use-style">
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  changeCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
