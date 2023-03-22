
/*
Esse JS está com a responsabilidade de setar as informações que preciso do GITHUB.
 */
const user = {
    avatarUrl: '',
    name: '',
    login: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.login = gitHubUser.login
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }