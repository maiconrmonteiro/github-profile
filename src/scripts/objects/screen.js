const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>🔰 Usuario: ${user.login}</p><br>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢' }</p><br>
                                            <p>👥 Seguidores: ${user.followers}</p>
                                            <p>👤 Seguindo: ${user.following}</p>
                                        </div>
                                    </div>
                                    `
        let repositoriesItens = ""
        user.repositories.forEach( repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blanck">${repo.name}</a>
                                                                    <div class="userRepos">
                                                                        <p class="infoRepos"> 🍴 ${repo.forks}</p>
                                                                        <p class="infoRepos"> ⭐ ${repo.stargazers_count}</p>
                                                                        <p class="infoRepos"> 👀 ${repo.watchers}</p>
                                                                        <p class="infoRepos"> 💻 ${repo.language}</p>
                                                                    </iv>
                                                                </li>`)
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    }

    

}

export { screen }