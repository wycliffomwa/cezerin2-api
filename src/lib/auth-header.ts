import serverConfigs from "../config.ts"
import { jwt } from "../deps.ts"

const cert = serverConfigs.jwtSecretKey
class AuthHeader {
  encodeUserLoginAuth(userId) {
    return jwt.sign({ userId }, cert)
  }

  decodeUserLoginAuth(token) {
    try {
      return jwt.verify(token, cert)
    } catch (error) {
      return error
    }
  }

  encodeUserPassword(token) {
    return jwt.sign({ password: token }, cert)
  }

  decodeUserPassword(token) {
    return jwt.verify(token, cert)
  }
}
export default new AuthHeader()
