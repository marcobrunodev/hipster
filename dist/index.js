"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _discordjs = require('discord.js'); var _discordjs2 = _interopRequireDefault(_discordjs);

_dotenv2.default.config();

const bot = new _discordjs2.default.Client();
const { TOKEN } = process.env;

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
});

bot.on("guildMemberAdd", (member) => {
  member
    .send(
      `Boas-vindas ao Discord da **#ImersãoDados**!

Meu nome é Hipster sou bot criado pela **Alura**.

Use de forma feliz o Discord da **#ImersãoDados**, troque conhecimento com as pessoas desse evento que a equipe da **Alura** criou pra comunidade, com respeito e sem medo de tirar suas dúvidas.

👉 Primeiro olhe as **Regras** de participação no Discord da ImersãoDados na sala \`#✅┇regras\`; 
👉 Algumas dúvidas frequentes estão na sala \`🤔┇faq\`; 
👉 Confira a agenda do evento na sala \`📅┇agenda\`;  
👉 Fale um pouco sobre você na sala \`🏄┇apresente-se\`

Assista as **5 dicas pra uma ImersãoDados mais feliz** do **Marco Bruno**:
📺 https://youtu.be/oa3HeDKAzz4`
    )
    .catch((error) => {
      console.log("Sad");
      console.log(error);
    });
  console.log("New user");
});

bot.login(TOKEN);
