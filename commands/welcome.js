const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('welcome message. . .'),
	async execute(interaction) {
		interaction.reply(`welcome ${interaction.user.tag}! -  did you get your fruit ensalada yet?`);
	},
};