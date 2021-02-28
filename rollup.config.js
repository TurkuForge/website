import fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			let args = [
				'run',
				'start',
				'--',
				'--dev',
				'--http2',
				'--cert',
				'cert/dev-server.crt',
				'--key',
				'cert/dev-server.key'
			];
			server = require('child_process').spawn('npm', args, {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

let plugins = [
	svelte({
		compilerOptions: {
			// enable run-time checks when not in production
			dev: !production,
		},
		preprocess: sveltePreprocess({
			sourceMap: !production,
			postcss: {
				plugins: [
					require('tailwindcss'),
					require('autoprefixer'),
					require("postcss-nesting")
				],
			},
		}),
	}),
	// we'll extract any component CSS out into
	// a separate file - better for performance
	css({ output: 'bundle.css' }),

	// If you have external dependencies installed from
	// npm, you'll most likely need these plugins. In
	// some cases you'll need additional configuration -
	// consult the documentation for details:
	// https://github.com/rollup/plugins/tree/master/packages/commonjs
	resolve({
		browser: true,
		dedupe: ['svelte']
	}),
	commonjs(),
	typescript({
		sourceMap: !production,
		inlineSources: !production
	}),
	markdown({
		showdownOptions:{
			simpleLineBreaks: false,
		}
	})
];

if (!production) {
	plugins = [
		...plugins,
		// In dev mode, call `npm run start` once
		// the bundle has been generated
		serve(),
		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		livereload({
			watch: 'public',
			verbose: false, // Disable console output

			// other livereload options
			https: {
				key: fs.readFileSync('cert/dev-server.key'),
				cert: fs.readFileSync('cert/dev-server.crt')
			}
		})
	]
}
else {
	plugins = [
		...plugins,
		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
	]
}

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: !production,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins,
	watch: {
		clearScreen: false
	}
};
