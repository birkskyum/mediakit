import { defineConfig } from '@solidjs/start/config'
import { prpcVite } from '@solid-mediakit/prpc'

export default defineConfig({
  ssr: true,
  // vite: {
  //   plugins: [prpcVite({ log: true })],
  // },
})
