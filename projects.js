// Projects data
const PROJECTS_DATA = [
  {
    "id": "charlie-dalin-cancer",
    "title": "He was diagnosed with cancer, then won a 24,000-mile sailing race",
    "description": "Charlie Dalin kept his illness a secret, treating himself with immunotherapy pills on a 64-day journey around the world. What would it do to his body?",
    "link": "https://www.washingtonpost.com/world/interactive/2026/charlie-dalin-vendee-globe-race-cancer/",
    "gift_link": "https://wapo.st/3M5UZqH",
    "image": "",
    "date": "January 2026",
    "source": "The Washington Post"
  },
  {
    "id": "syria-killing-machine",
    "title": "Syria's killing machine",
    "description": "A newly revealed trove of photos depicts 10,000 people who had died in Bashar al-Assad's brutal prison system during his last decade in power.",
    "link": "https://www.washingtonpost.com/world/interactive/2025/syria-assad-deaths-torture-photos/",
    "gift_link": "https://wapo.st/4rjJuLv",
    "image": "img/syria.mov",
    "isVideo": true,
    "date": "December 2025",
    "source": "The Washington Post"
  },
  {
    "id": "gaza-children",
    "title": "60,000 Gazans have been killed. 18,500 were children. These are their names.",
    "description": "",
    "link": "https://www.washingtonpost.com/world/interactive/2025/israel-gaza-war-children-death-toll/",
    "gift_link": "https://wapo.st/46cScTk",
    "image": "img/gaza-children.mov",
    "isVideo": true,
    "date": "July 2025",
    "source": "The Washington Post"
  },
  {
    "id": "russia-detention",
    "title": "She tried to expose Russia's brutal detention system — and ended up dead",
    "description": "",
    "link": "https://www.washingtonpost.com/world/interactive/2025/russia-detention-ukraine-civilians-occupation/",
    "gift_link": "https://wapo.st/3Z1oAod",
    "image": "img/russia-detention.png",
    "date": "April 2025",
    "source": "The Washington Post"
  },
  {
    "id": "trump-deportation",
    "title": "Deportation at 'light speed': How Trump's crackdown could unfold",
    "description": "",
    "link": "https://www.washingtonpost.com/immigration/interactive/2025/trump-immigrants-mass-deportations/",
    "gift_link": "https://wapo.st/4rcWGS4",
    "image": "img/trump-deportation.mov",
    "isVideo": true,
    "date": "January 2025",
    "source": "The Washington Post"
  },
  {
    "id": "trump-deportacion-es",
    "title": "Expulsión 'exprés': Cómo Trump podría ejecutar deportaciones masivas",
    "description": "",
    "link": "https://www.washingtonpost.com/immigration/interactive/2025/trump-inmigrantes-deportaciones-masivas/",
    "gift_link": "",
    "image": "",
    "date": "January 2025",
    "source": "The Washington Post"
  },
  {
    "id": "trump-victory",
    "title": "How Trump built his victory, vote by vote",
    "description": "Using sand to represent individual votes, The Post explains where key votes gave Trump a second term in the White House.",
    "link": "https://www.washingtonpost.com/elections/interactive/2024/2024-election-vote-map/",
    "gift_link": "https://wapo.st/4qEjOsJ",
    "image": "img/trump-victory.mov",
    "isVideo": true,
    "date": "November 2024",
    "source": "The Washington Post"
  },
  {
    "id": "fast-food-politics",
    "title": "The vast divide between Republicans and Democrats over fast food",
    "description": "This week, we scour campaign finance reports to reveal strikingly partisan preferences for various restaurants, with few more polarizing than McDonald's.",
    "link": "https://www.washingtonpost.com/business/interactive/2024/campaign-spending-fast-food-mcdonalds/",
    "gift_link": "",
    "image": "img/fast-food-politics.png",
    "date": "October 2024",
    "source": "The Washington Post"
  },
  {
    "id": "vp-debate-2024",
    "title": "Who won the VP debate? Voters weigh in on how Vance and Walz performed.",
    "description": "Uncommitted voters in battleground states share their thoughts on the Vance-Walz debate with The Post.",
    "link": "https://www.washingtonpost.com/elections/interactive/2024/vice-presidential-debate-voter-poll/",
    "gift_link": "https://wapo.st/45uvjuq",
    "image": "",
    "date": "October 2024",
    "source": "The Washington Post"
  },
  {
    "id": "harris-trump-debate",
    "title": "Who won the Harris-Trump debate? We asked swing-state voters.",
    "description": "Uncommitted voters in battleground states share their thoughts on the Harris-Trump debate with The Post.",
    "link": "https://www.washingtonpost.com/elections/interactive/2024/presidential-debate-voter-poll/",
    "gift_link": "https://wapo.st/49WVVFR",
    "image": "img/harris-trump-debate.png",
    "date": "September 2024",
    "source": "The Washington Post"
  },
  {
    "id": "harris-vp-quiz",
    "title": "Who do you think Harris's VP pick should be? Take our quiz.",
    "description": "Take this quiz and see which people you think Kamala Harris should pick to be the Democratic vice presidential nominee.",
    "link": "https://www.washingtonpost.com/elections/interactive/2024/harris-vp-pick-quiz-2024-election/",
    "gift_link": "",
    "image": "",
    "date": "July 2024",
    "source": "The Washington Post"
  },
  {
    "id": "religious-census",
    "title": "The most religious, and religiously diverse, places in America",
    "description": "This week, we mine the U.S. Religious Census, a decennial count of America's faithful, for insights into the geography of religious devotion. We also compare people's claims on church attendance to their actual behavior.",
    "link": "https://www.washingtonpost.com/business/2024/06/28/religious-census-map-diversity-catholics/",
    "gift_link": "",
    "image": "img/religious-census.png",
    "date": "June 2024",
    "source": "The Washington Post"
  },
  {
    "id": "migrants-immigration",
    "title": "4.1 million migrants: Where they're from, where they live in the U.S.",
    "description": "We analyzed more than 4.1 million U.S. immigration court records amid debates about the U.S.-Mexico border, which often omit what happens to migrants who stay.",
    "link": "https://www.washingtonpost.com/immigration/interactive/2024/us-immigration-where-migrants-live/",
    "gift_link": "https://wapo.st/4jWRSxO",
    "image": "img/migrants-immigration.png",
    "date": "June 2024",
    "source": "The Washington Post"
  },
  {
    "id": "trump-vp-quiz",
    "title": "How would you narrow Trump's VP shortlist? Take this quiz.",
    "description": "Take this quiz and see which people you think Donald Trump could pick to be the Republican vice presidential nominee.",
    "link": "https://www.washingtonpost.com/politics/interactive/2024/vice-president-candidates-donald-trump/",
    "gift_link": "",
    "image": "",
    "date": "May 2024",
    "source": "The Washington Post"
  },
  {
    "id": "trump-truth-social",
    "title": "How Trump has become angrier and more isolated on Truth Social",
    "description": "Here on his company's social network Trump is offering followers an intimate view of what his second term could look like: isolated, vitriolic and vengeful.",
    "link": "https://www.washingtonpost.com/politics/interactive/2024/trump-truth-social-posts/",
    "gift_link": "",
    "image": "",
    "date": "April 2024",
    "source": "The Washington Post"
  },
  {
    "id": "trump-base-demographics",
    "title": "What the early primaries tell us about Trump's changing base",
    "description": "Trump's voters are older and more conservative than in 2016. Key groups like suburban voters, evangelical voters and Republican women are sticking with him.",
    "link": "https://www.washingtonpost.com/politics/interactive/2024/trump-voters-demographics-shift/",
    "gift_link": "https://wapo.st/4qH5Oic",
    "image": "img/trump-base-demographics.png",
    "date": "February 2024",
    "source": "The Washington Post"
  },
  {
    "id": "recycling-quiz",
    "title": "You're probably recycling wrong. This quiz will help you sort it out.",
    "description": "What can go in my blue bin? The answer can be different from one neighborhood to the next, but fortunately, following some key guidelines should help improve your recycling no matter where you live.",
    "link": "https://www.washingtonpost.com/climate-solutions/interactive/2023/recycling-tips-mistakes-quiz/",
    "gift_link": "",
    "image": "img/recycling-wrong.png",
    "date": "April 2023",
    "source": "The Washington Post"
  },
  {
    "id": "five-families-house",
    "title": "Meet 'the five families' that wield power in McCarthy's House majority",
    "description": "The Problem Solvers Caucus, Republican Governance Group, Main Street Caucus, Study Committee and Freedom Caucus negotiate as House Speaker Kevin McCarthy has a four-seat majority.",
    "link": "https://www.washingtonpost.com/politics/interactive/2023/house-republican-five-families/",
    "gift_link": "",
    "image": "img/five-families.png",
    "date": "April 2023",
    "source": "The Washington Post"
  },
  {
    "id": "election-modeling",
    "title": "How election modeling can help us understand who might win",
    "description": "Election models can estimate where votes are out, giving observers a chance to see where the election might be headed.",
    "link": "https://www.washingtonpost.com/elections/interactive/2022/how-election-models-work/",
    "gift_link": "",
    "image": "img/election-modeling.png",
    "date": "November 2022",
    "source": "The Washington Post"
  },
  {
    "id": "slaveholding-congress",
    "title": "Slaveholding members of Congress",
    "description": "More than 1,700 congressmen once enslaved Black people. This is who they were, and how they shaped the nation.",
    "link": "https://www.washingtonpost.com/history/interactive/2022/congress-slaveowners-names-list/",
    "gift_link": "",
    "image": "",
    "date": "August 2021",
    "source": "The Washington Post"
  },
  {
    "id": "census-demographics",
    "title": "America's demographics are changing",
    "description": "How has your county shifted? Census data from 2020 shows America is growing, but not equally.",
    "link": "https://www.washingtonpost.com/nation/interactive/2021/census-maps-race-population-demographics/",
    "gift_link": "",
    "image": "img/census-demographics.png",
    "date": "June 2021",
    "source": "The Washington Post"
  },
  {
    "id": "biden-judges",
    "title": "Diversity on the bench",
    "description": "Biden nominated as many minority women to be judges in four months as Trump had confirmed in four years",
    "link": "https://www.washingtonpost.com/politics/interactive/2021/biden-judge-diversity/",
    "gift_link": "",
    "image": "img/biden-judges.png",
    "date": "April 2021",
    "source": "The Washington Post"
  },
  {
    "id": "covid-health-disparities",
    "title": "COVID-19 health disparities",
    "description": "How the coronavirus exposed health disparities in communities of color",
    "link": "https://www.washingtonpost.com/graphics/2020/investigations/coronavirus-race-data-map/",
    "gift_link": "",
    "image": "",
    "date": "November 2020",
    "source": "The Washington Post"
  },
  {
    "id": "election-2020-campaign",
    "title": "2020 election campaign",
    "description": "Amid the pandemic, Trump and Biden traveled most often to Pennsylvania and Florida.",
    "link": "https://www.washingtonpost.com/elections/2020/11/02/campaign-rallies-covid/",
    "gift_link": "",
    "image": "",
    "date": "November 2020",
    "source": "The Washington Post"
  },
  {
    "id": "census-population-2020",
    "title": "2020 Census shows U.S. population grew at slowest pace since the 1930s",
    "description": "2020 Census shows U.S. population grew at slowest pace since the 1930s",
    "link": "https://www.washingtonpost.com/dc-md-va/interactive/2021/2020-census-us-population-results/",
    "gift_link": "",
    "image": "img/census-population-2020.png",
    "date": "June 2019",
    "source": "The Washington Post"
  },
  {
    "id": "winter-temperatures",
    "title": "Dipping low: Washington's historical winter temperatures",
    "description": "",
    "link": "https://www.washingtonpost.com/weather/2019/12/04/dipping-low-washingtons-historical-winter-temperatures/",
    "gift_link": "",
    "image": "img/winter-temperatures.png",
    "date": "December 2019",
    "source": "The Washington Post"
  },
  {
    "id": "water-strain",
    "title": "Mapping the strain on our water",
    "description": "Pockets in several U.S. states — and across the globe — are draining their limited water supplies",
    "link": "https://www.washingtonpost.com/climate-environment/2019/08/06/mapping-strain-our-water/",
    "gift_link": "",
    "image": "img/water-strain.png",
    "date": "August 2019",
    "source": "The Washington Post"
  },
  {
    "id": "dem-candidates-quiz",
    "title": "How well do you know the Democratic candidates?",
    "description": "Too many candidates are competing to be the Democratic nominee in next year's presidential election. How well do you know them?",
    "link": "https://www.washingtonpost.com/graphics/2019/politics/dem-candidates-recognition-quiz/",
    "gift_link": "",
    "image": "",
    "date": "July 2019",
    "source": "The Washington Post"
  },
  {
    "id": "celebrity-billboard",
    "title": "The Celebrity Billboard",
    "description": "Curated the database feeding the visuals in this interactive that tracks how often famous people are in the media spotlight, according to Wikipedia traffic",
    "link": "https://pudding.cool/2018/09/wiki-billboard/",
    "gift_link": "",
    "image": "",
    "date": "September 2018",
    "source": "The Pudding"
  },
  {
    "id": "coding-like-a-girl",
    "title": "Coding like a girl",
    "description": "Funded by Bill & Melinda Gates Foundation. Explored the gender gap in the IT workforce",
    "link": "https://interactive.aljazeera.com/aje/2018/coding-like-a-girl/index.html",
    "gift_link": "",
    "image": "img/coding-like-a-girl.png",
    "date": "March 2018",
    "source": "Al Jazeera"
  }
];
