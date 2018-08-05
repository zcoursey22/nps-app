import React, { Component } from 'react';
import styled from 'styled-components';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (e.target.tagName !== 'A') {
      this.setState({
        expanded: !this.state.expanded,
      });
    }
  }

  render() {
    const AlertContainer = styled.li`
      margin: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eaeaea;
      border: 1px solid #ddd;
      border-radius: 3px;
      box-shadow: 4px 4px 5px 1px #bbb;
      &:hover {
        cursor: pointer;
        > div {
          background: #f7f7f7;
        }
        > div#arrow > img {
          background: #f7f7f7;
        }
      }
      > img#icon {
        width: 50px;
        padding: 10px 15px;
        align-self: flex-start;
      }
      > div#arrow {
        flex-grow: 0;
        padding: 0;
        align-self: stretch;
        > img {
          width: 50px;
          padding: 10px 15px;
          background: white;
        }
      }
      > div {
        background: white;
        padding: 11px;
        flex-grow: 1;
        > p {
          font-size: 15px;
          display: ${this.state.expanded ? 'auto' : 'none'}
          padding-top: 5px;
          padding-bottom: 3px;
        }
        > a {
          color: #666;
          font-size: 14px;
          text-decoration: underline;
          display: ${this.state.expanded ? 'auto' : 'none'}
          &:hover {
            color: #999;
          }
        }
      }
    `;

    let icon = null;
    if (this.props.alert.category === 'Information') {
      icon = (
        <img id="icon" src="https://image.flaticon.com/icons/svg/189/189664.svg"/>
      );
    } else if (this.props.alert.category === 'Park Closure') {
      icon = (
        <img id="icon" src="https://image.flaticon.com/icons/svg/564/564619.svg"/>
      );
    }

    return (
      <AlertContainer onClick={e => this.clickHandler(e)}>
        {icon}
        <div>
          <h4>{this.props.alert.title}</h4>
          <p>{this.props.alert.description}</p>
          <a target="_blank" href={this.props.alert.url}>Read more</a>
        </div>
        <div id="arrow">
          {<img src={this.state.expanded ? 'https://www.iconsdb.com/icons/preview/light-gray/arrow-204-xxl.png' : 'https://www.iconsdb.com/icons/preview/light-gray/arrow-25-xxl.png'} />}
        </div>
      </AlertContainer>
    );
  }
};

export default Alert;
