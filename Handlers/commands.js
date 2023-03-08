const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`Commands`);
table.setHeading('Command', 'Load Status');

module.exports = (client) => {
    fs.readdirSync('./command').forEach((folder) => {
        const commandFiles = fs.readdirSync(`./command/${folder}`).filter(file => file.endsWith('.js'));
        for (file of commandFiles) {
            let command = require(`../command/${folder}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, '❌');
                continue;
            }
        }
    });
    console.log(table.toString());
}