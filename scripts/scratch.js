const fs = require('fs');
const text = fs.readFileSync('C:\\\\Users\\\\Ahmed Mahmoud\\\\.gemini\\\\antigravity\\\\brain\\\\cfbaed01-73a1-4f49-aca8-68ad471b93ec\\\\.system_generated\\\\steps\\\\6\\\\content.md', 'utf8');
const urls = text.match(/https?:\/\/[^\s"'<>]+/g);
console.log(urls ? urls.filter(u => u.includes('easykash')) : []);
