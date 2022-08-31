import { useContextState, useVariable } from '@evolv/nextjs';

export default function Button() {
	const buttonText = useVariable('movies.vp2xajnk0', 'control');
	const buttonColor = useVariable('movies.c1zj181kr', 'unset');
	const [, setCustomizeButton] = useContextState('customizeButton');

	return (
		<div>
			<button
				onClick={() => setCustomizeButton(true)}
				style={{ backgroundColor: buttonColor }}
			>
				{buttonText}
			</button>
		</div>
	);
}
