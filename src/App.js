import React, { Component } from "react";
import "./App.css";

import logo from "./assets/facebook-1.png";
import user from "./assets/user.png";

import Post from "./components/Post";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Juliana Alcantara",
          avatar:
            "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Felipe Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Rafaela Alcantara",
          avatar:
            "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Felipe Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Fernanda Alcantara",
          avatar:
            "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Felipe Fernandes",
              avatar:
                "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <div className="fundo">
          <div className="header">
            <img src={logo} />
            <div id="boxPerfil">
              <span>Meu perfil</span>
              <img src={user} />
            </div>
          </div>
          <div id="postContent">
            {posts.map(post => (
              <Post key={post.id} data={post} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
