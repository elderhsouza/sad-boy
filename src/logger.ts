import { pino } from "pino";

export const logger = pino({
	timestamp: false,
	formatters: {
		bindings(bindings) {
			return { hostname: bindings.hostname };
		},
	},
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
});
