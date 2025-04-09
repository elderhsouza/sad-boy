import type { OpcodePayload } from './constants.ts';

export const opcodes: {
	default: Record<string, OpcodePayload>;
	prefixed: Record<string, OpcodePayload>;
} = {
	default: {
		'0x00': {
			mnemonic: 'nop',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x01': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [12],
			operands: [
				{
					name: 'bc',
					immediate: true,
				},
				{
					name: 'n16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x02': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'bc',
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x03': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'bc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x04': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x05': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x06': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x07': {
			mnemonic: 'rlca',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x08': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [20],
			operands: [
				{
					name: 'a16',
					bytes: 2,
					immediate: false,
				},
				{
					name: 'sp',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x09': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'bc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x0a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'bc',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x0b': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'bc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x0c': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x0d': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x0e': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x0f': {
			mnemonic: 'rrca',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x10': {
			mnemonic: 'stop',
			bytes: 2,
			cycles: [4],
			operands: [
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x11': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [12],
			operands: [
				{
					name: 'de',
					immediate: true,
				},
				{
					name: 'n16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x12': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'de',
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x13': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'de',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x14': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x15': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x16': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x17': {
			mnemonic: 'rla',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x18': {
			mnemonic: 'jr',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x19': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'de',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x1a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'de',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x1b': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'de',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x1c': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x1d': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x1e': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x1f': {
			mnemonic: 'rra',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x20': {
			mnemonic: 'jr',
			bytes: 2,
			cycles: [12, 8],
			operands: [
				{
					name: 'nz',
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x21': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'n16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x22': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					increment: true,
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x23': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x24': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x25': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x26': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x27': {
			mnemonic: 'daa',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: 'z',
				n: '-',
				h: '0',
				c: 'c',
			},
		},
		'0x28': {
			mnemonic: 'jr',
			bytes: 2,
			cycles: [12, 8],
			operands: [
				{
					name: 'z',
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x29': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x2a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					increment: true,
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x2b': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x2c': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x2d': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x2e': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x2f': {
			mnemonic: 'cpl',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '1',
				h: '1',
				c: '-',
			},
		},
		'0x30': {
			mnemonic: 'jr',
			bytes: 2,
			cycles: [12, 8],
			operands: [
				{
					name: 'nc',
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x31': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [12],
			operands: [
				{
					name: 'sp',
					immediate: true,
				},
				{
					name: 'n16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x32': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					decrement: true,
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x33': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'sp',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x34': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x35': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x36': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x37': {
			mnemonic: 'scf',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: '0',
				c: '1',
			},
		},
		'0x38': {
			mnemonic: 'jr',
			bytes: 2,
			cycles: [12, 8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x39': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'sp',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x3a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					decrement: true,
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x3b': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'sp',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x3c': {
			mnemonic: 'inc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: '-',
			},
		},
		'0x3d': {
			mnemonic: 'dec',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0x3e': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x3f': {
			mnemonic: 'ccf',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x40': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x41': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x42': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x43': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x44': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x45': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x46': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x47': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x48': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x49': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4b': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4c': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4d': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4e': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x4f': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x50': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x51': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x52': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x53': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x54': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x55': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x56': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x57': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x58': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x59': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5b': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5c': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5d': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5e': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x5f': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x60': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x61': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x62': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x63': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x64': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x65': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x66': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x67': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x68': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x69': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6b': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6c': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6d': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6e': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x6f': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x70': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x71': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x72': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x73': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x74': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x75': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x76': {
			mnemonic: 'halt',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x77': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x78': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x79': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7a': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7b': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7c': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7d': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7e': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x7f': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x80': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x81': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x82': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x83': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x84': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x85': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x86': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x87': {
			mnemonic: 'add',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x88': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x89': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8a': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8b': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8c': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8d': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8e': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x8f': {
			mnemonic: 'adc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0x90': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x91': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x92': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x93': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x94': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x95': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x96': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x97': {
			mnemonic: 'sub',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '1',
				n: '1',
				h: '0',
				c: '0',
			},
		},
		'0x98': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x99': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9a': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9b': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9c': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9d': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9e': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0x9f': {
			mnemonic: 'sbc',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: '-',
			},
		},
		'0xa0': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa1': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa2': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa3': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa4': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa5': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa6': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa7': {
			mnemonic: 'and',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xa8': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xa9': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xaa': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xab': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xac': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xad': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xae': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xaf': {
			mnemonic: 'xor',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '1',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb0': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb1': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb2': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb3': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb4': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb5': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb6': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb7': {
			mnemonic: 'or',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xb8': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xb9': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xba': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xbb': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xbc': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xbd': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xbe': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xbf': {
			mnemonic: 'cp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '1',
				n: '1',
				h: '0',
				c: '0',
			},
		},
		'0xc0': {
			mnemonic: 'ret',
			bytes: 1,
			cycles: [20, 8],
			operands: [
				{
					name: 'nz',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc1': {
			mnemonic: 'pop',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'bc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc2': {
			mnemonic: 'jp',
			bytes: 3,
			cycles: [16, 12],
			operands: [
				{
					name: 'nz',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc3': {
			mnemonic: 'jp',
			bytes: 3,
			cycles: [16],
			operands: [
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc4': {
			mnemonic: 'call',
			bytes: 3,
			cycles: [24, 12],
			operands: [
				{
					name: 'nz',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc5': {
			mnemonic: 'push',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: 'bc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc6': {
			mnemonic: 'add',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0xc7': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$00',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc8': {
			mnemonic: 'ret',
			bytes: 1,
			cycles: [20, 8],
			operands: [
				{
					name: 'z',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc9': {
			mnemonic: 'ret',
			bytes: 1,
			cycles: [16],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xca': {
			mnemonic: 'jp',
			bytes: 3,
			cycles: [16, 12],
			operands: [
				{
					name: 'z',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcb': {
			mnemonic: 'prefix',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcc': {
			mnemonic: 'call',
			bytes: 3,
			cycles: [24, 12],
			operands: [
				{
					name: 'z',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcd': {
			mnemonic: 'call',
			bytes: 3,
			cycles: [24],
			operands: [
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xce': {
			mnemonic: 'adc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0xcf': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$08',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd0': {
			mnemonic: 'ret',
			bytes: 1,
			cycles: [20, 8],
			operands: [
				{
					name: 'nc',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd1': {
			mnemonic: 'pop',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'de',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd2': {
			mnemonic: 'jp',
			bytes: 3,
			cycles: [16, 12],
			operands: [
				{
					name: 'nc',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd3': {
			mnemonic: 'illegal_d3',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd4': {
			mnemonic: 'call',
			bytes: 3,
			cycles: [24, 12],
			operands: [
				{
					name: 'nc',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd5': {
			mnemonic: 'push',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: 'de',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd6': {
			mnemonic: 'sub',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xd7': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$10',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd8': {
			mnemonic: 'ret',
			bytes: 1,
			cycles: [20, 8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd9': {
			mnemonic: 'reti',
			bytes: 1,
			cycles: [16],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xda': {
			mnemonic: 'jp',
			bytes: 3,
			cycles: [16, 12],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdb': {
			mnemonic: 'illegal_db',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdc': {
			mnemonic: 'call',
			bytes: 3,
			cycles: [24, 12],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdd': {
			mnemonic: 'illegal_dd',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xde': {
			mnemonic: 'sbc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xdf': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$18',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe0': {
			mnemonic: 'ldh',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: 'a8',
					bytes: 1,
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe1': {
			mnemonic: 'pop',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe2': {
			mnemonic: 'ldh',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe3': {
			mnemonic: 'illegal_e3',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe4': {
			mnemonic: 'illegal_e4',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe5': {
			mnemonic: 'push',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe6': {
			mnemonic: 'and',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '0',
			},
		},
		'0xe7': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$20',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe8': {
			mnemonic: 'add',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'sp',
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0xe9': {
			mnemonic: 'jp',
			bytes: 1,
			cycles: [4],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xea': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [16],
			operands: [
				{
					name: 'a16',
					bytes: 2,
					immediate: false,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xeb': {
			mnemonic: 'illegal_eb',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xec': {
			mnemonic: 'illegal_ec',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xed': {
			mnemonic: 'illegal_ed',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xee': {
			mnemonic: 'xor',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xef': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$28',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf0': {
			mnemonic: 'ldh',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a8',
					bytes: 1,
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf1': {
			mnemonic: 'pop',
			bytes: 1,
			cycles: [12],
			operands: [
				{
					name: 'af',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: 'n',
				h: 'h',
				c: 'c',
			},
		},
		'0xf2': {
			mnemonic: 'ldh',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'c',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf3': {
			mnemonic: 'di',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf4': {
			mnemonic: 'illegal_f4',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf5': {
			mnemonic: 'push',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: 'af',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf6': {
			mnemonic: 'or',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0xf7': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$30',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf8': {
			mnemonic: 'ld',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: 'hl',
					immediate: true,
				},
				{
					name: 'sp',
					increment: true,
					immediate: true,
				},
				{
					name: 'e8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '0',
				n: '0',
				h: 'h',
				c: 'c',
			},
		},
		'0xf9': {
			mnemonic: 'ld',
			bytes: 1,
			cycles: [8],
			operands: [
				{
					name: 'sp',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfa': {
			mnemonic: 'ld',
			bytes: 3,
			cycles: [16],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'a16',
					bytes: 2,
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfb': {
			mnemonic: 'ei',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfc': {
			mnemonic: 'illegal_fc',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfd': {
			mnemonic: 'illegal_fd',
			bytes: 1,
			cycles: [4],
			operands: [],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfe': {
			mnemonic: 'cp',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
				{
					name: 'n8',
					bytes: 1,
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '1',
				h: 'h',
				c: 'c',
			},
		},
		'0xff': {
			mnemonic: 'rst',
			bytes: 1,
			cycles: [16],
			operands: [
				{
					name: '$38',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
	},
	prefixed: {
		'0x00': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x01': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x02': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x03': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x04': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x05': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x06': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x07': {
			mnemonic: 'rlc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x08': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x09': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0a': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0b': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0c': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0d': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0e': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x0f': {
			mnemonic: 'rrc',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x10': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x11': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x12': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x13': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x14': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x15': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x16': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x17': {
			mnemonic: 'rl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x18': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x19': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1a': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1b': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1c': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1d': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1e': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x1f': {
			mnemonic: 'rr',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x20': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x21': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x22': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x23': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x24': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x25': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x26': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x27': {
			mnemonic: 'sla',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x28': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x29': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2a': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2b': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2c': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2d': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2e': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x2f': {
			mnemonic: 'sra',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x30': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x31': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x32': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x33': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x34': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x35': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x36': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x37': {
			mnemonic: 'swap',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: '0',
			},
		},
		'0x38': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x39': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3a': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3b': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3c': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3d': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3e': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x3f': {
			mnemonic: 'srl',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '0',
				c: 'c',
			},
		},
		'0x40': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x41': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x42': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x43': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x44': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x45': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x46': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x47': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x48': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x49': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4a': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4b': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4c': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4d': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4e': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x4f': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x50': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x51': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x52': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x53': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x54': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x55': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x56': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x57': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x58': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x59': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5a': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5b': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5c': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5d': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5e': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x5f': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x60': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x61': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x62': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x63': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x64': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x65': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x66': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x67': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x68': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x69': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6a': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6b': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6c': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6d': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6e': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x6f': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x70': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x71': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x72': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x73': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x74': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x75': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x76': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x77': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x78': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x79': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7a': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7b': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7c': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7d': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7e': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [12],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x7f': {
			mnemonic: 'bit',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: 'z',
				n: '0',
				h: '1',
				c: '-',
			},
		},
		'0x80': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x81': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x82': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x83': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x84': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x85': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x86': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x87': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x88': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x89': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8a': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8b': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8c': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8d': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8e': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x8f': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x90': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x91': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x92': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x93': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x94': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x95': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x96': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x97': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x98': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x99': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9a': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9b': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9c': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9d': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9e': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0x9f': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa0': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa1': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa2': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa3': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa4': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa5': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa6': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa7': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa8': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xa9': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xaa': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xab': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xac': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xad': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xae': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xaf': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb0': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb1': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb2': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb3': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb4': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb5': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb6': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb7': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb8': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xb9': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xba': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xbb': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xbc': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xbd': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xbe': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xbf': {
			mnemonic: 'res',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc0': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc1': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc2': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc3': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc4': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc5': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc6': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc7': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '0',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc8': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xc9': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xca': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcb': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcc': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcd': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xce': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xcf': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '1',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd0': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd1': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd2': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd3': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd4': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd5': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd6': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd7': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '2',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd8': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xd9': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xda': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdb': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdc': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdd': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xde': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xdf': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '3',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe0': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe1': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe2': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe3': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe4': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe5': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe6': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe7': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '4',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe8': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xe9': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xea': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xeb': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xec': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xed': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xee': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xef': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '5',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf0': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf1': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf2': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf3': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf4': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf5': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf6': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf7': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '6',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf8': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'b',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xf9': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'c',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfa': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'd',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfb': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'e',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfc': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'h',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfd': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'l',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xfe': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [16],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'hl',
					immediate: false,
				},
			],
			immediate: false,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
		'0xff': {
			mnemonic: 'set',
			bytes: 2,
			cycles: [8],
			operands: [
				{
					name: '7',
					immediate: true,
				},
				{
					name: 'a',
					immediate: true,
				},
			],
			immediate: true,
			flags: {
				z: '-',
				n: '-',
				h: '-',
				c: '-',
			},
		},
	},
};
