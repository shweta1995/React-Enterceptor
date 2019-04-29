/**
 * User Profile Page
 */
/* eslint-disable */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

// Components
import Profile from './component/Profile';
import EmailPrefrences from './component/EmailPrefrences';
import Messages from './component/Messages';
import Address from './component/Address';
import UserBlock from './component/UserBlock';

// rct card box
import { RctCard } from '../../../components/RctCard';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// For Tab Content
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class UserProfile extends Component {

  state = {
    activeTab: this.props.location.state ? this.props.location.state.activeTab : 0
  }

  handleChange = (event, value) => {
    this.setState({ activeTab: value });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="userProfile-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.userProfile" />} match={this.props.match} />
        <RctCard>
          <UserBlock />
          <div className="rct-tabs">
            <AppBar position="static">
              <Tabs value={activeTab} onChange={this.handleChange} scrollable scrollButtons="off">
                <Tab icon={<i className="ti-user"></i>} label={<IntlMessages id="components.myProfile" />} />
                <Tab icon={<i className="ti-email"></i>} label={<IntlMessages id="components.emailPrefrences" />} />
                <Tab icon={<i className="ti-comment-alt"></i>} label={<IntlMessages id="widgets.messages" />} />
                <Tab icon={<i className="ti-home"></i>} label={<IntlMessages id="components.address" />} />
              </Tabs>
            </AppBar>
            {activeTab === 0 &&
              <TabContainer>
                <Profile />
              </TabContainer>}
            {activeTab === 1 &&
              <TabContainer>
                <EmailPrefrences />
              </TabContainer>}
            {activeTab === 2 &&
              <TabContainer>
                <Messages />
              </TabContainer>}
            {activeTab === 3 &&
              <TabContainer>
                <Address />
              </TabContainer>}
          </div>
        </RctCard>
      </div>
    );
  }
}
