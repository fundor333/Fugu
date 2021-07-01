module.exports = {
	plugins: {
		'@fullhuman/postcss-purgecss': {
			content: ['./hugo_stats.json'],
			fontFace: true,
			variables: true,
			keyframes: true,
			defaultExtractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				return els.tags.concat(els.classes, els.ids);
			},

		},
		cssnano: {
			preset: 'default',
			autoprefixer:true,
			discardComments: true,
			discardDuplicates: true,
			discardEmpty:true,
			discardOverridden:true,
			mergeRules:true,
			orderedValues:true,
		}
	}
};
