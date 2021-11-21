import Link from "next/link";

export default function Tooltip(props) {
  return (
    <div class='relative flex flex-col items-center group'>
      <svg
        class='text-gray-300 w-5 h-5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fill-rule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
          clip-rule='evenodd'
        />
      </svg>
      <div class='absolute bottom-0 right-0 flex flex-col items-center hidden mb-6 group-hover:flex'>
        <span class='relative z-10 p-2 w-96 text-xs leading-none text-white bg-black shadow-lg '>
          <div className='text-left'>
            {props.dateTime === "" ? (
              props.data
            ) : (
              <>
                Het juridisch afbreukrisico is opgebouwd uit vijf elementen.
                <br />
                De waardering van het afbreukrisico bestaat uit de volgende
                vragen:
                <ul>
                  <li> - Hoe duidelijk is de wet?</li>
                  <li> - Is er jurisprudentie te vinden?</li>
                  <li> - Hoe complex is de maatregel?</li>
                  <li> - Hoe groot is de kans op schadeclaims?</li>
                  <li>
                    - Indien relevant: wat is de niet-juridische beoordeling van
                    de maatregel?
                  </li>
                </ul>
                <br />
                Elke vraag krijgt een eigen score tussen 1 - 5. De gemiddelden
                daarvan bepalen de waardering voor het juridisch afbreukrisico:
                1 (laag) t/m 5 (hoog).
              </>
            )}

            {props.data}
          </div>
        </span>
        <div class='w-3 h-3 -mt-2 rotate-45 bg-black'></div>
      </div>
    </div>
  );
}
