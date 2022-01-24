const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

const getQuote = async = () => {
    return fetch("https://zenquotes.io/api/random")
      .then(res => {
        return res.json()
        })
      .then(data => {
        return data[0]["q"] + " -" + data[0]["a"]
      })
  }
module.exports = {
	data: new SlashCommandBuilder()
		.setName('inspire')
		.setDescription('zen quotes. . .'),
	async execute(interaction) {
      const quote =  await getQuote();
		interaction.reply(`${quote}`);
	},
};