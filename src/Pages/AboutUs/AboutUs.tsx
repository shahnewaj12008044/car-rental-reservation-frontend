
import Banner from "./Banner";
import Contact from "./Contact";
import Fleet from "./Fleet";
import CompanyHistory from "./History";
import Team from "./Team";
import ValuesAndCommitment from "./ValuesAndCommitment";

const AboutUs = () => {
  return (
       <div className="flex flex-col py-2">
           <Banner />
           <CompanyHistory/>
           <Team />
           <Fleet />
           <ValuesAndCommitment />
          <Contact/>
        </div>
);
};

export default AboutUs;