declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_EVOLV_CONFIG: string;
		}
	}
}

export {};
