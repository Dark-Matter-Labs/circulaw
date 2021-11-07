import Link from "next/link";

export default function PolicyList(props) {
  return (
    <fieldset>
      <div className="">
        {props.data.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="">
              <Link href={'/laws/' + person.id} key={person.id}>
                <a className="font-semibold">{person.name}</a>
              </Link>
            </div>
            <div>{person.description}</div>

            <div>
              <div>Bevoegdheidsniveau: {person.bevoegdheidsniveau}</div>

              <div>Reikwijdte: {person.reikwijdte}</div>

              <div>Afbreukrisico: {person.afbreukrisico}</div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
