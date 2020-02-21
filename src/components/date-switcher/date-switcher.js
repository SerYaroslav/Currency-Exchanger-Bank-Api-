import React from "react";
import { connect } from 'react-redux';

import {onDateSwitched} from "../../actions";

import "./date-switcher.scss";

const DateSwitcher = ({ dates, onDateSwitched }) => {
  
  const itemDate = ["today", "7 days ago", "30 days ago", "1 year ago"];
  
  return (
      itemDate.map(
        date => {
          return (
            <div className="form-check" key={date}>
              <label>
                <input
                  type="checkbox"
                  name={date}
                  value={date}
                  checked={dates.includes(date)}
                  onChange={changeEvent => {
                    console.log(dates);
                    onDateSwitched(changeEvent.target.value);
                  }}
                  className="form-check-input"
                />
                {date}
              </label>
            </div>
          );
        }
      )
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