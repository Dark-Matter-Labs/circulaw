
export const welkQueriesWood = {
    allRegions: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    "Gemeentelijk" in overheidslaag && 
                    "Provinciaal" in overheidslaag && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    national: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3 && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    provincial: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3  && 
                    "Provinciaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
   
    local: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                length(overheidslaag) < 3 && 
                "Gemeentelijk" in overheidslaag]| 
                order(lower(titel) asc)`, 
}

export const welkQueriesWind = {
    allRegions: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    "Gemeentelijk" in overheidslaag && 
                    "Provinciaal" in overheidslaag && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    national: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3 && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    provincial: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3  && 
                    "Provinciaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
   
    local: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                length(overheidslaag) < 3 && 
                "Gemeentelijk" in overheidslaag]| 
                order(lower(titel) asc)`, 
}

export const welkQueriesMattress = {
    allRegions: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    "Gemeentelijk" in overheidslaag && 
                    "Provinciaal" in overheidslaag && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    national: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3 && 
                    "Nationaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
    provincial: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                    length(overheidslaag) < 3  && 
                    "Provinciaal" in overheidslaag]| 
                    order(lower(titel) asc)`,
   
    local: `*[_type == "measure" && thema == 'circulaire-windturbines' && 
                length(overheidslaag) < 3 && 
                "Gemeentelijk" in overheidslaag]| 
                order(lower(titel) asc)`, 
}

