// "use client";

// import React from 'react'
// import type { FormEvent } from "react"
// import { Amplify } from "aws-amplify"
// import { signUp } from "aws-amplify/auth"
// import RecipeInput from '../../RecipeInput/RecipeInput';
// import RecipeButton from '../../Button/RecipeButton'
// import { withAuthenticator } from "@aws-amplify/ui-react";


// interface SignUpFormElements extends HTMLFormControlsCollection {
//   email: HTMLInputElement
//   password: HTMLInputElement
// }

// interface SignUpForm extends HTMLFormElement {
//     readonly elements: SignUpFormElements
//   }

// const SignUpForm = () => {
//     async function handleSubmit(event: FormEvent<SignUpForm>) {
//         event.preventDefault()
//         const form = event.currentTarget
//         console.log(form, 'form from signup')
//         await signUp({
//           username: form.elements.email.value,
//           password: form.elements.password.value,
//         })
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//       <RecipeInput
//       inputName="email"
//       labelName="Email"
//       value={form.username}
//       onChange={handleSubmit}
//       />
//       <RecipeInput
//         inputName="password"
//         labelName="Password"
//         value={form.password}
//         onChange={handleSubmit}
//       />      
//       <RecipeButton 
//         type="submit" 
//         variation="none"
//         colorTheme="overlay"
//         >
//           Submit
//         </RecipeButton>    
//         </form>
//   )
// }

// export default SignUpForm