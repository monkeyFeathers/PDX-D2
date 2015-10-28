var fs = require('fs');

fs.readFile('./sample.txt', function(err, data){
  if (err) {console.log(err);}
  var textFile = data.toString('utf-8').trim();
  fs.writeFile('new-file.txt', textFile,function(err,data){
    if (err) console.log(err);
  });
  // console.log(textFile);
})
