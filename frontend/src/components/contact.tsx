import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const ContactPage = () => {
  return (
    <div className=" py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className=" p-8 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold mb-2">Email:</p>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <a
                href="mailto:aynuman19@gmail.com"
                className="text-blue-500 hover:underline"
              >
                aynuman19@gmail.com
              </a>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="font-semibold mb-2">Phone:</p>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <p>+251900032637</p>
            </div>
          </div>
          <div>
            <p className="font-semibold mb-2">Follow us:</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-blue-500 hover:underline">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
