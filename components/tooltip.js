import React from "react";
import Link from "next/link";

export default function Tooltip(props) {
  return (
    <div className='relative flex flex-col items-center group'>
      <svg
        className='text-gray-300 w-5 h-5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
          clipRule='evenodd'
        />
      </svg>
      <div className='absolute bottom-0 right-0 flex flex-col items-center hidden mb-6 group-hover:flex'>
        <span className='relative z-10 p-2 w-96 text-xs leading-none text-white bg-black shadow-lg '>
          <div className='text-left'>
            {props.data === "" ? (
              <>
                De juridische invloed zegt iets over de grootte van de
                maatregel. Het is opgebouwd uit vier elementen:
                <br />
                <ul>
                  <li> - Bereik</li>
                  <li> - Duur</li>
                  <li> - Frequentie</li>
                  <li> - Omvang</li>
                </ul>
                <br />
                Elk element krijgt een eigen score tussen 1 - 5. De gemiddelden
                daarvan bepalen de waardering voor de juridische invloed: 1
                (laag) t/m 5 (hoog).
              </>
            ) : (
              <>
                <div>
                  <p>
                    Het juridisch afbreukrisico is opgebouwd uit een analyse
                    waar vijf elementen gewaardeerd worden met een score tussen
                    1 (laag) – 5 (hoog):
                  </p>
                  <br />
                  <br />
                  <table>
                    <tr>
                      <th>Element</th>
                      <th>Score</th>
                    </tr>
                    <tr>
                      <td>De wet is redelijk duidelijk </td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>
                        Er is nog geen jurisprudentie beschikbaar over de
                        maatrege
                      </td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>De maatregel is redelijk complex</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>De kans op schadeclaims is relatief laag</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Niet-juridische beoordeling</td>
                      <td>Niet relevant</td>
                    </tr>
                  </table>
                </div>
              </>
            )}
          </div>
        </span>
        <div className='w-3 h-3 -mt-2 rotate-45 bg-black'></div>
      </div>
    </div>
  );
}
