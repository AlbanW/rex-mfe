import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [react(), federation({
    name: 'shell',
    remotes: {
      marketplace: { name: 'marketplace', entry: 'http://localhost:5011/remoteEntry.js', type: 'module' },
      cart: { name: 'cart', entry: 'http://localhost:5012/remoteEntry.js', type: 'module' },
      account: { name: 'account', entry: 'http://localhost:5013/remoteEntry.js', type: 'module' },
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
      'react/jsx-runtime': { singleton: true },
    },
    dts: false,
  })],
  server: { port: 5010, strictPort: true },
  build: { target: 'esnext' },
})
