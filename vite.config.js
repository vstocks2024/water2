import { defineConfig } from "vite"
export default defineConfig({
   optimizeDeps: {
   esbuildOptions: {
     target: 'esnext'
   }
 },
 build: {
   target: 'esnext',
   chunkSizeWarningLimit:500,
   rollupOptions:{
     output:{
      manualChunks:{
        three:['three']
      }
     }
   }
 }
})