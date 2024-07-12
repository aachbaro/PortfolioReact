# PortfolioReact
Projet test pour apprendre le FrameWork React, realisation de mon portfolio

Le site web comportera une page d'accueil, une page d'exposition de dessins et un page pour streamer mes musiques,

https://www.youtube.com/watch?v=mLZDzZgoCC4&t=1761s

1 - Mise en place du projet avec vite

npm create vite@latest
npm install
npm run dev

2 - Realisation de la NavBar

a - npm install react-router-dom

b - instanciation du router : (/src/components/NavBar.tsx)
const router = createBrowserRouter([
  {
    path: "/"
    element: (
    <div>
      <nav>
        <Link to="/"> Accueil</Link>
      </nav>
      <HomePage /> #Appel du composant de la page actuelle
    </div>
    )
  },
  {
    etc...
  },
])

c - Appel du router dans le composant React: 
<RouterProvider router={router} />

3 - Creation de la page de dessins: (/src/components/DrwaingPage.tsx)



