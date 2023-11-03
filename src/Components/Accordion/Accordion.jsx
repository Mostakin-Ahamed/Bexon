

const Accordion = () => {
    return (
        <div className="bg-[#110804] lg:flex sm:flex-row-reverse h-[770px] text-white">
            <div className="lg:w-1/2 lg:pt-32 pl-7 lg:flex justify-center ">
                <div>
                    <p className="text-gray-500">Our Process</p>
                    <h1 className="text-4xl font-sans font-bold">OUR PROCESS <br /> OF WORKING</h1>
                </div>
            </div>
            <div className="lg:w-2/3 lg:ml-60 lg:py-28 lg:grid lg:grid-cols-2 gap-4">
                <div className="collapse items-center  collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">1. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>
                <div className="collapse items-center  collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">2. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>
                <div className="collapse  items-center collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">3. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>
                <div className="collapse  items-center  collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">4. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>
                <div className="collapse  items-center   collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">5. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>
                <div className="collapse  items-center  collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <p className="collapse-title text-2xl font-medium">6. Discussion of the project </p>
                    </div>
                    <div className="collapse-content ml-4 bg-inherit">
                        <p>Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Accordion;