
/*
Importação das responsabilidades
*/
import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { events } from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'

/*
Evento de click sendo aplicado no botão "buscar" da pagina com uma condição caso o campo input estiver vazio
*/
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
        if(validadeInput(userName)) return
        getUserData(userName)
    
})

/*
Evendo de click ao botão do teclado "enter" com uma condição caso o campo de input estiver vazio
*/
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        validadeInput(userName)
        getUserData(userName)
    }
    
})


/*
Funcção de validação caso o input esteja vazio, usando tando no botão na pagina ou enter do telhado.
*/
function validadeInput(userName){
    if(userName.length == 0){
        alert('Prencha o campo com o nome do usuario!')
        return true
    }
}


/*
Chamada das respostas da API e set das informações de perfil e repositorios.
por ultimo achei mais facil a leitura a chamada da função da funcionalidade de buscar enventos.
*/
async function getUserData(userName){

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    if(userResponse.message === "Not Found"){
        console.log('caiu aqui')
        screen.renderNotFound(userName)
        return
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

    events(userName)

}