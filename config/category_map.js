
/**
 default category mapping, openstreetmap features on the left
 correspond to the Pelias taxonomy on the right.

 you can modify this file to suit your specific use-case, or
 alternatively you can inject your own custom taxonomy mapping
 at runtime.

 A special key '*' is used to match any tag value for that key.
 eg. 'aerialway:*' would match 'aerialway:foo' and 'aerialway:bar'.

 Categories are cumulative, so if a document matches on many different
 mappings then it will inherit *all* of those categories.

 @see: http://wiki.openstreetmap.org/wiki/Map_Features
 @see: https://github.com/pelias/pelias/wiki/Taxonomy-v1
**/

var mapping = {

  'aerialway': {
    '*':                        ['transport'],
  },

  'aeroway': {
    '*':                        ['transport','transport:air'],
    'aerodrome':                ['transport','transport:air','transport:air:aerodrome'],
    'international':            ['transport','transport:air','transport:air:airport']
  },

  'amenity': {

    'bbq':                      ['bbq'],
    'dojo':                     ['dojo'],
    'gym':                      ['gym'],

    'place_of_worship':         ['religion','place_of_worship'],

    'arts_centre':              ['arts_centre'],
    'community_centre':         ['community_centre'],
    'social_centre':            ['social_centre'],
    'library':                  ['library'],
    'planetarium':              ['planetarium'],
    'theatre':                  ['theatre'],
    'college':                  ['college'],
    'kindergarten':             ['kindergarten'],
    'school':                   ['school'],
    'university':               ['university'],

    'bar':                      ['bar'],
    'biergarten':               ['biergarten'],
    'cinema':                   ['cinema'],
    'casino':                   ['casino'],
    'gambling':                 ['gambling'],
    'nightclub':                ['nightclub'],
    'pub':                      ['pub'],

    'courthouse':               ['courthouse'],
    'embassy':                  ['embassy'],
    'fire_station':             ['fire_station'],
    'police':                   ['police'],
    'post_office':              ['post_office'],
    'ranger_station':           ['ranger_station'],
    'register_office':          ['register_office'],
    'townhall':                 ['townhall'],

    'coworking_space':          ['coworking_space'],

    'atm':                      ['atm'],
    'bank':                     ['bank'],
    'bureau_de_change':         ['bureau_de_change'],

    'clinic':                   ['clinic'],
    'dentist':                  ['dentist'],
    'doctors':                  ['doctors'],
    'hospital':                 ['hospital'],
    'nursing_home':             ['nursing_home'],
    'pharmacy':                 ['pharmacy'],
    'social_facility':          ['social_facility'],
    'veterinary':               ['veterinary'],

    'cafe':                     ['cafe'],
    'fast_food':                ['fast_food'],
    'food_court':               ['food_court'],
    'ice_cream':                ['ice_cream'],
    'marketplace':              ['marketplace'],
    'restaurant':               ['restaurant'],

    'bus_station':              ['bus_station'],
    'taxi':                     ['taxi'],

    'car_rental':               ['car_rental'],
    'car_wash':                 ['car_wash'],
    'charging_station':         ['charging_station'],
    'fuel':                     ['fuel'],

    'ferry_terminal':           ['ferry_terminal']
  },

  'building': {
    'hotel':                    ['hotel'],
    'commercial':               ['commercial'],
    'retail':                   ['retail'],

    'chapel':                   ['religion','chapel'],
    'church':                   ['religion','church'],
    'mosque':                   ['religion','mosque'],
    'temple':                   ['religion','temple'],
    'synagogue':                ['religion','synagogue'],
    'shrine':                   ['religion','shrine'],

    'civic':                    ['government'],
    'hospital':                 ['hospital'],
    'school':                   ['school'],
    'stadium':                  ['stadium'],
    'university':               ['university'],
    'public':                   ['public'],

    'farm':                     ['farm'],

    'train_station':            ['train_station'],
    'transportation':           ['transportation']
  },

  // experimental, import cuisines for food-related venues
  'cuisine': {
    '*':                        ['food'],

    // menu focus
    'bagel':                    ['food:bagel'],
    'barbecue':                 ['food:bbq'],
    'bougatsa':                 ['food:bougatsa'],
    'burger':                   ['food:burger'],
    'burrito':                  ['food:burrito'],
    'cake':                     ['food:cake'],
    'casserole':                ['food:casserole'],
    'chicken':                  ['food:chicken'],
    'coffee_shop':              ['food:coffee_shop'],
    'crepe':                    ['food:crepe'],
    'couscous':                 ['food:couscous'],
    'curry':                    ['food:curry'],
    'dessert':                  ['food:dessert'],
    'donut':                    ['food:donut'],
    'doughnut':                 ['food:doughnut'],
    'empanada':                 ['food:empanada'],
    'fish':                     ['food:fish'],
    'fish_and_chips':           ['food:fish_and_chips'],
    'fried_food':               ['food:fried_food'],
    'friture':                  ['food:friture'],
    'gyro':                     ['food:gyro'],
    'ice_cream':                ['food:ice_cream'],
    'kebab':                    ['food:kebab'],
    'mediterranean':            ['food:mediterranean'],
    'noodle':                   ['food:noodle'],
    'pancake':                  ['food:pancake'],
    'pasta':                    ['food:pasta'],
    'pie':                      ['food:pie'],
    'pizza':                    ['food:pizza'],
    'regional':                 ['food:regional'],
    'sandwich':                 ['food:sandwich'],
    'sausage':                  ['food:sausage'],
    'savory_pancakes':          ['food:savory_pancakes'],
    'seafood':                  ['food:seafood'],
    'steak_house':              ['food:steak_house'],
    'sub':                      ['food:sub'],
    'sushi':                    ['food:sushi'],
    'tapas':                    ['food:tapas'],
    'vegan':                    ['food:vegan'],
    'vegetarian':               ['food:vegetarian'],
    'wings':                    ['food:wings'],

    // regional/cultural focus
    'african':                  ['food:cuisine:african'],
    'american':                 ['food:cuisine:american'],
    'arab':                     ['food:cuisine:arab'],
    'argentinian':              ['food:cuisine:argentinian'],
    'asian':                    ['food:cuisine:asian'],
    'australian':               ['food:cuisine:australian'],
    'baiana':                   ['food:cuisine:baiana'],
    'balkan':                   ['food:cuisine:balkan'],
    'basque':                   ['food:cuisine:basque'],
    'bavarian':                 ['food:cuisine:bavarian'],
    'belarusian':               ['food:cuisine:belarusian'],
    'brazilian':                ['food:cuisine:brazilian'],
    'cantonese':                ['food:cuisine:cantonese'],
    'capixaba':                 ['food:cuisine:capixaba'],
    'caribbean':                ['food:cuisine:caribbean'],
    'chinese':                  ['food:cuisine:chinese'],
    'croatian':                 ['food:cuisine:croatian'],
    'czech':                    ['food:cuisine:czech'],
    'danish':                   ['food:cuisine:danish'],
    'french':                   ['food:cuisine:french'],
    'gaucho':                   ['food:cuisine:gaucho'],
    'german':                   ['food:cuisine:german'],
    'greek':                    ['food:cuisine:greek'],
    'hunan':                    ['food:cuisine:hunan'],
    'hungarian':                ['food:cuisine:hungarian'],
    'indian':                   ['food:cuisine:indian'],
    'international':            ['food:cuisine:international'],
    'iranian':                  ['food:cuisine:iranian'],
    'italian':                  ['food:cuisine:italian'],
    'japanese':                 ['food:cuisine:japanese'],
    'korean':                   ['food:cuisine:korean'],
    'kyo_ryouri':               ['food:cuisine:kyo_ryouri'],
    'latin_american':           ['food:cuisine:latin_american'],
    'lebanese':                 ['food:cuisine:lebanese'],
    'malagasy':                 ['food:cuisine:malagasy'],
    'mexican':                  ['food:cuisine:mexican'],
    'mineira':                  ['food:cuisine:mineira'],
    'okinawa_ryori':            ['food:cuisine:okinawa_ryori'],
    'pakistani':                ['food:cuisine:pakistani'],
    'peruvian':                 ['food:cuisine:peruvian'],
    'polish':                   ['food:cuisine:polish'],
    'portuguese':               ['food:cuisine:portuguese'],
    'rhenish':                  ['food:cuisine:rhenish'],
    'russian':                  ['food:cuisine:russian'],
    'shandong':                 ['food:cuisine:shandong'],
    'sichuan':                  ['food:cuisine:sichuan'],
    'spanish':                  ['food:cuisine:spanish'],
    'thai':                     ['food:cuisine:thai'],
    'turkish':                  ['food:cuisine:turkish'],
    'vietnamese':               ['food:cuisine:vietnamese'],
    'westphalian':              ['food:cuisine:westphalian']
  },

  'craft': {
    '*':                        ['craft']
  },

  'emergency': {
    'ambulance_station':        ['ambulance_station']
  },

  'historic': {
    'archaeological_site':      ['archaeological_site'],
    'monument':                 ['monument']
  },

  'leisure': {
    'adult_gaming_centre':      ['adult_gaming_centre'],
    'amusement_arcade':         ['amusement_arcade'],
    'beach_resort':             ['beach_resort'],
    'bandstand':                ['bandstand'],
    'dance':                    ['dance'],

    'dog_park':                 ['dog_park'],
    'fishing':                  ['fishing'],
    'garden':                   ['garden'],
    'golf_course':              ['golf_course'],
    'ice_rink':                 ['ice_rink'],
    'miniature_golf':           ['miniature_golf'],
    'nature_reserve':           ['nature_reserve'],
    'park':                     ['park'],
    'pitch':                    ['pitch'],
    'playground':               ['playground'],
    'sports_centre':            ['sports_centre'],
    'stadium':                  ['stadium'],
    'summer_camp':              ['summer_camp'],
    'swimming_pool':            ['swimming_pool'],
    'track':                    ['track'],
    'water_park':               ['water_park'],

    'hackerspace':              ['hackerspace'],
  },

  'military': {
    '*':                        ['military','government'],
  },

  'natural': {
    'wood':                     ['wood'],
    'water':                    ['water'],
    'glacier':                  ['glacier'],
    'beach':                    ['beach'],
  },

  'office': {
    '*':                        ['office']
  },

  'public_transport': {
    '*':                        ['transport'],
    'station':                  ['transport']
  },

  'railway': {
    'light_rail':               ['light_rail'],
    'subway':                   ['subway'],
    'tram':                     ['tram'],
    'station':                  ['transport']
  },

  'shop': {
    '*':                        ['retail'],
    'bakery':                   ['bakery'],
    'butcher':                  ['butcher'],
    'cheese':                   ['cheese'],
    'chocolate':                ['chocolate'],
    'coffee':                   ['coffee'],
    'deli':                     ['deli'],
    'greengrocer':              ['greengrocer'],
    'seafood':                  ['seafood'],
    'supermarket':              ['supermarket'],

    'tailor':                   ['tailor'],
    'copyshop':                 ['copyshop'],
    'dry_cleaning':             ['dry_cleaning'],

    'chemist':                  ['chemist'],
    'medical_supply':           ['medical_supply'],
    'optician':                 ['optician']
  },

  'sport': {
    '*':                        ['sport'],
    'american_football':        ['american_football'],
    'australian_football':      ['australian_football'],
    'badminton':                ['badminton'],
    'baseball':                 ['baseball'],
    'basketball':               ['basketball'],
    'beachvolleyball':          ['beachvolleyball'],
    'billiards':                ['billiards'],
    'canadian_football':        ['canadian_football'],
    'chess':                    ['chess'],
    'cricket':                  ['cricket'],
    'dog_racing':               ['dog_racing'],
    'field_hockey':             ['field_hockey'],
    'gaelic_games':             ['gaelic_games'],
    'horse_racing':             ['horse_racing'],
    'ice_hockey':               ['ice_hockey'],
    'karting':                  ['karting'],
    'rc_car':                   ['rc_car'],
    'rugby_league':             ['rugby_league'],
    'rugby_union':              ['rugby_union'],
    'safety_training':          ['safety_training']
  },

  'tourism': {
    'hotel':                    ['hotel'],
    'motel':                    ['motel'],
    'alpine_hut':               ['alpine_hut'],
    'apartment':                ['apartment'],
    'guest_house':              ['guest_house'],
    'chalet':                   ['chalet'],
    'caravan_site':             ['caravan_site'],
    'camp_site':                ['camp_site'],
    'wilderness_hut':           ['wilderness_hut'],
    'information':              ['information'],
    'attraction':               ['attraction'],
    'theme_park':               ['theme_park'],
    'viewpoint':                ['viewpoint'],
    'museum':                   ['museum'],
    'gallery':                  ['gallery'],
    'zoo':                      ['zoo']
  }

};

module.exports = mapping;
