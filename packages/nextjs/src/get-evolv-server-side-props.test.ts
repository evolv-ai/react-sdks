import _fetchMock from 'jest-fetch-mock';

import { getEvolvServerSideProps } from './get-evolv-server-side-props.js';

const fetchMock: any = _fetchMock;

describe('getEvolvServerSideProps()', () => {
	const environment = 'env123';
	const uid = 'uid123';

	beforeAll(() => {
		fetchMock.enableMocks();
	});

	afterAll(() => {
		fetchMock.disableMocks();
	});

	beforeEach(() => {
		fetchMock.mockResponse(async (req) => {
			if (req.url.endsWith('events')) {
				return {
					status: 202
				};
			} else if (req.url.endsWith('configuration.json')) {
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
							_predicate: {},
							button: {
								_is_entry_point: true,
								_predicate: null,
								color: {
									_is_entry_point: false,
									_predicate: null,
									_values: true
								},
								text: {
									_is_entry_point: false,
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

				return {
					status: 200,
					body: JSON.stringify(data)
				};
			} else if (req.url.endsWith('allocations')) {
				const data = [
					{
						uid,
						eid: '4d5c7d9857',
						cid: '0cf8ffcedea2:4d5c7d9857',
						audience_query: {},
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

				return {
					status: 200,
					body: JSON.stringify(data)
				};
			}
		});
	});

	it('should populate "hydratedState" with expected values', async () => {
		// Arrange
		const options = {
			uid,
			client: {
				environment,
				analytics: false // Prevents calls to /data after Jest environment has been torn down
			}
		};

		// Act
		const props = await getEvolvServerSideProps(options, {} as any);

		// Assert
		expect(props).toEqual({
			props: {
				hydratedState: {
					'button.color': 'Red',
					'button.text': 'Button',
					'heading.text': 'Hello world'
				},
				remoteContext: {}
			}
		});
	});
});
