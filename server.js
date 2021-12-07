
const app = require("./src/app");
const port = 4001;

app.listen(port, () => {
    console.log('app está rodando na portaria ${port}');
});