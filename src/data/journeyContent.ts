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
    stage: "integration",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Trusted Christian friendships that feel relational rather than transactional",
        "Parallels between devotion to Bhagwan and personal devotion to Jesus",
        "The tension between inherited religious identity and emerging spiritual questions",
      ],
      hearing: [
        "Family reminders to stay faithful to Hindu practice and avoid religious mixing",
        "Christian friends sharing stories of grace, forgiveness, and a personal God",
        "Peers saying all religions are basically the same, so no change is needed",
      ],
      thinkingFeeling: [
        "Jesus feels deeply attractive, but following him might cost me family trust",
        "Can I follow Christ without rejecting my culture and community?",
        "I am curious whether grace can answer what devotion alone cannot",
      ],
      sayingDoing: [
        "Joining discovery-style Bible conversations while keeping questions private",
        "Comparing Gospel narratives with Hindu philosophical categories",
        "Testing Christian community through daily life, meals, and vulnerability",
      ],
    },
    quotes: [
      {
        text: "I realized I was doing rituals out of duty, but with Jesus I felt invited into relationship. That both drew me in and scared me.",
        attribution: "Master's student from Karnataka, India",
      },
    ],
    ministry: {
      posture: "Patient Guide (Devotional Bridge Builder)",
      approaches: [
        "Frame discipleship through devotion: who deserves ultimate bhakti and why",
        "Use story-rich Scripture engagement rather than abstract doctrinal argument first",
        "Affirm cultural honor while distinguishing culture from ultimate allegiance",
        "Create safe spaces for hard questions about family pressure, caste, and identity",
      ],
      pitfalls: [
        "Forcing false choices like 'Jesus or Indian culture' too early",
        "Treating Hindu thought as simplistic instead of engaging it seriously",
        "Pressuring public decisions before private conviction and support are in place",
      ],
    },
    bridges: [
      "Bhakti devotion as a relational framework for understanding love for Christ",
      "Avatar language as a bridge into incarnation conversations",
      "Community-centered spirituality that resonates with Christian fellowship",
    ],
    barriers: [
      "Family fear that conversion equals cultural betrayal",
      "Pluralism that dissolves Jesus' uniqueness into a generic spiritual path",
      "Concern that church life requires adopting Western forms and social separation",
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
    stage: "leadership",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Younger students from Buddhist backgrounds asking the same suffering-and-meaning questions they once asked",
        "How gentle, embodied Christian community can feel like 'sangha with grace'",
        "Open doors to serve through hospitality, listening, and contemplative Bible practice",
      ],
      hearing: [
        "ISM leaders saying: 'You can lead in your own cultural voice'",
        "Friends saying their peace and humility feel authentic, not performative",
        "The Spirit's invitation to disciple others without abandoning cultural honor",
      ],
      thinkingFeeling: [
        "I do not need to argue loudly to lead faithfully",
        "I can explain Jesus in ways that respect Buddhist language and concerns",
        "Leadership feels weighty, but I am no longer carrying it by self-effort alone",
      ],
      sayingDoing: [
        "Facilitating Discovery Bible Studies with Buddhist-background peers",
        "Sharing testimony through themes of suffering, grace, and true peace",
        "Mentoring newer believers on how to honor family while following Jesus",
      ],
    },
    quotes: [
      {
        text: "I used to think leadership meant having all the answers. Now I mostly ask better questions and point people to Jesus.",
        attribution: "Graduate student from Taiwan",
      },
    ],
    ministry: {
      posture: "Gentle Mobilizer (Contextual Disciple-Maker)",
      approaches: [
        "Empower them to lead with Buddhist-cultural humility, patience, and careful speech",
        "Train them to frame the gospel through suffering, compassion, and grace rather than debate-first apologetics",
        "Help them build simple, reproducible discipleship rhythms: Scripture, prayer, obedience, sharing",
        "Connect them with Buddhist-background believer mentors from similar cultures",
      ],
      pitfalls: [
        "Pushing confrontational evangelism styles that violate their cultural instincts",
        "Equating spiritual maturity with Western ministry personality traits",
        "Skipping family-honor discipleship as they begin leading others",
      ],
    },
    bridges: [
      "Buddhist respect for disciplined practice can support steady discipleship rhythms",
      "Compassion and presence as credible witness in high-stress campus environments",
      "Insider language around suffering and peace that lowers defensiveness",
    ],
    barriers: [
      "Fear of shaming family if leadership appears as rejection of tradition",
      "Internal pressure to perform leadership perfectly through self-effort",
      "Limited visible role models of culturally rooted Buddhist-background Christian leaders",
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
    stage: "arrival",
    background: "secular",
    empathyMap: {
      seeing: [
        "Campus chaos, administrative pressure, and immediate survival needs",
        "Friendly Christians offering practical help without forcing religious conversation",
        "Social groups competing for attention during orientation",
      ],
      hearing: [
        "Parents repeating that grades and career outcomes are the only priority",
        "Peer skepticism toward religious groups as manipulative or anti-science",
        "Invitations to meals and events that feel unexpectedly genuine",
      ],
      thinkingFeeling: [
        "I don't have time for religion, but I do need trustworthy people",
        "These Christians seem kinder than I expected; I still keep my guard up",
        "Loneliness is stronger than I planned for in the first few weeks",
      ],
      sayingDoing: [
        "Accepting practical support (rides, furniture, housing help) while staying cautious",
        "Prioritizing orientation tasks, class setup, and visa compliance",
        "Building a social circle mostly around academic and national networks",
      ],
    },
    quotes: [
      {
        text: "I came for my degree, not faith. But when I got sick, the ISM volunteer brought soup and medicine. That made me rethink my assumptions.",
        attribution: "PhD student from Beijing, China",
      },
    ],
    ministry: {
      posture: "Credible Friend (Practical Trust Builder)",
      approaches: [
        "Lead with concrete service: airport pickup, setup support, and local navigation help",
        "Ask thoughtful questions about their field and goals to build intellectual respect",
        "Create low-pressure community touchpoints where belonging precedes belief",
        "Model integrity and consistency so faith is seen before it is explained",
      ],
      pitfalls: [
        "Opening with debate before trust and relational credibility are established",
        "Over-promising support and then disappearing after orientation season",
        "Using service as hidden leverage for immediate spiritual decisions",
      ],
    },
    bridges: [
      "Practical love that challenges stereotypes about religious people",
      "Respectful dialogue that treats doubt and questions as legitimate",
      "Vocational conversations linking purpose, ethics, and identity",
    ],
    barriers: [
      "Suspicion that religion is anti-intellectual or socially controlling",
      "Extreme time pressure and stress during transition period",
      "Fear of being socially captured by groups perceived as ideological",
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
  {
    stage: "reentry",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A home church context where Christianity is culturally expected but often spiritually routine",
        "Family and friends who assume they are the same person they were before studying abroad",
        "Opportunities to serve inside familiar traditions that now feel newly meaningful",
      ],
      hearing: [
        "Relatives saying: 'You're back, now just settle into normal life again'",
        "Church language they have heard for years, now landing with deeper personal conviction",
        "A quiet call to re-evangelize with humility, not superiority",
      ],
      thinkingFeeling: [
        "How do I share real faith without sounding like I am attacking my own tradition?",
        "I belong here culturally, but I cannot go back to performative religion",
        "God may have sent me home for renewal, not comfort",
      ],
      sayingDoing: [
        "Reconnecting with local parish/church leaders and serving consistently",
        "Starting small discipleship conversations with friends who feel spiritually numb",
        "Sharing testimony in language that honors tradition while inviting personal response",
      ],
    },
    quotes: [
      {
        text: "Back home everyone said, 'Of course you're Christian.' For the first time in my life, I answered, 'Yes, and now I actually know Jesus.'",
        attribution: "Graduate student from Romania",
      },
    ],
    ministry: {
      posture: "Reentry Renewal Coach",
      approaches: [
        "Build a concrete 6-12 month reentry plan before departure, including church, mentors, and mission goals",
        "Coach them to speak as insiders who love their tradition, not critics standing outside it",
        "Prepare them for spiritual drift by setting accountable rhythms for Scripture, prayer, and community",
        "Connect them with renewal-minded leaders within their denomination or network",
      ],
      pitfalls: [
        "Treating return to a 'Christian country' as spiritually low-risk",
        "Allowing nostalgia for home culture to replace intentional mission",
        "Framing renewal in ways that dishonor clergy, family, or historic practices",
      ],
    },
    bridges: [
      "Shared Christian language and symbols can become pathways to deeper personal faith",
      "Insider trust: they can ask hard spiritual questions without being dismissed as outsiders",
      "Historic liturgy and sacramental life can be re-engaged with renewed devotion",
    ],
    barriers: [
      "Cultural Christianity that resists personal transformation and accountability",
      "Social pressure to keep faith private, routine, and non-disruptive",
      "Institutional fatigue or cynicism in churches that have seen little discipleship renewal",
    ],
  },

  // ─── ATTRITION: INVISIBLE YEARS ─────────────────────────────────────────────
  {
    stage: "invisible-years",
    background: "muslim",
    empathyMap: {
      seeing: [
        "A campus with thousands of students but no one who knows their name beyond class",
        "Churches nearby that never once reached out or acknowledged their existence",
        "Fellow Muslim students forming tight-knit circles that become their entire social world",
      ],
      hearing: [
        "Only their family back home and the MSA community on campus",
        "Nothing from Christians — no invitation, no greeting, no presence",
        "Confirmation from peers that Americans are friendly but superficial",
      ],
      thinkingFeeling: [
        "Christians clearly don't care about people like me — they are consumed with their own lives",
        "I came to America expecting to meet the people of the Book, but I never did",
        "My faith is stronger now because I had to hold onto it alone in a foreign land",
      ],
      sayingDoing: [
        "Graduating with deep technical knowledge and zero meaningful Christian friendships",
        "Returning home with a confirmed narrative that Christianity is culturally irrelevant",
        "Telling family, 'No one tried to convert me — they didn't even notice me'",
      ],
    },
    quotes: [
      {
        text: "Four years in America. Not one Christian invited me into their home. I thought the People of the Book would at least be curious about us.",
        attribution: "Graduate student from Jordan",
      },
    ],
    ministry: {
      posture: "Proactive Seeker (Initiator of First Contact)",
      approaches: [
        "Build systematic outreach to every incoming international student — not just those who show up at events",
        "Partner with university international offices to get welcome access during orientation week",
        "Train church members to adopt specific students for ongoing friendship, not one-time hospitality",
        "Create culturally appropriate gathering spaces where Muslim students feel honored, not targeted",
      ],
      pitfalls: [
        "Assuming Muslim students will come to you — they are waiting to be found",
        "Relying solely on large events that feel intimidating or culturally alien",
        "Treating ISM as a program rather than a relational posture of the whole church",
      ],
    },
    bridges: [
      "Islamic expectation that People of the Book should be hospitable and spiritually serious",
      "The student's unmet curiosity about authentic Christian faith and practice",
      "Shared emphasis on community and belonging — the very thing they were denied",
    ],
    barriers: [
      "Years of invisibility have confirmed the narrative that Christians are indifferent",
      "The MSA community met every relational need, making outside contact unnecessary",
      "No negative experience to address — just a profound absence of any experience at all",
    ],
  },
  {
    stage: "invisible-years",
    background: "hindu",
    empathyMap: {
      seeing: [
        "A thriving Indian student community that provides all the social belonging they need",
        "Hindu temple visits and Diwali celebrations that anchor their identity far from home",
        "American Christians who seem culturally distant and uninterested in their world",
      ],
      hearing: [
        "Family checking in regularly, reinforcing cultural and religious expectations",
        "Indian professors and peers who navigated America without changing their faith",
        "Nothing from the Christian community — not a word, not an invitation",
      ],
      thinkingFeeling: [
        "America confirmed what I already knew — Hinduism is resilient and self-sufficient",
        "Christians never asked about my beliefs, so they must not care about spiritual truth",
        "I fulfilled my dharma: I got my degree and stayed true to my family",
      ],
      sayingDoing: [
        "Returning home with a reinforced Hindu identity and no Christian reference points",
        "Describing America as professionally excellent but spiritually empty",
        "Continuing the same puja routines they brought from home, unchanged by four years abroad",
      ],
    },
    quotes: [
      {
        text: "I lived next to a church for three years. No one ever knocked on my door. In India, a neighbor would have brought sweets on the first day.",
        attribution: "PhD student from Hyderabad, India",
      },
    ],
    ministry: {
      posture: "Cultural Bridge-Builder (Proactive Neighbor)",
      approaches: [
        "Engage Indian student communities during cultural celebrations like Diwali, Holi, and Pongal",
        "Train Indian-background Christians to serve as cultural insiders who can build trust naturally",
        "Create spaces for philosophical dialogue — Hindu students respect intellectual depth",
        "Establish consistent, long-term friendship pairs rather than sporadic event invitations",
      ],
      pitfalls: [
        "Ignoring the Indian student community because they seem self-sufficient and 'fine'",
        "Approaching Hindus with surface-level cultural knowledge that feels patronizing",
        "Failing to engage the intellectual rigor that Hindu philosophical tradition demands",
      ],
    },
    bridges: [
      "Hindu culture of hospitality and neighborliness — they expected it and never received it",
      "Deep philosophical tradition that is hungry for genuine spiritual dialogue",
      "Bhakti devotion as a longing for personal relationship with the divine — which Christ fulfills",
    ],
    barriers: [
      "Self-contained Indian community that meets every social and spiritual need on campus",
      "Colonial history that frames Christian outreach as cultural imperialism",
      "The assumption that Hinduism's inclusivism already contains everything Christianity offers",
    ],
  },
  {
    stage: "invisible-years",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Meditation and mindfulness trends in America that borrow from Buddhism but miss its depth",
        "A campus culture obsessed with achievement and consumption — the opposite of the Middle Way",
        "No Christians who seem interested in understanding suffering, impermanence, or the human condition",
      ],
      hearing: [
        "Family encouraging them to stay focused on studies and return with honor",
        "Silence from the Christian community — no outreach, no curiosity, no presence",
        "American peers who treat Buddhism as aesthetic or trendy, not as a serious path",
      ],
      thinkingFeeling: [
        "If this is a Christian country, why does everyone seem so restless and unsatisfied?",
        "My meditation practice has deepened in solitude — I don't need their religion",
        "I am invisible to them, and perhaps that is fine — attachment to recognition is suffering",
      ],
      sayingDoing: [
        "Maintaining a private meditation practice throughout their entire time on campus",
        "Graduating and returning home without a single deep conversation about faith with a Christian",
        "Telling family that Americans are kind but spiritually shallow",
      ],
    },
    quotes: [
      {
        text: "Americans talk about mindfulness like it's a productivity hack. No one asked me what the Buddha actually taught about suffering. I would have told them.",
        attribution: "Master's student from Thailand",
      },
    ],
    ministry: {
      posture: "Contemplative Companion (Presence Before Program)",
      approaches: [
        "Create spaces for interfaith dialogue on suffering, meaning, and the human condition",
        "Train staff to understand the Four Noble Truths and the Eightfold Path before engaging",
        "Offer quiet, reflective community experiences — not loud, high-energy events",
        "Connect through shared meals and unhurried conversation, respecting the Buddhist value of stillness",
      ],
      pitfalls: [
        "Assuming Buddhist students are passive or uninterested in spiritual conversation",
        "Treating Buddhism as exotic rather than engaging it as a serious intellectual tradition",
        "Leading with proclamation when Buddhist culture values listening and observation first",
      ],
    },
    bridges: [
      "Shared concern with suffering and the brokenness of the human condition",
      "The contemplative Christian tradition (silence, prayer, monasticism) resonates deeply",
      "Jesus's teachings on detachment from wealth and status echo Buddhist values",
    ],
    barriers: [
      "Cultural quietness mistaken for disinterest — they were waiting to be asked",
      "Western Christianity's activist, extroverted style feels alien to Buddhist sensibilities",
      "Years of invisibility confirmed that Christians lack the spiritual depth Buddhism offers",
    ],
  },
  {
    stage: "invisible-years",
    background: "secular",
    empathyMap: {
      seeing: [
        "A campus culture that already aligns with their secular worldview — no friction, no questions",
        "Christians on campus who seem anti-intellectual or politically partisan",
        "Academic success as the only metric that matters — they came for a degree, not a community",
      ],
      hearing: [
        "Professors and peers who share their rationalist assumptions about religion",
        "Nothing from Christians that would challenge their intellectual framework",
        "Family celebrating their academic achievements, reinforcing the success narrative",
      ],
      thinkingFeeling: [
        "Religion is for people who need emotional support — I have science and ambition",
        "I never needed God in my home country, and I certainly don't need one here",
        "If Christians had something intelligent to say, they would have said it by now",
      ],
      sayingDoing: [
        "Graduating with excellent credentials and a fully intact secular framework",
        "Returning home with zero curiosity about Christianity — it never registered as relevant",
        "Building a career narrative where spiritual questions have no place",
      ],
    },
    quotes: [
      {
        text: "No one ever made me think Christianity was intellectually serious. The few Christians I met just talked about feelings. I needed reasons.",
        attribution: "PhD student from Beijing",
      },
    ],
    ministry: {
      posture: "Intellectual Provocateur (Respectful Challenger)",
      approaches: [
        "Host faculty-led lectures and discussions on science, philosophy, and faith that meet their intellectual standards",
        "Place Christian scholars and professionals in spaces where secular students already gather",
        "Create reading groups around thinkers like C.S. Lewis, Tim Keller, or Alvin Plantinga",
        "Build one-on-one friendships rooted in genuine intellectual curiosity, not agenda",
      ],
      pitfalls: [
        "Assuming secular students are hostile to faith — most are simply indifferent",
        "Leading with emotion or experience when they need reason and evidence first",
        "Waiting for them to come to you — they have no reason to seek out Christians",
      ],
    },
    bridges: [
      "Genuine intellectual curiosity — they respect rigorous thinking about ultimate questions",
      "Existential questions that emerge during seasons of stress, loneliness, or failure",
      "The dissatisfaction of pure achievement — success without meaning is its own kind of suffering",
    ],
    barriers: [
      "No felt need for faith — their worldview functions without it",
      "Christianity associated with anti-intellectualism and political agendas",
      "Complete invisibility to the church confirmed that religion is culturally irrelevant",
    ],
  },
  {
    stage: "invisible-years",
    background: "nominal",
    empathyMap: {
      seeing: [
        "American churches that look familiar but feel culturally alien",
        "Christmas and Easter as cultural events they recognize but don't connect to personally",
        "No one who recognizes that their 'Christianity' is cultural identity, not personal faith",
      ],
      hearing: [
        "Family asking if they attend church — meaning 'Are you still one of us?'",
        "Nothing from local churches that bridges the gap between their nominal faith and genuine discipleship",
        "American Christians using language ('personal relationship with Jesus') that sounds foreign",
      ],
      thinkingFeeling: [
        "I'm already Christian — why would they reach out to me? I'm not their mission field",
        "Church here feels strange and emotional — I miss the rituals and formality of home",
        "Maybe Christianity is just culture, not truth — everyone here seems to assume I'm fine",
      ],
      sayingDoing: [
        "Checking 'Christian' on forms but never attending a church or small group",
        "Graduating without anyone recognizing the gap between their cultural faith and personal conviction",
        "Returning home with faith unchanged — still nominal, still unexamined",
      ],
    },
    quotes: [
      {
        text: "I told them I was Orthodox. They said, 'Oh great, so you're already a believer!' and moved on. No one asked what I actually believed.",
        attribution: "Undergraduate from Ethiopia",
      },
    ],
    ministry: {
      posture: "Gentle Awakener (The One Who Sees the Gap)",
      approaches: [
        "Train ISM staff to recognize nominal Christians as a distinct and often-overlooked mission field",
        "Ask deeper questions: 'What does your faith mean to you personally?' rather than accepting labels",
        "Invite them into Bible studies that go beyond cultural familiarity to personal encounter",
        "Pair them with mature believers who can model what personal, living faith looks like",
      ],
      pitfalls: [
        "Assuming the label 'Christian' means they have a personal, living faith",
        "Skipping them in outreach because they don't seem like the 'target audience'",
        "Offending them by implying their tradition is inferior or insufficient",
      ],
    },
    bridges: [
      "Shared Christian vocabulary and cultural touchpoints that can become doorways to deeper faith",
      "Familiarity with Scripture, liturgy, and church life — they know the forms, not yet the power",
      "Loneliness abroad may crack open the shell of cultural religion and expose genuine spiritual hunger",
    ],
    barriers: [
      "The label 'Christian' makes them invisible to outreach — they fall through every net",
      "Cultural Christianity provides enough identity and comfort to prevent deeper seeking",
      "No one challenged the gap between inherited religion and personal conviction",
    ],
  },

  // ─── ATTRITION: DRIFT ───────────────────────────────────────────────────────
  {
    stage: "drift",
    background: "muslim",
    empathyMap: {
      seeing: [
        "ISM friends who were once warm but have moved on to the next cohort of new students",
        "The MSA community that never stopped being available and consistent",
        "A growing distance between their initial curiosity about Jesus and their daily reality",
      ],
      hearing: [
        "Family back home relieved that the 'Christian phase' seems to be passing",
        "MSA peers welcoming them back without judgment or questions",
        "Silence from ISM volunteers who used to text weekly but now rarely reach out",
      ],
      thinkingFeeling: [
        "Maybe my curiosity about Isa was just culture shock — not the Holy Spirit",
        "The Christians were kind at first, but I was a project, not a person",
        "I feel relieved going back to what's familiar, but something still nags at me",
      ],
      sayingDoing: [
        "Gradually declining ISM invitations while re-engaging fully with the MSA",
        "Deleting Bible apps and Christian bookmarks from their phone",
        "Avoiding the one ISM friend who still checks in — it feels awkward now",
      ],
    },
    quotes: [
      {
        text: "They were so excited about me in the first semester. By the second year, I was just another face. The MSA never stopped showing up.",
        attribution: "Undergraduate from Morocco",
      },
    ],
    ministry: {
      posture: "Persistent Shepherd (Long-Haul Friend)",
      approaches: [
        "Build a 'second-year strategy' — intentional follow-up for students past the novelty window",
        "Assign long-term friendship pairs that outlast the initial welcome season",
        "Keep inviting without pressure — consistency communicates genuine care, not obligation",
        "Address the 'project vs. person' dynamic openly and honestly in team training",
      ],
      pitfalls: [
        "Pouring all energy into new arrivals while second-year students quietly disappear",
        "Assuming that a student who stops coming has made a final decision",
        "Treating their return to the MSA as a failure rather than a natural safety response",
      ],
    },
    bridges: [
      "The residual curiosity about Isa that still lingers beneath the surface",
      "Genuine friendships formed during the initial welcome season that can be rekindled",
      "The student's honest experience of Christian love — even if it faded, it was real",
    ],
    barriers: [
      "The MSA community's consistent presence makes Christian inconsistency painfully obvious",
      "Family relief reinforces the narrative that the 'Christian experiment' is over",
      "The pain of feeling like a project creates a protective wall against re-engagement",
    ],
  },
  {
    stage: "drift",
    background: "hindu",
    empathyMap: {
      seeing: [
        "ISM community that felt exciting at first but lacks the cultural depth of Indian fellowship",
        "Hindu Student Council events that celebrate their identity without asking them to question it",
        "Christian worship styles that feel increasingly foreign compared to familiar puja and bhajan",
      ],
      hearing: [
        "Parents asking pointed questions about their new 'American friends'",
        "Indian peers teasing them about spending time with 'church people'",
        "Less and less from ISM as the semester progresses and attention shifts",
      ],
      thinkingFeeling: [
        "The philosophical questions were interesting, but my Hindu framework answers them too",
        "I don't want to be the Indian student who 'became Christian' — the social cost is too high",
        "Maybe I can appreciate Jesus as an avatar without leaving Hinduism behind",
      ],
      sayingDoing: [
        "Re-engaging with Hindu festivals and temple visits after a period of exploration",
        "Framing their ISM season as 'cultural exchange' rather than spiritual seeking",
        "Gradually ghosting Bible study while maintaining surface-level ISM friendships",
      ],
    },
    quotes: [
      {
        text: "I enjoyed the conversations about God and meaning. But when I imagined telling my parents I was exploring Christianity, the fear was greater than the curiosity.",
        attribution: "Master's student from Pune, India",
      },
    ],
    ministry: {
      posture: "Patient Gardener (Seasons of Seeking)",
      approaches: [
        "Normalize long spiritual journeys — Hindu seekers may take years to move toward Christ",
        "Maintain friendship even when spiritual conversations decrease — presence without agenda",
        "Engage with Hindu philosophical frameworks rather than dismissing them as competitors",
        "Connect them with Indian-background believers who understand the cultural cost of faith",
      ],
      pitfalls: [
        "Interpreting their return to Hinduism as rejection rather than a stage of processing",
        "Applying Western conversion timelines to a culture that sees spiritual journey as lifelong",
        "Abandoning friendship because they are 'no longer interested' — they are watching from a distance",
      ],
    },
    bridges: [
      "The Bhakti tradition's longing for personal relationship with the divine — a thread Christ fulfills",
      "Philosophical conversations that honored their tradition and planted seeds of genuine inquiry",
      "Friendships that persisted beyond the spiritual exploration phase",
    ],
    barriers: [
      "The social cost of conversion in Hindu culture is a powerful gravity pulling them back",
      "Hindu inclusivism ('all paths lead to God') absorbs Jesus without requiring transformation",
      "ISM's fading attention confirmed that the relationship was conditional on spiritual progress",
    ],
  },
  {
    stage: "drift",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "ISM gatherings that felt warm at first but now feel emotionally demanding and loud",
        "Buddhist meditation groups on campus that offer peace without relational pressure",
        "Christians who seem to need constant affirmation and emotional intensity",
      ],
      hearing: [
        "Family gently reminding them of Buddhist values: detachment, equanimity, self-sufficiency",
        "Less and less from ISM friends who have moved on to newer students",
        "Their own inner voice returning to Buddhist practice as a source of calm",
      ],
      thinkingFeeling: [
        "Christianity seems to require so much emotional energy — Buddhism offers stillness",
        "I appreciated the kindness, but I was never going to become one of them",
        "The answers I need are within, not in a community that demands external participation",
      ],
      sayingDoing: [
        "Returning to daily meditation practice and quietly withdrawing from ISM activities",
        "Politely declining invitations without explaining why — conflict avoidance is deeply cultural",
        "Processing their Christian experience through a Buddhist lens: 'It was one path among many'",
      ],
    },
    quotes: [
      {
        text: "They were very kind, but it was exhausting. Always talking, always sharing, always needing to express what you feel. I just needed silence.",
        attribution: "PhD student from Myanmar",
      },
    ],
    ministry: {
      posture: "Quiet Companion (Ministry of Presence)",
      approaches: [
        "Offer contemplative Christian practices — silence, Lectio Divina, prayer walks — alongside active programming",
        "Respect their need for solitude without interpreting withdrawal as rejection",
        "Maintain gentle, low-pressure contact — a brief message, a shared article, a walking invitation",
        "Learn to sit in silence with them — it is the relational language they trust most",
      ],
      pitfalls: [
        "Overwhelming introverted Buddhist students with extroverted ministry culture",
        "Interpreting polite withdrawal as a final decision — they are too polite to say 'stop'",
        "Failing to create contemplative spaces that honor their spiritual temperament",
      ],
    },
    bridges: [
      "Contemplative Christian traditions that parallel Buddhist meditation and silence",
      "Genuine experiences of peace and kindness during their initial ISM engagement",
      "The unresolved question of suffering and whether the Buddhist answer is truly sufficient",
    ],
    barriers: [
      "ISM's activist, verbal ministry style clashed with their contemplative orientation",
      "Buddhist self-sufficiency makes external spiritual community feel unnecessary",
      "Cultural politeness masked their disengagement — no one recognized the drift until it was complete",
    ],
  },
  {
    stage: "drift",
    background: "secular",
    empathyMap: {
      seeing: [
        "ISM events that increasingly feel like a funnel toward religious commitment",
        "Academic peers who share their rationalist worldview and ask no spiritual questions",
        "Christians who seem emotionally dependent on faith in ways that feel intellectually weak",
      ],
      hearing: [
        "Professors and mentors reinforcing a secular, empiricist framework",
        "ISM invitations that have shifted from 'let's hang out' to 'come to Bible study'",
        "Their own internal voice saying, 'I gave it a fair shot — it's not for me'",
      ],
      thinkingFeeling: [
        "The community was nice, but the intellectual foundation isn't there",
        "I don't want to pretend to believe something just to keep friends",
        "Religion might help some people, but I've outgrown the need for it",
      ],
      sayingDoing: [
        "Declining ISM invitations with increasingly vague excuses about being 'too busy'",
        "Replacing ISM community with academic colleagues and professional networks",
        "Filing their Christian exploration under 'cultural experience' — interesting but not compelling",
      ],
    },
    quotes: [
      {
        text: "I liked the people, genuinely. But eventually every conversation came back to God. I needed friendships without an agenda, and I found them elsewhere.",
        attribution: "Master's student from Berlin, Germany",
      },
    ],
    ministry: {
      posture: "Honest Friend (Friendship Without Ultimatum)",
      approaches: [
        "Maintain genuine friendships that do not require spiritual progress as the price of admission",
        "Engage their intellectual objections seriously — recommend books, host debates, bring in scholars",
        "Separate social belonging from spiritual programming — let them be in community without pressure",
        "Be honest about your own doubts and questions — intellectual authenticity earns their respect",
      ],
      pitfalls: [
        "Escalating spiritual pressure when you sense them pulling away",
        "Treating friendship as instrumental — they will feel it instantly and leave",
        "Giving up on intellectual engagement because 'they've already decided'",
      ],
    },
    bridges: [
      "Intellectual honesty and willingness to wrestle with hard questions together",
      "Existential dissatisfaction that secular success eventually surfaces",
      "The memory of genuine Christian friendship that transcended the religious agenda",
    ],
    barriers: [
      "The shift from friendship to evangelistic pressure confirmed their suspicion of hidden agendas",
      "Academic and professional circles provide community without spiritual demands",
      "Secular identity is reinforced by every environment except ISM — the gravitational pull is overwhelming",
    ],
  },
  {
    stage: "drift",
    background: "nominal",
    empathyMap: {
      seeing: [
        "ISM friends who treat Christianity with an intensity that feels foreign and uncomfortable",
        "Other nominal Christians who live comfortably without 'getting serious' about faith",
        "A gap between the vibrant faith ISM models and the comfortable religion they know",
      ],
      hearing: [
        "Family saying, 'Of course you believe — you were baptized as a baby'",
        "ISM language about 'personal relationship with Jesus' that makes them uneasy",
        "Less follow-up from ISM as they show less interest in deeper engagement",
      ],
      thinkingFeeling: [
        "I don't need to be 'born again' — I was born into the faith. That should be enough.",
        "These people are earnest, but their version of Christianity feels American, not mine",
        "Maybe I'll come back to this later in life, when I'm older and more settled",
      ],
      sayingDoing: [
        "Attending church occasionally out of habit but avoiding small groups and Bible studies",
        "Telling ISM friends they're 'already Christian' to deflect deeper questions",
        "Returning to cultural Christian rhythms — holidays, icons, family traditions — without personal devotion",
      ],
    },
    quotes: [
      {
        text: "They kept asking me to share my testimony. I didn't have one — I just grew up in church. That apparently wasn't good enough.",
        attribution: "Undergraduate from South Korea",
      },
    ],
    ministry: {
      posture: "Gentle Deepener (Honoring Roots While Inviting Growth)",
      approaches: [
        "Affirm their tradition genuinely before inviting them to explore personal faith within it",
        "Use their existing Christian vocabulary as a bridge to deeper conversation, not a barrier",
        "Share stories of believers from liturgical/traditional backgrounds who found personal faith without leaving their tradition",
        "Invite them to prayer, service, and Scripture engagement rather than theological arguments",
      ],
      pitfalls: [
        "Implying their baptism, confirmation, or church tradition is insufficient or invalid",
        "Using evangelical jargon that alienates rather than invites",
        "Giving up when they say 'I'm already Christian' — that is the beginning of the conversation, not the end",
      ],
    },
    bridges: [
      "Shared Christian identity and vocabulary that can be deepened, not replaced",
      "The sacramental and liturgical richness of their tradition as a foundation for personal encounter",
      "Moments of loneliness or crisis when cultural faith proves insufficient and personal faith becomes necessary",
    ],
    barriers: [
      "Comfortable cultural Christianity that provides identity without demanding transformation",
      "ISM's evangelical style felt like a critique of their heritage faith rather than an invitation to grow",
      "The assumption that nominal Christians don't need ministry — they were never truly pursued",
    ],
  },

  // ─── ATTRITION: SILENT EXIT ─────────────────────────────────────────────────
  {
    stage: "silent-exit",
    background: "muslim",
    empathyMap: {
      seeing: [
        "A departure date approaching with no plan for how to live as a follower of Isa back home",
        "Other MBBs who returned home and went silent — a warning of what may come",
        "ISM friends planning a farewell party but not a reentry strategy",
      ],
      hearing: [
        "Family excited about their return, expecting them to resume full Muslim life",
        "ISM saying goodbye with warmth but without concrete next steps",
        "Their own inner fear: 'Who will I be when I land?'",
      ],
      thinkingFeeling: [
        "I believe in Isa, but I have no idea how to follow him in my home country",
        "If I tell my family, I could lose everything — maybe I should keep it hidden",
        "The Americans taught me about Jesus but not about how to survive as a believer in my world",
      ],
      sayingDoing: [
        "Packing bags while silently terrified about re-entering a Muslim-majority context as a secret believer",
        "Saying thank you to ISM friends without voicing the fear they carry",
        "Searching online for underground churches or MBB communities back home and finding little",
      ],
    },
    quotes: [
      {
        text: "They hugged me at the airport and said, 'We'll pray for you.' But no one asked, 'Do you have a single person to meet with when you land?'",
        attribution: "Graduate student from Iran",
      },
    ],
    ministry: {
      posture: "Deployment Strategist (Reentry Architect)",
      approaches: [
        "Begin reentry planning 6-12 months before departure — not at the farewell party",
        "Connect them with underground or house church networks in their home country through trusted channels",
        "Train them in security-conscious faith practices: encrypted Bible apps, safe communication, wisdom about disclosure",
        "Establish ongoing digital mentorship that continues across borders and time zones",
      ],
      pitfalls: [
        "Treating departure as graduation rather than deployment into the hardest mission field they'll ever face",
        "Failing to prepare them for the specific dangers MBBs face: family honor violence, legal consequences, social death",
        "Assuming they can figure it out on their own because their faith seemed strong on campus",
      ],
    },
    bridges: [
      "The deep conviction about Isa that survived years of exploration and now needs a structure to endure",
      "Digital technology that can sustain mentorship and community across continents",
      "The student's existing cultural intelligence — they know how to navigate their context if trained",
    ],
    barriers: [
      "No prepared network of believers in their home country to receive and support them",
      "ISM's relational investment ends at the airport — the most critical transition is unaccompanied",
      "The enormity of living as a secret believer in a Muslim-majority society without training or support",
    ],
  },
  {
    stage: "silent-exit",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Parents planning welcome-home pujas and temple visits to celebrate their return",
        "ISM friends who are emotionally present but practically unprepared for what comes next",
        "No Indian church community waiting to receive them — only Hindu family expectations",
      ],
      hearing: [
        "Family planning an arranged marriage with someone from their caste and Hindu background",
        "ISM saying, 'Stay strong in your faith!' without offering tools or networks",
        "Their own voice asking, 'Can I follow Jesus and still honor my parents?'",
      ],
      thinkingFeeling: [
        "My family will see conversion as betrayal of everything they sacrificed to send me here",
        "I love Jesus, but I also love my parents — I don't know how to hold both",
        "No one prepared me for the moment when my two worlds collide at the arrival gate",
      ],
      sayingDoing: [
        "Rehearsing how to participate in family pujas without compromising faith — with no guidance on how",
        "Leaving campus with a Bible hidden in their luggage and no plan for when to open it",
        "Crying privately while packing, mourning a community they are about to lose",
      ],
    },
    quotes: [
      {
        text: "My mother had already booked the pandit for a homecoming puja. I love Jesus now, but no one told me what to do when my mother hands me the incense.",
        attribution: "Master's student from Chennai, India",
      },
    ],
    ministry: {
      posture: "Cultural Navigation Coach (Honor-Preserving Guide)",
      approaches: [
        "Train them to navigate Hindu family rituals with wisdom — what to participate in, what to decline, how to explain",
        "Connect them with Indian house churches or believers who understand the caste and family dynamics",
        "Role-play difficult conversations: telling parents, declining pujas, explaining faith in Hindu idiom",
        "Create a written reentry plan with specific contacts, resources, and accountability check-ins",
      ],
      pitfalls: [
        "Giving simplistic advice ('Just tell your family') that ignores the devastation of Hindu family dynamics",
        "Failing to address the arranged marriage question — it is the most immediate and consequential pressure they face",
        "Leaving cultural navigation to the student alone, as if faith automatically provides cultural strategy",
      ],
    },
    bridges: [
      "The Bhakti tradition's devotional love as a framework for expressing devotion to Christ in culturally resonant ways",
      "Indian believers who have walked this exact path and can mentor from lived experience",
      "The student's own dual fluency in Hindu culture and Christian faith — they can be a bridge if equipped",
    ],
    barriers: [
      "No Indian church community prepared to receive a convert navigating family and caste pressure",
      "ISM's Western framework lacks tools for the specific cultural minefields Hindu converts face at home",
      "The arranged marriage timeline that forces immediate, high-stakes identity decisions upon return",
    ],
  },
  {
    stage: "silent-exit",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "A return to a society where Buddhism is woven into every social institution — school, government, family",
        "ISM friends who are sad to see them go but have no idea what awaits them",
        "No visible Christian community in their home region — just temples on every corner",
      ],
      hearing: [
        "Family expecting them to resume merit-making activities at the local wat (temple)",
        "ISM friends praying for them with genuine emotion but no practical strategy",
        "Silence where there should be a plan — no one is talking about what happens next",
      ],
      thinkingFeeling: [
        "In America I could be a Christian quietly. At home, every neighbor will notice if I stop going to the temple",
        "I don't know how to pray without my ISM community — they were my entire faith structure",
        "What if my faith was an American experience that doesn't survive the flight home?",
      ],
      sayingDoing: [
        "Downloading sermons and worship music to their phone as a lifeline for the months ahead",
        "Saying goodbye to ISM while privately wondering if this is the end of their faith journey",
        "Making no plans for spiritual community at home because they don't know where to start",
      ],
    },
    quotes: [
      {
        text: "They gave me a study Bible at the farewell dinner. It was beautiful. But I needed a name and a phone number of someone in Bangkok, not a book.",
        attribution: "PhD student from Bangkok, Thailand",
      },
    ],
    ministry: {
      posture: "Sending Church Connector (Network Weaver)",
      approaches: [
        "Research and establish relationships with churches and house fellowships in the student's home country before they depart",
        "Create a warm handoff — introduce them digitally to a local believer or pastor who will meet them",
        "Equip them with culturally appropriate devotional resources in their heart language",
        "Set up a regular video call rhythm for the first 6 months after departure",
      ],
      pitfalls: [
        "Sending them off with resources but no relationships — books cannot replace community",
        "Underestimating how socially embedded Buddhism is in their home context",
        "Assuming their quiet demeanor means they are at peace with returning — they may be terrified",
      ],
    },
    bridges: [
      "Digital connectivity that can sustain mentorship and community across the ocean",
      "Growing underground Christian movements in Buddhist-majority countries that need to be discovered and connected",
      "The student's genuine faith experience that, if supported, can survive the transition home",
    ],
    barriers: [
      "Buddhism's social embeddedness means opting out is visible, public, and costly",
      "ISM's relational network evaporates at departure — no handoff, no landing pad",
      "The student's faith was communally sustained and has never been tested in isolation",
    ],
  },
  {
    stage: "silent-exit",
    background: "secular",
    empathyMap: {
      seeing: [
        "A return to a secular society where their new faith will be seen as irrational or regressive",
        "ISM friends celebrating their spiritual growth without preparing them for intellectual hostility at home",
        "No Christian intellectual community in their home city that matches what they found on campus",
      ],
      hearing: [
        "Family and friends back home who will mock or dismiss their faith as an American phase",
        "ISM encouraging them to 'share their faith boldly' without understanding the social cost in secular cultures",
        "Their own doubts: 'Was this real, or was I just lonely and these people were kind?'",
      ],
      thinkingFeeling: [
        "My friends at home are going to think I joined a cult or had a breakdown",
        "I need intellectual peers who share my faith — not just emotional support",
        "If I can't articulate why I believe to a skeptic, my faith won't survive six months at home",
      ],
      sayingDoing: [
        "Searching for intellectually rigorous Christian communities in their home city and finding mostly traditional or charismatic churches",
        "Practicing how to explain their faith in secular, philosophical terms rather than evangelical language",
        "Leaving campus with genuine faith but no apologetic framework for the world they are re-entering",
      ],
    },
    quotes: [
      {
        text: "My ISM mentor said, 'Just trust God.' But my colleagues in Berlin are going to ask me why I believe in a resurrection. I need more than trust — I need arguments.",
        attribution: "Postdoctoral researcher from Germany",
      },
    ],
    ministry: {
      posture: "Apologetic Equipper (Intellectual Armor-Bearer)",
      approaches: [
        "Equip them with apologetic resources tailored to secular intellectual environments — not generic devotionals",
        "Connect them with intellectually vibrant Christian communities in their home city (L'Abri, Veritas Forum alumni, university Christian fellowships)",
        "Train them to articulate their faith in philosophical and scientific terms their peers will respect",
        "Build an ongoing reading and discussion group that continues digitally after departure",
      ],
      pitfalls: [
        "Sending them into a secular environment with only emotional faith and no intellectual scaffolding",
        "Assuming churches in their home country will meet their intellectual needs — many won't",
        "Dismissing their intellectual doubts as lack of faith rather than a legitimate need for deeper formation",
      ],
    },
    bridges: [
      "Intellectual curiosity that led them to faith can sustain it — if given rigorous resources",
      "Growing global networks of Christian intellectuals and scholars they can be connected to",
      "The student's unique credibility: a secular thinker who found faith is a powerful witness if equipped",
    ],
    barriers: [
      "Secular home culture that treats faith as intellectually embarrassing or psychologically immature",
      "No Christian intellectual community at home that matches the depth of their campus experience",
      "ISM's emotional and relational support system vanishes, leaving only the intellectual framework — which was never adequately built",
    ],
  },
  {
    stage: "silent-exit",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A return to a culturally Christian environment where their newfound personal faith will seem extreme",
        "Family and church that will celebrate their return but not understand their transformation",
        "No community that bridges the gap between their vibrant campus faith and the nominal Christianity of home",
      ],
      hearing: [
        "Family saying, 'Welcome home — everything is just as you left it'",
        "Their home church offering familiar liturgy but no space for the personal faith they discovered",
        "ISM saying goodbye without acknowledging that 'going home to a Christian country' is its own kind of mission field",
      ],
      thinkingFeeling: [
        "I discovered real faith in America, but my church at home will think I've become a fanatic",
        "How do I honor my tradition while living out the personal relationship with Jesus I've found?",
        "I'm scared that the comfort of cultural Christianity will slowly suffocate what came alive in me",
      ],
      sayingDoing: [
        "Returning to their home church but finding it spiritually lifeless compared to their campus community",
        "Trying to share what they learned and being met with polite disinterest or suspicion",
        "Searching for a small group or fellowship at home and finding nothing that matches their experience",
      ],
    },
    quotes: [
      {
        text: "Back home everyone said, 'Of course you're Christian — you always were.' But I wasn't. I only became one in America, and no one here understands the difference.",
        attribution: "Graduate student from Greece",
      },
    ],
    ministry: {
      posture: "Reentry Renewal Coach (Tradition-Honoring Discipler)",
      approaches: [
        "Acknowledge that returning to a 'Christian country' is not spiritually safe — it is its own mission field",
        "Connect them with renewal-minded pastors or small groups within their tradition before they depart",
        "Coach them to be patient reformers — honoring their heritage while living out personal conviction",
        "Establish digital accountability and fellowship that continues after they leave campus",
      ],
      pitfalls: [
        "Treating return to a Christian culture as a 'safe landing' that needs no preparation",
        "Failing to prepare them for the loneliness of vibrant faith in a nominally Christian environment",
        "Allowing the farewell to be sentimental rather than strategic — they need a plan, not just a party",
      ],
    },
    bridges: [
      "Their tradition's rich spiritual heritage — renewal movements exist within every historic denomination",
      "The language and practices they share with their home church that can become vehicles for deeper faith",
      "Their unique testimony: a nominal Christian who found personal faith can inspire others in the same tradition",
    ],
    barriers: [
      "Cultural Christianity at home that rewards conformity and resists personal transformation",
      "No ISM-equivalent community at home — the relational infrastructure dissolves at departure",
      "The gravitational pull of comfort, family expectations, and religious routine that slowly erases campus faith",
    ],
  },

  // ─── ATTRITION: CULTURAL REVERSION ──────────────────────────────────────────
  {
    stage: "cultural-reversion",
    background: "muslim",
    empathyMap: {
      seeing: [
        "Family members watching their behavior closely for signs of change or deviation",
        "The mosque community that welcomed them home as a returning son or daughter",
        "No local believers, no house church, no one who understands what they are carrying inside",
      ],
      hearing: [
        "Family pressuring them to marry within the Muslim community — immediately",
        "The adhan (call to prayer) five times a day, pulling them back into familiar rhythms",
        "Silence from their ISM community — the texts stopped weeks after landing",
      ],
      thinkingFeeling: [
        "I still believe in Isa, but the cost of living it out here is unbearable",
        "Maybe I can believe in my heart but live as a Muslim outwardly — is that allowed?",
        "I am completely alone in my faith, and the loneliness is crushing me",
      ],
      sayingDoing: [
        "Resuming mosque attendance and external Muslim practice to maintain family peace",
        "Praying to Jesus in secret at night while performing salah publicly during the day",
        "Slowly, painfully, letting the fire of conviction dim as survival takes priority over discipleship",
      ],
    },
    quotes: [
      {
        text: "I pray to Isa in my closet at midnight. During the day I go to the mosque with my father. No one told me faith would feel like this — like drowning in two oceans.",
        attribution: "Young professional, returned to Egypt",
      },
    ],
    ministry: {
      posture: "Underground Lifeline (Covert Sustainer)",
      approaches: [
        "Establish secure, encrypted digital channels for ongoing discipleship and encouragement",
        "Connect them with MBB networks and underground house churches through trusted intermediaries",
        "Provide theological resources on the 'insider movement' — following Jesus within Muslim cultural forms",
        "Never stop reaching out — even a monthly message says 'You are not forgotten'",
      ],
      pitfalls: [
        "Cutting contact after departure and assuming they'll be fine because their faith was strong on campus",
        "Applying Western categories of 'faithful' and 'backslidden' to someone fighting for survival",
        "Exposing them through careless social media interaction or insecure communication channels",
      ],
    },
    bridges: [
      "The genuine, surviving conviction about Isa that persists even under enormous cultural pressure",
      "Digital technology as a lifeline for secret believers who cannot meet in person",
      "Growing global MBB networks that can provide peer support from others who understand the cost",
    ],
    barriers: [
      "Total absence of local Christian community or mentorship in their home context",
      "Family and social pressure that makes outward faith expression dangerous or impossible",
      "ISM's relational investment ended at the airport — the most vulnerable season is unaccompanied",
    ],
  },
  {
    stage: "cultural-reversion",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Family preparations for temple visits, festivals, and an arranged marriage within Hindu tradition",
        "The village or community watching to see if America 'changed' them in unacceptable ways",
        "No Christian community that understands their journey or can provide safe belonging",
      ],
      hearing: [
        "Parents saying, 'You've been away too long — it's time to come back to who you are'",
        "Extended family gossip about whether they were 'converted by missionaries'",
        "Silence from ISM — the WhatsApp group went quiet within weeks of their return",
      ],
      thinkingFeeling: [
        "I cannot break my mother's heart by refusing to participate in puja — she has sacrificed everything for me",
        "Maybe Jesus was real for me in America, but Hinduism is real for me here at home",
        "The loneliness is unbearable — I have no one to talk to about what I believe",
      ],
      sayingDoing: [
        "Participating in Hindu rituals to maintain family harmony while privately grieving the compromise",
        "Reading the Bible on their phone late at night, hiding it like contraband",
        "Gradually absorbing Hindu practices back into their spiritual identity as the Christian identity fades",
      ],
    },
    quotes: [
      {
        text: "My mother cried when I hesitated to light the lamp at Diwali. I cannot make her cry again. So I light the lamp and ask Jesus to forgive me.",
        attribution: "Young professional, returned to Mumbai, India",
      },
    ],
    ministry: {
      posture: "Long-Distance Family Counselor (Honor-Sensitive Shepherd)",
      approaches: [
        "Provide ongoing mentorship through secure digital channels that respect family dynamics",
        "Connect them with Indian believers who have navigated the same tension between Christ and Hindu family",
        "Offer theological frameworks for honoring parents while following Christ — this is their central crisis",
        "Pray consistently and visibly (through messages) so they know someone remembers and cares",
      ],
      pitfalls: [
        "Judging their participation in Hindu rituals without understanding the family and social cost of refusal",
        "Going silent after departure — their faith cannot survive isolation without community",
        "Offering Western solutions ('just leave your family') to a profoundly collectivist crisis",
      ],
    },
    bridges: [
      "The Bhakti tradition's language of devotion and surrender that can express genuine faith in Christ",
      "Growing networks of Indian believers navigating dual identity with wisdom and courage",
      "The persistent, unquenchable inner conviction that Jesus is Lord — even when outward practice contradicts it",
    ],
    barriers: [
      "Family honor system that makes religious deviation a betrayal of the entire clan",
      "No local Christian community equipped to receive and sustain Hindu-background believers",
      "The emotional weight of causing parental grief — it is the most powerful force pulling them back",
    ],
  },
  {
    stage: "cultural-reversion",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "Monks in the neighborhood, temples on every street, Buddhism embedded in every social institution",
        "Family and friends resuming merit-making activities and expecting their full participation",
        "No Christian church in their area — or only ones that feel culturally Western and alien",
      ],
      hearing: [
        "Community elders asking, 'When will you make merit at the temple?' — refusal is unthinkable",
        "Silence from ISM — the community that sustained their faith is an ocean away",
        "The gentle, persistent voice of Buddhist teaching that shaped them from childhood: 'Attachment is suffering'",
      ],
      thinkingFeeling: [
        "My faith was sustained by community in America — without it, I am a candle in the wind",
        "Maybe Christianity was my attachment, and letting go of it is the truly enlightened path",
        "I miss Jesus, but I miss belonging to my family and culture more",
      ],
      sayingDoing: [
        "Attending temple with family and making merit because the social cost of refusal is total isolation",
        "Slowly reinterpreting their Christian experience through a Buddhist lens — Jesus as a compassionate teacher, not Lord",
        "Letting their Bible gather dust as daily meditation replaces daily Scripture reading",
      ],
    },
    quotes: [
      {
        text: "In America, following Jesus felt natural. Here, it feels like swimming against every current in the river. I am tired of swimming.",
        attribution: "Young professional, returned to Chiang Mai, Thailand",
      },
    ],
    ministry: {
      posture: "Persistent Digital Shepherd (Cross-Ocean Companion)",
      approaches: [
        "Maintain weekly or biweekly contact through messaging or video calls — do not let the connection die",
        "Connect them with the growing underground church in Buddhist-majority countries through vetted networks",
        "Provide devotional resources in their heart language that bridge Buddhist and Christian categories",
        "Encourage small, sustainable faith practices — a verse a day, a prayer at night — not heroic public witness",
      ],
      pitfalls: [
        "Demanding visible, public faith expression in a context where it leads to social death",
        "Allowing the relationship to end at departure — their faith will not survive without ongoing community",
        "Dismissing their Buddhist reengagement as apostasy rather than a survival response to unbearable isolation",
      ],
    },
    bridges: [
      "The Christian experience of grace and personal relationship that Buddhism's framework cannot fully replicate",
      "Digital connectivity that can sustain faith community across oceans",
      "Small, growing Christian fellowships in Buddhist countries that need to be found and connected",
    ],
    barriers: [
      "Buddhism's total social embeddedness — opting out means opting out of family, community, and culture",
      "No local church or fellowship to replace the ISM community they lost at departure",
      "The Buddhist framework's ability to absorb Jesus as a teacher while emptying his lordship of meaning",
    ],
  },
  {
    stage: "cultural-reversion",
    background: "secular",
    empathyMap: {
      seeing: [
        "A home culture where faith is considered a private eccentricity at best, intellectual weakness at worst",
        "Old friends and colleagues who cannot relate to their spiritual transformation",
        "Churches in their city that feel anti-intellectual, culturally conservative, or irrelevant",
      ],
      hearing: [
        "Friends saying, 'You found religion in America? That's so... American'",
        "Family expressing concern that they've been 'radicalized' or 'brainwashed'",
        "University colleagues dismissing faith as incompatible with serious academic work",
      ],
      thinkingFeeling: [
        "Was my faith real, or was it just a social experience that doesn't transfer to real life?",
        "I cannot find a single person here who takes both faith and intellect seriously",
        "The rational objections I once overcame are returning, and I have no one to process them with",
      ],
      sayingDoing: [
        "Attending church sporadically but finding it intellectually unsatisfying and culturally alien",
        "Rereading apologetics books alone because there is no community for intellectual faith",
        "Gradually replacing prayer and Scripture with the secular rhythms that everyone around them follows",
      ],
    },
    quotes: [
      {
        text: "In America I had a professor who was a Christian and a world-class scientist. Here, the Christians I meet can't answer my simplest questions. The loneliness is intellectual, not just social.",
        attribution: "Postdoctoral researcher, returned to Shanghai, China",
      },
    ],
    ministry: {
      posture: "Intellectual Anchor (Global Faith-and-Reason Network Builder)",
      approaches: [
        "Connect them with global networks of Christian scholars and intellectuals (Veritas Forum, IFES alumni, L'Abri)",
        "Maintain an ongoing digital reading group or discussion forum for intellectually serious believers",
        "Help them find or plant a small group of like-minded believers in their home city — even two or three is enough",
        "Continue to recommend rigorous theological and philosophical resources that sustain intellectual faith",
      ],
      pitfalls: [
        "Assuming their secular home culture is spiritually neutral — it is actively corrosive to faith without community",
        "Letting the digital relationship die because they seem intellectually self-sufficient",
        "Failing to acknowledge that the local church options may genuinely be inadequate for their needs",
      ],
    },
    bridges: [
      "The intellectual framework that brought them to faith can sustain them — if constantly fed and sharpened",
      "Growing global movements of Christian intellectuals in secular societies who can provide peer community",
      "The persistent existential questions that secular frameworks cannot fully answer",
    ],
    barriers: [
      "No local community that combines intellectual rigor with genuine faith — the two are separated in their culture",
      "Social pressure that treats faith as embarrassing, private, or a sign of weakness",
      "The rational objections to faith return with force when the relational community that held them is gone",
    ],
  },
  {
    stage: "cultural-reversion",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A home church that looks the same as when they left — liturgy, routine, no personal discipleship",
        "Family and friends who never understood why they got 'so serious about religion' in America",
        "No small group, no accountability, no community that nurtures the personal faith they found abroad",
      ],
      hearing: [
        "Family saying, 'You're home now — stop with the American Christianity and just be normal'",
        "Their home pastor preaching the same sermons with no call to personal transformation",
        "The slow, steady hum of cultural Christianity lulling them back to spiritual sleep",
      ],
      thinkingFeeling: [
        "I feel like I'm the only person in this church who actually met Jesus personally",
        "Maybe I should just accept that this is how faith works here — quiet, cultural, inherited",
        "The fire I felt in America is dying, and I don't know how to rekindle it alone",
      ],
      sayingDoing: [
        "Attending church out of cultural obligation but no longer seeking personal encounter with God",
        "Stopping daily Bible reading and prayer as the urgency of campus faith fades",
        "Slowly reverting to the comfortable, unexamined cultural Christianity they knew before",
      ],
    },
    quotes: [
      {
        text: "I came home on fire. Within six months, the fire was out. No one here wanted what I had found. They wanted me to be quiet and normal.",
        attribution: "Young professional, returned to Bucharest, Romania",
      },
    ],
    ministry: {
      posture: "Ember Keeper (Long-Distance Discipler for Renewal)",
      approaches: [
        "Establish a post-departure discipleship rhythm: weekly calls, shared Scripture reading, prayer partnership",
        "Connect them with renewal movements within their own denomination — they exist in every tradition",
        "Encourage them to find or form a small group of two or three who want more than cultural religion",
        "Remind them regularly that their experience was real, their faith is valid, and the struggle is normal",
      ],
      pitfalls: [
        "Assuming return to a 'Christian country' means spiritual safety — nominal environments are uniquely corrosive",
        "Cutting off contact because they are 'already Christian' and other students need more attention",
        "Failing to validate their loneliness — being the only person with personal faith in a nominally Christian context is profoundly isolating",
      ],
    },
    bridges: [
      "Their genuine encounter with Christ — the ember is still there, even if it is fading",
      "The rich spiritual heritage of their tradition that can be rediscovered with fresh eyes",
      "Global renewal movements within their denomination that prove personal faith and historic tradition can coexist",
    ],
    barriers: [
      "Cultural Christianity's gravitational pull — it is comfortable, familiar, and demands nothing",
      "No local community that shares their hunger for personal faith within their tradition",
      "ISM's attention has moved to new students — the person who most needs ongoing support is forgotten",
    ],
  },
];
