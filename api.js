import database from "./src/database/database.js";

let server = database.listen(3010, () => console.log(`Server running on port 3010`));

export default server;
