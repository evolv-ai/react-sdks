import { useVariable } from '@evolv/react';
import { ContextToggle } from './ContextToggle';


export default function App() {
	const { value: buttonColor } = useVariable('m1e9d7tg9.c1zj181kr', 'unset');
	const { value: buttonText } = useVariable('m1e9d7tg9.vp2xajnk0', 'Button');

	return (
		<div className="App">
			<ContextToggle keyName="customizeButton" />
			<div>
				<button
					type="button"
					className="btn"
					style={{ backgroundColor: buttonColor }}
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
