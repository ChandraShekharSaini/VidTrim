
const userAuth = () => {

    const GoogleAuthButton = () => {
        window.location.href = 'https://vimtrim.onrender.com/auth/google'
    }


    const GithubAuthButton = () => {
        window.location.href = 'https://vimtrim.onrender.com/auth/github'
    }


    return { GoogleAuthButton, GithubAuthButton }
}

export default userAuth