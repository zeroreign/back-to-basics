import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import gqlRequest from 'supertest-graphql';
import * as httpRequest from 'supertest';
import gql from 'graphql-tag';
describe('App', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should have graphql endpoint', async () => {
    // This is not a real query and used to check the endpoint only.
    const response = await gqlRequest(app.getHttpServer()).query(gql`
      query {
        hello
      }
    `);
    expect(response.data).toBeFalsy();
    expect(response.errors).toBeTruthy();
  });

  it('should have health check endpoint', async () => {
    const response = await httpRequest(app.getHttpServer()).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('ok');
  });
});
