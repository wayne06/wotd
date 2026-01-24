// Word lists
const wordLists = {
    cet6: [
        'ABSORB', 'ACCEPT', 'ACCESS', 'ACCUSE', 'ACHIEVE', 'ACQUIRE', 'ACTIVE', 'ADJUST', 'ADVANCE', 'ADVICE',
        'AFFORD', 'ALERT', 'ALIVE', 'ALLOW', 'ALONE', 'AMOUNT', 'ANSWER', 'APPEAR', 'APPLY', 'ARREST', 'ARRIVE',
        'ARTIST', 'ASPECT', 'ASSIST', 'ASSUME', 'ATTACK', 'ATTEND', 'AUTHOR', 'AUTOMATIC', 'AVOID', 'AWARD',
        'BECOME', 'BEHAVE', 'BELIEF', 'BELONG', 'BENEFIT', 'BOTHER', 'BOTTOM', 'BRIGHT', 'BROAD', 'BROKEN',
        'BUDGET', 'BURDEN', 'BURN', 'BUSINESS', 'CALENDAR', 'CAMERA', 'CAMPAIGN', 'CARBON', 'CARRY', 'CATCH',
        'CAUSE', 'CEASE', 'CELEBRATE', 'CHANCE', 'CHANGE', 'CHARGE', 'CHOICE', 'CHOOSE', 'CIRCLE', 'CIRCUMSTANCE',
        'CITIZEN', 'CIVIL', 'CLASS', 'CLEAN', 'CLEAR', 'CLIENT', 'CLIMB', 'CLOSE', 'CLOTHES', 'COLLECT', 'COLLEGE',
        'COMBINE', 'COMFORT', 'COMMAND', 'COMMENT', 'COMMIT', 'COMMUNITY', 'COMPETE', 'COMPLEX', 'CONCEPT', 'CONCERN',
        'CONCLUDE', 'CONDITION', 'CONDUCT', 'CONFUSE', 'CONNECT', 'CONSIDER', 'CONSUME', 'CONTACT', 'CONTAIN',
        'CONTEXT', 'CONTINUE', 'CONTRACT', 'CONTRAST', 'CONTRIBUTE', 'CONTROL', 'CONVERT', 'COOK', 'COOL',
        'COOPERATE', 'COORDINATE', 'COP', 'COPY', 'CORPORATION', 'CORRECT', 'COST', 'COUNT', 'COURSE', 'COVER',
        'CREATE', 'CRITICAL', 'CRITICIZE', 'CULTURAL', 'CURRENCY', 'CURRENT', 'CUSTOMER', 'CUT', 'DAMAGE', 'DANGER',
        'DARK', 'DATA', 'DATE', 'DAUGHTER', 'DEAD', 'DEAL', 'DEBT', 'DECADE', 'DECIDE', 'DECLARE', 'DECLINE',
        'DECREASE', 'DEEP', 'DEFEND', 'DEFINE', 'DEGREE', 'DELAY', 'DELETE', 'DELIVER', 'DEMAND', 'DEPEND',
        'DESIGN', 'DESIRE', 'DETAIL', 'DEVELOP', 'DEVICE', 'DEVOTE', 'DIFFER', 'DINNER', 'DIRECT', 'DOCTOR',
        'DRAMA', 'DRAW', 'DREAM', 'DRIVE', 'DROP', 'DRUG', 'DRY', 'DUE', 'DURING', 'EACH', 'EARLY', 'EARN',
        'EARTH', 'EASILY', 'EATING', 'ECONOMY', 'EDITION', 'EDUCATION', 'EFFECT', 'EFFORT', 'EIGHTH', 'EITHER',
        'ELECT', 'ELEMENT', 'ELIMINATE', 'ELSE', 'EMERGE', 'EMOTION', 'ENABLE', 'ENDING', 'ENERGY', 'ENGAGE',
        'ENGINE', 'ENJOY', 'ENOUGH', 'ENTIRE', 'EQUALITY', 'EQUATION', 'EQUIPMENT', 'ERROR', 'ESCAPE', 'ESPECIALLY',
        'ESSAY', 'ESTABLISH', 'ESTIMATE', 'EVALUATE', 'EVENT', 'EVIDENCE', 'EXACT', 'EXAMINE', 'EXAMPLE', 'EXCUSE',
        'EXECUTE', 'EXERCISE', 'EXPAND', 'EXPECT', 'EXPERT', 'EXPORT', 'EXTEND', 'EXTENT', 'EXTERNAL', 'EXTRA',
        'EXTREME', 'EYES', 'FABRIC', 'FACIAL', 'FACTOR', 'FAIL', 'FAIR', 'FALL', 'FALSE', 'FAMILY', 'FAMOUS',
        'FAR', 'FASHION', 'FAVORITE', 'FEATURE', 'FEDERAL', 'FEEL', 'FIGHT', 'FIGURE', 'FILL', 'FILM', 'FINAL',
        'FINANCE', 'FINDING', 'FINGER', 'FINISH', 'FIRM', 'FIRST', 'FISCAL', 'FIT', 'FLIGHT', 'FLOWER', 'FOLLOW',
        'FORCE', 'FOREIGN', 'FOREST', 'FORGET', 'FORM', 'FORMAT', 'FORMER', 'FORWARD', 'FOUND', 'FRAME', 'FREE',
        'FRIEND', 'FRONT', 'FUNCTION', 'FUND', 'FURTHER', 'FUTURE', 'GAIN', 'GAME', 'GARDEN', 'GATE', 'GATHER',
        'GENDER', 'GENERAL', 'GENERATE', 'GENERATION', 'GENETIC', 'GENTLE', 'GERMAN', 'GLOBAL', 'GLORY', 'GO',
        'GOAL', 'GOOD', 'GOVERN', 'GRACE', 'GRADE', 'GRADUAL', 'GRANT', 'GRAPH', 'GRASS', 'GRAVITY', 'GREAT',
        'GREEN', 'GROUND', 'GROUP', 'GROW', 'GROWTH', 'GUARD', 'GUIDE', 'HABIT', 'HAIR', 'HALF', 'HALL', 'HAND',
        'HANDLE', 'HANG', 'HAPPEN', 'HAPPY', 'HARD', 'HEAD', 'HEALTH', 'HEIGHT', 'HIDDEN', 'HOLD', 'HONOR',
        'HOPE', 'HORSE', 'HOSPITAL', 'HOTEL', 'HOUSE', 'HOWEVER', 'HUGE', 'HUMAN', 'IDEAL', 'IDENTITY', 'IGNORE',
        'ILL', 'ILLEGAL', 'ILLNESS', 'IMAGE', 'IMAGINE', 'IMPACT', 'IMPORT', 'INCOME', 'INCREASE', 'INDEX',
        'INDICATE', 'INDIVIDUAL', 'INDUSTRY', 'INFORM', 'INITIAL', 'INJURY', 'INSIDE', 'INTEND', 'INTENSE',
        'INTERACT', 'INTEREST', 'INTERNAL', 'INTERNATIONAL', 'INTERPRET', 'INTERVAL', 'INTRODUCE', 'INVITE',
        'IRON', 'ISSUE', 'ITEM', 'JOKE', 'JUDGE', 'JUMP', 'JUNIOR', 'KEEP', 'KEY', 'KILL', 'KIND', 'KING',
        'KNOWLEDGE', 'LABOR', 'LACK', 'LARGE', 'LATE', 'LATELY', 'LATER', 'LAUGH', 'LAUNCH', 'LAWYER', 'LEAD',
        'LEADER', 'LEADING', 'LEAF', 'LEARN', 'LEAVE', 'LEGAL', 'LEGEND', 'LENGTH', 'LESS', 'LET', 'LEVEL',
        'LIBRARY', 'LICENSE', 'LIFE', 'LIFT', 'LIGHT', 'LIMIT', 'LINK', 'LIST', 'LISTEN', 'LIVING', 'LOCAL',
        'LOCATE', 'LOCK', 'LOGIC', 'LONG', 'LOOK', 'LOOSE', 'LOSE', 'LOSS', 'LOT', 'LOVE', 'LOWER', 'LUCKY',
        'MACHINE', 'MAIN', 'MAINLY', 'MAINTAIN', 'MAJOR', 'MAKE', 'MALE', 'MANAGE', 'MANNER', 'MARRY', 'MASS',
        'MASTER', 'MATTER', 'MAYOR', 'MEAL', 'MEAN', 'MEASURE', 'MEDIA', 'MEDICAL', 'MEET', 'MENTAL', 'MERELY',
        'METHOD', 'MIDDLE', 'MIGHT', 'MILITARY', 'MINIMUM', 'MINISTER', 'MINOR', 'MINUTE', 'MIRROR', 'MISSING',
        'MISSION', 'MODEL', 'MODERN', 'MODULE', 'MOMENT', 'MONEY', 'MONITOR', 'MONTH', 'MORAL', 'MORE', 'MORNING',
        'MOSTLY', 'MOTHER', 'MOTION', 'MOTOR', 'MOUNT', 'MOUSE', 'MOUTH', 'MOVE', 'MOVIE', 'MOVING', 'MUSIC',
        'MUST', 'MYSELF', 'NATION', 'NATIVE', 'NATURE', 'NEAR', 'NEARLY', 'NECESSARY', 'NEGATIVE', 'NET', 'NEVER',
        'NEW', 'NEWS', 'NEXT', 'NICE', 'NIGHT', 'NOBODY', 'NORMAL', 'NORTH', 'NOT', 'NOTE', 'NOTICE', 'NOW',
        'NUMBER', 'OBJECT', 'OBSERVE', 'OBTAIN', 'OCCUR', 'OFFER', 'OFFICE', 'OFTEN', 'OIL', 'OKAY', 'OLD',
        'ON', 'ONCE', 'ONE', 'ONLY', 'OPEN', 'OPERATION', 'OPINION', 'OPPORTUNITY', 'OPTION', 'ORDER', 'ORGANIC',
        'ORGANIZE', 'ORIGINAL', 'OTHER', 'OUR', 'OUT', 'OUTPUT', 'OWN', 'PAINT', 'PAPER', 'PARENT', 'PART',
        'PARTY', 'PASS', 'PATTERN', 'PAY', 'PEACE', 'PERIOD', 'PERMIT', 'PERSON', 'PHOTO', 'PHYSICAL', 'PICTURE',
        'PIECE', 'PLACE', 'PLAN', 'PLANT', 'PLASTIC', 'PLATFORM', 'PLAYER', 'PLEASE', 'PLENTY', 'PLUS', 'POINT',
        'POLICY', 'POLITICAL', 'POPULAR', 'PORTION', 'POSITION', 'POSITIVE', 'POSSIBLE', 'POST', 'POTENTIAL',
        'POWER', 'PRACTICE', 'PRESENT', 'PRESS', 'PRESSURE', 'PRETTY', 'PREVENT', 'PRICE', 'PRIMARY', 'PRIME',
        'PRINCIPAL', 'PRIORITY', 'PRIVATE', 'PROBABLY', 'PROBLEM', 'PROCEDURE', 'PROCESS', 'PRODUCE', 'PRODUCT',
        'PROFESSION', 'PROGRAM', 'PROJECT', 'PROPERTY', 'PROTECT', 'PROVE', 'PROVIDE', 'PUBLIC', 'PURPOSE',
        'PUSH', 'PUT', 'QUALITY', 'QUARTER', 'QUESTION', 'QUICK', 'QUIET', 'QUITE', 'QUOTE', 'RACE', 'RAISE',
        'RANGE', 'RAPID', 'RATE', 'RATHER', 'REACH', 'READ', 'READY', 'REAL', 'REALITY', 'REALIZE', 'REALLY',
        'REASON', 'RECEIVE', 'RECENT', 'RECOGNIZE', 'RECORD', 'RED', 'REDUCE', 'REFORM', 'REFUSE', 'REGION',
        'RELATE', 'RELATION', 'RELATIVE', 'RELAX', 'RELEASE', 'RELEVANT', 'RELIEF', 'REMOVE', 'REPEAT', 'REPLACE',
        'REPLY', 'REPORT', 'REPRESENT', 'REQUIRE', 'RESEARCH', 'RESOURCE', 'RESPOND', 'RESPONSE', 'RESULT',
        'RETURN', 'REVEAL', 'REVIEW', 'REWARD', 'RICH', 'RIGHT', 'RISE', 'RISK', 'ROAD', 'ROLE', 'ROLL', 'ROOM',
        'ROUGH', 'ROUND', 'ROUTE', 'RULE', 'RUN', 'SAFE', 'SAFETY', 'SALE', 'SAME', 'SAMPLE', 'SAVE', 'SAY',
        'SCALE', 'SCENE', 'SCHEME', 'SCHOOL', 'SCIENCE', 'SCORE', 'SCREEN', 'SCRIPT', 'SEA', 'SEARCH', 'SEASON',
        'SECOND', 'SECTION', 'SECTOR', 'SECURITY', 'SEEK', 'SELECT', 'SELL', 'SEND', 'SENIOR', 'SERIES', 'SERVE',
        'SERVICE', 'SET', 'SEVEN', 'SEVERAL', 'SEX', 'SHAKE', 'SHARE', 'SHARP', 'SHEET', 'SHINE', 'SHIP', 'SHOCK',
        'SHOOT', 'SHORT', 'SHOW', 'SIDE', 'SIGN', 'SIGNAL', 'SIGNIFICANT', 'SILENCE', 'SILVER', 'SIMILAR',
        'SIMPLE', 'SINGLE', 'SISTER', 'SIT', 'SITE', 'SITUATION', 'SIX', 'SIZE', 'SKILL', 'SKIN', 'SLIGHT',
        'SLOW', 'SMALL', 'SMART', 'SMILE', 'SO', 'SOCIAL', 'SOCIETY', 'SOFT', 'SOFTWARE', 'SOLID', 'SOLUTION',
        'SOME', 'SOMEBODY', 'SOMEHOW', 'SOMEONE', 'SOMETHING', 'SOMETIMES', 'SON', 'SONG', 'SOON', 'SORT', 'SOUND',
        'SOURCE', 'SOUTH', 'SPACE', 'SPAIN', 'SPANISH', 'SPEAK', 'SPECIAL', 'SPECIES', 'SPECIFIC', 'SPEECH',
        'SPEED', 'SPEND', 'SPIRIT', 'SPLIT', 'SPOKEN', 'SPORT', 'SPOT', 'SPRING', 'STAFF', 'STAGE', 'STAND',
        'STANDARD', 'STAR', 'START', 'STATE', 'STATEMENT', 'STATION', 'STATUS', 'STAY', 'STEAL', 'STEP', 'STICK',
        'STILL', 'STOCK', 'STOP', 'STORE', 'STORY', 'STRATEGY', 'STREET', 'STRONG', 'STRUGGLE', 'STUDY', 'STUFF',
        'STYLE', 'SUBJECT', 'SUBMIT', 'SUDDEN', 'SUFFER', 'SUFFICIENT', 'SUGGEST', 'SUITE', 'SUMMER', 'SUN',
        'SUPPLY', 'SUPPORT', 'SUPPOSE', 'SURE', 'SURFACE', 'SURPRISE', 'SURVEY', 'SURVIVE', 'SWITCH', 'SYMBOL',
        'SYSTEM', 'TABLE', 'TAKE', 'TALK', 'TARGET', 'TASK', 'TEACH', 'TEAM', 'TECHNICAL', 'TECHNOLOGY', 'TELEPHONE',
        'TELL', 'TEN', 'TEND', 'TERM', 'TEST', 'THAN', 'THANK', 'THAT', 'THEME', 'THEORY', 'THERE', 'THESE',
        'THINK', 'THIRD', 'THIS', 'THOSE', 'THOUGH', 'THREAT', 'THREE', 'THROUGH', 'THROW', 'THUS', 'TICKET',
        'TIME', 'TITLE', 'TO', 'TODAY', 'TOGETHER', 'TOMORROW', 'TONIGHT', 'TOO', 'TOOL', 'TOP', 'TOTAL', 'TOUCH',
        'TOUGH', 'TOUR', 'TOWARD', 'TRACK', 'TRADE', 'TRADITION', 'TRAIL', 'TRAIN', 'TRANSPORT', 'TRAVEL', 'TREAT',
        'TREATMENT', 'TREND', 'TRIAL', 'TRIP', 'TROUBLE', 'TRUE', 'TRUST', 'TRUTH', 'TRY', 'TURN', 'TWELVE',
        'TWENTY', 'TWO', 'TYPE', 'ULTIMATE', 'UNDER', 'UNDERSTAND', 'UNION', 'UNIT', 'UNITED', 'UNLESS', 'UNLIKE',
        'UNTIL', 'UP', 'UPDATE', 'UPON', 'USE', 'USED', 'USEFUL', 'USER', 'USUAL', 'UTILITY', 'VALUE', 'VARIETY',
        'VARIOUS', 'VERSION', 'VIDEO', 'VIEW', 'VILLAGE', 'VIOLENCE', 'VISION', 'VISIT', 'VISUAL', 'VOLUME', 'VOTE',
        'WAIT', 'WALK', 'WALL', 'WANT', 'WAR', 'WARM', 'WARN', 'WASH', 'WASTE', 'WATCH', 'WATER', 'WAVE', 'WAY',
        'WE', 'WEALTH', 'WEAPON', 'WEAR', 'WEATHER', 'WEB', 'WEEK', 'WEIGHT', 'WELCOME', 'WELL', 'WENT', 'WERE',
        'WEST', 'WHAT', 'WHATEVER', 'WHEN', 'WHERE', 'WHETHER', 'WHICH', 'WHILE', 'WHITE', 'WHO', 'WHOLE', 'WHOM',
        'WHOSE', 'WHY', 'WIDE', 'WIFE', 'WILL', 'WIN', 'WINDOW', 'WINE', 'WING', 'WINNER', 'WINTER', 'WISE',
        'WISH', 'WITH', 'WITHIN', 'WITHOUT', 'WOMAN', 'WONDER', 'WOOD', 'WORD', 'WORK', 'WORKER', 'WORLD',
        'WORRY', 'WOULD', 'WRITE', 'WRITER', 'WRONG', 'YEAR', 'YELLOW', 'YES', 'YET', 'YOU', 'YOUNG', 'YOUR',
        'YOUTH'
    ],
    ielts: [
        'ABUNDANT', 'ACCESSIBLE', 'ACCOMMODATION', 'ACCOMPANYING', 'ACCURACY', 'ADAPTIVE', 'ADEQUACY', 'ADJUSTABLE',
        'ADMINISTRATIVE', 'ADVANTAGEOUS', 'AESTHETICALLY', 'AFFECTIVE', 'AGRICULTURAL', 'ALTERNATIVE', 'AMBIGUOUS',
        'ANALYTICAL', 'ANECDOTAL', 'ANNOUNCEMENT', 'ANTHROPOLOGICAL', 'APPARENTLY', 'APPLICABILITY', 'APPRECIABLE',
        'APPROXIMATELY', 'ARBITRARILY', 'ARCHITECTURAL', 'ARTIFICIAL', 'ASSOCIATED', 'ASSUMPTION', 'ATMOSPHERIC',
        'AUTHENTICITY', 'AUTOMATION', 'AVAILABILITY', 'BEAUTIFULLY', 'BEHAVIOURAL', 'BENEFICIARY', 'BIOLOGICAL',
        'BREAKTHROUGH', 'BROADCASTING', 'BUREAUCRATIC', 'CALCULATION', 'CAPACITIES', 'CATEGORICAL', 'CELEBRATION',
        'CHARACTERISTIC', 'CHRONOLOGICAL', 'CIRCUMSTANCES', 'CLASSIFICATION', 'CLIMATOLOGY', 'COGNITIVELY',
        'COLLABORATION', 'COMBINATION', 'COMMEMORATION', 'COMMUNICATION', 'COMPARATIVE', 'COMPATIBILITY', 'COMPENSATION',
        'COMPETITION', 'COMPLEXITIES', 'COMPREHENSIVE', 'COMPUTATIONAL', 'CONCENTRATION', 'CONCEPTUALLY', 'CONCERNED',
        'CONCLUSION', 'CONCURRENTLY', 'CONDITIONALLY', 'CONFIDENTIAL', 'CONFIGURATION', 'CONFIRMATION', 'CONFRONTATION',
        'CONGRATULATION', 'CONNECTION', 'CONSEQUENTLY', 'CONSERVATION', 'CONSIDERABLE', 'CONSISTENTLY', 'CONSTITUTIONAL',
        'CONSTRUCTION', 'CONSULTATION', 'CONTEMPORARY', 'CONTINUOUSLY', 'CONTRIBUTORY', 'CONVENIENCE', 'CONVERSATION',
        'COOPERATION', 'COORDINATED', 'CORPORATION', 'CORRELATION', 'CORRESPONDENCE', 'CREDIBILITY', 'CRITERIA',
        'CRITICALLY', 'CULTIVATION', 'CURRICULUM', 'DECLARATION', 'DEMONSTRATION', 'DENOMINATION', 'DEPARTMENTAL',
        'DESCRIPTION', 'DESTRUCTION', 'DEVELOPMENTAL', 'DIFFERENTIATE', 'DIMENSIONAL', 'DISADVANTAGE', 'DISAPPOINTMENT',
        'DISCIPLINARY', 'DISCONTINUED', 'DISCRIMINATE', 'DISPROPORTION', 'DISTRIBUTION', 'DOCUMENTARY', 'DOMESTICALLY',
        'ECONOMICAL', 'EDUCATIONAL', 'EFFECTIVELY', 'ELECTRONIC', 'ELIGIBILITY', 'EMPHATICALLY', 'ENCOURAGING', 'ENDORSEMENT',
        'ENHANCEMENT', 'ENTERTAINMENT', 'ENVIRONMENTAL', 'EQUIVALENCE', 'ESTABLISHMENT', 'EVALUATION', 'EVENTUALLY',
        'EXAGGERATED', 'EXAMINATION', 'EXCELLENTLY', 'EXCEPTIONALLY', 'EXCLUSIVELY', 'EXECUTION', 'EXPANSION', 'EXPEDITION',
        'EXPERIMENTAL', 'EXPLANATORY', 'EXPLORATION', 'EXTENSIVELY', 'EXTRAORDINARY', 'FACILITATES', 'FAMILIARITY',
        'FANTASTICAL', 'FEASIBILITY', 'FINANCIAL', 'FLEXIBILITY', 'FUNDAMENTALLY', 'FUNCTIONALLY', 'GENERATION', 'GOVERNMENTAL',
        'GRADUATION', 'HAPPENING', 'HARMFUL', 'HEALTHCARE', 'HIERARCHICAL', 'HUMANITARIAN', 'HYPOTHESIS', 'IDENTIFICATION',
        'ILLUSTRATIVE', 'IMAGINATION', 'IMMEDIATELY', 'IMMIGRATION', 'IMPLEMENTATION', 'IMPLICATION', 'IMPORTANTLY',
        'INAPPROPRIATE', 'INCENTIVES', 'INCLUSION', 'INCONSISTENT', 'INDEPENDENTLY', 'INDICATION', 'INDIVIDUALLY',
        'INDUSTRIAL', 'INEFFECTIVE', 'INEQUALITY', 'INFORMATION', 'INHERENTLY', 'INITIATIVE', 'INNOVATIVE', 'INQUIRIES',
        'INSIGHTFUL', 'INSTITUTION', 'INSTRUCTION', 'INSTRUMENTAL', 'INSUFFICIENT', 'INTEGRATION', 'INTELLECTUAL',
        'INTENSIFIED', 'INTERACTION', 'INTERESTING', 'INTERNATIONALLY', 'INTERPRETATION', 'INTERVENTION', 'INTIMATELY',
        'INTRODUCTION', 'INVESTIGATION', 'INVOLVEMENT', 'IRRELEVANT', 'IRRESPONSIBLE', 'JUSTIFICATION', 'KNOWLEDGEABLE',
        'LABORATORY', 'LEGISLATIVE', 'LIMITATION', 'LITERATURE', 'LOGISTICALLY', 'MAINTENANCE', 'MANAGEMENT', 'MANIPULATION',
        'MANUFACTURING', 'MARGINALIZED', 'MARKETPLACE', 'MATHEMATICAL', 'MEANWHILE', 'METHODOLOGY', 'MICROSCOPIC',
        'MIGRATION', 'MINIMIZING', 'MODIFICATION', 'MOTIVATIONAL', 'MULTICULTURAL', 'MULTIDISCIPLINARY', 'MULTIMEDIA',
        'MULTINATIONAL', 'MUTUALLY', 'NARRATIVE', 'NATURALLY', 'NEGOTIATION', 'NEIGHBORHOOD', 'NOMINATION', 'NONPROFIT',
        'NORMALLY', 'NOTIFICATION', 'NUTRITIONAL', 'OBJECTIVELY', 'OBSERVATION', 'OBSTRUCTION', 'OCCASIONALLY', 'OCCUPATION',
        'OFFICIALLY', 'OPERATION', 'OPPORTUNITY', 'ORGANIZATION', 'ORIGINALITY', 'PARTICIPANT', 'PARTICULARLY', 'PERCEPTION',
        'PERFORMANCE', 'PERIODICALLY', 'PERMANENTLY', 'PERSUASIVE', 'PHENOMENON', 'PHILOSOPHICAL', 'PHYSICALLY', 'PLANNED',
        'POPULATION', 'POSITIONING', 'POTENTIALLY', 'PRACTICALLY', 'PRECEDENTS', 'PREDOMINANTLY', 'PREFERENCES', 'PRELIMINARY',
        'PREPARATION', 'PRESERVATION', 'PRESIDENTIAL', 'PREVALENT', 'PREVENTION', 'PRIMARILY', 'PRINCIPALLY', 'PRIORITIES',
        'PROBABILITY', 'PROCEEDINGS', 'PRODUCTION', 'PROFESSIONAL', 'PROGRAMMING', 'PROMINENTLY', 'PROPENSITY', 'PROPORTIONAL',
        'PROPOSAL', 'PROSPECTIVE', 'PROTECTIVE', 'PROVISIONAL', 'PSYCHOLOGICAL', 'PUBLICATION', 'QUALIFICATION', 'QUANTIFIABLE',
        'QUANTITATIVE', 'QUESTIONNAIRE', 'RADIATION', 'REALISTICALLY', 'REASONABLY', 'RECOMMENDATION', 'RECONSTRUCTION',
        'RECORDS', 'RECOVERY', 'REDUCTION', 'REFLECTION', 'REFORMATION', 'REGIONAL', 'REGULATION', 'REHABILITATION',
        'REINFORCEMENT', 'RELATIONSHIP', 'RELATIVELY', 'RELEVANTLY', 'RELIABILITY', 'RELUCTANTLY', 'REMARKABLE', 'REPLACEMENT',
        'REPRESENTATIVE', 'REPRODUCTION', 'REQUIREMENT', 'RESERVATION', 'RESOLUTION', 'RESPONSIBILITY', 'RESTORATION',
        'RESTRICTION', 'RESTRUCTURING', 'RETROSPECTIVE', 'REVOLUTIONARY', 'SATISFACTION', 'SATISFACTORY', 'SCIENTIFIC',
        'SELECTION', 'SIGNIFICANTLY', 'SIMILARITIES', 'SIMULTANEOUSLY', 'SITUATIONAL', 'SOCIOLOGICAL', 'SOLICITATION',
        'SPECIALIZED', 'SPECIFICATION', 'SPECTACULAR', 'SPONSORSHIP', 'STABILIZATION', 'STATEMENT', 'STATISTICAL',
        'STIMULATION', 'STRATEGICALLY', 'STRUCTURALLY', 'SUBSEQUENTLY', 'SUBSTANTIALLY', 'SUCCESSFULLY', 'SUFFICIENTLY',
        'SUGGESTION', 'SUPPORTIVE', 'SURPRISINGLY', 'SUSTAINABLE', 'SYMBOLICALLY', 'SYSTEMATICALLY', 'TECHNICALLY',
        'TECHNOLOGICAL', 'TEMPORARILY', 'TERMINOLOGY', 'THEORETICAL', 'THERAPEUTIC', 'THOROUGHLY', 'TRADITIONALLY',
        'TRANSACTION', 'TRANSFORMATION', 'TRANSLATION', 'TRANSPORTATION', 'TREMENDOUSLY', 'UNEXPECTEDLY', 'UNFORTUNATELY',
        'UNIQUE', 'UNIVERSALLY', 'UNPREPARED', 'UNSUCCESSFUL', 'UTILIZATION', 'VALIDATION', 'VARIABILITY', 'VERSATILITY',
        'VIOLATION', 'VISIBILITY', 'VISUALLY', 'VOLUNTARILY', 'WIDESPREAD', 'WITHDRAWAL'
    ],
    x: [
        'PIZZA', 'JAZZY', 'QUIZ', 'JACK', 'QUICK', 'JOKER', 'ZEBRA', 'JUMBO', 'QUARTZ', 'JAZZ',
        'QUACK', 'JACKET', 'QUAKE', 'JACKAL', 'QUARK', 'JACKPOT', 'QUART', 'QUARTET', 'QUAFF', 'QUAGMIRE',
        'QUAIL', 'QUAINT', 'QUANDARY', 'QUANTUM', 'QUARREL', 'QUARRY', 'QUASH', 'QUASI', 'QUAVER', 'QUAY',
        'QUEASY', 'QUEEN', 'QUEER', 'QUELL', 'QUENCH', 'QUERY', 'QUEST', 'QUESTION', 'QUEUE', 'QUIBBLE',
        'QUID', 'QUIET', 'QUILL', 'QUILT', 'QUINCE', 'QUINT', 'QUIP', 'QUIRE', 'QUIRK', 'QUIT',
        'QUITE', 'QUITS', 'QUIVER', 'QUIXOTIC', 'QUORUM', 'QUOTA', 'QUOTE', 'QUOTIDIAN', 'QUOTIENT',
        'ZANY', 'ZAP', 'ZEAL', 'ZEALOT', 'ZEALOUS', 'ZEBRA', 'ZEN', 'ZENITH', 'ZEPHYR', 'ZERO',
        'ZEST', 'ZESTFUL', 'ZIGZAG', 'ZILCH', 'ZILLION', 'ZINC', 'ZING', 'ZINGER', 'ZIP', 'ZIPPER',
        'ZIRCON', 'ZIT', 'ZITHER', 'ZODIAC', 'ZOMBIE', 'ZONE', 'ZOO', 'ZOOM', 'ZUCCHINI', 'ZYGOTE',
        'FUZZY', 'BUZZ', 'FUZZ', 'FIZZ', 'WHIZZ', 'BUZZY', 'FIZZY', 'PUZZLE', 'MUZZLE', 'GUZZLE',
        'NOZZLE', 'DAZZLE', 'SIZZLE', 'WIZARD', 'LIZARD', 'BLIZZARD', 'DIZZY', 'FIZZLE', 'BAMBOOZLE', 'BEDAZZLE',
        'FRAZZLE', 'FRIZZLE', 'GRIZZLE', 'NUZZLE', 'RAZZLE', 'SWIZZLE', 'TWIZZLE', 'BEMUZZLE', 'BESWIZZLE', 'BETWIZZLE'
    ]
};

