import React from 'react';
import { connect } from 'react-redux';

import {onDateSwitched} from "../../actions";

import "./date-switcher.scss";

const DateSwitcher = ({ dates, onDateSwitched }) => {
  return (
    <form>
      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name="today"
            value="today"
            defaultChecked={dates.includes("today")}
            onChange={changeEvent => {
              console.log(dates);
              onDateSwitched(changeEvent.target.value);
            }}
            className="form-check-input"
          />
          Today
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name="7 days ago"
            value="7 days ago"
            defaultChecked={dates.includes("7 days ago")}
            onChange={changeEvent => {
              console.log(dates);
              onDateSwitched(changeEvent.target.value);
            }}
            className="form-check-input"
          />
          7 days ago
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name="30 days ago"
            value="30 days ago"
            defaultChecked={dates.includes("30 days ago")}
            onChange={changeEvent => {
              console.log(dates);
              onDateSwitched(changeEvent.target.value);
            }}
            className="form-check-input"
          />
          30 days ago
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name="1 year ago"
            value="1 year ago"
            defaultChecked={dates.includes("30 days ago")}
            onChange={changeEvent => {
              console.log(dates);
              onDateSwitched(changeEvent.target.value);
            }}
            className="form-check-input"
          />
          1 year ago
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = ({ dates }) => {
  return { dates };
};

const mapDispatchToProps = dispatch => {
  return {
    onDateSwitched: switchedDate => dispatch(onDateSwitched(switchedDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateSwitcher);