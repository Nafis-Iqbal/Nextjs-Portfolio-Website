import { Github, Linkedin } from "lucide-react";

export default function SocialLinks(customStyle: string) {
  return (
    <div className={`flex flex-col justify-right w-[100%] space-y-4 bg-transparent p-4 rounded-lg ${customStyle}`}>
      <a
        href="https://github.com/Nafis-Iqbal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition duration-300"
      >
        <Github size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/nafis-iqbal-79b645213/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300 transition duration-300"
      >
        <Linkedin size={28} />
      </a>
    </div>
  );
}
