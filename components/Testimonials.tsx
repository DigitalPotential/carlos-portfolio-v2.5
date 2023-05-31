import React from "react";
import Image from "next/image";
import { carlos } from "@/public/assets";

const Testimonials = () => {
    return (
        <div className="max-w-container mx-auto lgl:px-20 py-24 bg-gray-light px-4">
            <div className="mx-auto container">
                <div className="lg:flex flex-row-reverse items-center">
                    <div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="188"
                                height="3"
                                viewBox="0 0 188 3"
                                fill="none"
                            >
                                <line
                                    x1="9.1809e-05"
                                    y1="1.5"
                                    x2="187.922"
                                    y2="1.50003"
                                    stroke="#805AD5"
                                    strokeWidth="3"
                                ></line>
                            </svg>
                            <svg
                                className="ml-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="13"
                                viewBox="0 0 14 13"
                                fill="none"
                            >
                                <path
                                    d="M7.23776 1.92275L7 1.19098L6.76224 1.92275L5.69579 5.20492H2.24472H1.4753L2.09777 5.65717L4.88975 7.68566L3.82331 10.9678L3.58555 11.6996L4.20802 11.2473L7 9.21885L9.79198 11.2473L10.4145 11.6996L10.1767 10.9678L9.11025 7.68566L11.9022 5.65717L12.5247 5.20492H11.7553H8.30421L7.23776 1.92275Z"
                                    stroke="#805AD5"
                                    strokeWidth="0.5"
                                />
                            </svg>
                        </div>
                        <h1 className=" text-2xl lg:text-5xl lg:w-2/3 mt-8 tracking-wide font-bold text-white">
                            {`Reviews from Companies I've worked with`}
                        </h1>

                        <p className="lg:w-8/12 text-white mt-5 mb-12">
                            {`These are reviews from people that have used my services as a web developer.`}
                        </p>
                    </div>
                    <div>
                        <div className="bg-[#112240] shadow-md lg:w-10/12 rounded-3xl">
                            <div className="py-8 px-10">
                                <p className="tracking-wide text-white text-base leading-8 border-b border-gray-300 pb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sem ante cursus lobortis
                                    gravida. Eu vulputate quis dolor eget sed
                                    etiam suscipit in condimentum. Cras morbi
                                    tellus cursus et.
                                </p>
                                <div className="mt-4 lg:flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="">
                                            <Image
                                                className="rounded-lg h-10 w-10 object-cover"
                                                src={carlos}
                                                alt="profileimg"
                                            />
                                        </div>
                                        <div className="ml-6">
                                            <h1 className="text-white text-base font-semibold">
                                                Erik Moreno
                                            </h1>
                                            <h2 className="text-white font-light mt-2">
                                                December 2020
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-4 lg:mt-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="178"
                                            height="26"
                                            viewBox="0 0 178 26"
                                            fill="none"
                                        >
                                            <path
                                                d="M164.287 2.19529C164.511 1.50431 165.489 1.50431 165.713 2.19529L167.75 8.46454C167.851 8.77356 168.139 8.98278 168.464 8.98278H175.055C175.782 8.98278 176.084 9.91249 175.496 10.3395L170.163 14.2142C169.9 14.4051 169.791 14.7437 169.891 15.0527L171.928 21.3219C172.152 22.0129 171.362 22.5875 170.774 22.1605L165.441 18.2858C165.178 18.0949 164.822 18.0949 164.559 18.2858L159.226 22.1605C158.638 22.5875 157.848 22.0129 158.072 21.3219L160.109 15.0527C160.209 14.7437 160.099 14.4051 159.837 14.2142L154.504 10.3395C153.916 9.91249 154.218 8.98278 154.945 8.98278H161.536C161.861 8.98278 162.149 8.77356 162.25 8.46454L164.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M126.287 2.19529C126.511 1.50431 127.489 1.50431 127.713 2.19529L129.75 8.46454C129.851 8.77356 130.139 8.98278 130.464 8.98278H137.055C137.782 8.98278 138.084 9.91249 137.496 10.3395L132.163 14.2142C131.9 14.4051 131.791 14.7437 131.891 15.0527L133.928 21.3219C134.152 22.0129 133.362 22.5875 132.774 22.1605L127.441 18.2858C127.178 18.0949 126.822 18.0949 126.559 18.2858L121.226 22.1605C120.638 22.5875 119.848 22.0129 120.072 21.3219L122.109 15.0527C122.209 14.7437 122.099 14.4051 121.837 14.2142L116.504 10.3395C115.916 9.91249 116.218 8.98278 116.945 8.98278H123.536C123.861 8.98278 124.149 8.77356 124.25 8.46454L126.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M88.2867 2.19529C88.5112 1.50431 89.4888 1.50431 89.7133 2.19529L91.7503 8.46454C91.8507 8.77356 92.1387 8.98278 92.4636 8.98278H99.0555C99.782 8.98278 100.084 9.91249 99.4963 10.3395L94.1634 14.2142C93.9005 14.4051 93.7905 14.7437 93.8909 15.0527L95.9279 21.3219C96.1524 22.0129 95.3616 22.5875 94.7738 22.1605L89.4408 18.2858C89.178 18.0949 88.822 18.0949 88.5592 18.2858L83.2262 22.1605C82.6384 22.5875 81.8476 22.0129 82.0721 21.3219L84.1091 15.0527C84.2095 14.7437 84.0995 14.4051 83.8366 14.2142L78.5037 10.3395C77.9159 9.91249 78.218 8.98278 78.9445 8.98278H85.5364C85.8613 8.98278 86.1493 8.77356 86.2497 8.46454L88.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M50.2867 2.19529C50.5112 1.50431 51.4888 1.50431 51.7133 2.19529L53.7503 8.46454C53.8507 8.77356 54.1387 8.98278 54.4636 8.98278H61.0555C61.782 8.98278 62.0841 9.91249 61.4963 10.3395L56.1634 14.2142C55.9005 14.4051 55.7905 14.7437 55.8909 15.0527L57.9279 21.3219C58.1524 22.0129 57.3616 22.5875 56.7738 22.1605L51.4408 18.2858C51.178 18.0949 50.822 18.0949 50.5592 18.2858L45.2262 22.1605C44.6384 22.5875 43.8476 22.0129 44.0721 21.3219L46.1091 15.0527C46.2095 14.7437 46.0995 14.4051 45.8366 14.2142L40.5037 10.3395C39.9159 9.91249 40.218 8.98278 40.9445 8.98278H47.5364C47.8613 8.98278 48.1493 8.77356 48.2497 8.46454L50.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M12.2867 2.19529C12.5112 1.50431 13.4888 1.50431 13.7133 2.19529L15.7503 8.46454C15.8507 8.77356 16.1387 8.98278 16.4636 8.98278H23.0555C23.782 8.98278 24.0841 9.91249 23.4963 10.3395L18.1634 14.2142C17.9005 14.4051 17.7905 14.7437 17.8909 15.0527L19.9279 21.3219C20.1524 22.0129 19.3616 22.5875 18.7738 22.1605L13.4408 18.2858C13.178 18.0949 12.822 18.0949 12.5592 18.2858L7.22622 22.1605C6.63843 22.5875 5.84757 22.0129 6.07208 21.3219L8.10909 15.0527C8.20949 14.7437 8.0995 14.4051 7.83663 14.2142L2.50369 10.3395C1.91591 9.91249 2.21799 8.98278 2.94453 8.98278H9.53641C9.86133 8.98278 10.1493 8.77356 10.2497 8.46454L12.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#112240] mt-8 shadow-md lg:w-10/12 rounded-3xl">
                            <div className="py-8 px-10">
                                <p className="tracking-wide text-white text-base leading-8 border-b border-gray-300 pb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sem ante cursus lobortis
                                    gravida. Eu vulputate quis dolor eget sed
                                    etiam suscipit in condimentum. Cras morbi
                                    tellus cursus et.
                                </p>
                                <div className="mt-4 lg:flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="">
                                            <Image
                                                className="rounded-lg h-10 w-10 object-cover"
                                                src={carlos}
                                                alt="profileimg"
                                            />
                                        </div>
                                        <div className="ml-6">
                                            <h1 className="text-base text-white font-semibold">
                                                Tony Stark
                                            </h1>
                                            <h2 className="text-white font-light mt-2">
                                                December 2020
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-4 lg:mt-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="178"
                                            height="26"
                                            viewBox="0 0 178 26"
                                            fill="none"
                                        >
                                            <path
                                                d="M164.287 2.19529C164.511 1.50431 165.489 1.50431 165.713 2.19529L167.75 8.46454C167.851 8.77356 168.139 8.98278 168.464 8.98278H175.055C175.782 8.98278 176.084 9.91249 175.496 10.3395L170.163 14.2142C169.9 14.4051 169.791 14.7437 169.891 15.0527L171.928 21.3219C172.152 22.0129 171.362 22.5875 170.774 22.1605L165.441 18.2858C165.178 18.0949 164.822 18.0949 164.559 18.2858L159.226 22.1605C158.638 22.5875 157.848 22.0129 158.072 21.3219L160.109 15.0527C160.209 14.7437 160.099 14.4051 159.837 14.2142L154.504 10.3395C153.916 9.91249 154.218 8.98278 154.945 8.98278H161.536C161.861 8.98278 162.149 8.77356 162.25 8.46454L164.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M126.287 2.19529C126.511 1.50431 127.489 1.50431 127.713 2.19529L129.75 8.46454C129.851 8.77356 130.139 8.98278 130.464 8.98278H137.055C137.782 8.98278 138.084 9.91249 137.496 10.3395L132.163 14.2142C131.9 14.4051 131.791 14.7437 131.891 15.0527L133.928 21.3219C134.152 22.0129 133.362 22.5875 132.774 22.1605L127.441 18.2858C127.178 18.0949 126.822 18.0949 126.559 18.2858L121.226 22.1605C120.638 22.5875 119.848 22.0129 120.072 21.3219L122.109 15.0527C122.209 14.7437 122.099 14.4051 121.837 14.2142L116.504 10.3395C115.916 9.91249 116.218 8.98278 116.945 8.98278H123.536C123.861 8.98278 124.149 8.77356 124.25 8.46454L126.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M88.2867 2.19529C88.5112 1.50431 89.4888 1.50431 89.7133 2.19529L91.7503 8.46454C91.8507 8.77356 92.1387 8.98278 92.4636 8.98278H99.0555C99.782 8.98278 100.084 9.91249 99.4963 10.3395L94.1634 14.2142C93.9005 14.4051 93.7905 14.7437 93.8909 15.0527L95.9279 21.3219C96.1524 22.0129 95.3616 22.5875 94.7738 22.1605L89.4408 18.2858C89.178 18.0949 88.822 18.0949 88.5592 18.2858L83.2262 22.1605C82.6384 22.5875 81.8476 22.0129 82.0721 21.3219L84.1091 15.0527C84.2095 14.7437 84.0995 14.4051 83.8366 14.2142L78.5037 10.3395C77.9159 9.91249 78.218 8.98278 78.9445 8.98278H85.5364C85.8613 8.98278 86.1493 8.77356 86.2497 8.46454L88.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M50.2867 2.19529C50.5112 1.50431 51.4888 1.50431 51.7133 2.19529L53.7503 8.46454C53.8507 8.77356 54.1387 8.98278 54.4636 8.98278H61.0555C61.782 8.98278 62.0841 9.91249 61.4963 10.3395L56.1634 14.2142C55.9005 14.4051 55.7905 14.7437 55.8909 15.0527L57.9279 21.3219C58.1524 22.0129 57.3616 22.5875 56.7738 22.1605L51.4408 18.2858C51.178 18.0949 50.822 18.0949 50.5592 18.2858L45.2262 22.1605C44.6384 22.5875 43.8476 22.0129 44.0721 21.3219L46.1091 15.0527C46.2095 14.7437 46.0995 14.4051 45.8366 14.2142L40.5037 10.3395C39.9159 9.91249 40.218 8.98278 40.9445 8.98278H47.5364C47.8613 8.98278 48.1493 8.77356 48.2497 8.46454L50.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M12.2867 2.19529C12.5112 1.50431 13.4888 1.50431 13.7133 2.19529L15.7503 8.46454C15.8507 8.77356 16.1387 8.98278 16.4636 8.98278H23.0555C23.782 8.98278 24.0841 9.91249 23.4963 10.3395L18.1634 14.2142C17.9005 14.4051 17.7905 14.7437 17.8909 15.0527L19.9279 21.3219C20.1524 22.0129 19.3616 22.5875 18.7738 22.1605L13.4408 18.2858C13.178 18.0949 12.822 18.0949 12.5592 18.2858L7.22622 22.1605C6.63843 22.5875 5.84757 22.0129 6.07208 21.3219L8.10909 15.0527C8.20949 14.7437 8.0995 14.4051 7.83663 14.2142L2.50369 10.3395C1.91591 9.91249 2.21799 8.98278 2.94453 8.98278H9.53641C9.86133 8.98278 10.1493 8.77356 10.2497 8.46454L12.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#112240] mt-8 shadow-md lg:w-10/12 rounded-3xl">
                            <div className="py-8 px-10">
                                <p className="tracking-wide text-white text-base leading-8 border-b border-gray-300 pb-4">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sem ante cursus lobortis
                                    gravida. Eu vulputate quis dolor eget sed
                                    etiam suscipit in condimentum. Cras morbi
                                    tellus cursus et.
                                </p>
                                <div className="mt-4 lg:flex justify-between items-center">
                                    <div className="flex items-center">
                                        <div className="">
                                            <Image
                                                className="rounded-lg h-10 w-10 object-cover"
                                                src={carlos}
                                                alt="profileimg"
                                            />
                                        </div>
                                        <div className="ml-6">
                                            <h1 className="text-white text-base font-semibold">
                                                Tony Stark
                                            </h1>
                                            <h2 className="text-white font-light mt-2">
                                                December 2020
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-4 lg:mt-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="178"
                                            height="26"
                                            viewBox="0 0 178 26"
                                            fill="none"
                                        >
                                            <path
                                                d="M164.287 2.19529C164.511 1.50431 165.489 1.50431 165.713 2.19529L167.75 8.46454C167.851 8.77356 168.139 8.98278 168.464 8.98278H175.055C175.782 8.98278 176.084 9.91249 175.496 10.3395L170.163 14.2142C169.9 14.4051 169.791 14.7437 169.891 15.0527L171.928 21.3219C172.152 22.0129 171.362 22.5875 170.774 22.1605L165.441 18.2858C165.178 18.0949 164.822 18.0949 164.559 18.2858L159.226 22.1605C158.638 22.5875 157.848 22.0129 158.072 21.3219L160.109 15.0527C160.209 14.7437 160.099 14.4051 159.837 14.2142L154.504 10.3395C153.916 9.91249 154.218 8.98278 154.945 8.98278H161.536C161.861 8.98278 162.149 8.77356 162.25 8.46454L164.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M126.287 2.19529C126.511 1.50431 127.489 1.50431 127.713 2.19529L129.75 8.46454C129.851 8.77356 130.139 8.98278 130.464 8.98278H137.055C137.782 8.98278 138.084 9.91249 137.496 10.3395L132.163 14.2142C131.9 14.4051 131.791 14.7437 131.891 15.0527L133.928 21.3219C134.152 22.0129 133.362 22.5875 132.774 22.1605L127.441 18.2858C127.178 18.0949 126.822 18.0949 126.559 18.2858L121.226 22.1605C120.638 22.5875 119.848 22.0129 120.072 21.3219L122.109 15.0527C122.209 14.7437 122.099 14.4051 121.837 14.2142L116.504 10.3395C115.916 9.91249 116.218 8.98278 116.945 8.98278H123.536C123.861 8.98278 124.149 8.77356 124.25 8.46454L126.287 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M88.2867 2.19529C88.5112 1.50431 89.4888 1.50431 89.7133 2.19529L91.7503 8.46454C91.8507 8.77356 92.1387 8.98278 92.4636 8.98278H99.0555C99.782 8.98278 100.084 9.91249 99.4963 10.3395L94.1634 14.2142C93.9005 14.4051 93.7905 14.7437 93.8909 15.0527L95.9279 21.3219C96.1524 22.0129 95.3616 22.5875 94.7738 22.1605L89.4408 18.2858C89.178 18.0949 88.822 18.0949 88.5592 18.2858L83.2262 22.1605C82.6384 22.5875 81.8476 22.0129 82.0721 21.3219L84.1091 15.0527C84.2095 14.7437 84.0995 14.4051 83.8366 14.2142L78.5037 10.3395C77.9159 9.91249 78.218 8.98278 78.9445 8.98278H85.5364C85.8613 8.98278 86.1493 8.77356 86.2497 8.46454L88.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M50.2867 2.19529C50.5112 1.50431 51.4888 1.50431 51.7133 2.19529L53.7503 8.46454C53.8507 8.77356 54.1387 8.98278 54.4636 8.98278H61.0555C61.782 8.98278 62.0841 9.91249 61.4963 10.3395L56.1634 14.2142C55.9005 14.4051 55.7905 14.7437 55.8909 15.0527L57.9279 21.3219C58.1524 22.0129 57.3616 22.5875 56.7738 22.1605L51.4408 18.2858C51.178 18.0949 50.822 18.0949 50.5592 18.2858L45.2262 22.1605C44.6384 22.5875 43.8476 22.0129 44.0721 21.3219L46.1091 15.0527C46.2095 14.7437 46.0995 14.4051 45.8366 14.2142L40.5037 10.3395C39.9159 9.91249 40.218 8.98278 40.9445 8.98278H47.5364C47.8613 8.98278 48.1493 8.77356 48.2497 8.46454L50.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                            <path
                                                d="M12.2867 2.19529C12.5112 1.50431 13.4888 1.50431 13.7133 2.19529L15.7503 8.46454C15.8507 8.77356 16.1387 8.98278 16.4636 8.98278H23.0555C23.782 8.98278 24.0841 9.91249 23.4963 10.3395L18.1634 14.2142C17.9005 14.4051 17.7905 14.7437 17.8909 15.0527L19.9279 21.3219C20.1524 22.0129 19.3616 22.5875 18.7738 22.1605L13.4408 18.2858C13.178 18.0949 12.822 18.0949 12.5592 18.2858L7.22622 22.1605C6.63843 22.5875 5.84757 22.0129 6.07208 21.3219L8.10909 15.0527C8.20949 14.7437 8.0995 14.4051 7.83663 14.2142L2.50369 10.3395C1.91591 9.91249 2.21799 8.98278 2.94453 8.98278H9.53641C9.86133 8.98278 10.1493 8.77356 10.2497 8.46454L12.2867 2.19529Z"
                                                fill="#805AD5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
