import React, {Component, PropTypes } from 'react';
import api from '../../api.js';


class Post extends Component{

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      user: {},
      comments: [],
    };

  }

  async componentDidMount(){
    const [
      user,
      comments
    ] = await Promise.all([
      api.users.getSingle(this.props.userId),
      api.posts.getComments(this.props.id),
    ]);

    this.setState({
      loading:false,
      user: user,
      comments
    });
  }

  render(){

    return (
      <articule id={`post-${this.props.id}`}>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.body}
        </p>
        {!this.state.loading &&(
          <div>
          {console.log(this.state.user)}
            <a href={`//${this.state.user.website}`} target="_blank" rel="nofollow">
              {this.state.user.name}
            </a>

            <span>
              Hay {this.state.comments.length} comentarios
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