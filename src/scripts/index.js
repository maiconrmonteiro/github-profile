
import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { events } from './services/events.js'
import { user } from './objects/user.js'
import { screen } from './objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(userName.length == 0){
        alert('Prencha o campo com o nome do usuario!')
    }else{
        getUserData(userName)
    }
    
})


document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(userName.length == 0){
            alert('Prencha o campo com o nome do usuario!')
            return
        }else{
            getUserData(userName)
        }
    }
    
})



async function getUserData(userName){

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

    events(userName)

}