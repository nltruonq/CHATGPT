const configOpenai = require("../configs/openai");

const chatgptController = {
    chat: async (req, res) => {
        try {
            const content = req.body.content;
            const openai = configOpenai();
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: content }],
                temperature: 0.5,
                frequency_penalty: 0.5,
                presence_penalty: 0.4,
                max_tokens: 100,
                top_p: 1,
            });
            console.log(response);
            return res.status(200).json({
                message: response.data.choices[0].message.content,
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};

module.exports = chatgptController;
