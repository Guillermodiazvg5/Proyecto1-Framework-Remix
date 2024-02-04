import { Form, json, redirect, useRouteError } from "@remix-run/react";



import { useNavigation ,useActionData } from '@remix-run/react';



import { db } from "app/services/db.js";





const badRequest = data => {

  return json(data , {status:400})

}




export const action = async ({ request }) => {
  const form = await request.formData();

  const title = form.get("title");

  const body = form.get("body");

 


 const fieldErrors = {
 
  title: title.length < 3 ? 'El titulo debe contener mas de 3 caracteres ' : null,
  body: body.length < 10 ? 'La descripcion debe contener mas de 10 caracteres' : null

 }

 const hasErros = Object.values(fieldErrors).some(Boolean)

  const fields = {body , title}


  if(hasErros){

    return badRequest({fieldErrors, fields})
  }

  console.log({ fields });
  const post = await db.Post.create({ data :fields });

  return redirect(`/${post.id} `);
};

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div>
      <strong>😢 Algo salió mal: </strong>
      <span style={{ color: "red" }}> {error.message} </span>
    </div>
  );
}

export default function Create() {

  const {state} = useNavigation();

 const actionData = useActionData()

 const {fieldErrors} = actionData ?? {}
 const {title: titleError , body: bodyError} = fieldErrors ?? {}


  const isSubmitting = state === 'submitting'

  return (
    <>
      <h2>Crear nueva tarea</h2>
      <Form method="POST" disabled={isSubmitting}>
        <div>
          <label htmlFor="title"> Title : </label>
          <input
            placeholder="Titulo de la tarea"
            type="text"
            id="title"
            name="title"
          />
          <br></br>
          {titleError && <small style={{color:'red'}}>{titleError}</small> }
        </div>

        <div>
          <label htmlFor="body">Content: </label>
          <textarea
            placeholder="Descripcion de la tarea "
            type="text"
            id="body"
            name="body"
          />
          <br></br>
          {bodyError && <small style={{color:'red'}}>{bodyError}</small> }
        </div>

        <button disabled={isSubmitting} type="submit"> 
        {isSubmitting
        ? 'Espera ...'
        : 'Crear tarea'}
         </button>
      </Form>
    </>
  );
}
