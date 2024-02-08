const tailwindcssPlugin = import("prettier-plugin-tailwindcss");
import liquidPlugin from "@shopify/prettier-plugin-liquid";

export default {
    plugins: [
		liquidPlugin,
	  tailwindcssPlugin
	],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    printWidth: 120
};
