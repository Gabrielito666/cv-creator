const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const getJson = (data) =>
{
    const promise = new Promise((resolve, reject) =>
    {
        parser.parseString(data, (err, result) => {
            if (err)
            {
                throw new Error('Error to parsing cvml');
            }
            else
            {
                const { header, body } = result.cvml;
                const language = header[0].language[0];
                const color = header[0].color[0];
                const font = header[0].font[0];

                const name = body[0].name[0];
                const website = body[0].website[0];
                const email = body[0].contact[0].email[0];
                const phone = body[0].contact[0].phone[0];
                const address = body[0].contact[0].address[0];
                const skills = body[0].skills[0].skill;
                const profile = body[0].profile[0];
                const experience = body[0].experience[0];
                const education = body[0].education[0];
                const data =
                {
                    language,   color,      font,       name,       website,        email,
                    phone,      address,    skills,     profile,    experience,     education
                }

                resolve(data);
            }
        });
    })
    return promise
}
module.exports = getJson;