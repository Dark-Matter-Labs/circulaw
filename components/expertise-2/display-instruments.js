import ExpertisePageInstrument from '../expertise-page/expertise-page-instrument';


export default function DisplayInstruments({instruments}) {
    return (
        <div>
            {instruments.map((instrument, id) => (
               <ExpertisePageInstrument instrument={instrument} key={id}/>
            ))}
        </div>
    )
}