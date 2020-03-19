import React, { Component } from 'react';
import { firestore } from '../firebase'
import Posts from './Posts';
import { collectIdAndDocs } from '../utilities';
import Authentication from './Authentication';
import { auth } from '../firebase';
import { createUserProfileDocument } from '../firebase'

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection('posts')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdAndDocs);
        this.setState({ posts });
      });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      const user = await createUserProfileDocument(userAuth)
      console.log(user)
      this.setState({ user: user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };

  render() {
    const { posts, user } = this.state;
    console.log(this.state.posts)
    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;








