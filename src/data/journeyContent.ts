import { JourneyCell } from "./types";

export const journeyCells: JourneyCell[] = [
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
    background: "secular",
    empathyMap: {
      seeing: [
        "Confusing church cultures and Christian subcultures",
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
        text: "The ISM staff helped me with my resume. I thought they were just going to push religion on me. They actually cared.",
        attribution: "Engineering student from China",
      },
    ],
    ministry: {
      posture: "Practical Co-Laborer",
      approaches: [
        "Meet immediate practical needs (furniture, airport pickup) as a bridge to relationship, not an end",
        "Offer vocational help: resume reviews, mock interviews, career conversations",
        "Earn the right to spiritual conversations through genuine friendship",
      ],
      pitfalls: [
        "Getting stuck in 'Service Land' — practical help without relational depth",
        "Treating students as consumers of your services",
        "Moving to spiritual topics before trust is established",
      ],
    },
    bridges: [
      "Vocational discipleship connecting faith and career",
      "Authentic relationships where words match lives",
      "Intellectual honesty and willingness to engage hard questions",
    ],
    barriers: [
      "Perception that Christians have an agenda",
      "Scientific worldview as the only path to truth",
      "Fear of religion as cult-like",
    ],
  },
  {
    stage: "integration",
    background: "hindu",
    empathyMap: {
      seeing: [
        "Western church culture that feels culturally foreign",
        "Christianity associated with colonialism or beef-eating",
        "Christians who seem to demand cultural conversion, not just spiritual",
      ],
      hearing: [
        "Pressure from family to maintain Hindu identity",
        "Academic narratives that relativize all religions",
        "Spiritual hunger from peers exploring new ideas",
      ],
      thinkingFeeling: [
        "Can I follow Jesus without betraying my family and culture?",
        "Is there a way to explore faith without being extracted from my community?",
        "I am genuinely curious, but afraid of what it might cost",
      ],
      sayingDoing: [
        "Asking deep questions about meaning and purpose",
        "Exploring faith privately before engaging publicly",
        "Forming friendships across cultural lines for the first time",
      ],
    },
    quotes: [
      {
        text: "My friend said I could love Jesus and still honor my family. That was the first time I thought it might be possible.",
        attribution: "Graduate student from India",
      },
    ],
    ministry: {
      posture: "Cultural Bridge-Builder (Guide on the Side)",
      approaches: [
        "Explore Jesus as the ultimate Bhagwan (Lord of devotion) rather than a Western import",
        "Host satsang-style gatherings (truth gatherings) rather than formal church events",
        "Emphasize implantation: the gospel spreading through their family network, not extraction from it",
        "Use the Bhagavad Gita as a bridge, not a barrier",
      ],
      pitfalls: [
        "Asking students to eat beef or adopt Western cultural markers",
        "'Expert mentality' — being the teacher rather than a co-learner",
        "Extraction evangelism that separates students from their family oikos",
      ],
    },
    bridges: [
      "Bhakti (devotion) as a concept that resonates with loving Jesus",
      "Sensory worship and ritual that can be contextualized",
      "Implantation strategy that honors family relationships",
    ],
    barriers: [
      "Perception that becoming Christian means cultural betrayal",
      "Caste and community boundary concerns",
      "Expert/teacher dynamic that disempowers students",
    ],
  },
  {
    stage: "leadership",
    background: "buddhist",
    empathyMap: {
      seeing: [
        "A faith community that has genuinely embraced them",
        "The possibility of leading others from their own background",
        "Their own transformation as evidence of something real",
      ],
      hearing: [
        "Encouragement to lead, not just follow",
        "Their own voice being taken seriously",
        "The Great Commission as something they can participate in",
      ],
      thinkingFeeling: [
        "I have something to offer",
        "I want to share what I've found with my family back home",
        "How do I lead a Bible study for people like me?",
      ],
      sayingDoing: [
        "Beginning to lead Discovery Bible Studies for peers",
        "Contextualizing the gospel for East Asian culture",
        "Connecting faith with their vocational future",
      ],
    },
    quotes: [
      {
        text: "I was afraid to lead at first. But when I did, I realized I could explain Jesus in a way my friends actually understood.",
        attribution: "Student from Thailand",
      },
    ],
    ministry: {
      posture: "Equipper and Multiplier",
      approaches: [
        "Equip with Discovery Bible Study (DBS) or M:28 strategy — reproducible, high-agency tools",
        "Follow the 'Daniel Paradigm': empower them to lead outreach among their own peers",
        "Integrate faith and vocation — help them see their career as their mission field",
        "Begin re-entry preparation early: plant the vision for what multiplication can look like at home",
      ],
      pitfalls: [
        "Keeping students as perpetual recipients rather than empowering them as leaders",
        "Teacher-centered Bible studies that create expert-dependency",
        "Neglecting re-entry preparation until the last minute",
      ],
    },
    bridges: [
      "Water imagery for cleansing and purification (resonates with Buddhist aesthetics)",
      "Family-oriented framing of Jesus' sonship",
      "Music and experiential worship rather than purely propositional truth",
    ],
    barriers: [
      "Self-effort framework (Buddhism): grace can feel too easy",
      "God perceived as impersonal void rather than personal Father",
      "'Sin' translated as 'crime' causing confusion",
    ],
  },
  {
    stage: "reentry",
    background: "nominal",
    empathyMap: {
      seeing: [
        "A home culture that has moved on without them",
        "Family who don't understand who they've become",
        "A society where faith must be private or hidden",
      ],
      hearing: [
        "Family pressure to conform to old patterns",
        "Skepticism about their faith journey",
        "The loneliness of reverse culture shock",
      ],
      thinkingFeeling: [
        "Will my faith survive when I'm no longer surrounded by the community that nurtured it?",
        "How do I maintain what I found without a church or support network?",
        "I feel like a stranger in my own home",
      ],
      sayingDoing: [
        "Seeking online communities to sustain faith",
        "Slowly sharing their faith story with family members",
        "Looking for local believers to connect with",
      ],
    },
    quotes: [
      {
        text: "I thought going home would feel like relief. Instead, I felt more alone than I did my first week in America.",
        attribution: "Graduate student from Eastern Europe",
      },
    ],
    ministry: {
      posture: "Deployment Coach (Long-term Accompanier)",
      approaches: [
        "Begin re-entry preparation 3–6 months before departure (use Think Home, Back Home curricula)",
        "Connect them to a local church or believer network before they leave",
        "Establish a VoIP/Zoom mentoring relationship that continues after departure",
        "Cast vision: their return is the beginning of multiplication, not the end of ministry",
        "Conduct a 'spiritual risk assessment' for the pressures they'll face at home",
      ],
      pitfalls: [
        "Treating graduation/departure as the end of the relationship",
        "Failing to prepare them for reverse culture shock",
        "No plan for ongoing community in their home country",
      ],
    },
    bridges: [
      "Vision of being an 'Ambassador in Exile' — giving purpose to the hardship",
      "Digital community that spans borders",
      "The oikos strategy: gospel spreading through existing family networks",
    ],
    barriers: [
      "Reverse culture shock and social isolation",
      "No local faith community to land in",
      "Family pressure to re-assimilate fully",
    ],
  },
];
