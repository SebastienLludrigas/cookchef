import { data } from "./recipe";

export async function seedRecipes() {
  await fetch('https://restapi.fr/api/recipes', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    } 
  });
};