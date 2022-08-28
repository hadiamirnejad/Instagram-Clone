import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import {getUserByMobile} from '../../../controllers/userController'
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"
import * as entities from "./lib/entities"
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
const crypto = require("crypto");

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Mobile",
          type: "text",
          placeholder: "شماره موبایل",
        },
        password: { label: "رمز عبور", type: "password" },
      },
      authorize: async (credentials, req) => {
        //Database lookup
        // const {username, password} = credentials as {username: string, password: string};
        // const findedUser = await getUserByMobile(credentials?.username);
        // if (findedUser && username === findedUser.mobile && crypto.createHash("sha256").update(password, "binary").digest("base64") === findedUser.password) {
          if(true){

          return {
            // name: findedUser.first_name,
            // id: findedUser.id,
            // image: findedUser.img
            name: 'هادی',
            id:1,
            image: 'photos/1.jpg'
          };
        }
        // return null;
        throw new Error('نام کاربری یا رمز عبور اشتباه است');
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session:
    async ({ session, token }) => {
      if (token.user) session.user = token.user as any
      return session
    }, 
  },
  session:{
    strategy: 'jwt',
    maxAge: 2 * 60 * 60,
  },
  // adapter: TypeORMLegacyAdapter(
  //     {    
  //       type: "mysql",
  //       host: process.env.DB_HOST,
  //       port: parseInt(process.env.DB_PORT || '3306'),
  //       username: process.env.DB_USER,
  //       password: process.env.DB_PASSWORD,
  //       database: process.env.DB_DATABASE,
  //       entities: [entities.UserEntity, entities.AccountEntity, entities.SessionEntity, entities.VerificationTokenEntity]
  //       // namingStrategy: new SnakeNamingStrategy()
  //     }
  //       // , { entities }
  //   ),
  secret: "test",

  jwt: {
    secret: "test",
    maxAge: 60 * 60 * 2,
  },

  pages:{
    signIn: '/',
  },

  logger: {
  }
});
