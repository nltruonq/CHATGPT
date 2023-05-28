const routes = (app) => {
    app.use("/api/v1/chatgpt", require("./chatgpt"));
};

module.exports = routes;
