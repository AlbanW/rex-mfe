import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [react(), federation({
    name: 'account',
    filename: 'remoteEntry.js',
    exposes: { './Account': './src/Account.jsx' },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
      'react/jsx-runtime': { singleton: true },
    },
    dts: false,
  })],
  server: { port: 5013, strictPort: true, cors: true },
  build: { target: 'esnext' },
})
