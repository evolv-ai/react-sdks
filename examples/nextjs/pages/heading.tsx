import { useVariable } from '@evolv/nextjs';

export default function Heading() {
	//const headingText = useVariable('movies.cta-text', 'control');

	const headingText = useVariable('shop.checkout-steps', 'control');

	return (
		<div>
			<h1 className="title">{headingText}</h1>
		</div>
	);
}
