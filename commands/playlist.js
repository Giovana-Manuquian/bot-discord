const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Playlist"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/37i9dQZF1DZ06evO17QsVi?si=7f518c0652974c78"
    );
  },
};
