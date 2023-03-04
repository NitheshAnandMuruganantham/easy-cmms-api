import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  constructor(private config: ConfigService) {}
  AWS_S3_BUCKET = this.config.get<string>('BILL_BUCKET_NAME');
  s3 = new AWS.S3({
    accessKeyId: this.config.get<string>('AWS_ACCESS_KEY_ID'),
    secretAccessKey: this.config.get<string>('AWS_SECRET'),
    signatureVersion: 'v4',
    region: 'us-east-1',
  });

  async uploadImage(file: Express.Multer.File, id: string) {
    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET + `/bills`,
      id,
      file.mimetype,
    );
  }

  async s3_upload(
    file: Buffer,
    bucket: string,
    name: string,
    mimetype: string,
  ) {
    await this.s3
      .upload({
        Body: file,
        Bucket: bucket,
        Key: name,
        ContentType: mimetype,
        ContentDisposition: 'inline',
      })
      .promise();
    return `${bucket}/${name}`;
  }

  getSignedUrl(key?: string) {
    if (key !== null) {
      const dt = key.split('/');
      const url = this.s3.getSignedUrl('getObject', {
        Bucket: dt[0] + '/' + dt[1],
        Key: dt[2],
        Expires: 3 * 24 * 60 * 60, // 3 days
      });
      return url;
    } else {
      return null;
    }
  }
}
