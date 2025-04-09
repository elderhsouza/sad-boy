import { match, Pattern } from 'ts-pattern';

import type { Mnemonic, OpcodePayload } from './constants.ts';
import { Condition, Register } from './constants.ts';
import { cpu } from './cpu.ts';
import { opcodes } from './opcodes.ts';

let payload: OpcodePayload;

const NumberPattern = {
	A8: 'a8', // 8-bit unsigned address
	A16: 'a16', // 16-bit LE address
	E8: 'e8', // 8-bit signed value
	N8: 'n8', // 8-bit immediate value
	N16: 'n16', // 16-bit immediate value
} as const;

const RegisterPattern = {
	R8: Pattern.union('a', 'b', 'c', 'd', 'e', 'h', 'l'),
	R16: Pattern.union('af', 'bc', 'de', 'hl'),
} as const;

// type Values<T extends Record<string, unknown>> = T[keyof T];

export const InstructionPattern = {
	R8_R8: [{ name: RegisterPattern.R8 }, { name: RegisterPattern.R8 }],
	R8_N8: [{ name: RegisterPattern.R8 }, { name: NumberPattern.N8 }],
	R16_N16: [{ name: RegisterPattern.R16 }, { name: NumberPattern.N16 }],
	$HL_R8: [{ name: Register.HL, immediate: false }, { name: RegisterPattern.R8 }],
	$HL_N8: [{ name: Register.HL, immediate: false }, { name: NumberPattern.N8 }],
	R8_$HL: [{ name: RegisterPattern.R8 }, { name: Register.HL, immediate: false }],
	$R16_A: [{ name: RegisterPattern.R16, immediate: false }, { name: Register.A }],
	$N16_A: [{ name: NumberPattern.N16, immediate: false }, { name: Register.A }],
	A_$R16: [{ name: Register.A }, { name: RegisterPattern.R16, immediate: false }],
	A_$N16: [{ name: Register.A }, { name: NumberPattern.N16, immediate: false }],
	// $HLI_A: [],
	// $HLD_A: [],
	// A_$HLI: [],
	// A_$HLD: [],
} as const;

const instructions: Record<Mnemonic, () => void> = {
	adc() {
		return false;
	},
	add() {
		return false;
	},
	and() {
		return false;
	},
	bit() {
		return false;
	},
	call() {
		return false;
	},
	ccf() {
		return false;
	},
	cp() {
		return false;
	},
	cpl() {
		return false;
	},
	daa() {
		return false;
	},
	dec() {
		// cpu.registers[payload.operands[0].name as Register] =
		// 	(cpu.registers[payload.operands[0].name] - 0x1) & 0xff;
		// cpu.pc += payload.bytes;
	},
	di() {
		return false;
	},
	ei() {
		return false;
	},
	halt() {
		return false;
	},
	illegal_d3() {
		return false;
	},
	illegal_db() {
		return false;
	},
	illegal_dd() {
		return false;
	},
	illegal_e3() {
		return false;
	},
	illegal_e4() {
		return false;
	},
	illegal_eb() {
		return false;
	},
	illegal_ec() {
		return false;
	},
	illegal_ed() {
		return false;
	},
	illegal_f4() {
		return false;
	},
	illegal_fc() {
		return false;
	},
	illegal_fd() {
		return false;
	},
	inc() {
		return false;
	},
	jp() {
		const setPcToAddress = () => {
			cpu.pc = cpu.ram.readUInt16LE(cpu.pc + 0x1);
		};

		if (payload.operands.length === 1) {
			switch (payload.operands[0].name) {
				case NumberPattern.A16:
					setPcToAddress(); // jp a16
					break;
				case Register.HL:
					cpu.pc = cpu.registers.hl; // jp hl
					break;
			}
		} else {
			// jp cc, a16
			const conditionMet = {
				[Condition.C]: cpu.flags.c,
				[Condition.NC]: !cpu.flags.c,
				[Condition.Z]: cpu.flags.z,
				[Condition.NZ]: !cpu.flags.z,
			}[payload.operands[0].name as Condition];

			if (conditionMet) setPcToAddress();
		}
	},
	jr() {
		cpu.pc = cpu.pc + 0x2 + cpu.ram.readInt8(cpu.pc + 0x1);
	},
	ld() {
		const [first, second] = payload.operands;

		match([first, second])
			.with(InstructionPattern.R8_R8, ([target, source]) => {
				cpu.registers[target.name] = cpu.registers[source.name];
			})
			.with(InstructionPattern.R8_N8, ([register]) => {
				cpu.registers[register.name] = cpu.ram.readUint8(cpu.pc + 0x1);
			})
			.with(InstructionPattern.R16_N16, ([register]) => {
				cpu.registers[register.name] = cpu.ram.readUInt16LE(cpu.pc + 0x1);
			})
			.with(InstructionPattern.$HL_R8, ([_, register]) => {
				cpu.ram.writeUint8(cpu.registers[register.name], cpu.registers.hl);
			})
			.with(InstructionPattern.$HL_N8, () => {
				cpu.ram.writeUint8(cpu.ram.readUint8(cpu.pc + 0x1), cpu.registers.hl);
			});

		cpu.pc += payload.bytes;
	},
	ldh() {
		return false;
	},
	nop() {
		cpu.pc += 0x1;
	},
	or() {
		return false;
	},
	pop() {
		return false;
	},
	prefix() {
		return false;
	},
	push() {
		return false;
	},
	res() {
		return false;
	},
	ret() {
		return false;
	},
	reti() {
		return false;
	},
	rl() {
		return false;
	},
	rla() {
		return false;
	},
	rlc() {
		return false;
	},
	rlca() {
		return false;
	},
	rr() {
		return false;
	},
	rra() {
		return false;
	},
	rrc() {
		return false;
	},
	rrca() {
		return false;
	},
	rst() {
		return false;
	},
	sbc() {
		return false;
	},
	scf() {
		return false;
	},
	set() {
		return false;
	},
	sla() {
		return false;
	},
	sra() {
		return false;
	},
	srl() {
		return false;
	},
	stop() {
		return false;
	},
	sub() {
		return false;
	},
	swap() {
		return false;
	},
	xor() {
		// cpu.registers[payload.operands[0].name] ^=
		// 	cpu.registers[payload.operands[1].name];
		// cpu.pc += 0x1;
	},
};

export default function run(byte: number) {
	// logger.info(`pc: %s\tbyte: %s`, cpu.pc.toString(16), byte);

	payload = opcodes.default[`0x${byte.toString(16).padStart(2, '0')}`];
	// logger.info(JSON.stringify(payload));

	instructions[payload.mnemonic]();
}