// Current selected wordlist
let currentWordList = 'cet6';

// Global variables
let targetWord = '';
let currentRow = 0;
let currentCol = 0; // Current column position
let isGameActive = false;
let keyboardState = {}; // Track keyboard letter states
let isInitializing = false; // Prevent focus changes during game initialization

// Multiplayer variables
let gameMode = 'single'; // 'single' or 'multiplayer'
let currentRoomId = null;
let playerId = null;
let playerRole = null; // 'player1' or 'player2'
let roomRef = null;
let opponentGuesses = [];
let opponentCurrentRow = 0;
let opponentFinished = false;

// Firebase configuration
// Note: You need to create a Firebase project and add your config here
const firebaseConfig = {
    apiKey: "AIzaSyAdZ-hwAgtPPw6a8bQhmsN5XgHIfde7tF4",
    databaseURL: "https://word-game-multiplayer-6d4f8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "word-game-multiplayer-6d4f8",
};

// Initialize Firebase (only if Firebase is available)
let database = null;
if (typeof firebase !== 'undefined') {
    try {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
    } catch (e) {
        console.warn('Firebase initialization failed:', e);
    }
}

// Page elements
const startPage = document.getElementById('startPage');
const singleGamePage = document.getElementById('singleGamePage');
const multiplayerRoomPage = document.getElementById('multiplayerRoomPage');
const multiplayerGamePage = document.getElementById('multiplayerGamePage');

