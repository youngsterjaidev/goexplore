const { MongoClient } = require("mongodb");

// Cache the MongoDB connection
let cachedClient = null;
const dbName = process.env.DB_NAME || "goexplore";
const colName = process.env.COL_NAME || "packages";

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const uri =
    process.env.MONGODB_URI ||
    "mongodb+srv://m001-student:m001-student@server967.eltku.mongodb.net/?retryWrites=true&w=majority&appName=Server967";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  cachedClient = client;
  return client;
}

exports.handler = async (event, context) => {
  const client = await connectToDatabase();
  const database = client.db(dbName);
  const collection = database.collection(colName);

  try {
    const query = {};
    const documents = await collection.find(query).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(documents),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
