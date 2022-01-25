import request from 'supertest';
import { app } from '../app'
import { getConnection } from 'typeorm';

import createConnection from '../database'

describe("Users", () => {
	beforeAll(async () => {
		const connection = await createConnection();
		await connection.runMigrations();
	})
	afterAll(async () => {
		const connection = getConnection();
		await connection.dropDatabase();
		await connection.close();
	})

	it("Should be able to create a new user", async () => {
		const response = await request(app).post("/users").send({
			email: "user@exemplo1.com",
			name: "user example"
		});
		expect(response.status).toBe(201);
	});

	it("Should be not be able to create an email already existing", async () => {
		const response = await request(app).post("/users").send({
			email: "user@exemplo1.com",
			name: "user example"
		});
		expect(response.status).toBe(400);
	});
});