// Start page elements
const startSinglePlayerBtn = document.getElementById('startSinglePlayerBtn');
const startMultiPlayerBtn = document.getElementById('startMultiPlayerBtn');
const startWordlistSelect = document.getElementById('startWordlistSelect');

// Single player DOM elements
const newGameBtn = document.getElementById('newGameBtn');
const gameGrid = document.getElementById('gameGrid');
const messageDiv = document.getElementById('message');
const enterBtn = document.getElementById('enterBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const wordlistSelect = document.getElementById('wordlistSelect');
const backToStartBtn = document.getElementById('backToStartBtn');

// Multiplayer room DOM elements
const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const roomIdInput = document.getElementById('roomIdInput');
const roomInfo = document.getElementById('roomInfo');
const roomIdDisplay = document.getElementById('roomIdDisplay');
const copyRoomIdBtn = document.getElementById('copyRoomIdBtn');
const roomStatus = document.getElementById('roomStatus');
const backToStartBtn2 = document.getElementById('backToStartBtn2');

// Multiplayer game DOM elements
const gameGridMulti = document.getElementById('gameGridMulti');
const keyboardMulti = document.getElementById('keyboardMulti');
const enterBtnMulti = document.getElementById('enterBtnMulti');
const backspaceBtnMulti = document.getElementById('backspaceBtnMulti');
const messageMulti = document.getElementById('messageMulti');
const wordlistSelectMulti = document.getElementById('wordlistSelectMulti');
const newGameBtnMulti = document.getElementById('newGameBtnMulti');
const backToRoomBtn = document.getElementById('backToRoomBtn');
const opponentSection = document.getElementById('opponentSection');
const opponentGrid = document.getElementById('opponentGrid');
const player1Name = document.getElementById('player1Name');
const player2Name = document.getElementById('player2Name');
const player1Status = document.getElementById('player1Status');
const player2Status = document.getElementById('player2Status');

// Modal elements
const wordModal = document.getElementById('wordModal');
const modalTitle = document.getElementById('modalTitle');
const modalWord = document.getElementById('modalWord');
const modalPhonetic = document.getElementById('modalPhonetic');
const modalMeanings = document.getElementById('modalMeanings');
const modalExamples = document.getElementById('modalExamples');
const modalLoading = document.getElementById('modalLoading');
const modalError = document.getElementById('modalError');
const modalClose = document.getElementById('modalClose');
const modalNewGame = document.getElementById('modalNewGame');
const playPronunciationBtn = document.getElementById('playPronunciation');
const modalCloseBtn = document.querySelector('.modal-close');

// Page navigation functions
function showPage(pageId) {
    console.log('Switching to page:', pageId);
    // Hide all pages - use both class and inline style
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
        page.style.visibility = 'hidden';
        page.style.opacity = '0';
        page.style.zIndex = '1';
    });
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // Force inline styles
        targetPage.style.display = 'block';
        targetPage.style.visibility = 'visible';
        targetPage.style.opacity = '1';
        targetPage.style.zIndex = '100';
        targetPage.style.width = '100vw';
        targetPage.style.height = '100vh';
        targetPage.style.position = 'fixed';
        targetPage.style.top = '0';
        targetPage.style.left = '0';
        targetPage.style.right = '0';
        targetPage.style.bottom = '0';
        targetPage.style.margin = '0';
        targetPage.style.padding = '20px';
        targetPage.style.boxSizing = 'border-box';

        // Force a reflow to ensure styles are applied
        void targetPage.offsetWidth;

        console.log('Page activated:', pageId, 'Display:', window.getComputedStyle(targetPage).display);
        console.log('Page position:', targetPage.offsetTop, targetPage.offsetLeft);
        console.log('Page size:', targetPage.offsetWidth, targetPage.offsetHeight);
        console.log('Page getBoundingClientRect:', targetPage.getBoundingClientRect());
        console.log('Page computed width:', window.getComputedStyle(targetPage).width);
        console.log('Page computed height:', window.getComputedStyle(targetPage).height);
    } else {
        console.error('Page not found:', pageId);
    }
}

