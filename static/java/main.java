//test code to see if java worked, but we ended up using python for database connections
/*
package com.mongodb.quickstart;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.FindOneAndUpdateOptions;
import com.mongodb.client.model.ReturnDocument;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.json.JsonWriterSettings;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Updates.*;

public class main {

    public static void main(String[] args) {
        JsonWriterSettings prettyPrint = JsonWriterSettings.builder().indent(true).build();

        try (MongoClient mongoClient = MongoClients.create(System.getProperty("mongodb.uri"))) {
            MongoDatabase sampleTrainingDB = mongoClient.getDatabase("sample_training");
            MongoCollection<Document> gradesCollection = sampleTrainingDB.getCollection("grades");
            Bson filter = eq("student_id", 10000);
            Bson updateOperation = set("comment", "You should learn MongoDB!");
            UpdateResult updateResult = gradesCollection.updateOne(filter, updateOperation);
            System.out.println("=> Updating the doc with {\"student_id\":10000}. Adding comment.");
            System.out.println(gradesCollection.find(filter).first().toJson(prettyPrint));
            System.out.println(updateResult);
            filter = and(eq("student_id", 10002d), eq("class_id", 10d));
            updateOperation = push("comments", "You will learn a lot if you read the MongoDB blog!");
            UpdateOptions options = new UpdateOptions().upsert(true);
            updateResult = gradesCollection.updateOne(filter, updateOperation, options);
            System.out.println("\n=> Upsert document with {\"student_id\":10002.0, \"class_id\": 10.0} because it doesn't exist yet.");
            System.out.println(updateResult);
            System.out.println(gradesCollection.find(filter).first().toJson(prettyPrint));
            filter = eq("student_id", 10001);
            updateResult = gradesCollection.updateMany(filter, updateOperation);
            System.out.println("\n=> Updating all the documents with {\"student_id\":10001}.");
            System.out.println(updateResult);
            filter = eq("student_id", 10000);
            Bson update1 = inc("x", 10); 
            Bson update2 = rename("class_id", "new_class_id"); 
            Bson update3 = mul("scores.0.score", 2);
            Bson update4 = addToSet("comments", "This comment is uniq"); 
            Bson update5 = addToSet("comments", "This comment is uniq"); 
            Bson updates = combine(update1, update2, update3, update4, update5);
            Document oldVersion = gradesCollection.findOneAndUpdate(filter, updates);
            System.out.println("\n=> FindOneAndUpdate operation. Printing the old version by default:");
            System.out.println(oldVersion.toJson(prettyPrint));
            filter = eq("student_id", 10001);
            FindOneAndUpdateOptions optionAfter = new FindOneAndUpdateOptions().returnDocument(ReturnDocument.AFTER);
            Document newVersion = gradesCollection.findOneAndUpdate(filter, updates, optionAfter);
            System.out.println("\n=> FindOneAndUpdate operation. But we can also ask for the new version of the doc:");
            System.out.println(newVersion.toJson(prettyPrint));
        }
    }
}*/