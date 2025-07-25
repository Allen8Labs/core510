<!--  // ──────────────────────────────────────────────── -->

# core510 &middot; Astro.build [5.10.1*]

### **Tailwind - Typescript - Inter**

<!--  // ──────────────────────────────────────────────── -->
<!--  Install ───────────────────── -->

## Init

- Instalamos framework [ver 5.10.*] con Pnpm

- Opciones de instalacion elegidas

	* Where should we create your new project?
		core510

	* How would you like to start your new project?
		A basic, minimal starter

	* Install dependencies?
		yes

	* Initialize a new git repository?
		yes

````
pnpm create astro@latest
````
````
cd core510

git init && git add . && git commit -m "Init"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  React ─────────────────────── -->

## Md

- Incorporamos carpeta Ms (markdown) y actualizamos

````
git add . && git commit -m "Add (md #002)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  React ─────────────────────── -->

## React

- Requerimos dependencias de react

- dependencias a instalar

	@astrojs/react@^4.3.0 @types/react@^19.1.8 @types/react-dom@^19.1.6 react@^19.1.0 

- Inserta el sigueinte condigo en astro.config.mjs

	// https://astro.build/config                 │
	export default defineConfig({
		integrations: [react()]
	});

- Inserta el sigueinte condigo en tsconfig.json

	{
		"extends": "astro/tsconfigs/strict",
		"include": [
			".astro/types.d.ts",
			"**/*"
		],
		"exclude": [
			"dist"
		],
		"compilerOptions": {
			"jsx": "react-jsx",
			"jsxImportSource": "react"
		}
	}

- Astro will run the following command:
	* continue ?  (yes/no) yes

- Astro will make the following changes to your config file:
	* continue ?  (yes/no) yes

- Astro will make the following changes to your tsconfig.json:
	* continue ?  (yes/no) yes

````
pnpm astro add react
*pnpm dlx astro add react
pnpm add @astrojs/react@^4.3.0 @types/react@^19.1.8 @types/react-dom@^19.1.6 react@^19.1.0 react-dom@^19.1.0
````

````
git add . && git commit -m "Require (react #003)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Tailwind ────────────────── -->

## Tailwind

- Requerimos dependencias de tailwind

- Dependencias a instalar

	@tailwindcss/vite@^4.1.10 tailwindcss@^4.1.10

- Scafolding ./src/styles/global.css.

	@import "tailwindcss";

- Actualiza astro.config.mjs

	// @ts-check
	import { defineConfig } from 'astro/config';

	import react from '@astrojs/react';

	import tailwindcss from '@tailwindcss/vite';

	// https://astro.build/config
	export default defineConfig({
		integrations: [react()],

		vite: {
			plugins: [tailwindcss()]
		}
	});

- Astro will scaffold ./src/styles/global.css.
	* continue ?  (yes/no) yes

- Astro will make the following changes to your config file:
	* continue ?  (yes/no) yes

- Vinculamos el site con tailwind 

- *Generamos archivo de configuracion de ser necesario tailwind.config.mjs

````
pnpm astro add tailwind
*pnpm dlx astro add tailwind
pnpm add @tailwindcss/vite@^4.1.10 tailwindcss@^4.1.10

*pnpm dlx tailwindcss init
````

````
git add . && git commit -m "Require (tailwind #004)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Astro xtras ────────────────── -->

## Astro xtras

- Requerimos dependencias adicionales de astro

````
pnpm add @astrojs/mdx @astrojs/sitemap @astrojs/check @astrojs/mdx @astrojs/starlight @astrojs/starlight-tailwind

pnpm add astro-compressor astro-navbar astro-vtbot astro-seo
````

````
pnpm add @astrojs/mdx

pnpm add @astrojs/sitemap

pnpm add @astrojs/check

pnpm add @astrojs/mdx

pnpm add @astrojs/starlight

pnpm add @astrojs/starlight-tailwind

pnpm add astro-compressor

pnpm add astro-navbar

pnpm add astro-vtbot

pnpm add astro-seo
````

````
git add . && git commit -m "Require (astro xtras #005)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Dependencias ──────────────── -->

## Dependencias

- Requerimos dependencias complementarias

````
pnpm add typescript @typescript-eslint/scope-manager

pnpm add eslint-plugin-astro eslint eslint-plugin-jsx-a11y prettier-plugin-astro prettier sharp sass --save-dev
````

````
pnpm add typescript

