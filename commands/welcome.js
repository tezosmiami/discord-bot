const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('Replies with welcome message'),
	async execute(interaction) {
		interaction.reply(`Welcome ${interaction.user.tag+interaction.user.id}`);
	},
};