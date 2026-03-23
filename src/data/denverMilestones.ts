export type Domain = "gross-motor" | "fine-motor" | "language" | "personal-social";

export interface Milestone {
  id: string;
  title: string;
  domain: Domain;
  percentPassing?: string;
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
  "language": "Language",
  "personal-social": "Social",
};

export const domainColors: Record<Domain, string> = {
  "gross-motor": "bg-domain-gross-motor/20 text-foreground border-domain-gross-motor/40",
  "fine-motor": "bg-domain-fine-motor/40 text-foreground border-domain-fine-motor/60",
  "language": "bg-domain-language/30 text-foreground border-domain-language/50",
  "personal-social": "bg-domain-personal-social/20 text-foreground border-domain-personal-social/40",
};

export const domainBadgeColors: Record<Domain, string> = {
  "gross-motor": "bg-domain-gross-motor/30 text-foreground",
  "fine-motor": "bg-domain-fine-motor/50 text-foreground",
  "language": "bg-domain-language/40 text-foreground",
  "personal-social": "bg-domain-personal-social/30 text-foreground",
};

let _id = 0;
const m = (title: string, domain: Domain, percentPassing?: string): Milestone => ({
  id: String(++_id),
  title,
  domain,
  percentPassing,
});

export const ageGroups: AgeGroup[] = [
  {
    id: "0-1m",
    label: "0–1 Month",
    sublabel: "Newborn",
    milestones: [
      m("Equal movements", "gross-motor"),
      m("Head up momentarily", "gross-motor"),
      m("Regard face", "fine-motor"),
      m("Respond to bell", "language"),
      m("Vocalizes (not crying)", "language"),
      m("Smile responsively", "personal-social"),
    ],
  },
  {
    id: "2m",
    label: "2 Months",
    sublabel: "Early Infancy",
    milestones: [
      m("Head up 45°", "gross-motor", "90%"),
      m("Equal movements", "gross-motor"),
      m("Follow past midline", "fine-motor"),
      m("Regard face", "fine-motor"),
      m("Vocalizes (not crying)", "language"),
      m("Respond to bell", "language"),
      m("Smile spontaneously", "personal-social"),
      m("Smile responsively", "personal-social"),
    ],
  },
  {
    id: "4m",
    label: "4 Months",
    sublabel: "Infancy",
    milestones: [
      m("Head up 90°", "gross-motor", "90%"),
      m("Sit – head steady", "gross-motor"),
      m("Bear weight on legs", "gross-motor"),
      m("Chest up – arm support", "gross-motor"),
      m("Follow 180°", "fine-motor"),
      m("Hands together", "fine-motor"),
      m("Grasp rattle", "fine-motor"),
      m("Regard raisin", "fine-motor"),
      m("Squeals", "language"),
      m("Laughs", "language"),
      m("\"Ooo/Aah\"", "language"),
      m("Regard own hand", "personal-social"),
      m("Smile spontaneously", "personal-social"),
    ],
  },
  {
    id: "6m",
    label: "6 Months",
    sublabel: "Infancy",
    milestones: [
      m("Roll over", "gross-motor", "90%"),
      m("Pull to sit – no head lag", "gross-motor"),
      m("Sit – no support", "gross-motor"),
      m("Reaches", "fine-motor"),
      m("Rake raisin", "fine-motor"),
      m("Look for yarn", "fine-motor"),
      m("Pass cube", "fine-motor"),
      m("Turn to rattling sound", "language"),
      m("Turn to voice", "language"),
      m("Feed self", "personal-social"),
      m("Work for toy", "personal-social"),
    ],
  },
  {
    id: "9m",
    label: "9 Months",
    sublabel: "Late Infancy",
    milestones: [
      m("Get to sitting", "gross-motor"),
      m("Stand holding on", "gross-motor"),
      m("Pull to stand", "gross-motor"),
      m("Thumb-finger grasp", "fine-motor"),
      m("Take 2 cubes", "fine-motor"),
      m("Bang 2 cubes held in hands", "fine-motor"),
      m("Dada/Mama nonspecific", "language"),
      m("Combine syllables", "language"),
      m("Jabbers", "language"),
      m("Imitate speech sounds", "language"),
      m("Wave bye-bye", "personal-social"),
      m("Indicate wants", "personal-social"),
      m("Play pat-a-cake", "personal-social"),
    ],
  },
  {
    id: "12m",
    label: "12 Months",
    sublabel: "1 Year",
    milestones: [
      m("Walk holding on furniture", "gross-motor"),
      m("Stand alone", "gross-motor"),
      m("Stoop and recover", "gross-motor"),
      m("Walk well", "gross-motor"),
      m("Put block in cup", "fine-motor"),
      m("Dump raisin, demonstrated", "fine-motor"),
      m("Scribbles", "fine-motor"),
      m("Dada/Mama specific", "language"),
      m("1 word", "language"),
      m("2 words", "language"),
      m("Play ball with examiner", "personal-social"),
      m("Imitate activities", "personal-social"),
      m("Drink from cup", "personal-social"),
    ],
  },
  {
    id: "15m",
    label: "15 Months",
    sublabel: "Toddler",
    milestones: [
      m("Walk well", "gross-motor", "90%"),
      m("Walk backwards", "gross-motor"),
      m("Run", "gross-motor"),
      m("Tower of 2 cubes", "fine-motor"),
      m("Scribbles", "fine-motor"),
      m("3 words", "language"),
      m("6 words", "language"),
      m("Imitate activities", "personal-social"),
      m("Drink from cup", "personal-social"),
      m("Use spoon/fork", "personal-social"),
    ],
  },
  {
    id: "18m",
    label: "18 Months",
    sublabel: "Toddler",
    milestones: [
      m("Walk up steps", "gross-motor"),
      m("Run", "gross-motor"),
      m("Kick ball forward", "gross-motor"),
      m("Tower of 4 cubes", "fine-motor"),
      m("Imitate vertical line", "fine-motor"),
      m("6 words", "language"),
      m("Combine words", "language"),
      m("Point 2 pictures", "language"),
      m("Remove garment", "personal-social"),
      m("Feed doll", "personal-social"),
      m("Use spoon/fork", "personal-social"),
    ],
  },
  {
    id: "24m",
    label: "24 Months",
    sublabel: "2 Years",
    milestones: [
      m("Kick ball forward", "gross-motor"),
      m("Jump up", "gross-motor"),
      m("Throw ball overhand", "gross-motor"),
      m("Tower of 6 cubes", "fine-motor"),
      m("Imitate vertical line", "fine-motor"),
      m("Name 1 picture", "language"),
      m("Point 4 pictures", "language"),
      m("Combine words", "language"),
      m("Body parts – 6", "language"),
      m("Speech half understandable", "language"),
      m("Put on clothing", "personal-social"),
      m("Wash & dry hands", "personal-social"),
      m("Brush teeth with help", "personal-social"),
    ],
  },
  {
    id: "3y",
    label: "3 Years",
    sublabel: "Preschool",
    milestones: [
      m("Broad jump", "gross-motor"),
      m("Balance each foot 1 second", "gross-motor"),
      m("Balance each foot 2 seconds", "gross-motor"),
      m("Tower of 8 cubes", "fine-motor"),
      m("Thumb wiggle", "fine-motor"),
      m("Copy ○", "fine-motor"),
      m("Name 4 pictures", "language"),
      m("Know 2 actions", "language"),
      m("Know 2 adjectives", "language"),
      m("Use of 2 objects", "language"),
      m("Count 1 block", "language"),
      m("Speech all understandable", "language"),
      m("Name friend", "personal-social"),
      m("Put on T-shirt", "personal-social"),
      m("Dress, no help", "personal-social"),
    ],
  },
  {
    id: "4y",
    label: "4 Years",
    sublabel: "Preschool",
    milestones: [
      m("Balance each foot 3 seconds", "gross-motor"),
      m("Balance each foot 4 seconds", "gross-motor"),
      m("Hops", "gross-motor"),
      m("Copy +", "fine-motor"),
      m("Pick longer line", "fine-motor"),
      m("Draw person – 3 parts", "fine-motor"),
      m("Name 4 colors", "language"),
      m("Understand 4 prepositions", "language"),
      m("Know 3 adjectives", "language"),
      m("Know 4 actions", "language"),
      m("Count 5 blocks", "language"),
      m("Play board/card games", "personal-social"),
      m("Dress, no help", "personal-social"),
      m("Brush teeth, no help", "personal-social"),
    ],
  },
  {
    id: "5y",
    label: "5 Years",
    sublabel: "School-Age",
    milestones: [
      m("Balance each foot 5 seconds", "gross-motor"),
      m("Balance each foot 6 seconds", "gross-motor"),
      m("Heel-to-toe walk", "gross-motor"),
      m("Copy □", "fine-motor"),
      m("Draw person – 6 parts", "fine-motor"),
      m("Define 5 words", "language"),
      m("Define 7 words", "language", "88%"),
      m("Name 4 colors", "language"),
      m("Count 5 blocks", "language"),
      m("Opposites – 2", "language"),
      m("Use of 3 objects", "language"),
      m("Prepare cereal", "personal-social"),
      m("Brush teeth, no help", "personal-social"),
      m("Play board/card games", "personal-social"),
    ],
  },
  {
    id: "6y",
    label: "6 Years",
    sublabel: "School-Age",
    milestones: [
      m("Heel-to-toe walk", "gross-motor", "90%"),
      m("Balance each foot 6 seconds", "gross-motor", "90%"),
      m("Draw person – 6 parts", "fine-motor", "90%"),
      m("Copy □", "fine-motor", "90%"),
      m("Define 7 words", "language", "88%"),
      m("Opposites – 2", "language"),
      m("Use of 3 objects", "language"),
      m("Prepare cereal", "personal-social"),
    ],
  },
];
