import { fail } from 'assert';
import { match } from 'ts-pattern';
import { beforeEach, describe, expect, test } from 'vitest';

import type { OpcodePayload } from './constants.ts';
import { cpu } from './cpu.ts';
import { opcodes } from './opcodes.ts';
import run, { InstructionPattern } from './operations.ts';

beforeEach(() => {
	cpu.reset();
});

/*
r8 	Any of the 8-bit registers (A, B, C, D, E, H, L).
r16 Any of the general-purpose 16-bit registers (BC, DE, HL).
n8 	8-bit integer constant (signed or unsigned, -128 to 255).
n16 16-bit integer constant (signed or unsigned, -32768 to 65535).
e8 	8-bit signed offset (-128 to 127).
u3	3-bit unsigned bit index (0 to 7, with 0 as the least significant bit).
*/

function runInstruction(opcode: string, operands: number[] = []) {
	Buffer.from([parseInt(opcode), ...operands]).copy(cpu.ram, 0, 0);
	run(cpu.ram.readUint8(cpu.pc));
}

describe.skip('jump', () => {
	test('jp n16: jump to a16', () => {
		runInstruction('0xc3', [0x50, 0x01]);
		expect(cpu.pc).toBe(0x0150);
	});

	test('jp hl: jump to the value in register hl', () => {
		cpu.registers.hl = 0xff;
		runInstruction('0xe9');
		expect(cpu.pc).toBe(cpu.registers.hl);
	});

	test('jp z,a16: jump to a16 if flag z IS set', () => {
		cpu.flags.z = 1;
		runInstruction('0xca', [0x00, 0x22]);
		expect(cpu.pc).toBe(0x2200);
	});

	test('jp nz,a16: jump to a16 if flag z IS NOT set', () => {
		cpu.flags.z = 0;
		runInstruction('0xc2', [0x00, 0x22]);
		expect(cpu.pc).toBe(0x2200);
	});

	test('jp c,a16: jump to a16 if flag c IS set', () => {
		cpu.flags.c = 1;
		runInstruction('0xda', [0x00, 0x22]);
		expect(cpu.pc).toBe(0x2200);
	});

	test('jp nc,a16: jump to a16 if flag c IS NOT set', () => {
		cpu.flags.c = 0;
		runInstruction('0xd2', [0x00, 0x22]);
		expect(cpu.pc).toBe(0x2200);
	});
});

interface OpcodePayloadTest extends OpcodePayload {
	opcode: string;
	signature: string;
}

function formatInstructionSignature(opcode: string, payload: OpcodePayload) {
	const operands = payload.operands.map((op) => (op.immediate ? op.name : `[${op.name}]`)).join();
	return `${opcode} ${payload.mnemonic} ${operands}`;
}

const loadInstructions = Object.entries(opcodes.default).reduce<OpcodePayloadTest[]>(
	(acc, [opcode, payload]) => {
		if (payload.mnemonic === 'ld') {
			return acc.concat({
				...payload,
				opcode,
				signature: formatInstructionSignature(opcode, payload),
			});
		}
		return acc;
	},
	[],
);

/*
instruction signature examples:

ld r8,r8 -> ld = load, r8 = any 8-bit register
load the value in operand 2 into operand 1

whenever the operand is is square brackets
ie: ld [hl],r8
it means instead of loading the value in r8 into hl,
load the value in r8 to the memory address that the value in hl points to
so given ld [hl],r8 where
hl = 0x22 and
r8 = b = 0xf1

ld [0x22],0xf1 means load the value 0xf1 in memory address 0x22
*/

describe('load', () => {
	loadInstructions.forEach((instruction) => {
		const [first, second] = instruction.operands;

		match([first, second])
			.with(InstructionPattern.R8_R8, ([target, source]) => {
				test(instruction.signature, () => {
					cpu.registers[source.name] = 0xf1;
					runInstruction(instruction.opcode);

					expect(cpu.registers[target.name]).toBe(cpu.registers[source.name]);
					expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.R8_N8, ([register]) => {
				test(instruction.signature, () => {
					runInstruction(instruction.opcode, [0xf2]);

					expect(cpu.registers[register.name]).toBe(0xf2);
					expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.R16_N16, ([register]) => {
				test(instruction.signature, () => {
					runInstruction(instruction.opcode, [0x22, 0x21]);

					expect(cpu.registers[register.name]).toBe(0x2122);
					expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.$HL_R8, ([_, register]) => {
				test(instruction.signature, () => {
					cpu.registers[register.name] = 0x22;
					cpu.registers.hl = 0xee;
					runInstruction(instruction.opcode);

					expect(cpu.ram.readUint8(cpu.registers.hl)).toBe(cpu.registers[register.name]);
					expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.$HL_N8, () => {
				test(instruction.signature, () => {
					cpu.registers.hl = 0xee;
					runInstruction(instruction.opcode, [0x22]);

					expect(cpu.ram.readUint8(cpu.registers.hl)).toBe(0x22);
					expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.R8_$HL, () => {
				test(instruction.signature, () => {
					fail();
					// runInstruction(instruction.opcode, [0x22, 0x21]);
					// expect(cpu.registers[register.name]).toBe(0x2122);
					// expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.$R16_A, () => {
				test(instruction.signature, () => {
					fail();
					// runInstruction(instruction.opcode, [0x22, 0x21]);
					// expect(cpu.registers[register.name]).toBe(0x2122);
					// expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.$N16_A, () => {
				test(instruction.signature, () => {
					fail();
					// runInstruction(instruction.opcode, [0x22, 0x21]);
					// expect(cpu.registers[register.name]).toBe(0x2122);
					// expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.A_$R16, () => {
				test(instruction.signature, () => {
					fail();
					// runInstruction(instruction.opcode, [0x22, 0x21]);
					// expect(cpu.registers[register.name]).toBe(0x2122);
					// expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			.with(InstructionPattern.A_$N16, () => {
				test(instruction.signature, () => {
					fail();
					// runInstruction(instruction.opcode, [0x22, 0x21]);
					// expect(cpu.registers[register.name]).toBe(0x2122);
					// expect(cpu.pc).toBe(instruction.bytes);
				});
			})
			// ld [hl],r8
			// ld [hl],n8
			// ld r8,[hl]
			// ld [r16],a
			// ld [n16],a
			// ld a,[r16]
			// ld a,[n16]
			// ld [hli],a
			// ld [hld],a
			// ld a,[hli]
			// ld a,[hld]

			// ldh [n16],a
			// ldh [c],a
			// ldh a,[n16]
			// ldh a,[c]
			.otherwise(() => test(instruction.signature, () => fail()));
	});
});
