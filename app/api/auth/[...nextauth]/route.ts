// @ts-nocheck
import NextAuth from 'next-auth/next';
// import GoogleProvider from 'next-auth/providers/google';
// import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
// import RedditProvider from 'next-auth/providers/reddit';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "f67468282fda022ea371",
      clientSecret: "fc26c995fdd850ef7f79f15a773ceb8edafa5bc9",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
    }),
  ],
  // pages: {
  //   signIn: '/auth/signin',
  // }
 
});

export { handler as GET, handler as POST };