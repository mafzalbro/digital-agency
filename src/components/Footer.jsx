import { DiGithubBadge } from "react-icons/di";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="py-6 bg-gray-900 text-white text-center">
    <div className="space-x-4">
      <FaFacebookF className="inline-block text-lg hover:text-indigo-400 transition" />
      <FaTwitter className="inline-block text-lg hover:text-indigo-400 transition" />
      <FaInstagram className="inline-block text-lg hover:text-indigo-400 transition" />
    </div>
    <p className="m-4 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
      <span>© 2024 XYZ Company. All rights reserved.</span>
      <span className="md:visible hidden">|</span>
      <div className="flex gap-2 justify-center items-center">
      <a href="https://github.com/mafzalbro" target="_blank" className="hover:text-blue-500">
        <span>
          <DiGithubBadge size={25} className="mr-0 inline-block" /> mafzalbro
        </span>
      </a>
      <span>|</span>
      <a href="https://github.com/mafzalbro/digital-agency" target="_blank" className="hover:text-blue-500">
        <span>
          <DiGithubBadge size={25} className="mr-0 inline-block" /> repo
        </span>
      </a>
      </div>
    </p>
  </footer>
);

export default Footer;
