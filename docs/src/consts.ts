export const SITE = {
  title: 'MediaKit',
  description: 'MediaKit documentation and examples',
  defaultLanguage: 'en-us',
} as const

// export const OPEN_GRAPH = {
//   image: {
//     src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
//     alt:
//       'astro logo on a starry expanse of space,' +
//       ' with a purple saturn-like planet floating in the right foreground',
//   },
//   twitter: 'astrodotbuild',
// }

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/solidjs-community/mediakit/tree/main/docs`

export const COMMUNITY_INVITE_URL = `https://github.com/solidjs-community/mediakit`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
}

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  Overview: [
    { text: 'Introduction', link: 'introduction' },
    { text: 'Contributors', link: 'contributors' },
    { text: 'Sponsors', link: 'sponsors' },
  ],
  pRPC: [
    { text: 'Introduction', link: 'prpc/introduction' },
    { text: 'Install', link: 'prpc/install' },
    { text: 'createCaller', link: 'prpc/createcaller' },
    { text: 'Error Handling', link: 'prpc/error-handling' },
    { text: 'Optimistic Updates', link: 'prpc/optimistic' },
    { text: 'redirect$', link: 'prpc/redirect' },
    { text: 'error$', link: 'prpc/error' },
    { text: 'response$', link: 'prpc/response' },
  ],
  Auth: [
    { text: 'Install', link: 'auth/install' },
    { text: 'protected$', link: 'auth/protected' },
    { text: 'signIn', link: 'auth/signin' },
    { text: 'signOut', link: 'auth/signout' },
    { text: 'useAuth', link: 'auth/useauth' },
    { text: 'getSession', link: 'auth/getsession' },
  ],

  Forms: [
    { text: 'Install', link: 'forms/install' },
    { text: 'createForm', link: 'forms/createform' },
    { text: 'createForm$', link: 'forms/serverform' },
  ],
  OpenGraph: [
    { text: 'Install', link: 'og/install' },
    { text: 'DynamicImage', link: 'og/dynamic-image' },
    { text: 'OpenGraph', link: 'og/opengraph' },
  ],
  Media: [
    { text: 'Install', link: 'media/install' },
    { text: 'createVideo', link: 'media/createvideo' },
  ],
}