*pnpm add @typescript-eslint/parser
pnpm add @typescript-eslint/scope-manager


pnpm add -D eslint-plugin-astro eslint

pnpm add -D eslint-plugin-jsx-a11y

pnpm add -D prettier-plugin-astro prettier

pnpm add -D sharp sass
````

````
git add . && git commit -m "Require (dev extras #006)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Fonts ───────────────────── -->

## Fonts

- Requerimos Fuentes

````
pnpm add @tailwindcss/forms @tailwindcss/typography @fontsource-variable/inter @fontsource-variable/urbanist @fontsource-variable/dm-sans @fontsource-variable/outfit --save-dev
````

````
pnpm add -D @tailwindcss/forms

pnpm add -D @tailwindcss/typography

pnpm add -D @fontsource-variable/inter

pnpm add -D @fontsource-variable/urbanist

pnpm add -D @fontsource-variable/dm-sans

pnpm add -D @fontsource-variable/outfit
````

````
git add . && git commit -m "Require (fonts #007)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Personalizar ──────────────── -->

## Extras theme

- Requerimos paquetes adicionales usamos por el theme
- Separados por prioridad

````
pnpm add @preline/accordion @preline/collapse @preline/dropdown @preline/overlay @preline/tabs preline --save-dev

pnpm add prettier-plugin-tailwindcss html-minifier-terser clipboard globby gsap lenis rimraf sharp-ico --save-dev
````

````
pnpm add -D @preline/accordion

pnpm add -D @preline/collapse

pnpm add -D @preline/dropdown

pnpm add -D @preline/overlay

pnpm add -D @preline/tabs

pnpm add -D preline


pnpm add -D prettier-plugin-tailwindcss

pnpm add -D html-minifier-terser

pnpm add -D clipboard

pnpm add -D globby

pnpm add -D gsap

pnpm add -D lenis

pnpm add -D rimraf

pnpm add -D sharp-ico
````

````
git add . && git commit -m "Require (xtras theme #008)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Personalizar ──────────────── -->

## Personalizar

- Editamos los archivos de configuracion de typescript (tsconfig.json)

{
	"extends": "astro/tsconfigs/strict",
	"include": [
		".astro/types.d.ts",
		"src/**/*"
		// "**/*"
	],
	"exclude": [
		"node_modules",
		"dist"
	],
	"compilerOptions": {
		"jsx"				:	"react-jsx",

		"jsxImportSource"	:	"react",

		"baseUrl"			:	"src",
		// "baseUrl"		:	".",

		"paths": {
			"@/*"			:	["./src/*"],

			"@global/*"		:	["global/*"],

			"@lib/*"		:	["lib/*"],

			"@utils/*"		:	["utils/*"],

			"@components/*"	:	["components/*"],

			"@containers/*"	:	["containers/*"],

			"@content/*"	:	["content/*"],

			"@data/*"		:	["data/*"],

			"@layouts/*"	:	["layouts/*"],

			"@styles/*"		:	["styles/*"],

			"@scripts/*"	:	["scripts/*"],

			"@assets/*"		:	["assets/*"],

			"@images/*"		:	["assets/images/*"],

			"@icons/*"		:	["assets/icons/*"],

			"@pages/*"		:	["pages/*"],

		}
	}
}


- Editamos los archivos de configuracion de astro (astro.config.mjs)

// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		mdx()
	],

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()]
	}
});

````
git add . && git commit -m "Customized (tsconfig astro.config #009)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Icon ────────────────── -->

## Icon

- Requerimos dependencias de Astro icon (no oficial)

	astro-icon is not an official Astro package.
	* continue ?  (yes/no) yes

- Install

	pnpm add astro-icon@^1.1.5
	* continue ?  (yes/no) yes

- Integration

    import icon from "astro-icon";

    // https://astro.build/config
    export default defineConfig({
        integrations: [react(), mdx(), icon()],
    });

	* continue ?  (yes/no) yes

````
pnpm astro add astro-icon

pnpm add astro-icon@^1.1.5
````

````
git add . && git commit -m "Require (icon #010)"
````

<!--  // ──────────────────────────────────────────────── -->
<!--  Github ─────────────────── -->

## GitHub

- Vinculamos con github
- Push repositorio

````
git remote add origin https://github.com/Allen8Labs/core510.git

git add . && git commit -m "Remote (github)"
````

<!--  // ──────────────────────────────────────────────── -->