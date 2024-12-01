import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const cuts = {
        'dry cut': 17,
        'crop cut': 15,
        'drop fade': 16,
        'Haircut & Wash': 20,
        'Scissor cut': 18,
        'skin fade': 21,
        'skin fade with razor': 23,
        'kids': 15,
        'weekends (excluding skin fade and scissor trim)': 17,
        'O.A.PS (excluding skin fade and scissor trim)': 15
    };

    const shave = {
        'wet shave': 15,
        'style wet shave': 16,
        'head shave': 15,
        'clipper beard trim (with hot towel)': 12
    };

    const extras = {
        'face mask': 13,
        'shape up': 8,
        'head wash & hot towel': 7,
        'threading & waxing': 5
    };

    const specials = {
        'crown deluxe': {
            price: 46,
            details: 'skin fade, style beard, steam, facemask, wax, wash & hot towel'
        },
        'crown special': {
            price: 39,
            details: 'haircut, steam, shave, facemask, wash & hot towel'
        },
        'shave special': {
            price: 26,
            details: 'shave, steam, facemask, wash & hot towel'
        },
        'haircut special': {
            price: 21,
            details: 'haircut, wash & hot towel'
        }
    };

    const serviceOptions = { cuts, shave, extras };

    // Animation settings for each section
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 2, y: 0 }
    };

    return (
        <section id="services" className="p-4">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black text-white border-4 border-red-600"
            >
                <motion.h1
                    className="text-3xl font-bold text-center mb-6"
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                >
                    Service Menu
                </motion.h1>
                <div className="flex flex-wrap justify-evenly gap-6">
                    {Object.entries(serviceOptions).map(([category, services], index) => (
                        <motion.div
                            key={category}
                            className="p-4 border border-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-red-600"
                            variants={fadeUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h2 className="text-xl font-semibold capitalize mb-3">{category}</h2>
                            <ul>
                                {Object.entries(services).map(([serviceName, price]) => (
                                    <li key={serviceName} className="flex justify-between mb-2">
                                        <span>{serviceName}</span>
                                        <span className="font-bold">£{price}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Specials Section */}
                    <motion.div
                        className="p-4 border border-gray-700 rounded-lg col-span-full"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h2 className="text-xl font-semibold capitalize mb-3">Specials</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {Object.entries(specials).map(([specialName, { price, details }]) => (
                                <motion.div
                                    key={specialName}
                                    className="p-4 bg-gray-800 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                                    variants={fadeUp}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg font-semibold">{specialName}</span>
                                        <span className="font-bold">£{price}</span>
                                    </div>
                                    <div className="text-sm bg-red-600 p-2 rounded text-white">
                                        {details}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default Services;
