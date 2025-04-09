import { logger } from './logger.ts';
import run from './operations.ts';

export const cpu = {
	ram: Buffer.alloc(0xffff).fill(0xff),
	registers: {
		// 8-bit registers
		a: 0,
		b: 0,
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
	reset() {
		this.ram = Buffer.alloc(0xffff).fill(0xff);
		this.pc = 0;
		this.sp = 0;
		this.registers = {
			a: 0,
			b: 0,
			c: 0,
			d: 0,
			e: 0,
			h: 0,
			l: 0,
			af: 0,
			bc: 0,
			de: 0,
			hl: 0,
		};
		this.flags = {
			c: 0,
			n: 0,
			h: 0,
			z: 0,
		};
	},
	halt() {
		this.running = false;
	},
	startInstructionCycle() {
		logger.info('start_instruction_cycle\n');
		this.running = true;

		const breakpoint = 0xff;

		const timer = setInterval(() => {
			if (this.pc === breakpoint || this.running === false)
				clearInterval(timer);

			const byte = this.ram.readUint8(this.pc);
			if (byte === breakpoint) clearInterval(timer);

			run(byte);

			console.log(Buffer.from(this.ram.buffer, 0xdfee, 0xdfff - 0xdfee));
		}, 300);
	},
};

export default function loadCPU(rom: Buffer<ArrayBufferLike>) {
	logger.info('load_cpu');
	rom.copy(cpu.ram, 0x0, 0x0, 0x8000);

	return cpu;
}

// logger.info('regs\t%s', JSON.stringify(this.registers));
// logger.info(`b %s\thl %s`, this.registers.b.toString(16), this.registers.hl.toString(16));
// logger.info('flag\t%s', JSON.stringify(this.flags));
// logger.info(
// 	`byte %s\t%s\t%s`,
// 	this.pc.toString(16),
// 	address.toString(16),
// 	Buffer.from(this.rom.buffer, this.pc, 4).toString('hex').match(/.{2}/g)?.join(' '),
// );
