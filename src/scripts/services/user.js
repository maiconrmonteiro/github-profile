// importando variavies de outro arquivo para dividir responsabilidades
import { baseUrl } from "../variables.js"

// pegando os arquivos da API do git ( informações do usuario)
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return response.json()
}

export { getUser }