import React from 'react'
import '../styles/Home.scss';
import Link from 'next/link';
import Image from 'next/image';


function LandingPage() {
  return (
        <div className="home-section">
            <div className="">
                <div className="hero-card">
                    <div className="left-card">
                        <div className="text-box">
                            <h1 className="card-title">This is the turning point of your digital growth</h1>
                            <p className="card-desc">With a data-first approach, we identify growth opportunities, design optimal experiences, and build scalable solutions.</p>
                            <Link href={'/'} className="action-btn">Are you ready? ↗</Link>
                        </div>
                    </div>
                    <div className="right-card">
                        <div className="text-box">
                            <p className="card-head">
                                <span className="card-svg">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons" width="15px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Zm-9.031 3.88a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Zm7 8a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path>
                                    </svg> */}
                                </span>
                                latest Cases</p>
                            <h2 className="card-title">Result driven</h2>
                            <p className="card-desc">Read more about the custom solutions we built for a wide range of clients.</p>
                            <Link href={'/'} className="card-redirect">
                                <span className="redirect-svg">
                                ↗
                                </span>
                            </Link>
                        </div>
                        <div className="service-box">
                            <Link href={'/'} className="sinlge-service">
                                <Image src="/Images/service1.jpg" width={395} height={450} alt="services Image" className='' />
                                <span className="service-title">Verifone ↗</span>
                            </Link>
                            <Link href={'/'} className="sinlge-service">
                                <Image src="/Images/service2.jpg" width={395} height={450} alt="services Image" className='' />
                                <span className="service-title">Verifone ↗</span>
                            </Link>
                            <Link href={'/'} className="sinlge-service">
                                <Image src="/Images/service3.jpg" width={395} height={450} alt="services Image" className='' />
                                <span className="service-title">Verifone ↗</span>
                            </Link>
                            <Link href={'/'} className="sinlge-service">
                                <Image src="/Images/service1.jpg" width={395} height={450} alt="services Image" className='' />
                                <span className="service-title">Verifone ↗</span>
                            </Link>
                            <Link href={'/'} className="sinlge-service">
                                <Image src="/Images/service2.jpg" width={395} height={450} alt="services Image" className='' />
                                <span className="service-title">Verifone ↗</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mid-section">
                    <div className="left-mid">
                        <div className="top-left">
                            <p class="card-head">
                                <span class="card-svg">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons" width="15px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Zm-9.031 3.88a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Zm7 8a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path></svg> */}
                                </span>
                                Now playing the digital fans
                            </p>
                            <Link href="javascript:;" class="action-btn">Queue a song ↗</Link>
                            <div className="player-cards">
                                <Image className='play-card1' fill src="/Images/service1.jpg" alt="" />
                                <Image className='play-card2' fill src="/Images/service3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="mid-left">
                            <Link href="javascript:;" class="card-redirect">
                                <span class="redirect-svg">↗</span>
                            </Link>
                            <p class="card-head">
                                <span class="card-svg">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons" width="15px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698a5 5 0 0 0 4.503 5.152a6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202a6 6 0 0 0 2.946-1.822a5 5 0 0 0 4.503-5.152a.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68A5.974 5.974 0 0 0 16 5v-.91c.496.099.988.21 1.475.332Z" clip-rule="evenodd"></path></svg> */}
                                </span>
                                Agency
                            </p>
                            <div className="employee-card">
                                <div className="emp-detail">
                                    <p className="emp-head">Growth Team</p>
                                    <p className="emp-desc">Get the Dynamic and skilled team you deserve.</p>
                                </div>
                                <div className="employee-list">
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Front End Developer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Performance Marketer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Designer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Developer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Content Creator</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Back End Developer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Front End Developer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Performance Marketer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Designer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Developer</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Content Creator</p>
                                    </div>
                                    <div className="single-list">
                                        <Image width={43} height={43} src="/Images/employee1.jpg" alt="" />
                                        <p className="emp-desig">Back End Developer</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="bottom-left">
                            {/* Pending */}
                        </div>
                    </div>
                    <div className="right-mid">
                        <div className="top-right">
                            <div className="service-card">
                                <p class="card-head">
                                    <span class="card-svg">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons" width="15px" height="15px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z"></path></svg> */}
                                    </span>Services
                                </p>
                                <div className="service-detail">
                                    <h2 className="service-title">
                                        All you need for your next big step
                                    </h2>
                                    <p className="service-desc">
                                        From marketing moves and strategies to design and tech, we've got everything to boost your growth.
                                    </p>
                                </div>
                                <div className="service-box">
                                    <a href="javascript:;" className="sinlge-service">
                                        <img src="/Images/ser1.svg" alt="" />
                                        <span className="service-title">Websites ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser2.svg" alt="" />
                                        <span className="service-title">Performance Analysis ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser3.svg" alt="" />
                                        <span className="service-title">SEM ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser4.svg" alt="" />
                                        <span className="service-title">CRM & Automation ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser5.svg" alt="" />
                                        <span className="service-title">E-Commerce ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser6.svg" alt="" />
                                        <span className="service-title">Audience Insights ↗</span>
                                    </a>
                                    <a href="javascript:;" className="sinlge-service">
                                         <img src="/Images/ser7.svg" alt="" />
                                        <span className="service-title">UI & UX ↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="r-mid-left">

                        </div>
                        <div className="r-mid-right">
                            <div className="r-mid-top">

                            </div>
                            <div className="r-mid-bottom">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LandingPage
