import jwt, { JwtPayload } from "jsonwebtoken";

export type userId = number;
export const getUserId = (jwtToken: string | null) => {
  if (jwtToken) {
    try {
      const decodedToken = jwt.decode(jwtToken) as JwtPayload;
      if (decodedToken) {
        const now = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < now) {
          console.warn("JWT expired");
          return undefined;
        }
        const userId = Number(decodedToken.sub);
        return userId;
      }
    } catch (error) {
      console.error("Error decoding JWT", error);
    }
  }
  return undefined;
};
