import { useContextState, useVariable } from '@evolv/nextjs';

export default function Button() {
	const buttonText = useVariable('cta-button.text', 'control');
	const buttonColor = useVariable('cta-button.color', 'unset');
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
