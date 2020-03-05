import React, { Component, MouseEvent } from "react"

export class Button extends Component {
  handleClick(event: MouseEvent) {
    event.preventDefault()
    alert(event.currentTarget.tagName) // alerts BUTTON
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>
  }
}
