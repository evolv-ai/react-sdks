import { jest } from '@jest/globals';
import _xhrMock from 'xhr-mock';
import { ClientAdapter } from './client.adapter.js';

const xhrMock: any = (_xhrMock as any).default || _xhrMock;

jest.setTimeout(10_000);

describe('ClientAdapter', () => {
	const environment = 'env123';
	const uid = 'uid123';

	beforeEach(() => {
		xhrMock.setup();

		xhrMock.post(/events$/, (req, res) => {
			return res.status(200);
		});

		xhrMock.post(/data$/, (req, res) => {
			return res.status(200);
		});

		xhrMock.get(/configuration\.json$/, (req, res) => {
			const data = {
				_published: 1584475383.3865728,
				_client: {
					browser: 'chrome',
					platform: 'windows',
					device: 'desktop'
				},
				_experiments: [
					{
						id: '4d5c7d9857',
						button: {
							_is_entry_point: true,
							_predicate: null,
							color: {
								_predicate: null,
								_values: true
							},
							text: {
								_predicate: null,
								_values: true
							}
						},
						heading: {
							_is_entry_point: true,
							_predicate: null,
							text: {
								_predicate: null,
								_values: true
							}
						}
					}
				]
			};

			return res.status(200).body(JSON.stringify(data));
		});

		xhrMock.get(/allocations$/, (req, res) => {
			const data = [
				{
					uid,
					eid: '4d5c7d9857',
					cid: '0cf8ffcedea2:4d5c7d9857',
					genome: {
						button: {
							color: 'Red',
							text: 'Button'
						},
						heading: {
							text: 'Hello world'
						}
					}
				}
			];

			return res.status(200).body(JSON.stringify(data));
		});
	});

	afterEach(() => {
		xhrMock.teardown();
	});

	describe('initialize()', () => {
		it('should initialize the client', () => {
			// Arrange
			const adapter = new ClientAdapter({
				environment,
				js: false,
				css: false
			});

			jest.spyOn(adapter.client, 'initialize');

			// Act
			adapter.initialize(uid);

			// Assert
			expect(adapter.client.initialize).toHaveBeenCalled();
		});
	});

	describe('hydrate()', () => {
		it('should populate "hydratedState" with expected values', async () => {
			// Arrange
			const adapter = new ClientAdapter({
				environment
			});

			adapter.initialize(uid);

			// Act
			await adapter.hydrate();

			// Assert
			expect(adapter.hydratedState).toEqual({
				'button.color': 'Red',
				'button.text': 'Button',
				'heading.text': 'Hello world'
			});
		});
	});
});
