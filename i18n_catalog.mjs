import {
  DIMENSION_META_ZH,
  QUESTIONS_ZH,
  SPECIAL_QUESTIONS_ZH,
  TYPE_LIBRARY_ZH,
  DIM_EXPLANATIONS_ZH,
} from './sbti_zh_data.mjs';

export const UI_TEXT = {
  'zh-CN': {
    pageTitle: 'SBTI 人格测试',
    introTitle: 'MBTI已经过时，SBTI来了。',
    startBtn: '开始测试',
    backHomeBtn: '返回首页',
    submitBtn: '提交并查看结果',
    restartBtn: '重新测试',
    toTopBtn: '回到首页',
    analysisTitle: '该人格的简单解读',
    dimensionTitle: '十五维度评分',
    noteTitle: '友情提示',
    questionTagSupplementary: '补充题',
    questionTagHidden: '维度已隐藏',
    testHintIncomplete: '全选完才会放行。世界已经够乱了，起码把题做完整。',
    testHintComplete: '都做完了。现在可以把你的电子魂魄交给结果页审判。',
    modeYourPrimary: '你的主类型',
    modeHiddenActivated: '隐藏人格已激活',
    modeFallback: '系统强制兜底',
    badgeNormal: '匹配度 {similarity}% · 精准命中 {exact}/15 维',
    badgeDrunk: '匹配度 100% · 酒精异常因子已接管',
    badgeFallback: '标准人格库最高匹配仅 {similarity}%',
    subNormal: '维度命中度较高，当前结果可视为你的第一人格画像。',
    subDrunk: '乙醇亲和性过强，系统已直接跳过常规人格审判。',
    subFallback: '标准人格库对你的脑回路集体罢工了，于是系统把你强制分配给了 HHHH。',
    funNoteNormal:
      '本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。你可以笑，但别太当真。',
    funNoteSpecial:
      '本测试仅供娱乐。隐藏人格和傻乐兜底都属于作者故意埋的损招，请勿把它当成医学、心理学、相学、命理学或灵异学依据。',
    authorExpand: '展开',
    authorCollapse: '收起',
  },
  en: {
    pageTitle: 'SBTI Personality Test',
    introTitle: 'MBTI is outdated. Welcome to SBTI.',
    startBtn: 'Start Test',
    backHomeBtn: 'Back to Home',
    submitBtn: 'Submit and View Result',
    restartBtn: 'Retake Test',
    toTopBtn: 'Back to Home',
    analysisTitle: 'Quick Interpretation',
    dimensionTitle: '15-Dimension Scores',
    noteTitle: 'Friendly Note',
    questionTagSupplementary: 'Bonus Item',
    questionTagHidden: 'Dimension Hidden',
    testHintIncomplete: 'No shortcuts. Finish every question before submitting.',
    testHintComplete: 'All done. Hand your digital soul over to the result page.',
    modeYourPrimary: 'Your Primary Type',
    modeHiddenActivated: 'Hidden Persona Activated',
    modeFallback: 'System Fallback Mode',
    badgeNormal: 'Match {similarity}% · Exact hit {exact}/15 dims',
    badgeDrunk: 'Match 100% · Ethanol anomaly fully engaged',
    badgeFallback: 'Best standard-library match is only {similarity}%',
    subNormal: 'Your profile aligns well across dimensions. This is your primary persona.',
    subDrunk: 'Alcohol affinity is too strong. The system skipped normal personality judgment.',
    subFallback: 'Your cognitive wiring broke the standard library, so the system force-assigned HHHH.',
    funNoteNormal:
      'This test is for entertainment only. Do not use it as diagnosis, interview standard, dating filter, breakup decision, fortune-telling, or life sentence.',
    funNoteSpecial:
      'Entertainment only. Hidden personas and HHHH fallback are intentionally playful traps, not medical, psychological, spiritual, or legal conclusions.',
    authorExpand: 'Expand',
    authorCollapse: 'Collapse',
  },
  es: {
    pageTitle: 'Test de Personalidad SBTI',
    introTitle: 'El MBTI es de pringaos. Pásate al SBTI.',
    startBtn: 'Dale caña al test',
    backHomeBtn: 'Volver al inicio',
    submitBtn: 'Enviar y ver qué cojones soy',
    restartBtn: 'Repetir esta movida',
    toTopBtn: 'P\'arriba',
    analysisTitle: 'Análisis Rápido',
    dimensionTitle: 'Notas en 15 Dimensiones',
    noteTitle: 'Ojo al dato',
    questionTagSupplementary: 'Pregunta de Regalo',
    questionTagHidden: 'Dimensión Oculta',
    testHintIncomplete: 'Ni de coña. Contesta a todo antes de pasar de pantalla.',
    testHintComplete: 'Ale, todo listo. Prepárate para que el sistema te juzgue.',
    modeYourPrimary: 'Tu Rollo Principal',
    modeHiddenActivated: 'Personalidad Oculta Desbloqueada',
    modeFallback: 'Modo Salvavidas',
    badgeNormal: 'Afinidad {similarity}% · Clavaste {exact}/15 dim',
    badgeDrunk: 'Afinidad 100% · Alarma por borrachera máxima',
    badgeFallback: 'El puto sistema solo cuadra al {similarity}%',
    subNormal: 'Tus neuras encajan bastante bien. Este eres tú, asúmelo.',
    subDrunk: 'Tienes tanto alcohol en vena que el sistema ha pasado de evaluarte en serio.',
    subFallback: 'Tienes una pedrada tan gorda que has roto el baremo, así que el sistema te ha endosado HHHH por la cara.',
    funNoteNormal:
      'Esto es de coña. No te lo tomes como un diagnóstico médico, ni lo uses para buscar curro, pillar cacho, dejar a tu pareja o leerte el futuro. Échate unas risas y ya.',
    funNoteSpecial:
      'Pura coña. Lo de las personalidades ocultas y el rescate HHHH son trolleadas mías, no tienen validez legal ni te van a curar los traumas.',
    authorExpand: 'Ver más',
    authorCollapse: 'Plegar',
  },
};

