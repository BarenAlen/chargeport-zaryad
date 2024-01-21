import { defineConfig } from "vite"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	build: {
		sourcemap: "inline",
        outDir: './dist'
	},
    publicDir: './static',
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'ajax.php',
                    dest: './dist'
                },
                {
                    src: 'form_processing.php',
                    dest: './dist'
                }
            ]
        })
    ]
})
