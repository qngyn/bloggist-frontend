import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navigation = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/quynhnguyen00/",
      icon: FaGithub,
    },
    {
      name: "GitHub",
      href: "https://github.com/qngyn",
      icon: FaLinkedin,
    },
  ];
  
export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5">
                        &copy; 2023 Quynh Nguyen
                    </p>
                </div>
            </div>
      </footer>
    );
}