// Start page event listeners
if (startSinglePlayerBtn) {
    startSinglePlayerBtn.addEventListener('click', () => {
        currentWordList = startWordlistSelect.value;
        gameMode = 'single';
        showPage('singleGamePage');
        setTimeout(() => startGame(), 100);
    });
}

if (startMultiPlayerBtn) {
    startMultiPlayerBtn.addEventListener('click', () => {
        currentWordList = startWordlistSelect.value;
        gameMode = 'multiplayer';
        showPage('multiplayerRoomPage');
    });
}

// Back button listeners
if (backToStartBtn) backToStartBtn.addEventListener('click', () => showPage('startPage'));
if (backToStartBtn2) backToStartBtn2.addEventListener('click', () => showPage('startPage'));
if (backToRoomBtn) backToRoomBtn.addEventListener('click', () => {
    if (currentRoomId && roomRef) {
        leaveRoom();
    }
    showPage('multiplayerRoomPage');
});

// Single player event listeners
if (newGameBtn) newGameBtn.addEventListener('click', () => {
    closeModal(); // Close modal if it's open
    startGame(); // Start new game
});
if (enterBtn) enterBtn.addEventListener('click', submitGuess);
if (wordlistSelect) wordlistSelect.addEventListener('change', handleWordlistChange);

// Multiplayer room event listeners
if (createRoomBtn) createRoomBtn.addEventListener('click', () => {
    createRoom();
    // Stay on room page, wait for player to join
});

if (joinRoomBtn) joinRoomBtn.addEventListener('click', () => {
    joinRoom();
    // After joining room, show game page
    setTimeout(() => {
        if (currentRoomId) {
            showPage('multiplayerGamePage');
        }
    }, 500);
});

if (copyRoomIdBtn) copyRoomIdBtn.addEventListener('click', copyRoomId);
if (roomIdInput) {
    // Handle Enter key to join room
    roomIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') joinRoom();
    });

    // Only allow alphanumeric characters and auto-uppercase
    roomIdInput.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase();
        // Remove any non-alphanumeric characters
        value = value.replace(/[^A-Z0-9]/g, '');
        // Limit to 6 characters
        if (value.length > 6) {
            value = value.substring(0, 6);
        }
        e.target.value = value;
    });
}

// Modal event listeners
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalNewGame) modalNewGame.addEventListener('click', () => {
    closeModal();
    startGame();
});
if (playPronunciationBtn) playPronunciationBtn.addEventListener('click', playPronunciation);

// Modal can only be closed by clicking the close button or New Game button
// Clicking outside the modal will not close it

// Physical keyboard input
document.addEventListener('keydown', handlePhysicalKeyPress);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Show start page by default
    const startPage = document.getElementById('startPage');
    if (startPage) {
        startPage.classList.add('active');
        startPage.style.display = 'block';
        startPage.style.visibility = 'visible';
        startPage.style.opacity = '1';
    }

    // Hide all other pages
    document.querySelectorAll('.page').forEach(page => {
        if (page.id !== 'startPage') {
            page.classList.remove('active');
            page.style.display = 'none';
            page.style.visibility = 'hidden';
            page.style.opacity = '0';
        }
    });

    // Initialize multiplayer keyboard if exists
    if (keyboardMulti) {
        initializeMultiplayerKeyboard();
    }
});

// Initialize multiplayer keyboard event listeners
function initializeMultiplayerKeyboard() {
    if (!keyboardMulti) return;

    const keys = keyboardMulti.querySelectorAll('.key:not(#enterBtnMulti):not(#backspaceBtnMulti)');
    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const target = event.target;
            // Check if button is disabled or game is not active
            if (target.disabled || target.classList.contains('disabled') || !isGameActive || isInitializing) {
                return;
            }
            // Check if key has a valid data-key attribute
            if (!key.dataset.key) {
                return;
            }
            handleKeyPress(key.dataset.key);
        });
    });

    if (backspaceBtnMulti) {
        backspaceBtnMulti.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!isGameActive || isInitializing) {
                return;
            }
            handleDelete();
        });
    }

    if (enterBtnMulti) {
        enterBtnMulti.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!isGameActive || isInitializing) {
                return;
            }
            submitGuess();
        });
    }

    if (wordlistSelectMulti) {
        wordlistSelectMulti.addEventListener('change', handleWordlistChange);
    }

    if (newGameBtnMulti) {
        newGameBtnMulti.addEventListener('click', () => {
            closeModal(); // Close modal if it's open
            startGame(); // Start new game
        });
    }
}

// Initialize single player keyboard
function initializeSinglePlayerKeyboard() {
    const keyboard = document.getElementById('keyboard');
    if (!keyboard) return;

    const keys = keyboard.querySelectorAll('.key:not(#enterBtn):not(#backspaceBtn)');
    keys.forEach(key => {
        key.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const target = event.target;
            // Check if button is disabled or game is not active
            if (target.disabled || target.classList.contains('disabled') || !isGameActive || isInitializing) {
                return;
            }
            // Check if key has a valid data-key attribute
            if (!key.dataset.key) {
                return;
            }
            handleKeyPress(key.dataset.key);
        });
    });

    if (backspaceBtn) {
        backspaceBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!isGameActive || isInitializing) {
                return;
            }
            handleDelete();
        });
    }
}

