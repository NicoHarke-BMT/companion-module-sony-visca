import { Regex } from '@companion-module/base'

export function getConfigDefinitions(CHOICES) {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module controls PTZ cameras with VISCA over IP protocol',
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 6,
			regex: Regex.IP,
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'Target Port (default: 52381)',
			width: 6,
			regex: Regex.PORT,
			default: '52381',
		},
		{
			type: 'dropdown',
			id: 'id',
			label: 'camera id',
			width: 6,
			default: '128',
			choices: CHOICES.CAMERA_ID,
		},
	]
}
