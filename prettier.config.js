const tailwindcssPlugin = import("prettier-plugin-tailwindcss");

export default {
    plugins: [
	  tailwindcssPlugin
	],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    printWidth: 120,
	overrides: [
		{
			files: '*.twig',
			options: {
				parser: 'html',
			},
		},
	],
};
