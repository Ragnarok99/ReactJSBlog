import React, { Component } from 'react';
import { Link } from 'react-router';
import api from '../../api.js';
import Post from '../../posts/containers/Post.jsx'

import styles from './Page.css';

class Home extends Component {


constructor(props){
  super(props);
  this.state = {
    page: 1,
    posts: [],
    loading: true,
  };
}

async componentDidMount(){
  const posts = await api.posts.getList(this.state.page);

  this.setState({
    posts,
    page: this.setState.page + 1,
    loading: false
  })
}

  render(){
    return (
      <section className={styles.section} name="Home">
          <section className={styles.list}>
            {this.state.loading && (
              <h2>Loading posts...</h2>
            )}

            {this.state.posts
              .map(post => <Post key={post.id} {...post} />)}
          </section>
        
        </section>
    );
  }
}

export default Home;
