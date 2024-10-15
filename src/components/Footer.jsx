import { DiGithubBadge } from "react-icons/di";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="py-6 bg-gray-900 text-white text-center">
    <div className="space-x-4">
      <FaFacebookF className="inline-block text-lg hover:text-indigo-400 transition" />
      <FaTwitter className="inline-block text-lg hover:text-indigo-400 transition" />
      <FaInstagram className="inline-block text-lg hover:text-indigo-400 transition" />
    </div>
    <p className="mt-4 flex justify-center items-center gap-4">
      <span>© 2024 XYZ Company. All rights reserved.</span>
      <span>|</span>
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
    </p>
  </footer>
);

export default Footer;
