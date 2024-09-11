import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // For all styled components:
    // create classnames from fileName and displayName in development
    react({
      babel: {
        presets: ['@babel/preset-react'],
        plugins: [
          '@babel/plugin-transform-react-jsx',
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ]
})