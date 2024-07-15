import "@types/node";

interface FieldValues {
    name: string;
    value: string;
    inline?: boolean;
}

const embed = (webhookURL: string, color: number, desc: string, fields?: FieldValues[]) => {

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

    fetch(webhookURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        embeds: [exampleEmbed]
    })
    })
    .then(response => {
    if (response.ok) {
        console.log('Embed sent successfully!');
    } else {
        console.error('Failed to send embed:', response.status);
    }
    })
    .catch(error => {
    console.error('Error sending embed:', error);
    });
};

embed(process.argv[0], process.argv[1], process.argv[2]);
