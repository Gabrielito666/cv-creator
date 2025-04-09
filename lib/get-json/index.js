function extractTagValue(xml, tag) {
    const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`);
    const match = xml.match(regex);
    if (!match) throw new Error(`Missing <${tag}>`);
    return match[1].trim();
}

function extractMultipleTagValues(xml, tag) {
    const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g');
    const matches = [...xml.matchAll(regex)];
    if (matches.length === 0) throw new Error(`Missing <${tag}>`);
    return matches.map(m => m[1].trim());
}

function parseCVML(xml) {
    const head = extractTagValue(xml, 'head');
    const body = extractTagValue(xml, 'body');

    return {
        head: {
            language: extractTagValue(head, 'language'),
            color: extractTagValue(head, 'color'),
            font: extractTagValue(head, 'font'),
        },
        body: {
            name: extractTagValue(body, 'name'),
            website: extractTagValue(body, 'website'),
            contact: {
                email: extractTagValue(body, 'email'),
                phone: extractTagValue(body, 'phone'),
                address: extractTagValue(body, 'address'),
            },
            skills: extractMultipleTagValues(body, 'skill'),
            profile: extractTagValue(body, 'profile'),
            experience: extractTagValue(body, 'experience'),
            education: extractTagValue(body, 'education'),
        }
    };
}
const getJSON = (xmlString) =>
{
    try {
        const json = parseCVML(xmlString);
        return json;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = getJSON;