const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('marco')
		.setDescription('like the game. . .'),
	async execute(interaction) {
		await interaction.reply('polo!');
	},
};