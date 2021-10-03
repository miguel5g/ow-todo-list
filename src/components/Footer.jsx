import { FiDiscord, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Button } from "./Button";

function BaseLink({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="flex justify-center border-t border-gray-300">
      <div className="flex flex-col flex-1 md:max-w-screen-lg md:flex-row items-center justify-center md:justify-between p-4">
        <h2 className="text-gray-800 text-lg mb-4">
          Projeto desenvolvido por{" "}
          <BaseLink href="https://github.com/miguel5g/">Miguel Ângelo</BaseLink>
        </h2>

        <div className="flex gap-2">
          <BaseLink href="https://www.linkedin.com/in/miguel5g/">
            <Button>
              <FiLinkedin />
              miguel5g
            </Button>
          </BaseLink>
          <BaseLink href="https://github.com/miguel5g/">
            <Button>
              <FiGithub />
              miguel5g
            </Button>
          </BaseLink>
          <BaseLink href="https://twitter.com/guel5g">
            <Button>
              <FiTwitter />
              guel5g
            </Button>
          </BaseLink>
        </div>
      </div>
    </footer>
  );
}
