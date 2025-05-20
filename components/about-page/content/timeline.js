'use client';

import { PortableText } from 'next-sanity';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const dutchMonths = [
  '', // so that index 1 = January
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
];

export default function Timeline({ data }) {
  const years = Array.from(new Set(data.timelineItems.map((item) => item.year))).sort(
    (a, b) => a - b,
  );

  const defaultIndex = years.indexOf(2024) !== -1 ? years.indexOf(2024) : 0;

  const itemsByYear = years.map((year) => {
    const items = data.timelineItems
      .filter((item) => item.year === year)
      .sort((a, b) => a.month - b.month);

    return {
      milestones: items.filter((item) => item.typeOfMilestone === 'milestone'),
      aggregateMilestones: items.filter((item) => item.typeOfMilestone === 'aggregateMilestone'),
    };
  });

  return (
    <div className='mb-[60px] sm:mb-[120px]'>
      <TabGroup defaultIndex={defaultIndex}>
        <TabList className='no-scrollbar mb-20 flex w-full flex-row justify-between gap-x-2 overflow-x-scroll'>
          {years.map((year, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                [
                  'heading-2xl-semibold sm:heading-4xl-semibold border-y-2 border-orange-200 py-6 sm:py-[40px] px-[40px] sm:px-[60px] text-orange-300',
                  selected ? 'rounded-clSm border-none bg-orange-100' : '',
                ].join(' ')
              }
            >
              {year}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {itemsByYear.map((group, idx) => (
            <TabPanel key={years[idx]}>
              <ul className='mb-12 flex flex-col gap-y-14'>
                {group.milestones.map((item) => (
                  <li key={item._key} className='flex flex-col gap-y-1 sm:flex-row items-start sm:items-center'>
                    {item.typeOfMilestone === 'milestone' && (
                      <>
                        <div className='heading-2xl-semibold relative flex h-14 min-w-[150px] items-center rounded-clSm pl-4 text-orange-300'>
                          {/* Background covers only first 10px */}
                          <span className='absolute left-0 top-0 h-full w-12 rounded-clSm bg-orange-100' />
                          {/* Text sits above the background */}
                          <span className='relative z-10 pl-1'>
                            {item.month ? `${dutchMonths[item.month]} ` : ''}
                          </span>
                        </div>
                        <div className='sm:pl-12'>
                          <PortableText
                            value={item.description}
                            components={{
                              block: {
                                normal: ({ children }) => <p className='p-base sm:heading-2xl'>{children}</p>,
                              },
                              marks: {
                                highlight: ({ children }) => (
                                  <span className='heading-2xl-semibold sm:heading-3xl-semibold'>{children}</span>
                                ),
                              },
                            }}
                          />
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {group.aggregateMilestones.length > 0 && (
                <ul className='sm:w-2/3 flex-shrink divide-y-2 divide-orange-200 border-y-2 border-orange-200'>
                  {group.aggregateMilestones.map((item, index) => (
                    <li key={index} className='flex flex-row items-center'>
                      {item.typeOfMilestone === 'aggregateMilestone' && (
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start py-8'>
                          <h3 className='heading-2xl-semibold sm:mr-4 text-orange-300'>
                            {item.title}:
                          </h3>
                          <PortableText
                            value={item.description}
                            components={{
                              block: {
                                normal: ({ children }) => <p className='p-base sm:heading-2xl'>{children}</p>,
                              },
                              marks: {
                                highlight: ({ children }) => (
                                  <span className='heading-2xl-semibold sm:heading-3xl-semibold'>{children}</span>
                                ),
                              },
                            }}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
