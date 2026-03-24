// ============================================================
// milestones.ts — Aligned to CDC 2022 "Learn the Signs. Act Early." update
//
// Key changes from previous version:
// - Age groups now match CDC 2022 well-child visit checkpoints:
//   2m, 4m, 6m, 9m, 12m, 15m, 18m, 24m, 30m, 3y, 4y, 5y
// - Milestones reflect what 75%+ of children do BY each age (not average age)
// - Domains renamed to match CDC 2022: social-emotional, language, cognitive,
//   gross-motor, fine-motor (receptive/expressive kept for clinical utility,
//   folded into "language" for CDC alignment)
// - Crawling removed (CDC 2022 explicitly removed this)
// - "Walks alone" moved from 12m → 15m
// - "Says first word" moved to 12m
// - "Waves bye-bye" moved to 12m
// - "Two-word phrases" moved to 24m
// - "50 words" moved from 24m → 30m
// - Removed non-CDC checklist items from prior versions
// - Added: CDC 2022 social-emotional autism-detection milestones (e.g.,
//   "smiles on own to get attention" at 2m and 4m)
// - Source: https://www.cdc.gov/act-early/milestones/index.html
// ============================================================

export type Domain =
  | "gross-motor"
  | "fine-motor"
  | "self-help"
  | "cognitive"
  | "social-emotional"
  | "receptive-language"
  | "expressive-language";

export interface Milestone {
  id: string;
  title: string;
  domain: Domain;
}

export interface AgeGroup {
  id: string;
  label: string;
  sublabel: string;
  milestones: Milestone[];
}

export const domainLabels: Record<Domain, string> = {
  "gross-motor": "Gross Motor",
  "fine-motor": "Fine Motor",
  "self-help": "Self-Help",
  "cognitive": "Cognitive",
  "social-emotional": "Social-Emotional",
  "receptive-language": "Receptive Language",
  "expressive-language": "Expressive Language",
};

export const domainColors: Record<Domain, string> = {
  "gross-motor": "bg-domain-gross-motor/20 text-foreground border-domain-gross-motor/40",
  "fine-motor": "bg-domain-fine-motor/20 text-foreground border-domain-fine-motor/40",
  "self-help": "bg-domain-self-help/20 text-foreground border-domain-self-help/40",
  "cognitive": "bg-domain-cognitive/20 text-foreground border-domain-cognitive/40",
  "social-emotional": "bg-domain-social-emotional/20 text-foreground border-domain-social-emotional/40",
  "receptive-language": "bg-domain-receptive-language/20 text-foreground border-domain-receptive-language/40",
  "expressive-language": "bg-domain-expressive-language/20 text-foreground border-domain-expressive-language/40",
};

export const domainBadgeColors: Record<Domain, string> = {
  "gross-motor": "bg-domain-gross-motor/30 text-foreground",
  "fine-motor": "bg-domain-fine-motor/30 text-foreground",
  "self-help": "bg-domain-self-help/30 text-foreground",
  "cognitive": "bg-domain-cognitive/30 text-foreground",
  "social-emotional": "bg-domain-social-emotional/30 text-foreground",
  "receptive-language": "bg-domain-receptive-language/30 text-foreground",
  "expressive-language": "bg-domain-expressive-language/30 text-foreground",
};

let _id = 0;
const m = (title: string, domain: Domain): Milestone => ({
  id: String(++_id),
  title,
  domain,
});

