import {app} from '../app';
import request from 'supertest';


describe('Get Events', ()=>
{
    it('should return 200 status code', async ()=>
    {
        console.log("DB_NAME", process.env.DB_NAME);
        await request(app).get('/').expect(200).then(() =>
        {

        });
    });
});