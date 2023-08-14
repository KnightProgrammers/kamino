require('dotenv').config();

const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const { setLogLevel } = require("@azure/logger");

const mysqldump = require("mysqldump");
const moment = require('moment');
const fs = require("fs");

setLogLevel("info");

// Enter your storage account name and shared key
const account = process.env.AZURE_ACCOUNT
const accountKey = process.env.AZURE_ACCOUNT_KEY

if (!account || !accountKey) {
  throw new Error('No Azure account credentials were provided');
}

const start = Date.now();

// Use StorageSharedKeyCredential with storage account and account key
// StorageSharedKeyCredential is only available in Node.js runtime, not in browsers
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential
);

async function main() {
  const dumpFileName = `./kamino-production-${moment().format('YYYY_MM_DD')}.dump.sql`;

  // Dump the result straight to a file
  await mysqldump({
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_SCHEMA || 'kamino',
    },
    dumpToFile: dumpFileName,
  });

  // Convert backup file into a blob
  const buffer = fs.readFileSync(dumpFileName, 'utf-8');

  // Connect an Azure Storage container (folder)
  const containerName = `database-backup-${moment().format('YYYY')}`;
  let containerClient = blobServiceClient.getContainerClient(containerName);
  const containerExists = await containerClient.exists();
  if (!containerExists) {
    await blobServiceClient.createContainer(containerName);
  }
  containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(dumpFileName);
  // Upload backup file to Azure Storage
  const uploadBlobResponse = await blockBlobClient.upload(buffer, buffer.length);
  console.log(`Upload block blob ${dumpFileName} successfully`, uploadBlobResponse.requestId);
  // Delete local backup file
  fs.unlinkSync(dumpFileName);
  console.log(`Execution time: ${moment(start).fromNow(true)}`);
}

main().catch(console.error);
