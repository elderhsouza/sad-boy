type Flag = 'c' | 'h' | 'n' | 'z';

export const Condition = {
	C: 'c',
	Z: 'z',
	NC: 'nc',
	NZ: 'nz',
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition];

export const NumberNotation = {
	A8: 'a8', // 8-bit unsigned address
	A16: 'a16', // 16-bit LE address
	E8: 'e8', // 8-bit signed value
	N8: 'n8', // 8-bit immediate value
	N16: 'n16', // 16-bit immediate value
} as const;
export type NumberType = (typeof NumberNotation)[keyof typeof NumberNotation];

export const Register8 = {
	A: 'a',
	B: 'b',
	C: 'c',
	D: 'd',
	E: 'e',
	H: 'h',
	L: 'l',
} as const;
export type Register8 = (typeof Register8)[keyof typeof Register8];

export const Register16 = {
	AF: 'af',
	BC: 'bc',
	DE: 'de',
	HL: 'hl',
} as const;
export type Register16 = (typeof Register16)[keyof typeof Register16];

export const Register = {
	...Register8,
	...Register16,
} as const;
export type Register = (typeof Register)[keyof typeof Register];

export type Mnemonic =
	| 'adc'
	| 'add'
	| 'and'
	| 'bit'
	| 'call'
	| 'ccf'
	| 'cp'
	| 'cpl'
	| 'daa'
	| 'dec'
	| 'di'
	| 'ei'
	| 'halt'
	| 'illegal_d3'
	| 'illegal_db'
	| 'illegal_dd'
	| 'illegal_e3'
	| 'illegal_e4'
	| 'illegal_eb'
	| 'illegal_ec'
	| 'illegal_ed'
	| 'illegal_f4'
	| 'illegal_fc'
	| 'illegal_fd'
	| 'inc'
	| 'jp'
	| 'jr'
	| 'ld'
	| 'ldh'
	| 'nop'
	| 'or'
	| 'pop'
	| 'prefix'
	| 'push'
	| 'res'
	| 'ret'
	| 'reti'
	| 'rl'
	| 'rla'
	| 'rlc'
	| 'rlca'
	| 'rr'
	| 'rra'
	| 'rrc'
	| 'rrca'
	| 'rst'
	| 'sbc'
	| 'scf'
	| 'set'
	| 'sla'
	| 'sra'
	| 'srl'
	| 'stop'
	| 'sub'
	| 'swap'
	| 'xor';

export type OperandName =
	| Register
	| NumberType
	| Condition
	| 'sp'
	| '$00'
	| '$08'
	| '$10'
	| '$18'
	| '$20'
	| '$28'
	| '$30'
	| '$38'
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7';
export type OpcodeOperand = {
	name: OperandName;
	immediate: boolean;
	bytes?: number;
	decrement?: boolean;
	increment?: boolean;
};

export type OpcodePayload = {
	mnemonic: Mnemonic;
	bytes: number;
	cycles: number[];
	immediate: boolean;
	operands: OpcodeOperand[];
	flags: Record<Flag, Flag | '-' | '0' | '1'>;
};
