import Modal from '../modal/modal';
import InstrumentTooltipButton from '../modal/modal-buttons/instrument-tooltip-button';
import ModalContent from '../modal/modal-content';
import TooltipJuridischeHoudbaarheidContent from './tooltip-juridische-houdbaarheid-content';
import TooltipJuridischeInvloedContent from './tooltip-juridische-invloed-content';
import RladderTooltipContent from './tooltip-r-ladder-content';

export default function InstrumentMetaData({ data, borders }) {
  return (
    <>
      <div className='hidden sm:block'>
        <div
          className={`${
            borders === true ? 'sm:border-y sm:border-gray-300' : 'pb-3 pt-5'
          } flex h-auto w-full max-w-[870px] grow-0 flex-row items-center gap-x-4 justify-self-start`}
        >
          <div className='items-st flex h-auto w-full grow-0 flex-row gap-x-3 justify-self-start'>
            <div className='flex basis-houdbaarheid flex-col'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Juridische houdbaarheid</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte juridische houdbaarheid'>
                    <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                  </ModalContent>
                </Modal>
              </div>

              <div className='flex items-center'>
                <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                  {data?.juridischeHaalbaarheid}
                </div>
              </div>
            </div>
            <div className='flex basis-invloed flex-col'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Invloed</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte invloed'>
                    <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                  </ModalContent>
                </Modal>
              </div>
              <div className='flex items-center'>
                <div className='p-xs-semibold rounded-cl bg-green-50 p-1 text-green-500'>
                  {data?.juridischInvloed}
                </div>
              </div>
            </div>
            <div className='flex basis-overheidslaag flex-col'>
              <div className='flex h-6 items-center'>
                <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>Overheidslaag</div>
              </div>

              <div className='p-xs-semibold flex text-green-500'>
                <div className='shrink rounded-cl bg-green-50 p-1'>
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
            <div className='flex basis-rladder flex-col'>
              <div className='flex items-center'>
                <div className='p-2xs-semibold mb-1 text-cl-dark-grey'>R-ladder</div>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='R-ladder: strategieën van circulariteit'>
                    <RladderTooltipContent />
                  </ModalContent>
                </Modal>
              </div>

              <div className='flex items-center'>
                <div className='flex flex-row items-center'>
                  <div className='shrink rounded-cl bg-green-50 p-1'>
                    {data?.rLadder?.map((rValue) => (
                      <span key={rValue} className='p-xs-semibold text-green-500'>
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
      <div className='mb-4 flex flex-col justify-center sm:hidden'>
        <div className='flex h-auto flex-row justify-between py-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold text-cl-dark-grey sm:py-1'>Juridische houdbaarheid</div>
              <Modal Button={<InstrumentTooltipButton />}>
                <ModalContent title='Geschatte juridische houdbaarheid'>
                  <TooltipJuridischeHoudbaarheidContent JHTooltipText={data.JHTooltipText} />
                </ModalContent>
              </Modal>
            </div>
            <div className='flex items-center'>
              <div className='p-xs-semibold shrink rounded-cl bg-green-100 p-1 text-green-500'>
                {data?.juridischeHaalbaarheid}
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold py-1 text-cl-dark-grey'>Invloed</div>
              <Modal Button={<InstrumentTooltipButton />}>
                <ModalContent title='Geschatte invloed'>
                  <TooltipJuridischeInvloedContent invloedTooltipText={data.invloedTooltipText} />
                </ModalContent>
              </Modal>
            </div>

            <div className='flex items-center'>
              <div className='p-xs-semibold shrink rounded-cl bg-green-100 p-1 text-green-500'>
                {data?.juridischInvloed}
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-auto py-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center'>
              <div className='p-xs-semibold py-1 text-cl-dark-grey'>Overheidslaag</div>
            </div>

            <div className='p-xs-semibold shrink rounded-cl bg-green-100 p-1 text-green-500'>
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
              <div className='p-xs-semibold py-1 text-cl-dark-grey'>R-ladder</div>
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
                    className='p-xs-semibold shrink rounded-cl bg-green-100 p-1 text-green-500'
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
