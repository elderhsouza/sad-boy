import { CPU } from './cpu.ts';
import { OpcodePayload } from './instructions.ts';
import { logger } from './logger.ts';

interface ExecParams {
	cpu: CPU;
	byte: number;
	payload: OpcodePayload;
}

const operations = {
	adc() {},
	add() {},
	and() {},
	bit() {},
	call() {},
	ccf() {},
	cp() {},
	cpl() {},
	daa() {},
	dec({ cpu, payload }: ExecParams) {
		// @ts-expect-error wip
		cpu.registers[payload.operands[0].name] = (cpu.registers[payload.operands[0].name] - 0x1) & 0xff;
		cpu.pc += payload.bytes;
	},
	di() {},
	ei() {},
	halt() {},
	illegal_d3() {},
	illegal_db() {},
	illegal_dd() {},
	illegal_e3() {},
	illegal_e4() {},
	illegal_eb() {},
	illegal_ec() {},
	illegal_ed() {},
	illegal_f4() {},
	illegal_fc() {},
	illegal_fd() {},
	inc() {},
	jp({ cpu, payload }: ExecParams) {
		if (payload.operands[0].name === 'a16') {
			cpu.pc = cpu.rom!.readUInt16LE(cpu.pc + 0x1);
		}
	},
	jr({ cpu }: ExecParams) {
		cpu.pc = cpu.pc + 0x2 + cpu.rom!.readInt8(cpu.pc + 0x1);
	},
	ld({ cpu, payload }: ExecParams) {
		if (payload.operands[1].name === 'n16') {
			// @ts-expect-error wip
			cpu.registers[payload.operands[0].name] = cpu.rom!.readUInt16LE(cpu.pc + 0x1);
		} else if (payload.operands[1].name === 'n8') {
			// @ts-expect-error wip
			cpu.registers[payload.operands[0].name] = cpu.rom!.readUInt8(cpu.pc + 0x1);
		} else {
			// @ts-expect-error wip
			cpu.ram.writeUInt8(cpu.registers[payload.operands[1].name], cpu.registers[payload.operands[0].name]);
			if (payload.operands[0].decrement) {
				// @ts-expect-error wip
				cpu.registers[payload.operands[0].name] -= 1;
			}
		}
		cpu.pc += payload.bytes;
	},
	ldh() {},
	nop({ cpu }: ExecParams) {
		cpu.pc += 0x1;
	},
	or() {},
	pop() {},
	prefix() {},
	push() {},
	res() {},
	ret() {},
	reti() {},
	rl() {},
	rla() {},
	rlc() {},
	rlca() {},
	rr() {},
	rra() {},
	rrc() {},
	rrca() {},
	rst() {},
	sbc() {},
	scf() {},
	set() {},
	sla() {},
	sra() {},
	srl() {},
	stop() {},
	sub() {},
	swap() {},
	xor({ cpu, payload }: ExecParams) {
		// @ts-expect-error wip
		cpu.registers[payload.operands[0].name] ^= cpu.registers[payload.operands[1].name];
		cpu.pc += 0x1;
	},
};

// LD HL, n16 3  12

export default function exec({ cpu, byte: address, payload }: ExecParams) {
	logger.info(`${payload.mnemonic}\t${payload.bytes}\t${JSON.stringify(payload.operands)}\n`);

	operations[payload.mnemonic]({ cpu, byte: address, payload });
}
