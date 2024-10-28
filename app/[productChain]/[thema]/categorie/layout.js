import OverviewPageHeader from '@/components/theme-page/overview-page-header'

export default function Layout({children, tabs}) {
    return (
        <div>
        <div className='sm:bg-gradient-to-t sm:from-[#F8FAF8] sm:to-[#F8FAF8]'>
        <div className='-mt-10'>
          <div className='h-[310px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
            <OverviewPageHeader
              thema='houtbouw'
              productChain='bouw'
              title='instrumenten per categorie'
              page='samenhang'
            />
          </div>
        </div>
      </div>
      <div>
      {children}
      </div>
      <div>
       {tabs}
      </div>
        
        </div>
    )
}