let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
  if (!text) throw 'Mention whose you want to check character'
  const mentionedUser =
    m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : args[2]
        ? args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net'
        : ''
  const userChar = [
    'Sigma',
    'Generous',
    'Grumpy',
    'Overconfident',
    'خول',
    'Good',
    'Simp',
    'جااامد',
    'Patient',
    'عرص',
    'Cool',
    'بضان',
    'Brilliant',
    'Sexy',
    'Hot',
    'علق',
    'كيوت',
  ]
  const userCharacterSeletion = userChar[Math.floor(Math.random() * userChar.length)]

  let message = `Character of @${mentionedUser.split('@')[0]}  is *${userCharacterSeletion}* 🔥⚡`

  conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
}
handler.help = ['character @tag']
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler
