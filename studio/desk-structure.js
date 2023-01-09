export const Structure = (S) => 
    S.list()
      .title('Content Types')
      .items([
        S.listItem()
          .title('Measures')
          .child(
            S.list()
              .title('Themas')
              .items([
                S.listItem().title('Houtbouw').child(
                  S.documentList()
                    .title('Houtbouw Measures')
                    .filter('_type == "measure" &&  thema == "houtbouw"')),
                S.listItem().title('Circulaire windturbines').child(
                  S.documentList()
                    .title('Circulaire windturbines measures')
                    .filter('_type == "measure" &&  thema == "circulaire-windturbines"')),
                S.listItem().title('Matrassen').child(
                  S.documentList()
                        .title('Matrassen measures')
                        .filter('_type == "measure" && thema == "matrassen"')),
        ])
          )
      ])
