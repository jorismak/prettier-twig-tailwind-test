const twigMelody = import("prettier-plugin-twig-melody");
const tailwind = import("prettier-plugin-tailwindcss");

export default {
    plugins: [twigMelody, tailwind],
    twigMelodyPlugins: ["node_modules/prettier-plugin-twig-enhancements"],
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    printWidth: 120,
    twigPrintWidth: 120,
    twigFollowOfficialCodingStandards: true,
    twigAlwaysBreakObjects: false,
};
