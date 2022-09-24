const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

const getPalabra = async = () => {
    return fetch("https://palabras-aleatorias-public-api.herokuapp.com/random")
      .then(res => {
        return res.json()
        })
      .then(data => {
        return data.body.Word
      })
  }
module.exports = {
	data: new SlashCommandBuilder()
		.setName('palabra')
		.setDescription('random palabra. . .'),
	async execute(interaction) {
      const palabra =  await getPalabra();
		interaction.reply(`${palabra}`);
	},
};
