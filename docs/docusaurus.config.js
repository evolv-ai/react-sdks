// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Evolv AI React SDKs',
	// eslint-disable-next-line max-len
	tagline: 'Use AI to automatically discover, personalize, and serve progressively better journeys by continuously adapting to live user behavior.',
	url: 'https://evolv-ai.github.io',
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
					editUrl: 'https://github.com/evolv-ai/react-sdks/tree/main/docs',
					versions: {
						current: {
							label: 'v1'
						}
					}
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
				defaultMode: 'dark',
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
						docId: 'guides/quick-start',
						position: 'left',
						label: 'Docs',
					},
					{
						position: 'left',
						label: 'API',
						activeBasePath: 'docs',
						to: 'guides/api'
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
						title: 'Evolv AI',
						items: [
							{
								label: 'Home',
								to: 'https://evolv.ai',
							},
							{
								label: 'Blog',
								to: 'https://blog.evolv.ai',
							},
							{
								label: 'About',
								to: 'https://evolv.ai/about',
							},
							{
								label: 'Contact',
								to: 'https://evolv.ai/contact',
							},
						]
					},
					{
						title: 'Docs',
						items: [
							{
								label: 'Guides',
								to: '/guides/quick-start',
							},
							{
								label: 'API',
								to: '/guides/api',
							},
						],
					},
					{
						title: 'Resources',
						items: [
							{
								label: 'Help',
								to: 'https://evolvai.zendesk.com',
							},
							{
								label: 'NPM',
								to: 'https://www.npmjs.com/org/evolv',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/evolv-ai/react-sdks',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Evolv AI. All rights reserved.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				defaultLanguage: 'typescript'
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			}
		}),
};

module.exports = config;
