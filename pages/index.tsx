import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ReCAPTCHA from 'react-google-recaptcha';

import {
	FaLinkedinIn,
	FaGithub,
	FaDiscord,
	FaRedditAlien,
	FaTwitter,
} from 'react-icons/fa';

const logo = 'tokey_logo.png';

const style = {
	container: 'h-screen align-middle',
	logo: 'p-4 pt-20 flex justify-center',
	flexJustifyCenter: 'flex flex-row justify-center pt-20',
	iconAnchorImage:
		'flex flex-row justify-center text-4xl font-black px-2 m-1 text-[#070d59] hover:text-[#a8c2e2] cursor-pointer',
	footer: 'flex border-t-1 text-center',
	footerLink: 'text-[#070d59] hover:text-[#a8c2e2] font-bold',
	formContainer: 'grid grid-cols-6 gap-4 w-1/2',
	signUpButton:
		'shadow bg-[#070d59] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded',
	formInputContainer: 'flex items-center border-b border-[#070d59] py-2',
	formLabel: 'block text-[#070d59] font-bold text-3xl pb-5 text-center',
	formLabelSubmitted: 'block text-[#070d59] font-bold pb-5 text-center',
	formInput:
		'appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none',
	formButtonOpaque:
		'flex-shrink-0 bg-[#070d59] bg-[#070d59] border-[#070d59] hover:bg-[#a8c2e2] hover:border-[#a8c2e2] text-sm border-4 text-white py-1 px-2 rounded',
	recaptchaContainer: 'grid grid-cols-3 gap-4 pt-10',
	recaptchaBox: 'flex col-start-2 col-span-1 justify-center',
};

const Home: NextPage = () => {
	const [emailAddress, setEmailAddress] = useState<string>('');
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [recaptchaVisible, setRecaptchaVisible] = useState<boolean>(false);

	const reCAPTCHAKey: string | any =
		process.env.NEXT_PUBLIC_RECAPTCHAV2_SITE_KEY;

	const submitEmailAddress = async () => {
		const response = await fetch('/api/hubspot', {
			method: 'POST',
			body: JSON.stringify({ emailAddress }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		setSubmitted(true);
	};

	const triggerRecaptcha = () => {
		setRecaptchaVisible(true);
	};

	useEffect(() => {}, [submitted, recaptchaVisible]);

	return (
		<div>
			<Head>
				<title>Tokey NFT Marketplace</title>
				<meta name='description' content='Tokey NFT Marketplace' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={style.container}>
				<div className={style.logo}>
					<Image src={logo} alt='Tokey logo' height={132} width={452} />
				</div>

				<div className={style.flexJustifyCenter}>
					<div className={style.formContainer}>
						<div className='col-start-2 col-span-4'>
							{!submitted ? (
								<form id='form'>
									<h1 className={style.formLabel}>Join our mailing list:</h1>
									<div className={style.formInputContainer}>
										<input
											className={style.formInput}
											type='email'
											placeholder='your@email.com'
											aria-label='Email'
											value={emailAddress}
											onChange={(e) => setEmailAddress(e.target.value)}
										/>
										<button
											className={style.formButtonOpaque}
											type='button'
											onClick={triggerRecaptcha}
										>
											Sign Up
										</button>
									</div>
								</form>
							) : (
								<div className={style.formLabelSubmitted}>
									Thanks! If that was an email, it was submitted.
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={style.recaptchaContainer}>
					<div className={style.recaptchaBox}>
						{recaptchaVisible ? (
							<ReCAPTCHA sitekey={reCAPTCHAKey} onChange={submitEmailAddress} />
						) : (
							<div></div>
						)}
					</div>
				</div>
				<div className={style.flexJustifyCenter}>
					<div className={style.iconAnchorImage}>
						<a href='https://discord.com' type='button'>
							<div className={style.iconAnchorImage}>
								<FaDiscord />
							</div>
						</a>
						<div className={style.iconAnchorImage}>
							<a href='https://github.com/tokeyapp' type='button'>
								<FaGithub />
							</a>
						</div>
						<div className={style.iconAnchorImage}>
							<a href='https://twitter.com/tokeyapp' type='button'>
								<FaTwitter />
							</a>
						</div>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<div>&copy;2022 Tokey Ltd | </div>&nbsp;
				<div className={style.footerLink}>
					<Link href='/privacy'>Privacy</Link>
				</div>
			</footer>
		</div>
	);
};

export default Home;

{
	/* <div className={style.iconAnchorImage}>
						<a href='https://linkedin.com' type='button'>
							<FaLinkedinIn />
						</a>
					</div>
					<div className={style.iconAnchorImage}>
						<a href='https://reddit.com' type='button'>
							<FaRedditAlien />
						</a>
					</div> */
}
