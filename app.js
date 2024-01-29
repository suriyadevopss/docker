const AWS = require('aws-sdk');

// Create an S3 instance
const s3 = new AWS.S3();

// Function to list all S3 buckets
function listAllBuckets() {
  s3.listBuckets((err, data) => {
    if (err) {
      console.error('Error listing buckets:', err);
    } else {
      console.log('List of S3 buckets:');
      data.Buckets.forEach((bucket) => {
        console.log(bucket.Name);
      });
    }
  });
}

// Function to periodically list all buckets
function startListing() {
  listAllBuckets();
  setInterval(() => {
    listAllBuckets();
  }, 5 * 60 * 1000); // 5 minutes in milliseconds
}

// Start listing buckets
startListing();
