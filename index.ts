// import { readFile } from "node:fs/promises";
import { pino } from "pino";
import loadInstructions from "./src/instructions.ts";

const logger = pino({
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
});

function bootstrap() {
	try {
		const instructions = loadInstructions();
		const nop = instructions.default.get(0);

		if (nop) {
			console.log(nop);
		}
	} catch (err) {
		logger.fatal(err);
		process.exitCode = 1;
		throw err;
	}
}
bootstrap();

// const filePath = new URL("../roms/Tetris (World) (Rev 1).gb", import.meta.url);

// const rom = await readFile(filePath);
// const title = Buffer.from(rom.buffer, 0x134, 0x143 - 0x134).toString();
// logger.info(title);

// logger.info(rom[0x150]?.toString(16));
// logger.info(rom.readUintLE(0x151, 2).toString(16));

//// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const operations: Record<string, any> = {
// 	NOP: () => {},
// 	JP: () => {},
// 	LD: () => {},
// 	ADC: () => {},
// 	ILLEGAL_ED: () => {},
// 	CALL: () => {},
// 	DEC: () => {},
// };

// const cpu = {
// 	registers: {
// 		// 8-bit registers
// 		a: 0,
// 		b: 0,
// 		c: 0,
// 		d: 0,
// 		e: 0,
// 		h: 0,
// 		l: 0,
// 		// 16-bit registers
// 		bc: 0,
// 		de: 0,
// 		hl: 0,
// 		// flags: lower 8 bits of the 16-bit AF register
// 		flags: {
// 			// zero flag
// 			z: 0,
// 			// subtraction flag (BCD)
// 			n: 0,
// 			// half carry flag (BCD)
// 			h: 0,
// 			// carry flag
// 			c: 0,
// 		},
// 	},
// 	// stack pointer
// 	sp: 0,
// 	// program counter
// 	pc: 0x100,
// 	// instructions
// 	nop() {
// 		cpu.pc += 0x1;
// 	},
// 	jp(to: number) {
// 		cpu.pc = to;
// 	},
// };

// let ticks = 0;
// const timer = setInterval(() => {
// 	logger.info(`tick: ${ticks}`);
// 	logger.info(`pc: ${cpu.pc.toString(16)}`);

// 	// const instruction = Buffer.from(rom.buffer, cpu.pc, 0x1);
// 	const instruction = rom.readUint8(cpu.pc).toString(16);
// 	logger.info(`instruction: ${instruction}`);
// 	logger.info(Buffer.from(rom.buffer, cpu.pc, 0x1).toString("hex"));
// 	console.log(instruction);
// 	// console.log(`instruction`, instruction.toString('hex'));

// 	// const payload = instructions.standard.get(
// 	// 	`0x${instruction.toString('hex').toUpperCase()}`,
// 	// );
// 	// logger.info(`opcode: ${payload.mnemonic}`);

// 	// if (Object.hasOwn(cpu, payload.mnemonic.toLowerCase())) {
// 	// 	cpu[payload.mnemonic.toLowerCase()](rom.readUIntLE(cpu.pc + 0x1, 2));
// 	// }
// 	// operations[opCode.mnemonic]();
// 	// cpu.pc = cpu.pc + 0x1;

// 	ticks++;
// 	if (ticks === 5) clearInterval(timer);
// }, 100);
