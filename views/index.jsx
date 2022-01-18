import React from 'react';

import {
  Link
} from 'react-router-dom';

var DefaultLayout = require('./layouts/default');

const profiles = [
    {
        id:123,
        name:"Svømmer A"
    },
    {
        id:123,
        name:"Svømmer B"
    },
    {
        id:123,
        name:"Svømmer C"
    },
    {
        id:123,
        name:"Svømmer D"
    },
    {
        id:123,
        name:"Svømmer E"
    },
    {
        id:123,
        name:"Svømmer F"
    },
    {
        id: 123,
        name:"Svømmer G"
    },
];


export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    getListItems() {
        var forEachData = ''
        profiles.forEach(d => forEachData += `<li><a href="/profile?id=${d.id}"</a>${d.name}</li>`)

        return forEachData;
    };

    render() {
        return (
            <DefaultLayout title={this.props.title}>
            <div>Hello {this.props.name}</div>
            <ul dangerouslySetInnerHTML={{__html: this.getListItems()}}></ul>
          </DefaultLayout>
        );
    }
}