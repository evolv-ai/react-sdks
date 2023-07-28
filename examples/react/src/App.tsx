import { useVariable } from '@evolv/react';
import { ContextToggle } from './ContextToggle';


export default function App() {
	const buttonColor = useVariable('cta-button.color', undefined);
	const buttonText = useVariable('cta-button.text', 'Button');

	return (
		<div className="App">
			<ContextToggle keyName="customizeButton" />
			<div>
				<button
					type="button"
					className="btn btn-light"
					style={{ backgroundColor: buttonColor }}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
