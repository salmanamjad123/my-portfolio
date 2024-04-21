import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<Image
					src="/images/myimage.jpg"
					width={200}
					height={200}
					className="rounded-lg"
					alt="Profile Image"
				/>
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{/* {aboutMe.map((bio) => ( */}
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						// key={bio.id}
					>
						{/* {bio.bio} */}
						Hey, I'm Salman Amjad—a seasoned MERN Stack developer specializing in React.js, Next.js, and Node.js, Express.js,. With over 3 years of hands-on experience, I craft dynamic interfaces, integrating technologies like Firebase, Tailwind CSS, Bootstrap, and third-party APIs. Particularly adept at building admin panels and websites, I excel in creating clean, scalable code for seamless user experiences.
					</p>
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
					>
						Let's collaborate—I bring precision, innovation, and a commitment to pushing the boundaries of web development to help you achieve your goals.	</p>
				{/* ))} */}
			</div>
		</div>
	);
}

export default AboutMeBio;