// Initialize keyboards when pages are shown
document.addEventListener('DOMContentLoaded', () => {
    initializeSinglePlayerKeyboard();
});

// Get current game grid based on mode
function getCurrentGameGrid() {
    if (gameMode === 'multiplayer') {
        return gameGridMulti || null;
    } else {
        return gameGrid || null;
    }
}

// Get current message div based on mode
function getCurrentMessageDiv() {
    if (gameMode === 'multiplayer') {
        return messageMulti || null;
    } else {
        return messageDiv || null;
    }
}

// Get current enter button based on mode
function getCurrentEnterBtn() {
    if (gameMode === 'multiplayer') {
        return enterBtnMulti || null;
    } else {
        return enterBtn || null;
    }
}

// Start game
function startGame(isFromFirebaseSync = false) {
    // Set initialization flag
    isInitializing = true;

    // Generate random word
    if (gameMode === 'single') {
        // Single player: always generate new word
        targetWord = getRandomWord();
    } else if (gameMode === 'multiplayer') {
        // Multiplayer: check if this is from Firebase sync or user-initiated
        if (isFromFirebaseSync) {
            // From Firebase sync: targetWord should already be set from roomData
            // Don't generate new word, just reset local game state
            // targetWord is already set from listenToRoomChanges
        } else {
            // User-initiated: always generate new word
            const newWord = getRandomWord();
            targetWord = newWord;

            // If we have Firebase connection, update Firebase
            if (currentRoomId && roomRef) {
                // Update target word in Firebase and reset both players' game state
                const updates = {
                    [`rooms/${currentRoomId}/targetWord`]: newWord,
                    [`rooms/${currentRoomId}/player1/guesses`]: {},
                    [`rooms/${currentRoomId}/player1/currentRow`]: 0,
                    [`rooms/${currentRoomId}/player1/isFinished`]: false,
                    [`rooms/${currentRoomId}/player1/finishedAt`]: null,
                    [`rooms/${currentRoomId}/player1/isWinner`]: false,
                    [`rooms/${currentRoomId}/player2/guesses`]: {},
                    [`rooms/${currentRoomId}/player2/currentRow`]: 0,
                    [`rooms/${currentRoomId}/player2/isFinished`]: false,
                    [`rooms/${currentRoomId}/player2/finishedAt`]: null,
                    [`rooms/${currentRoomId}/player2/isWinner`]: false,
                    [`rooms/${currentRoomId}/status`]: 'playing'
                };

                database.ref().update(updates).catch((error) => {
                    console.error('Error starting new game:', error);
                    showMessage('开始新游戏失败', 'error');
                });
            }
        }

        // Reset local opponent state
        opponentGuesses = [];
        opponentCurrentRow = 0;
        opponentFinished = false;
    }

    // Reset game state
    currentRow = 0;
    currentCol = 0;
    isGameActive = true;
    keyboardState = {}; // Reset keyboard state

    // Get current game grid
    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) {
        console.error('Game grid not found!');
        isInitializing = false;
        return;
    }

    // Create game grid
    createGameGrid(targetWord.length, currentGrid);

    // Show game grid
    currentGrid.classList.remove('hidden');

    // In multiplayer mode, also create opponent grid if opponent exists
    if (gameMode === 'multiplayer' && opponentSection && opponentSection.style.display !== 'none') {
        createGameGridForOpponent(targetWord.length);
    }

    // Clear message
    showMessage('', '');

    // Reset keyboard styles and states
    resetKeyboard();
    
    // Update keyboard to ensure all states are cleared (keyboardState is already reset to {})
    updateKeyboard();

    // Disable enter button initially
    const currentEnterBtn = getCurrentEnterBtn();
    if (currentEnterBtn) {
        currentEnterBtn.disabled = true;
        currentEnterBtn.classList.remove('disabled');
    }

    // Re-enable all keyboard letter buttons (resetKeyboard already handles this, but ensure it's done)
    const keyboard = gameMode === 'multiplayer' ? keyboardMulti : document.getElementById('keyboard');
    if (keyboard) {
        const keys = keyboard.querySelectorAll('.key');
        keys.forEach(key => {
            // Skip special buttons
            if (key.id === 'newGameBtn' || key.id === 'newGameBtnMulti' ||
                key.id === 'enterBtn' || key.id === 'enterBtnMulti' ||
                key.id === 'backspaceBtn' || key.id === 'backspaceBtnMulti') {
                return;
            }
            // Ensure all letter keys are enabled
            key.disabled = false;
            key.classList.remove('disabled');
        });
    }

    // Re-enable NEW button when starting a new game
    if (gameMode === 'multiplayer' && newGameBtnMulti) {
        newGameBtnMulti.disabled = false;
        newGameBtnMulti.style.opacity = '1';
        newGameBtnMulti.style.cursor = 'pointer';
    }
    
    // Re-enable backspace button
    const backspaceBtn = gameMode === 'multiplayer' ? backspaceBtnMulti : document.getElementById('backspaceBtn');
    if (backspaceBtn) {
        backspaceBtn.disabled = false;
        backspaceBtn.classList.remove('disabled');
    }

    // Update player status
    if (gameMode === 'multiplayer' && player1Status) {
        player1Status.textContent = '进行中 (1/6)';
        player1Status.style.color = '#2196F3';
    }

    // Focus first cell - ensure complete control
    setTimeout(() => {
        // Force reset all states in current grid
        if (currentGrid) {
            currentGrid.querySelectorAll('.cell').forEach(cell => {
                cell.classList.remove('focused', 'filled', 'correct', 'present', 'absent');
            });
        }

        // Ensure cursor position is correct
        currentRow = 0;
        currentCol = 0;

        // Set focus to first cell
        const firstCell = currentGrid.querySelector('.cell[data-row="0"][data-col="0"]');
        if (firstCell) {
            firstCell.classList.add('focused');
        }

        // Clear initialization flag and ensure game is active
        isInitializing = false;
        isGameActive = true;
        
        // Final check: ensure all keyboard buttons are enabled
        const finalKeyboard = gameMode === 'multiplayer' ? keyboardMulti : document.getElementById('keyboard');
        if (finalKeyboard) {
            const finalKeys = finalKeyboard.querySelectorAll('.key');
            finalKeys.forEach(key => {
                // Skip special buttons
                if (key.id === 'newGameBtn' || key.id === 'newGameBtnMulti' ||
                    key.id === 'enterBtn' || key.id === 'enterBtnMulti' ||
                    key.id === 'backspaceBtn' || key.id === 'backspaceBtnMulti') {
                    return;
                }
                // Ensure all letter keys are enabled
                if (key.dataset.key) {
                    key.disabled = false;
                    key.classList.remove('disabled');
                }
            });
        }
    }, 50);
}

// Get random word
function getRandomWord() {
    const currentList = wordLists[currentWordList];
    const randomIndex = Math.floor(Math.random() * currentList.length);
    return currentList[randomIndex];
}

// Handle wordlist change
function handleWordlistChange() {
    if (gameMode === 'multiplayer') {
        if (wordlistSelectMulti) {
            currentWordList = wordlistSelectMulti.value;
        }
    } else {
        if (wordlistSelect) {
            currentWordList = wordlistSelect.value;
        }
    }
    // Restart game with new wordlist
    if (isGameActive) {
        startGame();
    }
}

// Create game grid
function createGameGrid(wordLength, targetGrid = null) {
    const grid = targetGrid || getCurrentGameGrid();
    if (!grid) return;

    // Clear existing grid
    grid.innerHTML = '';

    // Create 6 rows, each containing wordLength cells
    for (let row = 0; row < 6; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for (let col = 0; col < wordLength; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.setAttribute('data-row', row.toString());
            cellDiv.setAttribute('data-col', col.toString());
            cellDiv.addEventListener('click', () => handleCellClick(row, col));
            rowDiv.appendChild(cellDiv);
        }

        grid.appendChild(rowDiv);
    }

    // Ensure no cells are focused after grid creation
    grid.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('focused');
    });
}

// Handle input field input
// Handle cell click
function handleCellClick(row, col) {
    if (!isGameActive || row !== currentRow || isInitializing) return;

    // Set current active position
    currentCol = col;
    focusCell(row, col);
}

// Handle physical keyboard input
function handlePhysicalKeyPress(event) {
    const key = event.key.toUpperCase();
    const allowedKeys = /^[A-Z]$/;
    const isEnterKey = key === 'ENTER';
    const isBackspaceKey = key === 'BACKSPACE';
    const isCtrlN = event.ctrlKey && key === 'N';

    // Check if user is typing in an input field
    const activeElement = document.activeElement;
    const isInputFocused = activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable
    );

    // If user is typing in an input field, don't handle game input
    if (isInputFocused) {
        // Only handle Ctrl+N globally
        if (isCtrlN) {
            event.preventDefault();
            startGame();
        }
        return; // Let the input field handle the input
    }

    // Handle Ctrl+N for new game (always available)
    if (isCtrlN) {
        event.preventDefault();
        startGame();
        return;
    }

    // Only allow other keys when game is active
    if (!isGameActive) return;

    // Only allow A-Z letters, Enter key, and Backspace key during gameplay
    if (allowedKeys.test(key)) {
        // Check if the letter is disabled on the virtual keyboard
        const virtualKey = document.querySelector(`.key[data-key="${key}"]`);
        if (virtualKey && (virtualKey.disabled || virtualKey.classList.contains('disabled'))) {
            event.preventDefault();
            return; // Don't allow input of disabled letters
        }
        event.preventDefault();
        handleKeyPress(key);
    } else if (isEnterKey) {
        event.preventDefault();
        submitGuess();
    } else if (isBackspaceKey) {
        event.preventDefault();
        console.log('=== BACKSPACE DEBUG ===');
        console.log('Current state before delete:');
        console.log('currentRow:', currentRow, 'currentCol:', currentCol);
        console.log('isGameActive:', isGameActive, 'isInitializing:', isInitializing);

        // Check all cells content
        const rowCells = document.querySelectorAll(`.cell[data-row="${currentRow}"]`);
        rowCells.forEach((cell, index) => {
            console.log(`Cell ${index}: "${cell.textContent}"`);
        });

        handleDelete();

        console.log('After delete:');
        console.log('currentRow:', currentRow, 'currentCol:', currentCol);
        console.log('=== END BACKSPACE DEBUG ===');
    } else {
        // Block all other keys completely during gameplay
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
}

