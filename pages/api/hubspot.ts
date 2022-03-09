// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
	msg: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'POST') {
		const emailAddress = req.body.emailAddress;

		// 0. Set headers
		const headers = {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		};

		// 1. Send POST request to Hubspot
		console.log(`POST to Hubspot for ${emailAddress}`);

		let hubspotResponse: any;

		hubspotResponse = await axios
			.post(
				'https://api.hubapi.com/crm/v3/objects/contacts?hapikey=eu1-e6e3-adcf-4b55-b47b-558d1cdbc19c',
				{
					properties: {
						company: null,
						email: emailAddress,
						firstname: null,
						lastname: null,
						phone: null,
						website: null,
					},
				},
				{
					headers: headers,
				}
			)
			.catch(function (error) {
				if (error.response) {
					console.log('error.response');
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					res.status(409).json({ msg: 'Email already registered' });
				} else if (error.request) {
					console.log('error.data');
					console.log(error.request);
					res.status(500).json({
						msg: 'We are unable to fulfill this request at the moment. Apologies',
					});
				} else {
					console.log('Unspecified error message');
					console.log(`Error: ${error.message}`);
				}
			});

		// 2. return success if 200, error code if error
		res
			.status(200)
			.json({ msg: `Successful registration for ${emailAddress}` });
	}
}
