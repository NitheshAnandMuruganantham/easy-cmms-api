import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import * as keygen from 'keygen';

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
  dataURLtoFile(dataurl: string, filename: string) {
    var binary = atob(dataurl.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/jpg',
    });
  }

  async uploadBase64Image(url: string, id: string) {
    const base64Data = Buffer.from(
      url.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );

    const type = url.split(';')[0].split('/')[1];

    const file = this.dataURLtoFile(url, id);

    await this.s3
      .upload({
        Key: `${id}.${type}`,
        ContentType: `image/${type}`,
        Body: base64Data,
        ContentEncoding: 'base64',
        Bucket: this.AWS_S3_BUCKET + `/bills`,
      })
      .promise()
      .catch((err) => {
        console.log(err);
      });
    return `${this.AWS_S3_BUCKET}/bills/${id}.${type}`;
  }

  async uploadCsvReport(data: any) {
    const key = keygen.url(keygen.medium);
    return this.s3
      .putObject({
        Bucket: this.AWS_S3_BUCKET + `/reports`,
        Key: `${key}.csv`,
        Body: data,
      })
      .promise()
      .then(() => `${this.AWS_S3_BUCKET}/reports/${key}.csv`);
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
    try {
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
    } catch {
      return '';
    }
  }
}
