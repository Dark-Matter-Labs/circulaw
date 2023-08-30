// here we may need to filter further on governmnet level.
// convert each prop which is an array containing 3 objects, each object contains an array of laws.
// convert that to a singe array that can be filtered.
// this will break the logic of seperating under subcategory.?
// this needs a refactor anyway as I feel like we can make a function rather than heaps of conditional rendereing.

export default function SamenhagInstruments({
  selected,
  beleidsinstrumentenEnVergunningen,
  verkoop,
  inkoop,
  financiering,
  fiscaal,
}) {
  const varToString = (varObj) => Object.keys(varObj)[0];

  return (
    <div className='grid col-span-3'>
      {/* Shorter way of rendering the instruments.  */}
      {/* couuld make this a function that receives the prop. then call the function 5 times */}
      {/* hesitant to reduce this further though as if we need to introduce filtering it will complicate matters */}
      {selected === varToString({ beleidsinstrumentenEnVergunningen }) && (
        <div>
          {beleidsinstrumentenEnVergunningen.map((arr, i) => (
            <div key={i}>
              {arr.length > 0 && (
                <div>
                  {i == 0 && <h2 className="mobile sm:desktop">Beleid</h2>}
                  {i == 1 && <h2 className="mobile sm:desktop">Strategie</h2>}
                  {i == 2 && <h2 className="mobile sm:desktop">Contracten</h2>}
                  {arr.map((law, index) => (
                    <div key={index}>
                      <h4 className='mobile sm:desktop'>{law.titel}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selected === varToString({ verkoop }) && (
        <div>
          {verkoop.map((arr, i) => (
            <div key={i}>
              {arr.length > 0 && (
                <div>
                  {i == 0 && <h2>Beleid</h2>}
                  {i == 1 && <h2>Strategie</h2>}
                  {i == 2 && <h2>Contracten</h2>}
                  {arr.map((law, index) => (
                    <div key={index}>
                      <h4 className='mobile sm:desktop'>{law.titel}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selected === varToString({ inkoop }) && (
        <div>
          {inkoop.map((arr, i) => (
            <div key={i}>
              {arr.length > 0 && (
                <div>
                  {i == 0 && <h2>Beleid</h2>}
                  {i == 1 && <h2>Strategie</h2>}
                  {i == 2 && <h2>Contracten</h2>}
                  {arr.map((law, index) => (
                    <div key={index}>
                      <h4 className='mobile sm:desktop'>{law.titel}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selected === varToString({ financiering }) && (
        <div>
          {financiering.map((arr, i) => (
            <div key={i}>
              {arr.length > 0 && (
                <div>
                  {i == 0 && <h2>Beleid</h2>}
                  {i == 1 && <h2>Strategie</h2>}
                  {i == 2 && <h2>Contracten</h2>}
                  {arr.map((law, index) => (
                    <div key={index}>
                      <h4 className='mobile sm:desktop'>{law.titel}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {selected === varToString({ fiscaal }) && (
        <div>
          {fiscaal.map((arr, i) => (
            <div key={i}>
              {arr.length > 0 && (
                <div>
                  {i == 0 && <h2>Beleid</h2>}
                  {i == 1 && <h2>Strategie</h2>}
                  {i == 2 && <h2>Contracten</h2>}
                  {arr.map((law, index) => (
                    <div key={index}>
                      <h4 className='mobile sm:desktop'>{law.titel}</h4>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
