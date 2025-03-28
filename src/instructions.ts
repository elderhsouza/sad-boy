import { type } from "arktype";
import { readFile } from "node:fs/promises";

const opcodes = JSON.parse(
	await readFile(new URL("./opcodes.json", import.meta.url), "utf-8"),
);

const flags = type.enumerated("-", "0", "1", "z", "n", "h", "c");
const payload = type({
	mnemonic: type.enumerated(
		"adc",
		"add",
		"and",
		"bit",
		"call",
		"ccf",
		"cp",
		"cpl",
		"daa",
		"dec",
		"di",
		"ei",
		"halt",
		"illegal_d3",
		"illegal_db",
		"illegal_dd",
		"illegal_e3",
		"illegal_e4",
		"illegal_eb",
		"illegal_ec",
		"illegal_ed",
		"illegal_f4",
		"illegal_fc",
		"illegal_fd",
		"inc",
		"jp",
		"jr",
		"ld",
		"ldh",
		"nop",
		"or",
		"pop",
		"prefix",
		"push",
		"res",
		"ret",
		"reti",
		"rl",
		"rla",
		"rlc",
		"rlca",
		"rr",
		"rra",
		"rrc",
		"rrca",
		"rst",
		"sbc",
		"scf",
		"set",
		"sla",
		"sra",
		"srl",
		"stop",
		"sub",
		"swap",
		"xor",
	),
	bytes: "number",
	cycles: "number[]",
	immediate: "boolean",
	operands: type({
		name: type.enumerated(
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"$00",
			"$08",
			"$10",
			"$18",
			"$20",
			"$28",
			"$30",
			"$38",
			"n16",
			"a16",
			"a8",
			"e8",
			"n8",
			"a",
			"b",
			"c",
			"d",
			"e",
			"h",
			"l",
			"af",
			"bc",
			"de",
			"hl",
			"sp",
			"z",
			"nz",
			"nc",
		),
		immediate: "boolean",
		"bytes?": "number",
	})
		.array()
		.atMostLength(3),
	flags: {
		z: flags,
		n: flags,
		h: flags,
		c: flags,
	},
});
const opcodesSchema = type({
	unprefixed: { "[string]": payload },
	cbprefixed: { "[string]": payload },
});

type OpcodePayload = typeof payload.infer;
type Instructions = {
	default: Map<number, OpcodePayload>;
	prefixed: Map<number, OpcodePayload>;
};

function parseOperationCodes(opcodes: Record<string, OpcodePayload>) {
	return Object.entries(opcodes).reduce((acc, [key, payload]) => {
		acc.set(parseInt(key), payload);
		return acc;
	}, new Map());
}

export default function loadInstructions(): Instructions {
	const instructions = opcodesSchema.from(opcodes);
	if (instructions instanceof type.errors) {
		console.error(instructions.summary);
		process.exitCode = 1;
		throw Error();
	}

	return {
		default: parseOperationCodes(instructions.unprefixed),
		prefixed: parseOperationCodes(instructions.cbprefixed),
	};
}
