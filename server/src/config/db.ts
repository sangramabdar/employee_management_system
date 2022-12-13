import { Db, MongoClient } from "mongodb";

class MongoDatabase {
  private static readonly URL =
    process.env.DB_URL || "mongodb://localhost:27017";
  private static readonly DB_NAME =
    process.env.DB_NAME || "employee-management-system";
  private static db: Db | null = null;
  private static mongoClient: MongoClient = new MongoClient(MongoDatabase.URL, {
    serverSelectionTimeoutMS: 2000,
  });

  static async connectToDatabase() {
    try {
      await this.mongoClient.connect();
      MongoDatabase.db = MongoDatabase.mongoClient.db(MongoDatabase.DB_NAME);
      console.log("database is connected");
    } catch (error) {
      MongoDatabase.db = null;
      console.log("database is not connected");
    }
  }

  static async getDb(): Promise<Db | null> {
    if (MongoDatabase.db?.databaseName) {
      return MongoDatabase.db;
    }
    await MongoDatabase.connectToDatabase();
    return MongoDatabase.db;
  }
}

export default MongoDatabase;
