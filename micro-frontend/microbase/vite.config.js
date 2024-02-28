import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(), // Default React plugin, again...
    federation({
      name: 'micro-base', //Name of our base app
      remotes: { // Like expose's import in here. URL mostly same but port is
                 // depending on your apps ports like I gave above on header app.
                 // Module Federation serves with remoteEntry.js file from build/assets.
        microHeader: "http://localhost:5432/assets/remoteEntry.js",
        /*microBody: "http://localhost:5008/assets/remoteEntry.js",*/
      },
      shared: ['react', 'react-dom'] // We can share common dependencies
    })
  ],
})