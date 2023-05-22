import React, { FC } from 'react';

/**
 * Component that activates coexistence mode in which the Evolv Asset Manager and the Evolv NextJS SDK can coexist.
 */
export const EvolvCoexistenceMode: FC = () => {
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
					window.evolv = window.evolv || {};
					window.evolv.ssr = true;
				`
			}}
		>
		</script>
	);
};
