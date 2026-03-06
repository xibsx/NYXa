const { cmd, commands } = require('../command');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: 'menu',
    alias: ['status', 'live','secu','xibs','realgamer','gc'],
    desc: 'Check uptime and system status',
    category: 'main',
    react: '🟢',
    filename: __filename
},
    async (conn, mek, m, { from, sender, reply }) => {
        try {
            const totalCmds = commands.length;
            const up = runtime(process.uptime());

            const mem = process.memoryUsage();
            const usedMB = (mem.heapUsed / 1024 / 1024).toFixed(2);
            const totalMB = (mem.heapTotal / 1024 / 1024).toFixed(2);

            const platform = `${os.type()} ${os.release()} ${os.arch()}`;
            const cpu = os.cpus()[0].model;

            const status = `
*┏╾───────────*
*╿* _*JUST A SECURITY*_ 
*├⟐* _*BOT FOR GROUP*_ 
*├⟐* _*THANKS TO*_ 
*├⟐* _*REALGAMER*_
*╽*
*┗╾────────────*
*> Made with ❤️ by G͔̕L̫ͥ̀O̵̠͆̇ͮB͎̂̇͢͟͝A̷̴̯͓̍̿Ḽ̶̵̷ͩ͡*`;

            const buttons = [
                {
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'VIST WEBSITE',
                        url: 'https://www.xibs.space',
                        merchant_url: 'https://auto.xibs.space'
                    })
                },
                {
                    name: 'cta_copy',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'CODE',
                        copy_code: 'X15BXYa'
                    })
                },
                {
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'REALGAMER',
                        id: '.owner'
                    })
                },
                {
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'xibs',
                        id: '.ping'
                    })
                },
                {
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                        display_text: '❭❭ MENU ',
                        id: '.menu'
                    })
                }
            ];

            await conn.sendMessage(
                from,
                {
                    image: { url: config.ALIVE_IMG },
                    caption: status,
                    buttons,
                    headerType: 1,
                    viewOnce: true,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                },
                { quoted: mek }
            );

        } catch (e) {
            console.error("Alive Error:", e);
            reply(`❌ Error: ${e.message}`);
        }
    });