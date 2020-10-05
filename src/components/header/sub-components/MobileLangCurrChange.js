import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { changeCurrency } from "../../../redux/actions/currencyActions";

const MobileLangCurrChange = ({
  currency,
  changeCurrency,
  currentLanguageCode,
  dispatch
}) => {
  
  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Currency</span>
      </div>
    </div>
  );
};

MobileLangCurrChange.propTypes = {
  changeCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrency: currencyName => {
      dispatch(changeCurrency(currencyName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileLangCurrChange);
