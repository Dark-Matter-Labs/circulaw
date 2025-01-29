export default function YouTubeComponent() {
  return (
    <iframe
      className='absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-cl sm:left-24 sm:top-12 sm:h-3/4 sm:w-3/4'
      width='450'
      height='253'
      src='https://www.youtube.com/embed/9PTTCyLhzLo?si=uqv63SA7T44lQLnO'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen
      loading='lazy'
    ></iframe>
  );
}
