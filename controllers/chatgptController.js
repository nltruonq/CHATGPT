const openai = require("../configs/openai");

const chatgptController = {
    chat: async (req, res) => {
        try {
            const content = req.body.content;
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: content }],
                temperature: 0.5,
                frequency_penalty: 0,
                presence_penalty: 0,
                max_tokens: 500,
                top_p: 1,
            });
            return res.status(200).json({
                message: response.data.choices[0].message.content,
                type: "chatgpt",
            });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};

module.exports = chatgptController;
