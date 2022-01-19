import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import {
  Link
} from 'react-router-dom';

import DefaultLayout from './layouts/default';

/*
function Profile(props) {
  const url = 'https://api.svømmetider.dk/personlige-rekorder?swimmer_id=34214&token=5c3f1ed54c58adee4368121ec506442b';
  const [books, setBooks] = useState(null);
}
*/


class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  fetchUsersWithFetchAPI = () => {
    this.setState({...this.state, isFetching: true});
    fetch(USER_SERVICE_URL)
        .then(response => response.json())
        .then(result => {
            this.setState({users: result, isFetching: false})
        })
        .catch(e => {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        });
  };
  fetchUsers = this.fetchUsersWithFetchAPI

  componentDidMount() {
    console.log('componentDidMount...');
    this.fetchUsers();

    /*
    fetch('https://api.svømmetider.dk/personlige-rekorder?swimmer_id=34214&token=5c3f1ed54c58adee4368121ec506442b')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
    */
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
  /*
  render(){
    return (
      <DefaultLayout title={this.props.title} script={'/js/profile.js'}>
        <div>Hello there {this.props.name}</div>
      </DefaultLayout>
    );
  }
  */
}

export default Profile;