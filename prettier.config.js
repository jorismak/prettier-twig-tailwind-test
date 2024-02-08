import twigMelody from "prettier-plugin-twig-melody";
const tailwindcssPlugin = import("prettier-plugin-tailwindcss");

export default {
    plugins: [
//	  twigMelody,
	  tailwindcssPlugin
	],
    //twigMelodyPlugins: ["node_modules/prettier-plugin-twig-enhancements"],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    printWidth: 120,
    //twigPrintWidth: 120,
    //twigFollowOfficialCodingStandards: true,
    //twigAlwaysBreakObjects: false,
	overrides: [
		{
			files: '*.twig',
			options: {
				parser: 'html',
			},
		},
	],
};
