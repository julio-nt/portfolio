import { Montserrat, Montserrat_Subrayada } from 'next/font/google';

const montserrat = Montserrat({
	weight: '400',
	subsets: ['latin'],
});

const montserratSubrayada = Montserrat_Subrayada({
	weight: '400',
	subsets: ['latin'],
});

export { montserrat, montserratSubrayada };
