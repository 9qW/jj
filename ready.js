module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Type "+process.env.PREFIX+"help", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
  const channel = client.channels.cache.get(process.env.channelid);
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => {
    console.error(e);
  })
};
