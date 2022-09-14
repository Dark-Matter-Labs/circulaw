import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import IcontWood from '../../public/icons/houtbouwIconBg.svg';
import RTooltip from '../../components/r_ladder_tooltip';
import JHTooltip from '../../components/juridische_houdbaarheid_tooltip';
import JITooltip from '../../components/juridische_invloed_tooltip';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Law() {
  return (
    <Layout>
      <div className='gradient-bg'>
        <div className='global-margin pt-10 '>
          <div className='block lg:hidden'>
            <h1 className='my-9 text-green1 mobile sm:main'>
              MPG als subselectiecriterium bij gronduitgifte
            </h1>
            <div className='container pb-2'>
              <div className='container-image'>
                <Image src={IcontWood} alt='Icon of a Wood Log' />
              </div>
              <div className=''>
                <Link href={'/houtbouw'}>
                  <a>
                    <span className='font-openSans font-bold pl-2 text-greenLink'>Houtbouw</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className='py-5 border-t-2 border-grey2 '>
              <div className='flex pb-2'>
                <span className='font-manrope font-semibold text-lg text-black1'>R-ladder</span>
                <RTooltip>
                  <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                    <circle cx='12' cy='15' r='10' fill='#979797' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='black'
                    />
                  </svg>
                </RTooltip>
              </div>

              <span className='block-inline font-semibold text-base text-gray-900'>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>
                <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
              </span>
            </div>

            <div className='py-5'>
              <div className='relative border-t-2 border-grey2 pt-4'>
                <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                  Subrechtsgebied
                </div>
              </div>

              <div className='font-manrope font-normal text-base'>
                <p>Omgevingsrecht</p>
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1'>
                    Juridisch invloed
                  </span>
                  <JITooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </JITooltip>
                </div>
              </div>

              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      3 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>

            <div className='py-5'>
              <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1 pb-2'>
                    Juridisch houdbaarheid
                  </span>
                  <JHTooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </JHTooltip>
                </div>
              </div>
              <div className='mt-3 flex items-center'>
                <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <div
                    key={rating}
                    className={classNames(
                      4 > rating ? 'score-true' : 'score-false',
                      'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                    )}
                    aria-hidden='true'
                  />
                ))}
                HOOG
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3'>
            <div className='w-full sm:max-w-3xl pb-20 col-span-2'>
              <h1 className='hidden lg:block my-9 text-green1 mobile sm:main'>
                MPG als subselectiecriterium bij gronduitgifte
              </h1>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Gronduitgifte: wat is het?</h2>
                <p className='newlineDisplay body-text-mobile sm:body-text'>
                  Gronduitgifte is het uitgeven van bouwgrond door een gemeente aan gegadigden die
                  bijvoorbeeld een woning of bedrijf willen bouwen. Het gaat om een
                  privaatrechtelijke overeenkomst tussen de gemeente en de gegadigde. Aan deze
                  uitgifte van grond worden voorwaarden gekoppeld. Uitgifte vindt meestal plaats via
                  een selectieprocedure, zoals inschrijving of loting. Dit is vergelijkbaar met de
                  verdeling van schaarse vergunningen.
                </p>
                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Sinds het Didam-arrest is de overheid verplicht een selectieprocedure op te zetten
                  bij gronduitgifte, tenzij van te voren duidelijk is dat slecht één serieuze
                  gegadigde geschikt is voor de koop van de grond. Het voordeel van deze
                  selectieprocedure is dat je als overheid innovaties kan stimuleren die andere
                  partijen niet aandurven. Zo kan je circulaire doelstellingen nastreven, zoals het
                  bevorderen van houtbouw.
                </p>
                <div className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Binnen het selectiebeleid kan je verschillende criteria vaststellen aan de hand
                  waarvan de uiteindelijke keuze tussen de deelnemers wordt gemaakt. Aan deze
                  criteria zijn drie voorwaarden verbonden:
                  <ul className='list-disc pl-6'>
                    <li>de criteria moeten objectief zijn; </li>
                    <li>de criteria moeten door een rechter kunnen worden getoetst; en </li>
                    <li>de criteria moeten redelijk zijn. </li>
                  </ul>
                </div>
                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Bij het opstellen van deze criteria moeten de algemene beginselen van behoorlijk
                  bestuur in acht worden genomen. Het vereiste van objectiviteit houdt in dat de
                  criteria ondubbelzinnig en zo duidelijk mogelijk moeten worden geformuleerd.
                </p>
                <div className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Kijk voor een voorbeeld van de selectiecriteria naar de gunningscriteria afkomstig
                  uit de Aanbestedingswet:
                  <ul className='list-disc pl-6'>
                    <li>beste prijs-kwaliteitsverhouding (BPKV); </li>
                    <li>laagste kosten berekend op basis van kosteneffectiviteit; en </li>
                    <li>laagste prijs.</li>
                  </ul>
                </div>

                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Wordt gekozen voor het selectiecriterium &lsquo;beste
                  prijs-kwaliteitverhouding&rsquo;, dan moeten nadere kwaliteitscriteria worden
                  opgesteld, zoals sociale, milieu- of innovatieve criteria. Zo kunnen op
                  verschillende manieren circulaire criteria of duurzaamheidscriteria worden
                  verwerkt waar houtbouw beter op scoort. Voor voorbeelden van selectiecriteria
                  toegepast op gronduitgifte, biedt{' '}
                  <a
                    href='https://www.urk.nl/_flysystem/media/selectieleidraad-openbare-biedprocedure-gronduitgifte-deelgebied-1a-zeeheldenwijk.pdf'
                    className='link-mobile sm:link text-greenLink'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    het beleid van de gemeente Urk
                  </a>{' '}
                  inspiratie: zie met name paragraaf 3 over ‘beste prijs-kwaliteitsverhouding’.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>
                  Hoe kan de MPG als subselectiecriterium houtbouw bevorderen?
                </h2>
                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Één manier om houtbouw te stimuleren via gronduitgifte is door de MPG-score
                  (milieuprestatie gebouwen) een grote rol te laten spelen in de selectiebeslissing,
                  bijvoorbeeld door de MPG-score van het gebouw als subselectiecriterium te
                  gebruiken. De MPG is een indicator die in een getalswaarde de milieuprestaties van
                  een gebouw weergeeft op basis van een levenscyclusanalyse. Van verschillende
                  levensfases van een gebouw wordt de milieudruk bepaald. De levensfases zijn:
                  Productie, Bouw, Gebruik, Sloop, Hergebruik. Onder milieudruk vallen de gebruikte
                  energie en grondstoffen, en ook geproduceerde uitstoot en afvalstoffen. De
                  milieudruk (uitgedrukt in euro&rsquo;s) wordt afgezet tegen de oppervlakte en
                  verwachte levensduur van het gebouw. Gebouwen die meer circulair zijn leiden zo
                  tot een lagere MPG-score. De wettelijk minimale MPG-norm voor kantoren is 1,0.
                  Voor woningen geldt 0,8. Beide worden geleidelijk verzwaard tot 0,5 in 2030. Dit
                  volgt uit het Bouwbesluit 2012.
                </p>
                <p className='py-5 body-text-mobile sm:body-text newlineDisplay'>
                  Als je besluit te gaan selecteren op basis van MPG-score kan dat op verschillende
                  manieren. Bepaal dus hoe deelnemers kunnen scoren met hun MPG. Dat kan met een
                  vooraf vastgestelde schaal die is gekoppeld aan MPG-waarden, of een relatieve
                  schaal, waarbij de hoogste score van een deelnemer de meeste punten krijgt en de
                  laagste de minste
                </p>
              </div>
              <div className='bg-green1 px-10 py-10'>
                <h2 className='pb-2 mobile sm:main text-white1'>
                  Zelf aan de slag met gronduitgifte?
                </h2>
                <p className='body-text-mobile sm:body-text text-white1 pb-4'>
                  Check hoe de MPG als subgunningscriterium in jouw organisatie kunt gebruiken om
                  houtbouw te bevorderen.
                </p>
                <a href='/Leidraad-Gronduitgifte-CircuLaw.pdf'>
                  <button
                    type='button'
                    className='inline-flex rounded-full items-center px-4 py-2 border border-green2 button text-white1 bg-green2'
                  >
                    Bekijk de leidraad →
                  </button>
                </a>
              </div>

              <div className='pb-4 pt-8'>
                <h2 className='pb-2 mobile sm:main'>Uit de praktijk</h2>
                <p className='body-text-mobile sm:body-text'>
                  In de praktijk wordt de MPG-score al veel gebruikt bij selectieprocedures voor
                  grondontwikkeling. De Gemeente Amsterdam besloot bijvoorbeeld in 2015 dat minstens
                  30% van de selectiebeslissing op duurzaamheid gebaseerd moet worden. Dat heeft
                  geleid tot verschillende manieren waarop duurzaamheid als selectiecriterium is
                  ingevuld, waaronder de MPG-score als indicator voor circulair bouwen, met name wat
                  betreft circulair materiaalgebruik. De winnende inschrijvingen in
                  selectieprocedures van bouwprojecten ‘de Koffiefabriek’ en ‘Juf Nienke’ zijn hier
                  goede voorbeelden van.
                </p>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Verder lezen andere bronnen</h2>
                <div className='newlineDisplay body-text-mobile sm:body-text truncate'>
                  <p className='body-text-mobile sm:body-text'>
                    Over gronduitgifte op basis van MPG zijn de laatste jaren verschillende
                    rapporten verschenen. Zie bijvoorbeeld:
                  </p>
                  <ul className='list-disc pl-6'>
                    <li>
                      <a
                        href='https://www.rvo.nl/onderwerpen/wetten-en-regels-gebouwen/milieuprestatie-gebouwen-mpg'
                        className='text-greenLink link-mobile sm:link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Algemene informatie over de MPG van de RvO
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://energieslag.rvo.nl/file/download/f4f55197-f450-4ce6-9704-039831f3c179/1611914396leidraad%20verduurzamen%20gemeentelijk%20vastgoed%20-%20stappenplan%20met%20praktijkvoorbeelden.pdf'
                        className='text-greenLink link-mobile sm:link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Leidraad over de verduurzaming van gemeentelijk vastgoed met
                        praktijkvoorbeelden, 2020 door de RvO
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Beleid en andere instrumenten</h2>
                <p className='body-text-mobile sm:body-text pb-6'>
                  Over het algemeen is het verstandig naast de MPG ook andere criteria te gebruiken,
                  omdat andere duurzaamheids- en circulariteitsaspecten niet of onvoldoende in
                  MPG-scores verwerkt zijn. Daarbij kun je onder meer denken aan de zogenaamde
                  BENG-normen voor energiegebruik van gebouwen, het percentage hernieuwbaar
                  materiaal en het percentage secundair materiaal. Overweeg ook kwalitatieve
                  criteria mee te nemen, zoals ‘de integrale verwerking van circulariteit in het
                  ontwerp’ of ‘de integrale verwerking van duurzaamheid in het ontwerp’. Als je
                  meerdere criteria stelt moet je altijd ook het relatieve gewicht bepalen van de
                  MPG-score ten opzichte van andere subselectiecriteria. Een (duurzame)
                  inkoopspecialist kan helpen bij het vinden van een combinatie van criteria en het
                  bepalen van de juiste weging van die criteria die voor jouw opdracht het beste is,
                  omdat die de markt kent. Leg contact binnen je organisatie of werk met externe
                  expertise als je aan de slag gaat met circulair aanbesteden.
                </p>
                <p className='body-text-mobile sm:body-text pb-6'>
                  Je kan een MPG als selectiecriterium ook combineren met een minimale eis voor een
                  MPG-score. Het Transitieteam Circulaire Bouweconomie adviseert bijvoorbeeld om een
                  relatieve weging van inschrijvingen te combineren met een minimale grenswaarde van
                  10 tot 15% onder de wettelijke eis uit het Bouwbesluit (0,7 in 2022). Zo filter je
                  in ieder geval al de minst ambitieuze inschrijvingen eruit.
                </p>
                <p className='body-text-mobile sm:body-text'>
                  Houd bij gebruik van de MPG in het bijzonder rekening met zonnepanelen.
                  Zonnepanelen zijn essentieel voor de energie- en circulaire transitie, maar
                  verhogen de MPG-score sterk. Daarom moet je zonnepanelen buiten de MPG-score
                  houden of zorgen dat andere delen van de opdracht die opvangen. Je kan dit
                  bijvoorbeeld ondervangen met een minimumeis aan duurzame energie. Het
                  Transitieteam Circulaire Bouweconomie adviseert een minimum van 40% op BENG-3.
                </p>
              </div>
              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Selectieprocedure: eisen en beperkingen</h2>
                <div className='body-text-mobile sm:body-text overflow-x-hidden'>
                  <p>Een selectieprocedure moet aan de volgende eisen voldoen: </p>
                  <ul className='list-disc pl-6'>
                    <li>
                      De overheid moet in de eerste plaats met inachtneming van de hem toekomende
                      beleidsruimte criteria opstellen aan de hand waarvan de koper wordt
                      geselecteerd. Deze criteria moeten objectief, toetsbaar en redelijk zijn.
                    </li>
                    <li>
                      De overheid moet de volgende zaken op een passende wijze openbaar maken:
                      <ul className='list-disc pl-6'>
                        <li>de beschikbaarheid van de onroerende zaak; </li>
                        <li>de selectieprocedure;</li>
                        <li>het tijdschema; en </li>
                        <li>de toe te passen selectiecriteria.</li>
                      </ul>
                    </li>
                    <li>
                      Iets op een passende wijze openbaar maken betekent dat de overheid de
                      voorwaarden en modaliteiten van de selectieprocedure op zo’n manier bekend
                      maakt dat (potentiële) gegadigden daarvan tijdig kennis kunnen nemen. Denk aan
                      (een vaste rubriek op) de algemene website van de overheidsorganisatie, een
                      speciaal voor dit type kennisgevingen ingerichte webpagina of het
                      Gemeenteblad.
                    </li>
                  </ul>
                  <p className='pt-6'>Uitzondering op de verplichte selectieprocedure: </p>
                  <ul className='list-disc pl-6'>
                    <li>
                      De selectieprocedure hoeft niet te worden toegepast, als van te voren
                      duidelijk is dat slechts één serieuze gegadigde in aanmerking komt voor de
                      aankoop. Dit moet ook worden vastgesteld op grond van objectieve, toetsbare en
                      redelijke criteria. Het is onwaarschijnlijk dat dit vaak zal voorkomen. Als je
                      vermoedt dat hier sprake van is, leg dan contact met juridische experts binnen
                      je organisatie of werk met externe juridisch adviseurs.{' '}
                    </li>
                  </ul>

                  <p className='pt-6'>Termijn:</p>
                  <ul className='list-disc pl-6'>
                    <li>
                      De selectieprocedure hoeft niet te worden toegepast, als van te voren
                      duidelijk is dat slechts één serieuze gegadigde in aanmerking komt voor de
                      aankoop. Dit moet ook worden vastgesteld op grond van objectieve, toetsbare en
                      redelijke criteria. Het is onwaarschijnlijk dat dit vaak zal voorkomen. Als je
                      vermoedt dat hier sprake van is, leg dan contact met juridische experts binnen
                      je organisatie of werk met externe juridisch adviseurs.{' '}
                    </li>
                    <ul className='list-disc pl-6'>
                      <li>
                        Naarmate meer inspanningen worden gevraagd, zijn langere termijnen logisch.
                      </li>
                      <li>
                        Ook is het verstandig om enige ruimte te bieden voor het stellen van vragen
                        door de (potentiële) gegadigden.
                      </li>
                      <li>
                        Ook is het aan te bevelen om gegadigden die afvallen na de selectieprocedure
                        tijd te geven om juridische stappen te ondernemen tegen de
                        selectiebeslissing; binnen die tijd kan de overheid wachten met het aangaan
                        van de voorgenomen overeenkomst.
                      </li>
                      <li>
                        Zie voor te hanteren termijnen de termijnen in het aanbestedingsrecht. Zie
                        hiervoor:{' '}
                        <a
                          href='https://www.pianoo.nl/nl/document/12961/factsheet-termijnen-aanbestedingswet-2012 '
                          className='link-mobile sm:link text-greenLink'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          https://www.pianoo.nl/nl/document/12961/factsheet-termijnen-aanbestedingswet-2012{' '}
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className='py-4'>
                <h2 className='pb-2 mobile sm:main'>Juridische toelichting</h2>
                <table className='table-fixed w-full mt-5'>
                  <tbody>
                    <tr className='my-10 border-b-2 border-t-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Rechtsgebied</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>Privaatrecht</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Citeertitel</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>Burgerlijk Wetboek</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Artikel</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>3:14</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Geldig vanaf</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>01/07/2021</td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>
                        Bevoegdheidsniveau
                      </td>
                      <td className='w-1/2 font-manrope text-base font-bold'>
                        nationaal, provinciaal, gemeentelijk
                      </td>
                    </tr>
                    <tr className='my-10 border-b-2'>
                      <td className='w-1/2 font-manrope text-base font-normal'>Type document</td>
                      <td className='w-1/2 font-manrope text-base font-bold'>wet in formele zin</td>
                    </tr>
                    <tr>
                      <td className='font-manrope text-base font-normal'>Beleidsinstrument</td>
                      <td className='font-manrope text-base font-bold'>juridisch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='hidden lg:block float-right'>
              <div className='container pb-2'>
                <div className='container-image'>
                  <Image src={IcontWood} alt='Icon of a Wood Log' />
                </div>
                <div className=''>
                  <Link href='/houtbouw'>
                    <a>
                      <span className='font-openSans font-bold pl-2 text-greenLink'>Houtbouw</span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='py-5 border-t-2 border-grey2 '>
                <div className='flex pb-2'>
                  <span className='font-manrope font-semibold text-lg text-black1'>R-ladder</span>
                  <RTooltip>
                    <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                      <circle cx='12' cy='15' r='10' fill='#979797' />
                      <path
                        d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                        fill='black'
                      />
                    </svg>
                  </RTooltip>
                </div>
                <span className='block-inline font-semibold text-base text-gray-900'>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R1</span>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R2</span>
                  <span className='bg-green2 text-white rounded-full p-1 mr-2'>R5</span>
                </span>
              </div>

              <div className='py-5'>
                <div className='relative border-t-2 border-grey2 pt-4'>
                  <div className='font-manrope font-semibold text-lg text-black1 pb-2'>
                    Subrechtsgebied
                  </div>
                </div>

                <div className='font-manrope font-normal text-base'>
                  <p>Gronduitgifte</p>
                </div>
              </div>

              <div className='py-5'>
                <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                  <div className='flex pb-2'>
                    <span className='font-manrope font-semibold text-lg text-black1'>
                      Juridisch invloed
                    </span>
                    <JITooltip>
                      <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                        <circle cx='12' cy='15' r='10' fill='#979797' />
                        <path
                          d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                          fill='black'
                        />
                      </svg>
                    </JITooltip>
                  </div>
                </div>

                <div className='mt-3 flex items-center'>
                  <span className='pr-5 font-manrope font-normal text-base'>LAAG</span>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <div
                      key={rating}
                      className={classNames(
                        3 > rating ? 'score-true' : 'score-false',
                        'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                      )}
                      aria-hidden='true'
                    />
                  ))}
                  HOOG
                </div>
              </div>

              <div className='py-5'>
                <div className='relative flex justify-between border-t-2 border-grey2 pt-2'>
                  <div className='flex pb-2'>
                    <span className='font-manrope font-semibold text-lg text-black1'>
                      Juridisch houdbaarheid
                    </span>
                    <JHTooltip>
                      <svg className='w-6 h-6 fill-current text-black mx-2' viewBox='0 0 26 26'>
                        <circle cx='12' cy='15' r='10' fill='#979797' />
                        <path
                          d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                          fill='black'
                        />
                      </svg>
                    </JHTooltip>
                  </div>
                </div>
                <div className='mt-3 flex items-center'>
                  <span className='pr-5 font-manrope font-normal text-base'> LAAG</span>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <div
                      key={rating}
                      className={classNames(
                        4 > rating ? 'score-true' : 'score-false',
                        'mr-5 h-6 w-6 flex-shrink-0 rounded-full',
                      )}
                      aria-hidden='true'
                    />
                  ))}
                  HOOG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
