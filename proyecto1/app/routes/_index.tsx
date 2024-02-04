import type { MetaFunction } from "@remix-run/node";

import { Link, useLoaderData } from "@remix-run/react";

import { db } from "app/services/db.js";

{
  /* instancia Prisma client utlizando el adaptador frl controlador  */
}

export const loader = async () => {
  const posts = await db.Post.findMany();

  {
    /*

 const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore officiis nisi fuga dolore libero, aliquid minima iusto temporibus aperiam velit iure neque exercitationem quisquam a fugit non quam earum.",
      },

      {
        id: 1,
        title: "Post 2",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },



    ],
  };


*/
  }

  return { posts };
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix 🌐 </h1>

      <nav>
        <ul>
          <li>
            <Link to="/about"> Ir a About </Link>
          </li>

          <li>
            <Link to="/create"> Ir a crear user </Link>
          </li>

          {/** 
        <li>

         <Link  to="/posts/new"> ~ Ir a cear tasts</Link>


        </li>

        */}

          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </nav>
      <br></br>

      <h1>Tareas pendientes </h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
