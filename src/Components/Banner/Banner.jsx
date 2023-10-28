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
                    <div className='flex justify-evenly mt-4'>
                        <div>
                            <div id='support-text' className='flex gap-8'>
                                <div className='flex justify-evenly'>
                                    <img className='mr-3' src="/public/Group.svg" alt="" />
                                    <p>24/7 Online Support</p>
                                </div>
                                <div className='flex justify-evenly'>
                                    <img className='mr-3' src="/public/Group.svg" alt="" />
                                    <p>Quick Communication</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:mr-80'>
                    <img className='lg:h-[480px] lg:w-[718px] object-cover' src="/public/BannerImage.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;