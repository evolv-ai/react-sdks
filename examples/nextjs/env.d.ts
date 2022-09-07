declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_EVOLV_CONFIG: string;
		}
	}
}

export {};
