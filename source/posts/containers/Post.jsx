import React, {Component, PropTypes} from 'react';
import api from '../../api.js';
import {Link} from 'react-router';

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
      <articule id={`post-${this.props.id}`}>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.body}
        </p>
        {!this.state.loading && (
          <div>
            <Link to={`/user/${this.state.user.id}`}>
              {this.state.user.name}
            </Link>
            <span>
              Hay {this.state.comments.length}
              comentarios
            </span>
          </div>
        )}
      </articule>
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