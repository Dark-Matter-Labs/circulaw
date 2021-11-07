import { useRouter } from 'next/router'
import useSWR from 'swr'

import Layout from "../../components/layout"
const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
	throw new Error(data.message)
  }
  return data
}

export default function Law() {
  const { query } = useRouter()
  const { data, error } = useSWR(
	() => query.id && `/api/laws/${query.id}`,
	fetcher
  )

  if (error) return <div>{error.message} cats</div>
  if (!data) return <div>Loading...</div>

  return (
	<Layout>
	 <div className="">
	 	<div className="">
		<div>← Overzicht maatregelen</div>
		 
		<h1>{data.title}</h1>
		<h3>section title</h3>
		<p className="border-solid"> {data.description}</p>
		<h3>section title</h3>
		<p className="border-solid"> {data.description}</p>

		table goes here
		
		 <h3>Voorbeelden uit de praktijk waar de maatregelen  succesvol zijn toegepast</h3>
		 <div>example docs
		 <div>Doc Title</div>
		 <p>Text</p>
		 <p>Link</p>

<p>image</p>

		 </div>
		 </div>
		<div className="">
			<div className="">
			<div>Juridische reikwijdte</div>
			</div>
	
			<div className="">
			<div>Juridisch afbreukrisico</div>
			Add boxes
			</div>
			
			<div className="">
			<div>Trefwoorden</div>
			Add boxes</div>
			
			<div className="">
			<div>Relevante organisaties</div>
			Add Links</div>
			<div className="">
			<div>Relevante documenten</div>
			Add Links</div>
</div>

	 
	 </div>
	 
	</Layout>
  )
}
