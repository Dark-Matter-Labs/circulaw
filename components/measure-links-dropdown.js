import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const links = {
  houtbouw: [
    '/houtbouw/samenhang-aantal-houtbouwmaatregelen',
    '/measures/houtbouw',
    '/houtbouw/welke-overheid',
  ],
  circulaireWindturbines: [
    '/circulaire-windturbines/samenhang-maatregelen',
    '/measures/windturbines',
    '/circulaire-windturbines/welke-overheid-heeft',
  ],
  matrassen: ['#', '/measures/matrassen', '#'],
};

export default function MeasureLinks({ type }) {
  return (
    <Menu as='div' className='relative inline-block text-left pt-8'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 p-base text-black-white-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100'>
          Bekijk instrumenten:
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {type === 'circulaire-windturbines' ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links['circulaireWindturbines'][0]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    In samenhang
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links[type][0]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    In samenhang
                  </Link>
                )}
              </Menu.Item>
            )}

            {type === 'circulaire-windturbines' ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links['circulaireWindturbines'][1]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    In lijst met filters
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links[type][1]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    In lijst met filters
                  </Link>
                )}
              </Menu.Item>
            )}

            {type === 'circulaire-windturbines' ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links['circulaireWindturbines'][2]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Per overheidsbevoegdheid
                  </Link>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={links[type][2]}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Per overheidsbevoegdheid
                  </Link>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
