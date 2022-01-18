import React from 'react';

import {
  Link
} from 'react-router-dom';

var DefaultLayout = require('./layouts/default');

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultLayout title={this.props.title}>
            <div>Hello {this.props.name}</div>
          </DefaultLayout>
        );
    }
}
