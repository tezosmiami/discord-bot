const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('classic. . .'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};