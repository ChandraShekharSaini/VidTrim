
const userAuth = () => {

    const GoogleAuthButton = () => {
        window.location.href = 'http://localhost:3600/auth/google'
    }


    const GithubAuthButton = () => {
        window.location.href = 'http://localhost:3600/auth/github'
    }


    

    return { GoogleAuthButton, GithubAuthButton }
}

export default userAuth