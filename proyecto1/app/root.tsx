import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import general from 'app/styles/general.css'


{/* 
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    
    {
    
     rel: "stylesheet", 
     href: cssBundleHref 
    
    },

    {
    
      rel: "stylesheet", 
      href: "https://cdn.simplecss.org/simple.min.css" 
     
     }

    
  
  ] : []),

];

*/}

export const links =()=>([

{
  rel: "stylesheet", 
  href: general

},

{
    
  rel: "stylesheet", 
  href: "https://cdn.simplecss.org/simple.min.css" 
 
 }

]);



function Layout() {

  return (
    <>
      <header>

        
        <Link to='/'  >

        <h1>Aplicacion de Pueba # 1   </h1>

        </Link>


      <nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/create">Create</a>
  <a href="/notes">Notes</a>
  <a href="/guestbook">Guestbook</a>
  <a href="/contact">Contact</a>
</nav>


      </header>

      <br></br>



      {/* Rutas para  Navegacion interna de la pagina   */}

      <Outlet />
      
      
      
      <footer>Copyright 2024  proyecto1 all Copynot</footer>
    </>
  )
}


export default function  App() {
  return (
    <html lang="en">
      
      <head>
        <title>Aplicacion de Prueba </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        </head>

      <body>


        <Layout></Layout>


        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>

    </html>
  );
}
