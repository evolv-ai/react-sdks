import { useVariable } from '@evolv/nextjs';

export default function Button() {
	const buttonText: string = useVariable('cta-button.text', 'Button');
	const buttonColor: string = useVariable('cta-button.color', 'unset');

	return (
		<button
			style={{ backgroundColor: buttonColor }}
		>
			{buttonText}
		</button>
	);
}
