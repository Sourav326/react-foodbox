import PageHeader from "./PageHeader"
import Benefits from "../Benefits";
import CustomerWords from "../CustomerWords";

const About = () => {
    return(
        <>
            <PageHeader title="About us"/>
            <div className="mx-auto w-full max-w-screen-xl">
                <p className="py-5 text-lg text-slate-500 text-justify lg:text-center lg:px-16 px-4">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    The best part? Every bit of your work at Foodbox will help elevate the lives of our users across India.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-4 py-8 gap-8 lg:py-20 px-4">
                    <Benefits />
                </div>

            </div>
            <CustomerWords />
        </>
    )
}

export default About