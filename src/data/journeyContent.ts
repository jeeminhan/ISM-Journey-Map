import { JourneyCell } from "./types";

export const journeyCells: JourneyCell[] = [
  // ─── MUSLIM ───────────────────────────────────────────────────────────────
  {
    stage: "pre-arrival",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Social media images of Western wealth and freedom",
        "Western lifestyle portrayed as the goal",
      ],
      hearing: [
        "Family warnings that Christianity is a political threat",
        "Pressure to represent the family well",
        "Stories of students who 'lost their faith' abroad",
      ],
      thinkingFeeling: [
        "Will I be safe practicing my faith?",
        "Will I be pressured to change who I am?",
        "Excitement about new possibilities mixed with anxiety",
      ],
      sayingDoing: [
        "Researching Islamic centers near campus",
        "Connecting with other Muslim students online",
        "Memorizing key phrases in English",
      ],
    },
    quotes: [
      {
        text: "I was told by my uncle that American Christians would try to convert me. I was on guard before I even landed.",
        attribution: "Graduate student from Pakistan",
      },
    ],
    ministry: {
      posture: "Digital Bridge-Builder",
      approaches: [
        "Establish a welcoming digital presence (social media, WhatsApp groups) before they arrive",
        "Send a personal welcome message to accepted students",
        "Connect them with a peer from their country who is already on campus",
      ],
      pitfalls: [
        "Leading with religious content before trust is built",
        "Assuming they know what ISM does",
        "Ignoring this stage entirely — it is the hidden window",
      ],
    },
    bridges: [
      "Shared emphasis on community and family",
      "Practical hospitality that meets real needs",
      "Curiosity about the West without pressure",
    ],
    barriers: [
      "Family warnings framing Christianity as dangerous",
      "Fear of cultural extraction",
      "Social media portraying Christians as hypocrites",
    ],
  },
  {
    stage: "arrival",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Churches on every corner but few visible Muslim prayer spaces",
        "Christians who eat pork and drink alcohol — confusing and offensive",
        "ISM volunteers helping with practical needs without asking for anything",
      ],
      hearing: [
        "Fellow Muslims warning them about Christian 'traps'",
        "Campus organizations competing for their attention",
        "The call to prayer only in their headphones, far from home",
      ],
      thinkingFeeling: [
        "I need to find halal food and a mosque before anything else",
        "These Christians seem kind, but what do they really want?",
        "I feel exposed without my community around me",
      ],
      sayingDoing: [
        "Immediately seeking out the Muslim Student Association (MSA)",
        "Performing salah (prayer) privately, often hiding it from roommates",
        "Accepting practical help from ISM while keeping spiritual walls up",
      ],
    },
    quotes: [
      {
        text: "They helped me find a halal restaurant and didn't ask me about Jesus once. I thought that was strange. I kept waiting for the catch.",
        attribution: "Undergraduate from Saudi Arabia",
      },
    ],
    ministry: {
      posture: "Servant Host",
      approaches: [
        "Offer airport pickup, furniture, and halal food connections with no strings attached",
        "Ask about their family, their country, their journey — show genuine curiosity",
        "Invite them to community meals; share your table as an act of hospitality (Ahl Al Bayt)",
        "Connect them to international student networks, not just Christian circles",
      ],
      pitfalls: [
        "Moving too quickly to spiritual conversations before trust is established",
        "Serving only to gain access — they will sense transactional motives",
        "Avoiding Islam out of fear; their faith is central to who they are",
      ],
    },
    bridges: [
      "Islamic hospitality culture: both traditions honor the guest",
      "Respect for 'People of the Book' (Ahl Al-Kitab) in Islamic tradition",
      "Genuine curiosity about their faith journey builds reciprocal openness",
    ],
    barriers: [
      "Perceived Christian agenda behind every act of service",
      "Association of America with moral decadence and anti-Islam politics",
      "Isolation within the MSA echo chamber that limits cross-cultural exposure",
    ],
  },
  {
    stage: "integration",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Christians whose lives don't match Western stereotypes",
        "The Injil (Gospel) referred to in the Quran — perhaps it has something to say",
        "Friends from ISM who have genuine love without hidden agendas",
      ],
      hearing: [
        "Questions from ISM friends that make them think more deeply about the Quran",
        "Family back home asking if they are 'still Muslim'",
        "Academic voices questioning all religious claims equally",
      ],
      thinkingFeeling: [
        "I am curious about Jesus (Isa) — the Quran speaks highly of him",
        "If I explore this, am I betraying my family and my people?",
        "My Muslim identity is still central, but I have questions I never had before",
      ],
      sayingDoing: [
        "Reading the Injil privately, often in secret",
        "Asking ISM staff theological questions using Islamic frameworks",
        "Attending ISM events while maintaining MSA participation",
      ],
    },
    quotes: [
      {
        text: "They asked me what I believed about Isa Al-Masih. No one had ever asked me that before. I realized I had never thought about it carefully.",
        attribution: "Graduate student from Egypt",
      },
    ],
    ministry: {
      posture: "Companion in Inquiry (Curious Friend)",
      approaches: [
        "Use the Camel Method: begin with Quran passages about Isa (Jesus) as a bridge",
        "Ask rather than tell — 'What do you believe about Isa Al-Masih?'",
        "Offer Discovery Bible Studies using narrative Scripture with minimal Western framing",
        "Protect their dignity and family honor throughout every conversation",
      ],
      pitfalls: [
        "Debating Islam or arguing that Muhammad was a false prophet",
        "Pressuring for a decision before the relationship is deep enough",
        "Using Christian jargon (born-again, saved) that carries no meaning in their frame",
      ],
    },
    bridges: [
      "Isa Al-Masih in the Quran: born of a virgin, sinless, miracle-worker, returning judge",
      "Tawhid (God's oneness) as a starting point for discussing the Trinitarian mystery",
      "The concept of Injil — the Gospel they already believe God revealed",
    ],
    barriers: [
      "Fear of apostasy: in many Muslim cultures it carries serious social and legal consequences",
      "Perceived Trinity as polytheism — a fundamental Quranic objection",
      "Family and community surveillance, especially among students from Muslim-majority countries",
    ],
  },
  {
    stage: "leadership",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Their own transformation as evidence that Isa is who he claimed to be",
        "Peers from their country who are asking the same questions they once had",
        "The possibility of being a bridge between Islam and Jesus, not a bridge burner",
      ],
      hearing: [
        "The command to make disciples of all nations — including their own people",
        "ISM encouraging them to lead in their own cultural and linguistic context",
        "Stories of other MBBs who are reaching their families from the inside",
      ],
      thinkingFeeling: [
        "I want my family to know what I have found, but I fear the cost",
        "I understand the Quran and Islamic culture — I can explain Jesus in ways no Westerner can",
        "How do I share Jesus without it looking like I've joined a Western religion?",
      ],
      sayingDoing: [
        "Leading informal halaqah (study circle) style discussions about Jesus with Muslim friends",
        "Contextualizing prayer and worship in culturally Muslim forms",
        "Writing and sharing testimonies in Arabic, Urdu, or Farsi for their home community",
      ],
    },
    quotes: [
      {
        text: "I am still Muslim in culture. But Isa is my Lord. My imam cannot explain that, but my family sees the change in me.",
        attribution: "Graduate student from Indonesia",
      },
    ],
    ministry: {
      posture: "Mobilizer and Contextualizer",
      approaches: [
        "Follow the 'Daniel Paradigm': empower them to stay inside their community, not extract",
        "Teach reproducible tools: Discovery Bible Study in their heart language",
        "Help them craft a testimony that honors their family and community, not burns bridges",
        "Connect them with MBB networks and global movements like Crescent Project or Frontiers",
      ],
      pitfalls: [
        "Pushing them to publicly identify with Western Christianity or church culture",
        "Neglecting their family discipleship strategy — the oikos is the mission field",
        "Treating their cultural forms as spiritually suspect rather than missionally useful",
      ],
    },
    bridges: [
      "Insider movement framing: following Isa within Islamic cultural identity (C4-C5 spectrum)",
      "Arabic/Urdu Scripture that bypasses Western colonial associations",
      "The concept of ummah (community) reimagined as the body of Christ",
    ],
    barriers: [
      "Western church culture that demands cultural extraction as proof of conversion",
      "Social and legal apostasy risks in Muslim-majority home countries",
      "Isolation from both Muslim and Christian communities when identity is in-between",
    ],
  },
  {
    stage: "reentry",
    background: "muslim",
    empathyMap: {
      seeing: [
        "A home country where Islam is not just religion but social fabric and law",
        "Family watching closely for signs of 'Westernization' or lost faith",
        "The absence of the ISM community that nurtured their faith",
      ],
      hearing: [
        "Family asking if they still pray five times a day, still fast for Ramadan",
        "Social pressure to conform to Islamic religious practice to maintain honor",
        "Silence — no one to talk to about their faith in Jesus",
      ],
      thinkingFeeling: [
        "Will my faith survive without a community to sustain it?",
        "I cannot tell my family what I believe — the cost is too high",
        "But I came home with a mission: my family needs to know Isa",
      ],
      sayingDoing: [
        "Continuing outward Islamic cultural practices while following Isa privately",
        "Building slow, relational trust with family members before sharing",
        "Connecting with underground believer networks in their country",
      ],
    },
    quotes: [
      {
        text: "I went home without a plan. Within a month, I stopped praying and reading the Bible. I needed ISM to prepare me before I left.",
        attribution: "Graduate student from Turkey",
      },
    ],
    ministry: {
      posture: "Deployment Coach and Long-term Accompanier",
      approaches: [
        "Begin reentry preparation 6 months before departure — use 'Think Home' and 'Back Home' curricula",
        "Conduct a spiritual risk assessment: country-specific legal and social dangers",
        "Connect them to underground MBB networks and diaspora churches before they leave",
        "Establish a monthly VoIP/WhatsApp mentoring relationship that continues after departure",
        "Cast the vision: their return is the beginning of multiplication, not the end of ministry",
      ],
      pitfalls: [
        "Treating graduation as the end of the discipleship relationship",
        "Failing to acknowledge the very real danger they may face",
        "No plan for ongoing spiritual community in their home country",
      ],
    },
    bridges: [
      "The 'Ambassador in Exile' vision: their suffering has a redemptive purpose",
      "Oikos strategy: the gospel spreading inward through family relationships",
      "Global MBB diaspora communities that sustain faith across borders",
    ],
    barriers: [
      "Apostasy laws and social consequences in many Muslim-majority nations",
      "No local believer network to 'land in' after returning home",
      "Isolation and spiritual attrition without ongoing mentorship",
    ],
  },

  // ─── HINDU ────────────────────────────────────────────────────────────────
  {
    stage: "pre-arrival",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Images of America as a land of opportunity but also moral looseness",
        "Christianity associated with colonial history and cultural dominance",
        "Successful Indian diaspora professionals who maintained their Hindu identity",
      ],
      hearing: [
        "Family instructions to stay connected to Indian culture and Hindu practice",
        "Warnings from relatives that Western culture will 'corrupt' them",
        "That getting a US degree is the path to prosperity for the whole family",
      ],
      thinkingFeeling: [
        "I am proud of being Indian and Hindu — I don't plan to change",
        "Will I find a community that understands me?",
        "I need to succeed academically — this degree is for my whole family",
      ],
      sayingDoing: [
        "Packing murti (deity figurines) and puja items for their new home",
        "Connecting with the Hindu Students Council (HSC) chapter at the university",
        "Making promises to parents to call home daily and attend temple regularly",
      ],
    },
    quotes: [
      {
        text: "My mother put tilak on my forehead before I left and said: 'Come back as the son I raised, not as someone else.'",
        attribution: "Graduate student from Gujarat, India",
      },
    ],
    ministry: {
      posture: "Respectful Neighbor (Pre-Contact Cultural Builder)",
      approaches: [
        "Build digital presence that acknowledges Indian culture — Diwali posts, cultural celebrations",
        "Connect with Indian Christian students who can build bridges from within the culture",
        "Study Hindu philosophy, especially Bhakti and Vedanta, before first contact",
        "Send welcome messages that honor family and community — not just the individual",
      ],
      pitfalls: [
        "Any form of contact that feels like targeting or recruitment",
        "Ignorance of Hinduism's depth — they will test your seriousness",
        "Framing Christianity as a replacement for Hindu culture rather than a fulfillment",
      ],
    },
    bridges: [
      "Shared value of family honor, community, and hospitality",
      "India's ancient spiritual quest: Hinduism as 'seeking' what Christ reveals",
      "The concept of seeking the divine — dharmic curiosity before arrival",
    ],
    barriers: [
      "Historical association of Christianity with British colonialism in India",
      "Caste system: fear that conversion severs community ties",
      "Family expectation that Hinduism = Indian identity — they are inseparable",
    ],
  },
  {
    stage: "arrival",
    background: "hindu",
    empathyMap: {
      seeing: [
        "A diverse campus with many religions coexisting — more pluralistic than expected",
        "Christians who seem genuinely interested in their culture and food",
        "ISM as a practical help hub — not immediately religious",
      ],
      hearing: [
        "Invitations to Diwali events — surprising that a Christian group celebrates Hindu festivals",
        "Friends saying Jesus and Krishna are 'basically the same'",
        "Family calling daily to make sure they haven't been 'converted'",
      ],
      thinkingFeeling: [
        "This country is more welcoming than I expected",
        "These Christians don't seem like the missionaries I was warned about",
        "I'm missing home, my food, my temple rituals, my community",
      ],
      sayingDoing: [
        "Cooking Indian food and sharing it as an act of hospitality",
        "Attending ISM events out of curiosity and for the community",
        "Participating in HSC while also exploring other spiritual communities",
      ],
    },
    quotes: [
      {
        text: "They celebrated Diwali with me. They put on the traditional clothes and ate my food. I thought: these are not the Christians my grandmother warned me about.",
        attribution: "Undergraduate student from Maharashtra, India",
      },
    ],
    ministry: {
      posture: "Cultural Celebrant (Feast-Table Diplomat)",
      approaches: [
        "Host Indian cultural celebrations with genuine curiosity — not appropriation",
        "Share meals: Indian food is an act of love; receive it gratefully, offer yours generously",
        "Ask about their puja practice, their family deities, their festivals — with authentic interest",
        "Invite them to see that Jesus is a figure in their own Hindu texts (Prajapathi stories, Vedic parallels)",
      ],
      pitfalls: [
        "Celebrating Hindu culture merely as a missional strategy — they will sense inauthenticity",
        "Asking them to eat beef or adopt Western cultural markers as a sign of belonging",
        "Presenting Jesus as anti-Hindu rather than as the fulfillment of Hindu spiritual longing",
      ],
    },
    bridges: [
      "Yoga and meditation as spiritual practices that can be redirected toward Jesus",
      "The concept of avatar (divine descent) as a bridge to the Incarnation",
      "Hospitality and shared meals: both cultures honor table fellowship",
    ],
    barriers: [
      "Fear that accepting Jesus means eating beef and abandoning Indianness",
      "Pluralism: 'all paths lead to God' — why would Jesus be unique?",
      "Isolation within the Indian student community if they explore Christianity",
    ],
  },
  {
    stage: "leadership",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Their own transformation as evidence of something real",
        "Hindu friends and family members who have the same spiritual longings they once had",
        "A possible way to follow Jesus without abandoning their family and culture",
      ],
      hearing: [
        "ISM encouraging them to lead in their own cultural and linguistic context",
        "Stories of other HBBs (Hindu Background Believers) who have reached their families",
        "The invitation to see their vocation as a mission field in India",
      ],
      thinkingFeeling: [
        "I want to share what I've found, but the cost to my family feels unbearable",
        "Jesus is the ultimate Bhagwan (devotional Lord) — how do I help my community see that?",
        "I am not abandoning my culture; I am fulfilling its deepest longing",
      ],
      sayingDoing: [
        "Hosting satsang (truth gathering) style Bible discussions with Indian peers",
        "Contextualizing worship with Indian music, art, and devotional expression",
        "Writing reflections for family back home that connect Jesus to Indian spiritual heritage",
      ],
    },
    quotes: [
      {
        text: "I told my mother: I have found the One that all our bhakti was always pointing toward. She didn't reject me. She asked me to tell her more.",
        attribution: "Graduate student from Tamil Nadu, India",
      },
    ],
    ministry: {
      posture: "Cultural Bridge-Builder (Contextualizing Equipper)",
      approaches: [
        "Equip them to use the Vedic parallels to Scripture: Prajapathi, Purusha Sukta, Bhakti devotion",
        "Host satsang-style gatherings (informal, devotional, experiential) rather than Western church formats",
        "Emphasize implantation: the goal is the gospel spreading through their family oikos, not extraction",
        "Connect them with Indian HBB mentors and movements like Isai Vidiyal or indigenous church networks",
      ],
      pitfalls: [
        "Pushing them toward Western church forms that create cultural distance from family",
        "Expert-teacher dynamic that disempowers them as cultural insiders",
        "Framing leadership as leaving their community rather than transforming it from within",
      ],
    },
    bridges: [
      "Bhakti (devotion) as the emotional and spiritual framework for loving Jesus",
      "The concept of moksha (liberation) fulfilled in Christ's atonement",
      "Guru-disciple relationship reframed as the discipleship model",
    ],
    barriers: [
      "Family fear that conversion signals caste betrayal and community rejection",
      "Pressure to perform Hindu rituals for family events (weddings, funerals, festivals)",
      "Indian Christian culture that often looks Western rather than indigenously Indian",
    ],
  },
  {
    stage: "reentry",
    background: "hindu",
    empathyMap: {
      seeing: [
        "A home filled with household deities and daily puja rituals",
        "A family that does not know about their faith journey",
        "Hindu religious festivals as the rhythm of social and family life",
      ],
      hearing: [
        "Pressure to participate in puja and family religious ceremonies",
        "Questions from family: 'Are you still Hindu? Did they convert you?'",
        "The silence of having no local Indian believer community to connect with",
      ],
      thinkingFeeling: [
        "How do I honor my family's rituals without betraying my faith in Jesus?",
        "I feel isolated — I have no community that understands both sides of me",
        "But I came home with a purpose: my family is my mission field",
      ],
      sayingDoing: [
        "Participating in family religious events while reframing them internally",
        "Slowly sharing their spiritual journey with open-minded family members",
        "Looking for indigenous Indian Christian fellowship that doesn't feel foreign",
      ],
    },
    quotes: [
      {
        text: "I sat through the Diwali puja at home and prayed to Jesus the entire time. My grandmother asked why I seemed so peaceful. That was the opening.",
        attribution: "Graduate student from Andhra Pradesh",
      },
    ],
    ministry: {
      posture: "Reentry Strategist and Long-term Accompanier",
      approaches: [
        "Begin preparation 6 months before return: discuss how to navigate family religious events",
        "Connect them to indigenous Indian church networks (like Believers Church or Jehovah Shammah)",
        "Develop a family engagement strategy: slow, relational, honor-based witness",
        "Establish ongoing WhatsApp/Zoom mentorship that continues after departure",
      ],
      pitfalls: [
        "Telling them to refuse all family religious participation — this severs relationships immediately",
        "No plan for ongoing community in their home city or village",
        "Treating reentry as the end of ministry rather than the deployment of a multiplier",
      ],
    },
    bridges: [
      "The 'fulfilled Hindu' framing: Jesus as the answer to what Hindu longing always sought",
      "Family relational capital as the primary channel for gospel witness at home",
      "Indigenous Indian Christianity that does not require Western cultural forms",
    ],
    barriers: [
      "Social pressure to participate in idolatrous worship to maintain family relationships",
      "Absence of a local HBB community to provide accountability and encouragement",
      "Risk of spiritual attrition without ongoing mentorship and community",
    ],
  },

  // ─── BUDDHIST ─────────────────────────────────────────────────────────────
  {
    stage: "pre-arrival",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "America as a land of pragmatic opportunity, not spiritual seeking",
        "Buddhism as a private, meditative practice — not a community identity like Islam",
        "Western Christianity as emotionally performative and intellectually suspect",
      ],
      hearing: [
        "Family encouragement to succeed academically and honor the family name",
        "That religion in America is optional — you won't be judged for leaving it behind",
        "Older students from their country saying: 'Just focus on your studies'",
      ],
      thinkingFeeling: [
        "I am not particularly religious, but Buddhism is part of who I am",
        "I am curious about Western ideas, including religious ones",
        "I hope to find community, not just academic achievement",
      ],
      sayingDoing: [
        "Downloading meditation apps and packing a small Buddha figurine as a cultural anchor",
        "Researching Buddhist student groups but not expecting much",
        "Looking forward to the intellectual freedom of an American university",
      ],
    },
    quotes: [
      {
        text: "I didn't think of myself as religious. Buddhism was just how my grandmother prayed. I didn't expect America to make me think about God.",
        attribution: "Undergraduate student from Thailand",
      },
    ],
    ministry: {
      posture: "Mindful Welcomer",
      approaches: [
        "Lead with community and belonging — Buddhist students often feel religiously rootless abroad",
        "Acknowledge Buddhist practice with genuine respect before sharing Christian perspectives",
        "Use mindfulness and meditation as conversation bridges, not competitive alternatives",
        "Ask about their inner life and spiritual questions — they may be more open than they appear",
      ],
      pitfalls: [
        "Assuming they are not spiritually curious because they seem non-religious",
        "Dismissing their Buddhist practice as mere superstition",
        "Moving too quickly to doctrinal distinctives before friendship is formed",
      ],
    },
    bridges: [
      "Shared emphasis on inner transformation and ethical living",
      "Meditation and prayer as parallel practices pointing to the divine",
      "The concept of dukkha (suffering) as a universal human reality addressed by the gospel",
    ],
    barriers: [
      "Buddhism frames ultimate reality as impersonal — a personal God feels foreign",
      "Self-effort and merit accumulation as the path to liberation (grace is counterintuitive)",
      "Family and cultural identity tied to temple rituals and ancestor veneration",
    ],
  },
  {
    stage: "arrival",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Christian students who seem genuinely happy and other-focused — unexpected",
        "ISM offering practical help with no obvious agenda",
        "A campus culture of individualism that feels lonely after collectivist home culture",
      ],
      hearing: [
        "ISM volunteers offering friendship, not just services",
        "Christian friends talking about prayer as if God actually listens and responds",
        "The loneliness of arriving without community — more isolating than expected",
      ],
      thinkingFeeling: [
        "I feel more alone here than I expected",
        "These Christians seem different from what I assumed",
        "I am open to friendship, but cautious about religion",
      ],
      sayingDoing: [
        "Accepting ISM hospitality gratefully while observing from a safe distance",
        "Asking about Christianity with genuine curiosity when in safe relational space",
        "Maintaining private Buddhist practice (incense, meditation) in their room",
      ],
    },
    quotes: [
      {
        text: "In Thailand, I had a whole community around me. Here I was alone. The ISM people were the first ones who asked how I was really doing.",
        attribution: "Graduate student from Chiang Mai, Thailand",
      },
    ],
    ministry: {
      posture: "Generous Host (Loneliness Listener)",
      approaches: [
        "Offer consistent, low-pressure community meals and hangouts — belonging before believing",
        "Ask about their home, their family, their spiritual background with genuine curiosity",
        "Share your own spiritual journey honestly — not as a sales pitch but as a friend",
        "Use contemplative prayer practices (silence, centering, lectio divina) that resonate with meditative sensibility",
      ],
      pitfalls: [
        "Hosting events that feel like Christian subculture — loud music, unfamiliar emotional expression",
        "Treating Buddhist practice as an obstacle rather than a starting point",
        "Overwhelming them with Christian community before they've had time to breathe",
      ],
    },
    bridges: [
      "Water imagery: purification, baptism, thirst — resonates with Buddhist aesthetic sensibility",
      "The Four Noble Truths: dukkha (suffering) as a starting point for the gospel narrative",
      "Jesus as the supreme teacher who points beyond himself to the Father — unlike the Buddha",
    ],
    barriers: [
      "The concept of sin as 'crime' translates awkwardly in Buddhist frameworks",
      "A personal God who loves and judges feels foreign to the impersonal Dharma",
      "Emotional expressiveness in Christian worship can feel performative or unsophisticated",
    ],
  },
  {
    stage: "integration",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Christian friends whose lives exhibit a peace and joy that merit-seeking cannot produce",
        "Bible passages that seem to address the deepest questions of suffering and liberation",
        "The contrast between grace-based faith and the exhaustion of self-effort",
      ],
      hearing: [
        "Stories of Jesus healing, forgiving, and restoring — a different kind of power than the Buddha",
        "Friends saying 'God loves you' — a concept that is both foreign and deeply attractive",
        "Their own inner voice asking: 'What if grace is real?'",
      ],
      thinkingFeeling: [
        "The idea that I am loved unconditionally is almost too good to believe",
        "Buddhism taught me to earn my way forward — grace feels like cheating",
        "I am genuinely curious about who Jesus is, beyond what I thought I knew",
      ],
      sayingDoing: [
        "Reading the Gospels alongside Buddhist texts and comparing them",
        "Attending Discovery Bible Studies with ISM friends",
        "Asking deep questions about suffering, karma, and the cross",
      ],
    },
    quotes: [
      {
        text: "In Buddhism I was always trying to be good enough. When they told me Jesus did it for me, I didn't know whether to feel relieved or ashamed. Both, I think.",
        attribution: "Graduate student from Japan",
      },
    ],
    ministry: {
      posture: "Grace Narrator (Patient Dialogue Partner)",
      approaches: [
        "Use the concept of merit (bun in Thai, karma) as a bridge: Christ's merit credited to us",
        "Engage Buddhist philosophy seriously — show that the gospel answers its deepest questions",
        "Tell the gospel as a story of suffering and restoration rather than law and judgment",
        "Invite them into contemplative prayer experiences: silence, simplicity, presence",
      ],
      pitfalls: [
        "Rushing to a decision before the doctrinal tension has been worked through",
        "Framing grace as 'easy' — to a merit-based worldview, this is deeply offensive",
        "Neglecting the family dimension: their conversion affects their whole community back home",
      ],
    },
    bridges: [
      "The bodhisattva ideal: one who delays liberation to help others — Jesus as the ultimate fulfillment",
      "Impermanence (anicca) as a starting point for discussing eternity",
      "Sangha (community) reimagined as the body of Christ — belonging to a new, transcendent community",
    ],
    barriers: [
      "Self-effort is deeply embedded: grace requires a fundamental worldview shift",
      "Ancestor veneration and temple obligations create family pressure",
      "The cross as a violent image — sacrifice can feel primitive compared to Buddhist serenity",
    ],
  },
  {
    stage: "reentry",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Temples at the center of community and family life back home",
        "Family expecting participation in Buddhist ceremonies and ancestor rites",
        "A society where Buddhist identity is woven into national and ethnic pride",
      ],
      hearing: [
        "Family asking if they will come to the temple, make merit offerings, honor ancestors",
        "No one in their home environment who understands their faith in Jesus",
        "The silence where a faith community should be",
      ],
      thinkingFeeling: [
        "How do I honor my family without participating in practices that conflict with my faith?",
        "I feel isolated in a way I never felt in America",
        "My faith was formed in community — I need community to sustain it",
      ],
      sayingDoing: [
        "Seeking out local house churches or underground fellowships in their country",
        "Navigating family Buddhist ceremonies with sensitivity and prayer",
        "Connecting with global Buddhist-background believer networks online",
      ],
    },
    quotes: [
      {
        text: "My parents assumed I would come to the temple for Songkran. I went, but I prayed to Jesus the whole time. I don't know how long I can keep doing that alone.",
        attribution: "Graduate student from Bangkok, Thailand",
      },
    ],
    ministry: {
      posture: "Reentry Companion and Network Connector",
      approaches: [
        "Begin preparation 6 months before departure with explicit reentry curriculum",
        "Provide contacts for local house churches or Christian networks in their city",
        "Teach them how to navigate Buddhist family rituals with wisdom and grace",
        "Establish ongoing mentorship via WhatsApp or Zoom that continues post-departure",
      ],
      pitfalls: [
        "No plan for ongoing community — spiritual isolation leads to attrition",
        "Telling them to refuse all temple participation — this destroys family relationships",
        "Treating departure as graduation rather than deployment",
      ],
    },
    bridges: [
      "Prayer as the ongoing practice that sustains faith without physical community",
      "Online global networks of Buddhist-background believers for community and accountability",
      "The vision of being a 'light in the temple': witness through transformed character",
    ],
    barriers: [
      "Social fabric of Buddhist culture makes religious separation extremely costly",
      "Ancestor veneration practices create constant tension for new believers",
      "Few indigenous Christian expressions that feel culturally natural in Buddhist societies",
    ],
  },

  // ─── SECULAR ──────────────────────────────────────────────────────────────
  {
    stage: "pre-arrival",
    background: "secular",
    empathyMap: {
      seeing: [
        "America as a land of science, technology, and rational achievement",
        "Religion as a private, irrational holdover from less educated generations",
        "China, Korea, or Eastern Europe as places where faith was suppressed or irrelevant",
      ],
      hearing: [
        "Parents saying: 'Get your degree, find a good job, make us proud'",
        "Academic culture reinforcing that religion has no place in serious intellectual life",
        "Peers saying: 'Americans are surprisingly religious — just ignore it'",
      ],
      thinkingFeeling: [
        "I am here to study and advance my career, not to explore religion",
        "I am open-minded, but religion seems intellectually unsophisticated",
        "I wonder what Americans are really like — social media doesn't show the full picture",
      ],
      sayingDoing: [
        "Reading about American culture, popular brands, and campus life",
        "Connecting with students from their country who already attend the university",
        "Setting high academic and career goals for their time abroad",
      ],
    },
    quotes: [
      {
        text: "My parents worked their whole lives so I could study in America. Religion wasn't part of that plan. I came here to build a future, not find God.",
        attribution: "Undergraduate student from Shandong, China",
      },
    ],
    ministry: {
      posture: "Curious Neighbor (Intellectual Welcomer)",
      approaches: [
        "Lead with genuine interest in their field of study and career goals",
        "Build a digital presence that demonstrates intellectual credibility and global awareness",
        "Send welcome messages focused on practical needs and community — not spiritual programs",
        "Position ISM as a global friend-making community, not a religious recruitment organization",
      ],
      pitfalls: [
        "Any religious language in first contact — it triggers their anti-religion filter immediately",
        "Treating them as a mission project rather than a human being with complex goals",
        "Ignoring the pre-arrival window because it seems too early",
      ],
    },
    bridges: [
      "Shared intellectual curiosity: secular students often have deep philosophical questions",
      "Vocational ambition: ISM can serve their career goals as an entry point to friendship",
      "The credibility of Christians whose lives and intellect they genuinely respect",
    ],
    barriers: [
      "Scientific materialism as the only valid epistemology",
      "Association of religion with superstition, politics, or intellectual weakness",
      "Parental expectation that religion is irrelevant to their purpose in America",
    ],
  },
  {
    stage: "integration",
    background: "secular",
    empathyMap: {
      seeing: [
        "Western church cultures that feel confusing and culturally alien",
        "Extreme consumerism in Western society",
        "Christians who don't seem to match what they preach",
      ],
      hearing: [
        "Secular academic narratives in the classroom",
        "That science explains everything",
        "That religion is a private, irrational matter",
      ],
      thinkingFeeling: [
        "I don't belong here",
        "Will I get a job with my degree?",
        "These Christian groups seem like they have an agenda",
      ],
      sayingDoing: [
        "Attending ISM events for free food or social connection",
        "Withdrawing to their international student community",
        "Asking hard questions about faith when they feel safe",
      ],
    },
    quotes: [
      {
        text: "I asked my ISM friend why she believed. She didn't give me a brochure. She told me her story. That was the first time I took it seriously.",
        attribution: "Graduate student from South Korea",
      },
    ],
    ministry: {
      posture: "Intellectual Dialogue Partner",
      approaches: [
        "Engage their intellectual objections seriously — recommend serious apologetics (Tim Keller, C.S. Lewis)",
        "Host faith-and-science or philosophy-and-faith discussion events without a sales pitch",
        "Share personal testimony as story, not argument — narrative is more persuasive than debate",
        "Offer vocational discipleship: connecting meaning, ethics, and calling to their career",
      ],
      pitfalls: [
        "Getting stuck in theoretical debate without relational depth",
        "Soft-pedaling truth claims to avoid offense — they respect intellectual honesty",
        "Assuming their secularism means they have no spiritual hunger",
      ],
    },
    bridges: [
      "The 'reason for the hope' approach: Christianity as intellectually defensible and coherent",
      "The existential gap: secular frameworks often fail to answer questions of meaning and death",
      "Christians in their field (scientists, engineers, scholars) who model integrated faith",
    ],
    barriers: [
      "Scientism: the assumption that only empirically verifiable claims can be true",
      "Association of faith with emotional manipulation or intellectual weakness",
      "Peer pressure from secular academic culture that marginalizes religious commitment",
    ],
  },
  {
    stage: "leadership",
    background: "secular",
    empathyMap: {
      seeing: [
        "Their own transformation as the most compelling apologetic they have",
        "Secular peers from their country who are asking the same questions they once had",
        "The opportunity to be a bridge between intellectual culture and the gospel",
      ],
      hearing: [
        "ISM encouraging them to lead among their own academic and national community",
        "Stories of other secular-background believers who became key leaders in global movements",
        "The call to integrate faith and vocation — to be a Daniel in their field",
      ],
      thinkingFeeling: [
        "My transformation is evidence — I don't have to argue, I just have to live",
        "I can explain the gospel in terms my secular friends actually understand",
        "I want to go back to my country with both a degree and a mission",
      ],
      sayingDoing: [
        "Hosting faith-and-reason discussion groups for international students",
        "Sharing testimony in secular academic language with peers from their country",
        "Integrating faith into their research or professional work as a witness",
      ],
    },
    quotes: [
      {
        text: "I became a Christian and my professors thought I had lost my mind. But then they saw my research, my ethics, my peace. Now they ask questions.",
        attribution: "PhD candidate from Beijing, China",
      },
    ],
    ministry: {
      posture: "Vocational Discipler and Apologetics Equiper",
      approaches: [
        "Help them articulate their faith in the intellectual frameworks of their discipline",
        "Connect them with Christian academic networks (ASA, IVCF Graduate Fellowship, Veritas Forum)",
        "Equip them with accessible apologetics tools in their language",
        "Cast the vision: their return to their country with a PhD and a living faith is a strategic deployment",
      ],
      pitfalls: [
        "Keeping them in consumer mode — they are ready to lead and need to be released",
        "Separating faith from their academic vocation — integration is essential for them",
        "Neglecting re-entry preparation in the urgency of leadership development",
      ],
    },
    bridges: [
      "The 'Daniel Paradigm': excellence in their field as the primary witness to secular colleagues",
      "Faith-and-reason integration that honors their intellectual identity",
      "The coherence of a Christian worldview for explaining human dignity, ethics, and meaning",
    ],
    barriers: [
      "Academic culture that marginalizes public religious identity",
      "Fear that overt faith will damage their professional credibility",
      "Peers who see their conversion as intellectual regression",
    ],
  },
  {
    stage: "reentry",
    background: "secular",
    empathyMap: {
      seeing: [
        "A home country where religion is state-controlled, irrelevant, or actively suppressed",
        "Family and colleagues who associate faith with weakness or political naivety",
        "Underground or house church communities that operate at significant risk",
      ],
      hearing: [
        "Family saying: 'You went to America and became religious? What happened to you?'",
        "Colleagues questioning their intellectual credibility because of their faith",
        "The silence where a church community should be",
      ],
      thinkingFeeling: [
        "My faith feels like a secret I cannot share freely here",
        "I fear what will happen to my career if my beliefs are known",
        "But I came back with a purpose — my colleagues need what I have found",
      ],
      sayingDoing: [
        "Connecting quietly with underground house churches or registered churches",
        "Sharing faith through relationship and character, not proclamation",
        "Reading Bible and praying privately, disciplining themselves without a community structure",
      ],
    },
    quotes: [
      {
        text: "In America I had community, accountability, and a pastor who knew my name. Back home I have my phone and an old Bible. Some days that feels like enough. Most days it doesn't.",
        attribution: "Engineer returning to Shanghai, China",
      },
    ],
    ministry: {
      posture: "Strategic Deployment Coach",
      approaches: [
        "Provide connections to house church networks or verified online communities before departure",
        "Conduct a 'digital discipleship' plan: apps, podcasts, and global communities for ongoing formation",
        "Help them think through how to share faith in their professional context without unnecessary risk",
        "Establish long-term mentorship that treats their deployment as the beginning of ministry, not the end",
      ],
      pitfalls: [
        "No plan for community — secular-background believers face the highest attrition rate without it",
        "Underestimating the spiritual cost of returning to a hostile or indifferent environment",
        "Treating their departure as graduation rather than the most strategic moment of their discipleship",
      ],
    },
    bridges: [
      "The 'salt and light' vision: their professional excellence as a witness without words",
      "Global digital communities that provide accountability and belonging across borders",
      "The historic witness of underground Chinese and Russian believers as inspiring precedent",
    ],
    barriers: [
      "State surveillance and anti-religion policies in countries like China",
      "Social and professional consequences of visible religious identity",
      "Spiritual isolation without a local faith community",
    ],
  },

  // ─── NOMINAL CHRISTIAN ────────────────────────────────────────────────────
  {
    stage: "pre-arrival",
    background: "nominal",
    empathyMap: {
      seeing: [
        "America as a place where Christianity is supposedly strong — but also culturally foreign",
        "Social media showing American megachurches that look like entertainment venues",
        "A Christian identity that they carry culturally but have never examined personally",
      ],
      hearing: [
        "Family saying: 'We are Christian — don't let them change your faith'",
        "That American Christianity is different from Orthodox or Catholic traditions back home",
        "That they already have a religion and don't need another one",
      ],
      thinkingFeeling: [
        "I am already Christian — ISM is probably not for me",
        "I have never really thought about what I believe personally",
        "I wonder if faith will mean something different in America",
      ],
      sayingDoing: [
        "Listing 'Christian' on forms without much thought about what that means",
        "Assuming they will find a church in America similar to home — and often being disappointed",
        "Carrying rosary or icons as cultural symbols, not necessarily devotional practice",
      ],
    },
    quotes: [
      {
        text: "I told the ISM volunteer I was already Christian. She said 'Great! Tell me about your faith journey.' I didn't know what to say. No one had ever asked me that before.",
        attribution: "Graduate student from Romania",
      },
    ],
    ministry: {
      posture: "Patient Inquirer (Faith Journey Questioner)",
      approaches: [
        "Ask about their spiritual story rather than assuming their faith is real or nominal",
        "Honor their Christian heritage — Orthodox, Catholic, or Protestant — without dismissing it",
        "Position ISM as a community for all internationals, including those with Christian backgrounds",
        "Send welcome messages that invite exploration without implying their faith is deficient",
      ],
      pitfalls: [
        "Ignoring nominal Christian students because they 'already have faith'",
        "Assuming evangelical forms of Christianity are superior to their tradition",
        "Failing to ask the personal faith question that no one else has ever asked them",
      ],
    },
    bridges: [
      "Shared Christian vocabulary and heritage — a starting point for deeper conversation",
      "Curiosity gap: their nominal faith has never been personally examined",
      "The loneliness of arrival — even 'Christians' need community and belonging",
    ],
    barriers: [
      "Self-identified as Christian — they see no need for what ISM offers spiritually",
      "Suspicion of evangelical culture as sectarian, emotional, or anti-traditional",
      "Assumption that cultural Christianity and personal faith are the same thing",
    ],
  },
  {
    stage: "arrival",
    background: "nominal",
    empathyMap: {
      seeing: [
        "American Christians who seem radically different from the cultural Christianity back home",
        "A faith that is personal, expressive, and clearly costs people something",
        "ISM events that mix genuine community with spiritual substance",
      ],
      hearing: [
        "Christians sharing personal testimonies that are vivid and specific — not generic",
        "ISM friends saying things like 'God spoke to me' or 'I felt peace' — unfamiliar language",
        "Their own heart responding to something they've never experienced before",
      ],
      thinkingFeeling: [
        "These Christians have something I don't have, but I can't name what it is",
        "I have been calling myself Christian my whole life — but is this what it actually means?",
        "I am drawn to this community, but also unsettled by how different it feels from home",
      ],
      sayingDoing: [
        "Attending ISM events out of social need but staying because of something harder to name",
        "Asking questions about personal faith that they've never asked before",
        "Comparing the Christianity they see at ISM with the religion of their home culture",
      ],
    },
    quotes: [
      {
        text: "I have been Orthodox my whole life. But when I sat with these students and they prayed, I realized I had never prayed like that. I didn't know what I was missing.",
        attribution: "Undergraduate student from Ukraine",
      },
    ],
    ministry: {
      posture: "Faith-Awakening Companion",
      approaches: [
        "Welcome them warmly without requiring them to identify as 'not really Christian'",
        "Invite them to share their faith story and listen carefully for the gaps",
        "Expose them to vibrant, personal faith through community without pressure",
        "Ask the question: 'When did Jesus become real to you personally?' — gently and relationally",
      ],
      pitfalls: [
        "Dismissing their tradition as invalid — this shuts down conversation immediately",
        "Pressuring them to renounce their background church as a condition of community",
        "Assuming they are already disciples because they self-identify as Christian",
      ],
    },
    bridges: [
      "Shared Christian vocabulary and symbols — same tradition, different depth",
      "The contrast between cultural religion and personal faith — they can feel the difference",
      "Community belonging — they need people who actually know them, not just their country",
    ],
    barriers: [
      "Pride in their Christian identity — an implied critique feels like an attack",
      "Evangelical culture can feel emotionally foreign and theologically suspect",
      "Family loyalty to denominational or national religious tradition",
    ],
  },
  {
    stage: "integration",
    background: "nominal",
    empathyMap: {
      seeing: [
        "The contrast between their background faith and the vibrant personal faith they see at ISM",
        "Christians from their own country or culture who have also had a personal encounter with Jesus",
        "Themselves in the mirror — who are they, spiritually, really?",
      ],
      hearing: [
        "ISM friends sharing how Jesus has transformed them in personal, specific ways",
        "The invitation to personal commitment rather than inherited religion",
        "Their own growing hunger for something more real than what they grew up with",
      ],
      thinkingFeeling: [
        "I have been performing Christianity without ever really meeting Jesus",
        "If this is what real faith looks like, I want it",
        "But committing personally feels like leaving my family's tradition behind",
      ],
      sayingDoing: [
        "Attending Discovery Bible Studies or small groups consistently",
        "Praying for the first time in their own words rather than recited prayers",
        "Calling family to ask about their faith — and being surprised by the conversations",
      ],
    },
    quotes: [
      {
        text: "I had been baptized, confirmed, and married in the church. But I had never once talked to God like he could hear me. The day I tried, everything changed.",
        attribution: "Graduate student from Brazil",
      },
    ],
    ministry: {
      posture: "Re-Evangelizer (Personal Faith Catalyst)",
      approaches: [
        "Walk them through the gospel personally — don't assume they've ever heard it in a life-changing way",
        "Use discovery-style Bible engagement that leads to personal encounter rather than information transfer",
        "Honor their tradition while gently distinguishing cultural religion from personal faith",
        "Help them articulate their own testimony — the process of naming it solidifies it",
      ],
      pitfalls: [
        "Skipping the gospel because they're already 'Christian' — this is the critical mistake",
        "Creating a rupture with their home tradition unnecessarily",
        "Moving to leadership before their personal faith has been examined and solidified",
      ],
    },
    bridges: [
      "Existing Christian vocabulary as a bridge to personal encounter — they know the words, now they need the reality",
      "Testimony of others from their background who have had a personal faith awakening",
      "Prayer: teaching them to pray personally, not liturgically, as a first step toward real relationship with God",
    ],
    barriers: [
      "Inherited religious identity that has never been personally examined",
      "Defensiveness when evangelical culture seems to imply their tradition was false",
      "Family ties to denominational identity that make personal re-commitment feel like betrayal",
    ],
  },
  {
    stage: "leadership",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A unique calling: they can reach nominal Christians from their country in ways no outsider can",
        "Friends from home who have the same cultural faith background but the same spiritual emptiness",
        "Their own transformation as the most compelling testimony to their own people",
      ],
      hearing: [
        "ISM releasing them to lead among their own national and cultural community",
        "Stories of nominally Christian nations being re-evangelized by their own people",
        "The call to go home as a witness to what real faith looks like",
      ],
      thinkingFeeling: [
        "I understand my people's faith tradition from the inside — that is a gift, not a limitation",
        "I can walk alongside my friends without making them feel attacked or judged",
        "I want to go home and show my family what real faith looks like",
      ],
      sayingDoing: [
        "Leading small groups for international students from their own country or denomination",
        "Contextualizing the personal faith message within their liturgical tradition",
        "Mentoring younger students from their background who are on the same journey",
      ],
    },
    quotes: [
      {
        text: "I can say to my Orthodox friends: I am not asking you to leave your tradition. I am asking you to actually meet the Jesus you've been kneeling before all your life.",
        attribution: "Graduate student from Serbia",
      },
    ],
    ministry: {
      posture: "Insider Evangelist (Cultural Bridge Leader)",
      approaches: [
        "Release them to lead within their cultural and denominational context — don't extract them into evangelical culture",
        "Help them develop a personal testimony that honors their heritage while sharing their transformation",
        "Connect them with revival movements within their own tradition (Orthodox renewal, Catholic charismatic, etc.)",
        "Equip them with culturally appropriate discipleship tools for their home context",
      ],
      pitfalls: [
        "Requiring them to adopt evangelical forms before they can lead",
        "Neglecting re-entry preparation because they are from a 'Christian' country",
        "Assuming nominal Christian nations don't need re-evangelization — many do urgently",
      ],
    },
    bridges: [
      "Insider credibility: they speak the language of their tradition and cannot be dismissed as outsiders",
      "The power of personal transformation within a shared cultural framework",
      "Re-evangelization movements within historically Christian traditions that they can connect with",
    ],
    barriers: [
      "Denominational gatekeeping that resists personal evangelical faith within traditional structures",
      "Family pressure to maintain inherited religious identity without rocking the boat",
      "Home country churches that may be institutionally resistant to renewal or personal faith emphasis",
    ],
  },
];
