const { Telegraf } = require("telegraf");
const token = "1556563631:AAH7PrTYBAZhQrdHbq7mWHA9ey7f9fCurMM";
const bot = new Telegraf(token);
bot.on("new_chat_members", (ctx) => {
  console.log(ctx.update.message.new_chat_members);
  ctx.update.message.new_chat_members.forEach((user) => {
    var fisrtLastName =
      "[" +
      user.first_name +
      " " +
      (user?.last_name ?? "") +
      "](tg://user?id=" +
      user.id +
      ")";
    var text = "Well cum @" + (user?.username ?? fisrtLastName);
    console.log(text);
    bot.telegram.sendVideo(
      ctx.update.message.chat.id,
      "BAACAgIAAxkBAAMeYAb-Hn4GrBsi-j488NjdA1Vf3j4AAmIMAAKm7jhIgTTwLF3_hHEeBA",
      {
        parse_mode: "Markdown",
        caption: text,
      }
    );
  });
});

bot.launch();
bot.command('dick',(ctx)=>ctx.reply('dick'));
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
