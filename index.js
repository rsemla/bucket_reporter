const {Storage} = require('@google-cloud/storage');
const fs = require('fs');
var countFiles = require('count-files')

const storage = new Storage();

const maliciousBucket = storage.bucket('sp22-cit41200-class-malpdf-pdf-malicious');
const benignBucket = storage.bucket('sp22-cit41200-class-malpdf-pdf-benign');

exports.readBuckets = (file, context) => {

    async function scanMaliciousFiles () {
        const [files] = await maliciousBucket.getFiles();
        
        //var stats = countFiles(maliciousBucket, function (err, results) {
         //   console.log('done counting')
         //   console.log(results) // { files: 10, dirs: 2, bytes: 234 }
         // });

       // fs.readdir( 'https://console.cloud.google.com/storage/browser/sp22-cit41200-class-malpdf-pdf-malicious', (error, files) => { 
       files.forEach(file => {
        //    countFiles = sum(file);
        //console.count(`Malicous files: ${file.name}`);
        console.count("Malicious Files ");
       //console.log("Malicious Files: "+countFiles);
  });
};
async function scanBenignFiles () {
    const [files] = await benignBucket.getFiles();
    
    var countFiles = require('count-files')
 
   // var stats = countFiles(benignBucket, function (err, results) {
     // console.log('done counting')
     // console.log(results) // { files: 10, dirs: 2, bytes: 234 }
   // });

    files.forEach(file => {
        //countFiles = sum(file);
   // console.count(`Benign files: ${file.name}`);
   console.count("Benign Files ");
    //console.log("Benign Files: "+countFiles);
});
};

scanMaliciousFiles();
scanBenignFiles();

};