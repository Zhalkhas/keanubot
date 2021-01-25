const { Telegraf } = require("telegraf");

const stickers = [
  "CAACAgIAAxkBAAMxYA5qp3D4HJN8FxRfAAGUernmPdFfAAJiAAO83U8RTdRevu-NTHUeBA",
  "CAACAgIAAxkBAAMyYA5qqqkutvf6MZ47aNXo6pgsyQkAAmMAA7zdTxGmqOtpcbPQhx4E",
  "CAACAgIAAxkBAAMzYA5qrrpbNRv1QtGDGEXfJlO8TPoAAmQAA7zdTxHUwfg4xLp-iR4E",
  "CAACAgIAAxkBAAM0YA5qsGuhbvMPk-Hbjsk0fr09QC4AAmUAA7zdTxFc_482-nf6gx4E",
  "CAACAgIAAxkBAAM1YA5qs20jEZ7r4pvF61cNt_kuyWQAAmYAA7zdTxHM0qplAiFEGR4E",
  "CAACAgIAAxkBAAM2YA5qtaT724PXFxPzu9jMYzKZ3o0AAmgAA7zdTxFZ0lpDzOs1jh4E",
  "CAACAgIAAxkBAAM3YA5qt1QHMa1eAh1GqSdL_wuTFxIAAmkAA7zdTxH5jtYQpSNVTB4E",
  "CAACAgIAAxkBAAM4YA5qucDTmzP552fqzjxwmy_xbHIAAmoAA7zdTxEFbmTjJDjduR4E",
  "CAACAgIAAxkBAAM5YA5qu2SBgKTnMKL1yAYZJhxtH64AAmsAA7zdTxFhfdwikqaV0x4E",
  "CAACAgIAAxkBAAM6YA5qvjIZmSHqEjJwLGUzR3zxbq4AAmwAA7zdTxEc-_nRGWavJR4E",
  "CAACAgIAAxkBAAM7YA5qwc2yU-rgku_hxJzG_V9hlGUAAm0AA7zdTxGKRBMDtnqWwB4E",
  "CAACAgIAAxkBAAM8YA5qw1aG9iXQikJO2fmT93PtMo0AAnwAA7zdTxEfuwocL9iZfx4E",
  "CAACAgIAAxkBAAM9YA5qxfK-Xdq6PByFvC5-fgdjp4wAAn0AA7zdTxH3T2dclAoiXh4E",
  "CAACAgIAAxkBAAM-YA5qx9Zj7iCHMngk17AiUz73kvAAAn4AA7zdTxHwruod5Ohf6B4E",
  "CAACAgIAAxkBAAM_YA5qyhKWkCJxxHXXRTJw42Vbj-IAAn8AA7zdTxF25nn5ubWtoR4E",
  "CAACAgIAAxkBAANAYA5qzO0hLvgT0Z-KooDopj9JMkcAAoAAA7zdTxGIte3HEWRlOh4E",
];
const keywords = [
  "cum",
  "dick",
  "cock",
  "fuck",
  "ass",
  "қотақ",
  "сік",
  "сіг",
  "көт",
  "hole",
  "cunt",
  "twitch",
  "fom",
  "фом",
];
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
bot.on("message", (ctx) => {
  const text = ctx.message.text;
  for (let i = 0; i < keywords.length; i++) {
    let keyword = keywords[i];
    if (text.toLowerCase().includes(keyword)) {
      console.log("keyword " + keyword + " text " + text.toLowerCase());
      console.log("contains " + text.toLowerCase().includes(keyword));
      ctx.replyWithSticker(
        stickers[Math.floor(Math.random() * stickers.length)]
      );
      return;
    }
  }
});
bot.command("dick", (ctx) => ctx.replyWithSticker(stickers[3]));
bot.command("cum", (ctx) => ctx.replyWithSticker(stickers[2]));
bot.launch({
  webhook: { domain: "https://keanubot.herokuapp.com", port: process.env.PORT },
});
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
