// @flow

import React, { Component, PropTypes } from 'react';
import typeof { setSecPerHour } from '../actions';
import type { InputEvent } from '../types';

type Props = {
  secperhour: number,
  actions: {
    setSecPerHour: setSecPerHour
  },
  maxsecperhour: number,
  min: number,
  step: number
}

export default class SpeedRange extends Component<Props> {

  static defaultProps = {
    maxsecperhour: 3600,
    min: 1,
    step: 1
  }

  // static propTypes = {
  //   secperhour: PropTypes.number.isRequired,
  //   actions: PropTypes.objectOf(PropTypes.func).isRequired,
  //   maxsecperhour: PropTypes.number,
  //   min: PropTypes.number,
  //   step: PropTypes.number,
  // }

  setSecPerHour(e : InputEvent) {
    const value = Number(e.target.value);
    const { maxsecperhour, min, actions } = this.props;
    const secperhour = (maxsecperhour + min) - Math.floor(value);
    actions.setSecPerHour(secperhour);
  }

  render() {
    const { secperhour, maxsecperhour, min, step } = this.props;

    return (
      <input
        type="range"
        value={(maxsecperhour + min) - secperhour}
        min={min} max={maxsecperhour} step={step}
        onChange={this.setSecPerHour.bind(this)}
      />
    );
  }
}
