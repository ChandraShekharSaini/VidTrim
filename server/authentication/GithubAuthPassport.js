import { Strategy as GitHubStrategy } from "passport-github2"
import passport from "passport";

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECREAT,
    callbackURL: process.env.GITHUB_CALLBACK_URL,

},
    function (accessToken, refreshToken, profile, done) {

        try {
            return done(err, user);
        } catch (error) {

        }



    }
));

export default passport