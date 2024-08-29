import React, { useState } from 'react';

import SearchModal from './ModalSearch';
import Notifications from './DropdownNotifications';
import Help from './DropdownHelp';
import UserMenu from './DropdownProfile';
import ThemeToggle from './ThemeToggle';

function Header({
  sidebarOpen,
  setSidebarOpen,
  variant = 'default',
}) {

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const App = () => [
    links = [
      {

      }
    ]
  ];

  return (
    <header className={`sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${variant === 'v2' || variant === 'v3' ? 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10' : 'max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90'} ${variant === 'v2' ? 'dark:before:bg-gray-800' : ''} ${variant === 'v3' ? 'dark:before:bg-gray-900' : ''}`}>

      <TailwindNavbar
        brand={
          <img
            src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png"
            width="40"
            height="40"
            alt="Brand logo"
          />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            {links.map(link => {
              // It should be noted that here we would normally use <Link> or
              // whatever other link JSX element your router uses; since all our
              // links are external here we just use <a>
              return (
                <li>
                  <a
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400 transition-all duration-200"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </TailwindNavbar>
      <div
        className="flex p-5 flex-col justify-center text-center"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      >
        <h1 className="text-5xl font-semibold">This is a responsive navbar!</h1>
        <p className="text-2xl">
          Try resizing the window to see how it responds to different screen
          sizes.
        </p>
      </div>
    </header>
  );
}

export default Header;