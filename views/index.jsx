import React from 'react';

import {
  Link
} from 'react-router-dom';

var DefaultLayout = new require('./layouts/default');

const profiles = [
    {
        id:34214,
        name:"Harald"
    },
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

function getListItems() {
    var forEachData = ''
    profiles.forEach(d => forEachData += `<li><a href="/profile?id=${d.id}"</a>${d.name}</li>`)

    return forEachData;
};

function Index(props) {
    return (
        <DefaultLayout title={props.title}>
        <div>Hello hello {props.name}</div>
        <ul dangerouslySetInnerHTML={{__html: getListItems()}}></ul>
        </DefaultLayout>
    );
}

module.exports = Index;