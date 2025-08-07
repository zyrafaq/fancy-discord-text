function convertText() {
    const input = document.getElementById('inputText').value;
    let output = '';
    let spaceCount = 0;
    let sentenceStarted = false;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (!sentenceStarted && char.match(/[a-zA-Z]/)) {
            output += `**${char.toLowerCase()}** `;
            sentenceStarted = true;
        } else if (char === ' ') {
            spaceCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            if (spaceCount > 0) {
                output += ' ';
                spaceCount = 0;
            }
            if ((i + 1) % 2 === 0) {
                output += `*${char.toUpperCase()}* `;
            } else {
                output += `**${char.toLowerCase()}** `;
            }
        } else {
            if (spaceCount > 0) {
                output += ' ';
                spaceCount = 0;
            }
            output += char;
        }

        if (char === '.' || char === '?' || char === '!') {
            sentenceStarted = false;
        }
    }

    document.getElementById('outputText').value = output.trim();
    document.getElementById('copyButton').textContent = 'Copy';
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');

    const copyButton = document.getElementById('copyButton');
    copyButton.textContent = 'Copied!';
}
