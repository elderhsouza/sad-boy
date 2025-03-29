import { readFile } from "node:fs/promises";
import loadCPU from "./src/cpu.ts";
import loadInstructions from "./src/instructions.ts";
import { logger } from "./src/logger.ts";

async function bootstrap() {
	try {
		const instructions = await loadInstructions();

		const filePath = new URL(
			"../roms/Tetris (World) (Rev 1).gb",
			import.meta.url,
		);

		const rom = await readFile(filePath);
		const title = Buffer.from(rom.buffer, 0x134, 0x143 - 0x134).toString();
		logger.info(`${title}\n`);

		const cpu = loadCPU({ instructions, rom });
		cpu.startInstructionCycle();

		// setTimeout(() => cpu.halt(), 2000);
	} catch (err) {
		logger.fatal(err);
		process.exitCode = 1;
		throw err;
	}
}
bootstrap();
