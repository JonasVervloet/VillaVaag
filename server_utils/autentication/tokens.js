import jwt from 'jsonwebtoken'

export const createAccessToken = (user) => {
    return jwt.sign({
        userId: user.id
    }, process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: "15m"
    });
}

export const createRefreshToken = (user) => {
    return jwt.sign({
        userId: user.id
    }, process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: "7d"
    });
}

export const verifyAccessToken = (token) => {
    try {
        const payload = jwt.verify(
            token, process.env.ACCESS_TOKEN_SECRET
        );
        return [true, payload];
    } catch {
        return [false, null];
    }
}