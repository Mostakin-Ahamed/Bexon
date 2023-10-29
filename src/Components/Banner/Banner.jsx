import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className='mt-16 pl-10 lg:pl-60'>
            <h2 id='header'>😎 GIVING YOU THE BEST DESIGNS</h2>
            <div id='header-text'>
                <p>saving world with <br /> good designs.</p>
            </div>
            <div className='lg:flex justify-between '>
                <div>
                    <div className='mt-4'>
                        <div>
                            <div id='support-text' className='flex gap-8'>
                                <div className='flex justify-evenly'>
                                    <img className='mr-3' src="/Group.svg" alt="" />
                                    <p>24/7 Online Support</p>
                                </div>
                                <div className='flex justify-evenly'>
                                    <img className='mr-3' src="/Group.svg" alt="" />
                                    <p>Quick Communication</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[358px] mt-8 text-justify'>
                            <p>Saving World with Good Designs. Because your satisfaction is everything. We are providing the best designs.</p>
                        </div>
                        <div>
                            <div>
                                <button className='w-[257px] absolute h-[55px] bg-[#FE7E41] mt-9 font-semibold text-base text-white spacing-5'>START A PROJECT</button>
                                <button className='static w-[257px] h-[55px] border-solid border-2 mt-12 ml-5 border-black'></button>
                            </div>
                            <div >
                                <img src="/public/Union.svg" className='static ml-96 -mt-7 mb-7' alt="" />
                            </div>
                        </div>
                        <div className=''>
                            <img src="/Icon.svg" className='mt-20 hidden lg:block' alt="" />
                        </div>
                    </div>
                </div>
                <div className='pr-10 lg:mr-80'>
                    <img className='lg:h-[480px] lg:w-[718px] object-cover mb-20' src="/BannerImage.png" alt="" />
                </div>
            </div>
            <div className=' max-w-full'><svg xmlns="http://www.w3.org/2000/svg"  height="2" viewBox="0 0 1170 2" fill="none">
                <path d="M0 1H1170" stroke="#E7DFD7" strokeDasharray="17 17" />
            </svg></div>
        </div>
    );
};

export default Banner;