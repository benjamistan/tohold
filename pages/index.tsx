import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

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
	iconRow: 'flex flex-row justify-center',
	iconAnchorImage:
		'flex flex-row justify-center text-4xl font-black px-2 m-1 text-[#070d59] hover:text-[#a8c2e2] cursor-pointer',
	footer: 'flex border-t-1',
	// display: flex;
	// flex: 1;
	// padding: 2rem 0;
	// border-top: 1px solid #eaeaea;
	// justify-content: center;
	// align-items: center;
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
					<Image src={logo} alt='Tokey logo' height={132} width={452} />
				</div>
				<div className={style.iconRow}>
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
			<footer className={styles.footer}>&copy;2022 Tokey Ltd</footer>
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
