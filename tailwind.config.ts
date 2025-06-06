// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
    // Optional: include node_modules if using Nuxt UI
    './node_modules/@nuxt/ui/dist/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      // Customize your theme here
    },
  },
  plugins: [],
}

export default config
