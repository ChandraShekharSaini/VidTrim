import { Strategy as GoogleStrategy } from "passport-google-oauth2"
import passport from "passport";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {

        try {

            return done(err, user);
        } catch (error) {

        }
    }
));

export default passport