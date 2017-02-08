import React, { Component } from 'react';
import TypedCharacter from './TypedCharacter';
import './TypingTracker.sass';
import Statistics from '../statistics/Statistics';
import TypingDashboard from '../statistics/TypingDashboard';
import ProgressBar from '../statistics/ProgressBar';

export default class TypingTracker extends Component {
  constructor(props) {
    super();

    this.state = {
      lastEventDate: new Date().getTime(),
      statistics: new Statistics(props.exercise)
    };

    this.handleChange = this.handleChange.bind(this);
    this._renderLines = this._renderLines.bind(this);
    this.onNewLine = this.onNewLine.bind(this);
  }

  onNewLine() {
    this.textDiv.scrollTop += 70;
  }

  handleChange(event) {
    const newContent = event.target.value;
    const index = this.props.exercise.handleInputEvent(newContent);

    //TODO: should work with lines
    if (index > 31 && index % 31 === 0 ) {
      this.onNewLine();
    }

    /* update statistics */
    const now = new Date().getTime();
    // const latency = now - this.state.lastEventDate;
    //this.state.statistics.addKeyStroke(success, latency);

    /* updating state */
    this.setState({
      lastEventDate: now
    });

    if(newContent.length === this.props.exercise.getLength()) {
      this.props.endCallback();
    }
  }
  _renderLines() {
    return this.props.exercise.getLines().map((line, lindex) => {
      return (
        <div className="rtypist__exercise-manager__typing-tracker__text__line" key={lindex}>
          {line.map((index) => {
              return <TypedCharacter
                  key={index}
                  character={this.props.exercise.getCharacters()[index]}
              />
          })}
        </div>
      );
      });
  }

  render() {
    return (
        <div className="rtypist__exercise-manager__typing-tracker">
            <TypingDashboard statistics={this.state.statistics} />
            <div className="rtypist__exercise-manager__typing-tracker__text"
                ref={(div) => { this.textDiv = div; }}>
                {this._renderLines()}
            </div>
            <ProgressBar statistics={this.state.statistics} />
            <textarea
                ref={textarea => textarea && textarea.focus() }
                type="text"
                autoComplete="off"
                onInput={this.handleChange}
                autoFocus
            />
        </div>
    );
  }
}