// Handle keyboard letter click
function handleKeyPress(letter) {
    if (!isGameActive) return;

    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    const cell = currentGrid.querySelector(`.cell[data-row="${currentRow}"][data-col="${currentCol}"]`);
    if (!cell) return;

    // Fill in letter
    cell.textContent = letter;
    cell.classList.add('filled');

    // Move to next position
    if (currentCol < targetWord.length - 1) {
        currentCol++;
        focusCell(currentRow, currentCol);
    }

    // Check if can submit
    checkCanSubmit();
}

// Handle delete/backspace
function handleDelete() {
    if (!isGameActive) return;

    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    const rowCells = currentGrid.querySelectorAll(`.cell[data-row="${currentRow}"]`);

    // First, check if current focus position has content
    const currentCell = rowCells[currentCol];
    if (currentCell && currentCell.textContent.trim() !== '') {
        // Delete the content at current focus position
        currentCell.textContent = '';
        currentCell.classList.remove('filled');
        // Keep focus at the same position
        return;
    }

    // Current position is empty - check the previous position
    if (currentCol > 0) {
        const previousCell = rowCells[currentCol - 1];
        if (previousCell && previousCell.textContent.trim() !== '') {
            // Previous position has content - delete it and move focus there
            previousCell.textContent = '';
            previousCell.classList.remove('filled');
            currentCol = currentCol - 1;
            focusCell(currentRow, currentCol);
        } else {
            // Previous position is also empty - just move focus to previous position
            currentCol = currentCol - 1;
            focusCell(currentRow, currentCol);
        }
    } else {
        // Already at the first position - do nothing
        // Focus stays at position 0
    }

    // Check if can submit
    checkCanSubmit();
}

// Focus cell
function focusCell(row, col) {
    // Prevent focus changes during game initialization
    if (isInitializing) {
        return;
    }

    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    // Remove all focus states in current grid
    currentGrid.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('focused');
    });

    // Add new focus state
    const cell = currentGrid.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.classList.add('focused');
    }
}

// Check if can submit
function checkCanSubmit() {
    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    const rowCells = currentGrid.querySelectorAll(`.cell[data-row="${currentRow}"]`);
    const filledCells = Array.from(rowCells).filter(cell => cell.textContent.trim() !== '');
    const currentEnterBtn = getCurrentEnterBtn();
    if (currentEnterBtn) {
        currentEnterBtn.disabled = filledCells.length !== targetWord.length;
    }
}

// Submit guess
function submitGuess() {
    const currentEnterBtn = getCurrentEnterBtn();
    if (!isGameActive || (currentEnterBtn && currentEnterBtn.disabled)) return;

    // Get current game grid
    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    // Get guessed word from current row
    const rowCells = currentGrid.querySelectorAll(`.cell[data-row="${currentRow}"]`);
    const guess = Array.from(rowCells).map(cell => cell.textContent).join('');

    // Validate input
    if (!isValidWord(guess)) {
        showMessage('Please enter a valid English word!', 'error');
        return;
    }

    // Display guess result
    displayGuess(guess);

    // Sync to Firebase in multiplayer mode
    if (gameMode === 'multiplayer' && roomRef) {
        const letterStates = calculateLetterStates(guess);
        syncGuessToFirebase(guess, letterStates);
    }

    // Check game result
    if (guess === targetWord) {
        showMessage('Congratulations! You got it right!', 'success');
        endGame(true); // true means guessed correctly
    } else if (currentRow >= 5) {
        showMessage(`Game over! The correct answer is: ${targetWord}`, 'error');
        endGame(false); // false means guessed incorrectly
    } else {
        currentRow++;
        currentCol = 0;
        showMessage(`Attempt ${currentRow + 1}`, 'info');
        focusCell(currentRow, 0);
        const currentEnterBtn = getCurrentEnterBtn();
        if (currentEnterBtn) {
            currentEnterBtn.disabled = true;
        }

        // Update player status in multiplayer mode
        if (gameMode === 'multiplayer' && player1Status) {
            player1Status.textContent = `进行中 (${currentRow + 1}/6)`;
        }
    }
}

// Display guess result
function displayGuess(guess) {
    const currentGrid = getCurrentGameGrid();
    if (!currentGrid) return;

    const rowCells = currentGrid.querySelectorAll(`.cell[data-row="${currentRow}"]`);

    // Calculate letter states
    const letterStates = calculateLetterStates(guess);

    // Update each cell and keyboard state
    for (let i = 0; i < guess.length; i++) {
        const cell = rowCells[i];
        const letter = guess[i];
        const state = letterStates[i];

        // Remove previous color classes and focus state
        cell.classList.remove('correct', 'present', 'absent', 'focused', 'filled');
        cell.classList.add(state);

        // Update keyboard state (priority: correct > present > absent)
        if (!keyboardState[letter] ||
            (state === 'correct') ||
            (state === 'present' && keyboardState[letter] === 'absent')) {
            keyboardState[letter] = state;
        }
    }

    // Update keyboard visual effects
    updateKeyboard();
}

// Calculate letter states (Wordle logic)
function calculateLetterStates(guess) {
    const states = new Array(guess.length).fill('absent');
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');

    // First pass: mark correct position letters (green)
    for (let i = 0; i < guess.length; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            states[i] = 'correct';
            targetLetters[i] = null; // Mark as used
        }
    }

    // Second pass: mark letters that exist but in wrong position (yellow)
    for (let i = 0; i < guess.length; i++) {
        if (states[i] === 'absent') {
            const targetIndex = targetLetters.indexOf(guessLetters[i]);
            if (targetIndex !== -1) {
                states[i] = 'present';
                targetLetters[targetIndex] = null; // Mark as used
            }
        }
    }

    return states;
}

// Validate if word is valid (contains only letters)
function isValidWord(word) {
    return /^[A-Z]+$/.test(word);
}

// Show message
function showMessage(text, type) {
    const currentMsg = getCurrentMessageDiv();
    if (currentMsg) {
        currentMsg.textContent = text;
        currentMsg.className = `message ${type}`;
    }
}

// End game
function endGame(isCorrect) {
    isGameActive = false;
    const currentEnterBtn = getCurrentEnterBtn();
    if (currentEnterBtn) {
        currentEnterBtn.disabled = true;
    }

    // Disable all keyboard input (except NEW button)
    const keyboard = gameMode === 'multiplayer' ? keyboardMulti : document.getElementById('keyboard');
    if (keyboard) {
        const keys = keyboard.querySelectorAll('.key');
        keys.forEach(key => {
            // Don't disable NEW button - user should be able to start new game
            if (key.id !== 'newGameBtn' && key.id !== 'newGameBtnMulti') {
                key.disabled = true;
                key.classList.add('disabled');
            }
        });
    }
    
    // Ensure NEW button is enabled after game ends
    if (gameMode === 'single' && newGameBtn) {
        newGameBtn.disabled = false;
        newGameBtn.classList.remove('disabled');
    } else if (gameMode === 'multiplayer' && newGameBtnMulti) {
        newGameBtnMulti.disabled = false;
        newGameBtnMulti.classList.remove('disabled');
        newGameBtnMulti.style.opacity = '1';
        newGameBtnMulti.style.cursor = 'pointer';
    }

    // Update player status in multiplayer mode
    if (gameMode === 'multiplayer' && player1Status) {
        player1Status.textContent = isCorrect ? '已完成 ✓' : '失败 ✗';
        player1Status.style.color = isCorrect ? '#4CAF50' : '#F44336';

        // Sync game end status to Firebase
        if (roomRef && currentRoomId) {
            const isFinishedPath = `rooms/${currentRoomId}/${playerRole}/isFinished`;
            const finishedAtPath = `rooms/${currentRoomId}/${playerRole}/finishedAt`;
            const isWinnerPath = `rooms/${currentRoomId}/${playerRole}/isWinner`;

            const updates = {};
            updates[isFinishedPath] = true;
            updates[finishedAtPath] = firebase.database.ServerValue.TIMESTAMP;
            updates[isWinnerPath] = isCorrect; // Record if this player won

            database.ref().update(updates).catch((error) => {
                console.error('Error syncing game end:', error);
            });

            // Check if we should show modal
            roomRef.once('value').then((snapshot) => {
                const roomData = snapshot.val();
                if (roomData) {
                    const player1Finished = roomData.player1 && roomData.player1.isFinished;
                    const player2Finished = roomData.player2 && roomData.player2.isFinished;
                    const player1Won = roomData.player1 && roomData.player1.isWinner;
                    const player2Won = roomData.player2 && roomData.player2.isWinner;

                    // If current player successfully completed, show modal immediately
                    // Both players will see the modal (the other player will see it via listenToRoomChanges)
                    if (isCorrect) {
                        // Current player won - show modal immediately
                        showWordInfoModal(targetWord, true, true);
                        // Update room status to finished when someone wins
                        roomRef.update({ 'status': 'finished' });
                        // Enable NEW button when someone wins
                        if (newGameBtnMulti) {
                            newGameBtnMulti.disabled = false;
                            newGameBtnMulti.style.opacity = '1';
                            newGameBtnMulti.style.cursor = 'pointer';
                        }
                    } else if (player1Finished && player2Finished) {
                        // Both players finished - show modal
                        roomRef.update({ 'status': 'finished' });
                        showWordInfoModal(targetWord, isCorrect, true);
                    } else {
                        // Current player failed but opponent hasn't finished yet
                        // Disable NEW button until opponent finishes
                        if (newGameBtnMulti) {
                            newGameBtnMulti.disabled = true;
                            newGameBtnMulti.style.opacity = '0.5';
                            newGameBtnMulti.style.cursor = 'not-allowed';
                        }
                        // Don't show modal yet - wait for opponent or for opponent to win
                    }
                }
            });
        } else {
            // Not in multiplayer or no room - show modal immediately
            showWordInfoModal(targetWord, isCorrect, gameMode === 'multiplayer');
        }
    } else {
        // Single player mode - show modal immediately
        showWordInfoModal(targetWord, isCorrect, false);
    }
}

// Reset keyboard styles
function resetKeyboard() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        // Remove all color states and disabled state
        key.classList.remove('correct', 'present', 'absent', 'disabled');
        // Re-add the original key class if it's not already there
        if (!key.classList.contains('key')) {
            key.classList.add('key');
        }
        // Re-enable all keys (except special buttons which will be handled separately)
        if (key.id !== 'newGameBtn' && key.id !== 'newGameBtnMulti' &&
            key.id !== 'enterBtn' && key.id !== 'enterBtnMulti') {
            key.disabled = false;
        }
    });
}

