import { useVariable } from '@evolv/react';
import { ContextToggle } from './ContextToggle';


export default function App() {
	const buttonColor = useVariable('m1e9d7tg9.c1zj181kr', undefined);
	const buttonText = useVariable('m1e9d7tg9.vp2xajnk0', 'Button');

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
