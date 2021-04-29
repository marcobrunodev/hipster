require("dotenv").config();
const Discord = require("discord.js");

const bot = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"],
});
const { TOKEN, ID_MESSAGE_LANG } = process.env;

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
});

const toggleRole = async (reaction, user) => {
  if (ID_MESSAGE_LANG === reaction.message.id) {
    const guild = reaction.message.guild;
    const member = guild.members.cache.get(user.id);

    const emoji = reaction._emoji.name;
    const regex = new RegExp(`^${emoji}`);

    const role = member.guild.roles.cache.find((role) => regex.test(role.name));

    if (role) {
      if (member.roles.cache.some((r) => r.id === role.id)) {
        member.roles.remove(role);
      } else {
        member.roles.add(role);
      }
    } else {
      reaction.remove();
    }
  }
};

bot.on("messageReactionAdd", toggleRole);

bot.on("messageReactionRemove", toggleRole);

bot.login(TOKEN);
