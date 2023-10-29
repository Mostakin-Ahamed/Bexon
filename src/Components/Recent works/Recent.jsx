import '../Recent works/Recent.css'
const Recent = () => {
    return (
        <div className='mt-20 mb-20'>
            <hr className='border-dashed border-gray-400 lg:ml-64' />
            <div className="mt-20 mr-5 lg:mt-40 lg:ml-64">
                <p className='text-gray-400 font-normal mb-3 ml-3 lg:ml-0'>OUR PORTFOLIO</p>
                <h2 className="header text-2xl font-bold mb-5 ml-3 lg:ml-0">OUR RECENT WORKS</h2>
                <img className="h-[600px] lg:w-[1470px] object-cover ml-2 mr-4" src="/recent.png" alt="" />
                <h2 className="header text-2xl font-bold mb-5 ml-3 lg:ml-0 mt-10">WEBSITE DESIGN</h2>
                <p className='font-normal text-base lg:w-[680px] ml-3 lg:ml-0 mb-8 text-justify'>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                <div className='lg:flex justify-between lg:mr-40'>
                    <div>
                        <img className='w-[700px] h-[700px] ml-2 mr-4 lg:ml-0 lg:mr-0 object-cover' src="/image1.png" alt="" />
                        <h2 className="header text-2xl font-bold mb-5 ml-3 lg:ml-0 mt-10">WEBSITE DEVELOPMENT</h2>
                        <p className='font-normal text-base w-[360px] mb-8 ml-3 lg:ml-0 text-justify'>Saving World with Good Designs. Because your satisfaction is everything.</p>
                    </div>
                    <div>
                        <img className='w-[700px] h-[700px] ml-2 mr-4 lg:ml-0 lg:mr-0 object-cover' src="/image2.png" alt="" />
                        <h2 className="header text-2xl font-bold mb-5 ml-3 lg:ml-0 mt-10">BRANDING LOGO</h2>
                        <p className='font-normal text-base w-[360px] ml-3 lg:ml-0 mb-8 text-justify'>Saving World with Good Designs. Because your satisfaction is everything..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recent;