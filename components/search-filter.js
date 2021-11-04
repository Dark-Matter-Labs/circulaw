export default function SearchFilter(props) {
  return (
    <fieldset>
      <legend className="">{props.title}</legend>
      <div className="">
        {props.data.map((person, personIdx) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="">
              <input
                id={`person-${person.id}`}
                name={`person-${person.id}`}
                type="checkbox"
                className=""
              />
              <label htmlFor={`person-${person.id}`} className="select-none">
                {person.name}
              </label>
            </div>
            <div className="flex items-center">
              <div>{person.id}</div>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
