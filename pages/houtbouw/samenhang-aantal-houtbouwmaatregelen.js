import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import TimberImage from '../../public/Timber_Process_Web.png';
import TimberImageMob from '../../public/Timber_Process_Mob.png';
import SamenhangLayout from '../../components/samenhang-layout';

// import component here 

export default function InfoPage() {
  return (
    <Layout>
      <SamenhangLayout 
          casus = 'houtbouw'
          title = 'Samenhang aantal houtbouwmaatregelen'
          img = {TimberImage}
          imgMob = {TimberImageMob}
          p1 = 'In een omgevingsvisie of omgevingsprogramma kunnen overheden kenbaar maken dat zij
          ambities hebben om met hout te bouwen. Hierdoor kunnen financiële bijdragen worden
          geleverd aan deze projecten en kan met bepaalde gebieden en projecten worden
          geëxperimenteerd waarmee wordt afgeweken van normale wetgeving.'
          p2 = 'Op grond van die omgevingsvisies en omgevingsprogramma’s kunnen ook verschillende regels
          en plannen op het gebied van hergebruik en ruimtelijke ordening worden vastgesteld. Dit
          reguleert onder andere afvalstromen en vrijgekomen materiaalstromen in de stad en
          verankert houtbouw in het omgevingsplan en de omgevingsverordening. Op grond van deze
          regels kan de vergunningverlening voor bouwprojecten worden toegespitst op houtbouw.'
          p3 = 'Als laatst kunnen overheden circulair aanbesteden en grond uitgeven aan circulaire
          projecten. De MPG, LCA en verschillende keurmerken kunnen in de beoordeling van deze
          opdrachten en uitgiftes worden ingezet om circulaire initiatieven meer kans op de
          verlening van de grond of het project te geven. Ook kan de procedure zo worden ingericht
          dat houtbouw hier een rol in gaat spelen.'/>
    </Layout>
  );
}   
