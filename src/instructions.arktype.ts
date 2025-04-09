import { type } from 'arktype';
import { readFile } from 'node:fs/promises';

// const flags = type.enumerated('-', '0', '1', 'c', 'h', 'n', 'z');

// const payload = type({
// 	// mnemonic: type.enumerated(

// 	// ),
// 	bytes: 'number',
// 	cycles: 'number[]',
// 	immediate: 'boolean',
// 	operands: type({
// 		name: type.enumerated(
// 			'0',
// 			'1',
// 			'2',
// 			'3',
// 			'4',
// 			'5',
// 			'6',
// 			'7',
// 			'$00',
// 			'$08',
// 			'$10',
// 			'$18',
// 			'$20',
// 			'$28',
// 			'$30',
// 			'$38',
// 			'n16', // little endian immediate 16-bit address
// 			'a16', // little endian 16-bit address
// 			'a8', // 8-bit unsigned data
// 			'e8', // 8-bit signed data
// 			'n8', // immediate 8-bit data
// 			'a',
// 			'b',
// 			'c',
// 			'd',
// 			'e',
// 			'h',
// 			'l',
// 			'af',
// 			'bc',
// 			'de',
// 			'hl',
// 			'sp',
// 			'z',
// 			'nz',
// 			'nc',
// 		),
// 		immediate: 'boolean',
// 		'decrement?': 'boolean',
// 		// "increment?": "boolean",
// 		'bytes?': 'number',
// 	})
// 		.array()
// 		.atMostLength(3),
// 	flags: {
// 		z: flags,
// 		n: flags,
// 		h: flags,
// 		c: flags,
// 	},
// });
// const opcodesSchema = type({
// 	unprefixed: { '[string]': payload },
// 	cbprefixed: { '[string]': payload },
// });

// export type OpcodePayload = typeof payload.infer;
// export type Instructions = {
// 	default: Map<number, OpcodePayload>;
// 	prefixed: Map<number, OpcodePayload>;
// };

// function parseOperationCodes(opcodes: Record<string, OpcodePayload>) {
// 	return Object.entries(opcodes).reduce((acc, [key, payload]) => {
// 		acc.set(parseInt(key), payload);
// 		return acc;
// 	}, new Map());
// }

export default async function loadInstructions() {
	const opcodes = JSON.parse(await readFile(new URL('./opcodes.json', import.meta.url), 'utf-8'));

	// const instructions = opcodesSchema.from(opcodes);
	// if (instructions instanceof type.errors) {
	// 	console.error(instructions.summary);
	// 	process.exitCode = 1;
	// 	throw Error();
	// }

	// return {
	// 	default: parseOperationCodes(instructions.unprefixed),
	// 	prefixed: parseOperationCodes(instructions.cbprefixed),
	// };
}
