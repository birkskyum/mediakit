import { type SolidAuthConfig } from '@solid-mediakit/auth'
import Discord from '@auth/core/providers/discord'

declare module '@auth/core/types' {
  export interface Session {
    user: {} & DefaultSession['user']
  }
}

export const authOpts: SolidAuthConfig = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
  ],
  debug: false,
  basePath: import.meta.env.VITE_AUTH_PATH,
}
