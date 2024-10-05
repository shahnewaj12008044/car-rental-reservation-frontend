import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import successGif from './../../assets/success.gif'

const Success = () => {
  return (
    <div className="flex items-center justify-center py-4 mb-20">
      <div className="">
        <section className="flex flex-col items-center mb-5">
          <img src={successGif} height={300} width={280} alt="success" />
          <h2 className="header mb-6 mx-w-[600px] text-center">
            You <span className="text-orange-500">Booking request</span> has been
            successfully submitted!
          </h2>
          <p>We will be in touch shortly to confirm.</p>
        </section>

        <Button
          variant="outline"
          className="btn-primary w-full"
        >
          <Link to="/booking" className=" relative z-10">
            New Booking
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
