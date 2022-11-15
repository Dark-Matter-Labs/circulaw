import { useEffect } from 'react';
import Layout from '../../components/layout';
import WindmillIcon from '../../public/windmill.svg';
import WindturbineHero from '../../public/windturbineHero.jpg';
import WindturbineSection1 from '../../public/Measures_Teaser.png';
import WindturbineSection2 from '../../public/Windmill_Process_Teaser.png';
import WindturbineSection3 from '../../public/Timber_Measures_Teaser.png';
import ThemeLayout from '../../components/theme-index-layout';

export default function Windturbine() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <ThemeLayout
        icon={WindmillIcon}
        iconAlt='Icon of Windmill'
        title='Circulaire windturbines'
        shortDescription='Windenergie speelt een cruciale rol in onze duurzame energie-ambities. Daarom vind
      je hier maatregelen die de inzet van windturbines bevorderen en die sturen op
      ontwikkeling en inzet van windturbines die op zich zelf ook circulair zijn.'
        shortDescription2=''
        pdfSource=''
        heroImage={WindturbineHero}
        heroImageAlt='hero image of Windturbine'
        isSpecialMeasures=''
        type=''
        seeMeasuresTitle='10 Circulaire windturbine maatregelen'
        seeMeasuresImage={WindturbineSection1}
        seeMeasuresImageAlt='Windturbine section image'
        seeMeasuresText='Weten waar kansen liggen om de transitie naar circulaire windturbines te
      versnellen? CircuLaw biedt je een overzicht van 10 maatregelen die je daarvoor
      kunt inzetten.'
        seeMeasuresLink='/measures/windturbines'
        seeMeasuresLinkText='Bekijk alle circulaire windturbines maatregelen →'
        samenhangTitle='Samenhang maatregelen circulaire windturbines'
        samenhangImage={WindturbineSection2}
        samenhangImageAlt='Windturbine section image'
        samenhangText='CircuLaw heeft 10 maatregelen gedefinieerd die je kunt inzetten om circulaire
      windturbines te stimuleren. Als je meerdere maatregelen toepast, is je impact
      natuurlijk groter. Maar dan is het wel handig om te weten hoe die maatregelen
      met elkaar samenhangen. Daarom bieden we je ook inzicht in de relatie tussen de
      verschillende maatregelen.'
        samenhangLink='/circulaire-windturbines/samenhang-maatregelen'
        samenhangLinkText='Samenhang maatregelen circulaire windturbines →'
        welkeTitle='Welke overheid heeft welke bevoegdheid voor maatregelen circulaire windturbines?'
        welkeImage={WindturbineSection3}
        welkeImageAlt='Windturbine section image'
        welkeText='Om een circulaire strategie volledig te implementeren, is samenwerking tussen
      overheden en stakeholders nodig. Om te weten wie waarvoor aan de lat staat, is
      inzicht nodig in bevoegdheden en verantwoordelijkheden. In dit overzicht wordt
      per maatregel duidelijk welke laag van de overheid betrokken is.'
        welkeLink='/circulaire-windturbines/welke-overheid-heeft'
        welkeLinkText='Bekijk het bevoegdheden-overzicht →'
      />
    </Layout>
  );
}
