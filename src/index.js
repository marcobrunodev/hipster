require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client();
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
