const {Storage} = require('@google-cloud/storage');

const storage = new Storage();

const targetBucket = storage.bucket('iupui-cit41200-class-malpdf-pdf-sort');

async function deleteFiles () {
  await targetBucket.deleteFiles(function(err) {
    console.log(`All files in ${targetBucket} deleted.`);
  });
  
};

deleteFiles();