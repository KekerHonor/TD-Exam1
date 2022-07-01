const LocalStrategy = require('passport-local').Strategy



function initialize(passport) {
    const authenticateUser = (name, pass, done) => {
        const user = getUserByName(name)
        if(user == null) {
            return done(null, false, { message: "No user found"})
        }
    }

    try {
        if (await compare(password, user.password)) {
            return done(null, user)
        } else {
            return done(null, false, { message: "Password Incorrect"})
        }
        } catch (e) {
            return done(e)
    }

    passport.use(new LocalStrategy({ usernameField: 'name '}), authenticateUser)
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((user, done) => { })
}