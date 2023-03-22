import { baseUrl, repositoriesQuantity } from '../variables.js'


// buscando os arquivos da API do git ( Repositorios do usuario.)
async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

/*
A decisão de deixar essa funcionalidade separada e diferente das demais foi a manobra que tive que fazer para
mostrar a mensagem correta de acordo com o type do evento.
*/
function events(userName){
    let eventList = ""
    
    getEvents(userName).then( eventsData => {
        eventsData.forEach( even =>{

          let messageTrue = ""
          let messagePush = even.payload.commits
          let messageCreat = even.payload.description
          

          if(messagePush == undefined){
            messageTrue = messageCreat + ' 🚀 Novo'
          }else {
            messageTrue = even.payload.commits[0].message
          }


        
            eventList += `<li class="eventList"><span class="nameEvent">${even.repo.name}</span> ➡ ${messageTrue}</li>`  

        })
        
         

        document.querySelector('.profile-data').innerHTML += `
        <div class="">
            <h2 class="secondTitle">Eventos</h2>
            <ul>${eventList}</ul>
        </div>
        `
    })

}



export { events }