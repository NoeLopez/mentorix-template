import { Injectable } from "@nestjs/common";
import * as AWS from "aws-sdk";

@Injectable()
export class StorageProvider {
  private s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });
  }

  async uploadFile(bucket: string, key: string, body: Buffer): Promise<AWS.S3.ManagedUpload.SendData> {
    return this.s3.upload({ Bucket: bucket, Key: key, Body: body }).promise();
  }

  async deleteFile(bucket: string, key: string): Promise<void> {
    await this.s3.deleteObject({ Bucket: bucket, Key: key }).promise();
  }
}