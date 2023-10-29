

const Accordion = () => {
    return (
        <div className="flex h-[600px] justify-evenly bg-[#110804]">
            <div>
                <div className="collapse collapse-arrow bg-inherit">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content bg-[#2F2927]">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <div>
                <p>OUR PROCESS</p>
                <h2>OUR PROCESS OF WORKING</h2>
            </div>
        </div>
    );
};

export default Accordion;