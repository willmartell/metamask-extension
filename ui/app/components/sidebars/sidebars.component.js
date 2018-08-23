import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import WalletView from '../wallet-view'

export default class Sidebar extends Component {

  static propTypes = {
    sidebarOpen: PropTypes.bool,
    hideSidebar: PropTypes.func,
    transitionName: PropTypes.string,
    type: PropTypes.string,
  };

  renderOverlay () {
    return <div className="sidebar-overlay" onClick={() => this.props.hideSidebar()} />
  }

  renderSidebarContent () {
    const { type } = this.props

    switch (type) {
      case 'wallet-view':
        return <WalletView responsiveDisplayClassname={'.sidebar-right' } />
    }

  }

  render () {
    const { transitionName, sidebarOpen } = this.props

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          { sidebarOpen ? this.renderSidebarContent() : null }
        </ReactCSSTransitionGroup>
        { sidebarOpen ? this.renderOverlay() : null }
      </div>
    )
  }

}
