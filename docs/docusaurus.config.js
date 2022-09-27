// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Evolv AI React SDKs',
	// eslint-disable-next-line max-len
	tagline: 'Use AI to automatically discover, personalize, and serve progressively better journeys by continuously adapting to live user behavior.',
	url: 'https://evolv.ai',
	baseUrl: '/react-sdks/',
	onBrokenLinks: 'log',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',

	// GitHub pages deployment config.
	organizationName: 'evolv-ai',
	projectName: 'react-sdks',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	themes: ['@docusaurus/theme-live-codeblock'],

	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				entryPoints: ['../packages/react', '../packages/nextjs'],
				entryPointStrategy: 'packages',
				tsconfig: '../tsconfig.json',
				out: 'api',
				excludePrivate: true,
				excludeProtected: true,
				disableSources: true,
				sidebar: {
					fullNames: true,
					position: 3
				}
			}
		]
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/evolv-ai/react-sdks/tree/main/docs',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: false
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'light',
				respectPrefersColorScheme: true
			},
			navbar: {
				title: 'React SDKs',
				logo: {
					alt: 'Evolv AI',
					src: 'img/wordmark-light.svg',
					srcDark: 'img/wordmark-dark.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Tutorial',
					},
					{
						position: 'left',
						label: 'API',
						activeBasePath: 'docs',
						to: 'docs/api'
					},
					{
						type: 'docsVersionDropdown',
						position: 'right'
					},
					{
						href: 'https://github.com/evolv-ai/react-sdks',
						label: 'GitHub',
						position: 'right',
					}
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'NPM',
								to: 'https://www.npmjs.com/package/@evolv/nextjs',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Evolv Technology Solutions, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				defaultLanguage: 'typescript'
			},
		}),
};

module.exports = config;
