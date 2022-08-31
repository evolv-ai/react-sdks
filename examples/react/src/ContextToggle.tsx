import { useContextState } from '@evolv/react';
import React, { FC } from 'react';

interface Props {
	keyName: string;
}

export const ContextToggle: FC<Props> =
	({ keyName }) => {
		const [enabled, setEnabled] = useContextState<boolean>(keyName);

		return (
			<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
				<div className="form-check form-switch">
					<input
						type="checkbox"
						className="form-check-input"
						role="switch"
						id={`contextToggle_${keyName}`}
						value={enabled as any}
						onChange={(event) => {
							setEnabled(event.target.checked);
						}}
					/>
					<label className="form-check-label" htmlFor={`contextToggle_${keyName}`}>
						Enable button customization
					</label>
				</div>
			</div>
		);
	};