// Update keyboard colors and disable absent letters
function updateKeyboard() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        // Skip special buttons (NEW and ENTER for both single and multiplayer)
        if (key.id === 'newGameBtn' || key.id === 'newGameBtnMulti' ||
            key.id === 'enterBtn' || key.id === 'enterBtnMulti' ||
            key.id === 'backspaceBtn' || key.id === 'backspaceBtnMulti') {
            return;
        }

        const letter = key.dataset.key;
        if (!letter) return; // Skip keys without data-key attribute

        const state = keyboardState[letter];

        // Remove previous color classes and disabled state
        key.classList.remove('correct', 'present', 'absent', 'disabled');

        // Add new color classes
        if (state) {
            key.classList.add(state);

            // Disable buttons for letters that are confirmed absent
            if (state === 'absent') {
                key.classList.add('disabled');
                key.disabled = true;
            } else {
                key.disabled = false;
            }
        } else {
            // Reset to enabled state for unused letters
            key.disabled = false;
        }
    });
}

// Show word info modal
function showWordInfoModal(word, isCorrect, isMultiplayer = false, opponentWon = false) {
    if (!wordModal) return;

    // Set modal title based on game result
    if (modalTitle) {
        if (isMultiplayer) {
            // Multiplayer mode: show win/lose
            if (isCorrect) {
                modalTitle.textContent = '🎉 你获胜了！';
            } else if (opponentWon) {
                modalTitle.textContent = '😢 你输了！';
            } else {
                modalTitle.textContent = '❌ 游戏结束';
            }
        } else {
            // Single player mode
            modalTitle.textContent = isCorrect ? '🎉 Correct!' : '❌ Wrong!';
        }
    }

    // Reset modal state
    modalWord.textContent = '';
    modalPhonetic.textContent = '';
    modalMeanings.innerHTML = '';
    modalExamples.innerHTML = '';
    modalLoading.style.display = 'block';
    modalError.style.display = 'none';
    const wordInfo = document.querySelector('.word-info');
    if (wordInfo) wordInfo.classList.remove('show');

    // Show modal
    wordModal.classList.add('show');

    // Fetch word information
    fetchWordInfo(word);
}

// Fetch word information from Free Dictionary API
async function fetchWordInfo(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);

        if (!response.ok) {
            throw new Error('Word not found');
        }

        const data = await response.json();

        if (data && data.length > 0) {
            displayWordInfo(data[0]);
        } else {
            throw new Error('No data available');
        }
    } catch (error) {
        console.error('Error fetching word info:', error);
        modalLoading.style.display = 'none';
        modalError.style.display = 'block';

        // Still show the word even if API fails
        modalWord.textContent = word;
        const wordInfo = document.querySelector('.word-info');
        if (wordInfo) wordInfo.classList.add('show');
    }
}

// Display word information in modal
function displayWordInfo(wordData) {
    modalLoading.style.display = 'none';
    modalError.style.display = 'none';

    // Display word
    modalWord.textContent = wordData.word || targetWord;

    // Display phonetic
    if (wordData.phonetic) {
        modalPhonetic.textContent = wordData.phonetic;
    } else if (wordData.phonetics && wordData.phonetics.length > 0) {
        const phonetic = wordData.phonetics.find(p => p.text) || wordData.phonetics[0];
        modalPhonetic.textContent = phonetic.text || '';
    }

    // Display meanings
    if (wordData.meanings && wordData.meanings.length > 0) {
        modalMeanings.innerHTML = '';
        wordData.meanings.forEach((meaning, index) => {
            if (index < 3) { // Limit to first 3 meanings
                const meaningDiv = document.createElement('div');
                meaningDiv.className = 'meaning-item';

                const partOfSpeech = meaning.partOfSpeech || '';
                const definitions = meaning.definitions || [];

                if (definitions.length > 0) {
                    const def = definitions[0].definition || '';
                    meaningDiv.innerHTML = `
                        <span class="meaning-part">${partOfSpeech}</span>
                        <span class="meaning-def">${def}</span>
                    `;
                    modalMeanings.appendChild(meaningDiv);
                }
            }
        });
    }

    // Display examples
    if (wordData.meanings && wordData.meanings.length > 0) {
        modalExamples.innerHTML = '';
        let exampleCount = 0;

        wordData.meanings.forEach(meaning => {
            if (meaning.definitions && exampleCount < 2) {
                meaning.definitions.forEach(def => {
                    if (def.example && exampleCount < 2) {
                        const exampleDiv = document.createElement('div');
                        exampleDiv.className = 'example-item';
                        exampleDiv.innerHTML = `
                            <div class="example-en">${def.example}</div>
                            ${def.exampleTranslation ? `<div class="example-cn">${def.exampleTranslation}</div>` : ''}
                        `;
                        modalExamples.appendChild(exampleDiv);
                        exampleCount++;
                    }
                });
            }
        });

        if (exampleCount === 0) {
            // Try to get examples from other sources
            wordData.meanings.forEach(meaning => {
                if (meaning.definitions && exampleCount < 2) {
                    meaning.definitions.forEach(def => {
                        if (def.example && exampleCount < 2) {
                            const exampleDiv = document.createElement('div');
                            exampleDiv.className = 'example-item';
                            exampleDiv.innerHTML = `
                                <div class="example-en">${def.example}</div>
                            `;
                            modalExamples.appendChild(exampleDiv);
                            exampleCount++;
                        }
                    });
                }
            });
        }
    }

    // Show word info
    const wordInfo = document.querySelector('.word-info');
    if (wordInfo) wordInfo.classList.add('show');
}

// Play pronunciation using Web Speech API
function playPronunciation() {
    const word = modalWord.textContent || targetWord;
    if (!word) return;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support speech synthesis.');
    }
}

// Close modal
function closeModal() {
    if (wordModal) {
        wordModal.classList.remove('show');
        // Stop any ongoing speech
        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
        }
    }
    
    // Re-enable NEW button after closing modal (game has ended, user can start new game)
    // Since game has ended, NEW button should always be enabled
    if (gameMode === 'single' && newGameBtn) {
        newGameBtn.disabled = false;
        newGameBtn.classList.remove('disabled');
    } else if (gameMode === 'multiplayer' && newGameBtnMulti) {
        newGameBtnMulti.disabled = false;
        newGameBtnMulti.classList.remove('disabled');
        newGameBtnMulti.style.opacity = '1';
        newGameBtnMulti.style.cursor = 'pointer';
    }
}

// ==================== Multiplayer Functions ====================

// Switch game mode (deprecated - use showPage instead)
// This function is kept for backward compatibility but may not be used

// Generate random room ID
function generateRoomId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Create room
function createRoom() {
    if (!database) {
        showMessage('Firebase 未配置，请先配置 Firebase', 'error');
        return;
    }

    const roomId = generateRoomId();
    playerId = 'player_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    playerRole = 'player1';

    const word = getRandomWord();
    const roomData = {
        roomId: roomId,
        targetWord: word,
        wordList: currentWordList,
        player1: {
            id: playerId,
            name: '玩家1',
            guesses: [],
            currentRow: 0,
            isFinished: false,
            finishedAt: null
        },
        player2: null,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        status: 'waiting' // 'waiting', 'playing', 'finished'
    };

    roomRef = database.ref('rooms/' + roomId);
    roomRef.set(roomData).then(() => {
        currentRoomId = roomId;
        targetWord = word;
        updateRoomUI();
        listenToRoomChanges();
        // Stay on room page, don't jump to game page yet
        showMessage('房间创建成功！等待玩家加入...', 'success');
    }).catch((error) => {
        console.error('Error creating room:', error);
        showMessage('创建房间失败', 'error');
    });
}

// Join room
function joinRoom() {
    if (!database) {
        showMessage('Firebase 未配置，请先配置 Firebase', 'error');
        return;
    }

    const roomId = roomIdInput.value.trim().toUpperCase();
    if (!roomId || roomId.length !== 6) {
        showMessage('请输入有效的6位房间ID', 'error');
        return;
    }

    playerId = 'player_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    playerRole = 'player2';

    roomRef = database.ref('rooms/' + roomId);
    roomRef.once('value').then((snapshot) => {
        const roomData = snapshot.val();
        if (!roomData) {
            showMessage('房间不存在', 'error');
            return;
        }

        if (roomData.player2) {
            showMessage('房间已满', 'error');
            return;
        }

        if (roomData.status === 'finished') {
            showMessage('游戏已结束', 'error');
            return;
        }

        // Join as player2
        const updates = {
            'player2': {
                id: playerId,
                name: '玩家2',
                guesses: [],
                currentRow: 0,
                isFinished: false,
                finishedAt: null
            },
            'status': 'playing'
        };

        roomRef.update(updates).then(() => {
            currentRoomId = roomId;
            targetWord = roomData.targetWord;
            currentWordList = roomData.wordList;
            if (wordlistSelectMulti) {
                wordlistSelectMulti.value = currentWordList;
            }
            updateRoomUI();
            listenToRoomChanges();
            showPage('multiplayerGamePage');
            setTimeout(() => {
                startGame();
                showMessage('成功加入房间！', 'success');
            }, 100);
        }).catch((error) => {
            console.error('Error joining room:', error);
            showMessage('加入房间失败', 'error');
        });
    }).catch((error) => {
        console.error('Error checking room:', error);
        showMessage('加入房间失败', 'error');
    });
}

// Leave room
function leaveRoom() {
    if (roomRef && currentRoomId) {
        if (playerRole === 'player1') {
            // Player1 leaves - delete room
            roomRef.remove();
        } else if (playerRole === 'player2') {
            // Player2 leaves - remove player2
            roomRef.update({ 'player2': null });
        }
        roomRef.off(); // Remove all listeners
    }

    currentRoomId = null;
    playerId = null;
    playerRole = null;
    roomRef = null;
    opponentGuesses = [];
    opponentCurrentRow = 0;
    opponentFinished = false;
}

