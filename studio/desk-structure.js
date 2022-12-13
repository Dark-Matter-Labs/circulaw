

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
                                        .filter('_type == "measure" &&  thema == "houtbouw"')
                                ),
                                S.listItem().title('Circular Windturbines').child(
                                    S.documentList()
                                        .title('Circular Windturbines Measures')
                                        .filter('_type == "measure" &&  thema == "circular-windturbines"')
                                ),
                                S.listItem().title('Mattress').child(
                                    S.documentList()
                                        .title('Mattress measures')
                                        .filter('_type == "measure" &&  thema == "mattress"')
                                ),
                            ])
                )
        ])
