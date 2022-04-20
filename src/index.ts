import app from "./app";
import "dotenv/config";
import { connect } from "./utils/db";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
