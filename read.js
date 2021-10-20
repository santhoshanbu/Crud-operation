var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb=db.db('mydbfirst');
    var mydata={name:'hai',website:'www.google.com'};
    mydb.collection('webuser').find(deleted,function(err,res){
        if(err)throw err;
        console.log('document inserted')
        db.close();
    })
})