const { MongoClient } = require("mongodb");

// Cache the MongoDB client
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
  // Parse the document ID from the query parameters or path
  const documentId = event.queryStringParameters?.id;

  if (!documentId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Document ID is required" }),
    };
  }

  try {
    // Get the cached MongoDB client
    const client = await connectToDatabase();

    // Access the database and collection
    const database = client.db(dbName);
    const collection = database.collection(colName);

    // Convert the document ID to a MongoDB ObjectId
    // const { ObjectId } = require("mongodb");
    // const query = { _id: new ObjectId(documentId) };

    const packageQuery = { package_name: documentId };

    console.log(packageQuery);

    // Fetch the document by ID
    const document = await collection.findOne(packageQuery);

    if (!document) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Document not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(document),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
