import FifthHeader from "@/app/components/headings/FifthHeader";
import ThemeButton from "@/app/components/ThemeButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 bg-zinc-400 dark:bg-zinc-950 text-deep-ocean-950 dark:text-deep-ocean-100 py-12 px-10 md:px-32">
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-10 border-b border-b-zinc-500 pb-14">
        <div className="flex flex-col">
          <FifthHeader title={"CAIO COSTA"} />
          <p className="md:max-w-[500px] text-sm sm:text-base text-zinc-800 dark:text-zinc-200">
            I'm a frontend developer with experience in backend and databases, I
            integrate different layers of technology to create digital
            experiences that exceed expectations. Combining innovation and
            technical excellence, I bring every detail to life, from the
            interface to the inner workings.
          </p>
        </div>
        <div className="flex flex-col">
          <FifthHeader title={"SOCIAL"} />
          <li className="flex flex-wrap gap-5 text-2xl text-zinc-800 dark:text-zinc-200 list-none">
            <a
              href="https://www.linkedin.com/in/caio-costa-dev/"
              target="_blank"
              className="hover:text-deep-ocean-900 dark:hover:text-deep-ocean-200 transition ease-out"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/abysswalkerCaio"
              target="_blank"
              className="hover:text-deep-ocean-900 dark:hover:text-deep-ocean-200 transition ease-out"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.youtube.com/@gaiuskuste"
              target="_blank"
              className="hover:text-deep-ocean-900 dark:hover:text-deep-ocean-200 transition ease-out"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 min-h-7">
        <span className="text-center text-sm text-zinc-800 dark:text-zinc-200">
          © Copyright 2024. Made by <b>Caio Costa</b>
        </span>
        <ThemeButton />
      </div>
    </footer>
  );
}
