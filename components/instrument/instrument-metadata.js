import Modal from '../modal/modal';
import InstrumentTooltipButton from '../modal/modal-buttons/instrument-tooltip-button';
import ModalContent from '../modal/modal-content';
import TooltipJuridischeHoudbaarheidContent from './tooltip-juridische-houdbaarheid-content';
import RladderTooltipContent from './tooltip-r-ladder-content';
import TooltipJuridischeInvloedContent from './tooltip-juridische-invloed-content';

export default function InstrumentMetaData({ data, borders }) {
  return (
    <>
      <div className='hidden sm:block'>
        <div
          className={`${
            borders === true ? 'sm:border-y sm:border-gray-300' : 'pt-5 pb-3'
          } h-auto flex flex-row gap-x-4 grow-0 items-center justify-self-start w-full max-w-[870px]`}
        >
          <div className='h-auto flex flex-row gap-x-3 grow-0 items-st justify-self-start w-full'>
            <div className='flex flex-col basis-houdbaarheid'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold text-gray-600 mb-1'>Juridische houdbaarheid</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte juridische houdbaarheid'>
                    <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                  </ModalContent>
                </Modal>
              </div>

              <div className='flex items-center'>
                <div className='p-xs-semibold text-green-500 bg-green-50 p-1 rounded-cl'>
                  {data?.juridischeHaalbaarheid}
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-invloed'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold text-gray-600 mb-1'>Invloed</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte invloed'>
                    <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                  </ModalContent>
                </Modal>
              </div>
              <div className='flex items-center'>
                <div className='p-xs-semibold text-green-500 bg-green-50 p-1 rounded-cl'>
                  {data?.juridischInvloed}
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-overheidslaag'>
              <div className='flex items-center h-6'>
                <div className='p-2xs-semibold text-gray-600 mb-1'>Overheidslaag</div>
              </div>

              <div className='p-xs-semibold text-green-500 flex'>
                <div className='shrink bg-green-50 p-1 rounded-cl'>
                  {data?.overheidslaag
                    ?.filter((x) => x !== null)
                    .map((level) => (
                      <span key={level} className=''>
                        {level} {data?.overheidslaag?.slice(-1)[0] !== level && <span>-</span>}
                        &nbsp;
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-rladder'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold text-gray-600 mb-1'>R-ladder</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='R-ladder: strategieën van circulariteit'>
                    <RladderTooltipContent />
                  </ModalContent>
                </Modal>
              </div>

              <div className='flex items-center'>
                <div className='flex flex-row items-center'>
                  <div className='shrink bg-green-50 p-1 rounded-cl'>
                    {data?.rLadder?.map((rValue) => (
                      <span key={rValue} className='p-xs-semibold text-green-500 '>
                        {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                        &nbsp;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className='flex flex-col sm:hidden justify-center mb-4'>
        <div className='flex flex-row justify-between h-auto py-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold sm:py-1 text-gray-600'>Juridische houdbaarheid</div>
              <Modal Button={<InstrumentTooltipButton />}>
                <ModalContent title='Geschatte juridische houdbaarheid'>
                  <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                </ModalContent>
              </Modal>
            </div>
            <div className='flex items-center'>
              <div className='shrink bg-green-100 p-1 rounded-cl p-xs-semibold text-green-500'>
                {data?.juridischeHaalbaarheid}
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
              <Modal Button={<InstrumentTooltipButton />}>
                <ModalContent title='Geschatte invloed'>
                  <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                </ModalContent>
              </Modal>
            </div>

            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 shrink bg-green-100 p-1 rounded-cl'>
                {data?.juridischInvloed}
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-auto py-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
            </div>

            <div className='p-xs-semibold text-green-500 shrink bg-green-100 p-1 rounded-cl'>
              {data?.overheidslaag
                ?.filter((x) => x !== null)
                .map((level) => (
                  <span key={level} className=''>
                    {level} {data?.overheidslaag.slice(-1)[0] !== level && <span>-</span>}
                    &nbsp;
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className='flex py-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold py-1 text-gray-600'>R-ladder</div>
              <Modal Button={<InstrumentTooltipButton />}>
                <ModalContent title='R-ladder: strategieën van circulariteit'>
                  <RladderTooltipContent />
                </ModalContent>
              </Modal>
            </div>

            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.rLadder?.map((rValue) => (
                  <div
                    key={rValue}
                    className='p-xs-semibold text-green-500 shrink bg-green-100 p-1 rounded-cl'
                  >
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}