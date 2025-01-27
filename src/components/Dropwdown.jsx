import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Dropdown(props) {

  const handleOptionClick = (option) => {
    props.setRegionSelect(option);
  }

  return (
    <Menu as="div" className="relative inline-block text-left md:ml-5 min-w-[165px]">
      <div>
        <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-5 py-5 text-sm font-semibold text-lightModeTxt hover:bg-lightModeBackground dark:hover:bg-darkModeBg shadow-md dark:bg-darkModeEl dark:text-white">
          Filter by Region
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-md ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-darkModeEl"
      >
        <div className="py-1">
          <MenuItem onClick={() => handleOptionClick("Africa")}>
            <a
              href="#"
              className="dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Africa
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleOptionClick("Americas")}>
            <a
              href="#"
              className=" dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Americas
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleOptionClick("Asia")}>
            <a
              href="#"
              className="dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Asia
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleOptionClick("Europe")}>
            <a
              href="#"
              className="dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Europe
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleOptionClick("Oceania")}>
            <a
              href="#"
              className="dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Oceania
            </a>
          </MenuItem>
          <MenuItem onClick={() => handleOptionClick('')}>
            <a
              href="#"
              className="dark:text-white block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Reset
            </a>
          </MenuItem>
          </div>
      </MenuItems>
    </Menu>
  )
}

export default Dropdown;