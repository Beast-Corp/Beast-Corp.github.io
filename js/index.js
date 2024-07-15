const axios = require("axios");

const embed = async (webhookURL = "https://discord.com/api/webhooks/1262433232138272860/i-6ER3yNUvkeyAAH6-PnGtw5-grq3aCsVW0Qw28eg19mYHtHcmWPgrw0TYw88Id2Tf3B", color, desc, fields) => {

    const exampleEmbed = {
        color: color,
        title: 'Deployment Status',
        url: 'https://beast-corp.github.io',
        author: {
            name: 'The Corporate',
            icon_url: 'https://cdn.discordapp.com/attachments/1132923743337988146/1262371213037146182/923602616506802256.png?ex=66965a4e&is=669508ce&hm=a689e5660b8a9eb29e5f99954566b6dc460bbfa951dce4b424dccc62003a13fa&',
            url: 'https://www.github.com/HackerX7889',
        },
        description: desc,
        fields: fields ? fields : [],
        timestamp: new Date().toISOString(),
    };

    await axios.post(webhookURL, {
       body: {
           embeds: [exampleEmbed]
       }
    }).then(() => {
        console.log('Embed sent successfully!');
    }).catch(err => {
        console.error(err);
    });
};

embed(process.argv[0], process.argv[1], process.argv[2]);
