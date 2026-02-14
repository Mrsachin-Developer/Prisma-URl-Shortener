export declare const findUserByEmail: (email: string) => Promise<{
    id: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
} | null>;
export declare const createUser: (username: string, email: string, password: string) => Promise<{
    id: string;
    email: string;
    username: string;
}>;
export declare const validateUserPassword: (email: string, password: string) => Promise<{
    id: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
} | null>;
export declare const loginUser: (email: string, password: string) => Promise<string>;
//# sourceMappingURL=user.services.d.ts.map