// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
server: {
host: true, // <-- habilita el acceso desde la red local
port: 5173, // (opcional) puedes cambiar el puerto si está ocupado
},
})