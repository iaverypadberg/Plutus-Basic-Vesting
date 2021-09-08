const passport = require("passport")
const jwt = require("jsonwebtoken")
const dev = process.env.NODE_ENV !== "production"

exports.COOKIE_OPTIONS = {
    httpOnly:true,
    // secure: !dev,
    signed:true,
    
    // 60 * 1000 is a minute
    // 1 hr refreshToken
    maxAge: eval(60 * 60 *1000),
    sameSite: false,
}


exports.getToken = user => {
    return jwt.sign(user, process.env.JWT_SECRET,{
        expiresIn: eval(process.env.SESSION_EXPIRY),
    })
}

exports.getRefreshToken = user =>{
    // console.log({user})
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY),
    })
    return refreshToken
}

exports.verifyUser = passport.authenticate("jwt",{session:false})