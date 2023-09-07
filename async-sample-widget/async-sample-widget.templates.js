export const  channels = [' In-App Messaging', 'WhatsApp', 'Facebook', 'Twitter'];


export const asyncSampleContent = [
  {
    groupName: 'Text messages',
    groupImage: 'text.png',
    groupChannels: ' In-App Messaging, WhatsApp, Facebook, Twitter',
    groupItems: [
      {
        'title': 'Simple text',
        'richMediaType': 'text',
        'textFallback': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'body': {
          'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'actions': []
        }
      },
      {
        'title': 'Text with Emoji',
        'richMediaType': 'text',
        'textFallback': 'Avaya (\uD83D\uDDE3 /əˈvaɪ.ə/) is an American \uD83C\uDFE1 multinational \uD83E\uDD1D technology \uD83D\uDCA1 company that specializes \uD83D\uDCAA in business communications \uD83D\uDCF1\uD83D\uDCBB\uD83D\uDCDE.',
        'body': {
          'text': 'Avaya (\uD83D\uDDE3 /əˈvaɪ.ə/) is an American \uD83C\uDFE1 multinational \uD83E\uDD1D technology \uD83D\uDCA1 company that specializes \uD83D\uDCAA in business communications \uD83D\uDCF1\uD83D\uDCBB\uD83D\uDCDE.',
          'actions': []
        }
      }
    ]
  },
  {
    groupName: 'Images',
    groupImage: 'image.png',
    groupChannels: ' In-App Messaging, WhatsApp, Facebook, Twitter',
    groupItems: [
      {
        'title': 'Image',
        'richMediaType': 'image',
        'textFallback': 'Optional sample text with image - https://www.gstatic.com/webp/gallery/2.jpg',
        'body': {
          'text': 'Optional sample text with image.',
          'mediaUrl': 'https://www.gstatic.com/webp/gallery/2.jpg'
        }
      },
      {
        'title': 'Large 2.5k image',
        'richMediaType': 'image',
        'textFallback': 'A large picture of the tree - https://upload.wikimedia.org/wikipedia/commons/f/f6/Bright_green_tree_-_Waikato.jpg',
        'body': {
          'text': 'A large picture of the tree.',
          'mediaUrl': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bright_green_tree_-_Waikato.jpg'
        }
      },
      {
        'title': 'Sticker',
        'richMediaType': 'image',
        'textFallback': 'Lorem ipsumsumsum - http://vkclub.su/_data/stickers/wwf/sticker_vk_wwf_004.png',
        'body': {
          'text': 'Lorem ipsumsumsum.',
          'mediaUrl': 'http://vkclub.su/_data/stickers/wwf/sticker_vk_wwf_004.png'
        }
      },
      {
        'title': 'GIF',
        'richMediaType': 'image',
        'textFallback': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua - http://media1.tenor.com/images/5db1781d28ba72dade2c88df47cf6a9e/tenor.gif',
        'body': {
          'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'mediaUrl': 'http://media1.tenor.com/images/5db1781d28ba72dade2c88df47cf6a9e/tenor.gif'
        }
      },
    ]
  },
  {
    groupName: 'Messages with action buttons',
    groupImage: 'action.png',
    groupChannels: ' In-App Messaging, Facebook, Twitter',
    groupItems: [
      {
        'title': 'Postback buttons',
        'richMediaType': 'text',
        'textFallback': 'Message with (postback) action: Choose shipping method: [SHIP_TO_OFFICE], [CLICK_AND_COLLECT]',
        'body': {
          'text': 'Message with (postback) action: Choose shipping method:',
          'actions': [
            {
              'type': 'postback',
              'text': 'Ship to Office',
              'payload': 'SHIP_TO_OFFICE'
            },
            {
              'type': 'postback',
              'text': 'Ship to Home',
              'payload': 'SHIP_TO_HOME'
            },
            {
              'type': 'postback',
              'text': 'Click and Collect',
              'payload': 'CLICK_AND_COLLECT'
            }
          ]
        }
      },
      {
        'title': 'Reply: CSAT Survey',
        'richMediaType': 'text',
        'textFallback': 'How would you rate our interaction? - [Very satisfied] [Satisfied] [Neutral] [Unsatisfied] [Very unsatisfied]',
        'body': {
          'text': 'How would you rate our interaction?',
          'actions': [
            {
              'type': 'reply',
              'text': '\uD83D\uDE0D',
              'payload': 'Very satisfied'
            },
            {
              'type': 'reply',
              'text': '\uD83D\uDE42',
              'payload': 'Satisfied'
            },
            {
              'type': 'reply',
              'text': '\uD83D\uDE10',
              'payload': 'Neutral'
            },
            {
              'type': 'reply',
              'text': '\uD83D\uDE41',
              'payload': 'Unsatisfied'
            },
            {
              'type': 'reply',
              'text': '\uD83D\uDE20',
              'payload': 'Very unsatisfied'
            },
          ]
        }
      },
      {
        'title': 'Reply buttons with icons',
        'richMediaType': 'text',
        'textFallback': 'Which one do you like better? - [Tacos] [Burritos]',
        'body': {
          'text': 'Which one do you like better?',
          'actions': [
            {
              'type': 'reply',
              'text': 'Tacos',
              'iconUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/NCI_Visuals_Food_Taco.jpg/220px-NCI_Visuals_Food_Taco.jpg',
              'payload': 'TACOS'
            },
            {
              'type': 'reply',
              'text': 'Burritos',
              'iconUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbaVi9ALdxtQN516Qi1VkSDS5bGi16IlrtX_Ef1cjO9lxLX0hT&usqp=CAU',
              'payload': 'BURRITOS'
            }
          ]
        }
      },
      {
        'title': 'Link + text',
        'richMediaType': 'text',
        'body': {
          'text': 'Checkout this new product from Avaya!',
          'actions': [
            {
              'type': 'link',
              'text': 'Avaya Collaboration Unit CU360 ...',
              'uri': 'https://support.avaya.com/products/P1680/avaya-collaboration-unit-cu360'
            }
          ]
        }
      },
      {
        'title': 'Link + Postback',
        'richMediaType': 'text',
        'textFallback': 'Check out Avaya Collaboration Unit CU360 - coolest video conferencing product: [Add to Cart] [Learn More] https://www.avaya.com/en/products/devices-and-phones/audio-and-video-conferencing/',
        'body': {
          'text': 'Check out Avaya Collaboration Unit CU360 - coolest video conferencing product:',
          'actions': [
            {
              'type': 'postback',
              'text': 'Add to Cart',
              'payload': 'VC_ADD_TO_CART'
            },
            {
              'type': 'link',
              'text': 'Learn more ...',
              'uri': 'https://www.avaya.com/en/products/devices-and-phones/audio-and-video-conferencing/'
            }]
        }
      },
      {
        'title': 'Link + image',
        'richMediaType': 'image',
        'body': {
          'text': 'Checkout Avaya Collaboration Unit CU360!',
          'mediaUrl': 'https://images-na.ssl-images-amazon.com/images/I/514pxUks8KL._AC_SL1001_.jpg',
          'mediaType': 'image/jpeg',
          'actions': [
            {
              'type': 'link',
              'text': 'more info ...',
              'uri': 'https://support.avaya.com/products/P1680/avaya-collaboration-unit-cu360'
            }
          ]
        }
      }
    ]
  },
  {
    groupName: 'Carousel',
    groupImage: 'carousel.png',
    groupChannels: ' In-App Messaging, Facebook',
    groupItems: [
      {
        'title': 'Carousel (6 elements)',
        'richMediaType': 'carousel',
        'textFallback': '[carousel]: Please select from the food options: [Tacos, Nachos, Tostadas, Enchiladas, Burritos, Guacamole]',
        'body': {
          'items': [
            {
              'title': 'Tacos',
              'description': 'Small hand-sized corn or wheat tortilla topped with a filling',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRamZK2vH5JwVbndoP_b4YaO_SKMhGbbF_32EyMNMFsHyQwx3pQ&s',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'TACOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Taco'
                }
              ]
            },
            {
              'title': 'Nachos',
              'description': 'Heated tortilla chips or totopos covered with melted cheese',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXZ6OJQ-Vvia3xpDR2ISN6fJpsmri2MOYsFkJP1rDx1JzbprGz&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'NACHOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Nachos'
                }
              ]
            },
            {
              'title': 'Tostadas',
              'description': 'Mexican toast topped with a filling',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8RxqzhFp3REQ1b_U0ZNaU4EMODCKktw7rdo68npBJCyvb89xI&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'TOSTADAS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Tostada_(tortilla)'
                }
              ]
            },
            {
              'title': 'Enchiladas',
              'description': 'Corn tortilla with a savory sauce',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9TsTNM2mUw3DkCDreUuJDvPMStQsNRe0VaJey3BX4Awhjpq4F&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'ENCHILADAS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Enchilada'
                }
              ]
            },
            {
              'title': 'Burritos',
              'description': 'Flour tortilla wrapped into a sealed cylindrical shape around various ingredients',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu6nDUBK0i670GqgXJVL2wdrrEYh6jlJ1wDMiN0_xM_4zyqilH&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'BURRITOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Burrito'
                }
              ]
            },
            {
              'title': 'Guacamole',
              'description': 'Avocado-based dip',
              'mediaUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/220px-Guacamole_IMGP1271.jpg',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'GUACAMOLE'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Guacamole'
                }
              ]
            }
          ]
        }
      },
      {
        'title': 'Carousel (3 elements)',
        'richMediaType': 'carousel',
        'textFallback': '[carousel]: Please select from the food options: [Tacos, Nachos, Burritos]',
        'body': {
          'items': [
            {
              'title': 'Tacos',
              'description': 'Small hand-sized corn or wheat tortilla topped with a filling',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRamZK2vH5JwVbndoP_b4YaO_SKMhGbbF_32EyMNMFsHyQwx3pQ&s',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'TACOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Taco'
                }
              ]
            },
            {
              'title': 'Nachos',
              'description': 'Heated tortilla chips or totopos covered with melted cheese',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXZ6OJQ-Vvia3xpDR2ISN6fJpsmri2MOYsFkJP1rDx1JzbprGz&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'NACHOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Nachos'
                }
              ]
            },
            {
              'title': 'Burritos',
              'description': 'Flour tortilla wrapped into a sealed cylindrical shape around various ingredients',
              'mediaUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu6nDUBK0i670GqgXJVL2wdrrEYh6jlJ1wDMiN0_xM_4zyqilH&usqp=CAU',
              'actions': [
                {
                  'text': 'Select',
                  'type': 'postback',
                  'payload': 'BURRITOS'
                },
                {
                  'text': 'More info',
                  'type': 'link',
                  'uri': 'https://en.wikipedia.org/wiki/Burrito'
                }
              ]
            }
          ]
        }
      },
      {
        'title': 'Carousel (10 elements)',
        'richMediaType': 'carousel',
        'textFallback': '[carousel]: Please check',
        'body': {        
          'items': [
                   {
                       'title': 'Scandinave Getaway',
                       'description':
                           'Enjoy massage treatments situated in a serene natural forest with an on-site bistro serving healthy local fare.',
                       'mediaUrl': 'https://media.smooch.io/templates/template-scandinave.jpg',
                       'actions': [
                           {
                               'type': 'postback',
                               'text': 'Learn more',
                               'payload': 'NOOP'
                           },
                           {
                               'type': 'postback',
                               'text': 'Check availability',
                               'payload': 'NOOP'
                           }
                       ]
                   },
                   {
                       'title': 'Brewery Tour',
                       'description':
                           "Explore Boston's thriving brewpub scene and taste roughly 18 types of beer on these guided morning and evening brewery tours.",
                       'mediaUrl': 'https://media.smooch.io/templates/template-brewery-tour.jpg',
                       'actions': [
                           {
                               'type': 'postback',
                               'text': 'Learn more',
                               'payload': 'NOOP'
                           },
                           {
                               'type': 'postback',
                               'text': 'Check availability',
                               'payload': 'NOOP'
                           }
                       ]
                   },
                   {
                       'title': 'Whale Watching',
                       'description':
                           'Experience the marine wildlife on this guided, 3-hour whale-watching cruise around the National Marine Sanctuary.',
                       'mediaUrl': 'https://media.smooch.io/templates/template-whale-watching.jpg',
                       'actions': [
                           {
                               'type': 'postback',
                               'text': 'Learn more',
                               'payload': 'NOOP'
                           },
                           {
                               'type': 'postback',
                               'text': 'Check availability',
                               'payload': 'NOOP'
                           }
                       ]
                   },
                   {
                       'title': 'French Dining',
                       'description':
                           'Gary Danko provides an award-winning combination of classic French cooking and personable yet impeccable service.',
                       'mediaUrl': 'https://media.smooch.io/templates/template-french-dining.jpg',
                       'actions': [
                           {
                               'type': 'postback',
                               'text': 'Learn more',
                               'payload': 'NOOP'
                           },
                           {
                               'type': 'postback',
                               'text': 'Check availability',
                               'payload': 'NOOP'
                           }
                       ]
                   },
                   {
                       'title': 'Seafood Cuisine',
                       'description':
                           'Ostra focuses on specialty seafood and the cuisine highlights the natural and fresh flavors of each dish.',
                       'mediaUrl': 'https://media.smooch.io/templates/template-seafood-cuisine.jpg',
                       'actions': [
                           {
                               'type': 'postback',
                               'text': 'Learn more',
                               'payload': 'NOOP'
                           },
                           {
                               'type': 'postback',
                               'text': 'Check availability',
                               'payload': 'NOOP'
                           }
                       ]
                   },
                   {
                    'title': 'Scandinave Getaway',
                    'description':
                        'Enjoy massage treatments situated in a serene natural forest with an on-site bistro serving healthy local fare.',
                    'mediaUrl': 'https://media.smooch.io/templates/template-scandinave.jpg',
                    'actions': [
                        {
                            'type': 'postback',
                            'text': 'Learn more',
                            'payload': 'NOOP'
                        },
                        {
                            'type': 'postback',
                            'text': 'Check availability',
                            'payload': 'NOOP'
                        }
                    ]
                },
                {
                    'title': 'Brewery Tour',
                    'description':
                        "Explore Boston's thriving brewpub scene and taste roughly 18 types of beer on these guided morning and evening brewery tours.",
                    'mediaUrl': 'https://media.smooch.io/templates/template-brewery-tour.jpg',
                    'actions': [
                        {
                            'type': 'postback',
                            'text': 'Learn more',
                            'payload': 'NOOP'
                        },
                        {
                            'type': 'postback',
                            'text': 'Check availability',
                            'payload': 'NOOP'
                        }
                    ]
                },
                {
                    'title': 'Whale Watching',
                    'description':
                        'Experience the marine wildlife on this guided, 3-hour whale-watching cruise around the National Marine Sanctuary.',
                    'mediaUrl': 'https://media.smooch.io/templates/template-whale-watching.jpg',
                    'actions': [
                        {
                            'type': 'postback',
                            'text': 'Learn more',
                            'payload': 'NOOP'
                        },
                        {
                            'type': 'postback',
                            'text': 'Check availability',
                            'payload': 'NOOP'
                        }
                    ]
                },
                {
                    'title': 'French Dining',
                    'description':
                        'Gary Danko provides an award-winning combination of classic French cooking and personable yet impeccable service.',
                    'mediaUrl': 'https://media.smooch.io/templates/template-french-dining.jpg',
                    'actions': [
                        {
                            'type': 'postback',
                            'text': 'Learn more',
                            'payload': 'NOOP'
                        },
                        {
                            'type': 'postback',
                            'text': 'Check availability',
                            'payload': 'NOOP'
                        }
                    ]
                },
                {
                    'title': 'Seafood Cuisine',
                    'description':
                        'Ostra focuses on specialty seafood and the cuisine highlights the natural and fresh flavors of each dish.',
                    'mediaUrl': 'https://media.smooch.io/templates/template-seafood-cuisine.jpg',
                    'actions': [
                        {
                            'type': 'postback',
                            'text': 'Learn more',
                            'payload': 'NOOP'
                        },
                        {
                            'type': 'postback',
                            'text': 'Check availability',
                            'payload': 'NOOP'
                        }
                    ]
                }
                
               ]
           }
      }
    ]
  },

  {
    groupName: 'Structured messages',
    groupImage: 'location.png',
    groupChannels: ' In-App Messaging, WhatsApp, Facebook, Twitter',
    groupItems: [
      {
        'title': 'Location request',
        'richMediaType': 'text',
        'textFallback': '[Location request] Could you please share your location?',
        'body': {
          'text': 'Could you please share your location?',
          'actions': [
            {
              'type': 'locationRequest',
              'text': 'Send Location'
            }
          ]
        }
      },
      {
        'title': 'Location',
        'richMediaType': 'location',
        'textFallback': 'Sharing Location: [lat:37.398726 long:-121.9789074]',
        'body': {
          'coordinates': {
            'lat': 37.398726,
            'long': -121.9789074
          }
        }
      },
      {
        'title': 'Location with optional fields',
        'richMediaType': 'location',
        'textFallback': 'Sharing Location: Optional Text while sharing location [lat:37.398726 long:-121.9789074]',
        'body': {
          'text': 'Optional Text while sharing location',
          'coordinates': {
            'lat': 37.398726,
            'long': -121.9789074
          },
          'location': {
            'address': '4655 Great America Pkwy, Santa Clara, CA 95054, United States',
            'name': 'Avaya Inc'
          }
        }
      },
    ]
  },
  {
    groupName: 'Attachments (File, Audio, Video)',
    groupImage: 'attachments.png',
    groupChannels: ' In-App Messaging, WhatsApp, Facebook, Twitter',
    groupItems: [
      {
        'title': 'File (pdf)',
        'richMediaType': 'file',
        'textFallback': 'Sharing pdf document: https://media.smooch.io/conversations/99e046d89a33500665123940/TRvOPm4sxeynTxwa-60ZcQQH/WWJyS_1pCibYQVFTzfCEk2hr.pdf',
        'body': {
          'name': 'Document.pdf',
          'text': 'UsingAvayaIXCollaborationUnitCU360.pdf',
          'mediaUrl': 'https://media.smooch.io/conversations/99e046d89a33500665123940/TRvOPm4sxeynTxwa-60ZcQQH/WWJyS_1pCibYQVFTzfCEk2hr.pdf',
          'mediaType': 'application/pdf',
          'mediaSize': 1024248
        }
      },
      {
        'title': 'File (doc)',
        'richMediaType': 'file',
        'textFallback': 'Sharing doc document: https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/tch0AojrzJPMIKnRIEfuyv35/Testfile.doc',
        'body': {
          'name': 'Document.doc',
          'text': 'test.doc',
          'mediaUrl': 'https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/tch0AojrzJPMIKnRIEfuyv35/Testfile.doc',
          'mediaType': 'application/doc',
          'mediaSize': 26624
        }
      },
      {
        'title': 'File (docx)',
        'richMediaType': 'file',
        'textFallback': 'Sharing doc document: https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/VSi8NBJYALBqwuaFYv4Tap5Q/Testfile.docx',
        'body': {
          'name': 'Document.docx',
          'text': 'test.docx',
          'mediaUrl': 'https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/VSi8NBJYALBqwuaFYv4Tap5Q/Testfile.docx',
          'mediaType': 'application/docx',
          'mediaSize': 11597
        }
      },
      {
        'title': 'File (xls)',
        'richMediaType': 'file',
        'textFallback': 'Sharing doc document: https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/fUjYbyR06-RcxfcvEio6LRIA/testfile.xls',
        'body': {
          'name': 'Document.xls',
          'text': 'test.xls',
          'mediaUrl': 'https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/fUjYbyR06-RcxfcvEio6LRIA/testfile.xls',
          'mediaType': 'application/xls',
          'mediaSize': 35328
        }
      },
      {
        'title': 'File (xlsx)',
        'richMediaType': 'file',
        'textFallback': 'Sharing doc document: https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/52_qjthHP1lMMR6qcTJj5mzc/testfile.xlsx',
        'body': {
          'name': 'Document.xlsx',
          'text': 'test.xlsx',
          'mediaUrl': 'https://media.smooch.io/apps/5d5a81723ff2b800101f34d2/conversations/189112e2ad97fa3ac943c8bf/52_qjthHP1lMMR6qcTJj5mzc/testfile.xlsx',
          'mediaType': 'application/xlsx',
          'mediaSize': 8589
        }
      },
      {
        'title': 'Audio (ogg)',
        'richMediaType': 'file',
        'textFallback': 'Sharing audio : https://media.smooch.io/conversations/99e046d89a33500665123940/-IwFhSTyHEXHlWAM5l1_0aNZ/X4oD3I27hjxl7TPCa-ubMma0.oga',
        'body': {
          'name': 'Audio.ogg',
          'mediaUrl': 'https://media.smooch.io/conversations/99e046d89a33500665123940/-IwFhSTyHEXHlWAM5l1_0aNZ/X4oD3I27hjxl7TPCa-ubMma0.oga',
          'mediaType': 'audio/ogg',
          'mediaSize': 16283
        }
      },
      {
        'title': 'Video (mp4)',
        'richMediaType': 'file',
        'textFallback': 'Sharing audio : https://media.smooch.io/conversations/99e046d89a33500665123940/4KAnmQHVIIkanFKvZV081IrA/0lEd8emkZVPMHm6V5LJ4sIq5.mp4',
        'body': {
          'name': 'Video.mp4',
          'mediaUrl': 'https://media.smooch.io/conversations/99e046d89a33500665123940/4KAnmQHVIIkanFKvZV081IrA/0lEd8emkZVPMHm6V5LJ4sIq5.mp4',
          'mediaType': 'video/mp4',
          'mediaSize': 812539
        }
      },
      {
        'title': 'Audio (wav)',
        'richMediaType': 'file',
        'textFallback': 'Sharing audio : https://media.smooch.io/conversations/99e046d89a33500665123940/wCD_0uOKHnUO3zzb9IIkrUA9/MA4I-y4VUygxeNfL3eCmj0SQ.wav',
        'body': {
          'name': 'Audio.wav',
          'mediaUrl': 'https://media.smooch.io/conversations/99e046d89a33500665123940/wCD_0uOKHnUO3zzb9IIkrUA9/MA4I-y4VUygxeNfL3eCmj0SQ.wav',
          'mediaType': 'audio/wav',
          'mediaSize': 132344
        }
      },
      {
        'title': 'Audio (mpeg)',
        'richMediaType': 'file',
        'textFallback': 'Sharing audio : https://media.smooch.io/conversations/99e046d89a33500665123940/U8z7Zdf_MW6BeMvSZiAyHVyr/ycKiSvcLJO0YcLQAH7hIoPQl.mpga',
        'body': {
          'name': 'Audio.mpeg',
          'mediaUrl': 'https://media.smooch.io/conversations/99e046d89a33500665123940/U8z7Zdf_MW6BeMvSZiAyHVyr/ycKiSvcLJO0YcLQAH7hIoPQl.mpga',
          'mediaType': 'audio/mpeg',
          'mediaSize': 65185
        }
      }
    ]
  },
  {
    groupName: 'WhatsApp Template Messages',
    groupImage: 'whatsapp_template.png',
    groupChannels: 'WhatsApp',
    groupItems: [
      {
        'title': 'WTM1: Follow up after 24hr',
        'richMediaType': 'whatsapptemplate',
        'textFallback': '[WTM]: Do you still need help from us?',
        'body': {
          'text': 'Do you still need help from us?',
          'template': {
            'namespace': 'whatsapp:hsm:communications:smoochio',
            'name': 'no_variables_hsm',
            'language': {
              'code': 'en_US'
            }
          }
        }
      },
      {
        'title': 'WTM2: Reservation Update',
        'richMediaType': 'whatsapptemplate',
        'textFallback': '[WTM]: Reservation Update',
        'body': {
          'text': 'Thank you for staying with us.\nPlease let us know if the room is to your liking and feel free to ask us anything you want.\n\nSo how can we help you today? 😊',
          'template': {
            'namespace': 'whatsapp:hsm:communications:smoochio',
            'name': 'reservation_update',
            'language': {
              'code': 'en_US'
            }
          }
        }
      },
      {
        'title': 'WTM3: Template with parameters  ',
        'richMediaType': 'whatsapptemplate',
        'textFallback': '[WTM]: Placeholder TM for Whatsapp',
        'body': {
          'template': {
            'namespace': 'whatsapp:hsm:communications:smoochio',
            'name': 'hello_world',
            'language': {
              'code': 'en_US'
            },
            'components': [
              {
                'type': 'body',
                'parameters': [
                  {
                    'type': 'text',
                    'text': 'User'
                  },
                  {
                    'type': 'text',
                    'text': 'Agent'
                  }
                ]
              },

            ]
          }
        }
      }
    ]
  }
];
