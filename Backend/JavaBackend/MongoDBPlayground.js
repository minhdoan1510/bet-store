// MongoDB playground

// create message collection

DBQuery.shellBatchSize = 1000;

print("###################### Create Messagge Collection ######################");

db = db.getSiblingDB("bet_store");
db.Message.createIndex({ senderId: 1, receiverId: 1 });

print("###################### End Messagge Collection ######################");

// create conversation collection

print("###################### Create Conversation Collection ######################");

db = db.getSiblingDB("bet_store");
db.Conversation.createIndex({ senderId: 1 });

print("###################### End Conversation Collection ######################");

// test
db.Conversation.find();
db.Conversation.deleteMany({});
db.Conversation.find({ _id: ObjectId("5fb8083ccda5c41790c0b067") });
db.Conversation.deleteOne({ _id: ObjectId("5ff7a0d0123f9c57fcb34710") });
db.Conversation.deleteOne({ _id: ObjectId("5ff7a0d0123f9c57fcb3470f") });

db.Message.find();
db.Message.deleteMany({});
db.Conversation.deleteMany({});
db.Message.find({
  $or: [
    { $and: [{ senderId: "a" }, { receiverId: "b" }] },
    { $and: [{ senderId: "b" }, { receiverId: "a" }] },
  ],
}).sort({ _id: 1 });

db.Message.find({ _id: ObjectId("5fb9362e1279553053ca4ed9") });

db.Account.find({_id: ObjectId("5fa7fb0a62083e11ace57490")});

// fuck
// store the document in a variable
doc = db.Account.findOne({_id: ObjectId("5fd7c3e51afadc006643efca")})

// set a new _id on the document
doc._id = ObjectId("5fa7fb0a62083e11ace57490")

// insert the document, using the new _id
db.Account.insert(doc)

// remove the document with the old _id
db.Account.remove({_id: ObjectId("5fd7c3e51afadc006643efca")})
//

db.Account.updateOne({
  _id: ObjectId("5fd7c3e51afadc006643efca") 
}, {_id: ObjectId("5fa7fb0a62083e11ace57490")})
db.Message.deleteMany({$where: "this.textContent.length <= 2"})

db.Account.find();
db.Account.updateMany({}, {
  $set: { password: "$2a$14$UcUJzKQuSUwxCm6j3cc4cOi7Q//Iw41YNHeMJM.CEHV4gdax0Ole2" },
});
db.Message.deleteMany({_id: ObjectId("5fde6dacc419812a6e0a1394")})

db.Account.find().forEach(x => {
  if (x.username.startsWith('admin')) {
    // db.Conversation.insertOne({
    //   senderId: "5fd7a1411afadc0167ec231b",
    //   receiverId: x._id.toString()
    // });
    db.Conversation.insertOne({
      senderId: x._id.toString(),
      receiverId: "5fd7a1411afadc0167ec231b",
    });
  }
});