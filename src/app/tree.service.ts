import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }
  jsonData = {
    children: {
      organisation: [
        {
          'organisation.type': '1',
          code: '2af12dd5-fa90-4ba9-8807-f34d9ce78a7e',
          children: {
            site: [
              {
                code: 'Tesst+agian',
                'site.address': [
                  'Thanh Xuân'
                ],
                'site.postal_code': '100000',
                'site.city': 'Hà Nội',
                'site.country': 'FR',
                name: 'Phạm Thị Thu Hiền',
                geo_position: {
                  lon: 0,
                  lat: 0
                },
                checked: true,
                $$hashKey: 'object:707'
              }
            ]
          },
          name: 'test',
          id: 'H7HF6nMBO8KtCDCLocMC',
          count: {
            val: 2
          },
          isExpanded: {
            val: true
          },
          checked: true,
          $$hashKey: 'object:49',
          displayed_sites: {
            val: 10
          }
        },
        {
          'organisation.type': '1',
          code: 'FRANCE',
          children: {
            site: [
              {
                code: 'DEMO8',
                'site.address': [
                  'Boulevard des Belges, Niveau8'
                ],
                'site.postal_code': '92100',
                'site.city': 'Montpellier',
                'site.country': 'FR',
                name: 'Centre technique d’exploitation 9',
                geo_position: {
                  lon: 2.33134,
                  lat: 43.610767
                },
                checked: true,
                $$hashKey: 'object:111'
              }
            ],
            organisation: [
              {
                'organisation.type': '2',
                code: 'FRANCE_ESPACEVERT',
                children: {
                  site: [
                    {
                      code: 'DEMO9',
                      'site.address': [
                        'Rue de l\'Eglise, Niveau9'
                      ],
                      'site.postal_code': '92100',
                      'site.city': 'Bordeaux',
                      'site.country': 'FR',
                      name: 'Espace vert 2',
                      geo_position: {
                        lon: 2.123222,
                        lat: 44.837788
                      },
                      checked: true,
                      $$hashKey: 'object:1598'
                    },
                    {
                      code: 'DEMO15',
                      'site.address': [
                        'Mellor'
                      ],
                      'site.postal_code': '9999',
                      'site.city': 'Liverpool',
                      'site.country': 'GB',
                      name: 'Microelectronis',
                      geo_position: {
                        lon: -2,
                        lat: 53.38014
                      },
                      checked: true,
                      $$hashKey: 'object:1599'
                    }
                  ],
                  organisation: [
                    {
                      'organisation.type': '3',
                      code: 'FRANCE_ESPACEVERT_JARDIN',
                      children: {
                        site: [
                          {
                            code: 'DEMO36',
                            'site.address': [
                              'Allee des marguerites, Niveau2'
                            ],
                            'site.postal_code': '84000',
                            'site.city': 'Orléans',
                            'site.country': 'FR',
                            name: 'Jardin des plantes',
                            geo_position: {
                              lon: 2,
                              lat: 48.08877
                            },
                            checked: true
                          }
                        ]
                      },
                      name: 'Jardin',
                      id: 'AW6TKoEc_emorxPBw432',
                      count: {
                        val: 1
                      },
                      isExpanded: {
                        val: false
                      },
                      checked: false,
                      $$hashKey: 'object:1632'
                    }
                  ]
                },
                name: 'Espace vert',
                id: 'AW6TKoBK_emorxPBw4P-',
                count: {
                  val: 7
                },
                isExpanded: {
                  val: true
                },
                checked: false,
                $$hashKey: 'object:144',
                displayed_sites: {
                  val: 10
                }
              },
              {
                'organisation.type': '2',
                code: 'FRANCE_BUREAU',
                children: {
                  site: [
                    {
                      code: 'DEMO38',
                      'site.address': [
                        'Allee de l\'Arche, Niveau4'
                      ],
                      'site.postal_code': '92400',
                      'site.city': 'Villapourçon',
                      'site.country': 'FR',
                      name: 'Bureau d\'étude',
                      geo_position: {
                        lon: 4,
                        lat: 46.90987
                      },
                      checked: true
                    },
                    {
                      code: 'DEMO17',
                      'site.address': [
                        '12 Wijnhaven , Niveau7'
                      ],
                      'site.postal_code': '3011',
                      'site.city': 'Lille',
                      'site.country': 'FR',
                      name: 'Bureau postal',
                      geo_position: {
                        lon: 4.488526,
                        lat: 49.91855
                      },
                      checked: true
                    },
                    {
                      code: 'DEMO20',
                      'site.address': [
                        'Avenue du General Leclerc, Niveau10'
                      ],
                      'site.postal_code': '8100',
                      'site.city': 'Rennes',
                      'site.country': 'FR',
                      name: 'Bureau',
                      geo_position: {
                        lon: -1.658949,
                        lat: 48.100506
                      },
                      checked: true
                    },
                    {
                      code: 'DEMO34',
                      'site.address': [
                        'Boulevard des Belges, Niveau4'
                      ],
                      'site.postal_code': '33700',
                      'site.city': 'Vaugenets',
                      'site.country': 'FR',
                      name: 'Pépinière',
                      geo_position: {
                        lon: 3.3333,
                        lat: 47.977
                      },
                      checked: true
                    }
                  ]
                },
                name: 'Bureau',
                id: 'AW6TKoBK_emorxPBw4UK',
                count: {
                  val: 4
                },
                isExpanded: {
                  val: false
                },
                checked: true,
                $$hashKey: 'object:156'
              },
              {
                'organisation.type': '2',
                code: 'FRANCE_HOTEL',
                children: {
                  site: [
                    {
                      code: 'DEMO27',
                      'site.address': [
                        'Rue de Bonnel, Niveau7'
                      ],
                      'site.postal_code': '69003',
                      'site.city': 'Lyon',
                      'site.country': 'FR',
                      name: 'Hotel Victoria',
                      geo_position: {
                        lon: 2.97262,
                        lat: 44.17183
                      },
                      checked: true
                    }
                  ]
                },
                name: 'Hotel',
                id: 'AW6TKoBJ_emorxPBw4Mc',
                count: {
                  val: 1
                },
                isExpanded: {
                  val: false
                },
                checked: true,
                $$hashKey: 'object:157'
              },
              {
                'organisation.type': '2',
                code: 'FRANCE_COMPLEXESPORTIF',
                children: {
                  site: [
                    {
                      code: 'DEMO18',
                      'site.address': [
                        'Rue Principale, Niveau8'
                      ],
                      'site.postal_code': '3011',
                      'site.city': 'Strasbourg',
                      'site.country': 'FR',
                      name: 'Gymnase volley',
                      geo_position: {
                        lon: 7.63059,
                        lat: 48.463123
                      },
                      checked: true
                    },
                    {
                      code: 'DEMO44',
                      'site.address': [
                        'Rue de l\'Eglise, Niveau10'
                      ],
                      'site.postal_code': '14000',
                      'site.city': 'Paris',
                      'site.country': 'FR',
                      name: 'Stade de foot',
                      geo_position: {
                        lon: 3.103,
                        lat: 50
                      },
                      checked: true
                    },
                    {
                      code: 'DEMO7',
                      'site.address': [
                        '7 place des sangliers, Niveau7'
                      ],
                      'site.postal_code': '92100',
                      'site.city': 'Vitry-sur-seine',
                      'site.country': 'FR',
                      name: 'Centre sportif',
                      geo_position: {
                        lon: 2.33,
                        lat: 48.573406
                      },
                      checked: true
                    }
                  ]
                },
                name: 'Complexe sportif',
                id: 'AW6TKoCP_emorxPBw4Vz',
                count: {
                  val: 3
                },
                isExpanded: {
                  val: false
                },
                checked: true,
                $$hashKey: 'object:158'
              },
              {
                'organisation.type': '2',
                code: '182eed4b-28ed-4c7c-af02-a8ca4a98e1df',
                children: {
                  organisation: [
                    {
                      'organisation.type': '3',
                      code: 'a48c8894-1df2-43e2-8521-ed5d6b893f38',
                      children: {
                        site: [
                          {
                            code: 'sitetestrefactor',
                            'site.address': [
                              'Nguyen Trai'
                            ],
                            'site.postal_code': '822',
                            'site.city': 'Hà Nội',
                            'site.country': 'VN',
                            name: 'Mucmuc',
                            geo_position: {
                              lon: 123,
                              lat: 12
                            },
                            checked: true
                          }
                        ],
                        organisation: [
                          {
                            'organisation.type': '4',
                            code: '243ef321-aee9-4fe7-a267-6a13e179b4b2',
                            children: {
                              site: [
                                {
                                  code: 'DEMO90',
                                  'site.address': [
                                    '1'
                                  ],
                                  'site.postal_code': '1',
                                  'site.city': '1',
                                  'site.country': 'FR',
                                  name: 'nothing',
                                  geo_position: {
                                    lon: 1,
                                    lat: 1
                                  },
                                  checked: true
                                },
                                {
                                  code: 'DEMO43',
                                  'site.address': [
                                    'Rue Paul Bert, Niveau9'
                                  ],
                                  'site.postal_code': '13000',
                                  'site.city': 'Avignon',
                                  'site.country': 'FR',
                                  name: 'Espace vert 1',
                                  geo_position: {
                                    lon: 3.133,
                                    lat: 44.9877
                                  },
                                  checked: true
                                }
                              ]
                            },
                            name: '3',
                            id: 'wg4zFHMBO8KtCDCLPhva',
                            count: {
                              val: 2
                            },
                            isExpanded: {
                              val: false
                            },
                            checked: true
                          },
                          {
                            'organisation.type': '4',
                            code: 'a16177e0-cde7-4bb3-af05-f948520e6fb9',
                            children: {},
                            name: '2',
                            id: '-A4sFHMBO8KtCDCLGwQd',
                            count: {
                              val: 0
                            },
                            isExpanded: {
                              val: false
                            },
                            checked: true
                          }
                        ]
                      },
                      name: '111122 thao tesst',
                      id: '6eZ0KHMBO8KtCDCLCXAp',
                      count: {
                        val: 7
                      },
                      isExpanded: {
                        val: false
                      },
                      checked: true
                    }
                  ]
                },
                name: 'test3',
                id: 'yVQnwXIBO8KtCDCL7vtd',
                count: {
                  val: 7
                },
                isExpanded: {
                  val: false
                },
                checked: true,
                $$hashKey: 'object:159'
              },
              {
                'organisation.type': '2',
                code: 'FRANCE_RESIDENCE',
                children: {
                  site: [
                    {
                      code: 'DEMO41',
                      'site.address': [
                        'Rue Taine, Niveau7'
                      ],
                      'site.postal_code': '75012',
                      'site.city': 'Montpellier',
                      'site.country': 'FR',
                      name: 'Résidence Coty',
                      geo_position: {
                        lon: 3.761945,
                        lat: 43.565895
                      },
                      checked: true
                    }
                  ],
                  organisation: [
                    {
                      'organisation.type': '3',
                      code: 'FRANCE_RESIDENCE_LOGEMENT',
                      children: {
                        site: [
                          {
                            code: 'ad1',
                            'site.country': 'FR',
                            name: 'ad2',
                            checked: true
                          }
                        ],
                        organisation: [
                          {
                            'organisation.type': '4',
                            code: 'testncs',
                            children: {
                              site: [
                                {
                                  code: 'ANA_Demo2',
                                  'site.address': [
                                    '102 Rue De La Carreterie'
                                  ],
                                  'site.postal_code': '5263',
                                  'site.city': 'Avignon',
                                  'site.country': 'FR',
                                  name: 'ANA_Demo2',
                                  geo_position: {
                                    lon: 2,
                                    lat: 45
                                  },
                                  checked: true
                                }
                              ],
                              organisation: [
                                {
                                  'organisation.type': '5',
                                  code: 'eb91bc09-5c6e-4abc-a908-cf436034c33f',
                                  name: '22222',
                                  id: 'HGl5BHMBO8KtCDCLey1g',
                                  count: {
                                    val: 0
                                  },
                                  checked: true
                                }
                              ]
                            },
                            name: 'IDEX GROUPE TEST',
                            id: 'AW6TKoEc_emorxPBw424',
                            count: {
                              val: 6
                            },
                            isExpanded: {
                              val: false
                            },
                            checked: true
                          }
                        ]
                      },
                      name: 'Logement',
                      id: 'AW6TKoBK_emorxPBw4Uq',
                      count: {
                        val: 9
                      },
                      isExpanded: {
                        val: false
                      },
                      checked: true
                    }
                  ]
                },
                name: 'Résidence',
                id: 'AW6TKoBK_emorxPBw4Qa',
                count: {
                  val: 13
                },
                isExpanded: {
                  val: false
                },
                checked: true,
                $$hashKey: 'object:160'
              }
            ]
          },
          name: 'France1111',
          id: 'AW6TKoEb_emorxPBw41o',
          count: {
            val: 60
          },
          isExpanded: {
            val: true
          },
          checked: false,
          $$hashKey: 'object:50',
          displayed_sites: {
            val: 10
          }
        }
      ]
    }
  };
  getOrgs(): Observable<any> {
    const data = this.jsonData;
    return of(data);
  }
}
