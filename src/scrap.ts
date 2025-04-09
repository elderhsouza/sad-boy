import { writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { pino } from 'pino';

const logger = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	},
});
logger.info(process.cwd());

const filePath = new URL('../../roms/Tetris (World) (Rev 1).gb', import.meta.url);

const rom = await readFile(filePath);
logger.info(rom.byteLength);

writeFileSync('./rom.buffer.txt', rom.toString('hex').match(/.{2}/g)!.join('\n'));

const title = Buffer.copyBytesFrom(rom, 0x134, 0x143 - 0x134);
logger.info(title.toString());

const licensee = Buffer.copyBytesFrom(rom, 0x14b, 1);
logger.info(licensee);
