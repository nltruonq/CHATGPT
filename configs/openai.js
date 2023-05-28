const { Configuration, OpenAIApi } = require('openai');

const configOpenai = () => {
    const configuration = new Configuration({
        organization: process.env.OPENAI_API_ORGANIZATION_ID,
        apiKey: process.env.OPENAI_API_KEY
    });
    
    return new OpenAIApi(configuration);
}

module.exports = configOpenai;