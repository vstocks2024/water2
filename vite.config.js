import { defineConfig } from "vite"
export default defineConfig({
   optimizeDeps: {
   esbuildOptions: {
     target: 'esnext'//This property is set to tell the browser that we are using ECMAScript Module
   }
 },
 //Build property is set to tell the vite how to build this javascript file.
 build: {
   target: 'esnext',//This property is to set the target that ESM should be followed.
   chunkSizeWarningLimit:500,// This property is set to break every chunk is to limit chunk size during the build process.
   rollupOptions:{
     output:{
      manualChunks:{
        three:['three']// Here in manualChunks name of three.js library is done by exclusively giving its name.
      }
     }
   }
 }
})