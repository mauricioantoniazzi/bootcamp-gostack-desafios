import React , { Component } from 'react';


import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
          id: 1,
          author: {
          name: 'Diego Fernandes',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
          },
          content: "Acho que está contratando sim"
          },
          {
            id: 2,
            author: {
            name: 'Humberto',
            avatar: 'http://url-da-imagem.com/imagem.jpg'
            },
            content: "Mande seu curriculum pra nós"
            }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Carlos Alberto',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '05 Abr 2019',
        content: 'Pessoal, estou com dúvidas no React. Alguém me ajuda?',
        comments: [
          {
          id: 2,
          author: {
          name: 'Miguel Henrique',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
          },
          content: "Post suas dúvidas que iremos te ajudar, assim que possível."
          }
        ],
      }
    ]
  };

  render(){
    return (
      <div>
        {this.state.posts.map(post => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))}
      </div>

    )
  }
}

export default PostList;