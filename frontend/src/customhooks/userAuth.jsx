const userAuth = () => {
  const GoogleAuthButton = () => {
    window.location.href =
      "https://vidtrim-backend-vercel.vercel.app/auth/google";
  };

  const GithubAuthButton = () => {
    window.location.href =
      "https://vidtrim-backend-vercel.vercel.app/auth/github";
  };

  const InstagramAuthButton = () => {
    window.location.href =
      "https://vidtrim-backend-vercel.vercel.app/auth/instagram";
  };

  const name = 90;

  return { GoogleAuthButton, GithubAuthButton, InstagramAuthButton };
};

export default userAuth;
