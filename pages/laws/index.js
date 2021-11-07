import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from "next/link";

import Layout from "/components/layout";
import SearchFilter from "/components/search-filter";
import PolicyList from "/components/policy-list";

const fetcher = async (url) => {
	  const res = await fetch(url)
	  const data = await res.json()
	
	  if (res.status !== 200) {
		throw new Error(data.message)
	  }
	  return data
	}
	
	export default function Laws() {
	  const { query } = useRouter()
	  const { data, error } = useSWR(
		() => `/api/laws/`,
		fetcher
	  )
	
	  if (error) return <div>{error.message}</div>
	  if (!data) return <div>Loading...</div>
	
	 return (
		 <Layout>
		   <div className="">
		   header content
		   </div>
		   <div className="flex">
			 <div className="">
			 <div className="">HOUTBOUW</div>
			   <div className="">Verfijnen</div>
			   <SearchFilter
				 title="Wettelijk bevoegdheidsniveau"
				 data={data}
			   />
			   <SearchFilter title="Rechtsgebied" data={data} />
			   <SearchFilter title="Fase" data={data} />
			   <SearchFilter title="R - ladder" data={data} />
			 </div>
			 
			 <div className="">
			 <div>Circulaire transitie maatregelen & mogelijkheden</div>
			   <div className="">
				 <PolicyList data={data} />
			   </div>
			 </div>
		   </div>
		 </Layout>
	   );
	}
	
	
