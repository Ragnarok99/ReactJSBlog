import React, {Component, PropTypes} from 'react';
import api from '../../api.js';
import {Link} from 'react-router';
import styles from './Post.css';
class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: props.user || null,
      comments: []
    };

  }

  async componentDidMount() {
    const [user,
      comments] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      api.posts.getComments(this.props.id)
    ]);

    this.setState({
      loading: false,
      user: user || this.state.user, 
      comments});
  }

  render() {

    return (
      <article id={`post-${this.props.id}`} className={styles.post}>
        <h2 className={styles.title}>
          <Link to={`/post/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <p className={styles.body}>
          {this.props.body}
        </p>
        {!this.state.loading && (
          <div className={styles.meta}>
            <Link className={styles.user} to={`/user/${this.state.user.id}`}>
              {this.state.user.name}
            </Link>
            <span className={styles.comments}>
              Hay {this.state.comments.length}
              comentarios
            </span>
          </div>
        )}
      </article>
    )
  }
}

Post.PropTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.number
}

export default Post;