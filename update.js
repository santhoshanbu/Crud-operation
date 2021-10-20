var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017';

MongoClient.connect(url,function(err,db){
    if(err)throw err;
    var mydb=db.db('mydbfirst');
    var deleted={name:'santhosh'};
    var newdata={$set:{name:'santhoshkumar'}}
    mydb.collection('webuser').updateOne(deleted,newdata,function(err,res){
        if(err)throw err;
        console.log('document inserted')
        db.close();
    })
})