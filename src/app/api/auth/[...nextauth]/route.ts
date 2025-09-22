import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "UserName", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "username" &&
          credentials.password === "password"
        ) {
          return { id: "1", name: "Test user" };
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(AuthOptions)

export {handler as GET, handler as POST};