export const AUTHOR_TEXT = {
  'zh-CN': {
    summary: '作者的话',
    p1: '本测试首发于b站up主蛆肉儿串儿（UID417038183），初衷是劝诫一位爱喝酒的朋友戒酒。',
    p2: '由于作者的人格是SHIT愤世者，所以平等的攻击了各位，在此抱歉！！不过我是一个绝世大美女，你们一定会原谅我，有B站的朋友们也可以关注我。',
    p3: '关于这个测试，我没法很好的平衡娱乐和专业性，因此对于一些人格的阐释较为模糊或完全不准（如屌丝可能并非真的屌丝），如有冒犯非常抱歉！！',
    p4: '再鉴于时间精力有限，就随便搞了一个先这样玩玩，后续会慢慢完善修改的，总之好玩为主，还请不要用于盈利呀。',
  },
  en: {
    summary: 'Author Notes',
    p1: 'This test was first posted by Bilibili creator "Qu Rou Er Chuan Er" (UID 417038183). It originally started as a playful attempt to persuade a friend to drink less.',
    p2: 'Because my own persona is SHIT (cynic), I roasted everyone equally. Sorry about that. But I am also a stunning beauty, so I trust you will forgive me.',
    p3: 'I could not perfectly balance entertainment and professionalism, so some interpretations may be fuzzy or inaccurate. If anything feels offensive, I sincerely apologize.',
    p4: 'Given limited time and energy, this is an early version made mainly for fun. I will keep improving it gradually. Please do not use it for profit.',
  },
  es: {
    summary: 'Chapa de la autora',
    p1: 'Este test lo soltó primero la creadora de Bilibili "Qu Rou Er Chuan Er" (UID 417038183). Empezó como una coña para decirle a una colega que dejara de darle tanto al alpiste.',
    p2: 'Como mi rollo es SHIT (hater total), he repartido hostias a todo quisqui por igual. Lo siento, ¿vale? Pero como soy una pedazo de diosa, sé que me lo vais a perdonar.',
    p3: 'La verdad es que no he clavado el equilibrio entre las risas y la psicología, así que algunas parrafadas igual no cuadran ni de coña. Si te pica algo de lo que lees, pues mala suerte (es broma, perdona).',
    p4: 'Con el tiempo de mierda que tengo, esto es solo una versión cutre para echar unas risas. Ya lo iré puliendo. Pero por favor, no seáis ratas y no lo uséis para sacar pasta.',
  },
};

