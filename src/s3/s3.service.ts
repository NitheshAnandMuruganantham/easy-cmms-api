import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from '@aws-sdk/client-s3';
import * as keygen from 'keygen';
import { getSignedUrl as AwsGetSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  constructor(private config: ConfigService) {}
  AWS_S3_BUCKET = this.config.get<string>('BILL_BUCKET_NAME');
  s3 = new AWS.S3({
    region: 'us-east-1',
    credentials: {
      secretAccessKey: this.config.get<string>('AWS_SECRET'),
      accessKeyId: this.config.get<string>('AWS_ACCESS_KEY_ID'),
    },
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

    await this.s3
      .send(
        new AWS.PutObjectCommand({
          Key: `${id}.${type}`,
          ContentType: `image/${type}`,
          Body: base64Data,
          ContentEncoding: 'base64',
          Bucket: this.AWS_S3_BUCKET + `/bills`,
        }),
      )
      .catch((err) => {
        console.log(err);
      });
    return `${this.AWS_S3_BUCKET}/bills/${id}.${type}`;
  }

  async uploadCsvReport(data: any) {
    const key = keygen.url(keygen.medium);
    return this.s3
      .send(
        new AWS.PutObjectCommand({
          Bucket: this.AWS_S3_BUCKET + `/reports`,
          Key: `${key}.csv`,
          Body: data,
        }),
      )
      .then(() => `${this.AWS_S3_BUCKET}/reports/${key}.csv`);
  }

  async uploadXlsxBuffer(data: Buffer) {
    const key = keygen.url(keygen.medium);
    return await this.s3.send(
      new AWS.PutObjectCommand({
        Bucket: this.AWS_S3_BUCKET + `/reports`,
        Key: `${key}.csv`,
        Body: data,
      }),
    );
  }

  async s3_upload(
    file: Buffer,
    bucket: string,
    name: string,
    mimetype: string,
  ) {
    await this.s3.send(
      new AWS.PutObjectCommand({
        Body: file,
        Bucket: bucket,
        Key: name,
        ContentType: mimetype,
        ContentDisposition: 'inline',
      }),
    );
    return `${bucket}/${name}`;
  }

  async getSignedUrl(key?: string) {
    try {
      if (key !== null) {
        const dt = key.split('/');

        const url = await AwsGetSignedUrl(
          this.s3,
          new AWS.GetObjectCommand({
            Bucket: dt[0] + '/' + dt[1],
            Key: dt[2],
          }),
          { expiresIn: 60 * 60 * 24 * 3 },
        );
        return url;
      } else {
        return null;
      }
    } catch {
      return '';
    }
  }
}
