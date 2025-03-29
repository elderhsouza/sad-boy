import { Instructions } from './instructions.ts';
import { logger } from './logger.ts';
import exec from './operations.ts';

export type CPU = {
	instructions: null | Instructions;
	rom: null | Buffer<ArrayBufferLike>;
	ram: Buffer<ArrayBufferLike>;
	registers: Record<'a' | 'b' | 'c' | 'd' | 'e' | 'h' | 'l' | 'af' | 'bc' | 'de' | 'hl', number>;
	flags: Record<'z' | 'n' | 'h' | 'c', number>;
	sp: number;
	pc: number;
	running: boolean;
	readonly halt: () => void;
	readonly startInstructionCycle: () => void;
};

const cpu: CPU = {
	instructions: null,
	rom: null,
	ram: Buffer.alloc(0xffff).fill(0x1),
	registers: {
		// 8-bit registers
		a: 0,
		b: 0xff,
		c: 0,
		d: 0,
		e: 0,
		h: 0,
		l: 0,
		// 16-bit registers
		af: 0,
		bc: 0,
		de: 0,
		hl: 0,
	},
	// flags: lower 8 bits of the 16-bit AF register
	flags: {
		// zero
		z: 0,
		// subtraction (BCD)
		n: 0,
		// half carry (BCD)
		h: 0,
		// carry
		c: 0,
	},
	// stack pointer
	sp: 0,
	// program counter
	pc: 0x100,
	running: false,
	halt() {
		this.running = false;
	},
	startInstructionCycle() {
		logger.info('start_instruction_cycle\n');

		if (!this.instructions || !this.rom) throw new Error('fatal');
		this.running = true;

		const breakpoint = 0xff;

		const timer = setInterval(() => {
			if (!this.instructions || !this.rom) throw new Error('fatal');
			if (this.pc === breakpoint || this.running === false) clearInterval(timer);

			const byte = this.rom.readUint8(this.pc);
			if (byte === breakpoint) clearInterval(timer);

			logger.info('regs\t%s', JSON.stringify(this.registers));
			logger.info(`b %s\thl %s`, this.registers.b.toString(16), this.registers.hl.toString(16));
			logger.info('flag\t%s', JSON.stringify(this.flags));
			logger.info(
				`byte %s\t%s\t%s`,
				this.pc.toString(16),
				byte.toString(16),
				Buffer.from(this.rom.buffer, this.pc, 4).toString('hex').match(/.{2}/g)?.join(' '),
			);

			const operation = this.instructions.default.get(byte);
			exec({ byte, cpu: this, payload: operation! });

			console.log(Buffer.from(this.ram.buffer, 0xdfee, 0xdfff - 0xdfee));
		}, 100);
	},
};

export default function loadCPU({ instructions, rom }: { instructions: Instructions; rom: Buffer<ArrayBufferLike> }) {
	logger.info('load_cpu');

	cpu.instructions = instructions;
	cpu.rom = rom;
	cpu.rom.copy(cpu.ram, 0x0, 0x0, 0x8000);

	// process.exit();
	return cpu;
}