export const QUESTION_TRANSLATIONS = {
  en: {
    q1: {
      text: 'I am not only a loser; I am also a joker and a drifting nobody. I have never had a relationship, I am timid and insecure, and my youth is one long daydream. I imagine walking and shopping with someone I love, but in reality I wasted my parents money, studied at a weak school, drifted into work with no goals, no skills, no direction. Every time I see people joking about losers online, I want to cry. I feel like a rat under the street, peeking at all the good things from a crack in a manhole. Please leave clowns like me a little room to breathe. I am tired of soaking my pillow in daylight tears.',
      options: ['I cried...', 'What is this...', 'This is not me!'],
    },
    q2: {
      text: 'I am not good enough; people around me are better than me.',
      options: ['True', 'Sometimes', 'Not really'],
    },
    q3: {
      text: 'I clearly know what my true self is like.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q4: {
      text: 'I have something I genuinely pursue in life.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q5: {
      text: 'I must keep climbing and becoming stronger.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q6: {
      text: 'Other peoples opinions do not matter to me at all.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q7: {
      text: 'Your partner has not replied for over 5 hours and says they had diarrhea. What do you think?',
      options: [
        'No way diarrhea lasts 5 hours. Maybe they are hiding something.',
        'I swing between trust and suspicion.',
        'Maybe they really feel sick today.',
      ],
    },
    q8: {
      text: 'In relationships, I often worry that I will be abandoned.',
      options: ['Yes', 'Sometimes', 'No'],
    },
    q9: {
      text: 'I swear I take every relationship seriously.',
      options: ['Not really', 'Maybe?', 'Yes! (with pride)'],
    },
    q10: {
      text: 'Your partner is respectful, gentle, principled, articulate, observant, knowledgeable, kind, ambitious, and absurdly attractive. What would you do?',
      options: [
        'Even if they are amazing, I would not fall too deep.',
        'Somewhere between A and C.',
        'I would cherish them deeply, maybe even become love-brained.',
      ],
    },
    q11: {
      text: 'After dating, your partner becomes very clingy. How do you feel?',
      options: ['That sounds great', 'Either way is fine', 'I prefer keeping independent space'],
    },
    q12: {
      text: 'In any relationship, I value personal space.',
      options: ['I prefer dependence and being depended on', 'Depends', 'Yes, absolutely'],
    },
    q13: {
      text: 'Most people are kind.',
      options: [
        'Evil minds are more common than hemorrhoids.',
        'Maybe.',
        'Yes, I choose to believe there are more good people.',
      ],
    },
    q14: {
      text: 'You are walking down the street and an extremely cute little girl gives you a lollipop. What is your first reaction?',
      options: [
        'Aww she is so sweet and adorable!',
        'Confused face, scratching my head.',
        'Could this be a new scam? Better walk away.',
      ],
    },
    q15: {
      text: 'Exam week is near. School requires evening study and absence costs points. But tonight your crush invited you to play a game. What do you do?',
      options: ['Skip it, just this once!', 'I will ask for leave.', 'Exam first, game later.'],
    },
    q16: {
      text: 'I like breaking conventions and dislike being constrained.',
      options: ['Agree', 'Neutral', 'Disagree'],
    },
    q17: {
      text: 'I usually do things with a goal in mind.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q18: {
      text: 'One day I realize life has no grand meaning. Humans are driven by urges and hormones: hungry then eat, sleepy then sleep, aroused then mate. We are not that different from animals.',
      options: ['That is true.', 'Maybe yes, maybe no.', 'That is nonsense.'],
    },
    q19: {
      text: 'I act mainly to achieve progress and outcomes, not just to avoid trouble and risk.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q20: {
      text: 'You are constipated on the toilet for 30 minutes. Which reaction sounds most like you?',
      options: [
        'Sit 30 more minutes and hope for a miracle.',
        'Slap your own butt and yell, Come on, do your job!',
        "I'm done pooping (pull up pants and leave)",
      ],
    },
    q21: {
      text: 'I make decisions decisively and dislike hesitation.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
    q22: {
      text: 'No question text here. Please choose blindly.',
      options: ['After thinking a lot, maybe A?', 'Uh... maybe B?', 'If unsure, maybe C?'],
    },
    q23: {
      text: 'People say you have strong execution. Which inner line feels closer?',
      options: [
        'When I am cornered by deadlines, yes, I execute hard.',
        'Sometimes, I guess.',
        'Yes. Things are meant to be pushed forward.',
      ],
    },
    q24: {
      text: 'I often make plans, ____',
      options: ['but reality changes too fast.', 'sometimes I finish them, sometimes I do not.', 'and I hate when they get disrupted.'],
    },
    q25: {
      text: 'You met many online friends through a game and they invite you to an offline meetup. What do you think?',
      options: [
        'Online joking is fine, but meeting in person feels scary.',
        'Meeting is okay; I can chat a bit with anyone.',
        'I would dress up and chat warmly. You never know.',
      ],
    },
    q26: {
      text: 'A friend brings their friend along. Your likely state is:',
      options: [
        'I naturally keep distance from friend-of-friend dynamics.',
        'Depends on vibe. If we click, we play.',
        'Friends friend is my friend too. Lets talk warmly.',
      ],
    },
    q27: {
      text: 'My social style is an electronic fence. Get too close and the alarm goes off.',
      options: ['Agree', 'Neutral', 'Disagree'],
    },
    q28: {
      text: 'I want close bonds with trusted people, like long-lost family.',
      options: ['Agree', 'Neutral', 'Disagree'],
    },
    q29: {
      text: 'Sometimes you hold a negative opinion but do not say it. Usually why?',
      options: ['This rarely happens to me.', 'I worry about social context or relationships.', 'I do not want people to see my darker side.'],
    },
    q30: {
      text: 'I present different versions of myself to different people.',
      options: ['Disagree', 'Neutral', 'Agree'],
    },
  },
  es: {
    q1: {
      text: 'No soy solo un perdedor: tambien soy un joker y un don nadie. Nunca tuve una relacion, soy timido e inseguro, y mi juventud fue una cadena de fantasias. Sueno con caminar y pasar tiempo con alguien, pero en la realidad desperdicie el dinero de mis padres, estudie en una mala escuela y termine trabajando sin rumbo, sin metas y sin habilidades. Cuando veo bromas sobre "fracasados" en internet, me dan ganas de llorar. Me siento como una rata bajo tierra mirando la felicidad ajena por una rendija. Por favor, dejen un poco de aire para payasos como yo.',
      options: ['Lloro...', 'Que es esto...', 'Eso no soy yo!'],
    },
    q2: {
      text: 'No soy lo bastante bueno; la gente a mi alrededor es mejor que yo.',
      options: ['Es verdad', 'A veces', 'No'],
    },
    q3: {
      text: 'Tengo muy claro como es mi verdadero yo.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q4: {
      text: 'Tengo algo que realmente quiero perseguir en la vida.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q5: {
      text: 'Debo seguir subiendo y volverme mas fuerte.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q6: {
      text: 'La opinion de los demas me da completamente igual.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q7: {
      text: 'Tu pareja no responde por mas de 5 horas y dice que tenia diarrea. Que piensas?',
      options: [
        'Imposible que dure 5 horas. Tal vez oculta algo.',
        'Oscilo entre confiar y sospechar.',
        'Quizas de verdad se siente mal hoy.',
      ],
    },
    q8: {
      text: 'En relaciones, suelo preocuparme por ser abandonado.',
      options: ['Si', 'A veces', 'No'],
    },
    q9: {
      text: 'Juro que me tomo en serio cada relacion.',
      options: ['No realmente', 'Quizas?', 'Si!'],
    },
    q10: {
      text: 'Tu pareja es respetuosa, amable, integra, observadora, talentosa y absurdamente atractiva. Que harias?',
      options: [
        'Aunque sea increible, no me hundiria demasiado.',
        'Algo entre A y C.',
        'La valoraria mucho, quizas me volveria muy dependiente del amor.',
      ],
    },
    q11: {
      text: 'Despues de empezar a salir, tu pareja se vuelve muy pegajosa. Como te sientes?',
      options: ['Eso suena genial', 'Me da igual', 'Prefiero conservar mi espacio'],
    },
    q12: {
      text: 'En cualquier relacion valoro mucho el espacio personal.',
      options: ['Prefiero depender y que dependan de mi', 'Depende', 'Si, totalmente'],
    },
    q13: {
      text: 'La mayoria de la gente es buena.',
      options: [
        'Hay mas maldad que hemorroides en el mundo.',
        'Quizas.',
        'Si, prefiero creer que hay mas gente buena.',
      ],
    },
    q14: {
      text: 'Vas por la calle y una nina extremadamente adorable te ofrece una paleta. Cual es tu reaccion?',
      options: [
        'Ay, que tierna! Que linda!',
        'Cara de confusion, rascandome la cabeza.',
        'Esto podria ser una estafa nueva? Mejor me alejo.',
      ],
    },
    q15: {
      text: 'Se acercan examenes. La escuela obliga estudio nocturno y faltar resta puntos, pero tu crush te invita a jugar hoy. Que haces?',
      options: ['Me lo salto, solo esta vez!', 'Pido permiso.', 'Primero examenes, luego juego.'],
    },
    q16: {
      text: 'Me gusta romper reglas y no me gusta sentirme atado.',
      options: ['De acuerdo', 'Neutral', 'No estoy de acuerdo'],
    },
    q17: {
      text: 'Normalmente hago las cosas con un objetivo.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q18: {
      text: 'Un dia me doy cuenta de que la vida no tiene gran sentido. Los humanos estan guiados por deseos y hormonas: hambre comer, sueno dormir, deseo aparearse. No somos tan distintos de los animales.',
      options: ['Es asi.', 'Tal vez si, tal vez no.', 'Eso es una tonteria.'],
    },
    q19: {
      text: 'Actuo sobre todo para lograr resultados y progreso, no solo para evitar riesgos y problemas.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q20: {
      text: 'Llevas 30 minutos en el inodoro por estrenimiento. Cual reaccion se parece mas a ti?',
      options: [
        'Me quedo 30 minutos mas y veo si sale algo.',
        'Me doy palmadas y digo: Vamos, funciona!',
        'Paso de cagar (me subo los pantalones y me voy)',
      ],
    },
    q21: {
      text: 'Tomo decisiones con firmeza y no me gusta dudar.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
    q22: {
      text: 'Esta pregunta no tiene enunciado. Elige a ciegas.',
      options: ['Pensando mucho, quizas A?', 'Eh... tal vez B?', 'Si no se, C?'],
    },
    q23: {
      text: 'Si te dicen "tienes gran ejecucion", cual frase interna te representa mas?',
      options: [
        'Cuando me acorralan los plazos, ejecuto fuerte.',
        'A veces, supongo.',
        'Si. Las cosas deben avanzar.',
      ],
    },
    q24: {
      text: 'Suelo planificar, ____',
      options: [
        'pero la realidad cambia demasiado rapido.',
        'a veces lo cumplo, a veces no.',
        'y odio que rompan mis planes.',
      ],
    },
    q25: {
      text: 'Conociste gente online en un juego y te invitan a verse en persona. Que piensas?',
      options: [
        'Hablar online va bien, pero vernos me da nervios.',
        'Esta bien verse; hablo un poco con quien sea.',
        'Me arreglo y converso con entusiasmo. Nunca se sabe.',
      ],
    },
    q26: {
      text: 'Tu amigo trae a otro amigo. Tu estado mas probable es:',
      options: [
        'Mantengo distancia con amigos de amigos.',
        'Depende del ambiente. Si conectamos, jugamos.',
        'El amigo de mi amigo es mi amigo. Hablo con calidez.',
      ],
    },
    q27: {
      text: 'En relaciones tengo una valla electronica: si te acercas demasiado, suena alarma.',
      options: ['De acuerdo', 'Neutral', 'No estoy de acuerdo'],
    },
    q28: {
      text: 'Deseo lazos muy cercanos con personas en quienes confio.',
      options: ['De acuerdo', 'Neutral', 'No estoy de acuerdo'],
    },
    q29: {
      text: 'A veces tienes una opinion negativa distinta, pero no la dices. Cual suele ser la razon?',
      options: [
        'Eso me pasa poco.',
        'Por contexto social o por la relacion.',
        'No quiero mostrar mi lado oscuro.',
      ],
    },
    q30: {
      text: 'Muestro versiones diferentes de mi mismo segun con quien este.',
      options: ['No estoy de acuerdo', 'Neutral', 'De acuerdo'],
    },
  },
};

export const SPECIAL_QUESTION_TRANSLATIONS = {
  en: {
    drink_gate_q1: {
      text: 'What are your usual hobbies?',
      options: ['Eating, drinking, basic survival', 'Arts and culture', 'Drinking alcohol', 'Fitness'],
    },
    drink_gate_q2: {
      text: 'What is your attitude toward drinking?',
      options: [
        'A small drink is fine. I cannot drink too much.',
        'I pour hard liquor into a thermos and drink it like water. Alcohol has my full respect.',
      ],
    },
  },
  es: {
    drink_gate_q1: {
      text: '¿A qué te dedicas para no morirte del asco?',
      options: ['Papear, pillar ciegos y sobrevivir', 'Hacerme el intelectual/artista', 'Darle al frasco', 'Matarme en el gym'],
    },
    drink_gate_q2: {
      text: '¿De qué palo vas con el alcohol?',
      options: [
        'Me tomo una copita y arreando. Si bebo más acabo potando.',
        'Meto orujo en el termo del café y palante. El alcohol manda.',
      ],
    },
  },
};

export const TYPE_TRANSLATIONS = {
  en: {
    CTRL: {
      name: 'Controller',
      intro: 'See? I got this under control.',
      desc: 'CTRL types are strategic operators who save chaos before it crashes. Rules are just baseline settings to them, and plans are active tools, not decorations. Having a CTRL nearby often feels like getting your life auto-saved at the last second.',
    },
    'ATM-er': {
      name: 'Payer',
      intro: 'You think I am rich?',
      desc: 'ATM-er does not always pay money, but almost always pays in time, patience, and emotional labor. They are reliable to a fault and keep everyone afloat while quietly draining themselves. Their generosity is heroic and exhausting at the same time.',
    },
    'Dior-s': {
      name: 'Underdog Realist',
      intro: 'Just wait for my comeback.',
      desc: 'Dior-s questions mainstream success myths and refuses to worship empty hustle. They are not lazy by default; they are skeptical of fake urgency and status theater. Their wisdom is practical: conserve energy, protect sanity, and eat when it is time to eat.',
    },
    BOSS: {
      name: 'Leader',
      intro: 'Give me the wheel. I will drive.',
      desc: 'BOSS types are natural direction-setters who thrive on structure and progress. They move fast, decide clearly, and push outcomes when others freeze. Around them, indecision usually has nowhere to hide.',
    },
    'THAN-K': {
      name: 'Grateful One',
      intro: 'I thank the sky and the earth.',
      desc: 'THAN-K reframes setbacks into meaning and keeps emotional weather warm. They carry unusual optimism and spread stability in tense rooms. Their superpower is turning bitterness into perspective without sounding fake.',
    },
    'OH-NO': {
      name: 'Alarmist Guardian',
      intro: 'Oh no... how did I get this type?',
      desc: 'OH-NO scans danger early and imagines chain reactions others miss. What sounds like overthinking is often preventive intelligence in action. They guard order by catching small risks before they become big disasters.',
    },
    GOGO: {
      name: 'Mover',
      intro: 'Go, go, go. Lets move.',
      desc: 'GOGO lives in action mode. While others debate, they execute. Their logic is simple: unfinished tasks create noise, finished tasks create freedom.',
    },
    SEXY: {
      name: 'Charmer',
      intro: 'You are naturally magnetic.',
      desc: 'SEXY types radiate attention without trying too hard. Presence, style, and emotional temperature all rise when they enter a room. They often influence people through vibe before words.',
    },
    'LOVE-R': {
      name: 'Romantic',
      intro: 'My love is too full for reality.',
      desc: 'LOVE-R feels deeply and reads ordinary moments as emotional epics. They seek soulful reciprocity, not shallow contact. Their vulnerability is intense, poetic, and sometimes painfully sincere.',
    },
    MUM: {
      name: 'Caregiver',
      intro: 'May I call you mom?',
      desc: 'MUM carries warmth, empathy, and healing instincts. They notice subtle emotional pain and naturally support others. Their challenge is remembering to give themselves the same tenderness they offer everyone else.',
    },
    FAKE: {
      name: 'Mask Switcher',
      intro: 'There are no humans left, only roles.',
      desc: 'FAKE adapts social personas with high precision. They can fit almost any context, but that flexibility may blur their inner core. Their life question is not how to perform, but where authenticity can safely stay.',
    },
    OJBK: {
      name: 'Whateverist',
      intro: 'When I say whatever, I really mean it.',
      desc: 'OJBK treats many conflicts as not worth the energy bill. They avoid unnecessary friction and keep emotional bandwidth for what truly matters. Their calm can look detached, but often it is disciplined selectivity.',
    },
    MALO: {
      name: 'Mischief Monkey',
      intro: 'Life is a game map and I am a monkey in it.',
      desc: 'MALO resists stiff social scripts and keeps playfulness alive. They bend rules creatively and inject unpredictability into rigid settings. Under the chaos is often a sharp instinct for freedom.',
    },
    'JOKE-R': {
      name: 'Clown',
      intro: 'Looks like we are all clowns.',
      desc: 'JOKE-R keeps the room alive with humor, especially under stress. Laughter is both performance and armor. They may look carefree outside while carrying heavy emotional weather inside.',
    },
    'WOC!': {
      name: 'WTF Reactor',
      intro: 'Whoa, how did I get this type?',
      desc: 'WOC! runs two systems: loud surface reactions and quiet internal analysis. They vent with dramatic expressions yet stay mentally sharp underneath. Their style is chaotic commentary over a disciplined core.',
    },
    'THIN-K': {
      name: 'Thinker',
      intro: 'Deep-thinking mode: 100 seconds and counting.',
      desc: 'THIN-K audits logic, bias, motives, and structure before accepting conclusions. They defend autonomy, value coherence, and dislike shallow narratives. Solitude for them is often active cognitive processing, not emptiness.',
    },
    SHIT: {
      name: 'Cynic',
      intro: 'This world is a mess.',
      desc: 'SHIT complains loudly, then quietly fixes what everyone else broke. Their frustration and responsibility coexist in paradox. Under the sarcasm sits a person who still shows up when things collapse.',
    },
    ZZZZ: {
      name: 'Playing Dead',
      intro: 'I am not dead, just sleeping.',
      desc: 'ZZZZ delays activation until urgency becomes undeniable. They appear absent, then suddenly deliver near deadline with surprising effectiveness. Their energy model is burst-based, not continuous.',
    },
    POOR: {
      name: 'Sparse-Focus Specialist',
      intro: 'I have little, but I focus hard.',
      desc: 'POOR is not about money; it is about radical allocation of attention. They ignore noise and pour resources into one meaningful track. What looks limited from outside is often concentrated force.',
    },
    MONK: {
      name: 'Monk',
      intro: 'I have no worldly cravings.',
      desc: 'MONK protects inner silence and personal boundaries with discipline. They value distance, rhythm, and independence over social fusion. Their peace is intentional architecture, not social incompetence.',
    },
    IMSB: {
      name: 'Overthinking Self-Doubter',
      intro: 'Wait... am I really that dumb?',
      desc: 'IMSB swings between bold impulse and brutal self-criticism. Their inner dialogue is dramatic, fast, and exhausting. They are not foolish; they are overloaded by self-awareness and fear of failure.',
    },
    SOLO: {
      name: 'Lone Soul',
      intro: 'How did I become this lonely type?',
      desc: 'SOLO keeps distance to avoid being hurt, then hurts from that same distance. Their boundaries can look cold, but often protect a sensitive core. Trust grows slowly, but once earned, it runs deep.',
    },
    FUCK: {
      name: 'Wild One',
      intro: 'What kind of type is this, damn?',
      desc: 'FUCK rejects tame scripts and runs on raw life force. They switch between full-on yes and absolute no with little gray zone. Their chaos carries authenticity that many polished personalities cannot fake.',
    },
    DEAD: {
      name: 'Numb Sage',
      intro: 'Am I even alive?',
      desc: 'DEAD has low appetite for superficial goals and performative ambition. They can seem detached, but often they are exhausted by noise and meaning inflation. Their stillness is a protest against compulsive hustle.',
    },
    IMFW: {
      name: 'Needy Believer',
      intro: 'Am I really this helpless?',
      desc: 'IMFW seeks stable attachment and clear emotional safety signals. They trust deeply once reassurance lands, but insecurity rises quickly without it. Their softness is real, and so is their fear of losing support.',
    },
    HHHH: {
      name: 'Chaotic Laugher',
      intro: 'Hahahahahaha.',
      desc: 'HHHH appears when your pattern does not fit standard type templates. It means your profile is highly mixed or unconventional. In short: your wiring is unusual, and the system had to laugh its way out.',
    },
    DRUNK: {
      name: 'Drunkard',
      intro: 'The burn in my throat is destiny.',
      desc: 'DRUNK is a hidden branch triggered by alcohol-heavy responses. It represents impulsive intensity, emotional amplification, and unstable self-control loops. The joke is loud, but the caution underneath is real.',
    },
  },
  es: {
    CTRL: {
      name: 'Control Freak',
      intro: '¿Ves? Todo atado y bien atado, máquina.',
      desc: 'El CTRL es el típico notas que te saca las castañas del fuego cuando la estás liando pardísima. Para él las normas son el suelo que pisa y los planes van a misa. Tener a uno cerca es como si la vida te hiciera autoguardado.',
    },
    'ATM-er': {
      name: 'El Paganini',
      intro: '¿Tengo cara de cajero o qué?',
      desc: 'El Paganini igual no te suelta pasta, pero se deja la vida aguantando tus chapas. Tiran del carro como campeones y se quedan secos por dentro. Son los típicos pringaos adorables.',
    },
    'Dior-s': {
      name: 'El Pringao Realista',
      intro: 'Tranqui, que ya resurgiré de mis cenizas.',
      desc: 'Pasa olímpicamente del rollo de ser un tiburón en los negocios y de sudar sangre por cuatro duros. No es un vago de mierda, es que se huele la tostada. Su lema es: ahorra batería, que no te rayen, y come cuando toque.',
    },
    BOSS: {
      name: 'El Putísimo Jefe',
      intro: 'Aparta, que conduzco yo.',
      desc: 'El BOSS lleva el mando en la sangre y le pone cachondo que las cosas salgan. Decide echando hostias y te espabila cuando estás empanao. Si estás dudando, mejor escóndete.',
    },
    'THAN-K': {
      name: 'El Buenazo',
      intro: 'Gracias a Dios, a la Virgen y al vecino del quinto.',
      desc: 'El Buenazo es capaz de verle el lado bueno a una patada en los huevos. Mantiene el buen rollo y quita hierro al asunto sin sonar como un falso asqueroso.',
    },
    'OH-NO': {
      name: 'El Agorero',
      intro: 'Madre mía de mi vida... ¿cómo he acabado así?',
      desc: 'El OH-NO huele la mierda a kilómetros. Lo que tú llamas ser un rayao, él lo llama instinto de supervivencia. Corta el rollo antes de que se monte un pollo de los gordos.',
    },
    GOGO: {
      name: 'El Culo Inquieto',
      intro: '¡Venga, coño, tira p\'alante!',
      desc: 'El GOGO no puede estar quieto. Mientras tú te lo piensas, él ya lo ha hecho. Su movida es: curro acabado, problema quitado.',
    },
    SEXY: {
      name: 'El Rompecorazones',
      intro: 'Pilas tú, que me sobra flow.',
      desc: 'El SEXY llega y sube el pan. Entra en un sitio y se queda con el personal. Sabe camelarte con la mirada antes de abrir la boca.',
    },
    'LOVE-R': {
      name: 'El Pagafantas Romántico',
      intro: 'Soy demasiado intenso pa\' este mundo.',
      desc: 'El LOVE-R vive en una puta telenovela turca. Busca amor de verdad, nada de rolletes de una noche. Se pringa tanto que a veces da cosica de lo sincero que es.',
    },
    MUM: {
      name: 'La Mama',
      intro: '¿Te has llevado una rebequita por si refresca?',
      desc: 'La MUM está pa\' cuidarte y curarte las heridas. Pilla al vuelo si estás jodido y te da mimos. Su gran cagada es que a ella misma ni agua.',
    },
    FAKE: {
      name: 'El Veleta / Bienqueda',
      intro: 'La peña ya no existe, solo hay postureo.',
      desc: 'El FAKE te hace un traje a medida según con quién esté. Se acopla a todo, pero se olvida de quién coño es en realidad. Su movida es buscar un rincón donde no tenga que fingir ser guay.',
    },
    OJBK: {
      name: 'El Pasota Máximo',
      intro: 'Cuando digo que me la suda, es que me la suda fuerte.',
      desc: 'El OJBK pasa de meterse en marrones si no hace falta. Se guarda la energía pa\' lo suyo. Parece un saborío, pero en el fondo es que no quiere que le calienten la cabeza.',
    },
    MALO: {
      name: 'El Troll',
      intro: 'La vida es una broma y yo he venido a reírme.',
      desc: 'El MALO se pasa por el forro el manual del buen ciudadano. Le da la vuelta a la tortilla para liarla parda donde todo el mundo es un sieso. Debajo de tanto troleo hay ganas de hacer lo que le da la gana.',
    },
    'JOKE-R': {
      name: 'El Payasete',
      intro: 'Míranos, si es que somos un chiste malo.',
      desc: 'El JOKE-R te salva la papeleta a base de chistes cuando la cosa se pone fea. Se ríe para que no le jodan. Por fuera jiji jaja, pero por dentro igual lleva un cacao mental curioso.',
    },
    'WOC!': {
      name: 'El Flipao',
      intro: '¡Hostia puta! ¿Esto qué es?',
      desc: 'El WOC! va a dos motores: monta pollos increíbles en público, pero por dentro te está haciendo una radiografía. Es un caos de boquilla, pero con el coco bien frío.',
    },
    'THIN-K': {
      name: 'El Comeduras de Tarro',
      intro: 'Deja que procese esto un rato...',
      desc: 'El THIN-K te audita hasta el DNI antes de creerte. Pasa del postureo y de las historias de Disney. Estar solo no le amarga, le mola pa\' darle al coco.',
    },
    SHIT: {
      name: 'El Hater',
      intro: 'Este mundo es una puta basura.',
      desc: 'El SHIT despotrica que da gusto, pero luego es el tonto que va y lo arregla todo. Está amargao, sí, pero responsable como él solo. Si te vas a la mierda, él se tira contigo (quejándose, claro).',
    },
    ZZZZ: {
      name: 'El Empanao',
      intro: 'No la he espichao, solo estoy sobando.',
      desc: 'El ZZZZ no mueve el culo hasta que no le ve las orejas al lobo. Parece que está en la parra, y a última hora te hace el curro niquelao. No va a pilas, va a tirones.',
    },
    POOR: {
      name: 'El Autista Selectivo',
      intro: 'Tengo poco, pero te reviento.',
      desc: 'El POOR no es que esté tieso de pasta, es que no te hace ni puto caso. Pasa de tonterías y mete toda la carne en el asador para lo suyo. Parece que no da de sí, pero tela.',
    },
    MONK: {
      name: 'El Monje',
      intro: 'Paso olímpicamente de todo.',
      desc: 'El MONK se monta un muro alrededor para que no le den por culo. Prefiere ir a su rollo que estar ahí pegao a la peña. No es que sea un rancio asocial, es que prefiere la paz.',
    },
    IMSB: {
      name: 'El Rayao Autocrítico',
      intro: 'Joder... ¿de verdad soy tan subnormal?',
      desc: 'El IMSB te hace una locura y al segundo se está machacando vivo. Tiene una voz en la cabeza que no calla ni debajo del agua. No es gilipollas, es que le da miedo cagarla a niveles enfermizos.',
    },
    SOLO: {
      name: 'El Lobo Solitario',
      intro: '¿Cuándo me volví tan putamente autista?',
      desc: 'El SOLO pasa de la peña pa\' no llevarse palos, pero le jode estar solo. Va de durito pero es un blandengue. Le cuesta fiarse, pero si te pilla cariño te lo da todo.',
    },
    FUCK: {
      name: 'El Fiera',
      intro: '¿Qué cojones de rollo es este?',
      desc: 'El FUCK pasa de guiones y va por libre, a lo loco. O te quiere o te manda a la mierda, sin medias tintas. Es tan puro que la peña con postureo se caga al verlo.',
    },
    DEAD: {
      name: 'El Muerto en Vida',
      intro: '¿De verdad estoy respirando?',
      desc: 'El DEAD suda de los exitazos y de hacerse el guay. Parece que está en su mundo, pero es que la peña le cansa tela. Su pasotismo es una peineta al estrés de hoy en día.',
    },
    IMFW: {
      name: 'El Lapa',
      intro: '¿En serio doy tanta pena?',
      desc: 'El IMFW busca mimos como el comer. Se agarra a ti si le das confianza, pero si no le haces caso se ralla mil. No es teatro, de verdad le acojona quedarse solo.',
    },
    HHHH: {
      name: 'El Roto',
      intro: 'Me meo to\'a.',
      desc: 'El HHHH es el cajón de sastre de los que no cuadran ni a hostias. Tu cabeza es un puto puzle, así que el sistema se ha partío la caja y te ha dao esto.',
    },
    DRUNK: {
      name: 'El Borrachuzo',
      intro: 'Ese calorcito en la garganta manda.',
      desc: 'El DRUNK te sale si solo piensas en pillar un ciego. Eres impulsivo, te flipas con todo y vas sin frenos. Esto es un descojone, pero ten cuidadín, colega.',
    },
  },
};

export const DIMENSION_META_TRANSLATIONS = {
  en: {
    S1: { name: 'S1 Self-Esteem Confidence', model: 'Self Model' },
    S2: { name: 'S2 Self-Clarity', model: 'Self Model' },
    S3: { name: 'S3 Core Values', model: 'Self Model' },
    E1: { name: 'E1 Attachment Security', model: 'Emotion Model' },
    E2: { name: 'E2 Emotional Investment', model: 'Emotion Model' },
    E3: { name: 'E3 Boundary and Dependence', model: 'Emotion Model' },
    A1: { name: 'A1 Worldview Tendency', model: 'Attitude Model' },
    A2: { name: 'A2 Rule vs Flexibility', model: 'Attitude Model' },
    A3: { name: 'A3 Sense of Meaning', model: 'Attitude Model' },
    Ac1: { name: 'Ac1 Motivation Direction', model: 'Action Drive Model' },
    Ac2: { name: 'Ac2 Decision Style', model: 'Action Drive Model' },
    Ac3: { name: 'Ac3 Execution Pattern', model: 'Action Drive Model' },
    So1: { name: 'So1 Social Initiative', model: 'Social Model' },
    So2: { name: 'So2 Interpersonal Boundary', model: 'Social Model' },
    So3: { name: 'So3 Expression and Authenticity', model: 'Social Model' },
  },
  es: {
    S1: { name: 'S1 Autoestima y Confianza', model: 'Modelo del Yo' },
    S2: { name: 'S2 Claridad del Yo', model: 'Modelo del Yo' },
    S3: { name: 'S3 Valores Centrales', model: 'Modelo del Yo' },
    E1: { name: 'E1 Seguridad de Apego', model: 'Modelo Emocional' },
    E2: { name: 'E2 Inversion Emocional', model: 'Modelo Emocional' },
    E3: { name: 'E3 Limites y Dependencia', model: 'Modelo Emocional' },
    A1: { name: 'A1 Tendencia de Vision del Mundo', model: 'Modelo de Actitud' },
    A2: { name: 'A2 Regla y Flexibilidad', model: 'Modelo de Actitud' },
    A3: { name: 'A3 Sentido de la Vida', model: 'Modelo de Actitud' },
    Ac1: { name: 'Ac1 Direccion de Motivacion', model: 'Modelo de Accion' },
    Ac2: { name: 'Ac2 Estilo de Decision', model: 'Modelo de Accion' },
    Ac3: { name: 'Ac3 Patron de Ejecucion', model: 'Modelo de Accion' },
    So1: { name: 'So1 Iniciativa Social', model: 'Modelo Social' },
    So2: { name: 'So2 Limite Interpersonal', model: 'Modelo Social' },
    So3: { name: 'So3 Expresion y Autenticidad', model: 'Modelo Social' },
  },
};

export const DIM_EXPLANATION_TRANSLATIONS = {
  en: {
    S1: {
      L: 'You criticize yourself faster than others can.',
      M: 'Confidence changes with context and mood.',
      H: 'You keep a stable internal sense of worth.',
    },
    S2: {
      L: 'Your sense of self often feels blurry or noisy.',
      M: 'You mostly know yourself, with occasional drift.',
      H: 'You understand your motives, limits, and patterns clearly.',
    },
    S3: {
      L: 'Comfort and safety usually rank above ambition.',
      M: 'You balance growth urges with rest impulses.',
      H: 'Goals and values strongly pull you forward.',
    },
    E1: {
      L: 'Relationship alarms trigger quickly in your mind.',
      M: 'You alternate between trust and suspicion.',
      H: 'You stay relatively secure when uncertainty appears.',
    },
    E2: {
      L: 'You invest emotionally with strong caution.',
      M: 'You care, but still keep a safety margin.',
      H: 'Once committed, you give deep emotional energy.',
    },
    E3: {
      L: 'Closeness and mutual dependence feel natural.',
      M: 'You seek both intimacy and independence.',
      H: 'Personal space remains essential even in love.',
    },
    A1: {
      L: 'You approach people with defensive skepticism first.',
      M: 'You stay observant, neither naive nor paranoid.',
      H: 'You are generally inclined to trust human goodwill.',
    },
    A2: {
      L: 'You prefer freedom over rigid compliance.',
      M: 'You can follow rules and adapt when needed.',
      H: 'Order and process feel naturally comfortable to you.',
    },
    A3: {
      L: 'Life meaning often feels thin or unstable.',
      M: 'Meaning appears in phases, not continuously.',
      H: 'You act with clearer direction and purpose.',
    },
    Ac1: {
      L: 'Risk avoidance activates before achievement drive.',
      M: 'You balance growth desire with risk control.',
      H: 'Progress and outcomes strongly energize you.',
    },
    Ac2: {
      L: 'Decision loops can run longer than needed.',
      M: 'You think before acting without freezing too long.',
      H: 'You decide quickly and move forward decisively.',
    },
    Ac3: {
      L: 'Deadlines are your strongest execution trigger.',
      M: 'Execution quality varies with timing and context.',
      H: 'You naturally push tasks toward completion.',
    },
    So1: {
      L: 'Social initiation starts slowly and cautiously.',
      M: 'You engage flexibly depending on people and mood.',
      H: 'You proactively open conversations and social flow.',
    },
    So2: {
      L: 'You lean toward closeness and emotional fusion.',
      M: 'You adjust boundaries depending on trust.',
      H: 'You maintain stronger interpersonal boundaries.',
    },
    So3: {
      L: 'You tend to speak directly and plainly.',
      M: 'You balance honesty with situational tact.',
      H: 'You skillfully switch expression across contexts.',
    },
  },
  es: {
    S1: {
      L: 'Te criticas antes de que otros lo hagan.',
      M: 'Tu confianza cambia segun contexto y estado.',
      H: 'Mantienes una base interna de valor bastante estable.',
    },
    S2: {
      L: 'Tu sentido de identidad suele sentirse difuso.',
      M: 'Generalmente te conoces, con desajustes puntuales.',
      H: 'Entiendes bien tus motivos, limites y patrones.',
    },
    S3: {
      L: 'Comodidad y seguridad pesan mas que ambicion.',
      M: 'Alternas entre impulso de crecer y ganas de pausar.',
      H: 'Metas y valores te empujan con fuerza.',
    },
    E1: {
      L: 'Tus alarmas afectivas saltan con facilidad.',
      M: 'Oscilas entre confiar y sospechar.',
      H: 'Mantienes seguridad incluso con incertidumbre.',
    },
    E2: {
      L: 'Inviertes emociones con mucha cautela.',
      M: 'Te implicas, pero guardas margen de seguridad.',
      H: 'Cuando te comprometes, entregas mucho.',
    },
    E3: {
      L: 'La cercania intensa te resulta natural.',
      M: 'Buscas equilibrio entre union e independencia.',
      H: 'Tu espacio personal sigue siendo esencial.',
    },
    A1: {
      L: 'Sueles empezar desde la desconfianza defensiva.',
      M: 'Observas sin caer en ingenuidad ni paranoia.',
      H: 'Tiendes a confiar en la buena fe humana.',
    },
    A2: {
      L: 'Prefieres libertad sobre reglas rigidas.',
      M: 'Cumples cuando toca y flexibilizas cuando conviene.',
      H: 'El orden y el proceso te resultan naturales.',
    },
    A3: {
      L: 'El sentido de vida suele sentirse debil o inestable.',
      M: 'El sentido aparece por etapas.',
      H: 'Actuas con direccion y proposito mas claros.',
    },
    Ac1: {
      L: 'Evitar riesgos pesa mas que perseguir logros.',
      M: 'Equilibras avance con proteccion.',
      H: 'Te impulsa claramente el progreso.',
    },
    Ac2: {
      L: 'Tu ciclo de decision puede alargarse demasiado.',
      M: 'Piensas antes de actuar sin bloquearte.',
      H: 'Decides rapido y avanzas con firmeza.',
    },
    Ac3: {
      L: 'Tu ejecucion despega sobre todo con fecha limite.',
      M: 'Tu ritmo de ejecucion varia por contexto.',
      H: 'Tiendes a llevar tareas a cierre de forma natural.',
    },
    So1: {
      L: 'Te cuesta iniciar interacciones rapido.',
      M: 'Te adaptas segun persona y ambiente.',
      H: 'Sueles abrir conversaciones con iniciativa.',
    },
    So2: {
      L: 'Tiendes a buscar mayor fusion emocional.',
      M: 'Ajustas limites segun confianza.',
      H: 'Mantienes limites interpersonales mas firmes.',
    },
    So3: {
      L: 'Sueles expresarte de forma directa.',
      M: 'Combinas honestidad con tacto social.',
      H: 'Cambias bien tu estilo segun el contexto.',
    },
  },
};

function localizeQuestions(base, translationMap) {
  return base.map((q) => {
    const t = translationMap[q.id];
    if (!t) return q;
    return {
      ...q,
      text: t.text,
      options: q.options.map((opt, idx) => ({
        ...opt,
        label: t.options[idx] ?? opt.label,
      })),
    };
  });
}

function localizeSpecialQuestions(base, translationMap) {
  return base.map((q) => {
    const t = translationMap[q.id];
    if (!t) return q;
    return {
      ...q,
      text: t.text,
      options: q.options.map((opt, idx) => ({
        ...opt,
        label: t.options[idx] ?? opt.label,
      })),
    };
  });
}

function localizeTypeLibrary(base, translationMap) {
  const out = {};
  for (const [code, value] of Object.entries(base)) {
    const t = translationMap[code] || {};
    out[code] = {
      code,
      cn: t.name || value.cn,
      intro: t.intro || value.intro,
      desc: t.desc || value.desc,
    };
  }
  return out;
}

function localizeDimensionMeta(base, translationMap) {
  const out = {};
  for (const [dim, value] of Object.entries(base)) {
    const t = translationMap[dim] || {};
    out[dim] = {
      name: t.name || value.name,
      model: t.model || value.model,
    };
  }
  return out;
}

function localizeDimExplanations(base, translationMap) {
  const out = {};
  for (const [dim, value] of Object.entries(base)) {
    const t = translationMap[dim] || {};
    out[dim] = {
      L: t.L || value.L,
      M: t.M || value.M,
      H: t.H || value.H,
    };
  }
  return out;
}

export const QUESTION_SETS = {
  'zh-CN': QUESTIONS_ZH,
  en: localizeQuestions(QUESTIONS_ZH, QUESTION_TRANSLATIONS.en),
  es: localizeQuestions(QUESTIONS_ZH, QUESTION_TRANSLATIONS.es),
};

export const SPECIAL_QUESTION_SETS = {
  'zh-CN': SPECIAL_QUESTIONS_ZH,
  en: localizeSpecialQuestions(SPECIAL_QUESTIONS_ZH, SPECIAL_QUESTION_TRANSLATIONS.en),
  es: localizeSpecialQuestions(SPECIAL_QUESTIONS_ZH, SPECIAL_QUESTION_TRANSLATIONS.es),
};

export const TYPE_LIBRARY_I18N = {
  'zh-CN': TYPE_LIBRARY_ZH,
  en: localizeTypeLibrary(TYPE_LIBRARY_ZH, TYPE_TRANSLATIONS.en),
  es: localizeTypeLibrary(TYPE_LIBRARY_ZH, TYPE_TRANSLATIONS.es),
};

export const DIMENSION_META_I18N = {
  'zh-CN': DIMENSION_META_ZH,
  en: localizeDimensionMeta(DIMENSION_META_ZH, DIMENSION_META_TRANSLATIONS.en),
  es: localizeDimensionMeta(DIMENSION_META_ZH, DIMENSION_META_TRANSLATIONS.es),
};

export const DIM_EXPLANATIONS_I18N = {
  'zh-CN': DIM_EXPLANATIONS_ZH,
  en: localizeDimExplanations(DIM_EXPLANATIONS_ZH, DIM_EXPLANATION_TRANSLATIONS.en),
  es: localizeDimExplanations(DIM_EXPLANATIONS_ZH, DIM_EXPLANATION_TRANSLATIONS.es),
};
