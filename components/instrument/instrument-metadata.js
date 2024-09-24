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
            borders === true ? 'border-y border-gray-300' : 'pt-5 pb-3'
          } h-auto flex flex-row gap-x-4 grow-0 items-center justify-self-center max-w-[870px]`}
        >
          <div className='flex flex-col basis-houdbaarheid'>
            <div className='p-xs-semibold text-gray-600'>Juridische houdbaarheid</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.juridischeHaalbaarheid}
              </div>
              {data?.slug && (
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte juridische houdbaarheid'>
                    <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                  </ModalContent>
                </Modal>
              )}
            </div>
          </div>
          <div className='flex flex-col basis-invloed'>
            <div className='p-xs-semibold text-gray-600'>Invloed</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>{data?.juridischInvloed}</div>
              {data?.slug && (
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte invloed'>
                    <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                  </ModalContent>
                </Modal>
              )}
            </div>
          </div>
          <div className='flex flex-col basis-overheidslaag'>
            <div className='p-xs-semibold text-gray-600'>Overheidslaag</div>
            <div className='p-xs-semibold text-green-500'>
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
          <div className='flex flex-col basis-rladder'>
            <div className='p-xs-semibold text-gray-600'>R-ladder</div>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500 '>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.slug && (
                  <Modal Button={<InstrumentTooltipButton />}>
                    <ModalContent title='R-ladder: strategieën van circulariteit'>
                      <RladderTooltipContent />
                    </ModalContent>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className='flex flex-col sm:hidden justify-center mb-4'>
        <div className='flex flex-row justify-between h-auto py-2 border-b border-t-2 border-gray-400'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold sm:py-1 text-gray-600'>Juridische houdbaarheid</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>
                {data?.juridischeHaalbaarheid}
              </div>
              {data?.slug && (
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte juridische houdbaarheid'>
                    <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                  </ModalContent>
                </Modal>
              )}
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-gray-600'>Invloed</div>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-green-500 pr-2'>{data?.juridischInvloed}</div>
              {data?.slug && (
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte invloed'>
                    <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                  </ModalContent>
                </Modal>
              )}
            </div>
          </div>
        </div>
        <div className='border-b border-gray-400 flex h-auto py-2'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-gray-600'>Overheidslaag</div>
            <div className='p-xs-semibold text-green-500'>
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
        <div className='flex py-2 border-b-2 border-gray-400'>
          <div className='flex flex-col justify-center'>
            <div className='p-xs-semibold py-1 text-gray-600'>R-ladder</div>
            <div className='flex items-center'>
              <div className='flex flex-row items-center'>
                {data?.rLadder?.map((rValue) => (
                  <div key={rValue} className='p-xs-semibold text-green-500'>
                    {rValue} {data?.rLadder.slice(-1)[0] !== rValue && <span>-</span>}
                    &nbsp;
                  </div>
                ))}
                {data?.slug && (
                  <Modal Button={<InstrumentTooltipButton />}>
                    <ModalContent title='R-ladder: strategieën van circulariteit'>
                      <RladderTooltipContent />
                    </ModalContent>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
