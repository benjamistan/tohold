import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import {
	FaLinkedinIn,
	FaGithub,
	FaDiscord,
	FaRedditAlien,
	FaTwitter,
} from 'react-icons/fa';

const logo = 'tokey_logo_262x724.png';

const style = {
	container: 'h-screen align-middle',
	logo: 'p-4 pt-20 flex justify-center',
	flexJustifyCenter: 'flex flex-row justify-center pt-20',
	iconAnchorImage:
		'flex flex-row justify-center text-4xl font-black px-2 m-1 text-[#0d559d] hover:text-[#212666] cursor-pointer',
	footer: 'flex border-t-1 text-center',
	footerLink: 'text-[#0d559d] hover:text-[#212666] font-bold',
	formContainer: 'grid grid-cols-6 gap-4 w-1/2',
	signUpButton:
		'shadow bg-[#0d559d] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded',
	formInputContainer: 'flex items-center border-b border-[#0d559d] py-2',
	formLabel: 'block text-[#0d559d] font-bold text-3xl pb-5 text-center',
	formLabelSubmitted: 'block text-[#0d559d] font-bold pb-5 text-center',
	formInput:
		'appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none',
	formButtonOpaque:
		'flex-shrink-0 bg-[#0d559d] bg-[#0d559d] border-[#0d559d] hover:bg-[#212666] hover:border-[#212666] text-sm border-4 text-white py-1 px-2 rounded',
	recaptchaContainer: 'grid grid-cols-3 gap-4 pt-10',
	recaptchaBox: 'flex col-start-2 col-span-1 justify-center',
};

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Tokey NFT Marketplace</title>
				<meta name='description' content='Tokey NFT Marketplace' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={style.container}>
				<div className={style.logo}>
					<Image src={logo} alt='Tokey logo' height={262} width={724} />
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
