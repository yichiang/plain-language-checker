// Taken from https://splasho.com/upgoer5/phpspellcheck/dictionaries/1000.dicin
// and https://www.ef.edu/english-resources/english-vocabulary/top-3000-words/

// Use only lower-case letters
export const commonWords: Set<string> = new Set<string>([
	'a',
	'abandon',
	'ability',
	'able',
	'abortion',
	'about',
	'above',
	'abroad',
	'absence',
	'absolute',
	'absolutely',
	'absorb',
	'abuse',
	'academic',
	'accept',
	'access',
	'accident',
	'accompany',
	'accomplish',
	'according',
	'account',
	'accurate',
	'accuse',
	'achieve',
	'achievement',
	'acid',
	'acknowledge',
	'acquire',
	'across',
	'act',
	'action',
	'active',
	'activist',
	'activity',
	'actor',
	'actress',
	'actual',
	'actually',
	'ad',
	'adapt',
	'add',
	'addition',
	'additional',
	'additionally',
	'address',
	'adequate',
	'adjust',
	'adjustment',
	'administration',
	'administrator',
	'admire',
	'admission',
	'admit',
	'adolescent',
	'adopt',
	'adult',
	'advance',
	'advanced',
	'advantage',
	'adventure',
	'advertising',
	'advice',
	'advise',
	'adviser',
	'advocate',
	'affair',
	'affect',
	'afford',
	'afraid',
	'african',
	'african-american',
	'after',
	'afternoon',
	'again',
	'against',
	'age',
	'agency',
	'agenda',
	'agent',
	'aggressive',
	'ago',
	'agree',
	'agreement',
	'agricultural',
	'ah',
	'ahead',
	'aid',
	'aide',
	'aids',
	'aim',
	'air',
	'aircraft',
	'airline',
	'airport',
	'album',
	'alcohol',
	'alive',
	'all',
	'alliance',
	'allow',
	'ally',
	'almost',
	'alone',
	'along',
	'already',
	'also',
	'alter',
	'alternative',
	'although',
	'always',
	'am',
	'amaze',
	'amazing',
	'american',
	'among',
	'amount',
	'an',
	'analysis',
	'analyst',
	'analyze',
	'ancient',
	'and',
	'anger',
	'angle',
	'angry',
	'animal',
	'anniversary',
	'announce',
	'annoy',
	'annual',
	'another',
	'answer',
	'anticipate',
	'anxiety',
	'any',
	'anybody',
	'anymore',
	'anyone',
	'anything',
	'anyway',
	'anywhere',
	'apart',
	'apartment',
	'apparent',
	'apparently',
	'appeal',
	'appear',
	'appearance',
	'apple',
	'application',
	'apply',
	'appoint',
	'appointment',
	'appreciate',
	'approach',
	'appropriate',
	'approval',
	'approve',
	'approximately',
	'arab',
	'architect',
	'are',
	'area',
	'aren\'t',
	'argue',
	'argument',
	'arise',
	'arm',
	'armed',
	'army',
	'around',
	'arrange',
	'arrangement',
	'arrest',
	'arrival',
	'arrive',
	'art',
	'article',
	'artist',
	'artistic',
	'as',
	'asian',
	'aside',
	'ask',
	'asleep',
	'aspect',
	'assault',
	'assert',
	'assess',
	'assessment',
	'asset',
	'assign',
	'assignment',
	'assist',
	'assistance',
	'assistant',
	'associate',
	'association',
	'assume',
	'assumption',
	'assure',
	'at',
	'athlete',
	'athletic',
	'atmosphere',
	'attach',
	'attack',
	'attempt',
	'attend',
	'attention',
	'attitude',
	'attorney',
	'attract',
	'attractive',
	'attribute',
	'audience',
	'aunt',
	'author',
	'authority',
	'auto',
	'available',
	'average',
	'avoid',
	'award',
	'aware',
	'awareness',
	'away',
	'awful',
	'baby',
	'back',
	'background',
	'bad',
	'badly',
	'bag',
	'bake',
	'balance',
	'ball',
	'ban',
	'band',
	'bank',
	'bar',
	'barely',
	'barrel',
	'barrier',
	'base',
	'baseball',
	'basic',
	'basically',
	'basis',
	'basket',
	'basketball',
	'bathroom',
	'battery',
	'battle',
	'be',
	'beach',
	'bean',
	'bear',
	'beat',
	'beautiful',
	'beauty',
	'became',
	'because',
	'become',
	'bed',
	'bedroom',
	'been',
	'beer',
	'before',
	'began',
	'begin',
	'beginning',
	'behavior',
	'behind',
	'being',
	'belief',
	'believe',
	'bell',
	'belong',
	'below',
	'belt',
	'bench',
	'bend',
	'beneath',
	'benefit',
	'beside',
	'besides',
	'best',
	'bet',
	'better',
	'between',
	'beyond',
	'bible',
	'big',
	'bike',
	'bill',
	'billion',
	'bind',
	'biological',
	'bird',
	'birth',
	'birthday',
	'bit',
	'bite',
	'black',
	'blade',
	'blame',
	'blanket',
	'blind',
	'blink',
	'block',
	'blonde',
	'blood',
	'blow',
	'blue',
	'blush',
	'board',
	'boat',
	'body',
	'bomb',
	'bombing',
	'bond',
	'bone',
	'book',
	'boom',
	'boot',
	'border',
	'bore',
	'born',
	'borrow',
	'boss',
	'both',
	'bother',
	'bottle',
	'bottom',
	'boundary',
	'bowl',
	'box',
	'boy',
	'boyfriend',
	'brain',
	'branch',
	'brand',
	'bread',
	'break',
	'breakfast',
	'breast',
	'breath',
	'breathe',
	'brick',
	'bridge',
	'brief',
	'briefly',
	'bright',
	'brilliant',
	'bring',
	'british',
	'broad',
	'broke',
	'broken',
	'brother',
	'brought',
	'brown',
	'brush',
	'buck',
	'budget',
	'build',
	'building',
	'bullet',
	'bunch',
	'burden',
	'burn',
	'burst',
	'bury',
	'bus',
	'business',
	'busy',
	'but',
	'butter',
	'button',
	'buy',
	'buyer',
	'by',
	'cabin',
	'cabinet',
	'cable',
	'cake',
	'calculate',
	'call',
	'calm',
	'came',
	'camera',
	'camp',
	'campaign',
	'campus',
	'can',
	'can\'t',
	'canadian',
	'cancer',
	'candidate',
	'cap',
	'capability',
	'capable',
	'capacity',
	'capital',
	'captain',
	'capture',
	'car',
	'carbon',
	'card',
	'care',
	'career',
	'careful',
	'carefully',
	'carrier',
	'carry',
	'case',
	'cash',
	'cast',
	'cat',
	'catch',
	'category',
	'catholic',
	'caught',
	'cause',
	'ceiling',
	'celebrate',
	'celebration',
	'celebrity',
	'cell',
	'center',
	'central',
	'century',
	'ceo',
	'ceremony',
	'certain',
	'certainly',
	'chain',
	'chair',
	'chairman',
	'challenge',
	'chamber',
	'champion',
	'championship',
	'chance',
	'change',
	'changing',
	'channel',
	'chapter',
	'character',
	'characteristic',
	'characterize',
	'charge',
	'charity',
	'chart',
	'chase',
	'cheap',
	'check',
	'cheek',
	'cheese',
	'chef',
	'chemical',
	'chest',
	'chicken',
	'chief',
	'child',
	'childhood',
	'children',
	'chinese',
	'chip',
	'chocolate',
	'choice',
	'cholesterol',
	'choose',
	'christian',
	'christmas',
	'chuckle',
	'church',
	'cigarette',
	'circle',
	'circumstance',
	'cite',
	'citizen',
	'city',
	'civil',
	'civilian',
	'claim',
	'class',
	'classic',
	'classroom',
	'clean',
	'clear',
	'clearly',
	'client',
	'climate',
	'climb',
	'clinic',
	'clinical',
	'clock',
	'close',
	'closely',
	'closer',
	'clothes',
	'clothing',
	'cloud',
	'club',
	'clue',
	'cluster',
	'coach',
	'coal',
	'coalition',
	'coast',
	'coat',
	'code',
	'coffee',
	'cognitive',
	'cold',
	'collapse',
	'colleague',
	'collect',
	'collection',
	'collective',
	'college',
	'colonial',
	'color',
	'column',
	'combination',
	'combine',
	'come',
	'comedy',
	'comfort',
	'comfortable',
	'command',
	'commander',
	'comment',
	'commercial',
	'commission',
	'commit',
	'commitment',
	'committee',
	'common',
	'communicate',
	'communication',
	'community',
	'company',
	'compare',
	'comparison',
	'compete',
	'competition',
	'competitive',
	'competitor',
	'complain',
	'complaint',
	'complete',
	'completely',
	'complex',
	'complicated',
	'component',
	'compose',
	'composition',
	'comprehensive',
	'computer',
	'concentrate',
	'concentration',
	'concept',
	'concern',
	'concerned',
	'concert',
	'conclude',
	'conclusion',
	'concrete',
	'condition',
	'conduct',
	'conference',
	'confidence',
	'confident',
	'confirm',
	'conflict',
	'confront',
	'confuse',
	'confusion',
	'congress',
	'congressional',
	'connect',
	'connection',
	'consciousness',
	'consensus',
	'consequence',
	'conservative',
	'consider',
	'considerable',
	'consideration',
	'consist',
	'consistent',
	'constant',
	'constantly',
	'constitute',
	'constitutional',
	'construct',
	'construction',
	'consultant',
	'consume',
	'consumer',
	'consumption',
	'contact',
	'contain',
	'container',
	'contemporary',
	'content',
	'contest',
	'context',
	'continue',
	'continued',
	'contract',
	'contrast',
	'contribute',
	'contribution',
	'control',
	'controversial',
	'controversy',
	'convention',
	'conventional',
	'conversation',
	'convert',
	'conviction',
	'convince',
	'cook',
	'cookie',
	'cooking',
	'cool',
	'cooperation',
	'cop',
	'cope',
	'copy',
	'core',
	'corn',
	'corner',
	'corporate',
	'corporation',
	'correct',
	'correspondent',
	'cost',
	'cotton',
	'couch',
	'could',
	'couldn\'t',
	'council',
	'counselor',
	'count',
	'counter',
	'country',
	'county',
	'couple',
	'courage',
	'course',
	'court',
	'cousin',
	'cover',
	'coverage',
	'cow',
	'crack',
	'craft',
	'crash',
	'crazy',
	'cream',
	'create',
	'creation',
	'creative',
	'creature',
	'credit',
	'crew',
	'crime',
	'criminal',
	'crisis',
	'criteria',
	'critic',
	'critical',
	'criticism',
	'criticize',
	'crop',
	'cross',
	'crowd',
	'crucial',
	'cry',
	'cultural',
	'culture',
	'cup',
	'curious',
	'current',
	'currently',
	'curriculum',
	'custom',
	'customer',
	'cut',
	'cute',
	'cycle',
	'dad',
	'daily',
	'damage',
	'damn',
	'dance',
	'danger',
	'dangerous',
	'dare',
	'dark',
	'darkness',
	'data',
	'date',
	'daughter',
	'day',
	'dead',
	'deal',
	'dealer',
	'dear',
	'death',
	'debate',
	'debt',
	'decade',
	'decide',
	'decision',
	'deck',
	'declare',
	'decline',
	'decrease',
	'deep',
	'deeply',
	'deer',
	'defeat',
	'defend',
	'defendant',
	'defense',
	'defensive',
	'deficit',
	'define',
	'definitely',
	'definition',
	'degree',
	'delay',
	'deliver',
	'delivery',
	'demand',
	'democracy',
	'democrat',
	'democratic',
	'demonstrate',
	'demonstration',
	'deny',
	'department',
	'depend',
	'dependent',
	'depending',
	'depict',
	'depression',
	'depth',
	'deputy',
	'derive',
	'describe',
	'description',
	'desert',
	'deserve',
	'design',
	'designer',
	'desire',
	'desk',
	'desperate',
	'despite',
	'destroy',
	'destruction',
	'detail',
	'detailed',
	'detect',
	'determine',
	'develop',
	'developing',
	'development',
	'device',
	'devote',
	'dialogue',
	'did',
	'didn\'t',
	'die',
	'diet',
	'differ',
	'difference',
	'different',
	'differently',
	'difficult',
	'difficulty',
	'dig',
	'digital',
	'dimension',
	'dining',
	'dinner',
	'direct',
	'direction',
	'directly',
	'director',
	'dirt',
	'dirty',
	'disabilities',
	'disability',
	'disagree',
	'disappear',
	'disaster',
	'discipline',
	'discourse',
	'discover',
	'discovery',
	'discrimination',
	'discuss',
	'discussion',
	'disease',
	'dish',
	'dismiss',
	'disorder',
	'display',
	'dispute',
	'distance',
	'distant',
	'distinct',
	'distinction',
	'distinguish',
	'distribute',
	'distribution',
	'district',
	'diverse',
	'diversity',
	'divide',
	'division',
	'divorce',
	'dna',
	'do',
	'doctor',
	'document',
	'does',
	'doesn\'t',
	'dog',
	'domestic',
	'dominant',
	'dominate',
	'don\'t',
	'done',
	'door',
	'double',
	'doubt',
	'down',
	'downtown',
	'dozen',
	'draft',
	'drag',
	'drama',
	'dramatic',
	'dramatically',
	'draw',
	'drawing',
	'dream',
	'dress',
	'drink',
	'drive',
	'driver',
	'drop',
	'drove',
	'drug',
	'dry',
	'due',
	'during',
	'dust',
	'duty',
	'e-mail',
	'each',
	'eager',
	'ear',
	'early',
	'earn',
	'earnings',
	'earth',
	'ease',
	'easily',
	'east',
	'eastern',
	'easy',
	'eat',
	'economic',
	'economics',
	'economist',
	'economy',
	'edge',
	'edition',
	'editor',
	'educate',
	'education',
	'educational',
	'educator',
	'effect',
	'effective',
	'effectively',
	'efficiency',
	'efficient',
	'effort',
	'egg',
	'eight',
	'either',
	'elderly',
	'elect',
	'election',
	'electric',
	'electricity',
	'electronic',
	'element',
	'elementary',
	'eliminate',
	'elite',
	'else',
	'elsewhere',
	'email',
	'embrace',
	'emerge',
	'emergency',
	'emission',
	'emotion',
	'emotional',
	'emphasis',
	'emphasize',
	'employ',
	'employee',
	'employer',
	'employment',
	'empty',
	'enable',
	'encounter',
	'encourage',
	'end',
	'enemy',
	'energy',
	'enforcement',
	'engage',
	'engine',
	'engineer',
	'engineering',
	'english',
	'enhance',
	'enjoy',
	'enormous',
	'enough',
	'ensure',
	'enter',
	'enterprise',
	'entertainment',
	'entire',
	'entirely',
	'entrance',
	'entry',
	'environment',
	'environmental',
	'episode',
	'equal',
	'equally',
	'equipment',
	'era',
	'error',
	'escape',
	'especially',
	'essay',
	'essential',
	'essentially',
	'establish',
	'establishment',
	'estate',
	'estimate',
	'etc',
	'ethics',
	'ethnic',
	'european',
	'evaluate',
	'evaluation',
	'even',
	'evening',
	'event',
	'eventually',
	'ever',
	'every',
	'everybody',
	'everyday',
	'everyone',
	'everything',
	'everywhere',
	'evidence',
	'evolution',
	'evolve',
	'exact',
	'exactly',
	'examination',
	'examine',
	'example',
	'exceed',
	'excellent',
	'except',
	'exception',
	'exchange',
	'excite',
	'exciting',
	'exclaim',
	'excuse',
	'executive',
	'exercise',
	'exhibit',
	'exhibition',
	'exist',
	'existence',
	'existing',
	'expand',
	'expansion',
	'expect',
	'expectation',
	'expense',
	'expensive',
	'experience',
	'experiment',
	'expert',
	'explain',
	'explanation',
	'explode',
	'explore',
	'explosion',
	'expose',
	'exposure',
	'express',
	'expression',
	'extend',
	'extension',
	'extensive',
	'extent',
	'external',
	'extra',
	'extraordinary',
	'extreme',
	'extremely',
	'eye',
	'eyebrow',
	'fabric',
	'face',
	'facility',
	'fact',
	'factor',
	'factory',
	'faculty',
	'fade',
	'fail',
	'failure',
	'fair',
	'fairly',
	'faith',
	'fall',
	'false',
	'familiar',
	'family',
	'famous',
	'fan',
	'fantasy',
	'far',
	'farm',
	'farmer',
	'fashion',
	'fast',
	'fat',
	'fate',
	'father',
	'fault',
	'favor',
	'favorite',
	'fear',
	'feature',
	'federal',
	'fee',
	'feed',
	'feel',
	'feeling',
	'feet',
	'fell',
	'fellow',
	'felt',
	'female',
	'fence',
	'few',
	'fewer',
	'fiber',
	'fiction',
	'field',
	'fifteen',
	'fifth',
	'fifty',
	'fight',
	'fighter',
	'fighting',
	'figure',
	'file',
	'fill',
	'film',
	'final',
	'finally',
	'finance',
	'financial',
	'find',
	'finding',
	'fine',
	'finger',
	'finish',
	'fire',
	'firm',
	'first',
	'fish',
	'fishing',
	'fit',
	'fitness',
	'five',
	'fix',
	'flag',
	'flame',
	'flash',
	'flat',
	'flavor',
	'flee',
	'flesh',
	'flight',
	'flip',
	'float',
	'floor',
	'flow',
	'flower',
	'fly',
	'focus',
	'folk',
	'follow',
	'following',
	'food',
	'foot',
	'football',
	'for',
	'force',
	'foreign',
	'forest',
	'forever',
	'forget',
	'form',
	'formal',
	'formation',
	'former',
	'formula',
	'forth',
	'fortune',
	'forward',
	'found',
	'foundation',
	'founder',
	'four',
	'fourth',
	'frame',
	'framework',
	'free',
	'freedom',
	'freeze',
	'french',
	'frequency',
	'frequent',
	'frequently',
	'fresh',
	'friend',
	'friendly',
	'friendship',
	'from',
	'front',
	'frown',
	'fruit',
	'frustration',
	'fuel',
	'full',
	'fully',
	'fun',
	'function',
	'fund',
	'fundamental',
	'funding',
	'funeral',
	'funny',
	'furniture',
	'further',
	'furthermore',
	'future',
	'gain',
	'galaxy',
	'gallery',
	'game',
	'gang',
	'gap',
	'garage',
	'garden',
	'garlic',
	'gas',
	'gasp',
	'gate',
	'gather',
	'gave',
	'gay',
	'gaze',
	'gear',
	'gender',
	'gene',
	'general',
	'generally',
	'generate',
	'generation',
	'genetic',
	'gentleman',
	'gently',
	'german',
	'gesture',
	'get',
	'ghost',
	'giant',
	'gift',
	'gifted',
	'giggle',
	'girl',
	'girlfriend',
	'give',
	'given',
	'glad',
	'glance',
	'glare',
	'glass',
	'global',
	'glove',
	'go',
	'goal',
	'god',
	'gold',
	'golden',
	'golf',
	'gone',
	'gonna',
	'good',
	'got',
	'gotten',
	'government',
	'governor',
	'grab',
	'grade',
	'gradually',
	'graduate',
	'grain',
	'grand',
	'grandfather',
	'grandmother',
	'grant',
	'grass',
	'grave',
	'gray',
	'great',
	'greatest',
	'green',
	'greet',
	'grey',
	'grin',
	'grip',
	'groan',
	'grocery',
	'ground',
	'group',
	'grow',
	'growing',
	'growth',
	'guarantee',
	'guard',
	'guess',
	'guest',
	'guide',
	'guideline',
	'guilty',
	'gun',
	'guy',
	'habit',
	'habitat',
	'had',
	'hadn\'t',
	'hair',
	'half',
	'hall',
	'hallway',
	'hand',
	'handful',
	'handle',
	'hang',
	'happen',
	'happy',
	'hard',
	'hardly',
	'has',
	'hat',
	'hate',
	'have',
	'haven\'t',
	'he',
	'he\'d',
	'he\'s',
	'head',
	'headline',
	'headquarters',
	'health',
	'healthy',
	'hear',
	'heard',
	'hearing',
	'heart',
	'heat',
	'heaven',
	'heavily',
	'heavy',
	'heel',
	'height',
	'held',
	'helicopter',
	'hell',
	'hello',
	'help',
	'helpful',
	'her',
	'here',
	'heritage',
	'hero',
	'herself',
	'hey',
	'hi',
	'hide',
	'high',
	'highlight',
	'highly',
	'highway',
	'hill',
	'him',
	'himself',
	'hip',
	'hire',
	'his',
	'historian',
	'historic',
	'historical',
	'history',
	'hit',
	'hold',
	'hole',
	'holiday',
	'holy',
	'home',
	'homeless',
	'honest',
	'honey',
	'honor',
	'hope',
	'horizon',
	'horror',
	'horse',
	'hospital',
	'host',
	'hot',
	'hotel',
	'hour',
	'house',
	'household',
	'housing',
	'how',
	'however',
	'hug',
	'huge',
	'huh',
	'human',
	'humor',
	'hundred',
	'hung',
	'hungry',
	'hunter',
	'hunting',
	'hurry',
	'hurt',
	'husband',
	'hypothesis',
	'i',
	'i\'d',
	'i\'ll',
	'i\'m',
	'i\'ve',
	'ice',
	'idea',
	'ideal',
	'identification',
	'identify',
	'identity',
	'ie',
	'if',
	'ignore',
	'ill',
	'illegal',
	'illness',
	'illustrate',
	'image',
	'imagination',
	'imagine',
	'immediate',
	'immediately',
	'immigrant',
	'immigration',
	'impact',
	'implement',
	'implication',
	'imply',
	'importance',
	'important',
	'impose',
	'impossible',
	'impress',
	'impression',
	'impressive',
	'improve',
	'improvement',
	'in',
	'incentive',
	'incident',
	'include',
	'including',
	'income',
	'incorporate',
	'increase',
	'increased',
	'increasing',
	'increasingly',
	'incredible',
	'indeed',
	'independence',
	'independent',
	'index',
	'indian',
	'indicate',
	'indication',
	'individual',
	'industrial',
	'industry',
	'infant',
	'infection',
	'inflation',
	'influence',
	'inform',
	'information',
	'ingredient',
	'initial',
	'initially',
	'initiative',
	'injury',
	'inner',
	'innocent',
	'inquiry',
	'inside',
	'insight',
	'insist',
	'inspire',
	'install',
	'instance',
	'instead',
	'institution',
	'institutional',
	'instruction',
	'instructor',
	'instrument',
	'insurance',
	'intellectual',
	'intelligence',
	'intend',
	'intense',
	'intensity',
	'intention',
	'interaction',
	'interest',
	'interested',
	'interesting',
	'internal',
	'international',
	'internet',
	'interpret',
	'interpretation',
	'interrupt',
	'intervention',
	'interview',
	'into',
	'introduce',
	'introduction',
	'invasion',
	'invest',
	'investigate',
	'investigation',
	'investigator',
	'investment',
	'investor',
	'invite',
	'involve',
	'involved',
	'involvement',
	'iraqi',
	'irish',
	'iron',
	'is',
	'islamic',
	'island',
	'isn\'t',
	'israeli',
	'issue',
	'it',
	'it\'s',
	'italian',
	'item',
	'its',
	'itself',
	'jacket',
	'jail',
	'japanese',
	'jeans',
	'jerk',
	'jet',
	'jew',
	'jewish',
	'job',
	'join',
	'joint',
	'joke',
	'journal',
	'journalist',
	'journey',
	'joy',
	'judge',
	'judgment',
	'juice',
	'jump',
	'junior',
	'jury',
	'just',
	'justice',
	'justify',
	'keep',
	'kept',
	'key',
	'kick',
	'kid',
	'kill',
	'killer',
	'killing',
	'kind',
	'king',
	'kiss',
	'kitchen',
	'knee',
	'knew',
	'knife',
	'knock',
	'know',
	'knowledge',
	'known',
	'lab',
	'label',
	'labor',
	'laboratory',
	'lack',
	'lady',
	'lake',
	'land',
	'landscape',
	'language',
	'lap',
	'large',
	'largely',
	'last',
	'late',
	'later',
	'latin',
	'latter',
	'laugh',
	'launch',
	'law',
	'lawn',
	'lawsuit',
	'lawyer',
	'lay',
	'layer',
	'lead',
	'leader',
	'leadership',
	'leading',
	'leaf',
	'league',
	'lean',
	'learn',
	'learning',
	'least',
	'leather',
	'leave',
	'led',
	'left',
	'leg',
	'legacy',
	'legal',
	'legend',
	'legislation',
	'legitimate',
	'lemon',
	'length',
	'less',
	'lesson',
	'let',
	'letter',
	'level',
	'liberal',
	'library',
	'license',
	'lie',
	'life',
	'lifestyle',
	'lifetime',
	'lift',
	'light',
	'like',
	'likely',
	'limit',
	'limitation',
	'limited',
	'line',
	'link',
	'lip',
	'list',
	'listen',
	'literally',
	'literary',
	'literature',
	'little',
	'live',
	'living',
	'load',
	'loan',
	'local',
	'locate',
	'location',
	'lock',
	'locker',
	'long',
	'long-term',
	'look',
	'loose',
	'lose',
	'loss',
	'lost',
	'lot',
	'lots',
	'loud',
	'love',
	'lovely',
	'lover',
	'low',
	'lower',
	'luck',
	'lucky',
	'lunch',
	'lung',
	'machine',
	'mad',
	'magazine',
	'mail',
	'main',
	'mainly',
	'maintain',
	'maintenance',
	'major',
	'majority',
	'make',
	'maker',
	'makeup',
	'male',
	'mall',
	'man',
	'manage',
	'management',
	'manager',
	'manner',
	'manufacturer',
	'manufacturing',
	'many',
	'map',
	'margin',
	'mark',
	'market',
	'marketing',
	'marriage',
	'married',
	'marry',
	'mask',
	'mass',
	'massive',
	'master',
	'match',
	'material',
	'math',
	'matter',
	'may',
	'maybe',
	'mayor',
	'me',
	'meal',
	'mean',
	'meaning',
	'meant',
	'meanwhile',
	'measure',
	'measurement',
	'meat',
	'mechanism',
	'media',
	'medical',
	'medication',
	'medicine',
	'medium',
	'meet',
	'meeting',
	'member',
	'membership',
	'memory',
	'men',
	'mental',
	'mention',
	'mention',
	'menu',
	'mere',
	'merely',
	'mess',
	'message',
	'met',
	'metal',
	'meter',
	'method',
	'mexican',
	'middle',
	'might',
	'military',
	'milk',
	'million',
	'mind',
	'mine',
	'minister',
	'minor',
	'minority',
	'minute',
	'miracle',
	'mirror',
	'miss',
	'missile',
	'mission',
	'mistake',
	'mix',
	'mixture',
	'mm-hmm',
	'mode',
	'model',
	'moderate',
	'modern',
	'modest',
	'mom',
	'moment',
	'money',
	'monitor',
	'month',
	'mood',
	'moon',
	'moral',
	'more',
	'moreover',
	'morning',
	'mortgage',
	'most',
	'mostly',
	'mother',
	'motion',
	'motivation',
	'motor',
	'mount',
	'mountain',
	'mouse',
	'mouth',
	'move',
	'movement',
	'movie',
	'mr',
	'mr.',
	'mrs',
	'mrs.',
	'ms',
	'ms.',
	'much',
	'multiple',
	'mum',
	'mumble',
	'murder',
	'muscle',
	'museum',
	'music',
	'musical',
	'musician',
	'muslim',
	'must',
	'mutter',
	'mutual',
	'my',
	'myself',
	'mystery',
	'myth',
	'naked',
	'name',
	'narrative',
	'narrow',
	'nation',
	'national',
	'native',
	'natural',
	'naturally',
	'nature',
	'near',
	'nearby',
	'nearly',
	'necessarily',
	'necessary',
	'neck',
	'need',
	'negative',
	'negotiate',
	'negotiation',
	'neighbor',
	'neighborhood',
	'neither',
	'nerve',
	'nervous',
	'net',
	'network',
	'never',
	'nevertheless',
	'new',
	'newly',
	'news',
	'newspaper',
	'next',
	'nice',
	'night',
	'nine',
	'no',
	'nobody',
	'nod',
	'noise',
	'nomination',
	'none',
	'nonetheless',
	'nor',
	'normal',
	'normally',
	'north',
	'northern',
	'nose',
	'not',
	'note',
	'nothing',
	'notice',
	'notion',
	'novel',
	'now',
	'nowhere',
	'nuclear',
	'number',
	'numerous',
	'nurse',
	'nut',
	'object',
	'objective',
	'obligation',
	'observation',
	'observe',
	'observer',
	'obtain',
	'obvious',
	'obviously',
	'occasion',
	'occasionally',
	'occupation',
	'occupy',
	'occur',
	'ocean',
	'odd',
	'odds',
	'of',
	'off',
	'offense',
	'offensive',
	'offer',
	'office',
	'officer',
	'official',
	'often',
	'oh',
	'oil',
	'ok',
	'okay',
	'old',
	'olympic',
	'on',
	'once',
	'one',
	'ongoing',
	'onion',
	'online',
	'only',
	'onto',
	'open',
	'opening',
	'operate',
	'operating',
	'operation',
	'operator',
	'opinion',
	'opponent',
	'opportunity',
	'oppose',
	'opposite',
	'opposition',
	'option',
	'or',
	'orange',
	'order',
	'ordinary',
	'organic',
	'organization',
	'organize',
	'orientation',
	'origin',
	'original',
	'originally',
	'other',
	'others',
	'otherwise',
	'ought',
	'our',
	'ourselves',
	'out',
	'outcome',
	'outside',
	'oven',
	'over',
	'overall',
	'overcome',
	'overlook',
	'owe',
	'own',
	'owner',
	'pace',
	'pack',
	'package',
	'page',
	'pain',
	'painful',
	'paint',
	'painter',
	'painting',
	'pair',
	'pale',
	'palestinian',
	'palm',
	'pan',
	'panel',
	'pant',
	'pants',
	'paper',
	'parent',
	'parents',
	'park',
	'parking',
	'part',
	'participant',
	'participate',
	'participation',
	'particular',
	'particularly',
	'partly',
	'partner',
	'partnership',
	'party',
	'pass',
	'passage',
	'passenger',
	'passion',
	'past',
	'patch',
	'path',
	'patient',
	'pattern',
	'pause',
	'pay',
	'payment',
	'pc',
	'peace',
	'peak',
	'peer',
	'penalty',
	'people',
	'pepper',
	'per',
	'perceive',
	'percentage',
	'perception',
	'perfect',
	'perfectly',
	'perform',
	'performance',
	'perhaps',
	'period',
	'permanent',
	'permission',
	'permit',
	'person',
	'personal',
	'personality',
	'personally',
	'personnel',
	'perspective',
	'persuade',
	'pet',
	'phase',
	'phenomenon',
	'philosophy',
	'phone',
	'photo',
	'photograph',
	'photographer',
	'phrase',
	'physical',
	'physically',
	'physician',
	'piano',
	'pick',
	'picture',
	'pie',
	'piece',
	'pile',
	'pilot',
	'pine',
	'pink',
	'pipe',
	'pitch',
	'place',
	'plan',
	'plane',
	'planet',
	'planning',
	'plant',
	'plastic',
	'plate',
	'platform',
	'play',
	'player',
	'please',
	'pleasure',
	'plenty',
	'plot',
	'plus',
	'pm',
	'pocket',
	'poem',
	'poet',
	'poetry',
	'point',
	'pole',
	'police',
	'policy',
	'political',
	'politically',
	'politician',
	'politics',
	'poll',
	'pollution',
	'pool',
	'poor',
	'pop',
	'popular',
	'population',
	'porch',
	'port',
	'portion',
	'portrait',
	'portray',
	'pose',
	'position',
	'positive',
	'possess',
	'possibility',
	'possible',
	'possibly',
	'post',
	'pot',
	'potato',
	'potential',
	'potentially',
	'pound',
	'pour',
	'poverty',
	'powder',
	'power',
	'powerful',
	'practical',
	'practically',
	'practice',
	'pray',
	'prayer',
	'precisely',
	'predict',
	'prefer',
	'preference',
	'pregnancy',
	'pregnant',
	'preparation',
	'prepare',
	'prescription',
	'presence',
	'present',
	'presentation',
	'preserve',
	'president',
	'presidential',
	'press',
	'pressure',
	'pretend',
	'pretty',
	'prevent',
	'previous',
	'previously',
	'price',
	'pride',
	'priest',
	'primarily',
	'primary',
	'prime',
	'principal',
	'principle',
	'print',
	'prior',
	'priority',
	'prison',
	'prisoner',
	'privacy',
	'private',
	'probably',
	'problem',
	'procedure',
	'proceed',
	'process',
	'produce',
	'producer',
	'product',
	'production',
	'profession',
	'professional',
	'professionals',
	'professor',
	'profile',
	'profit',
	'program',
	'progress',
	'project',
	'prominent',
	'promise',
	'promote',
	'prompt',
	'proof',
	'proper',
	'properly',
	'property',
	'proportion',
	'proposal',
	'propose',
	'proposed',
	'prosecutor',
	'prospect',
	'protect',
	'protection',
	'protein',
	'protest',
	'proud',
	'prove',
	'provide',
	'provider',
	'province',
	'provision',
	'psychological',
	'psychologist',
	'psychology',
	'public',
	'publication',
	'publicly',
	'publish',
	'publisher',
	'pull',
	'punch',
	'punishment',
	'purchase',
	'pure',
	'purpose',
	'pursue',
	'push',
	'put',
	'qualify',
	'quality',
	'quarter',
	'quarterback',
	'question',
	'quick',
	'quickly',
	'quiet',
	'quietly',
	'quit',
	'quite',
	'quote',
	'race',
	'racial',
	'radical',
	'radio',
	'rail',
	'rain',
	'raise',
	'ran',
	'rang',
	'range',
	'rank',
	'rapid',
	'rapidly',
	'rare',
	'rarely',
	'rate',
	'rather',
	'rating',
	'ratio',
	'raw',
	'reach',
	'react',
	'reaction',
	'read',
	'reader',
	'reading',
	'ready',
	'real',
	'reality',
	'realize',
	'really',
	'reason',
	'reasonable',
	'recall',
	'receive',
	'recent',
	'recently',
	'recipe',
	'recognition',
	'recognize',
	'recommend',
	'recommendation',
	'record',
	'recording',
	'recover',
	'recovery',
	'recruit',
	'red',
	'reduce',
	'reduction',
	'refer',
	'reference',
	'reflect',
	'reflection',
	'reform',
	'refugee',
	'refuse',
	'regard',
	'regarding',
	'regardless',
	'regime',
	'region',
	'regional',
	'register',
	'regular',
	'regularly',
	'regulate',
	'regulation',
	'reinforce',
	'reject',
	'relate',
	'relation',
	'relationship',
	'relative',
	'relatively',
	'relax',
	'release',
	'relevant',
	'relief',
	'religion',
	'religious',
	'rely',
	'remain',
	'remaining',
	'remarkable',
	'remember',
	'remind',
	'remote',
	'remove',
	'repeat',
	'repeatedly',
	'replace',
	'reply',
	'report',
	'reporter',
	'represent',
	'representation',
	'representative',
	'republican',
	'reputation',
	'request',
	'require',
	'requirement',
	'research',
	'researcher',
	'resemble',
	'reservation',
	'resident',
	'resist',
	'resistance',
	'resolution',
	'resolve',
	'resort',
	'resource',
	'respect',
	'respond',
	'respondent',
	'response',
	'responsibility',
	'responsible',
	'rest',
	'restaurant',
	'restore',
	'restriction',
	'result',
	'retain',
	'retire',
	'retirement',
	'return',
	'reveal',
	'revenue',
	'review',
	'revolution',
	'rhythm',
	'rice',
	'rich',
	'rid',
	'ride',
	'rifle',
	'right',
	'ring',
	'rise',
	'risk',
	'river',
	'road',
	'rock',
	'role',
	'roll',
	'romantic',
	'roof',
	'room',
	'root',
	'rope',
	'rose',
	'rough',
	'roughly',
	'round',
	'route',
	'routine',
	'row',
	'rub',
	'rule',
	'run',
	'running',
	'rural',
	'rush',
	'russian',
	'sacred',
	'sad',
	'safe',
	'safety',
	'said',
	'sake',
	'salad',
	'salary',
	'sale',
	'sales',
	'salt',
	'same',
	'sample',
	'sanction',
	'sand',
	'sat',
	'satellite',
	'satisfaction',
	'satisfy',
	'sauce',
	'save',
	'saving',
	'saw',
	'say',
	'scale',
	'scandal',
	'scare',
	'scared',
	'scenario',
	'scene',
	'schedule',
	'scheme',
	'scholar',
	'scholarship',
	'school',
	'science',
	'scientific',
	'scientist',
	'scope',
	'score',
	'scream',
	'screen',
	'script',
	'sea',
	'search',
	'season',
	'seat',
	'second',
	'secret',
	'secretary',
	'section',
	'sector',
	'secure',
	'security',
	'see',
	'seed',
	'seek',
	'seem',
	'seen',
	'segment',
	'seize',
	'select',
	'selection',
	'self',
	'sell',
	'senate',
	'senator',
	'send',
	'senior',
	'sense',
	'sensitive',
	'sent',
	'sentence',
	'separate',
	'sequence',
	'series',
	'serious',
	'seriously',
	'serve',
	'service',
	'session',
	'set',
	'setting',
	'settle',
	'settlement',
	'seven',
	'several',
	'severe',
	'sex',
	'sexual',
	'shade',
	'shadow',
	'shake',
	'shall',
	'shape',
	'share',
	'sharp',
	'she',
	'she\'d',
	'she\'s',
	'sheet',
	'shelf',
	'shell',
	'shelter',
	'shift',
	'shine',
	'ship',
	'shirt',
	'shit',
	'shock',
	'shoe',
	'shook',
	'shoot',
	'shooting',
	'shop',
	'shopping',
	'shore',
	'short',
	'shortly',
	'shot',
	'should',
	'shoulder',
	'shouldn\'t',
	'shout',
	'shove',
	'show',
	'shower',
	'shrug',
	'shut',
	'sick',
	'side',
	'sigh',
	'sight',
	'sign',
	'signal',
	'significance',
	'significant',
	'significantly',
	'silence',
	'silent',
	'silver',
	'similar',
	'similarly',
	'simple',
	'simply',
	'sin',
	'since',
	'sing',
	'singer',
	'single',
	'sink',
	'sir',
	'sister',
	'sit',
	'site',
	'situation',
	'six',
	'size',
	'ski',
	'skill',
	'skin',
	'sky',
	'slam',
	'slave',
	'sleep',
	'slice',
	'slide',
	'slight',
	'slightly',
	'slip',
	'slow',
	'slowly',
	'small',
	'smart',
	'smell',
	'smile',
	'smirk',
	'smoke',
	'smooth',
	'snap',
	'snow',
	'so',
	'so-called',
	'soccer',
	'social',
	'society',
	'soft',
	'softly',
	'software',
	'soil',
	'solar',
	'soldier',
	'solid',
	'solution',
	'solve',
	'some',
	'somebody',
	'somehow',
	'someone',
	'something',
	'sometimes',
	'somewhat',
	'somewhere',
	'son',
	'song',
	'soon',
	'sophisticated',
	'sorry',
	'sort',
	'soul',
	'sound',
	'soup',
	'source',
	'south',
	'southern',
	'soviet',
	'space',
	'spanish',
	'speak',
	'speaker',
	'special',
	'specialist',
	'species',
	'specific',
	'specifically',
	'speech',
	'speed',
	'spend',
	'spending',
	'spent',
	'spin',
	'spirit',
	'spiritual',
	'split',
	'spoke',
	'spokesman',
	'sport',
	'spot',
	'spread',
	'spring',
	'square',
	'squeeze',
	'stability',
	'stable',
	'staff',
	'stage',
	'stair',
	'stake',
	'stand',
	'standard',
	'standing',
	'star',
	'stare',
	'start',
	'state',
	'statement',
	'station',
	'statistics',
	'status',
	'stay',
	'steady',
	'steal',
	'steel',
	'step',
	'stick',
	'still',
	'stir',
	'stock',
	'stomach',
	'stone',
	'stood',
	'stop',
	'storage',
	'store',
	'storm',
	'story',
	'straight',
	'strange',
	'stranger',
	'strategic',
	'strategy',
	'stream',
	'street',
	'strength',
	'strengthen',
	'stress',
	'stretch',
	'strike',
	'string',
	'strip',
	'stroke',
	'strong',
	'strongly',
	'structure',
	'struggle',
	'stuck',
	'student',
	'studio',
	'study',
	'stuff',
	'stupid',
	'style',
	'subject',
	'submit',
	'subsequent',
	'substance',
	'substantial',
	'succeed',
	'success',
	'successful',
	'successfully',
	'such',
	'sudden',
	'suddenly',
	'sue',
	'suffer',
	'sufficient',
	'sugar',
	'suggest',
	'suggestion',
	'suicide',
	'suit',
	'summer',
	'summit',
	'sun',
	'super',
	'supply',
	'support',
	'supporter',
	'suppose',
	'supposed',
	'supreme',
	'sure',
	'surely',
	'surface',
	'surgery',
	'surprise',
	'surprised',
	'surprising',
	'surprisingly',
	'surround',
	'survey',
	'survival',
	'survive',
	'survivor',
	'suspect',
	'sustain',
	'swear',
	'sweep',
	'sweet',
	'swim',
	'swing',
	'switch',
	'symbol',
	'symptom',
	'system',
	'table',
	'tablespoon',
	'tactic',
	'tail',
	'take',
	'taken',
	'tale',
	'talent',
	'talk',
	'tall',
	'tank',
	'tap',
	'tape',
	'target',
	'task',
	'taste',
	'tax',
	'taxpayer',
	'tea',
	'teach',
	'teacher',
	'teaching',
	'team',
	'tear',
	'teaspoon',
	'technical',
	'technique',
	'technology',
	'teen',
	'teenager',
	'teeth',
	'telephone',
	'telescope',
	'television',
	'tell',
	'temperature',
	'temporary',
	'ten',
	'tend',
	'tendency',
	'tennis',
	'tension',
	'tent',
	'term',
	'terms',
	'terrible',
	'territory',
	'terror',
	'terrorism',
	'terrorist',
	'test',
	'testify',
	'testimony',
	'testing',
	'text',
	'than',
	'thank',
	'thanks',
	'that',
	'that\'s',
	'the',
	'theater',
	'their',
	'them',
	'theme',
	'themselves',
	'then',
	'theory',
	'therapy',
	'there',
	'there\'s',
	'therefore',
	'these',
	'they',
	'they\'d',
	'they\'re',
	'thick',
	'thin',
	'thing',
	'think',
	'thinking',
	'third',
	'thirty',
	'this',
	'those',
	'though',
	'thought',
	'thousand',
	'threat',
	'threaten',
	'three',
	'threw',
	'throat',
	'through',
	'throughout',
	'throw',
	'thus',
	'ticket',
	'tie',
	'tight',
	'time',
	'tiny',
	'tip',
	'tire',
	'tired',
	'tissue',
	'title',
	'to',
	'tobacco',
	'today',
	'toe',
	'together',
	'told',
	'tomato',
	'tomorrow',
	'tone',
	'tongue',
	'tonight',
	'too',
	'took',
	'tool',
	'tooth',
	'top',
	'topic',
	'toss',
	'total',
	'totally',
	'touch',
	'tough',
	'tour',
	'tourist',
	'tournament',
	'toward',
	'towards',
	'tower',
	'town',
	'toy',
	'trace',
	'track',
	'trade',
	'tradition',
	'traditional',
	'traffic',
	'tragedy',
	'trail',
	'train',
	'training',
	'transfer',
	'transform',
	'transformation',
	'transition',
	'translate',
	'transportation',
	'travel',
	'treat',
	'treatment',
	'treaty',
	'tree',
	'tremendous',
	'trend',
	'trial',
	'tribe',
	'trick',
	'trip',
	'troop',
	'trouble',
	'truck',
	'true',
	'truly',
	'trust',
	'truth',
	'try',
	'tube',
	'tunnel',
	'turn',
	'tv',
	'twelve',
	'twenty',
	'twice',
	'twin',
	'two',
	'type',
	'typical',
	'typically',
	'ugly',
	'ultimate',
	'ultimately',
	'unable',
	'uncle',
	'under',
	'undergo',
	'understand',
	'understanding',
	'unfortunately',
	'uniform',
	'union',
	'unique',
	'unit',
	'united',
	'universal',
	'universe',
	'university',
	'unknown',
	'unless',
	'unlike',
	'unlikely',
	'until',
	'unusual',
	'up',
	'upon',
	'upper',
	'urban',
	'urge',
	'us',
	'use',
	'used',
	'useful',
	'user',
	'usual',
	'usually',
	'utility',
	'vacation',
	'valley',
	'valuable',
	'value',
	'variable',
	'variation',
	'variety',
	'various',
	'vary',
	'vast',
	'vegetable',
	'vehicle',
	'venture',
	'version',
	'versus',
	'very',
	'vessel',
	'veteran',
	'via',
	'victim',
	'victory',
	'video',
	'view',
	'viewer',
	'village',
	'violate',
	'violation',
	'violence',
	'violent',
	'virtually',
	'virtue',
	'virus',
	'visible',
	'vision',
	'visit',
	'visitor',
	'visual',
	'vital',
	'voice',
	'volume',
	'volunteer',
	'vote',
	'voter',
	'vs',
	'vulnerable',
	'wage',
	'wait',
	'wake',
	'walk',
	'wall',
	'wander',
	'want',
	'war',
	'warm',
	'warn',
	'warning',
	'was',
	'wash',
	'wasn\'t',
	'waste',
	'watch',
	'water',
	'wave',
	'way',
	'we',
	'we\'ll',
	'we\'re',
	'we\'ve',
	'weak',
	'wealth',
	'wealthy',
	'weapon',
	'wear',
	'weather',
	'wedding',
	'week',
	'weekend',
	'weekly',
	'weigh',
	'weight',
	'weird',
	'welcome',
	'welfare',
	'well',
	'went',
	'were',
	'weren\'t',
	'west',
	'western',
	'wet',
	'what',
	'what\'s',
	'whatever',
	'wheel',
	'when',
	'whenever',
	'where',
	'whereas',
	'whether',
	'which',
	'while',
	'whisper',
	'white',
	'who',
	'whole',
	'whom',
	'whose',
	'why',
	'wide',
	'widely',
	'widespread',
	'wife',
	'wild',
	'will',
	'willing',
	'win',
	'wind',
	'window',
	'wine',
	'wing',
	'winner',
	'winter',
	'wipe',
	'wire',
	'wisdom',
	'wise',
	'wish',
	'with',
	'withdraw',
	'within',
	'without',
	'witness',
	'woke',
	'woman',
	'women',
	'won\'t',
	'wonder',
	'wonderful',
	'wood',
	'wooden',
	'word',
	'wore',
	'work',
	'worker',
	'working',
	'works',
	'workshop',
	'world',
	'worried',
	'worry',
	'worse',
	'worth',
	'would',
	'wouldn\'t',
	'wound',
	'wow',
	'wrap',
	'write',
	'writer',
	'writing',
	'wrong',
	'yard',
	'yeah',
	'year',
	'yell',
	'yellow',
	'yes',
	'yesterday',
	'yet',
	'yield',
	'you',
	'you\'d',
	'you\'ll',
	'you\'re',
	'you\'ve',
	'young',
	'your',
	'yours',
	'yourself',
	'youth',
	'zone'
]);
