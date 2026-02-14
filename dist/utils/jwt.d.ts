import Jwt from "jsonwebtoken";
export declare const signToken: (id: string, email: string) => string;
export declare const verifyToken: (token: string) => string | Jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map