import { useState, useEffect } from 'react';
import client from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import mattressIcon from '../../public/icons/matressIcon.svg'

export default function InfoPage() {
  const [allRegionLaws, setAllRegionLaws] = useState();
  const [natLaws, setNatLaws] = useState()
  const [provLaws, setProvLaws] = useState()
  const [gemLaws, setGemLaws] = useState()

   // fetch all laws with National + Provinciaal + Nationaal
   useEffect(() => {
    client
      .fetch(
        `
    *[_type == "measure" && thema == "matrassen" && "Gemeentelijk" in overheidslaag && "Provinciaal" in overheidslaag && "Nationaal" in overheidslaag]
    `,
      )
      .then((data) => setAllRegionLaws(data));
  }, []);

  // fetch all laws with only National
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3 && "Nationaal" in overheidslaag]
    `,
      )
      .then((data) => setNatLaws(data));
  }, []);

  // fetch all laws with only Provincial 
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3  && "Provinciaal" in overheidslaag]
    `,
      )
      .then((data) => setProvLaws(data));
  }, []);
  
  // fetch all laws with only Gemeentelijk
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3 && "Gemeentelijk" in overheidslaag]
    `,
      )
      .then((data) => setGemLaws(data));
  }, []);

  return (
    <Layout>
      <WelkeLayout
        casus='matrassen'
        title='Welke overheid kan welk instrument gebruiken voor circulaire matrassen?'
        iconPath={mattressIcon}
        p1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque dolor quis felis viverra, id tincidunt lacus mattis. Proin viverra nulla sed dui luctus euismod. Nulla finibus vestibulum justo, ac dictum purus vehicula a. Sed varius dignissim nunc, a maximus elit dapibus vel. Vivamus blandit volutpat interdum. Nullam quis libero massa. Pellentesque viverra sem at tortor fermentum, volutpat sodales libero maximus. Proin malesuada facilisis lectus, id vestibulum ex semper vel. Fusce in pulvinar mi. Vestibulum et est diam.'
        p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque dolor quis felis viverra, id tincidunt lacus mattis. Proin viverra nulla sed dui luctus euismod. Nulla finibus vestibulum justo, ac dictum purus vehicula a. Sed varius dignissim nunc, a maximus elit dapibus vel. Vivamus blandit volutpat interdum. Nullam quis libero massa. Pellentesque viverra sem at tortor fermentum, volutpat sodales libero maximus. Proin malesuada facilisis lectus, id vestibulum ex semper vel. Fusce in pulvinar mi. Vestibulum et est diam.'
        p3='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque dolor quis felis viverra, id tincidunt lacus mattis. Proin viverra nulla sed dui luctus euismod. Nulla finibus vestibulum justo, ac dictum purus vehicula a. Sed varius dignissim nunc, a maximus elit dapibus vel. Vivamus blandit volutpat interdum. Nullam quis libero massa. Pellentesque viverra sem at tortor fermentum, volutpat sodales libero maximus. Proin malesuada facilisis lectus, id vestibulum ex semper vel. Fusce in pulvinar mi. Vestibulum et est diam.'
        p4='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque dolor quis felis viverra, id tincidunt lacus mattis. Proin viverra nulla sed dui luctus euismod. Nulla finibus vestibulum justo, ac dictum purus vehicula a. Sed varius dignissim nunc, a maximus elit dapibus vel. Vivamus blandit volutpat interdum. Nullam quis libero massa. Pellentesque viverra sem at tortor fermentum, volutpat sodales libero maximus. Proin malesuada facilisis lectus, id vestibulum ex semper vel. Fusce in pulvinar mi. Vestibulum et est diam.'
        allRegionLaws={allRegionLaws}
        natLaws={natLaws}
        provLaws={provLaws}
        gemLaws={gemLaws}
      />
    </Layout>
  );
}