// Listen to room changes
function listenToRoomChanges() {
    if (!roomRef) return;

    roomRef.on('value', (snapshot) => {
        const roomData = snapshot.val();
        if (!roomData) {
            // Room was deleted
            if (currentRoomId) {
                showMessage('房间已关闭', 'error');
                leaveRoom();
                showPage('startPage');
            }
            return;
        }

        // Get current player data (used in multiple places)
        const currentPlayerData = playerRole === 'player1' ? roomData.player1 : roomData.player2;
        
        // Check if targetWord changed (new game started)
        const newTargetWord = roomData.targetWord;
        if (newTargetWord && newTargetWord !== targetWord && currentPlayerData) {
            // Target word changed - check if game state was reset
            const guesses = currentPlayerData.guesses || {};
            const guessesEmpty = Object.keys(guesses).length === 0;
            const currentRowReset = currentPlayerData.currentRow === 0;
            const isFinishedReset = !currentPlayerData.isFinished;
            const statusIsPlaying = roomData.status === 'playing';

            // If game state was reset, start new game
            if (guessesEmpty && currentRowReset && isFinishedReset && statusIsPlaying) {
                // Update local targetWord and restart game
                targetWord = newTargetWord;
                // Close modal if it's open
                if (wordModal && wordModal.classList.contains('show')) {
                    closeModal();
                }
                // Start new game from Firebase sync (don't generate new word)
                setTimeout(() => {
                    startGame(true);
                }, 100);
            }
        }

        // If player1 created room and player2 just joined, switch to game page
        if (playerRole === 'player1' && roomData.player2 && roomData.status === 'playing') {
            // Check if we're still on room page
            const currentPage = document.querySelector('.page.active');
            if (currentPage && currentPage.id === 'multiplayerRoomPage') {
                showPage('multiplayerGamePage');
                setTimeout(() => {
                    startGame();
                    showMessage('玩家已加入！游戏开始！', 'success');
                }, 100);
            }
        }

        // Check if opponent finished the game and show result
        const opponentData = playerRole === 'player1' ? roomData.player2 : roomData.player1;

        // Check if opponent finished (either won or lost)
        if (opponentData && opponentData.isFinished) {
            // Opponent finished - check if we need to show result
            // Use explicit boolean check to handle undefined/null cases
            const opponentWon = opponentData.isWinner === true;
            const currentPlayerWon = (currentPlayerData && currentPlayerData.isWinner === true);
            const currentPlayerFinished = (currentPlayerData && currentPlayerData.isFinished === true);

            // Determine result for current player
            let isCurrentPlayerWinner = false;
            if (currentPlayerFinished) {
                // Both finished - check who won
                isCurrentPlayerWinner = currentPlayerWon;
            } else {
                // Current player hasn't finished, opponent won
                isCurrentPlayerWinner = false;
            }

            const modalAlreadyShowing = wordModal && wordModal.classList.contains('show');

            // Priority 1: If opponent won, show modal immediately (both players should see the result)
            // Check if opponent won (either explicitly true or truthy value)
            const opponentActuallyWon = opponentData.isWinner === true || opponentData.isWinner === 'true' || opponentData.isWinner;
            
            if (opponentActuallyWon && !modalAlreadyShowing) {
                console.log('Opponent won, showing modal to current player', {
                    opponentWon: opponentData.isWinner,
                    opponentActuallyWon,
                    modalAlreadyShowing,
                    currentPlayerFinished,
                    isCurrentPlayerWinner,
                    opponentData: opponentData
                });
                // Opponent won - show modal immediately to both players
                showWordInfoModal(targetWord, isCurrentPlayerWinner, true, true);
                // Disable current player's input since game is over
                if (!currentPlayerFinished) {
                    isGameActive = false;
                    const currentEnterBtn = getCurrentEnterBtn();
                    if (currentEnterBtn) {
                        currentEnterBtn.disabled = true;
                    }
                    // Disable all keyboard input
                    const keyboard = keyboardMulti || document.getElementById('keyboard');
                    if (keyboard) {
                        const keys = keyboard.querySelectorAll('.key');
                        keys.forEach(key => {
                            key.disabled = true;
                            key.classList.add('disabled');
                        });
                    }
                    // Update player status to show they lost
                    if (player1Status) {
                        player1Status.textContent = '失败 ✗';
                        player1Status.style.color = '#F44336';
                    }
                }
                // Enable NEW button when opponent wins
                if (newGameBtnMulti) {
                    newGameBtnMulti.disabled = false;
                    newGameBtnMulti.style.opacity = '1';
                    newGameBtnMulti.style.cursor = 'pointer';
                }
                // Update room status to finished if opponent won
                if (roomData.status !== 'finished') {
                    roomRef.update({ 'status': 'finished' });
                }
            } 
            // Priority 2: If both players finished (but opponent didn't win, meaning both failed or current player won)
            else if (currentPlayerFinished && opponentData.isFinished && !modalAlreadyShowing) {
                console.log('Both players finished, showing modal');
                // Both players finished - show modal
                showWordInfoModal(targetWord, isCurrentPlayerWinner, true, opponentWon);
                // Enable NEW button when both players finished
                if (newGameBtnMulti) {
                    newGameBtnMulti.disabled = false;
                    newGameBtnMulti.style.opacity = '1';
                    newGameBtnMulti.style.cursor = 'pointer';
                }
            } 
            // Priority 3: Opponent failed but we haven't finished - continue playing
            else if (opponentData.isFinished && !opponentWon && !currentPlayerFinished) {
                // Opponent failed but we haven't finished - continue playing
                // Don't show modal yet
                console.log('Opponent failed, current player continues');
            }
        }

        // Update opponent's progress (only if already in game page)
        if (playerRole === 'player1' && roomData.player2) {
            updateOpponentProgress(roomData.player2);
        } else if (playerRole === 'player2' && roomData.player1) {
            updateOpponentProgress(roomData.player1);
        }

        // Update room status
        updateRoomStatus(roomData);
    });
}

// Update opponent progress
function updateOpponentProgress(opponentData) {
    if (!opponentData) return;

    opponentGuesses = opponentData.guesses || [];
    opponentCurrentRow = opponentData.currentRow || 0;
    opponentFinished = opponentData.isFinished || false;

    // Show opponent section
    opponentSection.style.display = 'block';

    // Update opponent grid
    updateOpponentGrid();

    // Update opponent status
    if (opponentFinished) {
        player2Status.textContent = opponentData.finishedAt ? '已完成' : '已完成';
        player2Status.style.color = '#4CAF50';
    } else {
        player2Status.textContent = `进行中 (${opponentCurrentRow + 1}/6)`;
        player2Status.style.color = '#2196F3';
    }
}

// Update opponent grid (only show progress, not actual answers)
function updateOpponentGrid() {
    if (!opponentGrid || !targetWord) return;

    // Create grid if not exists
    if (opponentGrid.children.length === 0) {
        createGameGridForOpponent(targetWord.length);
    }

    // Only show progress indicators, not actual guesses
    // Show completed rows with a generic indicator
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        const rowCells = opponentGrid.querySelectorAll(`.cell[data-row="${rowIndex}"]`);
        if (rowCells.length === 0) continue;

        // If this row has been completed by opponent
        if (rowIndex < opponentGuesses.length) {
            // Show that this row is completed, but not the actual content
            rowCells.forEach(cell => {
                cell.textContent = ''; // Don't show letters
                cell.classList.remove('correct', 'present', 'absent', 'filled', 'waiting');
                cell.classList.add('opponent-completed'); // Generic completed state
            });
        } else if (rowIndex === opponentCurrentRow && !opponentFinished) {
            // Show current row being worked on
            rowCells.forEach(cell => {
                cell.textContent = ''; // Don't show letters
                cell.classList.remove('correct', 'present', 'absent', 'filled', 'opponent-completed');
                cell.classList.add('waiting');
            });
        } else {
            // Empty row
            rowCells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('correct', 'present', 'absent', 'filled', 'waiting', 'opponent-completed');
            });
        }
    }
}

// Create game grid for opponent
function createGameGridForOpponent(wordLength) {
    opponentGrid.innerHTML = '';

    for (let row = 0; row < 6; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for (let col = 0; col < wordLength; col++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.setAttribute('data-row', row.toString());
            cellDiv.setAttribute('data-col', col.toString());
            rowDiv.appendChild(cellDiv);
        }

        opponentGrid.appendChild(rowDiv);
    }
}

// Update room UI
function updateRoomUI() {
    if (!currentRoomId) return;

    roomIdDisplay.textContent = currentRoomId;
    roomInfo.style.display = 'block';
    roomIdInput.value = '';
}

// Update room status
function updateRoomStatus(roomData) {
    if (!roomStatus) return;

    if (roomData.status === 'waiting') {
        roomStatus.textContent = '等待玩家加入...';
        roomStatus.style.color = '#FF9800';
    } else if (roomData.status === 'playing') {
        const player1Ready = roomData.player1 && roomData.player1.isFinished;
        const player2Ready = roomData.player2 && roomData.player2.isFinished;

        if (player1Ready && player2Ready) {
            roomStatus.textContent = '双方已完成';
            roomStatus.style.color = '#4CAF50';
        } else {
            roomStatus.textContent = '游戏中...';
            roomStatus.style.color = '#2196F3';
        }
    } else if (roomData.status === 'finished') {
        roomStatus.textContent = '游戏已结束';
        roomStatus.style.color = '#757575';
    }
}

// Copy room ID
function copyRoomId() {
    if (!currentRoomId) return;

    navigator.clipboard.writeText(currentRoomId).then(() => {
        showMessage('房间ID已复制', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentRoomId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showMessage('房间ID已复制', 'success');
    });
}

// Sync guess to Firebase
function syncGuessToFirebase(guess, states) {
    if (!roomRef || !currentRoomId || gameMode !== 'multiplayer') return;

    const guessData = {
        guess: guess,
        states: states,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    const playerPath = `rooms/${currentRoomId}/${playerRole}/guesses/${currentRow}`;
    const currentRowPath = `rooms/${currentRoomId}/${playerRole}/currentRow`;
    const isFinishedPath = `rooms/${currentRoomId}/${playerRole}/isFinished`;
    const finishedAtPath = `rooms/${currentRoomId}/${playerRole}/finishedAt`;

    const updates = {};
    updates[playerPath] = guessData;
    updates[currentRowPath] = currentRow;

    if (guess === targetWord || currentRow >= 5) {
        updates[isFinishedPath] = true;
        updates[finishedAtPath] = firebase.database.ServerValue.TIMESTAMP;
        updates[`rooms/${currentRoomId}/${playerRole}/isWinner`] = (guess === targetWord);

        // Check if both players finished
        roomRef.once('value').then((snapshot) => {
            const roomData = snapshot.val();
            if (roomData) {
                const player1Finished = roomData.player1 && roomData.player1.isFinished;
                const player2Finished = roomData.player2 && roomData.player2.isFinished;

                if (player1Finished && player2Finished) {
                    roomRef.update({ 'status': 'finished' });
                }
            }
        });
    }

    database.ref().update(updates).catch((error) => {
        console.error('Error syncing guess:', error);
    });
}
