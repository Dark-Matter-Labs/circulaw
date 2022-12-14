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
                  S.list().title('Extended').items([
                    S.listItem().title('Normal').child(
                      S.documentList()
                        .title('Houtbouw Measures')
                        .filter('_type == "measure" &&  thema == "houtbouw" && isExtended == false')),
                    S.listItem().title('Extended').child(
                      S.documentList()
                        .title('Houtbouw Measures')
                        .filter('_type == "measure" &&  thema == "houtbouw" && isExtended == true'))])),
                S.listItem().title('Circular Windturbines').child(
                  S.list().title('Extended').items([
                    S.listItem().title('Normal').child(
                      S.documentList()
                        .title('Houtbouw Measures')
                        .filter('_type == "measure" &&  thema == "circular-windturbines" && isExtended == false')),
                    S.listItem().title('Extended').child(
                      S.documentList()
                          .title('Houtbouw Measures')
                          .filter('_type == "measure" &&  thema == "circular-windturbines" && isExtended == true'))])),
                S.listItem().title('Mattress').child(
                  S.list().title('Extended').items([
                    S.listItem().title('Normal').child(
                      S.documentList()
                        .title('Houtbouw Measures')
                        .filter('_type == "measure" &&  thema == "mattress" && isExtended == false')),
                    S.listItem().title('Extended').child(
                      S.documentList()
                        .title('Houtbouw Measures')
                        .filter('_type == "measure" &&  thema == "mattress" && isExtended == true'))])),
                            ])
                )
        ])

