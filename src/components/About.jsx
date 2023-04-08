import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Who am I, you ask? Well, I'm a product manager by day, but don't let
        that fool you. By night, I put on my cape and transform into a software
        development vigilante, fighting bugs and pushing pixels until the wee
        hours of the morning. When I'm not saving the digital world, I can be
        found indulging in some of my favorite hobbies. I love cycling through
        the city streets, feeling the wind in my hair (and occasionally dodging
        the occasional distracted driver). I'm also an avid motorcyclist,
        tearing up the roads on my trusty two-wheeler. But I'm not all about
        speed and danger. I also enjoy traveling to new places, experiencing
        different cultures, and sampling exotic foods (I'll try anything once).
        And when I need some downtime, you'll find me curled up with a good
        book, lost in a world of words. So that's me in a nutshell. If you're
        looking for a dynamic, adventurous, and slightly nerdy product
        manager/software dev/superhero/vigilante, then look no further. Let's
        chat!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
