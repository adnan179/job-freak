import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div
      className="flex flex-col w-[300px] h-screen sticky top-0 left-0 justify-between items-center 
      shadow-2xl rounded-xl py-10"
    >
      {/* heading */}
      <div className="flex">
        <h1 className="text-4xl text-purple-900">Job Freak</h1>
      </div>
      {/* pages name */}
      <div className="flex flex-col justify-start gap-11">
        <Link to="/">
          <div className="flex flex-row justify-start items-center cursor-pointer text-purple-900 gap-3">
            <div className="material-symbols-outlined text-4xl font-medium">
              Home
            </div>
            <p className="text-2xl">Home</p>
          </div>
        </Link>

        <Link to="/info">
          <div className="flex flex-row justify-start items-center cursor-pointer text-purple-900 gap-3">
            <div className="material-symbols-outlined text-4xl">info</div>
            <p className="text-2xl">Info</p>
          </div>
        </Link>

        <Link to="/contact">
          <div className="flex flex-row items-center cursor-pointer text-purple-900 gap-3">
            <div className="material-symbols-outlined text-4xl font-medium">
              contact_support
            </div>
            <p className="text-2xl">contact</p>
          </div>
        </Link>

        <Link to="/guide">
          <div className="flex flex-row items-center cursor-pointer text-purple-900 gap-3">
            <div className="material-symbols-outlined text-4xl font-medium">
              help
            </div>
            <p className="text-2xl">Guide</p>
          </div>
        </Link>
      </div>
      {/* social media links */}
      <div className="flex flex-row justify-center items-center gap-5 text-5xl text-purple-900">
        <div className="cursor-pointer">
          <AiFillInstagram />
        </div>
        <div className="cursor-pointer">
          <AiFillLinkedin />
        </div>
        <div className="cursor-pointer">
          <AiFillFacebook />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
