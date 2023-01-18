import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import WoodIcon from '../../public/icons/wood.svg';
import HoutbouwHero from '../../public/houtbouwHero.jpeg';
import HoutbouwSection1 from '../../public/Measures_Teaser.png';
import HoutbouwSection2 from '../../public/Timber_Process_Teaser.png';
import HoutbouwSection3 from '../../public/Timber_Measures_Teaser.png';
import ThemeLayout from '../../components/layouts/theme-index-layout';

/* List of Props
icon - imported icon
iconAlt - icon alt text
title - title of theme
shortDesctription: there are two of these as there was two <p> tags in the wood index
shortDescription2: this can be resolved with portable text in Sanity
pdfSource: if this exists it will render the link, if not need to place '' for it not to render
heroImage:
heroImageAlt: 
isSpecialMeasures: using prop to conditionally render 
type: either 'home' or 'houtbouw' refering to types in section-type-list
seeMeasures: 
seeMeasuresText:
seeMeasuresLink:
seeMeasuresImage:
seeMeasuresImageAlt:
samenhangTitle:
samenhangText:
samenhangLink:
samenhangImage:
samenhangImageAlt:
welkeTitle:
welkeText:
welkeLink:
welkeImage:
welkeImageAlt:
*/

export default function Houtbouw() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <ThemeLayout
       cardLinkList='/measures/houtbouw'
       cardLinkSamenhang='/houtbouw/samenhang-aantal-houtbouwmaatregelen'
       cardLinkWaarvoor='/houtbouw/welke-overheid'
        thema='houtbouw'
        icon={WoodIcon}
        iconAlt='Icon of Wood'
        title='Houtbouw stimuleren'
        shortDescription='De manier waarop wij nu in Nederland bouwen is zeer belastend voor het milieu. Er
      is een eenvoudige oplossing: vervang beton deels door hout. Bosbouw is steeds
      duurzamer geworden en er zijn veel nieuwe houtproducten ontwikkeld die grote
      mogelijkheden bieden.'
        shortDescription2='Daardoor kan houtbouw een goede bijdrage leveren om binnen planetaire grenzen te
      opereren.'
        pdfSource='https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf'
        heroImage={HoutbouwHero}
        heroImageAlt='hero image for HoutBouw'
        isSpecialMeasures='Meer weten over hoe je maatregelen kunt toepassen? Hier vind je 3 voorbeelden uit de
      praktijk:'
        type='houtbouw'
        seeMeasuresTitle='36 Houtbouwmaatregelen'
        seeMeasuresImage={HoutbouwSection1}
        seeMeasuresImageAlt='Houtbuow section image'
        seeMeasuresText='Weten waar kansen liggen om de houtbouwtransitie te versnellen? CircuLaw biedt
        je nu een overzicht van 36 maatregelen die je daarvoor kunt inzetten.'
        seeMeasuresLink='/measures/houtbouw'
        seeMeasuresLinkText='Bekijk alle houtbouwmaatregelen →'
        samenhangTitle='Bekijk houtbouwmaatregelen in samenhang'
        samenhangImage={HoutbouwSection2}
        samenhangImageAlt='Houtbuow section image'
        samenhangText='CircuLaw heeft 36 maatregelen gedefinieerd die je kunt inzetten om houtbouw te
      stimuleren. Als je meerdere maatregelen toepast, is je impact natuurlijk groter.
      Maar dan is het wel handig om te weten hoe maatregelen met elkaar samenhangen.
      Daarom bieden we je hier bij wijze van voorbeeld inzicht in de relatie tussen
      een aantal maatregelen.'
        samenhangLink='/houtbouw/samenhang-aantal-houtbouwmaatregelen'
        samenhangLinkText='Samenhang aantal houtbouwmaatregelen →'
        welkeTitle='Bevoegdheden overheid voor houtbouwmaatregelen'
        welkeImage={HoutbouwSection3}
        welkeImageAlt='Houtbuow section image'
        welkeText='Om een circulaire strategie volledig te implementeren, is samenwerking tussen
      overheden en stakeholders nodig. Om te weten wie waarvoor aan de lat staat, is
      inzicht nodig in bevoegdheden en verantwoordelijkheden. In dit overzicht wordt
      per maatregel duidelijk welke laag van de overheid betrokken is.'
        welkeLink='/houtbouw/welke-overheid'
        welkeLinkText='Bekijk overzicht bevoegdheden maatregelen →'
      />
    </Layout>
  );
}