export const ageGroups: AgeGroup[] = [
  // ─────────────────────────────────────────────
  // 2 MONTHS
  // CDC 2022: cdc.gov/act-early/milestones/2-months.html
  // ─────────────────────────────────────────────
  {
    id: "2m",
    label: "2 Months",
    sublabel: "Newborn",
    milestones: [
      // Social/Emotional
      m("Calms down when spoken to or picked up", "social-emotional"),
      m("Smiles when you talk or smile at her", "social-emotional"),
      m("Smiles on his own to get your attention", "social-emotional"), // CDC 2022 addition — key ASD marker
      m("Looks at you, moves, or makes sounds to get or keep your attention", "social-emotional"),

      // Language/Communication
      m("Makes sounds other than crying, such as cooing (oooo, aahh)", "expressive-language"),
      m("Reacts to loud sounds", "receptive-language"),
      m("Turns head toward the sound of your voice", "receptive-language"),

      // Cognitive
      m("Watches you as you move", "cognitive"),
      m("Looks at a toy for a few seconds", "cognitive"),
      m("Opens mouth when sees breast or bottle (if breastfed or bottle-fed)", "cognitive"),

      // Movement/Physical
      m("Holds head up when on tummy", "gross-motor"),
      m("Moves both arms and both legs", "gross-motor"),
      m("Opens hands briefly", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 4 MONTHS
  // CDC 2022: cdc.gov/act-early/milestones/4-months.html
  // ─────────────────────────────────────────────
  {
    id: "4m",
    label: "4 Months",
    sublabel: "Early Infancy",
    milestones: [
      // Social/Emotional
      m("Smiles on his own to get your attention", "social-emotional"), // CDC 2022 addition — key ASD marker
      m("Chuckles (not yet a full laugh) when you try to make her laugh", "social-emotional"),
      m("Looks at you, moves, or makes sounds to get or keep your attention", "social-emotional"),

      // Language/Communication
      m("Makes sounds like 'oooo' and 'aahh' (cooing)", "expressive-language"),
      m("Makes sounds back when you talk to him", "expressive-language"),
      m("Turns head towards the sound of your voice", "receptive-language"),

      // Cognitive
      m("Opens mouth when hungry and sees breast or bottle", "cognitive"),
      m("Looks at his hands with interest", "cognitive"),

      // Movement/Physical
      m("Holds head steady without support when you are holding him", "gross-motor"),
      m("Holds head and chest up when lying on tummy", "gross-motor"),
      m("Reaches for a toy with one hand", "gross-motor"),
      m("Uses both hands to swipe at toys", "fine-motor"),
      m("Brings hands to mouth", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 6 MONTHS
  // CDC 2022: cdc.gov/act-early/milestones/6-months.html
  // ─────────────────────────────────────────────
  {
    id: "6m",
    label: "6 Months",
    sublabel: "Infancy",
    milestones: [
      // Social/Emotional
      m("Knows familiar people", "social-emotional"),
      m("Likes to look at herself in a mirror", "social-emotional"),
      m("Laughs", "social-emotional"),

      // Language/Communication
      m("Takes turns making sounds with you", "expressive-language"), // CDC 2022 addition
      m("Blows 'raspberries' (sticks out tongue and blows)", "expressive-language"), // CDC 2022 addition
      m("Makes squealing noises", "expressive-language"),
      m("Turns to look where a sound came from", "receptive-language"),

      // Cognitive
      m("Puts things in her mouth to explore them", "cognitive"),
      m("Reaches to grab a toy she wants", "cognitive"),
      m("Closes lips to show she doesn't want more food", "cognitive"),

      // Movement/Physical
      m("Rolls from tummy to back", "gross-motor"), // rolling moved from 4m to 6m in CDC 2022
      m("Pushes up with straight arms when on tummy", "gross-motor"),
      m("Leans on hands to support himself when sitting", "gross-motor"),
      m("Passes a toy from one hand to the other", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 9 MONTHS
  // CDC 2022: cdc.gov/act-early/milestones/9-months.html
  // ─────────────────────────────────────────────
  {
    id: "9m",
    label: "9 Months",
    sublabel: "Late Infancy",
    milestones: [
      // Social/Emotional
      m("Is shy, clingy, or fearful around strangers", "social-emotional"),
      m("Shows several facial expressions like happy, sad, angry, and surprised", "social-emotional"),
      m("Looks when you call her name", "social-emotional"),
      m("Reacts when you leave (looks, reaches for you, or cries)", "social-emotional"),
      m("Smiles or laughs when you play peek-a-boo", "social-emotional"),

      // Language/Communication
      m("Makes different sounds like 'mamama' and 'bababa'", "expressive-language"), // CDC 2022 specific phrasing
      m("Lifts arms up to be picked up", "expressive-language"),
      m("Looks at familiar objects or people when you name them", "receptive-language"),

      // Cognitive
      m("Looks for objects when dropped out of sight (e.g., spoon falls)", "cognitive"),
      m("Bangs two things together", "cognitive"),

      // Movement/Physical
      m("Gets to a sitting position by herself", "gross-motor"),
      m("Moves things from one hand to the other hand", "fine-motor"),
      m("Uses fingers to rake food towards himself", "fine-motor"),
      m("Sits without support", "gross-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 12 MONTHS (1 YEAR)
  // CDC 2022: cdc.gov/act-early/milestones/1-year.html
  // NOTE: "Walks alone" moved to 15 months in CDC 2022
  // ─────────────────────────────────────────────
  {
    id: "12m",
    label: "12 Months",
    sublabel: "1 Year",
    milestones: [
      // Social/Emotional
      m("Plays games with you, like pat-a-cake", "social-emotional"),
      m("Waves bye-bye", "social-emotional"), // moved from 10m to 12m per CDC 2022
      m("Calls a parent 'mama' or 'dada' or another special name", "expressive-language"), // CDC 2022
      m("Understands 'no' (pauses briefly or stops when you say it)", "receptive-language"),

      // Language/Communication
      m("Says 'mama,' 'dada,' and exclamations like 'uh-oh!'", "expressive-language"), // CDC 2022
      m("Tries to say words you say", "expressive-language"),
      m("Points to show you something interesting", "expressive-language"), // proto-declarative point — CDC 2022

      // Cognitive
      m("Puts something in a container like a block in a cup", "cognitive"),
      m("Looks for things she hides, like a toy under a blanket", "cognitive"),

      // Movement/Physical
      m("Pulls up to stand", "gross-motor"),
      m("Walks, holding on to furniture", "gross-motor"),
      m("Drinks from a cup without a lid when you hold it", "self-help"), // CDC 2022
      m("Picks up things between thumb and pointer finger", "fine-motor"), // pincer grasp
    ],
  },

  // ─────────────────────────────────────────────
  // 15 MONTHS
  // CDC 2022 ADDITION: cdc.gov/act-early/milestones/15-months.html
  // "Walks alone" moved HERE from 12m in CDC 2022
  // ─────────────────────────────────────────────
  {
    id: "15m",
    label: "15 Months",
    sublabel: "Toddler",
    milestones: [
      // Social/Emotional
      m("Copies other children while playing, like taking toys out of a container when another child does", "social-emotional"),
      m("Shows you an object she likes", "social-emotional"),
      m("Claps when excited", "social-emotional"),
      m("Hugs stuffed doll or other toy", "social-emotional"),
      m("Shows you affection (hugs, cuddles, or kisses you)", "social-emotional"),

      // Language/Communication
      m("Tries to say one or two words besides 'mama' or 'dada'", "expressive-language"), // CDC 2022
      m("Looks at a familiar object when you name it", "receptive-language"), // CDC 2022
      m("Follows directions given with both a gesture and words", "receptive-language"),
      m("Points to ask for something or get help", "expressive-language"),

      // Cognitive
      m("Tries to use things the right way, like a phone or a cup", "cognitive"),
      m("Stacks at least two small objects like blocks", "cognitive"),

      // Movement/Physical
      m("Takes a few steps on his own", "gross-motor"), // walks alone — moved here from 12m per CDC 2022
      m("Uses fingers to feed herself some food", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 18 MONTHS
  // CDC 2022: cdc.gov/act-early/milestones/18-months.html
  // ─────────────────────────────────────────────
  {
    id: "18m",
    label: "18 Months",
    sublabel: "Toddler",
    milestones: [
      // Social/Emotional
      m("Moves away from you, but looks to make sure you are close by", "social-emotional"),
      m("Points to show you something interesting", "social-emotional"),
      m("Puts hands out for you to wash them", "social-emotional"),
      m("Looks at you when you call her name", "social-emotional"),
      m("Likes to hand things to others as play", "social-emotional"),

      // Language/Communication
      m("Tries to say three or more words besides 'mama' or 'dada'", "expressive-language"), // CDC 2022
      m("Follows one-step directions without any gestures, like 'sit down'", "receptive-language"),

      // Cognitive
      m("Copies you doing chores, like sweeping with a broom", "cognitive"), // CDC 2022 addition
      m("Plays with toys in a simple way, like pushing a toy car", "cognitive"),

      // Movement/Physical
      m("Walks without holding on to anyone or anything", "gross-motor"),
      m("Scribbles", "fine-motor"),
      m("Drinks from a cup without a lid and may spill sometimes", "self-help"),
      m("Feeds herself with her fingers", "self-help"),
      m("Tries to use a spoon", "self-help"),
      m("Climbs on and off a couch or chair without help", "gross-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 24 MONTHS (2 YEARS)
  // CDC 2022: cdc.gov/act-early/milestones/2-years.html
  // "Two-word phrases" is a 24m milestone per CDC 2022
  // "50 words" moved to 30m per CDC 2022
  // ─────────────────────────────────────────────
  {
    id: "24m",
    label: "24 Months",
    sublabel: "2 Years",
    milestones: [
      // Social/Emotional
      m("Notices when others are hurt or upset, like pausing or looking sad when someone is crying", "social-emotional"),
      m("Looks at your face to see how to react in a new situation", "social-emotional"),

      // Language/Communication
      m("Points to things in a book when you ask, like 'where is the bear?'", "receptive-language"),
      m("Says at least two words together, like 'more milk'", "expressive-language"), // CDC 2022 — 24m milestone
      m("Points to at least two body parts when you ask", "receptive-language"),
      m("Uses more gestures than just waving and pointing (e.g., blows a kiss)", "expressive-language"),

      // Cognitive
      m("Holds something in one hand while using the other hand", "cognitive"),
      m("Tries to use switches, knobs, or buttons on a toy", "cognitive"),
      m("Plays with more than one toy at the same time", "cognitive"),

      // Movement/Physical
      m("Kicks a ball", "gross-motor"),
      m("Runs", "gross-motor"),
      m("Walks (not climbs) up a few stairs with or without help", "gross-motor"),
      m("Eats with a spoon", "self-help"),
    ],
  },

  // ─────────────────────────────────────────────
  // 30 MONTHS
  // CDC 2022 ADDITION: cdc.gov/act-early/milestones/30-months.html
  // "50 words" is the key language milestone here per CDC 2022
  // ─────────────────────────────────────────────
  {
    id: "30m",
    label: "30 Months",
    sublabel: "2½ Years",
    milestones: [
      // Social/Emotional
      m("Plays next to other children and sometimes plays with them", "social-emotional"),
      m("Shows you what she can do by saying 'look at me!'", "social-emotional"),
      m("Follows simple routines when told, like helping to pick up toys when you say 'it's clean-up time'", "social-emotional"),

      // Language/Communication
      m("Says about 50 words", "expressive-language"), // moved from 24m to 30m per CDC 2022
      m("Says two or more words together with one action word, like 'doggie run'", "expressive-language"),
      m("Names things in a book when you point and ask 'what is this?'", "expressive-language"), // CDC 2022
      m("Says first name when asked", "expressive-language"),
      m("Understands 'on,' 'in,' and 'under'", "receptive-language"),

      // Cognitive
      m("Uses things to pretend, like feeding a block to a doll as if it's food", "cognitive"),
      m("Shows simple problem-solving, like standing on a small stool to reach something", "cognitive"),
      m("Follows two-step instructions, like 'put the toy down and wash your hands'", "cognitive"),
      m("Identifies at least one color when asked 'what color is this?'", "cognitive"),

      // Movement/Physical
      m("Uses hands to twist things, like turning doorknobs or unscrewing lids", "fine-motor"),
      m("Takes some clothes off by himself, like loose pants or an open jacket", "self-help"),
      m("Jumps off the ground with both feet", "gross-motor"),
      m("Turns book pages, one at a time, when you read to her", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 3 YEARS
  // CDC 2022: cdc.gov/act-early/milestones/3-years.html
  // ─────────────────────────────────────────────
  {
    id: "3y",
    label: "3 Years",
    sublabel: "Preschool",
    milestones: [
      // Social/Emotional
      m("Calms down within 10 minutes after you leave her, like at a childcare drop-off", "social-emotional"),
      m("Notices other children and joins them to play", "social-emotional"),

      // Language/Communication
      m("Talks with you in conversation using at least two back-and-forth exchanges", "expressive-language"),
      m("Asks 'who,' 'what,' 'where,' or 'why' questions, like 'where is daddy?'", "expressive-language"),
      m("Says what action is happening in a picture or book when asked, like 'running' or 'eating'", "expressive-language"),
      m("Says first name, last name, and age", "expressive-language"),
      m("Talks well enough for others to understand, most of the time", "expressive-language"),
      m("Follows instructions with two or three steps, like 'go to your room, pick up your stuffed animals, and bring them here'", "receptive-language"),
      m("Understands 'on,' 'in,' and 'under'", "receptive-language"),

      // Cognitive
      m("Draws a circle when you show her how", "cognitive"),
      m("Avoids touching hot objects, like a stove, when you warn her", "cognitive"),

      // Movement/Physical
      m("Strings items together, like large beads or macaroni", "fine-motor"),
      m("Puts on some clothing by himself, like loose pants or a jacket", "self-help"),
      m("Uses a fork", "self-help"),
      m("Pedals a tricycle", "gross-motor"),
      m("Runs, catches a large ball most of the time", "gross-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 4 YEARS
  // CDC 2022: cdc.gov/act-early/milestones/4-years.html
  // ─────────────────────────────────────────────
  {
    id: "4y",
    label: "4 Years",
    sublabel: "Preschool",
    milestones: [
      // Social/Emotional
      m("Pretends to be something else during play (teacher, superhero, dog)", "social-emotional"),
      m("Comforts others who are hurt or sad, like hugging a crying friend", "social-emotional"),
      m("Avoids danger, like not jumping from tall heights at the playground", "social-emotional"),
      m("Likes to be a helper", "social-emotional"),
      m("Changes behavior based on where she is (classroom vs. playground)", "social-emotional"), // CDC 2022

      // Language/Communication
      m("Says sentences with four or more words", "expressive-language"), // CDC 2022
      m("Says some words from a song, poem, or nursery rhyme", "expressive-language"), // CDC 2022
      m("Talks about at least one thing that happened during his day", "expressive-language"), // CDC 2022
      m("Answers simple questions like 'what is a coat for?' or 'what is a crayon for?'", "expressive-language"),

      // Cognitive
      m("Names a few colors of items", "cognitive"), // CDC 2022
      m("Tells what comes next in a well-known story", "cognitive"), // CDC 2022
      m("Draws a person with three or more body parts", "cognitive"), // CDC 2022

      // Movement/Physical
      m("Catches a large ball most of the time", "gross-motor"), // CDC 2022
      m("Serves herself food or pours water with adult supervision", "self-help"),
      m("Unbuttons some buttons", "self-help"),
      m("Holds crayon or pencil between fingers and thumb (not a fist)", "fine-motor"),
    ],
  },

  // ─────────────────────────────────────────────
  // 5 YEARS
  // CDC 2022: cdc.gov/act-early/milestones/5-years.html
  // ─────────────────────────────────────────────
  {
    id: "5y",
    label: "5 Years",
    sublabel: "School-Age",
    milestones: [
      // Social/Emotional
      m("Follows rules or takes turns when playing games with other children", "social-emotional"),
      m("Sings, dances, or acts for you", "social-emotional"),
      m("Does simple chores at home, like matching socks or clearing the table", "social-emotional"),

      // Language/Communication
      m("Tells a story she heard or made up with at least two events", "expressive-language"), // CDC 2022
      m("Answers simple questions about a book or story after you read or tell it to him", "expressive-language"), // CDC 2022
      m("Keeps a conversation going with more than three back-and-forth exchanges", "expressive-language"), // CDC 2022
      m("Uses or recognizes simple rhymes (bat-cat, ball-tall)", "expressive-language"), // CDC 2022

      // Cognitive
      m("Counts to 10", "cognitive"), // CDC 2022
      m("Names some numbers between 1 and 5 when you point to them", "cognitive"), // CDC 2022
      m("Uses words about time, like 'yesterday,' 'tomorrow,' 'morning,' or 'night'", "cognitive"), // CDC 2022
      m("Pays attention for 5 to 10 minutes during activities", "cognitive"),
      m("Writes some letters in her name", "cognitive"), // CDC 2022
      m("Names some letters when you point to them", "cognitive"), // CDC 2022

      // Movement/Physical
      m("Buttons some buttons", "fine-motor"),
      m("Hops on one foot", "gross-motor"),
      m("Dresses and undresses without help", "self-help"),
    ],
  },
];
