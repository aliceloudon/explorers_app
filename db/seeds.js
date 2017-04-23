use explorers
db.dropDatabase()

db.discoveries.insert([
  {
     date: "800",
     title: "Maori colonisation of New Zealand",
     name: "Kupe",
     nationality: "Polynesian",
     startcoord: {lat: -17.533333, lng: -149.833333},
     endcoord: {lat: -36.848461, lng:  174.763336},
     info: "Traditional Polynesian navigation was used for thousands of years to make long voyages across thousands of miles of the open Pacific Ocean. Navigators travelled to small inhabited islands using wayfinding techniques and knowledge passed by oral tradition.  Polynesians are believed to have spread eastward from the Samoan Islands into the Marquesas, the Society Islands, the Hawaiian Islands and Easter Island; and south to New Zealand, leading to many distinctive but related cultures.",
     image: "https://s-media-cache-ak0.pinimg.com/originals/7a/58/48/7a5848809181cfafbffaa79a8e2d0c8f.jpg"
   },
  {
    date: "1492", 
    title: "Columbus Discovers America", 
    name: "Christopher Columbus",
    nationality: "Italian",
    startcoord: {lat: 41.680588, lng: -87.835328},
    endcoord: {lat: 13.692940, lng: -89.218191}, 
    info: "On August 3, 1492, <b>Christopher Columbus</b>, crew, and three ships, the <i>Nina, Pinta</i>, and <i>Santa Maria</i>, left Palos, Spain and headed westward./n After stopping in the Canary Islands off the coast of Africa, Columbus’ ships hit the open seas. Covering about 150 miles a day, the trip was long and arduous. The crew was afraid of sea monsters and grew more restless every day that land was not sighted. Columbus offered a reward for the first person to sight land. On October 12, a crew member aboard the <i>Pinta</i> sighted one of the Bahama Islands. Columbus set foot on what he believed was one of the Spice Islands, a group of islands in Asia (now known as Indonesia), where valuable spices and riches came from. He named the land San Salvador. Columbus failed to find the riches he expected, and continued to search for China. He next visited Cuba and Hispaniola (Dominican Republic). He encountered native peoples who he named “Indians” because he believed they were inhabitants of the Indies.", 
    image: "http://assets0.ordienetworks.com/misc/Screen%20Shot%202013-10-11%20at%209.22.15%20AM.png" 
  },
  {
      date: "1519",
      title: "Sailing around the world",
      name: "Ferdinand Magellan",
      nationality: "Portugese",
      startcoord: {lat: -6.314993, lng: 143.955550},
      endcoord: {lat: -4.677919, lng: -174.519597},
      info: "On September 20, 1519 <b>Ferdinand Magellan</b> and 237 crew members set sail on five ships from Sanlucar de Barrameda in the hopes of finding a shortcut to the Spice Islands. After three long months of sailing the Atlantic, Magellan and his crew anchored near Rio de Janeiro in the present day South American nation of Brazil. /n As the ships neared the southern tip of South America, one smashed into the beach and lost all supplies. Nevertheless, in October of 1520, Magellan and his crew crossed the treacherous straits at the tip of South America, which became known as the Straits of Magellan. /n Soon, the crew sailed to the Philippine Islands, where they converted natives to Christianity. During an attempt to convert the native chief, Mactan, to Christianity, Magellan was wounded by an arrow that was driven through his foot by a native warrior. Mactan, who had become upset with Magellan’s insistence that he convert, ordered his warriors to attack. They killed Magellan on April 27, 1521. Most of Magellan’s crew escaped and set sail./n With the loss of their leader, Juan Sebastian Del Cano took control of the ship and sailed for Spain. The <i>Victoria</i> made it back to Spain with only 18 men surviving, hence completing the first circumnavigation of the world.",
      image: "https://en.wikipedia.org/wiki/Ferdinand_Magellan#/media/File:Ferdinand_Magellan.jpg"
  },
  {
      date: "1766",
      title: "First woman to circumnavigate the world",
      name: "Jeanne Baret",
      nationality: "French",
      startcoord: {lat: 45.943067, lng: -0.956036},
      endcoord: {lat: -35.017063, lng: -56.030273},
      info: "Born in 1740 in France’s Loire Valley, <b>Jeanne Baret</b> overcame her poverty-stricken childhood to circumnavigate the globe before any other woman in recorded history and play a key role in identifying hundreds of plant species. In the early 1760s she became the lover and assistant of the well-known botanist Philibert Commerson, possibly using her familiarity with medicinal plants to contribute to his research. A few years later, the celebrated explorer Louis Antoine de Bougainville invited Commerson to join a team of experts who would sail around the world in a grand show of France’s scientific preeminence. /n Who would help Commerson with his fieldwork during the long journey? While Baret was the obvious choice, a royal ordinance in force at the time forbade women from traveling on French Navy vessels. To get around the problem, the couple hatched an elaborate plot in which Baret dressed as a man and showed up on the dock to offer her services—introducing herself as “Jean”—just before Bougainville’s ship, the Etoile, set sail in December 1766. As the expedition made its way toward South America, Baret spent much of her time evading the crew and caring for the sickly Commerson. Arriving in Uruguay in February 1767, the pair began setting out on botanizing missions, amassing more than 6,000 specimens in two years.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jeanne_Barret.jpg"
  },
  {
      date: "1855",
      title: "Discovering Victoria Falls",
      name: "David Livingstone",
      nationality: "Scottish",
      startcoord: {lat: -17.819342, lng: 23.953647},
      endcoord: {lat: -17.924353, lng: 25.855894},
      info: "In 1852, <b>David Livingstone</b> began a four year expedition to find a route from the upper Zambezi to the coast. This filled huge gaps in western knowledge of central and southern Africa. In 1855, Livingstone discovered a spectacular waterfall which he named 'Victoria Falls'. He reached the mouth of the Zambezi on the Indian Ocean in May 1856, becoming the first European to cross the width of southern Africa.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/21/David_Livingstone_-1.jpg"
  },
  {
    date: "1911", 
    title: "The first expedition to reach the South Pole", 
    name: "Roald Amundsen",
    nationality: "Norwegian",
    startcoord: {lat: 59.9139, lng: 10.7522},
    endcoord: {lat: -90, lng: 0}, 
    info: "<b>Roald Amundsen</b> was the first man to lead a successful expedition to the South Pole, famously arriving about a month before Scott and his party that set out at around the same time. Amundsen used dog sleds, his party was well organised and well prepared with the primary intention of reaching the pole, rather than other exploration or scientific discovery. He was the first person to visit both the North and the South poles.",
    image: "http://photos.state.gov/libraries/newzealand/8558/ice2012/Roald-Amundsen_1767131b.jpg" 
  },
  {
    date: "1914", 
    title: "Almost made it to the South Pole", 
    name: "Sir Ernest Shackleton",
    nationality: "Anglo-Irish",
    startcoord: {lat: 21.1515, lng: -23.634},
    endcoord: {lat: 51.235, lng: -12.62}, 
    info: "<b>Sir Ernest Shackleton</b> was an Antarctic explorer, best known for leading the <i>'Endurance'</i> expedition of 1914-16. In 1914, Shackleton made his third trip to the Antarctic with the ship <i>'Endurance'</i> , planning to cross Antarctica via the South Pole. Early in 1915, <i>'Endurance'</i> became trapped in the ice, and ten months later sank. Shackleton's crew had already abandoned the ship to live on the floating ice. /n In April 1916, they set off in three small boats, eventually reaching Elephant Island. Taking five crew members, Shackleton went to find help. In a small boat, the six men spent 16 days crossing 1,300 km of ocean to reach South Georgia and then trekked across the island to a whaling station. The remaining men from the <i>'Endurance'</i> were rescued in August 1916. Not one member of the expedition died.", 
    image: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMDYzMDUz/sir-ernest-henry-shackleton-9480091-1-raw.jpg" 
  },
  {
    date: "1925", 
    title: "Expedition to the Lost City of Z", 
    name: "Sir Percy Fawcett",
    nationality: "English",
    startcoord: {lat: -15.601411, lng: -56.097892},
    endcoord: {lat: -20.841567, lng: -44.159546}, 
    info: "<b>Lieutenant Colonel Percy Fawcett</b> was a British geographer, artillery officer, cartographer, archaeologist and explorer of South America. Along with his eldest son, Jack, Fawcett disappeared in 1925 during an expedition to find 'Z' – his name for an ancient lost city, which he and others believed to exist and to be the remains of El Dorado, in the jungles of Brazil. /n On 20 April 1925 his final expedition departed from Cuiabá. In addition to his two principal companions, Fawcett was accompanied by two Brazilian labourers, two horses, eight mules, and a pair of dogs. The last communication from the expedition was on 29 May 1925 when Fawcett wrote, in a letter to his wife delivered by a native runner, that he was ready to go into unexplored territory with only Jack and his longtime friend Raleigh Rimell. They were last reported to be crossing the Upper Xingu, a southeastern tributary river of the River Amazon.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/PercyFawcett.jpg" 
  },
  {
    date: "1937",
    title: "Flying across the world",
    name: "Amelia Earhart",
    nationality: "American",
    startcoord: {lat: -6.314993, lng: 143.955550},
    endcoord: {lat: -4.677919, lng: -174.519597},
    info: "On June 1st, 1937, <b>Amelia Earhart</b> and co-pilot Fred Noonan again set off to fly around the world. They first flew to San Juan, Puerto Rico, and then eastward toward Africa. At Port Darwin, Australia, Amelia and Fred were able to make crucial repairs to their airplane. Amelia reached Lae, New Guinea on June 29th. They had flown 22,000 miles and had 7,000 left to go. /n Amelia had become an international hero, and the world was captivated by her determination. At this point, however, Amelia was said to be exhausted and may have alluded to the possibility that her co-pilot, Fred Noonan, was drinking. However, trouble lurked for Amelia and Fred. Shortly after Amelia left New Guinea on July 2, she sent several distress calls. While her distress calls were received, Amelia could not hear the return messages because she could not find the correct frequency on her radio. Amelia and Fred were off-course and lost over the vast Pacific Ocean. They did not have enough gas to reach their target – The Howland Islands. Amelia and Fred would never be seen or heard from again. President Roosevelt sent nine naval ships and 66 aircraft to search the area. On July 18 the search was called off.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Amelia_Earhart_1935.jpg"
  },
  {
    date: "1953", 
    title: "First Ascent of Mount Everest", 
    name: "Edmund Hillary",
    nationality: "New Zealand",
    startcoord: {lat: 41.680588, lng: -87.835328},
    endcoord: {lat: 13.692940, lng: -89.218191}, 
    info: "New Zealander <b>Edmund Hillary</b> and fellow mountaineer Tenzing Norgay were the first known and confirmed climbers ever to make it to the peak of Mount Everest in 1953. /n Other notable feats that Hillary accomplished in addition to his Mount Everest adventure is that he also reached both the North and South Pole, which made him the first man to ever reach all three landmarks. During World War II, Hillary was part of the New Zealand Air Force working as a navigator.", 
    image: "http://www.suzimcalpine.com/wp-content/uploads/2013/05/sir-edmund-hillary.jpg" 
  }
  ])

// POSSIBLE VIDEO LINK FOR INFOWINDOW
  // //  content: '<video controls="" style="width:100px;height:100px;" poster="poster.png">' +
  //   '<source src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" type="video/webm;">' +
  //   '<source src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type="video/mp4;">' +
  //   '</video>'

  // KUPE: https://www.youtube.com/watch?v=tuJk_a4iWj0
  // COLOMBUS: https://www.youtube.com/watch?v=3fvXZzcrEcc
  // MAGELLAN: https://www.youtube.com/watch?v=Y94s85-Crew
  // BARET: https://www.youtube.com/watch?v=54l_ESqVoHU
  // LIVINGSTONE: https://www.youtube.com/watch?v=f9ivr8CfEoE
  // AMUNDSEN: https://www.youtube.com/watch?v=m0Xp3X9NJ9w
  // SHACKLETON: https://www.youtube.com/watch?v=8r5jtV4vNRM
  // FAWCETT: https://www.youtube.com/watch?v=x3I1vqr-CfA
  // EARHART: https://www.youtube.com/watch?v=ivbh9vEkp1g
  // HILLARY: https://www.youtube.com/watch?v=mPB5ZERTdTI
 

