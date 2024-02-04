import React from 'react'

import {useLoaderData, useParams} from "@remix-run/react"


import {db} from 'app/services/db.js'



  export const loader = async ({params}) => {

  const post = await db.Post.findUnique({
  
   where: {

    id: params.createid
   }

  


  })
return {post}

  }
  
  
  
  
  export default function SinglePost() {


 const {post} = useLoaderData()

  return (
    <div>
        <h1>Tarea creada </h1>
         
        <h2> {post.title}</h2>

        <p>{post.body}</p>
      
    </div>
  )
}
