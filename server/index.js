const expess = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

const port = 3001;

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

app.listen(port, () => {
  console.log(`listen on port: ${port}`);
});
