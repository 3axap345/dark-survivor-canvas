'use strict';
// ============================================================
//  i18n — LOCALIZATION
// ============================================================
let LANG='ru'; // default, overridden by SDK

const STRINGS={
ru:{
    rotateDevice:'Переверните устройство',
    rotateHint:'Игра работает только в горизонтальном режиме',
    loading:'Загрузка...',
    // Characters
    charKnight:'Рыцарь', charKnightDesc:'Несокрушимый страж. Высокое здоровье и щит.',
    charMage:'Маг', charMageDesc:'Властелин магии. Быстрая атака и мощные заклинания.',
    charRogue:'Разбойник', charRogueDesc:'Быстрый и смертоносный. Высокий крит и скорость.',
    charNecro:'Некромант', charNecroDesc:'Повелитель смерти. Регенерация и темная магия.',
    // Char select
    charSelectTitle:'⚔  ВЫБОР ПЕРСОНАЖА  ⚔',
    charSelectSub:'Выберите своего героя',
    statLabels:['HP','Скор','Урон','Атака'],
    playAs:'Играть за',
    selected:'▼ ВЫБРАН ▼',
    charHintMobile:'Нажми карту — выбрать  |  Кнопку ниже — играть',
    charHintDesktop:'[←→] — выбрать  |  [Enter] — играть  |  [Esc] — назад',
    // Menu
    startGame:'⚔  Начать игру  [Enter]',
    upgrades:'💎 Улучшения  [M]',
    records:'🏆 Рекорды  [L]',
    controlsMobile:'Джойстик — движение  |  Кнопка — рывок',
    controlsDesktop:'WASD — движение  |  Space — рывок  |  P — пауза  |  M — звук',
    achievements:'Достижения',
    // Meta shop
    permUpgrades:'✦ Постоянные улучшения ✦',
    crystals:'кристаллов',
    level:'Уровень',
    maxLabel:'МАКС.',
    achievementsLabel:'Достижения',
    metaHintMobile:'Нажми карту — купить  |  Нажми внизу — назад',
    metaHintDesktop:'[Esc] — назад  |  Клик — купить улучшение',
    // Meta upgrades
    metaDmg:'+5% Урон', metaXp:'+10% XP', metaHp:'+10 HP', metaSpd:'+3% Скорость',
    // Leaderboard
    leaderboardTitle:'🏆 Таблица рекордов',
    yaTopPlayers:'🕹 ЯНДЕКС ИГРЫ — Топ игроков',
    lbPlayer:'Игрок', lbTime:'Время', lbRank:'Ранг',
    anon:'Анон',
    updatesAfterGame:'* обновляется после каждой игры',
    localRecords:'— Локальные рекорды —',
    noResults:'Нет результатов',
    lbBack:'[Esc] или [L] — назад',
    // Revive
    reviveTitle:'♻ ВОСКРЕШЕНИЕ?',
    reviveHint:'Посмотри рекламу и продолжи игру',
    watchAd:'▶  Смотреть рекламу',
    skipRevive:'✕  Пропустить — закончить игру',
    adYandexOnly:'Реклама доступна только в Яндекс Играх',
    revived:'♻ ВОСКРЕШЕНИЕ!',
    // Game over
    gameOver:'КОНЕЦ ИГРЫ',
    heroFell:'— Герой пал во тьме —',
    time:'Время', levelLabel:'Уровень', killed:'Убито врагов', chapter:'Глава',
    crystalsEarned:'кристаллов за этот забег',
    newRecord:'🏆 НОВЫЙ РЕКОРД!', prevRecord:'прошлый',
    best:'Лучшее', killRecord:'Рекорд убийств',
    weapons:'Оружия',
    toMenu:'↩  В меню  [Enter]',
    // Pause
    pauseTitle:'✦ ПАУЗА ✦',
    pauseHintMobile:'Нажмите на экран чтобы продолжить',
    pauseHintDesktop:'[P] — продолжить  |  [M] — звук  |  [Esc] — меню',
    statDmg:'⚔ Урон', statPierce:'🛡 Пробивание', statAtkSpd:'⚡ Скорость атаки',
    statCrit:'💥 Шанс крита', statRange:'🎯 Дальность', statCritDmg:'🔥 Крит. урон',
    statSpeed:'👟 Скорость', statPickup:'🧲 Радиус сбора',
    statHpLabel:'❤ HP', statShield:'🛡 Щит', statXpMult:'📚 Множитель XP', statRegen:'💚 Реген',
    perSec:'/сек',
    activeWeapons:'Активные оружия',
    thisRun:'Этого забега',
    soundOff:'🔇 Звук выключен [M]', soundOn:'🔊 Звук включён [M]',
    // Upgrade screen
    upgradeTitle:'Выбери усиление',
    legendaryChest:'✦ ЛЕГЕНДАРНЫЙ СУНДУК — Двойная награда ✦',
    upgradeHintMobile:'Нажми на карту', upgradeHintDesktop:'Нажми 1–3 или кликни',
    // HUD
    dash:'Рывок', enemies:'Враги', wave:'Волна',
    // Chapters
    ch0:'Проклятые поля', ch1:'Разрушенный собор', ch2:'Склеп Некроманта', ch3:'Разрыв Ада',
    // Events
    evBloodMoon:'🌑 Кровавая луна', evBloodMoonDesc:'Враги быстрее, ×2 XP',
    evDemonWave:'👹 Нашествие демонов', evDemonWaveDesc:'Волна элитных врагов',
    evFrozenTime:'❄ Замёрзшее время', evFrozenTimeDesc:'Враги замедлены 20 сек',
    evDarkStorm:'⚡ Тёмная буря', evDarkStormDesc:'Молнии поражают врагов',
    evCursedGround:'☠ Проклятая земля', evCursedGroundDesc:'Яд на земле, но ×1.5 XP',
    // Achievements
    achK100:'Сотня', achK100d:'Убить 100 врагов',
    achK1000:'Тысяча', achK1000d:'Убить 1000 врагов',
    achK5000:'Резня', achK5000d:'Убить 5000 врагов',
    achS5:'Стойкий', achS5d:'Выжить 5 минут',
    achS10:'Несгибаемый', achS10d:'Выжить 10 минут',
    achS15:'Бессмертный', achS15d:'Выжить 15 минут',
    achLv10:'Ученик', achLv10d:'Достичь 10 уровня',
    achLv20:'Мастер', achLv20d:'Достичь 20 уровня',
    achB1:'Убийца боссов', achB1d:'Убить первого босса',
    achB5:'Истребитель', achB5d:'Убить 5 боссов',
    achG10:'Ветеран', achG10d:'Сыграть 10 партий',
    achC100:'Коллектор', achC100d:'Собрать 100 кристаллов',
    achLv30:'Легенда', achLv30d:'Достичь 30 уровня',
    achS20:'Вечный', achS20d:'Выжить 20 минут',
    // Upgrades
    upDmg20:'+20% Урон', upDmg20d:'Увеличивает урон на 20%',
    upAtkSpd:'+15% Скорость атаки', upAtkSpdd:'Стреляет быстрее',
    upCrit:'+5% Шанс крита', upCritd:'Увеличивает шанс крита',
    upCritDmg:'+25% Крит. урон', upCritDmgd:'Урон от критических ударов',
    upPierce:'+1 Пробивание', upPierced:'Снаряды пробивают +1 врага',
    upProj:'+1 Снаряд', upProjd:'Дополнительный снаряд Magic Bolt',
    upHp:'+20 Макс. HP', upHpd:'Увеличивает максимальное здоровье',
    upRegen:'+1 Регенерация', upRegend:'Восстановление 1 HP в секунду',
    upShield10:'+10 Щит', upShield10d:'Добавляет магический щит',
    upHeal:'Восстановление', upHeald:'Восстановить 40 HP сейчас',
    upSpd10:'+10% Скорость', upSpd10d:'Герой двигается быстрее',
    upXp:'+15% XP бонус', upXpd:'Получаете больше опыта',
    upRange:'+20% Дальность', upRanged:'Увеличивает дальность атаки',
    upSlow:'Замедление', upSlowd:'Замедляет ближайших врагов',
    upProjDmg:'+10% Урон снарядов', upProjDmgd:'Снаряды наносят больше урона',
    upDash:'Двойной рывок', upDashd:'Кулдаун рывка уменьшен на 25%',
    upShield15:'+15 Щит', upShield15d:'Большой магический щит',
    upProjSpd:'+25% Скорость снарядов', upProjSpdd:'Снаряды летят быстрее',
    // Weapon descs
    wdFireOrb:'Огненные сферы вращаются вокруг', wdLightning:'Молния прыгает между врагами',
    wdIce:'Замораживающие осколки', wdBoomerang:'Клинок возвращается и пробивает',
    wdPoison:'Облако яда на позиции врага', wdShadow:'Тёмные клинки вращаются вокруг',
    wdBloodNova:'Взрыв крови вокруг героя', wdVoidRift:'Гравитационный вихрь',
    wdSoulDrain:'Луч жизни: урон + лечение 30%', wdMine:'Руническая мина взрывается при враге',
    // Objects
    chest:'Сундук!', darkPower:'⚔ Сила тьмы! ×1.5',
    hpRegen:'HP + Реген', bonePierce:'Пробивание',
    // Bosses
    bossHugeDemon:'Огромный Демон', bossNecro:'Некромант', bossDarkKnight:'Тёмный Рыцарь',
    // In-game events
    newChapter:'◈ НОВАЯ ГЛАВА ◈',
    rageAltar:'🔥 ЯРОСТЬ ×2 урон!',
    miniBoss:'⚔ МИНИ-БОСС!',
    boss:'💀 БОСС!',
    bossRage:'😡 ЯРОСТЬ!',
    // Weapon names
    wnMagicBolt:'Магический Снаряд',
    wnFireOrb:'Огненная Сфера',
    wnLightningChain:'Цепная Молния',
    wnIceShard:'Ледяной Осколок',
    wnBoomerangBlade:'Бумеранг-Клинок',
    wnPoisonCloud:'Ядовитое Облако',
    wnShadowBlades:'Теневые Клинки',
    wnBloodNova:'Кровавая Вспышка',
    wnVoidRift:'Разрыв Пустоты',
    wnSoulDrain:'Высасывание Души',
    wnArcaneMine:'Магическая Мина',
    // Evolutions
    evoArcaneStorm:'EVO: Шторм Арканы!',
    evoInfernoRing:'EVO: Кольцо Инферно!',
    evoThunderStorm:'EVO: Гром-Буря!',
    evoVoidSing:'EVO: Сингулярность Пустоты!',
    // Combat text
    streakMassacre:'💀 РЕЗНЯ!',
    streakRampage:'⚡ БУЙСТВО!',
    streakUnstoppable:'🔥 НЕОСТАНОВИМ!',
    streakKillSpree:'✨ УБИЙЦА!',
    streakMultiKill:'◈ МУЛЬТИ-КИЛЛ!',
    comboLabel:'✦ КОМБО',
    critLabel:'КРИТ',
    // Upgrade card categories
    catAtk:'⚔ АТАКА', catDef:'🛡 ЗАЩИТА', catWeapon:'⚡ ОРУЖИЕ', catUtil:'✦ УТИЛИТА',
    passive:'пассивное',
    // Rarity labels
    rarityRare:'◈ РЕДКИЙ',rarityLegendary:'✦ ЛЕГЕНДАРНЫЙ ✦',
    // Chapter subtitles
    ch0sub:'Проклятые поля',ch1sub:'Разрушенный собор',ch2sub:'Склеп Некроманта',ch3sub:'Разрыв Ада',
},
en:{
    rotateDevice:'Rotate your device',
    rotateHint:'This game works in landscape mode only',
    loading:'Loading...',
    charKnight:'Knight', charKnightDesc:'Indestructible guardian. High health and shield.',
    charMage:'Mage', charMageDesc:'Master of magic. Fast attacks and powerful spells.',
    charRogue:'Rogue', charRogueDesc:'Fast and deadly. High crit and speed.',
    charNecro:'Necromancer', charNecroDesc:'Lord of death. Regeneration and dark magic.',
    charSelectTitle:'⚔  CHARACTER SELECT  ⚔',
    charSelectSub:'Choose your hero',
    statLabels:['HP','Spd','Dmg','Atk'],
    playAs:'Play as',
    selected:'▼ SELECTED ▼',
    charHintMobile:'Tap card — select  |  Button below — play',
    charHintDesktop:'[←→] — select  |  [Enter] — play  |  [Esc] — back',
    startGame:'⚔  Start Game  [Enter]',
    upgrades:'💎 Upgrades  [M]',
    records:'🏆 Records  [L]',
    controlsMobile:'Joystick — move  |  Button — dash',
    controlsDesktop:'WASD — move  |  Space — dash  |  P — pause  |  M — sound',
    achievements:'Achievements',
    permUpgrades:'✦ Permanent Upgrades ✦',
    crystals:'crystals',
    level:'Level',
    maxLabel:'MAX',
    achievementsLabel:'Achievements',
    metaHintMobile:'Tap card — buy  |  Tap bottom — back',
    metaHintDesktop:'[Esc] — back  |  Click — buy upgrade',
    metaDmg:'+5% Damage', metaXp:'+10% XP', metaHp:'+10 HP', metaSpd:'+3% Speed',
    leaderboardTitle:'🏆 Leaderboard',
    yaTopPlayers:'🕹 YANDEX GAMES — Top Players',
    lbPlayer:'Player', lbTime:'Time', lbRank:'Rank',
    anon:'Anon',
    updatesAfterGame:'* updates after each game',
    localRecords:'— Local Records —',
    noResults:'No results',
    lbBack:'[Esc] or [L] — back',
    reviveTitle:'♻ REVIVE?',
    reviveHint:'Watch an ad and continue playing',
    watchAd:'▶  Watch Ad',
    skipRevive:'✕  Skip — end game',
    adYandexOnly:'Ads available only on Yandex Games',
    revived:'♻ REVIVED!',
    gameOver:'GAME OVER',
    heroFell:'— The hero fell in darkness —',
    time:'Time', levelLabel:'Level', killed:'Enemies killed', chapter:'Chapter',
    crystalsEarned:'crystals this run',
    newRecord:'🏆 NEW RECORD!', prevRecord:'previous',
    best:'Best', killRecord:'Kill record',
    weapons:'Weapons',
    toMenu:'↩  Menu  [Enter]',
    pauseTitle:'✦ PAUSED ✦',
    pauseHintMobile:'Tap screen to continue',
    pauseHintDesktop:'[P] — resume  |  [M] — sound  |  [Esc] — menu',
    statDmg:'⚔ Damage', statPierce:'🛡 Pierce', statAtkSpd:'⚡ Attack Speed',
    statCrit:'💥 Crit Chance', statRange:'🎯 Range', statCritDmg:'🔥 Crit Damage',
    statSpeed:'👟 Speed', statPickup:'🧲 Pickup Range',
    statHpLabel:'❤ HP', statShield:'🛡 Shield', statXpMult:'📚 XP Multiplier', statRegen:'💚 Regen',
    perSec:'/sec',
    activeWeapons:'Active weapons',
    thisRun:'This run',
    soundOff:'🔇 Sound off [M]', soundOn:'🔊 Sound on [M]',
    upgradeTitle:'Choose upgrade',
    legendaryChest:'✦ LEGENDARY CHEST — Double reward ✦',
    upgradeHintMobile:'Tap a card', upgradeHintDesktop:'Press 1–3 or click',
    dash:'Dash', enemies:'Enemies', wave:'Wave',
    ch0:'Cursed Fields', ch1:'Ruined Cathedral', ch2:'Necromancer Crypt', ch3:'Hell Rift',
    evBloodMoon:'🌑 Blood Moon', evBloodMoonDesc:'Enemies faster, ×2 XP',
    evDemonWave:'👹 Demon Invasion', evDemonWaveDesc:'Wave of elite enemies',
    evFrozenTime:'❄ Frozen Time', evFrozenTimeDesc:'Enemies slowed 20 sec',
    evDarkStorm:'⚡ Dark Storm', evDarkStormDesc:'Lightning strikes enemies',
    evCursedGround:'☠ Cursed Ground', evCursedGroundDesc:'Poison ground, but ×1.5 XP',
    achK100:'Hundred', achK100d:'Kill 100 enemies',
    achK1000:'Thousand', achK1000d:'Kill 1000 enemies',
    achK5000:'Massacre', achK5000d:'Kill 5000 enemies',
    achS5:'Resilient', achS5d:'Survive 5 minutes',
    achS10:'Unyielding', achS10d:'Survive 10 minutes',
    achS15:'Immortal', achS15d:'Survive 15 minutes',
    achLv10:'Apprentice', achLv10d:'Reach level 10',
    achLv20:'Master', achLv20d:'Reach level 20',
    achB1:'Boss Slayer', achB1d:'Kill first boss',
    achB5:'Exterminator', achB5d:'Kill 5 bosses',
    achG10:'Veteran', achG10d:'Play 10 games',
    achC100:'Collector', achC100d:'Collect 100 crystals',
    achLv30:'Legend', achLv30d:'Reach level 30',
    achS20:'Eternal', achS20d:'Survive 20 minutes',
    upDmg20:'+20% Damage', upDmg20d:'Increases damage by 20%',
    upAtkSpd:'+15% Attack Speed', upAtkSpdd:'Attacks faster',
    upCrit:'+5% Crit Chance', upCritd:'Increases crit chance',
    upCritDmg:'+25% Crit Damage', upCritDmgd:'Critical hit damage',
    upPierce:'+1 Pierce', upPierced:'Projectiles pierce +1 enemy',
    upProj:'+1 Projectile', upProjd:'Extra Magic Bolt projectile',
    upHp:'+20 Max HP', upHpd:'Increases max health',
    upRegen:'+1 Regen', upRegend:'Restore 1 HP per second',
    upShield10:'+10 Shield', upShield10d:'Adds magic shield',
    upHeal:'Heal', upHeald:'Restore 40 HP now',
    upSpd10:'+10% Speed', upSpd10d:'Hero moves faster',
    upXp:'+15% XP Bonus', upXpd:'Gain more experience',
    upRange:'+20% Range', upRanged:'Increases attack range',
    upSlow:'Slow Aura', upSlowd:'Slows nearby enemies',
    upProjDmg:'+10% Projectile Damage', upProjDmgd:'Projectiles deal more damage',
    upDash:'Double Dash', upDashd:'Dash cooldown reduced by 25%',
    upShield15:'+15 Shield', upShield15d:'Large magic shield',
    upProjSpd:'+25% Projectile Speed', upProjSpdd:'Projectiles fly faster',
    wdFireOrb:'Fire orbs orbit around you', wdLightning:'Lightning chains between enemies',
    wdIce:'Freezing shards', wdBoomerang:'Blade returns and pierces',
    wdPoison:'Poison cloud on enemy position', wdShadow:'Dark blades orbit around you',
    wdBloodNova:'Blood explosion around hero', wdVoidRift:'Gravitational vortex',
    wdSoulDrain:'Life beam: damage + 30% heal', wdMine:'Runic mine explodes near enemy',
    chest:'Chest!', darkPower:'⚔ Dark Power! ×1.5',
    hpRegen:'HP + Regen', bonePierce:'Pierce',
    bossHugeDemon:'Huge Demon', bossNecro:'Necromancer', bossDarkKnight:'Dark Knight',
    // In-game events
    newChapter:'◈ NEW CHAPTER ◈',
    rageAltar:'🔥 RAGE ×2 damage!',
    miniBoss:'⚔ MINI-BOSS!',
    boss:'💀 BOSS!',
    bossRage:'😡 ENRAGED!',
    // Weapon names
    wnMagicBolt:'Magic Bolt',
    wnFireOrb:'Fire Orb',
    wnLightningChain:'Lightning Chain',
    wnIceShard:'Ice Shard',
    wnBoomerangBlade:'Boomerang Blade',
    wnPoisonCloud:'Poison Cloud',
    wnShadowBlades:'Shadow Blades',
    wnBloodNova:'Blood Nova',
    wnVoidRift:'Void Rift',
    wnSoulDrain:'Soul Drain',
    wnArcaneMine:'Arcane Mine',
    // Evolutions
    evoArcaneStorm:'EVO: Arcane Storm!',
    evoInfernoRing:'EVO: Inferno Ring!',
    evoThunderStorm:'EVO: Thunder Storm!',
    evoVoidSing:'EVO: Void Singularity!',
    // Combat text
    streakMassacre:'💀 MASSACRE!',
    streakRampage:'⚡ RAMPAGE!',
    streakUnstoppable:'🔥 UNSTOPPABLE!',
    streakKillSpree:'✨ KILLING SPREE!',
    streakMultiKill:'◈ MULTI-KILL!',
    comboLabel:'✦ COMBO',
    critLabel:'CRIT',
    // Upgrade card categories
    catAtk:'⚔ ATTACK', catDef:'🛡 DEFENSE', catWeapon:'⚡ WEAPON', catUtil:'✦ UTILITY',
    passive:'passive',
    // Rarity labels
    rarityRare:'◈ RARE',rarityLegendary:'✦ LEGENDARY ✦',
    // Chapter subtitles
    ch0sub:'Cursed Fields',ch1sub:'Ruined Cathedral',ch2sub:'Necromancer Crypt',ch3sub:'Hell Rift',
}
};

function T(key){ return (STRINGS[LANG]&&STRINGS[LANG][key]) || STRINGS.ru[key] || key; }

// Early language detection from browser — overridden later by SDK (req 2.14)
(function(){
    const bl=(navigator.language||navigator.userLanguage||'ru').toLowerCase().slice(0,2);
    LANG=['ru','be','kk','uk','uz'].includes(bl)?'ru':'en';
})();

// Update HTML elements when language is known
function applyLangToHTML(){
    document.documentElement.lang = LANG==='ru'?'ru':'en';
    const ro=document.getElementById('rotateOverlay');
    if(ro){
        ro.childNodes[1].textContent=T('rotateDevice');
        const sub=ro.querySelector('.sub');
        if(sub) sub.textContent=T('rotateHint');
    }
    const hint=document.querySelector('#loadScreen .hint');
    if(hint) hint.textContent=T('loading');
}
applyLangToHTML(); // Apply immediately so HTML matches early-detected language

// ============================================================
//  YANDEX GAMES SDK
// ============================================================
let ysdk=null, yPlayer=null, yLB=null;
let sdkReady=false;

// Detect Yandex iframe environment
const IS_YANDEX = window.location!==window.parent.location ||
                  /yandex\.(ru|com|by|kz|ua|net)/i.test(document.referrer) ||
                  typeof YaGames!=='undefined';

async function initYSDK(){
    if(typeof YaGames==='undefined'){ onSDKFail(); return; }
    try{
        ysdk = await YaGames.init();
        sdkReady = true;
        _flushGpQueue();      // execute any GameplayAPI call that was made before SDK was ready
        _flushLoadingReady(); // call LoadingAPI.ready() if game already finished loading

        // ── Language detection (req 2.14) ─────────────────────
        try{
            const sdkLang = ysdk.environment.i18n.lang;
            // ru/be/kk/uk/uz → Russian, everything else → English
            LANG = ['ru','be','kk','uk','uz'].includes(sdkLang) ? 'ru' : 'en';
            applyLangToHTML();
        }catch(e){ /* default ru */ }

        // NOTE: LoadingAPI.ready() is called LATER, after game is fully loaded

        // ── Player (cloud saves) ──────────────────────────────
        try{
            yPlayer = await ysdk.getPlayer({scopes:false});
            await loadCloudSave();
        }catch(e){ console.warn('YaPlayer unavailable',e); }

        // ── Leaderboard ───────────────────────────────────────
        try{
            yLB = await ysdk.getLeaderboards();
        }catch(e){ console.warn('YaLB unavailable',e); }

    }catch(e){ onSDKFail(); }
}

function onSDKFail(){
    sdkReady=false;
    console.log('Yandex SDK not available — running in standalone mode');
}

// ── GameplayAPI helpers (req 1.19.4 — must call start/stop around gameplay) ──
let _gpPending=null; // queued call ('start'|'stop') made before SDK was ready
function gameplayStart(){
    if(ysdk){
        try{ ysdk.features.GameplayAPI.start(); }catch(e){}
        _gpPending=null;
    } else { _gpPending='start'; }
}
function gameplayStop(){
    if(ysdk){
        try{ ysdk.features.GameplayAPI.stop(); }catch(e){}
        _gpPending=null;
    } else { _gpPending='stop'; }
}
function _flushGpQueue(){
    if(_gpPending==='start'){ try{ ysdk.features.GameplayAPI.start(); }catch(e){} }
    else if(_gpPending==='stop'){ try{ ysdk.features.GameplayAPI.stop(); }catch(e){} }
    _gpPending=null;
}
// Signal to Yandex that game has finished loading and is playable (req 1.19.2)
// Uses a flag so the call is never lost even if SDK initializes after the game finishes loading
let _gameLoadedFlag=false;
function signalGameReady(){
    _gameLoadedFlag=true;
    if(!ysdk) return; // will be called from _flushLoadingReady() once SDK is ready
    try{ ysdk.features.LoadingAPI.ready(); }catch(e){}
}
function _flushLoadingReady(){
    if(_gameLoadedFlag){ try{ ysdk.features.LoadingAPI.ready(); }catch(e){} }
}

// ── Cloud save helpers ────────────────────────────────────────
async function loadCloudSave(){
    if(!yPlayer) return;
    try{
        const cloud=await yPlayer.getData(['meta']);
        if(cloud.meta && Object.keys(cloud.meta).length>0){
            meta={...META_DEF,...cloud.meta};
        }
    }catch(e){}
}

async function saveCloudMeta(){
    // Always save to localStorage as fallback
    try{localStorage.setItem('darkSurvivorMeta2',JSON.stringify(meta));}catch{}
    // Try cloud save
    if(!yPlayer) return;
    try{ await yPlayer.setData({meta}); }catch(e){}
}

// ── Leaderboard submit ────────────────────────────────────────
async function submitYaScore(time){
    if(!yLB) return;
    try{
        await yLB.setLeaderboardScore('darkSurvivorTime', Math.floor(time));
    }catch(e){}
}

async function fetchYaLeaderboard(){
    if(!yLB) return null;
    try{
        const res=await yLB.getLeaderboardEntries('darkSurvivorTime',{
            includeUser:true, quantityAround:3, quantityTop:10
        });
        return res.entries||null;
    }catch(e){ return null; }
}

// ── Ad helpers ────────────────────────────────────────────────
let adInProgress=false;
let interLastTime=0; // prevent ad spam

// Fully suspend audio engine during ads (req 4.7)
function adAudioStop(){
    if(masterGain) masterGain.gain.value=0;
    if(audioCtx && audioCtx.state==='running') audioCtx.suspend().catch(()=>{});
}
function adAudioResume(){
    if(audioCtx && audioCtx.state==='suspended') audioCtx.resume().catch(()=>{});
    if(!audioMuted && masterGain) masterGain.gain.value=0.35;
}

function showInterstitialAd(onDone){
    if(!sdkReady||adInProgress){ onDone?.(); return; }
    const now=Date.now();
    if(now-interLastTime < 90000){ onDone?.(); return; }
    adInProgress=true;
    gameplayStop();
    adAudioStop(); // suspend AudioContext fully (req 4.7)
    try{
        ysdk.adv.showFullscreenAdv({
            callbacks:{
                onOpen(){ adAudioStop(); }, // extra safety: mute if called after open
                onClose(wasShown){ adInProgress=false; interLastTime=Date.now(); adAudioResume(); onDone?.(); },
                onError(err){     adInProgress=false; adAudioResume(); onDone?.(); }
            }
        });
    }catch(e){ adInProgress=false; adAudioResume(); onDone?.(); }
}

function showRewardedAd(onRewarded, onFail){
    if(!sdkReady||adInProgress){ onFail?.(); return; }
    adInProgress=true;
    gameplayStop();
    adAudioStop(); // suspend AudioContext fully (req 4.7)
    try{
        ysdk.adv.showRewardedVideo({
            callbacks:{
                onOpen(){ adAudioStop(); }, // extra safety
                onRewarded(){ /* reward is given in onClose */ },
                onClose(wasRewarded){
                    adInProgress=false;
                    adAudioResume();
                    if(wasRewarded) onRewarded?.();
                    else onFail?.();
                },
                onError(err){
                    adInProgress=false;
                    adAudioResume();
                    onFail?.();
                }
            }
        });
    }catch(e){ adInProgress=false; adAudioResume(); onFail?.(); }
}

// ── Revive system ─────────────────────────────────────────────
let canRevive=true;  // one revive per run
let reviveOffered=false;
let yaLBEntries=null; // cached leaderboard entries for display

function offerRevive(){
    // Skip revive screen entirely — go straight to game over
    // (Revive via rewarded ad can be re-enabled when ad integration is stable)
    finalizeEndGame();
}

function doRevive(){
    canRevive=false; reviveOffered=false;
    showRewardedAd(
        ()=>{ // rewarded
            player.hp=Math.floor(player.maxHp*0.4);
            player.iTimer=2.0;
            gameState='playing'; gameplayStart();
            floatText(player.x,player.y-60,T('revived'),'#22c55e',28,2);
            addShake(4);
        },
        ()=>{ finalizeEndGame(); } // failed/skipped
    );
}

function finalizeEndGame(){
    reviveOffered=false;
    gameState='gameover'; // set immediately — don't wait for async
    goAnim=0;

    const cr=Math.floor(killCount/10)+Math.floor(gameTime/30);
    meta.crystals+=cr; meta.totalKills+=killCount;
    if(gameTime>meta.bestTime) meta.bestTime=gameTime;
    if(player.level>meta.maxLevel) meta.maxLevel=player.level;
    saveLB(gameTime,killCount,player.level);
    submitYaScore(gameTime);
    checkAchieve(); saveCloudMeta();
    // Fetch leaderboard async (non-blocking — gameover screen shows immediately)
    fetchYaLeaderboard().then(entries=>{ yaLBEntries=entries; });
    // NOTE: Interstitial is shown when player clicks "Back to Menu" (logical pause point, req 4.4)
    // Do NOT auto-show ad on defeat — that is considered intrusive per Yandex requirements
}

// ── Initialize SDK on page load ───────────────────────────────
initYSDK();

// ============================================================
//  CORE SETUP
// ============================================================
const canvas = document.getElementById('game');
const ctx    = canvas.getContext('2d');

// Logical game resolution — all draw calls use these coordinates
const W = 1280, H = 720;

// ============================================================
//  DEVICE & QUALITY DETECTION (must be before resizeCanvas)
// ============================================================
const IS_MOBILE = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent)
               || 'ontouchstart' in window
               || navigator.maxTouchPoints > 0;
const IS_LOW_END = IS_MOBILE && (navigator.hardwareConcurrency||4) <= 4;
const Q = IS_LOW_END ? 'low' : IS_MOBILE ? 'mid' : 'high';

// ── Orientation overlay ──────────────────────────────────────
const rotateOverlay = document.getElementById('rotateOverlay');

// Game loop reads this flag to skip update/draw in portrait.
// We never change gameState here so game resumes instantly on rotate.
let isPortraitMode = false;

function resizeCanvas(){
    // Measure the actual viewport — document.documentElement is reliable
    // on mobile even when window.innerHeight includes browser chrome.
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    // Portrait = any device where height > width
    isPortraitMode = vh > vw;
    if(rotateOverlay) rotateOverlay.style.display = isPortraitMode ? 'flex' : 'none';
    if(isPortraitMode) return;

    // Cap DPR at 2 — prevents massive buffers on 3× phones
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Uniform scale: largest value that keeps 16:9 inside viewport
    const scale = Math.min(vw / W, vh / H);

    // CSS size of canvas element (logical screen pixels)
    const cssW = Math.round(W * scale);
    const cssH = Math.round(H * scale);

    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';

    // Physical buffer size (sharp on retina)
    const bufW = Math.round(cssW * dpr);
    const bufH = Math.round(cssH * dpr);

    if(canvas.width !== bufW || canvas.height !== bufH){
        canvas.width  = bufW;
        canvas.height = bufH;
    }

    // One transform maps game's W×H coords → physical buffer pixels
    ctx.setTransform(scale * dpr, 0, 0, scale * dpr, 0, 0);
}

resizeCanvas();
// Re-run after full load (font/layout settle, especially on iOS)
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);
// orientationchange fires before innerWidth/Height update — double timeout handles iOS lag
window.addEventListener('orientationchange', ()=>{
    setTimeout(resizeCanvas, 100);
    setTimeout(resizeCanvas, 450);
});
if(screen.orientation){
    screen.orientation.addEventListener('change', ()=>{
        setTimeout(resizeCanvas, 100);
        setTimeout(resizeCanvas, 450);
    });
}

// ── Loading screen progress ──────────────────────────────────
const loadBar = document.getElementById('loadBar');
const loadScreen = document.getElementById('loadScreen');
let loadPct = 0;
function setLoad(pct){ loadPct = pct; if(loadBar) loadBar.style.width = pct + '%'; }
function hideLoadScreen(){ if(loadScreen){ loadScreen.style.opacity = '0'; setTimeout(()=>{ loadScreen.style.display = 'none'; }, 500); } }
setLoad(10);

// ── Visibility / focus pause ─────────────────────────────────
document.addEventListener('visibilitychange', ()=>{
    if(document.hidden && gameState === 'playing'){ gameState = 'paused'; gameplayStop(); }
    if(!document.hidden && gameState === 'playing') gameplayStart();
    // Mute during hidden
    if(document.hidden && masterGain) masterGain.gain.value = 0;
    else if(!document.hidden && !audioMuted && masterGain) masterGain.gain.value = 0.35;
});
window.addEventListener('blur', ()=>{
    if(gameState === 'playing'){ gameState = 'paused'; gameplayStop(); }
    // Mute audio on blur (req 1.3)
    if(masterGain) masterGain.gain.value = 0;
});
window.addEventListener('focus', ()=>{
    if(!audioMuted && masterGain) masterGain.gain.value = 0.35;
});

// ── Prevent all scroll/zoom gestures ─────────────────────────
document.addEventListener('touchmove', e=>e.preventDefault(), {passive:false});
document.addEventListener('gesturestart', e=>e.preventDefault());
document.addEventListener('gesturechange', e=>e.preventDefault());
document.addEventListener('gestureend', e=>e.preventDefault());
document.addEventListener('contextmenu', e=>e.preventDefault());
const WORLD={w:3200,h:3200};
const PI2=Math.PI*2, PI=Math.PI;
const fmt2 = n=>String(Math.floor(n)).padStart(2,'0');
const fmtTime = s=>`${fmt2(s/60)}:${fmt2(s%60)}`;

const COL={
    bg:'#0a0e1a', ground:'#141d2e', xp:'#22c55e', dmg:'#ef4444',
    magic:'#a855f7', upgrade:'#facc15', ice:'#67e8f9', fire:'#f97316',
    lightning:'#fbbf24', poison:'#4ade80', shield:'#60a5fa',
    blood:'#7f1d1d', bone:'#d4c5a9',
};

// ============================================================
//  CHARACTER SYSTEM
// ============================================================
const CHARACTERS = [
    {
        id: 'knight',
        get name(){ return T('charKnight'); },
        nameEn: 'Knight',
        get desc(){ return T('charKnightDesc'); },
        icon: '⚔',
        // Stats multipliers / overrides
        hp: 160,
        speed: 175,
        damage: 18,
        atkSpd: 0.85,
        startWeapon: 'magicBolt',
        // Visual
        bodyCol: '#1e40af',
        bodyCol2: '#1e3a8a',
        accentCol: '#93c5fd',
        eyeCol: '#fbbf24',
        auraCol: 'rgba(30,64,175,0.18)',
        trailCol: '#93c5fd',
        weaponType: 'sword',
        // Special: starts with shield
        shield: 40,
        // Short description for selection screen
        statHp: '★★★★★',
        statSpd: '★★★☆☆',
        statDmg: '★★★☆☆',
        statAtk: '★★☆☆☆',
    },
    {
        id: 'mage',
        get name(){ return T('charMage'); },
        nameEn: 'Mage',
        get desc(){ return T('charMageDesc'); },
        icon: '✦',
        hp: 85,
        speed: 195,
        damage: 22,
        atkSpd: 1.35,
        startWeapon: 'magicBolt',
        bodyCol: '#7c3aed',
        bodyCol2: '#5b21b6',
        accentCol: '#e879f9',
        eyeCol: '#e0f0ff',
        auraCol: 'rgba(168,85,247,0.2)',
        trailCol: '#e879f9',
        weaponType: 'staff',
        shield: 0,
        statHp: '★★☆☆☆',
        statSpd: '★★★★☆',
        statDmg: '★★★★★',
        statAtk: '★★★★★',
    },
    {
        id: 'rogue',
        get name(){ return T('charRogue'); },
        nameEn: 'Rogue',
        get desc(){ return T('charRogueDesc'); },
        icon: '🗡',
        hp: 95,
        speed: 240,
        damage: 14,
        atkSpd: 1.2,
        startWeapon: 'magicBolt',
        bodyCol: '#374151',
        bodyCol2: '#1f2937',
        accentCol: '#34d399',
        eyeCol: '#f87171',
        auraCol: 'rgba(52,211,153,0.12)',
        trailCol: '#34d399',
        weaponType: 'daggers',
        shield: 0,
        // Rogue bonus: higher crit
        crit: 0.22,
        statHp: '★★☆☆☆',
        statSpd: '★★★★★',
        statDmg: '★★★☆☆',
        statAtk: '★★★★☆',
    },
    {
        id: 'necromancer',
        get name(){ return T('charNecro'); },
        nameEn: 'Necromancer',
        get desc(){ return T('charNecroDesc'); },
        icon: '💀',
        hp: 110,
        speed: 180,
        damage: 20,
        atkSpd: 1.0,
        startWeapon: 'magicBolt',
        bodyCol: '#581c87',
        bodyCol2: '#3b0764',
        accentCol: '#4ade80',
        eyeCol: '#4ade80',
        auraCol: 'rgba(74,222,128,0.15)',
        trailCol: '#4ade80',
        weaponType: 'scythe',
        shield: 0,
        // Necromancer bonus: regen
        regen: 2,
        statHp: '★★★☆☆',
        statSpd: '★★★☆☆',
        statDmg: '★★★★☆',
        statAtk: '★★★☆☆',
    },
];

let selectedCharIdx = 0; // index into CHARACTERS
let charSelectHov = -1;

// Helper — get current selected character
function getChar(){ return CHARACTERS[selectedCharIdx]; }

// ── Draw a character portrait for the selection screen ───────
function drawCharPortrait(ch, cx, cy, r, t){
    ctx.save();
    const anim = Math.sin(t * 2.5) * 2;

    // Aura glow behind character
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = ch.auraCol.replace('0.', '0.8').replace('rgba','rgb').replace(/,[^,]*\)/, ')') || ch.bodyCol;
    ctx.beginPath(); ctx.arc(cx, cy + anim, r * 1.5, 0, PI2); ctx.fill();
    ctx.restore();

    // Ground shadow
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath(); ctx.ellipse(cx, cy + r + 4, r * 0.75, r * 0.2, 0, 0, PI2); ctx.fill();

    switch(ch.weaponType){
        case 'sword': _drawKnightPortrait(ch, cx, cy + anim, r, t); break;
        case 'staff': _drawMagePortrait(ch, cx, cy + anim, r, t); break;
        case 'daggers': _drawRoguePortrait(ch, cx, cy + anim, r, t); break;
        case 'scythe': _drawNecroPortrait(ch, cx, cy + anim, r, t); break;
    }
    ctx.restore();
}

function _drawKnightPortrait(ch, cx, cy, r, t){
    // Pauldrons (shoulder armor)
    ctx.fillStyle = ch.bodyCol2;
    ctx.beginPath(); ctx.ellipse(cx - r * 0.85, cy - r * 0.15, r * 0.38, r * 0.28, -0.4, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + r * 0.85, cy - r * 0.15, r * 0.38, r * 0.28, 0.4, 0, PI2); ctx.fill();
    // Armored body
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.roundRect(cx - r * 0.6, cy - r * 0.1, r * 1.2, r * 1.1, 4); ctx.fill();
    // Chest plate highlight
    ctx.fillStyle = 'rgba(147,197,253,0.25)';
    ctx.beginPath(); ctx.roundRect(cx - r * 0.38, cy - r * 0.08, r * 0.76, r * 0.55, 3); ctx.fill();
    // Helmet
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.55, r * 0.72, 0, PI2); ctx.fill();
    // Visor slit
    ctx.fillStyle = ch.bodyCol2;
    ctx.fillRect(cx - r * 0.38, cy - r * 0.55, r * 0.76, r * 0.13);
    // Glowing eyes through visor
    ctx.fillStyle = ch.eyeCol;
    ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.arc(cx - r * 0.2, cy - r * 0.55, r * 0.1, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + r * 0.2, cy - r * 0.55, r * 0.1, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Shield (left arm)
    const sa = -0.3;
    ctx.fillStyle = ch.bodyCol2;
    ctx.beginPath(); ctx.roundRect(cx - r * 1.4, cy - r * 0.3, r * 0.52, r * 0.8, 5); ctx.fill();
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.roundRect(cx - r * 1.4, cy - r * 0.3, r * 0.52, r * 0.8, 5); ctx.stroke();
    // Shield emblem
    ctx.fillStyle = ch.accentCol; ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.arc(cx - r * 1.14, cy + r * 0.1, r * 0.13, 0, PI2); ctx.fill();
    ctx.globalAlpha = 1;
    // Sword (right arm) — raised, animated
    const sw = t * 3;
    const sAngle = Math.PI * 1.3 + Math.sin(sw) * 0.18;
    const sx2 = cx + r * 0.65, sy2 = cy + r * 0.2;
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(sx2, sy2);
    ctx.lineTo(sx2 + Math.cos(sAngle) * r * 1.35, sy2 + Math.sin(sAngle) * r * 1.35);
    ctx.stroke();
    // Sword cross-guard
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2.5;
    ctx.beginPath();
    const gx = sx2 + Math.cos(sAngle) * r * 0.5, gy = sy2 + Math.sin(sAngle) * r * 0.5;
    const perp = sAngle + PI / 2;
    ctx.moveTo(gx + Math.cos(perp) * r * 0.25, gy + Math.sin(perp) * r * 0.25);
    ctx.lineTo(gx - Math.cos(perp) * r * 0.25, gy - Math.sin(perp) * r * 0.25);
    ctx.stroke();
}

function _drawMagePortrait(ch, cx, cy, r, t){
    // Robe body
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.moveTo(cx - r * 0.55, cy - r * 0.1); ctx.lineTo(cx - r * 0.95, cy + r); ctx.lineTo(cx + r * 0.95, cy + r); ctx.lineTo(cx + r * 0.55, cy - r * 0.1); ctx.closePath(); ctx.fill();
    // Robe dark overlay
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath(); ctx.moveTo(cx - r * 0.25, cy - r * 0.1); ctx.lineTo(cx - r * 0.42, cy + r); ctx.lineTo(cx + r * 0.42, cy + r); ctx.lineTo(cx + r * 0.25, cy - r * 0.1); ctx.closePath(); ctx.fill();
    // Hood
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.2, r * 0.72, 0, PI2); ctx.fill();
    ctx.fillStyle = ch.bodyCol2;
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.12, r * 0.5, 0, PI2); ctx.fill();
    // Glowing eyes
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 12;
    ctx.beginPath(); ctx.arc(cx - r * 0.2, cy - r * 0.15, r * 0.1, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + r * 0.2, cy - r * 0.15, r * 0.1, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Staff (right side, animated orb)
    const sa = -0.7 + Math.sin(t * 2) * 0.08;
    const stx = cx + r * 0.8, sty = cy + r * 0.3;
    ctx.strokeStyle = '#78350f'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(stx, sty); ctx.lineTo(stx + Math.cos(sa) * r * 1.4, sty + Math.sin(sa) * r * 1.4); ctx.stroke();
    // Staff orb pulsing
    const orbR = r * 0.22 + Math.sin(t * 4) * r * 0.05;
    const orbX = stx + Math.cos(sa) * r * 1.38, orbY = sty + Math.sin(sa) * r * 1.38;
    ctx.fillStyle = ch.accentCol; ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 18;
    ctx.beginPath(); ctx.arc(orbX, orbY, orbR, 0, PI2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.shadowBlur = 0;
    ctx.beginPath(); ctx.arc(orbX - orbR * 0.3, orbY - orbR * 0.3, orbR * 0.3, 0, PI2); ctx.fill();
    // Floating magic sparks around orb
    for(let i = 0; i < 3; i++){
        const sa2 = t * 3 + i * PI2 / 3;
        const sx3 = orbX + Math.cos(sa2) * r * 0.45, sy3 = orbY + Math.sin(sa2) * r * 0.45;
        ctx.fillStyle = ch.accentCol; ctx.globalAlpha = 0.7;
        ctx.beginPath(); ctx.arc(sx3, sy3, r * 0.07, 0, PI2); ctx.fill();
    }
    ctx.globalAlpha = 1;
}

function _drawRoguePortrait(ch, cx, cy, r, t){
    // Lean torso
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.roundRect(cx - r * 0.45, cy - r * 0.05, r * 0.9, r, 4); ctx.fill();
    // Hood/mask
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.4, r * 0.68, 0, PI2); ctx.fill();
    // Mask band
    ctx.fillStyle = ch.bodyCol2;
    ctx.fillRect(cx - r * 0.6, cy - r * 0.45, r * 1.2, r * 0.15);
    // Slit eyes glowing
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 9;
    ctx.beginPath(); ctx.ellipse(cx - r * 0.22, cy - r * 0.43, r * 0.12, r * 0.07, 0, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + r * 0.22, cy - r * 0.43, r * 0.12, r * 0.07, 0, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Cloak swirl
    ctx.fillStyle = 'rgba(31,41,55,0.7)';
    ctx.beginPath(); ctx.moveTo(cx - r * 0.4, cy - r * 0.05); ctx.quadraticCurveTo(cx - r * 1.3, cy + r * 0.6, cx - r * 0.6, cy + r); ctx.lineTo(cx - r * 0.4, cy + r); ctx.closePath(); ctx.fill();
    // Left dagger (static guard)
    const d1a = PI * 0.85;
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx - r * 0.5, cy + r * 0.1); ctx.lineTo(cx - r * 0.5 + Math.cos(d1a) * r * 1.1, cy + r * 0.1 + Math.sin(d1a) * r * 1.1); ctx.stroke();
    // Right dagger (animated slash)
    const d2a = -PI * 0.2 + Math.sin(t * 5) * 0.35;
    ctx.strokeStyle = ch.accentCol; ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.moveTo(cx + r * 0.5, cy + r * 0.1); ctx.lineTo(cx + r * 0.5 + Math.cos(d2a) * r * 1.1, cy + r * 0.1 + Math.sin(d2a) * r * 1.1); ctx.stroke();
    ctx.shadowBlur = 0;
    // Dagger handles
    ctx.strokeStyle = '#78350f'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(cx - r * 0.5, cy + r * 0.1); ctx.lineTo(cx - r * 0.5, cy + r * 0.36); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + r * 0.5, cy + r * 0.1); ctx.lineTo(cx + r * 0.5, cy + r * 0.36); ctx.stroke();
}

function _drawNecroPortrait(ch, cx, cy, r, t){
    // Dark robe
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.moveTo(cx - r * 0.55, cy - r * 0.05); ctx.lineTo(cx - r * 1.0, cy + r); ctx.lineTo(cx + r * 1.0, cy + r); ctx.lineTo(cx + r * 0.55, cy - r * 0.05); ctx.closePath(); ctx.fill();
    // Skull hood
    ctx.fillStyle = ch.bodyCol;
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.2, r * 0.72, 0, PI2); ctx.fill();
    // Skull face overlay
    ctx.fillStyle = '#d4c5a9';
    ctx.beginPath(); ctx.arc(cx, cy - r * 0.25, r * 0.52, 0, PI2); ctx.fill();
    // Skull eye sockets
    ctx.fillStyle = 'rgba(0,0,0,0.85)';
    ctx.beginPath(); ctx.arc(cx - r * 0.22, cy - r * 0.3, r * 0.16, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + r * 0.22, cy - r * 0.3, r * 0.16, 0, PI2); ctx.fill();
    // Glowing soul in sockets
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 14;
    ctx.beginPath(); ctx.arc(cx - r * 0.22, cy - r * 0.3, r * 0.09, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + r * 0.22, cy - r * 0.3, r * 0.09, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Scythe
    const scyA = -0.5 + Math.sin(t * 1.8) * 0.1;
    const scx = cx + r * 0.6, scy = cy + r * 0.25;
    // Shaft
    ctx.strokeStyle = '#2d1a00'; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(scx, scy); ctx.lineTo(scx + Math.cos(scyA) * r * 1.5, scy + Math.sin(scyA) * r * 1.5); ctx.stroke();
    // Blade curve
    const bTip = {x: scx + Math.cos(scyA) * r * 1.48, y: scy + Math.sin(scyA) * r * 1.48};
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2.5;
    ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(bTip.x, bTip.y);
    ctx.bezierCurveTo(bTip.x + Math.cos(scyA - 1.2) * r * 0.9, bTip.y + Math.sin(scyA - 1.2) * r * 0.9,
                      bTip.x + Math.cos(scyA - 0.5) * r * 1.1, bTip.y + Math.sin(scyA - 0.5) * r * 1.1,
                      bTip.x + Math.cos(scyA + 0.3) * r * 0.55, bTip.y + Math.sin(scyA + 0.3) * r * 0.55);
    ctx.stroke();
    ctx.shadowBlur = 0;
    // Soul orbs floating (necromancer aura)
    for(let i = 0; i < 4; i++){
        const sa = t * 2 + i * PI2 / 4;
        const sx3 = cx + Math.cos(sa) * r * 1.2, sy3 = cy + Math.sin(sa) * r * 1.1;
        ctx.fillStyle = ch.eyeCol;
        ctx.globalAlpha = 0.5 + Math.sin(t * 3 + i) * 0.25;
        ctx.beginPath(); ctx.arc(sx3, sy3, r * 0.1, 0, PI2); ctx.fill();
    }
    ctx.globalAlpha = 1;
}

// ── In-game player drawing per character ─────────────────────
function drawPlayerCharacter(s, r){
    const ch = getChar();
    switch(ch.weaponType){
        case 'sword':    _drawKnightPlayer(ch, s, r); break;
        case 'staff':    _drawMagePlayer(ch, s, r); break;
        case 'daggers':  _drawRoguePlayer(ch, s, r); break;
        case 'scythe':   _drawNecroPlayer(ch, s, r); break;
        default:         _drawMagePlayer(ch, s, r);
    }
}

function _drawKnightPlayer(ch, s, r){
    const hurt = player.hurtTimer > 0;
    const bc = hurt ? '#ff6666' : (player.iTimer > 0 ? '#93c5fd' : ch.bodyCol);
    // Armored body
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.roundRect(s.x - r * 0.65, s.y - r * 0.1, r * 1.3, r * 1.05, 3); ctx.fill();
    // Chest highlight
    ctx.fillStyle = 'rgba(147,197,253,0.18)';
    ctx.beginPath(); ctx.roundRect(s.x - r * 0.38, s.y - r * 0.05, r * 0.76, r * 0.55, 2); ctx.fill();
    // Helmet
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.55, r * 0.7, 0, PI2); ctx.fill();
    ctx.fillStyle = ch.bodyCol2;
    ctx.fillRect(s.x - r * 0.36, s.y - r * 0.56, r * 0.72, r * 0.13);
    // Eyes
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 8;
    ctx.beginPath(); ctx.arc(s.x - r * 0.18, s.y - r * 0.56, r * 0.09, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(s.x + r * 0.18, s.y - r * 0.56, r * 0.09, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Sword in direction of aim
    const ddx = Math.cos(player.angle), ddy = Math.sin(player.angle);
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(s.x + ddx * r * 0.7, s.y + ddy * r * 0.7); ctx.lineTo(s.x + ddx * (r + 18), s.y + ddy * (r + 18)); ctx.stroke();
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2;
    const perp = player.angle + PI / 2;
    const gx = s.x + ddx * r, gy = s.y + ddy * r;
    ctx.beginPath(); ctx.moveTo(gx + Math.cos(perp) * r * 0.28, gy + Math.sin(perp) * r * 0.28);
    ctx.lineTo(gx - Math.cos(perp) * r * 0.28, gy - Math.sin(perp) * r * 0.28); ctx.stroke();
}

function _drawMagePlayer(ch, s, r){
    const hurt = player.hurtTimer > 0;
    const bc = hurt ? '#ff5555' : (player.iTimer > 0 ? '#b0a0ff' : ch.bodyCol);
    // Robe
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.moveTo(s.x - r * 0.55, s.y - r * 0.1); ctx.lineTo(s.x - r * 0.9, s.y + r); ctx.lineTo(s.x + r * 0.9, s.y + r); ctx.lineTo(s.x + r * 0.55, s.y - r * 0.1); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath(); ctx.moveTo(s.x - r * 0.25, s.y - r * 0.1); ctx.lineTo(s.x - r * 0.4, s.y + r); ctx.lineTo(s.x + r * 0.4, s.y + r); ctx.lineTo(s.x + r * 0.25, s.y - r * 0.1); ctx.closePath(); ctx.fill();
    // Hood
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.18, r * 0.72, 0, PI2); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.1, r * 0.5, 0, PI2); ctx.fill();
    // Eyes
    ctx.fillStyle = ch.eyeCol;
    const ea = player.angle;
    ctx.beginPath(); ctx.arc(s.x + Math.cos(ea - 0.38) * r * 0.34, s.y + Math.sin(ea - 0.38) * r * 0.34 - r * 0.1, r * 0.1, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(s.x + Math.cos(ea + 0.38) * r * 0.34, s.y + Math.sin(ea + 0.38) * r * 0.34 - r * 0.1, r * 0.1, 0, PI2); ctx.fill();
    // Staff lance
    const ddx = Math.cos(player.angle), ddy = Math.sin(player.angle);
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2.5;
    if(QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 12; }
    ctx.beginPath(); ctx.moveTo(s.x + ddx * r * 0.8, s.y + ddy * r * 0.8); ctx.lineTo(s.x + ddx * (r + 14), s.y + ddy * (r + 14)); ctx.stroke();
    ctx.fillStyle = '#e9d5ff';
    ctx.beginPath(); ctx.arc(s.x + ddx * (r + 14), s.y + ddy * (r + 14), 3, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
}

function _drawRoguePlayer(ch, s, r){
    const hurt = player.hurtTimer > 0;
    const bc = hurt ? '#ff6666' : (player.iTimer > 0 ? '#6ee7b7' : ch.bodyCol);
    // Lean torso
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.roundRect(s.x - r * 0.45, s.y - r * 0.05, r * 0.9, r, 4); ctx.fill();
    // Cloak
    ctx.fillStyle = 'rgba(31,41,55,0.65)';
    ctx.beginPath(); ctx.moveTo(s.x - r * 0.4, s.y - r * 0.05); ctx.quadraticCurveTo(s.x - r * 1.1, s.y + r * 0.5, s.x - r * 0.5, s.y + r); ctx.lineTo(s.x - r * 0.4, s.y + r); ctx.closePath(); ctx.fill();
    // Head / mask
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.4, r * 0.65, 0, PI2); ctx.fill();
    ctx.fillStyle = ch.bodyCol2;
    ctx.fillRect(s.x - r * 0.6, s.y - r * 0.44, r * 1.2, r * 0.14);
    // Eyes
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 7;
    const ea = player.angle;
    ctx.beginPath(); ctx.ellipse(s.x + Math.cos(ea - 0.38) * r * 0.32, s.y + Math.sin(ea - 0.38) * r * 0.32 - r * 0.25, r * 0.12, r * 0.07, ea, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(s.x + Math.cos(ea + 0.38) * r * 0.32, s.y + Math.sin(ea + 0.38) * r * 0.32 - r * 0.25, r * 0.12, r * 0.07, ea, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Twin daggers in aim direction
    const ddx = Math.cos(player.angle), ddy = Math.sin(player.angle);
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2; ctx.lineCap = 'round';
    if(QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 8; }
    const perp = player.angle + PI / 2;
    ctx.beginPath(); ctx.moveTo(s.x + ddx * r * 0.5 + Math.cos(perp) * r * 0.25, s.y + ddy * r * 0.5 + Math.sin(perp) * r * 0.25);
    ctx.lineTo(s.x + ddx * (r + 16) + Math.cos(perp) * r * 0.2, s.y + ddy * (r + 16) + Math.sin(perp) * r * 0.2); ctx.stroke();
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath(); ctx.moveTo(s.x + ddx * r * 0.5 - Math.cos(perp) * r * 0.25, s.y + ddy * r * 0.5 - Math.sin(perp) * r * 0.25);
    ctx.lineTo(s.x + ddx * (r + 14) - Math.cos(perp) * r * 0.2, s.y + ddy * (r + 14) - Math.sin(perp) * r * 0.2); ctx.stroke();
    ctx.shadowBlur = 0;
}

function _drawNecroPlayer(ch, s, r){
    const hurt = player.hurtTimer > 0;
    const bc = hurt ? '#cc44cc' : (player.iTimer > 0 ? '#86efac' : ch.bodyCol);
    // Dark robe
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.moveTo(s.x - r * 0.55, s.y - r * 0.05); ctx.lineTo(s.x - r * 1.0, s.y + r); ctx.lineTo(s.x + r * 1.0, s.y + r); ctx.lineTo(s.x + r * 0.55, s.y - r * 0.05); ctx.closePath(); ctx.fill();
    // Skull hood
    ctx.fillStyle = bc;
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.2, r * 0.72, 0, PI2); ctx.fill();
    ctx.fillStyle = '#c4b59a';
    ctx.beginPath(); ctx.arc(s.x, s.y - r * 0.25, r * 0.5, 0, PI2); ctx.fill();
    // Eye sockets
    ctx.fillStyle = 'rgba(0,0,0,0.8)';
    ctx.beginPath(); ctx.arc(s.x - r * 0.2, s.y - r * 0.3, r * 0.14, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(s.x + r * 0.2, s.y - r * 0.3, r * 0.14, 0, PI2); ctx.fill();
    ctx.fillStyle = ch.eyeCol; ctx.shadowColor = ch.eyeCol; ctx.shadowBlur = 12;
    ctx.beginPath(); ctx.arc(s.x - r * 0.2, s.y - r * 0.3, r * 0.08, 0, PI2); ctx.fill();
    ctx.beginPath(); ctx.arc(s.x + r * 0.2, s.y - r * 0.3, r * 0.08, 0, PI2); ctx.fill();
    ctx.shadowBlur = 0;
    // Scythe in aim direction
    const ddx = Math.cos(player.angle), ddy = Math.sin(player.angle);
    ctx.strokeStyle = '#2d1a00'; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(s.x + ddx * r * 0.6, s.y + ddy * r * 0.6); ctx.lineTo(s.x + ddx * (r + 18), s.y + ddy * (r + 18)); ctx.stroke();
    // Blade
    ctx.strokeStyle = ch.accentCol; ctx.lineWidth = 2.5;
    if(QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 10; }
    const tipX = s.x + ddx * (r + 18), tipY = s.y + ddy * (r + 18);
    const perp = player.angle + PI / 2;
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.bezierCurveTo(tipX + Math.cos(player.angle - 1.1) * r * 0.9, tipY + Math.sin(player.angle - 1.1) * r * 0.9,
                      tipX + Math.cos(perp) * r * 0.9, tipY + Math.sin(perp) * r * 0.9,
                      tipX - ddx * r * 0.3, tipY - ddy * r * 0.3);
    ctx.stroke();
    ctx.shadowBlur = 0;
}

// ── Character Select Screen ───────────────────────────────────
function drawCharSelect(){
    const t = performance.now() / 1000;
    // Background (reuse menu bg style)
    const sg = ctx.createLinearGradient(0, 0, 0, H);
    sg.addColorStop(0, '#020508'); sg.addColorStop(1, '#0c0815');
    ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H);

    // Stars
    ctx.save();
    for(let i = 0; i < (IS_MOBILE ? 25 : 70); i++){
        ctx.globalAlpha = (0.3 + Math.sin(t * 0.7 + i) * 0.28) * 0.7;
        ctx.fillStyle = '#f1f5f9';
        ctx.beginPath(); ctx.arc((Math.sin(i * 73.1) * 0.5 + 0.5) * W, (Math.cos(i * 37.3) * 0.5 + 0.5) * H * 0.72, 0.6, 0, PI2); ctx.fill();
    }
    ctx.restore();

    // Title
    ctx.save();
    ctx.textAlign = 'center';
    if(!IS_MOBILE){ ctx.shadowColor = '#a855f7'; ctx.shadowBlur = 24; }
    ctx.fillStyle = '#c084fc'; ctx.font = 'bold 32px Georgia,serif';
    ctx.fillText(T('charSelectTitle'), W / 2, 52);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#64748b'; ctx.font = '14px Georgia,serif';
    ctx.fillText(T('charSelectSub'), W / 2, 76);
    ctx.restore();

    // Character cards layout
    const cardCount = CHARACTERS.length;
    const cardW = IS_MOBILE ? 250 : 272;
    const cardH = IS_MOBILE ? 310 : 370;
    const gap = IS_MOBILE ? 14 : 22;
    const totalW = cardCount * cardW + (cardCount - 1) * gap;
    const startX = W / 2 - totalW / 2;
    const cardY = IS_MOBILE ? 94 : 108;

    for(let i = 0; i < CHARACTERS.length; i++){
        const ch = CHARACTERS[i];
        const cx = startX + i * (cardW + gap);
        const sel = i === selectedCharIdx;
        const hov = i === charSelectHov;

        // Card background
        ctx.save();
        if(sel && QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 24; }
        ctx.fillStyle = sel ? 'rgba(15,12,28,0.96)' : (hov ? 'rgba(12,10,24,0.90)' : 'rgba(8,8,18,0.82)');
        ctx.strokeStyle = sel ? ch.accentCol : (hov ? 'rgba(180,180,220,0.4)' : 'rgba(60,50,80,0.55)');
        ctx.lineWidth = sel ? 2 : 1;
        ctx.beginPath(); ctx.roundRect(cx, cardY, cardW, cardH, 12); ctx.fill(); ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.restore();

        // Portrait area
        const portY = cardY + (IS_MOBILE ? 82 : 98);
        const portR = IS_MOBILE ? 32 : 42;
        const portCX = cx + cardW / 2;

        // Portrait bg circle
        ctx.save();
        ctx.fillStyle = ch.auraCol;
        ctx.beginPath(); ctx.arc(portCX, portY, portR * 1.6, 0, PI2); ctx.fill();
        ctx.restore();

        drawCharPortrait(ch, portCX, portY, portR, t + i * 1.2);

        // Character name
        ctx.save();
        ctx.textAlign = 'center';
        if(sel && QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 12; }
        ctx.fillStyle = sel ? ch.accentCol : '#e2e8f0';
        ctx.font = `bold ${IS_MOBILE ? 15 : 18}px Georgia,serif`;
        ctx.fillText(`${ch.icon} ${ch.name}`, portCX, portY + portR + 26);
        ctx.shadowBlur = 0;

        // Description
        const descY = portY + portR + 44;
        ctx.fillStyle = '#94a3b8'; ctx.font = `${IS_MOBILE ? 9 : 11}px Georgia,serif`;
        // Word wrap description
        const words = ch.desc.split(' '), maxW2 = cardW - 24;
        let line = '', ly = descY;
        for(const w of words){
            const test = line + (line ? ' ' : '') + w;
            if(ctx.measureText(test).width > maxW2 && line){
                ctx.fillText(line, portCX, ly); line = w; ly += 16;
            } else line = test;
        }
        if(line) ctx.fillText(line, portCX, ly);

        // Stat bars
        const statY = descY + (IS_MOBILE ? 52 : 58);
        const statLabels = T('statLabels');
        const statVals = [ch.statHp, ch.statSpd, ch.statDmg, ch.statAtk];
        ctx.font = `${IS_MOBILE ? 9 : 10}px Georgia,serif`;
        for(let s = 0; s < 4; s++){
            const sy = statY + s * (IS_MOBILE ? 17 : 20);
            ctx.fillStyle = '#475569'; ctx.textAlign = 'left';
            ctx.fillText(statLabels[s], cx + 14, sy);
            ctx.fillStyle = sel ? ch.accentCol : '#94a3b8'; ctx.textAlign = 'right';
            ctx.fillText(statVals[s], cx + cardW - 12, sy);
        }

        ctx.restore();

        // Selected indicator
        if(sel){
            ctx.save();
            ctx.fillStyle = ch.accentCol; ctx.textAlign = 'center'; ctx.font = 'bold 11px Georgia,serif';
            if(QUALITY.shadowBlur){ ctx.shadowColor = ch.accentCol; ctx.shadowBlur = 10; }
            ctx.fillText(T('selected'), portCX, cardY + 18);
            ctx.restore();
        }
    }

    // Confirm button
    const btnY = cardY + cardH + 18;
    const sel2 = CHARACTERS[selectedCharIdx];
    ctx.save();
    if(QUALITY.shadowBlur){ ctx.shadowColor = sel2.accentCol; ctx.shadowBlur = 18; }
    ctx.fillStyle = 'rgba(12,9,22,0.95)';
    ctx.strokeStyle = sel2.accentCol; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(W / 2 - 155, btnY, 310, 52, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#e9d5ff'; ctx.font = 'bold 18px Georgia,serif'; ctx.textAlign = 'center';
    ctx.fillText(`${sel2.icon}  ${T('playAs')} ${sel2.name}  [Enter]`, W / 2, btnY + 33);
    ctx.shadowBlur = 0;

    // Back hint
    ctx.fillStyle = '#374151'; ctx.font = '13px Georgia,serif';
    ctx.fillText(IS_MOBILE ? T('charHintMobile') : T('charHintDesktop'), W / 2, btnY + 70);
    ctx.restore();

    drawVignette();
}

// ── Apply selected character stats to player ──────────────────
function applyCharStats(){
    const ch = getChar();
    player.maxHp = ch.hp + meta.hpBonus;
    player.hp    = player.maxHp;
    player.speed = ch.speed * (1 + meta.speedBonus / 100);
    player.damage = ch.damage + Math.floor(ch.damage * meta.dmgBonus / 100);
    player.atkSpd = ch.atkSpd;
    player.crit   = ch.crit || 0.05;
    player.regen  = ch.regen || 0;
    if(ch.shield){
        player.shieldMax = ch.shield;
        player.shield    = ch.shield;
    } else {
        player.shieldMax = 0;
        player.shield    = 0;
    }
    player.weapons = [ch.startWeapon];
}

// ============================================================
//  QUALITY SETTINGS
// ============================================================

const QUALITY = {
    maxParticles:  {high:600, mid:150, low:60}[Q],
    maxFloatTexts: {high:40,  mid:15,  low:8}[Q],
    maxAmbient:    {high:65,  mid:16,  low:8}[Q],
    shadowBlur:    {high:true,mid:false,low:false}[Q],
    particleSpark: {high:4,   mid:2,   low:1}[Q],
    bgCache:       true,
    xpTrail:       {high:true,mid:true,low:false}[Q],
    impactRings:   {high:true,mid:true,low:false}[Q],
    projTrails:    {high:true,mid:false,low:false}[Q],
    killStreak:    true,
    lowHpPulse:    true,
    levelFlash:    true,
    bossFlash:     {high:true,mid:true,low:false}[Q],
    // New: detail levels
    enemyOutlines: {high:true,mid:false,low:false}[Q],
    bgDetail:      {high:2,mid:1,low:0}[Q], // 0=flat, 1=marks, 2=full blades
    additiveFX:    {high:true,mid:true,low:false}[Q],
};

// ── LOD — dynamic quality reduction under load ──────────────
const LOD = {
    level: 0,    // 0=full, 1=reduced, 2=minimal
    timer: 0,
    update(dt, enemyCount){
        this.timer -= dt;
        if(this.timer > 0) return;
        this.timer = 1.5; // check every 1.5s
        const fps = fpsMonitor.avg;
        if(fps < 28 || enemyCount > 180)       this.level = 2;
        else if(fps < 42 || enemyCount > 100)   this.level = 1;
        else                                     this.level = 0;
    },
    // LOD-aware caps
    get maxPart(){ return [QUALITY.maxParticles, Math.floor(QUALITY.maxParticles*0.5), Math.floor(QUALITY.maxParticles*0.25)][this.level]; },
    get skipGlow(){ return this.level >= 2; },
    get simpleDraw(){ return this.level >= 1; },
};

// ── Cached vignette ──────────────────────────────────────────
let vigGrad = null;
function buildVigGrad(){
    vigGrad = ctx.createRadialGradient(W/2,H/2,H*0.24,W/2,H/2,H*0.8);
    vigGrad.addColorStop(0,'rgba(0,0,0,0)');
    vigGrad.addColorStop(0.7,'rgba(0,0,0,0.13)');
    vigGrad.addColorStop(1,'rgba(0,0,0,0.72)');
}
buildVigGrad();

// ============================================================
//  FPS MONITOR & ADAPTIVE QUALITY
// ============================================================
const fpsMonitor={samples:[],avg:60,lastCheck:0};
function updateFPS(now,dt){
    fpsMonitor.samples.push(1/Math.max(dt,0.001));
    if(fpsMonitor.samples.length>60) fpsMonitor.samples.shift();
    if(now-fpsMonitor.lastCheck>3000){
        fpsMonitor.lastCheck=now;
        fpsMonitor.avg=fpsMonitor.samples.reduce((a,b)=>a+b,0)/fpsMonitor.samples.length;
        // Auto-downgrade if sustained low FPS
        if(fpsMonitor.avg<35&&QUALITY.shadowBlur){
            QUALITY.shadowBlur=false;
            QUALITY.maxParticles=Math.max(60,Math.floor(QUALITY.maxParticles*0.55));
            QUALITY.maxAmbient =Math.max(10,Math.floor(QUALITY.maxAmbient*0.5));
            QUALITY.impactRings=false;
            QUALITY.projTrails =false;
        } else if(fpsMonitor.avg<45){
            QUALITY.maxParticles=Math.max(80,Math.floor(QUALITY.maxParticles*0.7));
            QUALITY.projTrails=false;
        }
    }
}
function drawFPS(){
    if(IS_YANDEX||!IS_MOBILE) return; // show only on mobile for testing
    ctx.save();ctx.font='10px monospace';
    ctx.fillStyle=fpsMonitor.avg<40?'#ef4444':fpsMonitor.avg<55?'#facc15':'#22c55e';
    ctx.textAlign='right';ctx.fillText(`${Math.round(fpsMonitor.avg)}fps`,W-6,H-6);ctx.restore();
}

// ============================================================
//  SPAWN WARNING (flicker circle before boss arrives)
// ============================================================
let spawnWarnings=[];
let pendingSpawns=[];

// ── Temporary effect system — replaces setTimeout for stat changes ──
// Safe: runs inside game loop, auto-cleaned on game restart
const tempEffects=[];
function addTempEffect(id,duration,onApply,onRemove){
    // Remove any existing effect with same id first
    const existing=tempEffects.findIndex(e=>e.id===id);
    if(existing!==-1){ tempEffects[existing].onRemove?.(); tempEffects.splice(existing,1); }
    onApply();
    tempEffects.push({id,timer:duration,onRemove});
}
function updateTempEffects(dt){
    for(let i=tempEffects.length-1;i>=0;i--){
        tempEffects[i].timer-=dt;
        if(tempEffects[i].timer<=0){
            tempEffects[i].onRemove?.();
            tempEffects.splice(i,1);
        }
    }
}
function addSpawnWarning(x,y,isBoss){
    spawnWarnings.push({x,y,timer:1.2,maxTimer:1.2,isBoss,phase:0});
}
function updateSpawnWarnings(dt){
    for(let i=spawnWarnings.length-1;i>=0;i--){
        spawnWarnings[i].timer-=dt;spawnWarnings[i].phase+=dt*12;
        if(spawnWarnings[i].timer<=0) spawnWarnings.splice(i,1);
    }
}
function drawSpawnWarnings(){
    ctx.save();
    for(const w of spawnWarnings){
        if(!onScreen(w.x,w.y,80)) continue;
        const s=toScr(w.x,w.y);
        const t=w.timer/w.maxTimer; // 1→0
        const flicker=0.5+Math.sin(w.phase)*0.5;
        const col=w.isBoss?'#ef4444':'#facc15';
        ctx.globalAlpha=(1-t)*0.7*flicker;
        ctx.strokeStyle=col;ctx.lineWidth=w.isBoss?4:2.5;
        if(QUALITY.shadowBlur){ctx.shadowColor=col;ctx.shadowBlur=16;}
        const r=(w.isBoss?55:36)*(2-t); // shrinking in
        ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.stroke();
        // Inner X mark
        ctx.lineWidth=w.isBoss?2:1.5;ctx.globalAlpha=(1-t)*0.5*flicker;
        const xs=r*0.5;
        ctx.beginPath();ctx.moveTo(s.x-xs,s.y-xs);ctx.lineTo(s.x+xs,s.y+xs);ctx.stroke();
        ctx.beginPath();ctx.moveTo(s.x+xs,s.y-xs);ctx.lineTo(s.x-xs,s.y+xs);ctx.stroke();
    }
    ctx.restore();
}
// ============================================================
// roundRect polyfill — required for iOS Safari < 15.4, old browsers
// Without this, ctx.roundRect() throws TypeError and crashes the loop
if(!CanvasRenderingContext2D.prototype.roundRect){
    CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h,r){
        if(!r)r=0;
        const tl=typeof r==='number'?r:(r.topLeft||r['top-left']||0);
        const tr=typeof r==='number'?r:(r.topRight||r['top-right']||0);
        const br=typeof r==='number'?r:(r.bottomRight||r['bottom-right']||0);
        const bl=typeof r==='number'?r:(r.bottomLeft||r['bottom-left']||0);
        this.moveTo(x+tl,y);
        this.lineTo(x+w-tr,y);   if(tr)this.arcTo(x+w,y,x+w,y+tr,tr); else this.lineTo(x+w,y);
        this.lineTo(x+w,y+h-br); if(br)this.arcTo(x+w,y+h,x+w-br,y+h,br); else this.lineTo(x+w,y+h);
        this.lineTo(x+bl,y+h);   if(bl)this.arcTo(x,y+h,x,y+h-bl,bl); else this.lineTo(x,y+h);
        this.lineTo(x,y+tl);     if(tl)this.arcTo(x,y,x+tl,y,tl); else this.lineTo(x,y);
        this.closePath();
        return this;
    };
}

// Safe arc — never throws on zero/negative radius
function safeArc(x,y,r,a0,a1){if(r>0.01)ctx.arc(x,y,r,a0,a1);}

// Particle helper — always respects QUALITY.maxParticles cap
function addParticle(p){ if(particles.length<LOD.maxPart) particles.push(p); }
function addParticles(arr){ for(const p of arr){ if(particles.length>=LOD.maxPart) break; particles.push(p); } }

const dist    = (a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const ang     = (a,b)=>Math.atan2(b.y-a.y,b.x-a.x);
const rand    = (a,b)=>Math.random()*(b-a)+a;
const randInt = (a,b)=>Math.floor(rand(a,b+1));
const clamp   = (v,lo,hi)=>v<lo?lo:v>hi?hi:v;
const lerp    = (a,b,t)=>a+(b-a)*t;
const choose  = arr=>arr[randInt(0,arr.length-1)];
const tileHash= (tx,ty)=>(Math.abs(tx*374761393^ty*668265263)%1000)/1000;

// ============================================================
//  AUDIO  (Web Audio API — no external files)
// ============================================================
let audioCtx=null, masterGain=null, audioReady=false, audioMuted=false;
const SND_CD={};

function initAudio(){
    if(audioReady) return;
    try{
        audioCtx = new(window.AudioContext||window.webkitAudioContext)();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.35;
        masterGain.connect(audioCtx.destination);
        startBGM();
        audioReady=true;
    }catch(e){}
}

function startBGM(){
    if(!audioCtx) return;
    // Layer 1: sub drone
    const mk=(type,freq,gain,lp)=>{
        const o=audioCtx.createOscillator(), g=audioCtx.createGain();
        o.type=type; o.frequency.value=freq; g.gain.value=gain;
        if(lp){const f=audioCtx.createBiquadFilter();f.type='lowpass';f.frequency.value=lp;o.connect(f);f.connect(g);}
        else o.connect(g);
        g.connect(masterGain); o.start(); return o;
    };
    mk('sawtooth',55,0.028,240); mk('triangle',82.4,0.014); mk('sine',110,0.009);
    // Tremolo
    const d3=mk('sine',165,0), g3=audioCtx.createGain();
    g3.gain.value=0.011;
    const lfo=audioCtx.createOscillator(), lfoG=audioCtx.createGain();
    lfo.type='sine'; lfo.frequency.value=0.38; lfoG.gain.value=0.011;
    lfo.connect(lfoG); lfoG.connect(g3.gain);
    d3.connect(g3); g3.connect(masterGain); lfo.start();
    // Drum loop
    scheduleDrum();
}

function scheduleDrum(){
    if(!audioCtx) return;
    const t=audioCtx.currentTime;
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.type='sine'; o.frequency.setValueAtTime(120,t); o.frequency.exponentialRampToValueAtTime(35,t+0.5);
    g.gain.setValueAtTime(0.065,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.55);
    o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+0.6);
    setTimeout(scheduleDrum, 1700+rand(0,800));
}

function snd(type,force=false){
    if(!audioCtx||audioMuted) return;
    const now=performance.now();
    if(!force&&SND_CD[type]&&now-SND_CD[type]<60) return;
    SND_CD[type]=now;
    const t=audioCtx.currentTime;
    const tone=(type,freq,vol,dur,ramp)=>{
        const o=audioCtx.createOscillator(),g=audioCtx.createGain();
        o.type=type; o.frequency.setValueAtTime(freq,t);
        if(ramp) o.frequency.exponentialRampToValueAtTime(ramp,t+dur);
        g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(0.001,t+dur);
        o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+dur+0.01);
    };
    const noise=(vol,dur)=>{
        const buf=audioCtx.createBuffer(1,Math.ceil(audioCtx.sampleRate*dur),audioCtx.sampleRate);
        const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*(1-i/d.length);
        const s=audioCtx.createBufferSource(),g=audioCtx.createGain();
        s.buffer=buf; g.gain.value=vol; s.connect(g); g.connect(masterGain); s.start(t);
    };
    try{
        switch(type){
            case 'shoot':   tone('sine',720,0.08,0.09,360); break;
            case 'hit':     noise(0.18,0.045); break;
            case 'death':   tone('sawtooth',280,0.09,0.3,60); break;
            case 'xp':      tone('sine',700,0.05,0.07,1000); break;
            case 'levelup': [440,554,659,880].forEach((f,i)=>setTimeout(()=>tone('sine',f,0.12,0.2),i*80)); break;
            case 'dash':    tone('triangle',340,0.09,0.13,680); break;
            case 'boss':    [60,50,80].forEach((f,i)=>setTimeout(()=>tone('sawtooth',f,0.13,1.2),i*100)); break;
            case 'chest':   [523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone('triangle',f,0.1,0.17),i*65)); break;
            case 'altar':   [220,330,440].forEach((f,i)=>setTimeout(()=>tone('sine',f,0.1,0.4,f*1.5),i*100)); break;
            case 'event':   [110,138,165].forEach((f,i)=>setTimeout(()=>tone('sawtooth',f,0.1,1.5),i*75)); break;
            case 'nova':    tone('sawtooth',190,0.12,0.5,38); noise(0.1,0.06); break;
            case 'rift':    tone('sine',58,0.14,1.1,28); break;
            case 'soul':    [440,330,220].forEach((f,i)=>setTimeout(()=>tone('sine',f,0.07,0.15),i*60)); break;
        }
    }catch(e){}
}

function toggleMute(){
    audioMuted=!audioMuted;
    if(masterGain) masterGain.gain.value=audioMuted?0:0.35;
}

// ============================================================
//  INPUT
// ============================================================
// keys: use e.code (layout-independent) for movement + action keys
// e.code = 'KeyW', 'KeyA', 'Space' etc. — same on any keyboard layout
const keys={};
document.addEventListener('keydown',e=>{
    keys[e.code]=true;                    // code-based (layout-independent)
    keys[e.key.toLowerCase()]=true;       // key-based fallback for special keys
    if(e.code==='Space') e.preventDefault();
    initAudio();
});
document.addEventListener('keyup',e=>{
    keys[e.code]=false;
    keys[e.key.toLowerCase()]=false;
});

// ============================================================
//  MOBILE CONTROLS
// ============================================================
const JOY={cx:100,cy:H-100,r:55, active:false,id:null,dx:0,dy:0,kx:0,ky:0};
const DASH_BTN={cx:W-90,cy:H-90,r:44,active:false,id:null};
let isMobile=('ontouchstart' in window);

function updateJoyRect(){
    const rect=canvas.getBoundingClientRect();
    const scaleX=W/rect.width, scaleY=H/rect.height;
    return {scaleX,scaleY,left:rect.left,top:rect.top};
}

canvas.addEventListener('touchstart',e=>{
    e.preventDefault(); initAudio();
    const {scaleX,scaleY,left,top}=updateJoyRect();
    for(const t of e.changedTouches){
        const tx=(t.clientX-left)*scaleX, ty=(t.clientY-top)*scaleY;

        // Non-playing states: simulate click instead of joystick
        if(gameState!=='playing'){
            handleTap(tx,ty);
            return;
        }

        // Playing state: pause button (mobile)
        if(IS_MOBILE && tx>=W-80 && tx<=W-44 && ty>=8 && ty<=36){
            gameState='paused'; return;
        }
        // Playing state: mute button check (enlarged for mobile)
        if(IS_MOBILE && tx>=W-80 && ty>=H-50){
            toggleMute(); return;
        }

        if(!DASH_BTN.active&&Math.hypot(tx-DASH_BTN.cx,ty-DASH_BTN.cy)<70){
            DASH_BTN.active=true; DASH_BTN.id=t.identifier;
        } else if(!JOY.active&&tx<W*0.5){
            JOY.active=true; JOY.id=t.identifier; JOY.cx=tx; JOY.cy=ty; JOY.dx=0; JOY.dy=0; JOY.kx=tx; JOY.ky=ty;
        }
    }
},{passive:false});

// Centralized tap handler for all non-playing states
function handleTap(mx,my){
    if(gameState==='upgrade'){
        // Tap on upgrade cards
        const cardW=Math.min(520,W-60),cardX=W/2-cardW/2;
        for(let i=0;i<upChoices.length;i++){
            const by=112+i*126;
            if(mx>=cardX&&mx<=cardX+cardW&&my>=by&&my<=by+118){ selectUpgrade(i); return; }
        }
        return;
    }
    if(gameState==='menu'){
        // Start game button
        if(mx>=W/2-158&&mx<=W/2+158&&my>=H/2-12&&my<=H/2+40){ gameState='charselect'; return; }
        // Meta button
        if(mx>=W/2-118&&mx<=W/2+118&&my>=H/2+50&&my<=H/2+88){ gameState='meta'; return; }
        // Leaderboard button
        if(mx>=W/2-118&&mx<=W/2+118&&my>=H/2+96&&my<=H/2+132){ gameState='leaderboard'; return; }
        // Tap anywhere else = charselect
        gameState='charselect'; return;
    }
    if(gameState==='charselect'){
        const cardW2=IS_MOBILE?250:272,gap2=IS_MOBILE?14:22,cardH2=IS_MOBILE?310:370,cardY2=IS_MOBILE?94:108;
        const totalW2=CHARACTERS.length*cardW2+(CHARACTERS.length-1)*gap2;
        const startX2=W/2-totalW2/2;
        for(let i=0;i<CHARACTERS.length;i++){
            const cx2=startX2+i*(cardW2+gap2);
            if(mx>=cx2&&mx<=cx2+cardW2&&my>=cardY2&&my<=cardY2+cardH2){
                if(selectedCharIdx===i){ startGame(); return; } // double-tap selected = start
                selectedCharIdx=i; return;
            }
        }
        const btnY2=cardY2+cardH2+18;
        if(mx>=W/2-155&&mx<=W/2+155&&my>=btnY2&&my<=btnY2+52){ startGame(); return; }
        return;
    }
    if(gameState==='meta'){
        // Back button (tap bottom area)
        if(my>=H-50){ gameState='menu'; return; }
        // Upgrade cards
        const cardW=340,gapX=18,startX=W/2-cardW-gapX/2;
        for(let i=0;i<META_UPS.length;i++){
            const bx=i%2===0?startX:startX+cardW+gapX, by=110+Math.floor(i/2)*92;
            if(mx>=bx&&mx<=bx+cardW&&my>=by&&my<=by+82){
                const u=META_UPS[i],cur=Math.floor((meta[u.key]||0)/u.per);
                if(meta.crystals>=u.cost&&cur<u.max){meta.crystals-=u.cost;meta[u.key]=(meta[u.key]||0)+u.per;saveMeta();}
                return;
            }
        }
        return;
    }
    if(gameState==='gameover'){
        showInterstitialAd(()=>{ gameState='menu'; }); return;
    }
    if(gameState==='leaderboard'){
        gameState='menu'; return;
    }
    if(gameState==='paused'){
        // Tap to resume
        gameState='playing'; gameplayStart(); return;
    }
}

canvas.addEventListener('touchmove',e=>{
    e.preventDefault();
    const {scaleX,scaleY,left,top}=updateJoyRect();
    for(const t of e.changedTouches){
        if(t.identifier===JOY.id){
            const tx=(t.clientX-left)*scaleX, ty=(t.clientY-top)*scaleY;
            const ddx=tx-JOY.cx, ddy=ty-JOY.cy;
            const len=Math.max(1,Math.hypot(ddx,ddy));
            const cap=Math.min(len,JOY.r);
            JOY.dx=(ddx/len)*(cap/JOY.r); JOY.dy=(ddy/len)*(cap/JOY.r);
            JOY.kx=JOY.cx+JOY.dx*JOY.r; JOY.ky=JOY.cy+JOY.dy*JOY.r;
        }
    }
},{passive:false});

canvas.addEventListener('touchend',e=>{
    e.preventDefault();
    for(const t of e.changedTouches){
        if(t.identifier===JOY.id){JOY.active=false;JOY.dx=0;JOY.dy=0;}
        if(t.identifier===DASH_BTN.id){DASH_BTN.active=false;DASH_BTN.id=null;}
    }
},{passive:false});

function drawMobileControls(){
    if(!isMobile&&!JOY.active&&!DASH_BTN.active) return;
    ctx.save();
    // Joystick base — outer ring
    ctx.globalAlpha=0.15; ctx.fillStyle='#a855f7';
    ctx.beginPath(); ctx.arc(JOY.cx,JOY.cy,JOY.r,0,PI2); ctx.fill();
    // Inner ring
    ctx.strokeStyle='#c084fc'; ctx.lineWidth=2; ctx.globalAlpha=0.35; ctx.stroke();
    // Directional tick marks
    ctx.lineWidth=1.5;ctx.globalAlpha=0.2;
    for(let i=0;i<8;i++){const a=i*PI/4;const ix=JOY.cx+Math.cos(a)*JOY.r*0.75,iy=JOY.cy+Math.sin(a)*JOY.r*0.75;
    const ox=JOY.cx+Math.cos(a)*JOY.r*0.92,oy=JOY.cy+Math.sin(a)*JOY.r*0.92;
    ctx.beginPath();ctx.moveTo(ix,iy);ctx.lineTo(ox,oy);ctx.stroke();}
    // Knob with gradient appearance
    const kx=JOY.kx||JOY.cx, ky=JOY.ky||JOY.cy;
    ctx.globalAlpha=0.5; ctx.fillStyle='#c084fc';
    ctx.beginPath(); ctx.arc(kx,ky,JOY.r*0.38,0,PI2); ctx.fill();
    ctx.globalAlpha=0.7; ctx.fillStyle='#e9d5ff';
    ctx.beginPath(); ctx.arc(kx,ky,JOY.r*0.2,0,PI2); ctx.fill();
    // Active direction line
    if(JOY.active){ctx.globalAlpha=0.25;ctx.strokeStyle='#e9d5ff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(JOY.cx,JOY.cy);ctx.lineTo(kx,ky);ctx.stroke();}

    // Dash button — hexagonal shape with pulse
    const dashPulse=DASH_BTN.active?1:(player.dashCD<=0?0.85+Math.sin(gameTime*4)*0.15:0.5);
    ctx.globalAlpha=DASH_BTN.active?0.65:0.3*dashPulse;
    ctx.fillStyle=DASH_BTN.active?'#c084fc':(player.dashCD>0?'#374151':'#7c3aed');
    ctx.beginPath();
    for(let i=0;i<6;i++){const a=i*PI/3-PI/6;ctx.lineTo(DASH_BTN.cx+Math.cos(a)*DASH_BTN.r,DASH_BTN.cy+Math.sin(a)*DASH_BTN.r);}
    ctx.closePath();ctx.fill();
    ctx.strokeStyle='#e9d5ff'; ctx.lineWidth=2; ctx.globalAlpha=0.4*dashPulse; ctx.stroke();
    // Dash label
    ctx.fillStyle=player.dashCD>0?'#94a3b8':'#fff'; ctx.font='bold 12px Georgia,serif'; ctx.textAlign='center';
    ctx.globalAlpha=0.85;
    if(player.dashCD>0) ctx.fillText(player.dashCD.toFixed(1),DASH_BTN.cx,DASH_BTN.cy+5);
    else ctx.fillText(T('dash').toUpperCase(),DASH_BTN.cx,DASH_BTN.cy+4);
    ctx.restore();
}

// ============================================================
//  SCREEN SHAKE
// ============================================================
const shake={x:0,y:0,i:0,decay:0.88};
function addShake(i){shake.i=Math.min(shake.i+i,22);}
function updateShake(){
    if(shake.i>0.5){shake.x=rand(-shake.i,shake.i);shake.y=rand(-shake.i,shake.i);shake.i*=shake.decay;}
    else{shake.x=0;shake.y=0;shake.i=0;}
}

// ============================================================
//  CAMERA
// ============================================================
const camera={x:0,y:0};
function updateCamera(){camera.x=player.x-W/2+shake.x;camera.y=player.y-H/2+shake.y;}
function toScr(wx,wy){return{x:wx-camera.x,y:wy-camera.y};}
function onScreen(wx,wy,m=0){const sx=wx-camera.x,sy=wy-camera.y;return sx>-m&&sx<W+m&&sy>-m&&sy<H+m;}

// ============================================================
//  CHAPTER SYSTEM
// ============================================================
const CHAPTERS=[
    {id:0,get name(){return T('ch0');},   get sub(){return T('ch0sub');},
     fog:'rgba(40,15,80,',  ground:[22,32,52], ambient:'#6d28d9', fgRGB:'40,20,80',
     enemyPool:['goblin','goblin','bat','skeleton'],
     elitePool:['shadowBat','eliteOrc'], unlockTime:0},
    {id:1,get name(){return T('ch1');},get sub(){return T('ch1sub');},
     fog:'rgba(55,15,90,',  ground:[18,14,32], ambient:'#7c3aed', fgRGB:'60,20,90',
     enemyPool:['skeleton','skeleton','bat','spider'],
     elitePool:['fireGoblin','shadowBat'], unlockTime:180},
    {id:2,get name(){return T('ch2');},get sub(){return T('ch2sub');},
     fog:'rgba(12,60,28,',  ground:[10,24,14], ambient:'#16a34a', fgRGB:'20,70,35',
     enemyPool:['skeleton','skeleton','spider','wraith'],
     elitePool:['eliteOrc','fireGoblin'], unlockTime:360},
    {id:3,get name(){return T('ch3');},       get sub(){return T('ch3sub');},
     fog:'rgba(110,14,8,', ground:[36,9,9],   ambient:'#dc2626', fgRGB:'120,20,10',
     enemyPool:['orc','orc','fireGoblin','bat'],
     elitePool:['eliteOrc','fireGoblin'], unlockTime:540},
];
let chapterIdx=0;
let chTrans={on:false,timer:0,name:'',col:''};

function getCh(){return CHAPTERS[chapterIdx];}
function updateChapter(){
    let ni=0;
    for(let i=CHAPTERS.length-1;i>=0;i--){if(gameTime>=CHAPTERS[i].unlockTime){ni=i;break;}}
    if(ni!==chapterIdx){
        chapterIdx=ni;
        const ch=CHAPTERS[ni];
        chTrans={on:true,timer:3.5,name:ch.name,sub:ch.sub,col:ch.ambient};
        floatText(player.x,player.y-80,ch.name,ch.ambient,30,4);
        snd('event',true); addShake(6);
    }
}

// ============================================================
//  WORLD EVENTS
// ============================================================
const WE_DEFS=[
    {id:'bloodMoon', get name(){return T('evBloodMoon');},    get desc(){return T('evBloodMoonDesc');},    col:'#ef4444',
     dur:30, apply(){wev.spdMult=1.45;wev.xpMult=2.0;}, remove(){wev.spdMult=1;wev.xpMult=1;}},
    {id:'demonWave', get name(){return T('evDemonWave');}, get desc(){return T('evDemonWaveDesc');},    col:'#dc2626',
     dur:0,  apply(){for(let i=0;i<14;i++)spawnEnemy(choose(['orc','eliteOrc','fireGoblin','wraith']));}, remove(){}},
    {id:'frozenTime',get name(){return T('evFrozenTime');},   get desc(){return T('evFrozenTimeDesc');},  col:'#67e8f9',
     dur:20, apply(){wev.spdMult=0.28;}, remove(){wev.spdMult=1;}},
    {id:'darkStorm', get name(){return T('evDarkStorm');},        get desc(){return T('evDarkStormDesc');},  col:'#fbbf24',
     dur:18, apply(){wev.storm=true;wev.sTimer=0;}, remove(){wev.storm=false;}},
    {id:'xpSurge',   get name(){return LANG==='ru'?'✨ Прилив силы':'✨ Power Surge';}, get desc(){return LANG==='ru'?'×3 XP на 20 секунд':'×3 XP for 20 seconds';}, col:'#a855f7',
     dur:20, apply(){wev.xpMult=3.0;}, remove(){wev.xpMult=1;}},
    {id:'cursedGround',get name(){return T('evCursedGround');}, get desc(){return T('evCursedGroundDesc');}, col:'#22c55e',
     dur:25,
     apply(){
        wev.xpMult=1.5;
        // Spawn poison hazards around player
        for(let i=0;i<6;i++){const a=rand(0,PI2),d=rand(120,280);
            hazards.push({x:player.x+Math.cos(a)*d,y:player.y+Math.sin(a)*d,
                radius:55,maxR:55,growSpd:0,dmg:1,life:25,col:'#22c55e',poison:true});}
     },
     remove(){wev.xpMult=1;}},
];
const wev={active:null,timer:0,nextAt:90,spdMult:1,xpMult:1,storm:false,sTimer:0};
let strikeFX=[], evBanner=null;

function updateWorldEvents(dt){
    wev.nextAt-=dt;
    if(wev.nextAt<=0&&!wev.active){
        const ev=choose(WE_DEFS);
        wev.active=ev; wev.timer=ev.dur; ev.apply();
        evBanner={text:ev.name,desc:ev.desc,col:ev.col,life:3.5};
        floatText(player.x,player.y-90,ev.name,ev.col,32,3);
        snd('event',true); addShake(5);
        wev.nextAt=100+rand(0,60);
    }
    if(wev.active&&wev.timer>0){
        wev.timer-=dt;
        if(wev.timer<=0){wev.active.remove();wev.active=null;}
        if(wev.storm&&enemies.length>0){
            wev.sTimer-=dt;
            if(wev.sTimer<=0){
                wev.sTimer=0.65+rand(0,0.4);
                const t=choose(enemies);
                damageEnemy(t,Math.floor(player.damage*1.5+40),true);
                strikeFX.push({x:t.x,y:t.y,life:0.5});
                addShake(3);
            }
        }
    }
    for(let i=strikeFX.length-1;i>=0;i--){strikeFX[i].life-=dt;if(strikeFX[i].life<=0)strikeFX.splice(i,1);}
    if(evBanner){evBanner.life-=dt;if(evBanner.life<=0)evBanner=null;}
    if(chTrans.on){chTrans.timer-=dt;if(chTrans.timer<=0)chTrans.on=false;}
}

function drawLightningStrikes(){
    for(const ls of strikeFX){
        if(!onScreen(ls.x,ls.y,130)) continue;
        const s=toScr(ls.x,ls.y);
        ctx.save(); ctx.globalAlpha=clamp(ls.life*2,0,1);
        ctx.strokeStyle='#fbbf24'; ctx.shadowColor='#fbbf24'; ctx.shadowBlur=28; ctx.lineWidth=3;
        let cx2=s.x, cy2=s.y-200;
        ctx.beginPath(); ctx.moveTo(cx2,cy2);
        for(let k=0;k<8;k++){cx2+=rand(-18,18);cy2+=25;ctx.lineTo(cx2,cy2);}
        ctx.lineTo(s.x,s.y); ctx.stroke();
        ctx.fillStyle='rgba(251,191,36,0.3)';
        ctx.beginPath(); ctx.arc(s.x,s.y,40,0,PI2); ctx.fill();
        ctx.restore();
    }
}

// ============================================================
//  LEADERBOARD
// ============================================================
const LB_KEY='darkSurvivorLB_v2';
function getLB(){try{return JSON.parse(localStorage.getItem(LB_KEY)||'[]');}catch{return[];}}
function saveLB(t,k,lv){
    const rows=getLB();
    rows.push({time:t,kills:k,level:lv,date:new Date().toLocaleDateString('ru')});
    rows.sort((a,b)=>b.time-a.time);
    try{localStorage.setItem(LB_KEY,JSON.stringify(rows.slice(0,10)));}catch{}
}

// ============================================================
//  META PROGRESSION
// ============================================================
const META_DEF={crystals:0,dmgBonus:0,xpBonus:0,hpBonus:0,speedBonus:0,
                totalKills:0,totalGames:0,bestTime:0,maxLevel:0,bossKills:0,achievements:{}};
let meta=loadMetaLocal();
// Synchronous local read (cloud loaded async in initYSDK → loadCloudSave)
function loadMetaLocal(){try{const s=localStorage.getItem('darkSurvivorMeta2');return s?{...META_DEF,...JSON.parse(s)}:{...META_DEF};}catch{return{...META_DEF};}}
// saveMeta = cloud + localStorage (async, fire-and-forget)
function saveMeta(){ saveCloudMeta(); }

const META_UPS=[
    {id:'dmg',get name(){return T('metaDmg');},      cost:10,max:20,key:'dmgBonus', per:5},
    {id:'xp', get name(){return T('metaXp');},       cost:8, max:20,key:'xpBonus',  per:10},
    {id:'hp', get name(){return T('metaHp');},        cost:12,max:20,key:'hpBonus',  per:10},
    {id:'spd',get name(){return T('metaSpd');},  cost:10,max:15,key:'speedBonus',per:3},
];

const ACHIEVE=[
    {id:'k100',  get name(){return T('achK100');},  get desc(){return T('achK100d');},  check:()=>meta.totalKills>=100},
    {id:'k1000', get name(){return T('achK1000');}, get desc(){return T('achK1000d');}, check:()=>meta.totalKills>=1000},
    {id:'k5000', get name(){return T('achK5000');}, get desc(){return T('achK5000d');}, check:()=>meta.totalKills>=5000},
    {id:'s5',    get name(){return T('achS5');},    get desc(){return T('achS5d');},    check:()=>meta.bestTime>=300},
    {id:'s10',   get name(){return T('achS10');},   get desc(){return T('achS10d');},   check:()=>meta.bestTime>=600},
    {id:'s15',   get name(){return T('achS15');},   get desc(){return T('achS15d');},   check:()=>meta.bestTime>=900},
    {id:'lv10',  get name(){return T('achLv10');},  get desc(){return T('achLv10d');},  check:()=>meta.maxLevel>=10},
    {id:'lv20',  get name(){return T('achLv20');},  get desc(){return T('achLv20d');},  check:()=>meta.maxLevel>=20},
    {id:'b1',    get name(){return T('achB1');},    get desc(){return T('achB1d');},    check:()=>meta.bossKills>=1},
    {id:'b5',    get name(){return T('achB5');},    get desc(){return T('achB5d');},    check:()=>meta.bossKills>=5},
    {id:'g10',   get name(){return T('achG10');},   get desc(){return T('achG10d');},   check:()=>meta.totalGames>=10},
    {id:'c100',  get name(){return T('achC100');},  get desc(){return T('achC100d');},  check:()=>meta.crystals>=100},
    {id:'lv30',  get name(){return T('achLv30');},  get desc(){return T('achLv30d');},  check:()=>meta.maxLevel>=30},
    {id:'s20',   get name(){return T('achS20');},   get desc(){return T('achS20d');},   check:()=>meta.bestTime>=1200},
];
let achPopups=[];
function checkAchieve(){
    for(const a of ACHIEVE){
        if(!meta.achievements[a.id]&&a.check()){
            meta.achievements[a.id]=true; meta.crystals+=5;
            achPopups.push({text:a.name,desc:a.desc,life:3.5});
            saveMeta();
        }
    }
}

// ============================================================
//  MAP OBJECTS
// ============================================================
let mapObjs=[];

const RARITY_ROLL=()=>{const r=Math.random();return r<0.05?'legendary':r<0.3?'rare':'common';};
const RARITY_COLOR={common:{box:'#78350f',lock:'#facc15',glow:'#b45309',label:''},
                    rare:  {box:'#1e3a8a',lock:'#60a5fa',glow:'#3b82f6',get label(){return T('rarityRare');}},
                    legendary:{box:'#4c1d95',lock:'#d946ef',glow:'#a855f7',get label(){return T('rarityLegendary');}}};

const OBJ_DEF={
    rock:      {r:24,interact:false},
    rock_sm:   {r:14,interact:false},
    ruin:      {r:30,interact:false},
    crystal:   {r:12,interact:true,
        act(o){const xp=30+player.level*5;giveXp(xp);snd('xp');floatText(o.x,o.y-22,`+${xp} XP`,COL.xp,22,1);}},
    chest:     {r:16,interact:true,
        act(o){
            snd('chest',true);
            const rar=o.rarity||'common';
            if(rar==='legendary'){
                for(let i=0;i<22;i++) addParticle({x:o.x,y:o.y,vx:rand(-220,220),vy:rand(-220,220),life:rand(0.5,1.2),col:choose(['#a855f7','#facc15','#e879f9','#fff']),r:rand(3,9),type:'spark'});
                addShake(7); showUpgrade(2);
            } else showUpgrade(rar==='rare'?1.5:1);
            const rc=RARITY_COLOR[rar];
            floatText(o.x,o.y-26,rar==='common'?T('chest'):`${rc.label} ${T('chest')}`,rc.glow,22,1.5);
        }},
    altar:     {r:20,interact:true,
        act(o){player.buffTimer=10;player.buffMult=1.5;snd('altar',true);
            floatText(o.x,o.y-22,T('darkPower'),COL.magic,20,2);}},
    trap:      {r:18,interact:false,trap:true},
    // New objects
    manaPool:  {r:18,interact:true,
        act(o){
            const heal=Math.floor(player.maxHp*0.35);
            player.hp=Math.min(player.hp+heal,player.maxHp);
            // Loop-safe: addTempEffect tracks timer in-game, auto-reverts on death/restart
            addTempEffect('manaRegen',8,
                ()=>{ player.regen+=2; },
                ()=>{ player.regen=Math.max(0,player.regen-2); }
            );
            snd('altar',true);
            floatText(o.x,o.y-22,`💧 +${heal} ${T('hpRegen')}`,COL.ice,20,2);
            for(let i=0;i<12;i++) addParticle({x:o.x,y:o.y,vx:rand(-80,80),vy:rand(-120,-20),life:rand(0.6,1.4),col:COL.ice,r:rand(3,7),type:'flash'});
        }},
    bonePile:  {r:16,interact:true,
        act(o){
            addTempEffect('bonePierce',15,
                ()=>{ player.pierce+=3; },
                ()=>{ player.pierce=Math.max(0,player.pierce-3); }
            );
            snd('chest',true);
            floatText(o.x,o.y-22,`💀 +3 ${T('bonePierce')} (15s)`,'#9ca3af',20,2);
        }},
    rageAltar: {r:20,interact:true,
        act(o){
            player.buffTimer=8;player.buffMult=2.0;
            // Track speed change safely in game loop — no setTimeout
            addTempEffect('rageSpeed',8,
                ()=>{ player.speed*=0.7; },
                ()=>{ player.speed/=0.7; }
            );
            addShake(6);snd('altar',true);
            floatText(o.x,o.y-22,T('rageAltar'),'#ef4444',24,2.5);
            for(let i=0;i<16;i++) addParticle({x:o.x,y:o.y,vx:rand(-150,150),vy:rand(-150,150),life:rand(0.5,1.0),col:'#ef4444',r:rand(4,10),type:'nova'});
        }},
};

function genMap(){
    mapObjs=[];
    const types=['rock','rock','rock','rock_sm','rock_sm','rock_sm','ruin','ruin','ruin',
                 'crystal','crystal','crystal','crystal',
                 'chest','chest','chest',
                 'altar','trap','trap',
                 'manaPool','manaPool','bonePile','bonePile','rageAltar'];
    const cnt=130, ctr=WORLD.w/2;
    for(let i=0;i<cnt;i++){
        let x,y,att=0;
        do{x=rand(100,WORLD.w-100);y=rand(100,WORLD.h-100);att++;}
        while(Math.hypot(x-ctr,y-ctr)<200&&att<20);
        const tp=choose(types), df=OBJ_DEF[tp];
        const o={x,y,type:tp,r:df.r,alive:true,respawn:0};
        if(tp==='chest') o.rarity=RARITY_ROLL();
        mapObjs.push(o);
    }
}

function updateMapObjs(dt){
    for(const o of mapObjs){
        if(!o.alive){o.respawn-=dt;if(o.respawn<=0)o.alive=true;continue;}
        const df=OBJ_DEF[o.type];
        if(df.trap) for(const e of enemies) if(dist(o,e)<o.r+e.radius){e.hp-=2;e.hitFlash=0.05;}
        if(df.interact&&dist(o,player)<o.r+player.radius+12){df.act(o);o.alive=false;o.respawn=30+rand(0,30);}
    }
}

function drawMapObjs(){
    for(const o of mapObjs){
        if(!o.alive||!onScreen(o.x,o.y,90)) continue;
        const s=toScr(o.x,o.y), r=o.r;
        ctx.save();

        // ── MOBILE FAST PATH: distinctive shapes ─────────────────
        if(IS_MOBILE){
            switch(o.type){
            case 'rock': case 'rock_sm':
                ctx.fillStyle='rgba(0,0,0,0.2)';ctx.beginPath();ctx.ellipse(s.x+1,s.y+r*0.5,r*0.7,r*0.15,0,0,PI2);ctx.fill();
                ctx.fillStyle='#2d3f5a';ctx.beginPath();
                ctx.moveTo(s.x-r*0.8,s.y+r*0.3);ctx.lineTo(s.x-r*0.4,s.y-r*0.7);ctx.lineTo(s.x+r*0.3,s.y-r*0.8);ctx.lineTo(s.x+r*0.7,s.y);ctx.lineTo(s.x+r*0.5,s.y+r*0.4);ctx.closePath();ctx.fill();
                break;
            case 'ruin':
                ctx.fillStyle='#2a2520';ctx.fillRect(s.x-r*0.4,s.y-r*0.7,r*0.8,r*1.2);
                ctx.fillStyle='#332c26';ctx.fillRect(s.x-r*0.5,s.y-r*0.3,r,r*0.2);
                break;
            case 'crystal':
                // Diamond shape with glow dot
                ctx.fillStyle='rgba(168,85,247,0.2)';ctx.beginPath();ctx.arc(s.x,s.y,r*1.4,0,PI2);ctx.fill();
                ctx.fillStyle='#c084fc';ctx.beginPath();ctx.moveTo(s.x,s.y-r);ctx.lineTo(s.x+r*0.5,s.y);ctx.lineTo(s.x,s.y+r*0.7);ctx.lineTo(s.x-r*0.5,s.y);ctx.closePath();ctx.fill();
                ctx.fillStyle='#e9d5ff';ctx.beginPath();ctx.arc(s.x,s.y-r*0.15,r*0.2,0,PI2);ctx.fill();
                break;
            case 'chest':
                const rc=RARITY_COLOR[o.rarity||'common'];
                ctx.fillStyle=rc.box;ctx.fillRect(s.x-r,s.y-r*0.4,r*2,r*1.1);
                ctx.fillStyle='rgba(255,255,255,0.08)';ctx.fillRect(s.x-r,s.y-r*0.4,r*2,r*0.3);
                ctx.fillStyle=rc.lock;ctx.beginPath();ctx.arc(s.x,s.y-r*0.2,r*0.2,0,PI2);ctx.fill();
                break;
            case 'altar':
                ctx.fillStyle='#1e1520';ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.1,r*0.4,0,0,PI2);ctx.fill();
                ctx.strokeStyle='#7c3aed';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(s.x,s.y,r*0.8,0,PI2);ctx.stroke();
                ctx.fillStyle='#d946ef';ctx.beginPath();ctx.arc(s.x,s.y,r*0.2,0,PI2);ctx.fill();
                break;
            case 'trap':
                ctx.fillStyle='#1c1212';ctx.beginPath();ctx.arc(s.x,s.y,r*0.8,0,PI2);ctx.fill();
                ctx.strokeStyle='rgba(220,38,38,0.5)';ctx.lineWidth=1;
                ctx.beginPath();ctx.moveTo(s.x-r*0.5,s.y-r*0.5);ctx.lineTo(s.x+r*0.5,s.y+r*0.5);ctx.stroke();
                ctx.beginPath();ctx.moveTo(s.x+r*0.5,s.y-r*0.5);ctx.lineTo(s.x-r*0.5,s.y+r*0.5);ctx.stroke();
                break;
            case 'manaPool':
                ctx.fillStyle='rgba(14,116,144,0.25)';ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.3,r*0.75,0,0,PI2);ctx.fill();
                ctx.fillStyle='rgba(6,182,212,0.4)';ctx.beginPath();ctx.ellipse(s.x,s.y,r*0.8,r*0.5,0,0,PI2);ctx.fill();
                ctx.strokeStyle='#67e8f9';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.1,r*0.65,0,0,PI2);ctx.stroke();
                break;
            case 'bonePile':
                ctx.fillStyle='#374151';ctx.beginPath();ctx.ellipse(s.x,s.y,r,r*0.5,0,0,PI2);ctx.fill();
                ctx.strokeStyle='#9ca3af';ctx.lineWidth=2;ctx.lineCap='round';
                ctx.beginPath();ctx.moveTo(s.x-r*0.6,s.y-r*0.3);ctx.lineTo(s.x+r*0.6,s.y+r*0.3);ctx.stroke();
                ctx.beginPath();ctx.moveTo(s.x-r*0.4,s.y+r*0.3);ctx.lineTo(s.x+r*0.4,s.y-r*0.2);ctx.stroke();
                break;
            case 'rageAltar':
                ctx.fillStyle='rgba(127,29,29,0.6)';ctx.fillRect(s.x-r*0.7,s.y-r*0.4,r*1.4,r*0.9);
                ctx.strokeStyle='#ef4444';ctx.lineWidth=1.5;ctx.strokeRect(s.x-r*0.7,s.y-r*0.4,r*1.4,r*0.9);
                ctx.fillStyle='rgba(251,146,60,0.5)';ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.3,r*0.3,r*0.6,0,PI,PI2);ctx.fill();
                break;
            default:
                ctx.fillStyle='#444';ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.fill();
            }
            ctx.restore(); continue;
        }

        if(o.type==='rock'||o.type==='rock_sm'){
            ctx.fillStyle='rgba(0,0,0,0.3)';ctx.beginPath();ctx.ellipse(s.x+2,s.y+r*0.6,r*0.85,r*0.25,0,0,PI2);ctx.fill();
            ctx.fillStyle='#2d3f5a';ctx.beginPath();ctx.moveTo(s.x-r,s.y+r*0.3);ctx.lineTo(s.x-r*0.6,s.y-r*0.8);ctx.lineTo(s.x+r*0.2,s.y-r);ctx.lineTo(s.x+r,s.y-r*0.1);ctx.lineTo(s.x+r*0.7,s.y+r*0.6);ctx.closePath();ctx.fill();
            ctx.fillStyle='rgba(255,255,255,0.06)';ctx.beginPath();ctx.moveTo(s.x-r*0.5,s.y-r*0.6);ctx.lineTo(s.x+r*0.1,s.y-r*0.9);ctx.lineTo(s.x+r*0.3,s.y-r*0.3);ctx.lineTo(s.x-r*0.3,s.y-r*0.1);ctx.closePath();ctx.fill();
        }
        else if(o.type==='ruin'){
            ctx.fillStyle='rgba(0,0,0,0.4)';ctx.beginPath();ctx.ellipse(s.x+2,s.y+r*0.7,r*0.9,r*0.2,0,0,PI2);ctx.fill();
            ctx.fillStyle='#2a2520';ctx.fillRect(s.x-r*0.4,s.y-r*0.9,r*0.8,r*1.4);
            ctx.fillStyle='#332c26';ctx.fillRect(s.x-r*0.5,s.y-r*0.4,r,r*0.2);
            ctx.fillRect(s.x+r*0.5,s.y+r*0.2,r*0.4,r*0.35);ctx.fillRect(s.x-r*0.9,s.y+r*0.4,r*0.3,r*0.28);
        }
        else if(o.type==='crystal'){
            ctx.shadowColor='#a855f7';ctx.shadowBlur=20;
            const pulse=0.9+Math.sin(gameTime*2)*0.1;
            ctx.fillStyle='rgba(100,40,160,0.3)';ctx.beginPath();ctx.arc(s.x,s.y,r*1.6*pulse,0,PI2);ctx.fill();
            ctx.fillStyle='#c084fc';ctx.beginPath();ctx.moveTo(s.x,s.y-r);ctx.lineTo(s.x+r*0.55,s.y-r*0.4);ctx.lineTo(s.x+r*0.55,s.y+r*0.4);ctx.lineTo(s.x,s.y+r*0.9);ctx.lineTo(s.x-r*0.55,s.y+r*0.4);ctx.lineTo(s.x-r*0.55,s.y-r*0.4);ctx.closePath();ctx.fill();
            ctx.fillStyle='#e9d5ff';ctx.shadowBlur=14;ctx.beginPath();ctx.arc(s.x,s.y,r*0.28,0,PI2);ctx.fill();
        }
        else if(o.type==='chest'){
            const rc=RARITY_COLOR[o.rarity||'common'];const pulse=0.92+Math.sin(gameTime*3)*0.08;
            ctx.shadowColor=rc.glow;ctx.shadowBlur=14+7*pulse;
            ctx.fillStyle='rgba(0,0,0,0.4)';ctx.beginPath();ctx.ellipse(s.x+1,s.y+r*0.85,r*0.9,r*0.2,0,0,PI2);ctx.fill();
            ctx.fillStyle=rc.box;ctx.fillRect(s.x-r,s.y-r*0.5,r*2,r*1.2);
            ctx.fillStyle='rgba(255,255,255,0.1)';ctx.beginPath();ctx.arc(s.x,s.y-r*0.5,r,PI,PI2);ctx.fill();
            ctx.strokeStyle='rgba(255,255,255,0.2)';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(s.x-r,s.y-r*0.5);ctx.lineTo(s.x+r,s.y-r*0.5);ctx.stroke();
            ctx.fillStyle=rc.lock;ctx.shadowColor=rc.lock;ctx.shadowBlur=18*pulse;
            ctx.beginPath();ctx.arc(s.x,s.y-r*0.35,r*0.22,0,PI2);ctx.fill();
            ctx.fillRect(s.x-r*0.14,s.y-r*0.32,r*0.28,r*0.32);
            if(rc.label){ctx.fillStyle=rc.lock;ctx.font='bold 8px Georgia,serif';ctx.textAlign='center';ctx.shadowBlur=6;ctx.fillText(rc.label,s.x,s.y+r+8);}
        }
        else if(o.type==='altar'){
            const a=gameTime*0.6;
            ctx.shadowColor='#7c3aed';ctx.shadowBlur=20;
            ctx.fillStyle='#1e1520';ctx.beginPath();ctx.ellipse(s.x,s.y+r*0.2,r*1.2,r*0.45,0,0,PI2);ctx.fill();
            ctx.fillStyle='#2a1f35';ctx.fillRect(s.x-r*0.9,s.y-r*0.5,r*1.8,r*0.65);
            ctx.strokeStyle='#7c3aed';ctx.lineWidth=2;ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.stroke();
            ctx.strokeStyle='#c084fc';ctx.beginPath();ctx.arc(s.x,s.y,r*0.6,a,a+PI*1.2);ctx.stroke();
            [0,PI*0.5,PI,PI*1.5].forEach(da=>{ctx.fillStyle='#e9d5ff';ctx.beginPath();ctx.arc(s.x+Math.cos(da+a*0.3)*r,s.y+Math.sin(da+a*0.3)*r,2.5,0,PI2);ctx.fill();});
            ctx.fillStyle='#d946ef';ctx.shadowBlur=22*(0.8+Math.sin(gameTime*7)*0.2);ctx.beginPath();ctx.arc(s.x,s.y,r*0.22,0,PI2);ctx.fill();
        }
        else if(o.type==='trap'){
            ctx.shadowColor='#dc2626';ctx.shadowBlur=12;
            ctx.fillStyle='#1c1212';ctx.beginPath();ctx.arc(s.x,s.y,r*0.9,0,PI2);ctx.fill();
            for(let k=0;k<8;k++){
                const sa=PI2*k/8+gameTime*0.5;
                const ox=s.x+Math.cos(sa)*r, oy=s.y+Math.sin(sa)*r;
                const ix=s.x+Math.cos(sa)*r*0.3, iy=s.y+Math.sin(sa)*r*0.3;
                ctx.fillStyle='#7f1d1d';ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ix+Math.cos(sa+1.3)*r*0.22,iy+Math.sin(sa+1.3)*r*0.22);ctx.lineTo(ix+Math.cos(sa-1.3)*r*0.22,iy+Math.sin(sa-1.3)*r*0.22);ctx.closePath();ctx.fill();
                ctx.strokeStyle='rgba(220,38,38,0.6)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(ox,oy);ctx.stroke();
            }
        }
        else if(o.type==='manaPool'){
            // Glowing healing pool
            const pulse=0.85+Math.sin(gameTime*2)*0.15;
            ctx.fillStyle='rgba(14,116,144,0.25)';ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.5,r*0.9,0,0,PI2);ctx.fill();
            ctx.fillStyle='rgba(6,182,212,0.4)';ctx.beginPath();ctx.ellipse(s.x,s.y,r*pulse,r*0.6*pulse,0,0,PI2);ctx.fill();
            ctx.strokeStyle='#67e8f9';ctx.lineWidth=1.5;ctx.shadowColor='#67e8f9';ctx.shadowBlur=14;
            ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.2,r*0.75,0,0,PI2);ctx.stroke();
            ctx.fillStyle='#e0f2fe';ctx.font='11px serif';ctx.textAlign='center';ctx.fillText('💧',s.x,s.y+4);
        }
        else if(o.type==='bonePile'){
            ctx.fillStyle='#374151';ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.1,r*0.6,0,0,PI2);ctx.fill();
            // Bones
            for(let k=0;k<3;k++){
                const ba=k*PI/3;
                ctx.strokeStyle='#9ca3af';ctx.lineWidth=3;ctx.lineCap='round';
                ctx.beginPath();ctx.moveTo(s.x+Math.cos(ba)*r*0.7,s.y+Math.sin(ba)*r*0.5);
                ctx.lineTo(s.x-Math.cos(ba)*r*0.7,s.y-Math.sin(ba)*r*0.5);ctx.stroke();
            }
            ctx.strokeStyle='#d1d5db';ctx.lineWidth=1.5;ctx.shadowColor='#9ca3af';ctx.shadowBlur=8;
            ctx.beginPath();ctx.arc(s.x,s.y,r*1.1,0,PI2);ctx.stroke();
        }
        else if(o.type==='rageAltar'){
            // Red burning altar
            const flame=0.7+Math.sin(gameTime*4)*0.3;
            ctx.fillStyle='rgba(127,29,29,0.7)';ctx.beginPath();ctx.rect(s.x-r*0.8,s.y-r*0.5,r*1.6,r*1.0);ctx.fill();
            ctx.fillStyle='rgba(239,68,68,0.15)';ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.5,r*1.8,r*2.5*flame,0,PI,PI2);ctx.fill();
            ctx.strokeStyle='#ef4444';ctx.lineWidth=2;ctx.shadowColor='#ef4444';ctx.shadowBlur=16;
            ctx.beginPath();ctx.rect(s.x-r*0.8,s.y-r*0.5,r*1.6,r*1.0);ctx.stroke();
            // Flame core
            ctx.fillStyle=`rgba(251,146,60,${0.5+flame*0.3})`;ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.3,r*0.4,r*0.8*flame,0,PI,PI2);ctx.fill();
            ctx.fillStyle='rgba(253,224,71,0.8)';ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.3,r*0.15,r*0.4*flame,0,PI,PI2);ctx.fill();
        }
        ctx.restore();
    }
}

// ============================================================
//  PLAYER
// ============================================================
const player={
    x:WORLD.w/2,y:WORLD.h/2,radius:16,speed:200,
    maxHp:100,hp:100,level:1,xp:0,xpNext:20,angle:0,
    damage:15,atkSpd:1.0,range:300,projCnt:1,
    crit:0.05,critMult:1.5,pierce:0,projSpd:500,
    pickR:80,xpMult:1.0,regen:0,shield:0,shieldMax:0,
    slowAura:0,slowR:120,
    dashCD:0,dashTimer:0,dashSpd:600,dashDur:0.15,dashCDMax:2.0,
    iTimer:0,hurtTimer:0,buffTimer:0,buffMult:1.0,
    trail:[],weapons:['magicBolt'],
    reset(){
        Object.assign(this,{
            x:WORLD.w/2,y:WORLD.h/2,hp:100+meta.hpBonus,maxHp:100+meta.hpBonus,
            level:1,xp:0,xpNext:20,angle:0,
            damage:15+Math.floor(15*meta.dmgBonus/100),atkSpd:1.0,range:300,projCnt:1,
            crit:0.05,critMult:1.5,pierce:0,projSpd:500,
            pickR:80,xpMult:1.0+meta.xpBonus/100,regen:0,shield:0,shieldMax:0,
            slowAura:0,slowR:120,speed:200*(1+meta.speedBonus/100),
            dashCD:0,dashTimer:0,iTimer:0,hurtTimer:0,buffTimer:0,buffMult:1.0,
            trail:[],weapons:['magicBolt'],
        });
    },
    getDmg(){
        let d=this.damage*this.buffMult;
        const c=Math.random()<this.crit;
        if(c) d=Math.floor(d*this.critMult);
        return{damage:Math.floor(d),crit:c};
    }
};
let regenT=0;

function updatePlayer(dt){
    if(player.buffTimer>0){player.buffTimer-=dt;if(player.buffTimer<=0)player.buffMult=1.0;}
    if(player.regen>0){regenT+=dt;if(regenT>=1){regenT-=1;player.hp=Math.min(player.hp+player.regen,player.maxHp);}}
    if(player.shieldMax>0&&player.shield<player.shieldMax) player.shield=Math.min(player.shield+player.shieldMax*0.05*dt,player.shieldMax);
    if(player.dashCD>0) player.dashCD-=dt;

    let dx=0,dy=0;
    if(keys['KeyW']||keys['ArrowUp'])    dy-=1;
    if(keys['KeyS']||keys['ArrowDown'])  dy+=1;
    if(keys['KeyA']||keys['ArrowLeft'])  dx-=1;
    if(keys['KeyD']||keys['ArrowRight']) dx+=1;
    if(JOY.active){dx+=JOY.dx;dy+=JOY.dy;}

    const wantDash=(keys['Space']||DASH_BTN.active)&&player.dashCD<=0;

    if(player.dashTimer>0){
        player.dashTimer-=dt;
        player.x+=Math.cos(player.angle)*player.dashSpd*dt;
        player.y+=Math.sin(player.angle)*player.dashSpd*dt;
        player.iTimer=0.12;
    } else {
        if(dx||dy){
            const len=Math.hypot(dx,dy);dx/=len;dy/=len;
            player.angle=Math.atan2(dy,dx);
            player.x+=dx*player.speed*dt;player.y+=dy*player.speed*dt;
        }
        if(wantDash&&(dx||dy)){
            player.dashTimer=player.dashDur;player.dashCD=player.dashCDMax;
            snd('dash');
            for(let i=0;i<12;i++){const pa=rand(0,PI2);addParticle({x:player.x,y:player.y,vx:Math.cos(pa)*rand(80,200),vy:Math.sin(pa)*rand(80,200),life:rand(0.2,0.5),col:'#c084fc',r:rand(2,5),type:'spark'});}
        }
    }
    if(player.iTimer>0) player.iTimer-=dt;
    if(player.hurtTimer>0) player.hurtTimer-=dt;
    player.x=clamp(player.x,player.radius,WORLD.w-player.radius);
    player.y=clamp(player.y,player.radius,WORLD.h-player.radius);
    if(IS_MOBILE){if(frameCount%6===0) player.trail.push({x:player.x,y:player.y,life:0.3,r:player.radius*0.4});}
    else if(frameCount%3===0) player.trail.push({x:player.x,y:player.y,life:0.5,r:player.radius*0.5+rand(0,4)});
    for(let i=player.trail.length-1;i>=0;i--){player.trail[i].life-=dt;if(player.trail[i].life<=0)player.trail.splice(i,1);}
}

function drawPlayer(){
    const s=toScr(player.x,player.y),r=player.radius;
    const ch=getChar();
    // Trail
    if(IS_MOBILE){
        if(player.trail.length){ctx.save();ctx.fillStyle=player.dashTimer>0?'#e0d0ff':ch.trailCol;
        for(const t of player.trail){const ts=toScr(t.x,t.y);ctx.globalAlpha=t.life*0.3;ctx.beginPath();ctx.arc(ts.x,ts.y,t.r,0,PI2);ctx.fill();}
        ctx.restore();}
    } else for(const t of player.trail){const ts=toScr(t.x,t.y);ctx.save();ctx.globalAlpha=t.life*0.35;ctx.fillStyle=player.dashTimer>0?'#e0d0ff':ch.trailCol;ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=10;ctx.beginPath();ctx.arc(ts.x,ts.y,t.r,0,PI2);ctx.fill();ctx.restore();}
    ctx.save();
    // Shadow
    ctx.fillStyle='rgba(0,0,0,0.4)';ctx.beginPath();ctx.ellipse(s.x+2,s.y+r+5,r,r*0.28,0,0,PI2);ctx.fill();
    // Ground glow (cheap additive blend)
    ctx.save();ctx.globalCompositeOperation='lighter';
    const gc2=player.buffTimer>0?COL.upgrade:(player.hurtTimer>0?COL.dmg:ch.accentCol);
    ctx.globalAlpha=IS_MOBILE?0.06:0.08;ctx.fillStyle=gc2;
    ctx.beginPath();ctx.arc(s.x,s.y,r*2.5,0,PI2);ctx.fill();ctx.restore();
    // Slow aura
    if(player.slowAura>0){ctx.save();ctx.globalAlpha=0.1;ctx.fillStyle=COL.ice;ctx.beginPath();ctx.arc(s.x,s.y,player.slowR,0,PI2);ctx.fill();ctx.globalAlpha=0.25;ctx.strokeStyle=COL.ice;ctx.lineWidth=1.5;ctx.stroke();ctx.restore();}
    // Rune circle
    const ra=gameTime*1.5;
    ctx.save();ctx.strokeStyle=`rgba(${ch.id==='knight'?'30,64,175':ch.id==='rogue'?'52,211,153':ch.id==='necromancer'?'74,222,128':'168,85,247'},0.28)`;ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(s.x,s.y,r+10,ra,ra+PI*1.3);ctx.stroke();
    ctx.beginPath();ctx.arc(s.x,s.y,r+10,ra+PI,ra+PI*2.3);ctx.stroke();
    if(!IS_MOBILE){
    for(let i=0;i<6;i++){const ta=ra+i*PI/3;ctx.beginPath();ctx.moveTo(s.x+Math.cos(ta)*(r+7),s.y+Math.sin(ta)*(r+7));ctx.lineTo(s.x+Math.cos(ta)*(r+13),s.y+Math.sin(ta)*(r+13));ctx.stroke();}
    }
    ctx.restore();
    // Glow
    const gc=player.dashTimer>0?'#fff':player.hurtTimer>0?COL.dmg:(player.buffTimer>0?COL.upgrade:ch.accentCol);
    if(QUALITY.shadowBlur){ctx.shadowColor=gc;ctx.shadowBlur=28;}
    else ctx.shadowBlur=0;
    // ── Character-specific body rendering ──
    drawPlayerCharacter(s, r);
    ctx.shadowBlur=0;
    // Buff ring
    if(player.buffTimer>0){ctx.save();ctx.globalAlpha=0.55+Math.sin(gameTime*6)*0.25;ctx.strokeStyle=COL.upgrade;ctx.lineWidth=2;if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=16;}ctx.beginPath();ctx.arc(s.x,s.y,r+16,gameTime*2,gameTime*2+PI*1.6);ctx.stroke();ctx.restore();}
    // Shield
    if(player.shield>0){ctx.save();ctx.globalAlpha=0.45;ctx.strokeStyle=COL.shield;ctx.lineWidth=3;if(QUALITY.shadowBlur){ctx.shadowColor=COL.shield;ctx.shadowBlur=12;}ctx.beginPath();ctx.arc(s.x,s.y,r+7,0,PI2*(player.shield/player.shieldMax));ctx.stroke();ctx.restore();}
    ctx.restore();
}

// ============================================================
//  ENEMY TYPES
// ============================================================
const ET={
    goblin:     {name:'Goblin',r:11,spd:130,hp:18, dmg:5, col:'#166534',xp:5},
    bat:        {name:'Bat',   r:9, spd:190,hp:10, dmg:3, col:'#4c1d95',xp:4},
    orc:        {name:'Orc',  r:18,spd:55, hp:55, dmg:10,col:'#92400e',xp:12},
    skeleton:   {name:'Skel', r:13,spd:80, hp:30, dmg:7, col:'#9ca3af',xp:8},
    spider:     {name:'Spid',   r:10,spd:100,hp:22, dmg:6, col:'#374151',xp:6, jump:true},
    wraith:     {name:'Wraith', r:12,spd:145,hp:28, dmg:7, col:'#6d28d9',xp:10,phase:true},
    eliteOrc:   {name:'E.Orc',r:22,spd:50, hp:120,dmg:15,col:'#b45309',xp:30,elite:true,shock:true},
    shadowBat:  {name:'S.Bat',r:12,spd:160,hp:40, dmg:8, col:'#6d28d9',xp:25,elite:true,tele:true},
    fireGoblin: {name:'F.Gob',r:13,spd:120,hp:35, dmg:7, col:'#b91c1c',xp:22,elite:true,fire:true},
    spiderQueen:{name:'Q.Sp', r:28,spd:40, hp:300,dmg:12,col:'#1f2937',xp:60,elite:true,summon:'spider',boss:'mini'},
    knight:     {name:'Knight',r:26,spd:50,hp:350,dmg:18,col:'#1e40af',xp:65,elite:true,shield:true,boss:'mini'},
    demonMage:  {name:'D.Mage',r:24,spd:35,hp:250,dmg:10,col:'#9f1239',xp:55,elite:true,shoots:true,boss:'mini'},
    hugeDemon:  {name:'Demon', r:45,spd:40,hp:800,dmg:25,col:'#7f1d1d',xp:150,elite:true,boss:'boss',shock:true},
    necromancer:{name:'Necro', r:35,spd:30,hp:600,dmg:15,col:'#581c87',xp:140,elite:true,boss:'boss',summon:'skeleton',shoots:true},
    darkKnight: {name:'D.Knight',r:42,spd:45,hp:900,dmg:30,col:'#1e3a8a',xp:160,elite:true,boss:'boss',shield:true},
};

let enemies=[],eProjArr=[],hazards=[],spawnTimer=0,waveCount=0;
// Cached sorted enemies — rebuilt once per frame in updateEnemies, used by all weapons
let enemiesByDist=[];
let activeBoss=null;     // cached: first boss-tier enemy (or null)
let activeBossList=[];   // cached: all boss/mini-boss enemies

function spawnAtEdge(){
    const side=randInt(0,3),m=100;let x,y;
    if(side===0){x=player.x+rand(-W/2-m,W/2+m);y=player.y-H/2-m;}
    else if(side===1){x=player.x+rand(-W/2-m,W/2+m);y=player.y+H/2+m;}
    else if(side===2){x=player.x-W/2-m;y=player.y+rand(-H/2-m,H/2+m);}
    else{x=player.x+W/2+m;y=player.y+rand(-H/2-m,H/2+m);}
    return{x:clamp(x,50,WORLD.w-50),y:clamp(y,50,WORLD.h-50)};
}

function spawnEnemy(type){
    const t=ET[type]; if(!t) return;
    const tm=1+gameTime/120;
    const pos=spawnAtEdge();
    enemies.push({x:pos.x,y:pos.y,radius:t.r,spd:t.spd,hp:Math.floor(t.hp*tm),maxHp:Math.floor(t.hp*tm),
        dmg:Math.floor(t.dmg*(1+gameTime/200)),col:t.col,xp:Math.floor(t.xp*(1+gameTime/300)),
        type,elite:!!t.elite,boss:t.boss||null,hitFlash:0,kb:{x:0,y:0,t:0},
        aTimer:rand(2,5),shieldHp:t.shield?Math.floor(t.hp*tm*0.3):0,frozen:0});
}

const MAX_ENEMIES=IS_MOBILE?120:250;

function spawnWave(){
    if(enemies.length>=MAX_ENEMIES) return;
    const ch=getCh(),min=gameTime/60;
    const pool=[...ch.enemyPool];
    if(min>=2.5&&Math.random()<0.18) pool.push(choose(ch.elitePool));
    if(min>=4.0&&Math.random()<0.13) pool.push(choose(ch.elitePool));
    const cnt=Math.min(3+Math.floor(min*1.5),12,MAX_ENEMIES-enemies.length);
    for(let i=0;i<cnt;i++) spawnEnemy(choose(pool));
}

function updateEnemies(dt){
    // Cache distance-sorted enemies ONCE per frame — used by all weapons
    enemiesByDist=[...enemies].sort((a,b)=>dist(a,player)-dist(b,player));
    // Cache boss references for HUD/arrows (avoids filter/find every render frame)
    activeBossList=enemies.filter(e=>e.boss);
    activeBoss=enemies.find(e=>e.boss==='boss')||null;

    spawnTimer-=dt;
    if(spawnTimer<=0){spawnWave();waveCount++;spawnTimer=Math.max(0.3,1.4-gameTime/180);}
    if(gameTime>=nextMini){
        const pos=spawnAtEdge();
        addSpawnWarning(pos.x,pos.y,false);
        pendingSpawns.push({timer:0.65,pos,types:['spiderQueen','knight','demonMage'],mini:true});
        nextMini+=30;
    }
    if(gameTime>=nextBoss){
        const pos2=spawnAtEdge();
        addSpawnWarning(pos2.x,pos2.y,true);
        pendingSpawns.push({timer:0.85,pos:pos2,types:['hugeDemon','necromancer','darkKnight'],mini:false});
        nextBoss+=60;
    }
    // Process pending boss spawns — game-loop-safe, no setTimeout
    for(let i=pendingSpawns.length-1;i>=0;i--){
        const ps=pendingSpawns[i]; ps.timer-=dt;
        if(ps.timer<=0){
            const type=choose(ps.types); const t=ET[type]; if(!t){pendingSpawns.splice(i,1);continue;}
            const tm=1+gameTime/120;
            enemies.push({x:ps.pos.x,y:ps.pos.y,radius:t.r,spd:t.spd,
                hp:Math.floor(t.hp*tm),maxHp:Math.floor(t.hp*tm),
                dmg:Math.floor(t.dmg*(1+gameTime/200)),col:t.col,
                xp:Math.floor(t.xp*(1+gameTime/300)),
                type,elite:!!t.elite,boss:t.boss||null,
                hitFlash:0,kb:{x:0,y:0,t:0},
                aTimer:rand(2,5),shieldHp:t.shield?Math.floor(t.hp*tm*0.3):0,frozen:0});
            if(ps.mini){
                floatText(player.x,player.y-50,T('miniBoss'),COL.upgrade,28,2);
                triggerBossFlash(player.x,player.y,COL.upgrade);
            } else {
                floatText(player.x,player.y-60,T('boss'),COL.dmg,36,2.5);
                triggerBossFlash(player.x,player.y,'#ef4444');
                addShake(12);
            }
            snd('boss',true);
            pendingSpawns.splice(i,1);
        }
    }

    const sm=player.slowAura>0?(1-player.slowAura):1;

    for(let i=enemies.length-1;i>=0;i--){
        const e=enemies[i], t=ET[e.type];
        if(!t){ enemies.splice(i,1); continue; } // guard: unknown type
        if(e.frozen>0) e.frozen-=dt;
        if(e.iFrames>0) e.iFrames-=dt; // wraith phase invincibility
        const speedM=(e.frozen>0?0.3:(dist(e,player)<player.slowR?sm:1))*wev.spdMult;

        if(e.kb.t>0){e.x+=e.kb.x*dt;e.y+=e.kb.y*dt;e.kb.t-=dt;}
        else{const a=ang(e,player);e.x+=Math.cos(a)*e.spd*speedM*dt;e.y+=Math.sin(a)*e.spd*speedM*dt;}

        // Void rift pull
        for(const h of hazards){
            if(!h.voidRift) continue;
            const d=dist(h,e);
            if(d<h.radius&&d>1){const a=ang(e,h);e.x+=Math.cos(a)*h.pullStr*dt;e.y+=Math.sin(a)*h.pullStr*dt;}
        }

        e.aTimer-=dt;
        if(e.aTimer<=0){
            e.aTimer=rand(2,5);
            if(t.jump){const a=ang(e,player);e.kb={x:Math.cos(a)*400,y:Math.sin(a)*400,t:0.2};}
            if(t.phase){ // Wraith: brief speed burst toward player
                const a=ang(e,player);e.kb={x:Math.cos(a)*280,y:Math.sin(a)*280,t:0.25};
                e.iFrames=0.4; // wraith phasing — brief invincibility
            }
            if(t.tele&&dist(e,player)<350){const a=rand(0,PI2),d=rand(80,200);e.x=player.x+Math.cos(a)*d;e.y=player.y+Math.sin(a)*d;addParticle({x:e.x,y:e.y,vx:0,vy:0,life:0.5,col:'#7c3aed',r:18,type:'flash'});}
            if(t.shock&&dist(e,player)<160){hazards.push({x:e.x,y:e.y,radius:0,maxR:120,growSpd:200,dmg:e.dmg*0.5,life:0.6,col:e.col});addShake(5);}
            if(t.summon&&enemies.length<200){
                for(let ss=0;ss<3;ss++){
                    const st=ET[t.summon]; if(!st) continue;
                    enemies.push({x:e.x+rand(-45,45),y:e.y+rand(-45,45),radius:st.r,spd:st.spd,
                        hp:Math.floor(st.hp*(1+gameTime/120)),maxHp:Math.floor(st.hp*(1+gameTime/120)),
                        dmg:st.dmg,col:st.col,xp:st.xp,type:t.summon,elite:false,boss:null,
                        hitFlash:0,kb:{x:0,y:0,t:0},aTimer:99,shieldHp:0,frozen:0});
                }
            }
            if(t.shoots&&dist(e,player)<420){const a=ang(e,player);eProjArr.push({x:e.x,y:e.y,vx:Math.cos(a)*200,vy:Math.sin(a)*200,dmg:Math.floor(e.dmg*0.6),radius:6,life:3,col:e.col});}
            if(t.fire&&hazards.length<80) hazards.push({x:e.x,y:e.y,radius:15,maxR:15,growSpd:0,dmg:3,life:3,col:COL.fire,firePool:true});
        }

        e.x=clamp(e.x,e.radius,WORLD.w-e.radius);e.y=clamp(e.y,e.radius,WORLD.h-e.radius);
        if(e.hitFlash>0) e.hitFlash-=dt;

        // Contact damage
        const er=e.radius+player.radius;
        if(Math.abs(e.x-player.x)<er&&Math.abs(e.y-player.y)<er&&
           dist(e,player)<er&&player.iTimer<=0){
            let dmg=e.dmg;
            if(player.shield>0){const ab=Math.min(dmg,player.shield);player.shield-=ab;dmg-=ab;}
            if(dmg>0){player.hp-=dmg;player.hurtTimer=0.2;addShake(3);snd('hit');}
            player.iTimer=0.3;
            floatText(player.x,player.y-30,`-${e.dmg}`,COL.dmg,20,0.8);
        }

        if(e.hp<=0){
            killCount++;if(e.boss) meta.bossKills++;
            addKill();
            const xpCnt=e.boss?5:(e.elite?3:1);
            const xpEa=Math.floor(e.xp*wev.xpMult/xpCnt);
            for(let k=0;k<xpCnt;k++){if(xpOrbs.length<500) xpOrbs.push({x:e.x+rand(-15,15),y:e.y+rand(-15,15),xp:xpEa,radius:e.boss?8:6,life:20});}
            const pc=Math.min(e.boss?20:(e.elite?10:5), QUALITY.maxParticles-particles.length);
            for(let k=0;k<pc;k++){const pa=rand(0,PI2),sp=rand(80,e.boss?200:140);addParticle({x:e.x,y:e.y,vx:Math.cos(pa)*sp,vy:Math.sin(pa)*sp,life:rand(0.4,e.boss?1.0:0.7),col:e.col,r:rand(2,e.boss?9:5),type:'death'});}
            // Blood decal on ground for fleshy enemies
            if(['goblin','orc','skeleton','fireGoblin','eliteOrc'].includes(e.type)){
                const bc=Math.min(3,QUALITY.maxParticles-particles.length);
                for(let k=0;k<bc;k++){const pa=rand(0,PI2);addParticle({x:e.x,y:e.y,vx:Math.cos(pa)*rand(20,80),vy:Math.sin(pa)*rand(20,80),life:rand(0.6,1.2),col:'#7f1d1d',r:rand(2,4),type:'blood'});}
            }
            // Boss impact ring
            if(e.boss){addImpact(e.x,e.y,'#ef4444',e.radius*3);}
            snd('death'); if(e.boss) addShake(10);
            enemies.splice(i,1);
        }
    }

    for(let i=eProjArr.length-1;i>=0;i--){
        const p=eProjArr[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;
        if(p.life<=0){eProjArr.splice(i,1);continue;}
        if(dist(p,player)<p.radius+player.radius&&player.iTimer<=0){
            let dmg=p.dmg;if(player.shield>0){const ab=Math.min(dmg,player.shield);player.shield-=ab;dmg-=ab;}
            if(dmg>0){player.hp-=dmg;player.hurtTimer=0.15;snd('hit');}
            player.iTimer=0.2;
            floatText(player.x,player.y-25,`-${p.dmg}`,COL.dmg,18,0.7);
            eProjArr.splice(i,1);
        }
    }

    for(let i=hazards.length-1;i>=0;i--){
        const h=hazards[i];h.life-=dt;
        if(h.radius<h.maxR) h.radius=Math.min(h.radius+h.growSpd*dt,h.maxR);
        if(h.life<=0){hazards.splice(i,1);continue;}
        if(!h.firePool&&!h.poison&&!h.voidRift&&dist(h,player)<h.radius&&player.iTimer<=0){
            player.hp-=h.dmg;player.iTimer=0.5;player.hurtTimer=0.15;
            floatText(player.x,player.y-25,`-${Math.floor(h.dmg)}`,COL.dmg,18,0.6);
        }
        if(h.firePool) for(const e of enemies) if(dist(h,e)<h.radius+e.radius){e.hp-=1;e.hitFlash=0.03;}
        if(h.poison)   for(const e of enemies) if(dist(h,e)<h.radius+e.radius){e.hp-=h.dmg*0.05;e.hitFlash=0.03;}
        if(h.voidRift) for(const e of enemies) if(dist(h,e)<h.radius+e.radius*0.5) damageEnemy(e,h.tickDmg*dt,false);
        // Arcane Mine — arm then trigger on enemy proximity
        if(h.mine&&!h.triggered){
            h.armed-=dt;
            if(h.armed<=0){
                for(const e of enemies){
                    if(dist(h,e)<h.radius+e.radius+20){
                        h.triggered=true;h.life=0.05; // start dying
                        // Explosion
                        const explR=90;
                        for(const e2 of enemies) if(dist(h,e2)<explR) damageEnemy(e2,h.dmg,true);
                        hazards.push({x:h.x,y:h.y,radius:0,maxR:explR,growSpd:500,dmg:0,life:0.4,col:'#facc15'});
                        for(let k=0;k<18;k++){const pa=rand(0,PI2);addParticle({x:h.x,y:h.y,vx:Math.cos(pa)*rand(80,200),vy:Math.sin(pa)*rand(80,200),life:rand(0.4,0.9),col:'#facc15',r:rand(3,8),type:'nova'});}
                        addShake(4);snd('nova',true);
                        break;
                    }
                }
            }
        }
    }
}

// ---- Enemy drawing ----
function drawEShape(s,e){
    ctx.save(); // ← isolate all state: no leaks between enemies
    const r=Math.max(1,e.radius), hurt=e.hitFlash>0;
    const col=e.frozen>0?COL.ice:(hurt?'#ffffff':e.col);

    // ── MOBILE FAST PATH: distinct shapes per enemy type ──────
    if(IS_MOBILE && !e.boss){
        ctx.shadowBlur=0;
        const eyeCol=e.type==='skeleton'?'#6ee7b7':e.type==='wraith'?'#e879f9':e.type==='fireGoblin'?'#facc15':'#ef4444';

        switch(e.type){
        case 'goblin':case 'fireGoblin':
            // Triangular ears + round head
            ctx.fillStyle=col;
            ctx.beginPath();ctx.moveTo(s.x-r*0.8,s.y-r*0.3);ctx.lineTo(s.x-r*0.3,s.y-r);ctx.lineTo(s.x-r*0.2,s.y-r*0.3);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x+r*0.8,s.y-r*0.3);ctx.lineTo(s.x+r*0.3,s.y-r);ctx.lineTo(s.x+r*0.2,s.y-r*0.3);ctx.fill();
            ctx.beginPath();ctx.arc(s.x,s.y,r*0.7,0,PI2);ctx.fill();
            ctx.beginPath();ctx.ellipse(s.x,s.y+r*0.4,r*0.55,r*0.45,0,0,PI2);ctx.fill();
            // Fire aura
            if(e.type==='fireGoblin'){ctx.fillStyle='rgba(249,115,22,0.25)';ctx.beginPath();ctx.arc(s.x,s.y,r*1.2,0,PI2);ctx.fill();}
            break;
        case 'bat':case 'shadowBat':
            // Wing shapes
            ctx.fillStyle=col;
            const wf=Math.sin(gameTime*10)*r*0.25;
            ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x-r*1.8,s.y-wf);ctx.lineTo(s.x-r*0.8,s.y+r*0.5);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x+r*1.8,s.y-wf);ctx.lineTo(s.x+r*0.8,s.y+r*0.5);ctx.fill();
            ctx.beginPath();ctx.ellipse(s.x,s.y,r*0.5,r*0.4,0,0,PI2);ctx.fill();
            break;
        case 'orc':case 'eliteOrc':
            // Bulky rectangle body
            ctx.fillStyle=col;
            ctx.beginPath();ctx.roundRect(s.x-r*0.7,s.y-r*0.3,r*1.4,r*1.3,3);ctx.fill();
            ctx.beginPath();ctx.arc(s.x,s.y-r*0.55,r*0.6,0,PI2);ctx.fill();
            // Tusks
            ctx.fillStyle='#fffbeb';
            ctx.beginPath();ctx.moveTo(s.x-r*0.25,s.y-r*0.35);ctx.lineTo(s.x-r*0.35,s.y-r*0.65);ctx.lineTo(s.x-r*0.1,s.y-r*0.35);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x+r*0.25,s.y-r*0.35);ctx.lineTo(s.x+r*0.35,s.y-r*0.65);ctx.lineTo(s.x+r*0.1,s.y-r*0.35);ctx.fill();
            break;
        case 'skeleton':
            // Skull + spine
            ctx.fillStyle=col;
            ctx.beginPath();ctx.arc(s.x,s.y-r*0.35,r*0.6,0,PI2);ctx.fill();
            ctx.fillStyle='rgba(0,0,0,0.7)';
            ctx.beginPath();ctx.arc(s.x-r*0.2,s.y-r*0.4,r*0.14,0,PI2);ctx.fill();
            ctx.beginPath();ctx.arc(s.x+r*0.2,s.y-r*0.4,r*0.14,0,PI2);ctx.fill();
            // Ribs
            ctx.strokeStyle=col;ctx.lineWidth=1.5;
            ctx.beginPath();ctx.moveTo(s.x,s.y-r*0.1);ctx.lineTo(s.x,s.y+r*0.8);ctx.stroke();
            ctx.beginPath();ctx.moveTo(s.x-r*0.4,s.y+r*0.1);ctx.lineTo(s.x+r*0.4,s.y+r*0.1);ctx.stroke();
            ctx.beginPath();ctx.moveTo(s.x-r*0.35,s.y+r*0.35);ctx.lineTo(s.x+r*0.35,s.y+r*0.35);ctx.stroke();
            break;
        case 'spider':
            // Body + legs
            ctx.strokeStyle=col;ctx.lineWidth=1.2;
            for(let lg=0;lg<4;lg++){
                const la=(-0.6+lg*0.4);
                ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x+Math.cos(PI+la)*r*1.8,s.y+Math.sin(PI+la)*r*1.8);ctx.stroke();
                ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x+Math.cos(la)*r*1.8,s.y+Math.sin(la)*r*1.8);ctx.stroke();
            }
            ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(s.x,s.y,r*0.6,r*0.45,0,0,PI2);ctx.fill();
            break;
        case 'wraith':
            // Ghostly fade shape
            ctx.globalAlpha=0.5+Math.sin(gameTime*3)*0.2;
            ctx.fillStyle=col;
            ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.1,r*0.8,r*0.65,0,0,PI2);ctx.fill();
            ctx.fillStyle='rgba(0,0,0,0.5)';ctx.beginPath();ctx.arc(s.x,s.y,r*0.4,0,PI2);ctx.fill();
            // Wispy tail
            ctx.fillStyle=col;ctx.globalAlpha=0.3;
            ctx.beginPath();ctx.ellipse(s.x,s.y+r*0.6,r*0.4,r*0.7,0,0,PI2);ctx.fill();
            ctx.globalAlpha=1;
            break;
        default:
            ctx.fillStyle=col;ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.fill();
        }
        // Outline for readability
        ctx.strokeStyle='rgba(0,0,0,0.35)';ctx.lineWidth=1;
        ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.stroke();
        // Eyes (skip wraith — has its own)
        if(e.type!=='wraith'&&e.type!=='skeleton'){
            ctx.fillStyle=eyeCol;
            ctx.beginPath();ctx.arc(s.x-r*0.22,s.y-r*0.2,r*0.11,0,PI2);ctx.fill();
            ctx.beginPath();ctx.arc(s.x+r*0.22,s.y-r*0.2,r*0.11,0,PI2);ctx.fill();
        }
        // Wraith glowing eyes
        if(e.type==='wraith'){ctx.fillStyle='#e879f9';ctx.beginPath();ctx.arc(s.x-r*0.18,s.y-r*0.15,r*0.1,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+r*0.18,s.y-r*0.15,r*0.1,0,PI2);ctx.fill();}
        // Elite marker ring
        if(e.elite){ctx.strokeStyle=COL.upgrade;ctx.lineWidth=1.5;ctx.globalAlpha=0.5;ctx.beginPath();ctx.arc(s.x,s.y,r+4,0,PI2);ctx.stroke();ctx.globalAlpha=1;}
        ctx.restore(); return;
    }

    if(QUALITY.shadowBlur){ctx.shadowColor=e.col;ctx.shadowBlur=hurt?24:(e.boss?16:(e.elite?8:3));}
    else ctx.shadowBlur=0;
    switch(e.type){
        case 'goblin':case 'fireGoblin':{
            const isFG=e.type==='fireGoblin';
            ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(s.x,s.y+r*0.3,r*0.65,r*0.55,0,0,PI2);ctx.fill();
            ctx.beginPath();ctx.arc(s.x,s.y-r*0.3,r*0.75,0,PI2);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x-r*0.65,s.y-r*0.4);ctx.lineTo(s.x-r*1.1,s.y-r*0.9);ctx.lineTo(s.x-r*0.35,s.y-r*0.6);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x+r*0.65,s.y-r*0.4);ctx.lineTo(s.x+r*1.1,s.y-r*0.9);ctx.lineTo(s.x+r*0.35,s.y-r*0.6);ctx.fill();
            const ec=e.elite?'#facc15':'#bef264';ctx.fillStyle=ec;ctx.shadowColor=ec;ctx.shadowBlur=6;
            ctx.beginPath();ctx.arc(s.x-r*0.27,s.y-r*0.38,r*0.14,0,PI2);ctx.fill();
            ctx.beginPath();ctx.arc(s.x+r*0.27,s.y-r*0.38,r*0.14,0,PI2);ctx.fill();
            if(isFG&&!hurt){for(let f=0;f<3;f++){const fh=r*0.5+Math.sin(gameTime*6+f)*r*0.3;ctx.fillStyle=f%2===0?COL.fire:'#facc15';ctx.shadowColor=COL.fire;ctx.shadowBlur=12;ctx.beginPath();ctx.ellipse(s.x+(f-1)*r*0.4,s.y-r*0.8-fh*0.3,r*0.18,fh*0.5,0,0,PI2);ctx.fill();}}
            break;}
        case 'bat':case 'shadowBat':{
            const isSB=e.type==='shadowBat';const fl=Math.sin(gameTime*10)*r*0.35;
            ctx.fillStyle=isSB?'rgba(109,40,217,0.75)':'rgba(76,29,149,0.75)';
            ctx.beginPath();ctx.moveTo(s.x-r*0.3,s.y);ctx.bezierCurveTo(s.x-r*1.6,s.y-r*0.6-fl,s.x-r*2.2,s.y+r*0.3,s.x-r*1.8,s.y+r*0.9);ctx.bezierCurveTo(s.x-r*1.1,s.y+r*1.1,s.x-r*0.5,s.y+r*0.5,s.x,s.y);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x+r*0.3,s.y);ctx.bezierCurveTo(s.x+r*1.6,s.y-r*0.6-fl,s.x+r*2.2,s.y+r*0.3,s.x+r*1.8,s.y+r*0.9);ctx.bezierCurveTo(s.x+r*1.1,s.y+r*1.1,s.x+r*0.5,s.y+r*0.5,s.x,s.y);ctx.fill();
            ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(s.x,s.y,r*0.7,r*0.55,0,0,PI2);ctx.fill();
            ctx.fillStyle='#ef4444';ctx.shadowColor='#ef4444';ctx.shadowBlur=8;
            ctx.beginPath();ctx.arc(s.x-r*0.22,s.y-r*0.1,r*0.13,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+r*0.22,s.y-r*0.1,r*0.13,0,PI2);ctx.fill();break;}
        case 'orc':case 'eliteOrc':{
            const ie=e.type==='eliteOrc';const bw=r*1.6,bh=r*1.4;
            ctx.fillStyle=col;ctx.beginPath();ctx.roundRect(s.x-bw/2,s.y-bh*0.2,bw,bh,4);ctx.fill();
            ctx.fillStyle=ie?'#78350f':'#713f12';ctx.beginPath();ctx.arc(s.x-bw/2-r*0.15,s.y,r*0.35,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+bw/2+r*0.15,s.y,r*0.35,0,PI2);ctx.fill();
            ctx.fillStyle=col;ctx.beginPath();ctx.arc(s.x,s.y-r*0.85,r*0.85,0,PI2);ctx.fill();
            ctx.fillStyle='#fffbeb';ctx.beginPath();ctx.moveTo(s.x-r*0.2,s.y-r*0.5);ctx.lineTo(s.x-r*0.35,s.y-r*0.2);ctx.lineTo(s.x-r*0.1,s.y-r*0.2);ctx.fill();ctx.beginPath();ctx.moveTo(s.x+r*0.2,s.y-r*0.5);ctx.lineTo(s.x+r*0.35,s.y-r*0.2);ctx.lineTo(s.x+r*0.1,s.y-r*0.2);ctx.fill();
            const oe=ie?'#facc15':'#ef4444';ctx.fillStyle=oe;ctx.shadowColor=oe;ctx.shadowBlur=ie?12:5;ctx.fillRect(s.x-r*0.45,s.y-r*0.95,r*0.25,r*0.15);ctx.fillRect(s.x+r*0.2,s.y-r*0.95,r*0.25,r*0.15);break;}
        case 'skeleton':{
            ctx.fillStyle=col;ctx.beginPath();ctx.arc(s.x,s.y-r*0.45,r*0.75,0,PI2);ctx.fill();
            ctx.fillStyle='rgba(0,0,0,0.85)';ctx.beginPath();ctx.arc(s.x-r*0.28,s.y-r*0.55,r*0.2,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+r*0.28,s.y-r*0.55,r*0.2,0,PI2);ctx.fill();
            ctx.fillStyle='#6ee7b7';ctx.shadowColor='#6ee7b7';ctx.shadowBlur=7;ctx.beginPath();ctx.arc(s.x-r*0.28,s.y-r*0.55,r*0.1,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+r*0.28,s.y-r*0.55,r*0.1,0,PI2);ctx.fill();
            ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.shadowBlur=0;
            for(let rib=0;rib<4;rib++){const rw=r*(0.7-rib*0.06);ctx.beginPath();ctx.moveTo(s.x-rw,s.y+rib*r*0.28);ctx.lineTo(s.x+rw,s.y+rib*r*0.28);ctx.stroke();}
            ctx.beginPath();ctx.moveTo(s.x,s.y-r*0.1);ctx.lineTo(s.x,s.y+r);ctx.stroke();break;}
        case 'spider':case 'spiderQueen':{
            const isQ=e.type==='spiderQueen';
            ctx.strokeStyle=col;ctx.lineWidth=isQ?2:1.5;
            for(let leg=0;leg<4;leg++){
                const ba=[-PI*0.25,-PI*0.15,PI*0.15,PI*0.25],of2=[-PI*0.5,-PI*0.35,PI*0.35,PI*0.5];
                ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x+Math.cos(PI+of2[leg])*r,s.y+Math.sin(PI+of2[leg])*r);ctx.lineTo(s.x+Math.cos(PI+ba[leg])*r*2.2,s.y+Math.sin(PI+ba[leg])*r*2.2);ctx.stroke();
                ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x+Math.cos(of2[leg])*r,s.y+Math.sin(of2[leg])*r);ctx.lineTo(s.x+Math.cos(ba[leg])*r*2.2,s.y+Math.sin(ba[leg])*r*2.2);ctx.stroke();
            }
            ctx.fillStyle=col;ctx.shadowBlur=e.elite?10:3;ctx.beginPath();ctx.ellipse(s.x,s.y+r*0.2,r*0.8,r*0.65,0,0,PI2);ctx.fill();ctx.beginPath();ctx.ellipse(s.x,s.y-r*0.4,r*0.55,r*0.45,0,0,PI2);ctx.fill();
            const ec2=isQ?6:4;for(let ei=0;ei<ec2;ei++){ctx.fillStyle='#ef4444';ctx.shadowColor='#ef4444';ctx.shadowBlur=5;ctx.beginPath();ctx.arc(s.x-(ec2-1)*r*0.12+ei*r*0.25,s.y-r*0.45,r*0.08,0,PI2);ctx.fill();}
            break;}
        case 'knight':case 'darkKnight':{
            const isB=e.type==='darkKnight';
            ctx.fillStyle=col;ctx.beginPath();ctx.roundRect(s.x-r*0.85,s.y-r*0.5,r*1.7,r*1.5,3);ctx.fill();
            ctx.fillStyle=isB?'#172554':'#1e3a8a';ctx.beginPath();ctx.ellipse(s.x-r,s.y-r*0.1,r*0.45,r*0.35,0,0,PI2);ctx.fill();ctx.beginPath();ctx.ellipse(s.x+r,s.y-r*0.1,r*0.45,r*0.35,0,0,PI2);ctx.fill();
            ctx.fillStyle=col;ctx.beginPath();ctx.roundRect(s.x-r*0.65,s.y-r*1.5,r*1.3,r*1.1,4);ctx.fill();
            ctx.fillStyle=isB?'rgba(96,165,250,0.9)':'rgba(147,197,253,0.7)';ctx.shadowColor='#93c5fd';ctx.shadowBlur=isB?18:8;ctx.fillRect(s.x-r*0.4,s.y-r*1.05,r*0.8,r*0.18);
            if(isB){ctx.globalAlpha=0.28+Math.sin(gameTime*3)*0.1;ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;ctx.beginPath();ctx.arc(s.x,s.y,r*1.4,0,PI2);ctx.stroke();ctx.globalAlpha=1;}break;}
        case 'demonMage':case 'necromancer':{
            const isN=e.type==='necromancer';
            ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(s.x,s.y-r);ctx.lineTo(s.x+r*0.8,s.y+r*0.8);ctx.lineTo(s.x,s.y+r*0.6);ctx.lineTo(s.x-r*0.8,s.y+r*0.8);ctx.closePath();ctx.fill();
            ctx.beginPath();ctx.arc(s.x,s.y-r*0.7,r*0.65,0,PI2);ctx.fill();
            ctx.fillStyle=isN?'#e879f9':'#fb7185';ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=12;
            ctx.beginPath();ctx.arc(s.x-r*0.18,s.y-r*0.75,r*0.13,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(s.x+r*0.18,s.y-r*0.75,r*0.13,0,PI2);ctx.fill();
            if(isN){const sa=gameTime*2.5,sx2=s.x+Math.cos(sa)*r*1.3,sy2=s.y+Math.sin(sa)*r*1.3;ctx.fillStyle='#d4c5a9';ctx.shadowBlur=9;ctx.beginPath();ctx.arc(sx2,sy2,r*0.25,0,PI2);ctx.fill();ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(sx2-r*0.08,sy2-r*0.02,r*0.08,0,PI2);ctx.fill();ctx.beginPath();ctx.arc(sx2+r*0.08,sy2-r*0.02,r*0.08,0,PI2);ctx.fill();}
            ctx.strokeStyle=`rgba(${isN?'232,121,249':'251,113,133'},0.35)`;ctx.lineWidth=1.5;ctx.shadowBlur=7;ctx.beginPath();ctx.arc(s.x,s.y,r*1.2,gameTime,gameTime+PI*1.5);ctx.stroke();break;}
        case 'hugeDemon':{
            const p=0.95+Math.sin(gameTime*2)*0.05;
            ctx.fillStyle='rgba(127,29,29,0.5)';
            ctx.beginPath();ctx.moveTo(s.x,s.y-r*0.2);ctx.bezierCurveTo(s.x-r*2.5,s.y-r*1.5,s.x-r*3,s.y+r*0.5,s.x-r*2,s.y+r*1.2);ctx.bezierCurveTo(s.x-r*1.2,s.y+r*1.8,s.x-r*0.5,s.y+r*0.8,s.x,s.y+r*0.2);ctx.fill();
            ctx.beginPath();ctx.moveTo(s.x,s.y-r*0.2);ctx.bezierCurveTo(s.x+r*2.5,s.y-r*1.5,s.x+r*3,s.y+r*0.5,s.x+r*2,s.y+r*1.2);ctx.bezierCurveTo(s.x+r*1.2,s.y+r*1.8,s.x+r*0.5,s.y+r*0.8,s.x,s.y+r*0.2);ctx.fill();
            ctx.fillStyle=col;ctx.shadowBlur=22;ctx.beginPath();ctx.arc(s.x,s.y,r*0.85*p,0,PI2);ctx.fill();
            ctx.fillStyle='#450a0a';ctx.beginPath();ctx.moveTo(s.x-r*0.35,s.y-r*0.7);ctx.lineTo(s.x-r*0.7,s.y-r*1.7);ctx.lineTo(s.x-r*0.1,s.y-r*0.9);ctx.fill();ctx.beginPath();ctx.moveTo(s.x+r*0.35,s.y-r*0.7);ctx.lineTo(s.x+r*0.7,s.y-r*1.7);ctx.lineTo(s.x+r*0.1,s.y-r*0.9);ctx.fill();
            ctx.fillStyle='#ef4444';ctx.shadowColor='#ef4444';ctx.shadowBlur=26;ctx.beginPath();ctx.ellipse(s.x-r*0.32,s.y-r*0.2,r*0.22,r*0.15,0,0,PI2);ctx.fill();ctx.beginPath();ctx.ellipse(s.x+r*0.32,s.y-r*0.2,r*0.22,r*0.15,0,0,PI2);ctx.fill();
            ctx.globalAlpha=0.16+Math.sin(gameTime*3)*0.06;ctx.strokeStyle='#ef4444';ctx.lineWidth=3;ctx.beginPath();ctx.arc(s.x,s.y,r*1.3,0,PI2);ctx.stroke();ctx.beginPath();ctx.arc(s.x,s.y,r*1.7,0,PI2);ctx.stroke();ctx.globalAlpha=1;break;}
        case 'wraith':{
            const phase=Math.max(0.1,0.55+Math.sin(gameTime*3+r)*0.45);
            ctx.globalAlpha=phase;
            ctx.fillStyle=col;if(QUALITY.shadowBlur) ctx.shadowBlur=20;
            ctx.beginPath();ctx.ellipse(s.x,s.y,r*1.1,r*0.9,Math.sin(gameTime*2)*0.3,0,PI2);ctx.fill();
            ctx.fillStyle='rgba(0,0,0,0.6)';ctx.beginPath();ctx.arc(s.x,s.y,r*0.55,0,PI2);ctx.fill();
            ctx.fillStyle='#e879f9';if(QUALITY.shadowBlur){ctx.shadowColor='#e879f9';ctx.shadowBlur=10;}
            ctx.beginPath();ctx.arc(s.x-r*0.2,s.y-r*0.1,r*0.12,0,PI2);ctx.fill();
            ctx.beginPath();ctx.arc(s.x+r*0.2,s.y-r*0.1,r*0.12,0,PI2);ctx.fill();
            ctx.shadowBlur=0;
            for(let w=0;w<3;w++){const wa=gameTime*2+w*PI2/3;ctx.globalAlpha=phase*0.35;ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(s.x+Math.cos(wa)*r*0.7,s.y+Math.sin(wa)*r*0.7,r*0.25,r*0.45,wa,0,PI2);ctx.fill();}
            break;}
        default:ctx.fillStyle=col;ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.fill();
    }
    ctx.restore(); // ← always restore — no leaks regardless of which case ran
}

function drawEnemies(){
    // ── Hazards — each isolated ───────────────────────────────
    for(const h of hazards){
        if(!onScreen(h.x,h.y,h.maxR+20)) continue;
        const s=toScr(h.x,h.y);
        ctx.save();
        if(h.firePool){
            ctx.globalAlpha=clamp(h.life,0,0.5);ctx.fillStyle=COL.fire;
            if(QUALITY.shadowBlur){ctx.shadowColor=COL.fire;ctx.shadowBlur=16;}
            ctx.beginPath();ctx.arc(s.x,s.y,h.radius,0,PI2);ctx.fill();
        } else if(h.poison){
            ctx.globalAlpha=clamp(h.life*0.18,0,0.28);ctx.fillStyle=COL.poison;
            if(QUALITY.shadowBlur){ctx.shadowColor=COL.poison;ctx.shadowBlur=18;}
            ctx.beginPath();ctx.arc(s.x,s.y,h.radius,0,PI2);ctx.fill();
        } else if(h.voidRift){
            ctx.globalAlpha=clamp(h.life/h.maxLife,0,0.88);
            const vp=gameTime*3;
            for(let rg=0;rg<3;rg++){
                ctx.strokeStyle=`rgba(109,40,217,${0.4-rg*0.1})`;ctx.lineWidth=3-rg;
                ctx.beginPath();ctx.arc(s.x,s.y,Math.max(1,h.radius*(0.35+rg*0.3)),vp+rg,vp+rg+PI*1.5);ctx.stroke();
            }
            ctx.fillStyle='rgba(30,0,60,0.3)';ctx.beginPath();ctx.arc(s.x,s.y,h.radius,0,PI2);ctx.fill();
            ctx.globalAlpha=0.6;ctx.fillStyle='rgba(168,85,247,0.6)';
            if(QUALITY.shadowBlur){ctx.shadowColor='#a855f7';ctx.shadowBlur=20;}
            ctx.beginPath();ctx.arc(s.x,s.y,Math.max(1,h.radius*0.17),0,PI2);ctx.fill();
        } else if(h.mine&&!h.triggered){
            // Arcane mine — pulsing rune on ground
            const armed=h.armed<=0;
            const pulse=0.8+Math.sin(gameTime*(armed?8:3))*0.2;
            ctx.globalAlpha=armed?0.9:0.5+h.armed*0.4;
            ctx.fillStyle='rgba(0,0,0,0.5)';ctx.beginPath();ctx.arc(s.x,s.y,h.radius,0,PI2);ctx.fill();
            ctx.strokeStyle=armed?'#ef4444':'#facc15';ctx.lineWidth=2;
            if(QUALITY.shadowBlur){ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=armed?18:8;}
            ctx.beginPath();ctx.arc(s.x,s.y,h.radius*pulse,0,PI2);ctx.stroke();
            // Inner rune cross
            ctx.lineWidth=1.5;
            ctx.beginPath();ctx.moveTo(s.x-h.radius*0.6,s.y);ctx.lineTo(s.x+h.radius*0.6,s.y);ctx.stroke();
            ctx.beginPath();ctx.moveTo(s.x,s.y-h.radius*0.6);ctx.lineTo(s.x,s.y+h.radius*0.6);ctx.stroke();
            if(armed){ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(s.x,s.y,4,0,PI2);ctx.fill();}
        } else if(h.mine&&h.triggered){
            // skip — mine is dying, explosion hazard handles visual
        } else{
            ctx.globalAlpha=clamp(h.life,0,0.5);ctx.strokeStyle=h.col;ctx.lineWidth=3;
            if(QUALITY.shadowBlur){ctx.shadowColor=h.col;ctx.shadowBlur=10;}
            ctx.beginPath();ctx.arc(s.x,s.y,h.radius,0,PI2);ctx.stroke();
        }
        ctx.restore();
    }

    // ── Enemy projectiles ─────────────────────────────────────
    if(eProjArr.length){
        ctx.save();
        if(QUALITY.shadowBlur) ctx.shadowBlur=12;
        ctx.globalAlpha=1;
        for(const p of eProjArr){
            if(!onScreen(p.x,p.y,20)) continue;
            const s=toScr(p.x,p.y);
            if(QUALITY.shadowBlur) ctx.shadowColor=p.col;
            ctx.fillStyle=p.col;ctx.beginPath();ctx.arc(s.x,s.y,p.radius,0,PI2);ctx.fill();
            ctx.fillStyle='#fff';ctx.globalAlpha=0.5;ctx.beginPath();ctx.arc(s.x,s.y,p.radius*0.4,0,PI2);ctx.fill();
            ctx.globalAlpha=1;
        }
        ctx.restore();
    }

    // ── Enemies ── each fully isolated with ctx.save/restore ──
    // Ground shadows — single pass, no state changes
    ctx.save();ctx.fillStyle='rgba(0,0,0,0.38)';
    for(const e of enemies){
        if(!onScreen(e.x,e.y,e.radius*4)) continue;
        const s=toScr(e.x,e.y);
        ctx.beginPath();ctx.ellipse(s.x+2,s.y+e.radius+4,e.radius*0.85,e.radius*0.22,0,0,PI2);ctx.fill();
    }
    ctx.restore();

    // Each enemy drawn with full isolation
    for(const e of enemies){
        if(!onScreen(e.x,e.y,e.radius*4)) continue;
        const s=toScr(e.x,e.y);

        if(e.frozen>0){
            ctx.save();ctx.globalAlpha=0.32;ctx.fillStyle=COL.ice;
            ctx.beginPath();ctx.arc(s.x,s.y,e.radius,0,PI2);ctx.fill();ctx.restore();
        }

        drawEShape(s,e); // fully isolated internally with ctx.save/restore

        // Dark outline for readability (desktop only, skip under heavy load)
        if(QUALITY.enemyOutlines&&!LOD.simpleDraw){
            ctx.save();ctx.strokeStyle='rgba(0,0,0,0.3)';ctx.lineWidth=1;ctx.shadowBlur=0;
            ctx.beginPath();ctx.arc(s.x,s.y,e.radius,0,PI2);ctx.stroke();ctx.restore();
        }

        if(e.elite&&!e.boss){
            ctx.save();ctx.strokeStyle=COL.upgrade;ctx.lineWidth=1.5;ctx.globalAlpha=0.5;
            if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=8;}
            ctx.beginPath();ctx.arc(s.x,s.y,e.radius+5,0,PI2);ctx.stroke();ctx.restore();
        }
        if(e.shieldHp>0){
            ctx.save();ctx.strokeStyle=COL.shield;ctx.lineWidth=2.5;ctx.globalAlpha=0.6;
            if(QUALITY.shadowBlur){ctx.shadowColor=COL.shield;ctx.shadowBlur=10;}
            ctx.beginPath();ctx.arc(s.x,s.y,e.radius+6,0,PI2);ctx.stroke();ctx.restore();
        }
        if(e.elite||e.boss||e.hp<e.maxHp){
            ctx.save();ctx.shadowBlur=0;
            const bw=Math.max(e.radius*2+4,30),bh=e.boss?7:3,
                  bx=s.x-bw/2,by=s.y-e.radius-(e.boss?22:12);
            ctx.fillStyle='rgba(0,0,0,0.7)';ctx.beginPath();ctx.roundRect(bx-1,by-1,bw+2,bh+2,2);ctx.fill();
            ctx.fillStyle='#1c0a0a';ctx.fillRect(bx,by,bw,bh);
            const hr=clamp(e.hp/e.maxHp,0,1),hc=e.boss?(hr>0.5?'#dc2626':'#7f1d1d'):COL.dmg;
            ctx.fillStyle=hc;
            if(QUALITY.shadowBlur&&e.boss){ctx.shadowColor=hc;ctx.shadowBlur=8;}
            ctx.fillRect(bx,by,Math.max(1,bw*hr),bh);
            ctx.restore();
        }
    }
}

// ============================================================
//  WEAPON SYSTEM
// ============================================================
let projectiles=[], weapTimers={}, lChains=[];

const WEAPONS={
    magicBolt:{get name(){return T('wnMagicBolt');},col:'#a78bfa',cd:1.0,
        fire(){
            const sorted=enemiesByDist;
            let fired=0;
            for(const t of sorted){
                if(fired>=player.projCnt) break;
                if(dist(t,player)>player.range) continue;
                const{damage,crit}=player.getDmg(),a=ang(player,t);
                projectiles.push({x:player.x,y:player.y,vx:Math.cos(a)*player.projSpd,vy:Math.sin(a)*player.projSpd,
                    damage,crit,radius:6,life:1.5,col:'#a78bfa',glow:COL.magic,pierce:player.pierce,pierced:0});
                fired++;
            }
            if(fired>0) snd('shoot');
        }},
    fireOrb:{get name(){return T('wnFireOrb');},col:COL.fire,cd:0,passive:true,
        update(){
            const oc=3+Math.floor(player.level/8),or=70,od=Math.floor(player.damage*0.6*player.buffMult);
            for(const e of enemies){for(let o=0;o<oc;o++){const oa=gameTime*2.5+(PI2/oc)*o;if(Math.hypot(e.x-(player.x+Math.cos(oa)*or),e.y-(player.y+Math.sin(oa)*or))<16+e.radius&&e.hitFlash<=0){damageEnemy(e,od,false);e.hitFlash=0.15;}}}
        },
        draw(){
            const oc=3+Math.floor(player.level/8),or=70;
            for(let o=0;o<oc;o++){const oa=gameTime*2.5+(PI2/oc)*o,ox=player.x+Math.cos(oa)*or,oy=player.y+Math.sin(oa)*or,s=toScr(ox,oy);ctx.save();ctx.globalAlpha=0.28;ctx.fillStyle=COL.fire;ctx.shadowColor=COL.fire;ctx.shadowBlur=18;ctx.beginPath();ctx.arc(s.x,s.y,14,0,PI2);ctx.fill();ctx.globalAlpha=1;ctx.fillStyle='#fef08a';ctx.shadowBlur=22;ctx.beginPath();ctx.arc(s.x,s.y,9,0,PI2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x,s.y,4,0,PI2);ctx.fill();ctx.restore();}
        }},
    lightningChain:{get name(){return T('wnLightningChain');},col:COL.lightning,cd:1.5,
        fire(){
            if(!enemies.length) return;
            const sorted=enemiesByDist;
            if(dist(sorted[0],player)>player.range) return;
            const cn=3+Math.floor(player.level/10),{damage}=player.getDmg();
            let cur=sorted[0];const hit=new Set(),pts=[{x:player.x,y:player.y}];
            for(let c=0;c<cn&&cur;c++){hit.add(cur);pts.push({x:cur.x,y:cur.y});damageEnemy(cur,Math.floor(damage*0.7),false);let nx=null,best=200;for(const e of enemies)if(!hit.has(e)&&dist(cur,e)<best){best=dist(cur,e);nx=e;}cur=nx;}
            if(pts.length>1) lChains.push({pts,life:0.25});
        }},
    iceShard:{get name(){return T('wnIceShard');},col:COL.ice,cd:1.8,
        fire(){
            if(!enemies.length) return;
            const t=enemiesByDist[0];
            if(dist(t,player)>player.range) return;
            const{damage,crit}=player.getDmg(),a=ang(player,t);
            for(let sv=-1;sv<=1;sv++){const sa=a+sv*0.15;projectiles.push({x:player.x,y:player.y,vx:Math.cos(sa)*player.projSpd*0.8,vy:Math.sin(sa)*player.projSpd*0.8,damage:Math.floor(damage*0.5),crit,radius:5,life:1.2,col:COL.ice,glow:COL.ice,pierce:0,pierced:0,freeze:1.5});}
            snd('shoot');
        }},
    boomerangBlade:{get name(){return T('wnBoomerangBlade');},col:'#e2e8f0',cd:2.0,
        fire(){
            projectiles.push({x:player.x,y:player.y,vx:Math.cos(player.angle)*350,vy:Math.sin(player.angle)*350,damage:Math.floor(player.damage*0.8*player.buffMult),crit:false,radius:9,life:2.0,col:'#e2e8f0',glow:'#94a3b8',pierce:999,pierced:0,boom:true,boomT:0.6,retT:0,spin:0});
        }},
    poisonCloud:{get name(){return T('wnPoisonCloud');},col:COL.poison,cd:3.0,
        fire(){
            if(!enemies.length) return;
            const t=enemiesByDist[0];
            if(dist(t,player)>player.range*1.2) return;
            if(hazards.length<80) hazards.push({x:t.x,y:t.y,radius:60,maxR:60,growSpd:0,dmg:Math.floor(player.damage*0.15*player.buffMult),life:4,col:COL.poison,poison:true});
        }},
    // NEW — Shadow Blades
    shadowBlades:{get name(){return T('wnShadowBlades');},col:'#7c3aed',cd:0,passive:true,
        update(){
            const bc=4+Math.floor(player.level/8),br=80,bd=Math.floor(player.damage*0.65*player.buffMult);
            for(const e of enemies){for(let b=0;b<bc;b++){const ba=gameTime*4+(PI2/bc)*b,bx=player.x+Math.cos(ba)*br,by=player.y+Math.sin(ba)*br;if(Math.hypot(e.x-bx,e.y-by)<18+e.radius&&e.hitFlash<=0){damageEnemy(e,bd,false);e.hitFlash=0.12;}}}
        },
        draw(){
            const bc=4+Math.floor(player.level/8),br=80;
            for(let b=0;b<bc;b++){const ba=gameTime*4+(PI2/bc)*b,bx=player.x+Math.cos(ba)*br,by=player.y+Math.sin(ba)*br,s=toScr(bx,by);ctx.save();ctx.translate(s.x,s.y);ctx.rotate(ba+PI/4);ctx.shadowColor='#7c3aed';ctx.shadowBlur=16;ctx.fillStyle='#c084fc';ctx.fillRect(-9,-2.5,18,5);ctx.fillRect(-2.5,-9,5,18);ctx.fillStyle='rgba(168,85,247,0.35)';ctx.beginPath();ctx.arc(0,0,13,0,PI2);ctx.fill();ctx.restore();}
        }},
    // NEW — Blood Nova
    bloodNova:{get name(){return T('wnBloodNova');},col:'#ef4444',cd:4.5,
        fire(){
            const nr=130,{damage}=player.getDmg();
            for(let i=0;i<22;i++){const pa=PI2*i/22;addParticle({x:player.x,y:player.y,vx:Math.cos(pa)*330,vy:Math.sin(pa)*330,life:0.45,col:'#ef4444',r:7,type:'spark'});}
            for(const e of enemies)if(dist(e,player)<nr){damageEnemy(e,Math.floor(damage*1.4),false);const ka=ang(player,e);e.kb={x:Math.cos(ka)*360,y:Math.sin(ka)*360,t:0.18};}
            hazards.push({x:player.x,y:player.y,radius:0,maxR:nr,growSpd:620,dmg:0,life:0.28,col:'#ef4444'});
            addShake(5);snd('nova',true);
        }},
    // NEW — Void Rift
    voidRift:{get name(){return T('wnVoidRift');},col:'#6d28d9',cd:7.0,
        fire(){
            if(!enemies.length) return;
            const t=enemiesByDist[0];
            const td=Math.floor(player.damage*0.4*player.buffMult);
            if(hazards.length<80) hazards.push({x:t.x,y:t.y,radius:110,maxR:110,growSpd:0,dmg:0,life:5,maxLife:5,col:'#6d28d9',voidRift:true,pullStr:165,tickDmg:td});
            for(let i=0;i<14;i++){const pa=rand(0,PI2);addParticle({x:t.x,y:t.y,vx:Math.cos(pa)*rand(-90,90),vy:Math.sin(pa)*rand(-90,90),life:0.65,col:'#a855f7',r:rand(3,8),type:'spark'});}
            snd('rift',true);
        }},

    // ── Soul Drain — life-steal beam ─────────────────────────
    soulDrain:{get name(){return T('wnSoulDrain');},col:'#c084fc',cd:2.5,
        fire(){
            if(!enemies.length) return;
            const t=enemiesByDist[0];
            if(dist(t,player)>player.range) return;
            const dmg=Math.floor(player.damage*0.55*player.buffMult);
            damageEnemy(t,dmg,false);
            const heal=Math.max(1,Math.floor(dmg*0.3));
            player.hp=Math.min(player.hp+heal,player.maxHp);
            floatText(player.x,player.y-30,`+${heal}`,COL.magic,16,0.8);
            lChains.push({pts:[{x:player.x,y:player.y},{x:t.x,y:t.y}],life:0.25,soul:true});
            snd('soul',true);
        }},

    // ── Arcane Mine — places rune trap on ground ─────────────
    arcaneMine:{get name(){return T('wnArcaneMine');},col:'#facc15',cd:4.5,
        fire(){
            const a=rand(0,PI2),d=rand(50,90);
            hazards.push({x:player.x+Math.cos(a)*d,y:player.y+Math.sin(a)*d,
                radius:20,maxR:20,growSpd:0,
                dmg:Math.floor(player.damage*2.8*player.buffMult),
                life:10,col:'#facc15',mine:true,armed:0.6,triggered:false});
        }},
};

function damageEnemy(e,dmg,show=true){
    if((e.iFrames||0)>0) return;
    if(e.shieldHp>0){const ab=Math.min(dmg,e.shieldHp);e.shieldHp-=ab;dmg-=ab;if(ab>0&&show)floatText(e.x+rand(-8,8),e.y-e.radius-5,`${ab}`,COL.shield,14,0.5);}
    if(dmg>0){
        e.hp-=dmg;e.hitFlash=0.1;
        addCombo(); // increment combo on every successful hit
        if(show) floatText(e.x+rand(-10,10),e.y-e.radius-5,`${dmg}`,COL.upgrade,16,0.6);
        const sc=QUALITY.particleSpark;
        for(let i=0;i<sc;i++){const pa=rand(0,PI2);addParticle({x:e.x,y:e.y,vx:Math.cos(pa)*rand(50,130),vy:Math.sin(pa)*rand(50,130),life:rand(0.08,0.22),col:'#fde68a',r:rand(1,3),type:'spark'});}
        addImpact(e.x,e.y,e.col,e.radius*2.5);
    }
}

function updateWeapons(dt){
    for(const wid of player.weapons){
        const w=WEAPONS[wid]; if(!w) continue;
        if(w.passive){w.update(dt);continue;}
        if(!weapTimers[wid]) weapTimers[wid]=0;
        weapTimers[wid]-=dt;
        // Only fire if under projectile cap (200) to prevent memory runaway
        if(weapTimers[wid]<=0){if(projectiles.length<200)w.fire();weapTimers[wid]=w.cd/player.atkSpd;}
    }
    // ── Projectile ↔ Enemy collision ─────────────────────────
    for(let i=projectiles.length-1;i>=0;i--){
        const p=projectiles[i];
        // Boomerang flight logic
        if(p.boom){
            p.spin+=dt*12;p.boomT-=dt;
            if(p.boomT<=0&&p.retT===0) p.retT=1;
            if(p.retT>0){
                const a=ang(p,player);p.vx=Math.cos(a)*450;p.vy=Math.sin(a)*450;
                if(dist(p,player)<30){projectiles.splice(i,1);continue;}
            }
        }
        p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;
        if(p.life<=0){projectiles.splice(i,1);continue;}

        let removed=false;
        const pr=p.radius+40; // max enemy radius ~45 + p.radius
        for(let j=enemies.length-1;j>=0;j--){
            if(removed) break;                    // projectile already gone
            const e=enemies[j];
            // Fast AABB reject before expensive dist() call
            if(Math.abs(p.x-e.x)>pr+e.radius||Math.abs(p.y-e.y)>pr+e.radius) continue;
            if(dist(p,e)>=p.radius+e.radius) continue; // miss

            if(p.crit) floatText(e.x,e.y-e.radius-10,`${T('critLabel')} ${p.damage}!`,'#facc15',22,0.8,true);
            damageEnemy(e,p.damage,false);
            const kba=ang(player,e);
            e.kb={x:Math.cos(kba)*150,y:Math.sin(kba)*150,t:0.08};
            if(p.freeze) e.frozen=p.freeze;

            if(p.boom){
                // Boomerang: keeps going, 1 hit per enemy per pass (hitFlash as guard)
                e.hitFlash=Math.max(e.hitFlash,0.15);
            } else if(p.pierced<p.pierce){
                // Pierce remaining — hit this enemy, continue to next
                p.pierced++;
                // break after each hit so only ONE enemy is damaged per frame pass
                // (prevents multi-enemy same-frame burst)
                break;
            } else {
                // No pierce left — destroy projectile
                projectiles.splice(i,1);
                removed=true;
            }
        }
    }
    for(let i=lChains.length-1;i>=0;i--){lChains[i].life-=dt;if(lChains[i].life<=0)lChains.splice(i,1);}
}

function drawWeapons(){
    if(player.weapons.includes('fireOrb')) WEAPONS.fireOrb.draw();
    if(player.weapons.includes('shadowBlades')) WEAPONS.shadowBlades.draw();

    // Lightning + soul drain chains
    if(lChains.length){
        ctx.save();ctx.lineWidth=3;
        for(const c of lChains){
            const isSoul=c.soul;
            ctx.globalAlpha=clamp(c.life*4,0,1);
            ctx.strokeStyle=isSoul?'#c084fc':COL.lightning;
            if(QUALITY.shadowBlur){ctx.shadowColor=isSoul?'#a855f7':COL.lightning;ctx.shadowBlur=isSoul?20:16;}
            ctx.lineWidth=isSoul?4:3;
            ctx.setLineDash(isSoul?[6,4]:[]);
            ctx.beginPath();
            for(let i=0;i<c.pts.length;i++){
                const s=toScr(c.pts[i].x,c.pts[i].y);
                if(i===0) ctx.moveTo(s.x,s.y);
                else{
                    if(!isSoul){const prev=toScr(c.pts[i-1].x,c.pts[i-1].y);const mx=(prev.x+s.x)/2+rand(-14,14),my=(prev.y+s.y)/2+rand(-14,14);ctx.lineTo(mx,my);}
                    ctx.lineTo(s.x,s.y);
                }
            }
            ctx.stroke();
            ctx.setLineDash([]);
        }
        ctx.restore();
    }

    // Projectile trails first
    drawTrails();

    // Projectiles — batched, single save/restore
    if(projectiles.length){
        ctx.save();
        if(QUALITY.shadowBlur) ctx.shadowBlur=14;
        for(const p of projectiles){
            if(!onScreen(p.x,p.y,25)) continue;
            const s=toScr(p.x,p.y);
            if(QUALITY.shadowBlur) ctx.shadowColor=p.glow||p.col;
            if(p.boom){
                ctx.fillStyle=p.col;ctx.save();ctx.translate(s.x,s.y);ctx.rotate(p.spin||0);
                ctx.fillRect(-p.radius,-2.5,p.radius*2,5);ctx.fillRect(-2.5,-p.radius,5,p.radius*2);ctx.restore();
            } else {
                // Glow halo
                ctx.globalAlpha=0.35;ctx.fillStyle=p.col;ctx.beginPath();ctx.arc(s.x,s.y,p.radius*2.2,0,PI2);ctx.fill();
                // Core
                ctx.globalAlpha=1;ctx.fillStyle=p.col;ctx.beginPath();ctx.arc(s.x,s.y,p.radius,0,PI2);ctx.fill();
                // White centre
                ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x,s.y,p.radius*0.38,0,PI2);ctx.fill();
            }
        }
        ctx.restore();
    }
}

// ============================================================
//  WEAPON EVOLUTIONS
// ============================================================
const EVOS=[
    {id:'arcaneStorm',  base:'magicBolt',       needs:{atkSpd:2.0,range:400},
        apply(){player.projCnt+=3;player.pierce+=2;player.atkSpd*=1.3;floatText(player.x,player.y-50,T('evoArcaneStorm'),'#a855f7',26,3);}},
    {id:'infernoRing',  base:'fireOrb',          needs:{damage:30},
        apply(){player.damage+=10;floatText(player.x,player.y-50,T('evoInfernoRing'),COL.fire,26,3);}},
    {id:'thunderStorm', base:'lightningChain',   needs:{range:450},
        apply(){player.range*=1.4;player.atkSpd*=1.2;floatText(player.x,player.y-50,T('evoThunderStorm'),COL.lightning,26,3);}},
    {id:'voidSing',     base:'voidRift',         needs:{range:400,pierce:2},
        apply(){player.damage+=8;player.pickR*=1.3;floatText(player.x,player.y-50,T('evoVoidSing'),'#6d28d9',26,3);}},
];
const evosDone={};
function checkEvos(){
    for(const ev of EVOS){
        if(evosDone[ev.id]||!player.weapons.includes(ev.base)) continue;
        let ok=true;for(const[k,v]of Object.entries(ev.needs))if((player[k]||0)<v){ok=false;break;}
        if(ok){evosDone[ev.id]=true;ev.apply();addShake(6);}
    }
}

// ============================================================
//  XP SYSTEM
// ============================================================
let xpOrbs=[];
function giveXp(amt){
    const boosted=Math.floor(amt*player.xpMult*comboMult());
    player.xp+=boosted; snd('xp');
    while(player.xp>=player.xpNext){player.xp-=player.xpNext;player.level++;player.xpNext=Math.floor(player.xpNext*1.35);showUpgrade();snd('levelup',true);triggerLvlFlash();}
}
function updateXpOrbs(dt){
    const px=player.x,py=player.y,pr=player.pickR,rr=player.radius;
    for(let i=xpOrbs.length-1;i>=0;i--){
        const o=xpOrbs[i];o.life-=dt;if(o.life<=0){xpOrbs.splice(i,1);continue;}
        // Fast AABB pre-check against pickR
        if(Math.abs(o.x-px)>pr+o.radius&&Math.abs(o.y-py)>pr+o.radius){continue;}
        const d=dist(o,{x:px,y:py});
        if(d<pr){
            const a=ang(o,{x:px,y:py});const spd=380+(pr-d)*3;
            o.x+=Math.cos(a)*spd*dt;o.y+=Math.sin(a)*spd*dt;
            if(QUALITY.xpTrail&&spd>300&&particles.length<QUALITY.maxParticles&&Math.random()<0.35){
                addParticle({x:o.x,y:o.y,vx:rand(-20,20),vy:rand(-20,20),life:0.18,col:COL.xp,r:o.radius*0.6,type:'spark'});
            }
        }
        if(d<rr+o.radius+5){
            giveXp(o.xp);
            addParticle({x:o.x,y:o.y,vx:0,vy:-60,life:0.3,col:COL.xp,r:o.radius*1.5,type:'flash'});
            xpOrbs.splice(i,1);
        }
    }
}
function drawXpOrbs(){
    ctx.save();
    if(QUALITY.shadowBlur){ctx.shadowBlur=12;ctx.shadowColor=COL.xp;}
    for(const o of xpOrbs){
        if(!onScreen(o.x,o.y,20)) continue;
        const s=toScr(o.x,o.y),r=o.radius,p2=0.85+Math.sin(gameTime*4+o.x*0.1)*0.15;
        ctx.globalAlpha=0.28;ctx.fillStyle=COL.xp;ctx.beginPath();ctx.arc(s.x,s.y,r*2*p2,0,PI2);ctx.fill();
        ctx.globalAlpha=1;
        ctx.fillStyle=COL.xp;ctx.beginPath();ctx.moveTo(s.x,s.y-r*1.1*p2);ctx.lineTo(s.x+r*0.7,s.y);ctx.lineTo(s.x,s.y+r*1.1*p2);ctx.lineTo(s.x-r*0.7,s.y);ctx.closePath();ctx.fill();
        ctx.fillStyle='#bbf7d0';ctx.beginPath();ctx.moveTo(s.x,s.y-r*1.1*p2);ctx.lineTo(s.x+r*0.35,s.y-r*0.3);ctx.lineTo(s.x,s.y);ctx.lineTo(s.x-r*0.35,s.y-r*0.3);ctx.closePath();ctx.fill();
    }
    ctx.restore();
}

// ============================================================
//  UPGRADES
// ============================================================
const ALL_UPS=[
    {get name(){return T('upDmg20');},          get desc(){return T('upDmg20d');},             icon:'⚔',cat:'atk',  apply(){player.damage=Math.floor(player.damage*1.2);}},
    {get name(){return T('upAtkSpd');},get desc(){return T('upAtkSpdd');},                    icon:'⚡',cat:'atk',  apply(){player.atkSpd*=1.15;}},
    {get name(){return T('upCrit');},     get desc(){return T('upCritd');},              icon:'💥',cat:'atk',  apply(){player.crit+=0.05;}},
    {get name(){return T('upCritDmg');},    get desc(){return T('upCritDmgd');},          icon:'🔥',cat:'atk',  apply(){player.critMult+=0.25;}},
    {get name(){return T('upPierce');},      get desc(){return T('upPierced');},          icon:'🗡',cat:'atk',  apply(){player.pierce++;}},
    {get name(){return T('upProj');},          get desc(){return T('upProjd');},    icon:'✨',cat:'atk',  apply(){player.projCnt++;}},
    {get name(){return T('upHp');},       get desc(){return T('upHpd');},   icon:'❤',cat:'def',  apply(){player.maxHp+=20;player.hp=Math.min(player.hp+20,player.maxHp);}},
    {get name(){return T('upRegen');},     get desc(){return T('upRegend');},       icon:'💚',cat:'def',  apply(){player.regen+=1;}},
    {get name(){return T('upShield10');},            get desc(){return T('upShield10d');},            icon:'🛡',cat:'def',  apply(){player.shieldMax+=10;player.shield+=10;}},
    {get name(){return T('upHeal');},     get desc(){return T('upHeald');},           icon:'✙',cat:'def',  apply(){player.hp=Math.min(player.hp+40,player.maxHp);}},
    {get name(){return T('upSpd10');},      get desc(){return T('upSpd10d');},             icon:'👟',cat:'util', apply(){player.speed*=1.1;}},
    {get name(){return LANG==='ru'?'+20% Радиус сбора':'+20% Pickup';},  get desc(){return LANG==='ru'?'XP орбы притягиваются издалека':'XP orbs attracted from further';},      icon:'🧲',cat:'util', apply(){player.pickR*=1.2;}},
    {get name(){return T('upXp');},      get desc(){return T('upXpd');},              icon:'📚',cat:'util', apply(){player.xpMult+=0.15;}},
    {get name(){return T('upRange');},     get desc(){return T('upRanged');},         icon:'🎯',cat:'util', apply(){player.range*=1.2;}},
    {get name(){return T('upSlow');},         get desc(){return T('upSlowd');},          icon:'❄',cat:'util', apply(){player.slowAura=Math.min(player.slowAura+0.12,0.6);}},
    {get name(){return T('wnFireOrb');},       get desc(){return T('wdFireOrb');},     icon:'🔴',cat:'weapon',once:true,apply(){if(!player.weapons.includes('fireOrb'))player.weapons.push('fireOrb');}},
    {get name(){return T('wnLightningChain');},get desc(){return T('wdLightning');},   icon:'⚡',cat:'weapon',once:true,apply(){if(!player.weapons.includes('lightningChain'))player.weapons.push('lightningChain');}},
    {get name(){return T('wnIceShard');},      get desc(){return T('wdIce');},         icon:'🔷',cat:'weapon',once:true,apply(){if(!player.weapons.includes('iceShard'))player.weapons.push('iceShard');}},
    {get name(){return T('wnBoomerangBlade');},get desc(){return T('wdBoomerang');},   icon:'🪃',cat:'weapon',once:true,apply(){if(!player.weapons.includes('boomerangBlade'))player.weapons.push('boomerangBlade');}},
    {get name(){return T('wnPoisonCloud');},   get desc(){return T('wdPoison');},      icon:'☁',cat:'weapon',once:true,apply(){if(!player.weapons.includes('poisonCloud'))player.weapons.push('poisonCloud');}},
    {get name(){return T('wnShadowBlades');},  get desc(){return T('wdShadow');},      icon:'🌑',cat:'weapon',once:true,apply(){if(!player.weapons.includes('shadowBlades'))player.weapons.push('shadowBlades');}},
    {get name(){return T('wnBloodNova');},     get desc(){return T('wdBloodNova');},   icon:'💢',cat:'weapon',once:true,apply(){if(!player.weapons.includes('bloodNova'))player.weapons.push('bloodNova');}},
    {get name(){return T('wnVoidRift');},      get desc(){return T('wdVoidRift');},    icon:'🕳',cat:'weapon',once:true,apply(){if(!player.weapons.includes('voidRift'))player.weapons.push('voidRift');}},
    {get name(){return T('wnSoulDrain');},     get desc(){return T('wdSoulDrain');},   icon:'💜',cat:'weapon',once:true,apply(){if(!player.weapons.includes('soulDrain'))player.weapons.push('soulDrain');}},
    {get name(){return T('wnArcaneMine');},    get desc(){return T('wdMine');},        icon:'💣',cat:'weapon',once:true,apply(){if(!player.weapons.includes('arcaneMine'))player.weapons.push('arcaneMine');}},
    // Extra stat upgrades
    {get name(){return T('upProjDmg');}, get desc(){return T('upProjDmgd');},    icon:'🔺',cat:'atk',  apply(){player.damage=Math.floor(player.damage*1.1);player.projSpd=Math.floor(player.projSpd*1.05);}},
    {get name(){return T('upDash');},      get desc(){return T('upDashd');},   icon:'💨',cat:'util', apply(){player.dashCDMax=Math.max(0.5,player.dashCDMax*0.75);}},
    {get name(){return T('upShield15');},            get desc(){return T('upShield15d');},           icon:'🔵',cat:'def',  apply(){player.shieldMax+=15;player.shield=Math.min(player.shield+15,player.shieldMax);}},
    {get name(){return T('upProjSpd');},get desc(){return T('upProjSpdd');},        icon:'➡',cat:'atk',  apply(){player.projSpd=Math.floor(player.projSpd*1.25);}},
];
let upChoices=[],upBonus=1,hovUp=-1,usedOnce=new Set();

function showUpgrade(bonus=1){
    if(gameState==='upgrade') return;
    upBonus=bonus; gameState='upgrade';
    const avail=ALL_UPS.filter(u=>!u.once||!usedOnce.has(u.name));
    upChoices=[...avail].sort(()=>Math.random()-0.5).slice(0,3);
}
function selectUpgrade(i){
    if(i<0||i>=upChoices.length) return;
    const u=upChoices[i]; u.apply(); if(u.once) usedOnce.add(u.name);
    gameState='playing'; floatText(player.x,player.y-40,u.name,COL.upgrade,22,1.5);
    checkEvos();
}

function drawUpgradeScreen(){
    ctx.save();
    ctx.fillStyle='rgba(5,8,18,0.92)';ctx.fillRect(0,0,W,H);

    // Header
    ctx.textAlign='center';
    if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=28;}
    ctx.fillStyle=COL.upgrade;ctx.font='bold 32px Georgia,serif';
    ctx.fillText(`✦ ${T('levelLabel')} ${player.level} — ${T('upgradeTitle')} ✦`,W/2,70);ctx.shadowBlur=0;
    if(upBonus>=2){ctx.fillStyle='#e879f9';ctx.font='bold 13px Georgia,serif';
        ctx.fillText(T('legendaryChest'),W/2,95);}
    else{ctx.fillStyle='#475569';ctx.font='13px Georgia,serif';ctx.fillText(IS_MOBILE?T('upgradeHintMobile'):T('upgradeHintDesktop'),W/2,95);}

    const cardW=Math.min(520,W-60), cardH=118, cardX=W/2-cardW/2;
    for(let i=0;i<upChoices.length;i++){
        const u=upChoices[i], by=112+i*(cardH+8), hov=hovUp===i;
        const cc={atk:COL.dmg,def:'#22c55e',util:COL.ice,weapon:COL.magic}[u.cat]||'#fff';

        // Shadow + bg
        ctx.fillStyle='rgba(0,0,0,0.5)';ctx.beginPath();ctx.roundRect(cardX+4,by+4,cardW,cardH,12);ctx.fill();
        ctx.fillStyle=hov?'rgba(25,35,55,0.97)':'rgba(10,14,30,0.93)';
        ctx.strokeStyle=hov?cc:'rgba(50,65,100,0.6)';ctx.lineWidth=hov?2.5:1;
        if(hov&&QUALITY.shadowBlur){ctx.shadowColor=cc;ctx.shadowBlur=20;}
        ctx.beginPath();ctx.roundRect(cardX,by,cardW,cardH,12);ctx.fill();ctx.stroke();ctx.shadowBlur=0;

        // Left accent bar
        ctx.fillStyle=cc;ctx.beginPath();
        ctx.roundRect(cardX,by,5,cardH,{topLeft:12,bottomLeft:12,topRight:0,bottomRight:0});ctx.fill();

        // Number badge
        ctx.fillStyle=hov?cc:'rgba(80,95,120,0.8)';ctx.beginPath();ctx.roundRect(cardX+14,by+cardH/2-15,30,30,7);ctx.fill();
        ctx.fillStyle='#fff';ctx.font='bold 16px Georgia,serif';ctx.textAlign='center';
        ctx.fillText(`${i+1}`,cardX+29,by+cardH/2+6);

        // Icon + name + desc
        ctx.font='24px serif';ctx.textAlign='left';ctx.fillText(u.icon||'',cardX+54,by+44);
        ctx.fillStyle='#f1f5f9';ctx.font='bold 16px Georgia,serif';ctx.fillText(u.name,cardX+90,by+40);
        ctx.fillStyle='#8898b0';ctx.font='13px Georgia,serif';ctx.fillText(u.desc,cardX+90,by+62);

        // Category + extra info
        ctx.fillStyle=cc;ctx.font='11px Georgia,serif';
        const catLabel=u.cat==='atk'?T('catAtk'):u.cat==='def'?T('catDef'):u.cat==='weapon'?T('catWeapon'):T('catUtil');
        let extra='';
        if(u.cat==='weapon'){const wkey=u.name==='Lightning Chain'?'lightningChain':u.name==='Blood Nova'?'bloodNova':u.name==='Magic Bolt'?'magicBolt':u.name.replace(/ /g,'').charAt(0).toLowerCase()+u.name.replace(/ /g,'').slice(1);const wref=WEAPONS[wkey];if(wref)extra=wref.passive?` · ${T('passive')}`:(wref.cd?` · CD ${wref.cd}s`:'');}
        ctx.fillText(catLabel+extra,cardX+90,by+cardH-18);
    }
    ctx.restore();
}

// ============================================================
//  PARTICLES & AMBIENT  (optimized batched rendering)
// ============================================================
let particles=[],floatTexts=[];
const ambParts=[];

// ── Kill streak ──────────────────────────────────────────────
const streak={count:0,timer:0,decay:1.8,display:0,flash:0};
function addKill(){
    streak.count++;streak.timer=streak.decay;streak.display=streak.count;
    if(streak.count>=5)streak.flash=0.35;
}
function updateStreak(dt){
    if(streak.timer>0){streak.timer-=dt;if(streak.timer<=0)streak.count=0;}
    if(streak.flash>0)streak.flash-=dt*2.5;
}

// ── Combo meter ──────────────────────────────────────────────
// Combo stacks on hits, decays fast, boosts XP and crystal rewards
const combo={count:0,timer:0,decayTime:2.2,maxBonus:3.0};
function addCombo(){
    combo.count++;combo.timer=combo.decayTime;
}
function updateCombo(dt){
    if(combo.timer>0){combo.timer-=dt;if(combo.timer<=0)combo.count=0;}
}
function comboMult(){
    // 1.0 at 0 combo, up to 3.0 at 50+ combo
    return Math.min(combo.maxBonus,1+combo.count*0.04);
}
function drawCombo(){
    if(combo.count<3) return;
    const cx=W/2,cy=H-88;
    const mult=comboMult();
    const col=mult>=2.5?'#ef4444':mult>=1.8?'#facc15':'#c084fc';
    ctx.save();
    ctx.textAlign='center';
    ctx.fillStyle=col;ctx.font=`bold ${Math.min(22,14+combo.count/3)|0}px Georgia,serif`;
    if(QUALITY.shadowBlur){ctx.shadowColor=col;ctx.shadowBlur=12;}
    ctx.globalAlpha=0.6+Math.min(0.4,combo.timer/combo.decayTime*0.4);
    ctx.fillText(`${T('comboLabel')} ×${combo.count}  XP ×${mult.toFixed(1)}`,cx,cy);
    // Decay bar
    const bw=120,bh=3,bx=cx-bw/2,by=cy+6;
    ctx.globalAlpha=0.4;ctx.fillStyle='rgba(255,255,255,0.15)';ctx.fillRect(bx,by,bw,bh);
    ctx.globalAlpha=0.8;ctx.fillStyle=col;ctx.fillRect(bx,by,bw*(combo.timer/combo.decayTime),bh);
    ctx.restore();
}

// ── Impact rings ─────────────────────────────────────────────
let impactRings=[];
function addImpact(x,y,col,r=24){
    if(!QUALITY.impactRings||impactRings.length>40) return;
    impactRings.push({x,y,col,r:r*0.3,maxR:r,life:0.38,maxLife:0.38});
}
function updateImpacts(dt){for(let i=impactRings.length-1;i>=0;i--){const r=impactRings[i];r.r=lerp(r.r,r.maxR,dt*8);r.life-=dt;if(r.life<=0)impactRings.splice(i,1);}}
function drawImpacts(){
    ctx.save();
    for(const r of impactRings){
        if(!onScreen(r.x,r.y,r.maxR+4)) continue;
        const s=toScr(r.x,r.y);const a=clamp(r.life/r.maxLife,0,1);
        ctx.globalAlpha=a*0.65;ctx.strokeStyle=r.col;ctx.lineWidth=2;
        ctx.beginPath();ctx.arc(s.x,s.y,r.r,0,PI2);ctx.stroke();
    }
    ctx.restore();
}

// ── Boss spawn flash ─────────────────────────────────────────
let bossFlash={active:false,timer:0,x:0,y:0,col:'#ef4444'};
function triggerBossFlash(x,y,col){
    if(!QUALITY.bossFlash) return;
    bossFlash={active:true,timer:0.7,x,y,col};
}
function updateBossFlash(dt){if(bossFlash.active){bossFlash.timer-=dt;if(bossFlash.timer<=0)bossFlash.active=false;}}
function drawBossFlash(){
    if(!bossFlash.active) return;
    const t=clamp(bossFlash.timer/0.7,0,1);
    const s=toScr(bossFlash.x,bossFlash.y);
    ctx.save();
    // Expanding ring
    const maxR=300, r=maxR*(1-t);
    if(r>1){  // guard: don't draw if ring hasn't expanded yet
        ctx.globalAlpha=t*0.65;ctx.strokeStyle=bossFlash.col;ctx.lineWidth=4+t*6;
        if(QUALITY.shadowBlur){ctx.shadowColor=bossFlash.col;ctx.shadowBlur=22;}
        ctx.beginPath();ctx.arc(s.x,s.y,r,0,PI2);ctx.stroke();
        ctx.lineWidth=2;
        for(let i=0;i<12;i++){
            const a=i*PI/6;const r1=r*0.4,r2=r*0.95;
            ctx.globalAlpha=t*0.5;
            ctx.beginPath();ctx.moveTo(s.x+Math.cos(a)*r1,s.y+Math.sin(a)*r1);ctx.lineTo(s.x+Math.cos(a)*r2,s.y+Math.sin(a)*r2);ctx.stroke();
        }
    }
    ctx.globalAlpha=t*0.08;ctx.fillStyle=bossFlash.col;ctx.fillRect(0,0,W,H);
    ctx.restore();
}

// ── Projectile trails (offscreen trail canvas) ───────────────
const trailOff = document.createElement('canvas');
trailOff.width=W; trailOff.height=H;
const trailCtx = trailOff.getContext('2d');

function updateTrails(){
    if(!QUALITY.projTrails) return;
    // Fade the trail canvas each frame
    trailCtx.globalCompositeOperation='destination-out';
    trailCtx.globalAlpha=0.18;
    trailCtx.fillRect(0,0,W,H);
    trailCtx.globalCompositeOperation='source-over';
    // Stamp current projectile positions
    for(const p of projectiles){
        if(!onScreen(p.x,p.y,25)||p.boom) continue;
        const s=toScr(p.x,p.y);
        trailCtx.globalAlpha=0.55;
        trailCtx.fillStyle=p.col;
        trailCtx.beginPath();trailCtx.arc(s.x,s.y,p.radius*0.7,0,PI2);trailCtx.fill();
    }
}
function drawTrails(){
    if(!QUALITY.projTrails) return;
    ctx.save();ctx.globalAlpha=0.55;ctx.drawImage(trailOff,0,0);ctx.restore();
}
function triggerLvlFlash(){lvlFlash=0.55;}

// ── Low-HP pulse ─────────────────────────────────────────────
let hpPulseT=0;
let lvlFlash=0;

// ── Blood decals on ground (offscreen canvas) ────────────────
function floatText(x,y,text,col,size,life,isCrit=false){
    if(floatTexts.length>=QUALITY.maxFloatTexts) return;
    floatTexts.push({x,y,text,col,size,life,maxLife:life,crit:isCrit});
}

// Ambient particles
function initAmb(){for(let i=0;i<QUALITY.maxAmbient;i++) ambParts.push(newAmb(true));}
function newAmb(wide=false){
    const ch=getCh(),cols=[ch.ambient,'rgba(168,85,247,0.55)','rgba(200,100,50,0.4)','rgba(70,190,110,0.35)'];
    const lt=rand(6,12);
    const cx=wide?rand(0,WORLD.w):player.x+rand(-W*0.85,W*0.85);
    const cy=wide?rand(0,WORLD.h):player.y+rand(-H*0.85,H*0.85);
    return{x:cx,y:cy,vx:rand(-10,10),vy:rand(-22,-6),life:lt,maxLife:lt,r:rand(0.7,2.5),col:choose(cols)};
}
function updateAmb(dt){
    for(let i=0;i<ambParts.length;i++){
        const p=ambParts[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;
        if(p.life<=0||!onScreen(p.x,p.y,90))ambParts[i]=newAmb();
    }
}
// Batched ambient draw — single shadowBlur call
function drawAmb(){
    ctx.save();ctx.shadowBlur=0;
    for(const p of ambParts){
        if(!onScreen(p.x,p.y,12)) continue;
        const s=toScr(p.x,p.y);
        ctx.globalAlpha=(p.life/p.maxLife)*0.45;
        ctx.fillStyle=p.col;
        if(QUALITY.shadowBlur){ctx.shadowColor=p.col;ctx.shadowBlur=4;}
        ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
    }
    ctx.restore();
}

function updateParticles(dt){
    for(let i=particles.length-1;i>=0;i--){
        const p=particles[i];p.x+=(p.vx||0)*dt;p.y+=(p.vy||0)*dt;
        if(p.type==='blood'||p.type==='death') p.vy=(p.vy||0)+125*dt;
        p.life-=dt;if(p.life<=0)particles.splice(i,1);
    }
}

// ── Batched particle draw: group by type to minimise state changes ──
function drawParticles(){
    if(!particles.length) return;
    // Separate into groups
    const sparks=[],flashes=[],bloods=[],deaths=[],others=[];
    for(const p of particles){
        if(!onScreen(p.x,p.y,p.r+4)) continue;
        if(p.type==='spark')       sparks.push(p);
        else if(p.type==='flash'||p.type==='nova') flashes.push(p);
        else if(p.type==='blood')  bloods.push(p);
        else if(p.type==='death')  deaths.push(p);
        else                       others.push(p);
    }
    ctx.save();

    // Sparks — additive blend for magic glow (skip additive under heavy LOD)
    if(sparks.length){
        if(QUALITY.additiveFX&&!LOD.skipGlow) ctx.globalCompositeOperation='lighter';
        if(QUALITY.shadowBlur){ctx.shadowBlur=7;ctx.shadowColor='#fde68a';}
        for(const p of sparks){
            const s=toScr(p.x,p.y);
            ctx.globalAlpha=clamp(p.life*3,0,1);
            ctx.fillStyle=p.col;
            ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
        }
        ctx.globalCompositeOperation='source-over';
    }
    // Flashes/nova — additive blend for glow
    if(flashes.length){
        if(QUALITY.additiveFX&&!LOD.skipGlow) ctx.globalCompositeOperation='lighter';
        if(QUALITY.shadowBlur){ctx.shadowBlur=20;}
        for(const p of flashes){
            const s=toScr(p.x,p.y);
            ctx.globalAlpha=clamp(p.life*2.5,0,0.8);
            ctx.fillStyle=p.col;
            if(QUALITY.shadowBlur) ctx.shadowColor=p.col;
            ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
        }
        ctx.globalCompositeOperation='source-over';
    }
    // Blood — no shadow needed
    ctx.shadowBlur=0;
    for(const p of bloods){
        const s=toScr(p.x,p.y);
        ctx.globalAlpha=clamp(p.life*1.8,0,0.85);
        ctx.fillStyle='#7f1d1d';
        ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
    }
    // Death particles
    for(const p of deaths){
        const s=toScr(p.x,p.y);
        ctx.globalAlpha=clamp(p.life*2,0,1);
        ctx.fillStyle=p.col;
        ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
    }
    // Others
    for(const p of others){
        const s=toScr(p.x,p.y);
        ctx.globalAlpha=clamp(p.life*2.5,0,1);
        ctx.fillStyle=p.col;
        ctx.beginPath();ctx.arc(s.x,s.y,p.r,0,PI2);ctx.fill();
    }
    ctx.restore();
}

function updateFloatTexts(dt){for(let i=floatTexts.length-1;i>=0;i--){floatTexts[i].y-=48*dt;floatTexts[i].life-=dt;if(floatTexts[i].life<=0)floatTexts.splice(i,1);}}
function drawFloatTexts(){
    ctx.save();ctx.textAlign='center';
    for(const ft of floatTexts){
        const s=toScr(ft.x,ft.y);
        const alpha=clamp(ft.life,0,1);
        // Crits scale up briefly on spawn (life close to maxLife = initial)
        const scale=ft.crit?(0.8+clamp(ft.life/ft.maxLife,0,1)*0.5):1;
        ctx.globalAlpha=alpha;
        ctx.fillStyle=ft.col;
        if(QUALITY.shadowBlur){ctx.shadowColor=ft.col;ctx.shadowBlur=ft.crit?14:7;}
        ctx.font=`bold ${Math.round(ft.size*scale)}px Georgia,serif`;
        ctx.fillText(ft.text,s.x,s.y);
    }
    ctx.shadowBlur=0;ctx.restore();
}

// ── Kill streak overlay ──────────────────────────────────────
function drawStreak(){
    if(!QUALITY.killStreak||streak.display<3) return;
    if(streak.flash>0){
        ctx.save();ctx.globalAlpha=streak.flash*0.12;
        ctx.fillStyle=streak.display>=15?'#facc15':streak.display>=8?'#a855f7':'#ef4444';
        ctx.fillRect(0,0,W,H);ctx.restore();
    }
    const label=streak.display>=20?T('streakMassacre'):streak.display>=15?T('streakRampage'):streak.display>=10?T('streakUnstoppable'):streak.display>=7?T('streakKillSpree'):streak.display>=5?T('streakMultiKill'):'';
    if(!label) return;
    ctx.save();ctx.globalAlpha=clamp(streak.timer/streak.decay,0,1);
    ctx.textAlign='center';ctx.font='bold 22px Georgia,serif';
    ctx.fillStyle='#facc15';
    if(QUALITY.shadowBlur){ctx.shadowColor='#facc15';ctx.shadowBlur=16;}
    ctx.fillText(label,W/2,H*0.18);
    ctx.restore();
}

// ── Level-up flash ───────────────────────────────────────────
function drawLvlFlash(){
    if(!QUALITY.levelFlash||lvlFlash<=0||IS_MOBILE) return;
    ctx.save();ctx.globalAlpha=lvlFlash*0.28;
    const g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.7);
    g.addColorStop(0,'rgba(168,85,247,1)');g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    ctx.restore();
    lvlFlash=Math.max(0,lvlFlash-0.04);
}

function drawLowHpPulse(dt){
    if(!QUALITY.lowHpPulse||IS_MOBILE) return;
    const ratio=player.hp/player.maxHp;
    if(ratio>=0.3) return;
    hpPulseT+=dt*3.5*(1.4-ratio*3);
    const intensity=(0.3-ratio)/0.3;
    const pulse=0.5+Math.sin(hpPulseT)*0.5;
    ctx.save();ctx.globalAlpha=intensity*pulse*0.22;
    const g2=ctx.createRadialGradient(W/2,H/2,H*0.3,W/2,H/2,W*0.65);
    g2.addColorStop(0,'rgba(0,0,0,0)');g2.addColorStop(1,'rgba(200,10,10,1)');
    ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);
    ctx.restore();
}

// ============================================================
//  CHAPTER WEATHER SYSTEM
// ============================================================
const weather={
    rain:[],  // cathedral rain drops
    mist:[],  // crypt mist wisps
    ash:[],   // hell falling ash
    initTimer:0
};
const RAIN_COUNT=IS_MOBILE?40:120, MIST_COUNT=IS_MOBILE?10:25, ASH_COUNT=IS_MOBILE?20:60;

function initWeather(){
    weather.rain=[];weather.mist=[];weather.ash=[];
    for(let i=0;i<RAIN_COUNT;i++) weather.rain.push(newRainDrop(true));
    for(let i=0;i<MIST_COUNT;i++) weather.mist.push(newMistWisp(true));
    for(let i=0;i<ASH_COUNT;i++) weather.ash.push(newAshFlake(true));
}
function newRainDrop(random=false){
    return{x:rand(0,W),y:random?rand(0,H):-4,vy:rand(380,520),vx:rand(-20,20),len:rand(8,18),alpha:rand(0.08,0.18)};
}
function newMistWisp(random=false){
    return{x:rand(0,W),y:random?rand(0,H):rand(H*0.4,H),vx:rand(-12,12),vy:rand(-6,6),r:rand(40,100),alpha:rand(0.04,0.09),life:rand(4,10),maxLife:10,phase:rand(0,PI2)};
}
function newAshFlake(random=false){
    return{x:rand(-20,W+20),y:random?rand(0,H):-8,vx:rand(-18,18),vy:rand(25,70),r:rand(0.8,2.2),spin:rand(0,PI2),alpha:rand(0.18,0.4)};
}

function updateWeather(dt){
    const ch=getCh();
    if(ch.id===1){ // Cathedral — rain
        if(!QUALITY.shadowBlur&&weather.rain.length>RAIN_COUNT*0.5) return; // reduce on low quality
        for(let i=0;i<weather.rain.length;i++){
            const r=weather.rain[i];r.x+=r.vx*dt;r.y+=r.vy*dt;
            if(r.y>H+10) weather.rain[i]=newRainDrop();
        }
    }
    if(ch.id===2){ // Crypt — mist
        for(let i=0;i<weather.mist.length;i++){
            const m=weather.mist[i];m.x+=m.vx*dt;m.y+=m.vy*dt;m.life-=dt;m.phase+=dt*0.4;
            if(m.life<=0||m.x<-120||m.x>W+120) weather.mist[i]=newMistWisp();
        }
    }
    if(ch.id===3){ // Hell — ash
        for(let i=0;i<weather.ash.length;i++){
            const a=weather.ash[i];a.x+=a.vx*dt+Math.sin(gameTime+a.spin)*8*dt;a.y+=a.vy*dt;a.spin+=dt*2;
            if(a.y>H+10) weather.ash[i]=newAshFlake();
        }
    }
}

function drawWeather(){
    const ch=getCh();ctx.save();ctx.shadowBlur=0;
    if(ch.id===1){ // Rain
        ctx.strokeStyle='rgba(120,150,200,1)';ctx.lineWidth=1;
        for(const r of weather.rain){
            ctx.globalAlpha=r.alpha;ctx.beginPath();ctx.moveTo(r.x,r.y);ctx.lineTo(r.x+r.vx*0.02,r.y+r.len);ctx.stroke();
        }
    }
    if(ch.id===2){ // Mist
        for(const m of weather.mist){
            const pulse=0.7+Math.sin(m.phase)*0.3;
            ctx.globalAlpha=m.alpha*(m.life/m.maxLife)*pulse;
            ctx.fillStyle='#22c55e';
            ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,PI2);ctx.fill();
        }
    }
    if(ch.id===3){ // Ash
        ctx.fillStyle='#78350f';
        for(const a of weather.ash){
            ctx.globalAlpha=a.alpha;ctx.save();ctx.translate(a.x,a.y);ctx.rotate(a.spin);
            ctx.fillRect(-a.r,-a.r*0.5,a.r*2,a.r);ctx.restore();
        }
    }
    ctx.restore();
}

// ============================================================
//  BOSS RAGE MODE
// ============================================================
function updateBossRage(){
    for(const e of enemies){
        if(!e.boss||e.rage) continue;
        if(e.hp/e.maxHp<0.3){
            e.rage=true;
            e.spd=Math.floor(e.spd*1.6);
            e.dmg=Math.floor(e.dmg*1.4);
            floatText(e.x,e.y-60,T('bossRage'),'#ef4444',32,2.5);
            addShake(8);
            for(let i=0;i<20;i++){const pa=rand(0,PI2);addParticle({x:e.x,y:e.y,vx:Math.cos(pa)*rand(80,220),vy:Math.sin(pa)*rand(80,220),life:rand(0.5,1.2),col:'#ef4444',r:rand(3,9),type:'nova'});}
            addImpact(e.x,e.y,'#ef4444',e.radius*4);
        }
    }
}
// ============================================================
//  BACKGROUND — direct render, fully state-isolated
// ============================================================
//  BACKGROUND — grass ground with blade detail
// ============================================================
function drawBG(){
    ctx.save();
    const ch=getCh();
    ctx.shadowBlur=0;ctx.globalAlpha=1;

    // ── Dark base fill ───────────────────────────────────────
    const BASE={0:'#0d1a0a',1:'#0a120a',2:'#081208',3:'#100804'}[ch.id]||'#0d1a0a';
    ctx.fillStyle=BASE;
    ctx.fillRect(0,0,W,H);

    const tSz=80;
    const tileX0=Math.floor(camera.x/tSz)-1;
    const tileY0=Math.floor(camera.y/tSz)-1;
    const cols=Math.ceil(W/tSz)+3, rows=Math.ceil(H/tSz)+3;

    // Chapter grass palette
    // Each chapter keeps grass but with its own tint
    const GRASS={
        0:{ // Cursed Fields — sickly dark grass, patches of dead yellow
            bg1:(h)=>`rgb(${18+h*10|0},${32+h*18|0},${10+h*8|0})`,
            bg2:(h)=>`rgb(${12+h*8|0},${22+h*12|0},${7+h*5|0})`,
            blade1:'#2d5a1a', blade2:'#1e3d10', blade3:'#4a7a22',
            dead:'#5a4a18',   patch:'#3a2a0a',
        },
        1:{ // Ruined Cathedral — overgrown courtyard grass, greener
            bg1:(h)=>`rgb(${15+h*10|0},${30+h*20|0},${10+h*6|0})`,
            bg2:(h)=>`rgb(${10+h*7|0},${20+h*14|0},${7+h*4|0})`,
            blade1:'#2e6018', blade2:'#1f4010', blade3:'#3d7820',
            dead:'#4a3a14',   patch:'#1a300a',
        },
        2:{ // Necromancer Crypt — mossy dark grass, greenish
            bg1:(h)=>`rgb(${12+h*8|0},${26+h*16|0},${10+h*6|0})`,
            bg2:(h)=>`rgb(${8+h*6|0},${18+h*12|0},${7+h*4|0})`,
            blade1:'#1e4a12', blade2:'#142e0c', blade3:'#2a5e18',
            dead:'#3a3010',   patch:'#0e200a',
        },
        3:{ // Hell Rift — scorched dead grass, brown-orange
            bg1:(h)=>`rgb(${28+h*12|0},${18+h*10|0},${6+h*4|0})`,
            bg2:(h)=>`rgb(${18+h*8|0},${12+h*6|0},${4+h*3|0})`,
            blade1:'#4a2e08', blade2:'#321e04', blade3:'#5a3a0e',
            dead:'#3a2208',   patch:'#221408',
        },
    }[ch.id];

    for(let col=0;col<cols;col++){
        for(let row=0;row<rows;row++){
            const tx=tileX0+col, ty=tileY0+row;
            const sx=tx*tSz-camera.x, sy=ty*tSz-camera.y;

            const h  = tileHash(tx,    ty);
            const h2 = tileHash(tx+7,  ty+3);
            const h3 = tileHash(tx*3,  ty*2);
            const h4 = tileHash(tx+17, ty*5+2);
            const h5 = tileHash(tx*2+1,ty+11);
            const h6 = tileHash(tx+31, ty*3+7);

            // ── Grass base layer (two-tone patches) ──────────
            ctx.fillStyle=GRASS.bg1(h);
            ctx.fillRect(sx,sy,tSz,tSz);

            // Darker sub-patches for depth
            ctx.fillStyle=GRASS.bg2(h3);
            ctx.globalAlpha=0.5+h2*0.35;
            ctx.fillRect(sx+h2*tSz*0.55, sy+h4*tSz*0.55, tSz*(0.22+h5*0.3), tSz*(0.18+h3*0.28));
            ctx.globalAlpha=1;

            // ── MOBILE: add cheap ground detail without full grass ─
            if(IS_MOBILE){
                // Tile edge variation (dark line every few tiles)
                if(h<0.15){ctx.strokeStyle='rgba(0,0,0,0.12)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+tSz,sy);ctx.stroke();}
                if(h2<0.15){ctx.strokeStyle='rgba(0,0,0,0.1)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx,sy+tSz);ctx.stroke();}
                // Occasional ground marks
                if(h>0.82){
                    ctx.fillStyle=GRASS.dead;ctx.globalAlpha=0.15;
                    ctx.beginPath();ctx.ellipse(sx+h3*tSz,sy+h4*tSz,tSz*0.08,tSz*0.05,h*PI,0,PI2);ctx.fill();ctx.globalAlpha=1;
                }
                // Small dots for texture variation
                if(h4>0.7){
                    ctx.fillStyle=GRASS.blade1;ctx.globalAlpha=0.2;
                    ctx.fillRect(sx+h2*tSz,sy+h5*tSz,2,2);ctx.globalAlpha=1;
                }
                continue;
            }

            // ── Grass blades — clusters of short strokes ─────
            // Blade cluster 1
            const bx1=sx+h2*tSz, by1=sy+h3*tSz;
            const bh1=3+h4*6;   // blade height 3-9px
            ctx.strokeStyle=GRASS.blade1;ctx.lineWidth=1;
            ctx.globalAlpha=0.7+h*0.3;
            ctx.beginPath();
            // 4 blades per cluster, slightly spread
            for(let b=0;b<4;b++){
                const box=bx1+(b-1.5)*3+h5*4;
                const lean=(b-1.5)*0.5+h2*0.8-0.4; // lean angle
                ctx.moveTo(box,by1);
                ctx.lineTo(box+lean*bh1*0.5,by1-bh1);
            }
            ctx.stroke();ctx.globalAlpha=1;

            // Blade cluster 2 (offset)
            const bx2=sx+h3*tSz, by2=sy+h5*tSz;
            const bh2=2+h6*5;
            ctx.strokeStyle=GRASS.blade2;ctx.lineWidth=1;
            ctx.globalAlpha=0.6+h3*0.3;
            ctx.beginPath();
            for(let b=0;b<3;b++){
                const box=bx2+(b-1)*4+h4*3;
                const lean=(b-1)*0.4+h5*0.6-0.3;
                ctx.moveTo(box,by2);
                ctx.lineTo(box+lean*bh2*0.4,by2-bh2);
            }
            ctx.stroke();ctx.globalAlpha=1;

            // Blade cluster 3 — lighter tips
            if(h6>0.45){
                const bx3=sx+h5*tSz,by3=sy+h4*tSz;
                const bh3=4+h2*7;
                ctx.strokeStyle=GRASS.blade3;ctx.lineWidth=1;
                ctx.globalAlpha=0.4+h6*0.35;
                ctx.beginPath();
                for(let b=0;b<3;b++){
                    const box=bx3+(b-1)*3.5+h3*3;
                    const lean=(b-1)*0.5+h2*0.7-0.35;
                    ctx.moveTo(box,by3);
                    ctx.lineTo(box+lean*bh3*0.45,by3-bh3);
                }
                ctx.stroke();ctx.globalAlpha=1;
            }

            // ── Dead/dry patches ─────────────────────────────
            if(h<0.28){
                ctx.fillStyle=GRASS.dead;
                ctx.globalAlpha=0.22+h2*0.18;
                ctx.beginPath();
                ctx.ellipse(sx+h2*tSz,sy+h3*tSz, tSz*(0.1+h4*0.15),tSz*(0.07+h5*0.1),h*PI,0,PI2);
                ctx.fill();ctx.globalAlpha=1;

                // Dead blade cluster in patch
                ctx.strokeStyle=GRASS.dead;ctx.lineWidth=1;
                ctx.globalAlpha=0.5;
                ctx.beginPath();
                for(let b=0;b<3;b++){
                    const box=sx+h2*tSz+(b-1)*4;
                    ctx.moveTo(box,sy+h3*tSz);
                    ctx.lineTo(box+h5*3-1.5,sy+h3*tSz-(2+h4*4));
                }
                ctx.stroke();ctx.globalAlpha=1;
            }

            // ── Small wildflowers / details ──────────────────
            if(h4>0.84){
                // Tiny flower dot
                const fx=sx+h5*tSz, fy=sy+h2*tSz;
                const flowerCol=ch.id===3?'#8b4a00':(ch.id===2?'#2a4a10':'#c8a020');
                ctx.fillStyle=flowerCol;
                ctx.globalAlpha=0.6+h3*0.3;
                ctx.beginPath();ctx.arc(fx,fy,1.5,0,PI2);ctx.fill();
                ctx.globalAlpha=1;
            }

            // ── Chapter-specific details ─────────────────────
            if(ch.id===0&&h>0.78){ // Cursed: dark wilted clumps
                ctx.strokeStyle='#1a1008';ctx.lineWidth=1.5;
                ctx.globalAlpha=0.4;
                ctx.beginPath();
                ctx.moveTo(sx+h3*tSz,sy+h4*tSz);
                ctx.bezierCurveTo(sx+h2*tSz,sy+h5*tSz,sx+h4*tSz,sy+h3*tSz,sx+h5*tSz,sy+h2*tSz);
                ctx.stroke();ctx.globalAlpha=1;
            }
            if(ch.id===1&&h>0.86){ // Cathedral: stone peeking through grass
                ctx.fillStyle=`rgb(${38+h2*12|0},${34+h3*10|0},${40+h4*12|0})`;
                ctx.globalAlpha=0.35;
                ctx.fillRect(sx+h2*tSz*0.7,sy+h3*tSz*0.7,tSz*(0.1+h4*0.15),tSz*(0.08+h5*0.12));
                ctx.globalAlpha=1;
            }
            if(ch.id===2&&h>0.7){ // Crypt: thick moss clumps
                ctx.fillStyle=`rgb(${14+h2*8|0},${30+h3*14|0},${12+h4*8|0})`;
                ctx.globalAlpha=0.3+h5*0.2;
                ctx.beginPath();
                ctx.ellipse(sx+h3*tSz,sy+h5*tSz,tSz*(0.08+h2*0.1),tSz*(0.05+h4*0.08),h*PI,0,PI2);
                ctx.fill();ctx.globalAlpha=1;
            }
            if(ch.id===3&&h<0.22){ // Hell: lava-lit scorched crack in dead grass
                ctx.strokeStyle='#f97316';ctx.lineWidth=0.8+h2;
                ctx.globalAlpha=(0.12+Math.sin(gameTime*1.8+h*10)*0.07);
                if(QUALITY.shadowBlur){ctx.shadowColor='#f97316';ctx.shadowBlur=4;}
                ctx.beginPath();
                ctx.moveTo(sx+h2*tSz,sy);
                ctx.lineTo(sx+tSz*0.5+h3*14,sy+tSz*0.5);
                ctx.lineTo(sx+(1-h2)*tSz,sy+tSz);
                ctx.stroke();ctx.shadowBlur=0;ctx.globalAlpha=1;
            }
        }
    }

    // ── World border fog ─────────────────────────────────────
    const tl=toScr(0,0),br=toScr(WORLD.w,WORLD.h);
    if(!IS_MOBILE){
    const fw=120;
    [{sx:tl.x,sy:tl.y,sw:fw,sh:br.y-tl.y,dir:'lr'},{sx:br.x-fw,sy:tl.y,sw:fw,sh:br.y-tl.y,dir:'rl'},
     {sx:tl.x,sy:tl.y,sw:br.x-tl.x,sh:fw,dir:'tb'},{sx:tl.x,sy:br.y-fw,sw:br.x-tl.x,sh:fw,dir:'bt'}].forEach(({sx,sy,sw,sh,dir})=>{
        if(sw<=0||sh<=0) return;
        let g;
        if(dir==='lr')      g=ctx.createLinearGradient(sx,0,sx+sw,0);
        else if(dir==='rl') g=ctx.createLinearGradient(sx+sw,0,sx,0);
        else if(dir==='tb') g=ctx.createLinearGradient(0,sy,0,sy+sh);
        else                g=ctx.createLinearGradient(0,sy+sh,0,sy);
        g.addColorStop(0,`${ch.fog}0.35)`);g.addColorStop(1,`${ch.fog}0)`);
        ctx.fillStyle=g;ctx.fillRect(sx,sy,sw,sh);
    });
    }
    ctx.shadowBlur=0;
    if(QUALITY.shadowBlur){ctx.shadowColor='#ef4444';ctx.shadowBlur=14;}
    ctx.strokeStyle='rgba(239,68,68,0.55)';ctx.lineWidth=3;
    ctx.strokeRect(tl.x,tl.y,br.x-tl.x,br.y-tl.y);

    ctx.restore(); // ← restore: nothing leaks out of drawBG
}

function drawVignette(dt=0){
    if(IS_MOBILE) return; // skip expensive radial gradient fill on mobile
    if(!vigGrad) buildVigGrad();
    ctx.fillStyle=vigGrad;ctx.fillRect(0,0,W,H);
    if(wev.active){
        if(wev.active.id==='bloodMoon'){ctx.fillStyle='rgba(180,20,20,0.07)';ctx.fillRect(0,0,W,H);}
        if(wev.active.id==='frozenTime'){ctx.fillStyle='rgba(20,80,150,0.07)';ctx.fillRect(0,0,W,H);}
    }
    if(dt) drawLowHpPulse(dt);
}

// ============================================================
//  HUD
// ============================================================
function panel(x,y,w,h,glowCol){
    ctx.save();
    ctx.shadowBlur=0;ctx.globalAlpha=1;
    ctx.fillStyle='rgba(0,0,0,0.5)';ctx.beginPath();ctx.roundRect(x+3,y+3,w,h,8);ctx.fill();
    ctx.fillStyle='rgba(8,12,24,0.84)';ctx.beginPath();ctx.roundRect(x,y,w,h,8);ctx.fill();
    ctx.strokeStyle=glowCol||'rgba(50,68,102,0.65)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(x,y,w,h,8);ctx.stroke();
    ctx.restore();
}

// ── Boss HP bar at top of screen ─────────────────────────────
function drawBossBar(){
    const boss=activeBoss;
    if(!boss) return;
    const bw=480,bh=22,bx=W/2-bw/2,by=8;
    const hr=clamp(boss.hp/boss.maxHp,0,1);
    const col=hr>0.5?'#dc2626':hr>0.25?'#f97316':'#facc15';
    const fillW=Math.max(1,bw*hr); // guard: minimum 1px to avoid zero-width issues
    ctx.save();
    panel(bx-6,by-4,bw+12,bh+12,'rgba(180,20,20,0.5)');
    ctx.fillStyle='rgba(0,0,0,0.6)';ctx.beginPath();ctx.roundRect(bx,by,bw,bh,4);ctx.fill();
    // HP fill — only draw if there is HP to show
    if(hr>0){
        const bg2=ctx.createLinearGradient(bx,by,bx+fillW,by+1); // +1 to y1 avoids degenerate gradient
        bg2.addColorStop(0,hr>0.5?'#7f1d1d':hr>0.25?'#92400e':'#78350f');bg2.addColorStop(1,col);
        ctx.fillStyle=bg2;
        if(QUALITY.shadowBlur){ctx.shadowColor=col;ctx.shadowBlur=10;}
        ctx.beginPath();ctx.roundRect(bx,by,fillW,bh,4);ctx.fill();ctx.shadowBlur=0;
        if(hr<0.3){
            ctx.globalAlpha=0.22+Math.sin(gameTime*8)*0.18;ctx.fillStyle=col;
            ctx.beginPath();ctx.roundRect(bx,by,fillW,bh,4);ctx.fill();ctx.globalAlpha=1;
        }
    }
    const bname=boss.type==='hugeDemon'?T('bossHugeDemon'):boss.type==='necromancer'?T('bossNecro'):T('bossDarkKnight');
    ctx.shadowBlur=0;ctx.fillStyle='#f1f5f9';ctx.font='bold 11px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(`💀 ${bname}  ${Math.ceil(Math.max(0,boss.hp))} / ${boss.maxHp}`,W/2,by+15);
    ctx.restore();
}

// ── Weapon cooldown radial indicators ────────────────────────
function drawWeaponCDs(){
    const wl=player.weapons.filter(w=>WEAPONS[w]&&!WEAPONS[w].passive);
    if(!wl.length) return;
    const iconSz=30,gap=6,startX=W/2-(wl.length*(iconSz+gap))/2;
    ctx.save();
    for(let i=0;i<wl.length;i++){
        const wid=wl[i],w=WEAPONS[wid];
        const x=startX+i*(iconSz+gap),y=H-iconSz-10;
        const cd=weapTimers[wid]||0,maxCD=w.cd/player.atkSpd;
        const progress=maxCD>0?clamp(1-cd/maxCD,0,1):1;
        const ready=progress>=0.99;
        // Background circle
        ctx.fillStyle='rgba(0,0,0,0.55)';ctx.beginPath();ctx.arc(x+iconSz/2,y+iconSz/2,iconSz/2+3,0,PI2);ctx.fill();
        // CD arc
        if(!ready){
            ctx.strokeStyle='rgba(50,65,100,0.7)';ctx.lineWidth=3;
            ctx.beginPath();ctx.arc(x+iconSz/2,y+iconSz/2,iconSz/2+2,0,PI2);ctx.stroke();
            ctx.strokeStyle=w.col;ctx.lineWidth=3;
            if(QUALITY.shadowBlur){ctx.shadowColor=w.col;ctx.shadowBlur=8;}
            ctx.beginPath();ctx.arc(x+iconSz/2,y+iconSz/2,iconSz/2+2,-PI/2,-PI/2+PI2*progress);ctx.stroke();
            ctx.shadowBlur=0;
        } else {
            // Ready flash
            ctx.strokeStyle=w.col;ctx.lineWidth=2;ctx.globalAlpha=0.7+Math.sin(gameTime*6)*0.3;
            if(QUALITY.shadowBlur){ctx.shadowColor=w.col;ctx.shadowBlur=12;}
            ctx.beginPath();ctx.arc(x+iconSz/2,y+iconSz/2,iconSz/2+2,0,PI2);ctx.stroke();
            ctx.shadowBlur=0;ctx.globalAlpha=1;
        }
        // Filled inner bg
        ctx.fillStyle=ready?`${w.col}22`:'rgba(8,12,24,0.8)';
        ctx.beginPath();ctx.arc(x+iconSz/2,y+iconSz/2,iconSz/2,0,PI2);ctx.fill();
        // Weapon initial letter
        ctx.fillStyle=ready?w.col:'rgba(100,116,139,0.8)';
        ctx.font=`bold ${ready?13:11}px Georgia,serif`;ctx.textAlign='center';
        ctx.fillText(w.name[0],x+iconSz/2,y+iconSz/2+4);
        // CD seconds below
        if(!ready){
            ctx.fillStyle='#64748b';ctx.font='9px Georgia,serif';
            ctx.fillText(cd.toFixed(1),x+iconSz/2,y+iconSz+8);
        }
    }
    ctx.restore();
}

// ── Screen-edge danger arrows for off-screen bosses ──────────
function drawDangerArrows(){
    const bosses=activeBossList;if(!bosses.length) return;
    ctx.save();
    for(const b of bosses){
        const s=toScr(b.x,b.y);
        if(s.x>-20&&s.x<W+20&&s.y>-20&&s.y<H+20) continue; // on screen
        const a=Math.atan2(b.y-player.y,b.x-player.x);
        // Clamp to screen edge with margin
        const m=32;
        const ex=clamp(W/2+Math.cos(a)*600,m,W-m);
        const ey=clamp(H/2+Math.sin(a)*600,m,H-m);
        const pulse=0.6+Math.sin(gameTime*5)*0.4;
        ctx.globalAlpha=pulse*0.85;
        ctx.fillStyle=b.boss==='boss'?'#ef4444':'#facc15';
        if(QUALITY.shadowBlur){ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=14;}
        // Arrow shape
        ctx.save();ctx.translate(ex,ey);ctx.rotate(a);
        ctx.beginPath();ctx.moveTo(14,0);ctx.lineTo(-8,-8);ctx.lineTo(-4,0);ctx.lineTo(-8,8);ctx.closePath();ctx.fill();
        ctx.restore();
        // Distance text
        const dist2=Math.floor(dist(b,player)/50);
        ctx.font='9px Georgia,serif';ctx.textAlign='center';ctx.fillStyle='#f1f5f9';ctx.shadowBlur=0;
        ctx.fillText(`${dist2}m`,ex,ey+20);
    }
    ctx.restore();
}

function drawHUD(){
    ctx.save();ctx.shadowBlur=0;

    // Boss HP bar at very top
    drawBossBar();

    // HP + XP panel — shift down if boss bar active
    const bossAlive=!!activeBoss;
    const hudShift=bossAlive?42:0;

    panel(12,12+hudShift,268,106,'rgba(80,55,120,0.55)');
    const hx=22,hy=24+hudShift,hw=248,hh=18;
    ctx.fillStyle='rgba(239,68,68,0.7)';ctx.font='bold 10px Georgia,serif';ctx.textAlign='left';ctx.fillText('HP',hx,hy-2);
    ctx.fillStyle='rgba(28,6,6,0.9)';ctx.beginPath();ctx.roundRect(hx,hy,hw,hh,3);ctx.fill();
    const hr=clamp(player.hp/player.maxHp,0,1),hc=hr>0.4?'#16a34a':'#dc2626';
    if(IS_MOBILE){ctx.fillStyle=hc;}
    else{const hg=ctx.createLinearGradient(hx,hy,hx+hw*hr,hy);hg.addColorStop(0,hr>0.4?'#166534':'#7f1d1d');hg.addColorStop(1,hc);ctx.fillStyle=hg;ctx.shadowColor=hc;ctx.shadowBlur=7;}
    ctx.beginPath();ctx.roundRect(hx,hy,hw*hr,hh,3);ctx.fill();ctx.shadowBlur=0;
    ctx.fillStyle='rgba(255,255,255,0.85)';ctx.font='bold 10px Georgia,serif';ctx.textAlign='center';ctx.fillText(`${Math.ceil(player.hp)} / ${player.maxHp}`,hx+hw/2,hy+13);
    if(player.shieldMax>0){const sy2=hy+hh+3;ctx.fillStyle='rgba(15,30,50,0.8)';ctx.fillRect(hx,sy2,hw,4);ctx.fillStyle=COL.shield;ctx.shadowColor=COL.shield;ctx.shadowBlur=4;ctx.fillRect(hx,sy2,hw*clamp(player.shield/player.shieldMax,0,1),4);ctx.shadowBlur=0;}
    const xy=hy+hh+(player.shieldMax>0?12:6);
    ctx.fillStyle='rgba(6,6,28,0.9)';ctx.beginPath();ctx.roundRect(hx,xy,hw,hh,3);ctx.fill();
    // XP bar animated flash when close to level-up
    const xpRatio=player.xp/player.xpNext;
    if(IS_MOBILE){ctx.fillStyle='#a855f7';}
    else{const xg=ctx.createLinearGradient(hx,xy,hx+hw,xy);xg.addColorStop(0,'#5b21b6');xg.addColorStop(1,'#a855f7');ctx.fillStyle=xg;
    if(xpRatio>0.9&&QUALITY.shadowBlur){ctx.shadowColor='#e9d5ff';ctx.shadowBlur=8+Math.sin(gameTime*10)*6;}
    else if(QUALITY.shadowBlur){ctx.shadowColor='#a855f7';ctx.shadowBlur=5;}}
    ctx.beginPath();ctx.roundRect(hx,xy,hw*clamp(xpRatio,0,1),hh,3);ctx.fill();ctx.shadowBlur=0;
    ctx.fillStyle='rgba(233,213,255,0.9)';ctx.font='bold 10px Georgia,serif';ctx.textAlign='center';ctx.fillText(`LVL ${player.level}  ✦  ${player.xp} / ${player.xpNext}`,hx+hw/2,xy+13);
    const dy2=xy+hh+7;
    ctx.textAlign='left';
    if(player.dashCD>0){ctx.fillStyle='#475569';ctx.font='11px Georgia,serif';ctx.fillText(`${T('dash')}: ${player.dashCD.toFixed(1)}s`,hx,dy2+9);}
    else{ctx.fillStyle='#6ee7b7';ctx.font='bold 11px Georgia,serif';ctx.fillText(`◈ ${T('dash')} [Space]`,hx,dy2+9)};
    if(player.buffTimer>0){ctx.fillStyle=COL.upgrade;ctx.font='11px Georgia,serif';ctx.textAlign='right';ctx.fillText(`⚡ ×${player.buffMult} ${player.buffTimer.toFixed(1)}s`,hx+hw,dy2+9);}

    // Timer + chapter
    const min=Math.floor(gameTime/60),sec=Math.floor(gameTime%60);
    panel(W/2-65,bossAlive?50:8,130,42,'rgba(80,55,120,0.45)');
    ctx.fillStyle='#e2e8f0';ctx.font='bold 24px Georgia,serif';ctx.textAlign='center';
    if(QUALITY.shadowBlur){ctx.shadowColor='#a855f7';ctx.shadowBlur=7;}
    ctx.fillText(`${fmt2(min)}:${fmt2(sec)}`,W/2,bossAlive?82:40);ctx.shadowBlur=0;
    const ch=getCh();ctx.fillStyle=ch.ambient;ctx.font='bold 10px Georgia,serif';ctx.fillText(ch.name,W/2,bossAlive?96:59);

    // Kills + next boss countdown
    panel(W-180,8,168,68,'rgba(120,18,18,0.38)');
    ctx.textAlign='right';ctx.fillStyle=COL.dmg;ctx.font='bold 14px Georgia,serif';
    if(QUALITY.shadowBlur){ctx.shadowColor=COL.dmg;ctx.shadowBlur=5;}
    ctx.fillText(`☠ ${killCount}`,W-22,30);ctx.shadowBlur=0;
    ctx.fillStyle='#475569';ctx.font='12px Georgia,serif';ctx.fillText(`${T('enemies')}: ${enemies.length}`,W-22,50);
    // Next boss timer
    const bossIn=Math.ceil(Math.max(0,nextBoss-gameTime));
    const miniIn=Math.ceil(Math.max(0,nextMini-gameTime));
    const nextEvt=Math.min(bossIn,miniIn);
    const isBossNext=bossIn<=miniIn;
    ctx.fillStyle=nextEvt<=5?'#ef4444':nextEvt<=15?'#f97316':'#475569';
    ctx.font=nextEvt<=10?'bold 11px Georgia,serif':'11px Georgia,serif';
    ctx.fillText(`${isBossNext?'💀':'⚔'} ${nextEvt}s`,W-22,66);

    // Stats bar (hide on mobile — overlaps joystick)
    if(!IS_MOBILE){
    panel(12,H-62,524,50,'rgba(30,55,75,0.38)');
    ctx.textAlign='left';ctx.fillStyle='#475569';ctx.font='11px Georgia,serif';
    ctx.fillText(`⚔ ${player.damage}  ⚡ ${player.atkSpd.toFixed(2)}  💥 ${Math.floor(player.crit*100)}%  ×${player.critMult.toFixed(1)}  ↗ ${player.pierce}  ✦ ${player.projCnt}`,22,H-44);
    ctx.fillText(`🎯 ${Math.floor(player.range)}  👟 ${Math.floor(player.speed)}  💚 ${player.regen}/s  🛡 ${Math.floor(player.shield)}/${player.shieldMax}  🌊 ${T('wave')} ${waveCount}`,22,H-26);
    }

    // Weapon cooldown icons
    drawWeaponCDs();

    // Weapons list (passive only)
    const passiveWeps=player.weapons.filter(w=>WEAPONS[w]&&WEAPONS[w].passive);
    if(passiveWeps.length){
        const wbx=W-198,wby=H-22-passiveWeps.length*20;
        panel(wbx-8,wby-10,196,passiveWeps.length*20+18,'rgba(80,38,128,0.38)');
        ctx.textAlign='left';ctx.font='12px Georgia,serif';
        for(let i=0;i<passiveWeps.length;i++){const w=WEAPONS[passiveWeps[i]];ctx.fillStyle=w?w.col:'#fff';ctx.fillText(`◆ ${w?w.name:passiveWeps[i]}`,wbx,wby+i*20+11);}
    }

    // Mute button (larger on mobile)
    const muteW=IS_MOBILE?64:48, muteH=IS_MOBILE?28:20, muteX=W-muteW-10, muteY=H-muteH-8;
    panel(muteX,muteY,muteW,muteH,'rgba(40,40,58,0.5)');
    ctx.fillStyle=audioMuted?'#ef4444':'#22c55e';ctx.font=IS_MOBILE?'bold 13px Georgia,serif':'11px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(audioMuted?'🔇':'🔊',muteX+muteW/2,muteY+muteH-5);

    // Pause button for mobile
    if(IS_MOBILE){
        panel(W-80,8,36,28,'rgba(40,40,58,0.5)');
        ctx.fillStyle='#94a3b8';ctx.font='bold 16px Georgia,serif';ctx.textAlign='center';
        ctx.fillText('⏸',W-62,28);
    }

    // World event indicator
    if(wev.active&&wev.timer>0){
        ctx.textAlign='left';ctx.fillStyle=wev.active.col;ctx.font='bold 11px Georgia,serif';
        if(QUALITY.shadowBlur){ctx.shadowColor=wev.active.col;ctx.shadowBlur=7;}
        ctx.fillText(`${wev.active.name}  ${Math.ceil(wev.timer)}s`,22,H-68);ctx.shadowBlur=0;
    }

    // Event banner
    if(evBanner&&evBanner.life>0){
        const ba=clamp(evBanner.life,0,1);ctx.save();ctx.globalAlpha=ba;
        panel(W/2-215,H/2-100,430,56,evBanner.col);
        ctx.fillStyle=evBanner.col;ctx.font='bold 22px Georgia,serif';ctx.textAlign='center';
        if(QUALITY.shadowBlur){ctx.shadowColor=evBanner.col;ctx.shadowBlur=16;}
        ctx.fillText(evBanner.text,W/2,H/2-68);ctx.shadowBlur=0;
        ctx.fillStyle='#94a3b8';ctx.font='13px Georgia,serif';ctx.fillText(evBanner.desc,W/2,H/2-48);ctx.restore();
    }

    // Achievement popups
    for(let i=achPopups.length-1;i>=0;i--){
        const ap=achPopups[i];ap.life-=1/60;if(ap.life<=0){achPopups.splice(i,1);continue;}
        const ay=H-135-i*58;ctx.save();ctx.globalAlpha=clamp(ap.life,0,1);
        ctx.fillStyle='rgba(8,12,24,0.96)';ctx.strokeStyle=COL.upgrade;ctx.lineWidth=2;
        if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=16;}
        ctx.beginPath();ctx.roundRect(W/2-165,ay,330,48,8);ctx.fill();ctx.stroke();
        ctx.fillStyle=COL.upgrade;ctx.font='bold 14px Georgia,serif';ctx.textAlign='center';ctx.fillText(`🏆 ${ap.text}`,W/2,ay+19);
        ctx.fillStyle='#94a3b8';ctx.font='12px Georgia,serif';ctx.fillText(ap.desc+' (+5 💎)',W/2,ay+37);ctx.restore();
    }

    // Chapter transition
    if(chTrans.on&&chTrans.timer>0){
        const lt=chTrans.timer/3.5,alpha=lt<0.2?lt*5:(lt>0.8?(1-lt)*5:1);
        ctx.save();ctx.globalAlpha=alpha*0.88;ctx.fillStyle='rgba(0,0,0,0.92)';ctx.fillRect(0,0,W,H);
        ctx.globalAlpha=alpha;ctx.textAlign='center';
        ctx.fillStyle=chTrans.col;ctx.font='bold 13px Georgia,serif';ctx.fillText(T('newChapter'),W/2,H/2-52);
        ctx.font='bold 38px Georgia,serif';
        if(QUALITY.shadowBlur){ctx.shadowColor=chTrans.col;ctx.shadowBlur=28;}
        ctx.fillText(chTrans.name,W/2,H/2+6);ctx.shadowBlur=0;
        ctx.fillStyle='rgba(148,163,184,0.8)';ctx.font='16px Georgia,serif';ctx.fillText(chTrans.sub||'',W/2,H/2+40);
        ctx.restore();
    }

    // Danger arrows for off-screen bosses
    drawDangerArrows();

    ctx.restore();
}

// ============================================================
//  MINIMAP
// ============================================================
// Minimap rendered to offscreen canvas every N frames
const mmSize=IS_MOBILE?90:120;
const mmOff=document.createElement('canvas'); mmOff.width=mmSize; mmOff.height=mmSize;
const mmCtx=mmOff.getContext('2d');
let mmFrame=0;

function drawMinimap(){
    const mw=IS_MOBILE?90:120,mh=IS_MOBILE?90:120,mx=W-mw-14,my=IS_MOBILE?80:H-mh-62,sc=mw/WORLD.w;
    // Only rebuild minimap every 4 frames
    if(mmFrame%4===0){
        mmCtx.clearRect(0,0,mw,mh);
        mmCtx.fillStyle='rgba(4,7,16,0.87)';mmCtx.fillRect(0,0,mw,mh);
        mmCtx.strokeStyle='rgba(65,55,95,0.8)';mmCtx.lineWidth=1;mmCtx.strokeRect(0.5,0.5,mw-1,mh-1);
        for(const o of mapObjs){
            if(!o.alive) continue;const df=OBJ_DEF[o.type];if(!df.interact) continue;
            mmCtx.fillStyle=o.type==='chest'?RARITY_COLOR[o.rarity||'common'].glow:
                            o.type==='crystal'?'#a855f7':
                            o.type==='manaPool'?'#67e8f9':
                            o.type==='bonePile'?'#9ca3af':
                            o.type==='rageAltar'?'#ef4444':'#e879f9';
            mmCtx.globalAlpha=0.5;mmCtx.fillRect(o.x*sc-1.5,o.y*sc-1.5,3,3);
        }
        mmCtx.globalAlpha=0.65;mmCtx.fillStyle='#ef4444';
        for(const e of enemies) mmCtx.fillRect(e.x*sc-1,e.y*sc-1,2,2);
        mmCtx.fillStyle='#c084fc';mmCtx.shadowColor='#c084fc';mmCtx.shadowBlur=6;mmCtx.globalAlpha=1;
        mmCtx.fillRect(player.x*sc-2.5,player.y*sc-2.5,5,5);
        mmCtx.shadowBlur=0;
    }
    mmFrame++;
    ctx.save();ctx.globalAlpha=0.8;ctx.drawImage(mmOff,mx,my);ctx.restore();
}

// ============================================================
//  MENU
// ============================================================
function drawMenu(){
    const t=performance.now()/1000;
    const sg=ctx.createLinearGradient(0,0,0,H);sg.addColorStop(0,'#020508');sg.addColorStop(1,'#0c0815');ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
    // Stars (fewer on mobile)
    const starCnt=IS_MOBILE?30:90;
    ctx.save();for(let i=0;i<starCnt;i++){ctx.globalAlpha=(0.3+Math.sin(t*0.7+i)*0.28)*0.7;ctx.fillStyle='#f1f5f9';ctx.beginPath();ctx.arc((Math.sin(i*73.1)*0.5+0.5)*W,(Math.cos(i*37.3)*0.5+0.5)*H*0.72,0.65+Math.sin(i*11)*0.38,0,PI2);ctx.fill();}ctx.restore();
    // Blood moon (skip shadow on mobile)
    ctx.save();if(!IS_MOBILE){ctx.shadowColor='#dc2626';ctx.shadowBlur=55;}ctx.fillStyle='rgba(170,28,10,0.62)';ctx.beginPath();ctx.arc(W*0.73,H*0.2,50,0,PI2);ctx.fill();ctx.fillStyle='rgba(10,5,10,0.38)';ctx.beginPath();ctx.arc(W*0.73+19,H*0.2-9,40,0,PI2);ctx.fill();ctx.restore();
    // Castle
    ctx.save();ctx.fillStyle='rgba(4,6,12,0.94)';ctx.fillRect(0,H-80,W,80);
    for(const bx of[80,155,225,310,400,490,565,680,760,860,945,1010,1085,1180])ctx.fillRect(bx,H-110,30,28);
    for(const tx of[0,250,520,762,1020,1250]){ctx.fillRect(tx,H-162,55,100);for(const bi of[tx-8,tx+15,tx+38,tx+61])ctx.fillRect(bi,H-180,10,24);}
    ctx.fillStyle='rgba(2,3,8,0.96)';ctx.beginPath();ctx.arc(W/2,H-82,44,PI,0);ctx.fillRect(W/2-44,H-82,88,82);ctx.fill();ctx.restore();
    // Embers (skip shadow on mobile, fewer)
    const emberCnt=IS_MOBILE?18:55;
    ctx.save();for(let i=0;i<emberCnt;i++){const px=((Math.sin(t*0.22+i*7.2)*0.5+0.5)*W),py=((t*0.05+i*0.078)%1.0)*H*0.76+H*0.04;ctx.globalAlpha=0.18+Math.sin(t*1.1+i*2.2)*0.14;ctx.fillStyle=i%3===0?'#f59e0b':i%3===1?'#a855f7':'#ef4444';if(!IS_MOBILE){ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=7;}ctx.beginPath();ctx.arc(px,py,0.75+Math.sin(i*3)*0.75,0,PI2);ctx.fill();}ctx.restore();
    // Title (simpler on mobile — single pass no heavy shadow)
    ctx.save();ctx.textAlign='center';
    if(IS_MOBILE){ctx.fillStyle='#7c3aed';ctx.font='bold 52px Georgia,serif';ctx.fillText('DARK SURVIVOR',W/2,H/2-112);ctx.fillStyle='#e9d5ff';ctx.fillText('DARK SURVIVOR',W/2,H/2-112);}
    else{ctx.shadowColor='#6d28d9';ctx.shadowBlur=65;ctx.fillStyle='rgba(90,25,155,0.32)';ctx.font='bold 72px Georgia,serif';ctx.fillText('DARK SURVIVOR',W/2,H/2-112);ctx.shadowColor='#a855f7';ctx.shadowBlur=28;ctx.fillStyle='#7c3aed';ctx.fillText('DARK SURVIVOR',W/2,H/2-112);ctx.shadowBlur=10;ctx.fillStyle='#e9d5ff';ctx.fillText('DARK SURVIVOR',W/2,H/2-112);}
    ctx.restore();
    // Stats
    panel(W/2-290,H/2-50,580,28,'rgba(80,50,120,0.4)');
    ctx.fillStyle='#facc15';ctx.font='bold 13px Georgia,serif';ctx.textAlign='center';ctx.fillText(`💎 ${meta.crystals}  |  ⏱ ${fmtTime(meta.bestTime)}  |  ☠ ${meta.totalKills}  |  🏆 ${meta.totalGames}`,W/2,H/2-28);
    // Buttons
    ctx.save();if(!IS_MOBILE){ctx.shadowColor='#7c3aed';ctx.shadowBlur=18;}ctx.fillStyle='rgba(18,14,38,0.92)';ctx.strokeStyle='rgba(168,85,247,0.75)';ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(W/2-158,H/2-12,316,52,10);ctx.fill();ctx.stroke();ctx.fillStyle='#e9d5ff';ctx.font='bold 20px Georgia,serif';ctx.fillText(T('startGame'),W/2,H/2+20);ctx.restore();
    ctx.save();ctx.fillStyle='rgba(12,9,22,0.86)';ctx.strokeStyle='rgba(250,204,21,0.48)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(W/2-118,H/2+50,236,38,8);ctx.fill();ctx.stroke();ctx.fillStyle=COL.upgrade;ctx.font='bold 14px Georgia,serif';ctx.fillText(T('upgrades'),W/2,H/2+74);ctx.restore();
    ctx.save();ctx.fillStyle='rgba(12,9,22,0.86)';ctx.strokeStyle='rgba(96,165,250,0.48)';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(W/2-118,H/2+96,236,36,8);ctx.fill();ctx.stroke();ctx.fillStyle='#60a5fa';ctx.font='bold 13px Georgia,serif';ctx.fillText(T('records'),W/2,H/2+118);ctx.restore();
    ctx.fillStyle='rgba(100,116,139,0.65)';ctx.font='13px Georgia,serif';
    ctx.fillText(IS_MOBILE?T('controlsMobile'):T('controlsDesktop'),W/2,H/2+152);
    const ul=Object.keys(meta.achievements).length;ctx.fillText(`${T('achievements')}: ${ul} / ${ACHIEVE.length}`,W/2,H/2+170);
    drawVignette();
}

// ============================================================
//  META SHOP
// ============================================================
let metaHov=-1;
function drawMetaScreen(){
    ctx.save();
    const sg=ctx.createLinearGradient(0,0,0,H);sg.addColorStop(0,'#050810');sg.addColorStop(1,'#0c0918');
    ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);ctx.restore();

    ctx.save();
    if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=24;}
    ctx.fillStyle=COL.upgrade;ctx.font='bold 36px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(T('permUpgrades'),W/2,52);ctx.shadowBlur=0;

    // Crystal balance
    panel(W/2-140,64,280,36,'rgba(80,55,120,0.5)');
    ctx.fillStyle='#facc15';ctx.font='bold 18px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(`💎 ${meta.crystals} ${T('crystals')}`,W/2,88);

    // Upgrade cards — 2 columns
    const cardW=340, cardH=82, gapX=18, startX=W/2-cardW-gapX/2;
    for(let i=0;i<META_UPS.length;i++){
        const u=META_UPS[i];
        const cur=Math.floor((meta[u.key]||0)/u.per);
        const col=i<2?0:i<4?1:0; // alternate columns
        const row=i<2?i:i<4?i-2:i-2;
        const bx = i%2===0 ? startX : startX+cardW+gapX;
        const by = 110 + Math.floor(i/2)*92;
        const hov=metaHov===i, ok=meta.crystals>=u.cost&&cur<u.max;
        const cc=ok?COL.upgrade:'#374151';

        panel(bx,by,cardW,cardH,ok?(hov?COL.upgrade:'rgba(75,55,120,0.55)'):'rgba(32,42,60,0.4)');
        if(hov&&ok&&QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=14;}

        // Upgrade name + level
        ctx.shadowBlur=0;
        ctx.fillStyle=ok?'#f1f5f9':'#4b5563';ctx.font='bold 15px Georgia,serif';ctx.textAlign='left';
        ctx.fillText(u.name,bx+16,by+26);
        ctx.fillStyle='#64748b';ctx.font='12px Georgia,serif';
        ctx.fillText(`${T('level')} ${cur} / ${u.max}`,bx+16,by+46);
        // Cost
        ctx.fillStyle=ok?'#facc15':'#4b5563';ctx.textAlign='right';ctx.font='bold 13px Georgia,serif';
        ctx.fillText(`${u.cost} 💎`,bx+cardW-16,by+26);
        if(cur>=u.max){ctx.fillStyle='#22c55e';ctx.font='bold 11px Georgia,serif';ctx.fillText(T('maxLabel'),bx+cardW-16,by+46);}

        // Progress bar
        const bpx=bx+16,bpy=by+58,bpw=cardW-32,bph=6;
        ctx.fillStyle='rgba(255,255,255,0.08)';ctx.beginPath();ctx.roundRect(bpx,bpy,bpw,bph,3);ctx.fill();
        if(cur>0){
            const fw=bpw*(cur/u.max);
            ctx.fillStyle=ok?COL.upgrade:'#374151';
            if(QUALITY.shadowBlur&&ok){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=5;}
            ctx.beginPath();ctx.roundRect(bpx,bpy,fw,bph,3);ctx.fill();ctx.shadowBlur=0;
        }
    }

    // Achievements section
    const acY=110+Math.ceil(META_UPS.length/2)*92+16;
    ctx.fillStyle='#475569';ctx.font='bold 14px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(`— ${T('achievementsLabel')}  ${Object.keys(meta.achievements).length}/${ACHIEVE.length} —`,W/2,acY);

    const acCols=Math.ceil(ACHIEVE.length/2);
    ACHIEVE.forEach((a,i)=>{
        const done=!!meta.achievements[a.id];
        const col=i<acCols?0:1;
        const row=i<acCols?i:i-acCols;
        const ax=W/2-460+col*460, ay=acY+16+row*22;
        ctx.fillStyle=done?'#a855f7':'#374151';
        ctx.font=`${done?'bold ':''}12px Georgia,serif`;ctx.textAlign='left';
        ctx.fillText(`${done?'✓':'○'} ${a.name} — ${a.desc}`,ax,ay);
    });

    ctx.fillStyle='rgba(100,116,139,0.6)';ctx.font='14px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(IS_MOBILE?T('metaHintMobile'):T('metaHintDesktop'),W/2,H-26);
    ctx.restore();
    drawVignette();
}

// ============================================================
//  LEADERBOARD SCREEN
// ============================================================
function drawLBScreen(){
    const sg=ctx.createLinearGradient(0,0,0,H);sg.addColorStop(0,'#050810');sg.addColorStop(1,'#090516');ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
    ctx.save();ctx.shadowColor='#facc15';ctx.shadowBlur=24;ctx.fillStyle='#facc15';ctx.font='bold 38px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('leaderboardTitle'),W/2,58);ctx.restore();

    // Yandex leaderboard (if loaded)
    if(yaLBEntries&&yaLBEntries.length){
        ctx.fillStyle='rgba(250,204,21,0.12)';ctx.beginPath();ctx.roundRect(W/2-360,72,720,24,4);ctx.fill();
        ctx.fillStyle='#facc15';ctx.font='bold 11px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('yaTopPlayers'),W/2,87);
        const cols=[W/2-300,W/2-130,W/2+60,W/2+230];
        panel(W/2-360,96,720,32,'rgba(80,60,20,0.4)');
        ctx.fillStyle='#64748b';ctx.font='bold 12px Georgia,serif';ctx.textAlign='center';
        ['#',T('lbPlayer'),T('lbTime'),T('lbRank')].forEach((h,i)=>ctx.fillText(h,cols[i],116));
        for(let i=0;i<Math.min(yaLBEntries.length,5);i++){
            const en=yaLBEntries[i],by=130+i*36;
            const isMe=en.player?.isCurrentPlayer;
            ctx.fillStyle=isMe?'rgba(168,85,247,0.12)':'rgba(14,18,38,0.5)';
            ctx.beginPath();ctx.roundRect(W/2-360,by-22,720,32,5);ctx.fill();
            const rc=i===0?'#facc15':i===1?'#94a3b8':i===2?'#cd7f32':'#475569';
            ctx.fillStyle=rc;ctx.font=`bold ${i<3?16:13}px Georgia,serif`;ctx.textAlign='center';ctx.fillText(i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+en.rank,cols[0],by);
            ctx.fillStyle=isMe?'#c084fc':'#f1f5f9';ctx.font='13px Georgia,serif';ctx.fillText((en.player?.publicName||T('anon')).slice(0,16),cols[1],by);
            ctx.fillStyle='#22c55e';ctx.fillText(fmtTime(en.score||0),cols[2],by);
            ctx.fillStyle='#64748b';ctx.fillText('#'+en.rank,cols[3],by);
        }
        ctx.fillStyle='rgba(100,116,139,0.4)';ctx.font='10px Georgia,serif';ctx.fillText(T('updatesAfterGame'),W/2,130+Math.min(yaLBEntries.length,5)*36+8);
    }

    // Local scores
    const localY = yaLBEntries&&yaLBEntries.length ? 130+Math.min(yaLBEntries.length,5)*36+28 : 90;
    ctx.fillStyle='#475569';ctx.font='bold 14px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('localRecords'),W/2,localY);
    const scores=getLB();
    if(!scores.length){ctx.fillStyle='#374151';ctx.font='16px Georgia,serif';ctx.fillText(T('noResults'),W/2,localY+30);}
    else{
        const cols2=[W/2-300,W/2-150,W/2,W/2+140,W/2+280];
        for(let i=0;i<Math.min(scores.length,5);i++){
            const sc=scores[i],by=localY+14+i*38;
            ctx.fillStyle=i<3?`rgba(${i===0?'250,204,21':i===1?'148,163,184':'190,120,42'},0.07)`:'rgba(14,18,38,0.5)';
            ctx.beginPath();ctx.roundRect(W/2-350,by-22,700,34,5);ctx.fill();
            const rc=i===0?'#facc15':i===1?'#94a3b8':i===2?'#cd7f32':'#374151';
            ctx.fillStyle=rc;ctx.font=`bold ${i<3?16:13}px Georgia,serif`;ctx.textAlign='center';ctx.fillText(i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+(i+1),cols2[0],by);
            ctx.fillStyle='#f1f5f9';ctx.font='14px Georgia,serif';ctx.fillText(fmtTime(sc.time),cols2[1],by);
            ctx.fillStyle=COL.dmg;ctx.fillText('☠ '+sc.kills,cols2[2],by);
            ctx.fillStyle=COL.magic;ctx.fillText('LVL '+sc.level,cols2[3],by);
            ctx.fillStyle='#374151';ctx.font='11px Georgia,serif';ctx.fillText(sc.date||'',cols2[4],by);
        }
    }
    ctx.fillStyle='rgba(100,116,139,0.65)';ctx.font='15px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('lbBack'),W/2,H-40);
    drawVignette();
}

// ============================================================
//  REVIVE SCREEN
// ============================================================
let reviveTimer=15; // countdown seconds

function drawReviveScreen(){
    // Freeze countdown
    ctx.fillStyle='rgba(0,0,0,0.92)';ctx.fillRect(0,0,W,H);
    const bg2=ctx.createLinearGradient(0,0,0,H*0.6);bg2.addColorStop(0,'rgba(22,160,10,0.12)');bg2.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=bg2;ctx.fillRect(0,0,W,H*0.6);

    // Timer ring
    const cx=W/2,cy=H/2-60,ringR=62;
    const fraction=Math.max(0,reviveTimer/15);
    ctx.save();
    ctx.strokeStyle='rgba(34,197,94,0.2)';ctx.lineWidth=8;ctx.beginPath();ctx.arc(cx,cy,ringR,0,PI2);ctx.stroke();
    ctx.strokeStyle='#22c55e';ctx.shadowColor='#22c55e';ctx.shadowBlur=20;ctx.lineWidth=8;
    ctx.beginPath();ctx.arc(cx,cy,-PI/2,-PI/2+PI2*fraction);ctx.stroke();
    ctx.shadowBlur=0;
    ctx.fillStyle='#f1f5f9';ctx.font='bold 42px Georgia,serif';ctx.textAlign='center';ctx.fillText(Math.ceil(reviveTimer),cx,cy+15);
    ctx.restore();

    ctx.save();ctx.shadowColor='#22c55e';ctx.shadowBlur=22;ctx.fillStyle='#22c55e';ctx.font='bold 30px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('reviveTitle'),W/2,H/2-148);ctx.restore();
    ctx.fillStyle='rgba(148,163,184,0.85)';ctx.font='15px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('reviveHint'),W/2,H/2-110);

    // Revive button
    const ry=H/2-18;
    ctx.save();ctx.shadowColor='#22c55e';ctx.shadowBlur=20;
    ctx.fillStyle='rgba(10,28,14,0.95)';ctx.strokeStyle='#22c55e';ctx.lineWidth=2;
    ctx.beginPath();ctx.roundRect(W/2-155,ry,310,52,10);ctx.fill();ctx.stroke();
    ctx.fillStyle='#dcfce7';ctx.font='bold 18px Georgia,serif';ctx.fillText(T('watchAd'),W/2,ry+32);ctx.restore();

    // Skip button
    const sy3=ry+64;
    ctx.save();ctx.fillStyle='rgba(10,12,22,0.82)';ctx.strokeStyle='rgba(100,116,139,0.5)';ctx.lineWidth=1;
    ctx.beginPath();ctx.roundRect(W/2-130,sy3,260,38,8);ctx.fill();ctx.stroke();
    ctx.fillStyle='#64748b';ctx.font='14px Georgia,serif';ctx.fillText(T('skipRevive'),W/2,sy3+24);ctx.restore();

    // Yandex leaderboard hint
    if(!sdkReady){ctx.fillStyle='rgba(100,116,139,0.45)';ctx.font='11px Georgia,serif';ctx.textAlign='center';ctx.fillText(T('adYandexOnly'),W/2,H/2+130);}
    drawVignette();
}

// ============================================================
//  GAME OVER
// ============================================================
let goAnim=0; // game-over animation timer
function drawGameOver(){
    goAnim=Math.min(goAnim+0.02,1);
    const ease=1-Math.pow(1-goAnim,3); // ease-out cubic

    // Dark backdrop
    ctx.save();
    ctx.fillStyle='rgba(0,0,0,0.9)';ctx.fillRect(0,0,W,H);
    const bg=ctx.createLinearGradient(0,0,0,H*0.55);
    bg.addColorStop(0,'rgba(140,15,15,0.18)');bg.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H*0.55);

    ctx.globalAlpha=ease;

    // Title
    ctx.save();
    if(!IS_MOBILE&&QUALITY.shadowBlur){ctx.shadowColor='#dc2626';ctx.shadowBlur=55;}
    ctx.fillStyle='#ef4444';ctx.font='bold 62px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(T('gameOver'),W/2,H/2-105);ctx.shadowBlur=0;
    ctx.fillStyle='rgba(148,163,184,0.8)';ctx.font='italic 15px Georgia,serif';
    ctx.fillText(T('heroFell'),W/2,H/2-64);
    ctx.restore();

    // Main stats card
    const cw=520,ch=190,cx=W/2-cw/2,cy=H/2-50;
    panel(cx,cy,cw,ch,'rgba(100,30,30,0.6)');
    ctx.textAlign='center';ctx.fillStyle='#f1f5f9';ctx.font='bold 14px Georgia,serif';
    // Row 1: time + level
    ctx.fillStyle='#94a3b8';ctx.font='12px Georgia,serif';ctx.textAlign='left';
    ctx.fillText(`⏱ ${T('time')}`,cx+30,cy+34);ctx.fillText(`🎯 ${T('levelLabel')}`,cx+cw/2+20,cy+34);
    ctx.fillStyle='#f1f5f9';ctx.font='bold 22px Georgia,serif';
    ctx.fillText(fmtTime(gameTime),cx+30,cy+60);
    ctx.fillText(`${player.level}`,cx+cw/2+20,cy+60);
    // Divider
    ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(cx+20,cy+72);ctx.lineTo(cx+cw-20,cy+72);ctx.stroke();
    // Row 2: kills + chapter
    ctx.fillStyle='#94a3b8';ctx.font='12px Georgia,serif';
    ctx.fillText(`☠ ${T('killed')}`,cx+30,cy+92);ctx.fillText(`📍 ${T('chapter')}`,cx+cw/2+20,cy+92);
    ctx.fillStyle='#ef4444';ctx.font='bold 22px Georgia,serif';ctx.fillText(`${killCount}`,cx+30,cy+118);
    ctx.fillStyle='#f1f5f9';ctx.font='bold 16px Georgia,serif';ctx.fillText(getCh().name,cx+cw/2+20,cy+118);
    // Divider
    ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(cx+20,cy+128);ctx.lineTo(cx+cw-20,cy+128);ctx.stroke();
    // Crystals earned
    const cr=Math.floor(killCount/10)+Math.floor(gameTime/30);
    ctx.textAlign='center';
    if(QUALITY.shadowBlur){ctx.shadowColor=COL.upgrade;ctx.shadowBlur=12;}
    ctx.fillStyle=COL.upgrade;ctx.font='bold 19px Georgia,serif';
    ctx.fillText(`💎 +${cr} ${T('crystalsEarned')}`,W/2,cy+158);ctx.shadowBlur=0;
    // Best time comparison
    const scores=getLB();
    if(scores.length){
        const isNewBest=gameTime>=scores[0].time;
        ctx.fillStyle=isNewBest?'#22c55e':'rgba(100,116,139,0.6)';ctx.font='bold 12px Georgia,serif';
        ctx.fillText(isNewBest?`${T('newRecord')} (${T('prevRecord')}: ${fmtTime(gameTime>=scores[0].time&&scores.length>1?scores[1].time:scores[0].time)})`:
            `${T('best')}: ${fmtTime(scores[0].time)}  |  ${T('killRecord')}: ${scores[0].kills||0}`,W/2,cy+182);
    }

    // Weapons used summary
    const wepList=player.weapons.map(w=>WEAPONS[w]?WEAPONS[w].name:w).join('  ·  ');
    ctx.fillStyle='rgba(100,116,139,0.55)';ctx.font='11px Georgia,serif';
    ctx.fillText(T('weapons')+': '+wepList,W/2,cy+ch+18);

    // Buttons
    ctx.save();
    if(QUALITY.shadowBlur){ctx.shadowColor='#7c3aed';ctx.shadowBlur=14;}
    ctx.fillStyle='rgba(18,14,38,0.92)';ctx.strokeStyle='rgba(168,85,247,0.7)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.roundRect(W/2-130,cy+ch+34,260,44,10);ctx.fill();ctx.stroke();
    ctx.fillStyle='#e9d5ff';ctx.font='bold 17px Georgia,serif';ctx.fillText(T('toMenu'),W/2,cy+ch+62);ctx.restore();

    ctx.save();
    ctx.fillStyle='rgba(10,12,22,0.85)';ctx.strokeStyle='rgba(96,165,250,0.45)';ctx.lineWidth=1;
    ctx.beginPath();ctx.roundRect(W/2-100,cy+ch+86,200,36,8);ctx.fill();ctx.stroke();
    ctx.fillStyle='#60a5fa';ctx.font='bold 13px Georgia,serif';ctx.fillText(T('records'),W/2,cy+ch+109);ctx.restore();

    ctx.globalAlpha=1;
    ctx.restore();
    drawVignette();
}

function drawPaused(){
    ctx.fillStyle='rgba(0,0,0,0.72)';ctx.fillRect(0,0,W,H);
    ctx.save();
    // Title
    ctx.textAlign='center';
    ctx.fillStyle='#e9d5ff';ctx.font='bold 42px Georgia,serif';
    if(QUALITY.shadowBlur){ctx.shadowColor=COL.magic;ctx.shadowBlur=24;}
    ctx.fillText(T('pauseTitle'),W/2,H/2-180);ctx.shadowBlur=0;
    ctx.fillStyle='rgba(148,163,184,0.6)';ctx.font='14px Georgia,serif';
    ctx.fillText(IS_MOBILE?T('pauseHintMobile'):T('pauseHintDesktop'),W/2,H/2-146);

    // Stats panel
    const px=W/2-280,py=H/2-128,pw=560,ph=220;
    panel(px,py,pw,ph,'rgba(80,55,120,0.5)');
    ctx.fillStyle='#94a3b8';ctx.font='bold 12px Georgia,serif';ctx.textAlign='left';
    const col1=px+24,col2=px+pw/2+12;
    const rows=[
        [T('statDmg'),player.damage,T('statPierce'),player.pierce],
        [T('statAtkSpd'),player.atkSpd.toFixed(2),T('statCrit'),`${Math.floor(player.crit*100)}%`],
        [T('statRange'),Math.floor(player.range),T('statCritDmg'),`×${player.critMult.toFixed(2)}`],
        [T('statSpeed'),Math.floor(player.speed),T('statPickup'),Math.floor(player.pickR)],
        [T('statHpLabel'),`${Math.ceil(player.hp)}/${player.maxHp}`,T('statShield'),`${Math.floor(player.shield)}/${player.shieldMax}`],
        [T('statXpMult'),`×${player.xpMult.toFixed(2)}`,T('statRegen'),`${player.regen}${T('perSec')}`],
    ];
    rows.forEach(([k1,v1,k2,v2],i)=>{
        const ry=py+28+i*32;
        ctx.fillStyle='#64748b';ctx.font='12px Georgia,serif';
        ctx.fillText(k1,col1,ry);ctx.fillText(k2,col2,ry);
        ctx.fillStyle='#f1f5f9';ctx.font='bold 12px Georgia,serif';
        ctx.textAlign='right';
        ctx.fillText(v1,col1+pw/2-30,ry);ctx.fillText(v2,px+pw-24,ry);
        ctx.textAlign='left';
    });

    // Active weapons
    const wy=py+ph+16;
    ctx.fillStyle='#6d28d9';ctx.font='bold 12px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(T('activeWeapons')+': '+player.weapons.map(w=>WEAPONS[w]?WEAPONS[w].name:w).join('  ·  '),W/2,wy);

    // Session stats
    ctx.fillStyle='rgba(100,116,139,0.7)';ctx.font='13px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(`${T('time')}: ${fmtTime(gameTime)}   ☠ ${T('killed')}: ${killCount}   ${T('levelLabel')}: ${player.level}   💎 ${T('thisRun')}: ${Math.floor(killCount/10)+Math.floor(gameTime/30)}`,W/2,wy+28);

    // Mute indicator
    ctx.fillStyle=audioMuted?'#ef4444':'#22c55e';ctx.font='13px Georgia,serif';
    ctx.fillText(audioMuted?T('soundOff'):T('soundOn'),W/2,wy+52);

    ctx.restore();
}

// ============================================================
//  INPUT HANDLERS (key/click/meta)
// ============================================================
canvas.addEventListener('mousemove',e=>{
    const rect=canvas.getBoundingClientRect();
    const mx=(e.clientX-rect.left)*(W/rect.width),my=(e.clientY-rect.top)*(H/rect.height);
    if(gameState==='upgrade'){
        const cardW=Math.min(520,W-60),cardX=W/2-cardW/2;
        hovUp=-1;for(let i=0;i<upChoices.length;i++){const by=112+i*126;if(mx>=cardX&&mx<=cardX+cardW&&my>=by&&my<=by+118)hovUp=i;}
    }
    if(gameState==='meta'){
        metaHov=-1;
        const cardW=340,gapX=18,startX=W/2-cardW-gapX/2;
        for(let i=0;i<META_UPS.length;i++){
            const bx=i%2===0?startX:startX+cardW+gapX, by=110+Math.floor(i/2)*92;
            if(mx>=bx&&mx<=bx+cardW&&my>=by&&my<=by+82) metaHov=i;
        }
    }
    if(gameState==='charselect'){
        charSelectHov=-1;
        const cardW2=IS_MOBILE?250:272,gap2=IS_MOBILE?14:22;
        const totalW2=CHARACTERS.length*cardW2+(CHARACTERS.length-1)*gap2;
        const startX2=W/2-totalW2/2;
        for(let i=0;i<CHARACTERS.length;i++){
            const cx2=startX2+i*(cardW2+gap2);
            const cardH2=IS_MOBILE?310:370;
            if(mx>=cx2&&mx<=cx2+cardW2&&my>=(IS_MOBILE?94:108)&&my<=(IS_MOBILE?94:108)+cardH2) charSelectHov=i;
        }
    }
});

canvas.addEventListener('click',e=>{
    const rect=canvas.getBoundingClientRect();
    const mx=(e.clientX-rect.left)*(W/rect.width),my=(e.clientY-rect.top)*(H/rect.height);
    initAudio();
    if(gameState==='upgrade'&&hovUp>=0){selectUpgrade(hovUp);return;}

    if(gameState==='charselect'){
        // Check card clicks
        const cardW2=IS_MOBILE?250:272,gap2=IS_MOBILE?14:22,cardH2=IS_MOBILE?310:370,cardY2=IS_MOBILE?94:108;
        const totalW2=CHARACTERS.length*cardW2+(CHARACTERS.length-1)*gap2;
        const startX2=W/2-totalW2/2;
        for(let i=0;i<CHARACTERS.length;i++){
            const cx2=startX2+i*(cardW2+gap2);
            if(mx>=cx2&&mx<=cx2+cardW2&&my>=cardY2&&my<=cardY2+cardH2){ selectedCharIdx=i; }
        }
        // Confirm button
        const btnY2=cardY2+cardH2+18;
        if(mx>=W/2-155&&mx<=W/2+155&&my>=btnY2&&my<=btnY2+52){ startGame(); return; }
        return;
    }

    if(gameState==='menu'){
        if(mx>=W/2-118&&mx<=W/2+118&&my>=H/2+50&&my<=H/2+88){gameState='meta';return;}
        if(mx>=W/2-118&&mx<=W/2+118&&my>=H/2+96&&my<=H/2+132){gameState='leaderboard';return;}
        gameState='charselect'; return;
    }
    if(gameState==='meta'){
        if(metaHov>=0){
            const u=META_UPS[metaHov],cur=Math.floor((meta[u.key]||0)/u.per);
            if(meta.crystals>=u.cost&&cur<u.max){meta.crystals-=u.cost;meta[u.key]=(meta[u.key]||0)+u.per;saveMeta();}
        }
    }
    if(gameState==='leaderboard') gameState='menu';
    if(gameState==='gameover'){
        // Show interstitial at logical pause — player chose to return to menu (req 4.4)
        showInterstitialAd(()=>{ gameState='menu'; });
        return;
    }
    // Mute button (bottom-right, visible during play)
    if(gameState==='playing'||gameState==='paused'){
        const muteW=IS_MOBILE?64:48, muteH=IS_MOBILE?28:20, muteX=W-muteW-10, muteY=H-muteH-8;
        if(mx>=muteX&&mx<=muteX+muteW&&my>=muteY&&my<=muteY+muteH) toggleMute();
        // Pause button (mobile)
        if(IS_MOBILE&&mx>=W-80&&mx<=W-44&&my>=8&&my<=36){
            if(gameState==='playing'){gameState='paused';gameplayStop();}
            else if(gameState==='paused'){gameState='playing';gameplayStart();}
        }
    }
});

document.addEventListener('keydown',e=>{
    // Use e.code for layout-independent key detection
    const code=e.code;        // 'KeyP', 'Escape', 'Enter', 'KeyM', 'KeyL' etc.
    const k=e.key.toLowerCase(); // fallback for digit keys ('1','2','3')
    initAudio();

    // Upgrade selection: digits 1-3 (code: 'Digit1'..'Digit3')
    if(gameState==='upgrade'){
        if(code==='Digit1'||code==='Numpad1') selectUpgrade(0);
        else if(code==='Digit2'||code==='Numpad2') selectUpgrade(1);
        else if(code==='Digit3'||code==='Numpad3') selectUpgrade(2);
    }

    // Character select navigation
    if(gameState==='charselect'){
        if(code==='ArrowLeft'||code==='KeyA') selectedCharIdx=Math.max(0,selectedCharIdx-1);
        if(code==='ArrowRight'||code==='KeyD') selectedCharIdx=Math.min(CHARACTERS.length-1,selectedCharIdx+1);
        if(code==='Enter') startGame();
        if(code==='Escape') gameState='menu';
    }

    // Pause — P key
    if(code==='KeyP'&&(gameState==='playing'||gameState==='paused')){
        if(gameState==='playing'){gameState='paused';gameplayStop();}
        else{gameState='playing';gameplayStart();}
    }

    // Escape: paused → menu, meta/leaderboard → menu
    if(code==='Escape'){
        if(gameState==='paused') gameState='menu';
        if(gameState==='meta'||gameState==='leaderboard'||gameState==='charselect') gameState='menu';
    }

    // M: menu → meta, playing → toggle mute
    if(code==='KeyM'){
        if(gameState==='menu') gameState='meta';
        else if(gameState==='playing') toggleMute();
    }

    // L: leaderboard
    if(code==='KeyL'&&(gameState==='menu'||gameState==='gameover')) gameState='leaderboard';

    // Enter: start game (menu only) OR go to menu (gameover)
    if(code==='Enter'){
        if(gameState==='menu') gameState='charselect';
        else if(gameState==='gameover'){ showInterstitialAd(()=>{ gameState='menu'; }); }
    }
});

// ============================================================
//  GAME STATE
// ============================================================
let gameState='menu', gameTime=0, killCount=0, frameCount=0;
// charselect state is inserted between menu and game
let nextMini=30, nextBoss=60;
setLoad(60);

function startGame(){
    applyCharStats(); // ← Apply selected character's base stats first
    player.reset();
    // Re-apply char stats after reset (reset() overwrites with defaults)
    applyCharStats();
    enemies=[];projectiles=[];eProjArr=[];xpOrbs=[];particles=[];floatTexts=[];hazards=[];lChains=[];strikeFX=[];
    enemiesByDist=[];activeBoss=null;activeBossList=[];
    weapTimers={};Object.keys(evosDone).forEach(k=>delete evosDone[k]);usedOnce=new Set();
    gameTime=0;killCount=0;frameCount=0;spawnTimer=1;waveCount=0;nextMini=30;nextBoss=60;regenT=0;shake.i=0;
    chapterIdx=0;chTrans={on:false,timer:0,name:'',col:''};
    wev.active=null;wev.timer=0;wev.nextAt=90;wev.spdMult=1;wev.xpMult=1;wev.storm=false;evBanner=null;
    achPopups=[];
    canRevive=true;reviveOffered=false;reviveTimer=15;
    // Reset visual state
    impactRings=[];streak.count=0;streak.timer=0;streak.display=0;streak.flash=0;
    combo.count=0;combo.timer=0;
    lvlFlash=0;hpPulseT=0;
    bossFlash.active=false;
    trailCtx.clearRect(0,0,W,H);
    spawnWarnings=[];pendingSpawns=[];mmFrame=0;goAnim=0;
    // Revert any active temp effects then clear (prevents stat corruption on restart)
    for(const e of tempEffects) e.onRemove?.();
    tempEffects.length=0;
    initWeather();
    genMap(); gameState='playing';
    gameplayStart();
    meta.totalGames++; saveMeta();
}

function endGame(){
    canRevive=true;
    goAnim=0;
    gameplayStop();
    offerRevive(); // offerRevive sets the correct gameState (revive or gameover)
}

// ============================================================
//  MAIN LOOP
// ============================================================
let lastTime=performance.now();
initAmb();
setLoad(80);

// Final loading step — hide loading screen and signal Yandex
setLoad(100);
setTimeout(()=>{
    hideLoadScreen();
    signalGameReady(); // Tell Yandex the game is playable
}, 300);

function loop(now){
    const dt=Math.min((now-lastTime)/1000,0.05); lastTime=now;
    if(isPortraitMode){ requestAnimationFrame(loop); return; }
    ctx.clearRect(0,0,W,H);
    try{

    if(gameState==='playing'){
        gameTime+=dt; frameCount++;
        updateChapter();
        updatePlayer(dt);
        updateCamera();
        updateEnemies(dt);
        updateWeapons(dt);
        updateXpOrbs(dt);
        updateMapObjs(dt);
        updateParticles(dt);
        updateImpacts(dt);
        updateStreak(dt);
        updateCombo(dt);
        updateBossFlash(dt);
        updateTrails();
        updateFloatTexts(dt);
        updateAmb(dt);
        updateWorldEvents(dt);
        updateShake();
        updateSpawnWarnings(dt);
        updateWeather(dt);
        updateBossRage();
        updateTempEffects(dt);
        updateFPS(now,dt);
        LOD.update(dt, enemies.length);
        if(frameCount%300===0) checkAchieve();
        if(player.hp<=0) endGame();
    } else updateCamera();

    // ── DRAW ──────────────────────────────────────────────────
    if(gameState==='menu'){         drawMenu();            }
    else if(gameState==='charselect'){ drawCharSelect();  }
    else if(gameState==='meta'){    drawMetaScreen();      }
    else if(gameState==='gameover'){drawGameOver();        }
    else if(gameState==='leaderboard'){drawLBScreen();     }
    else {
        drawBG();
        drawSpawnWarnings();
        drawMapObjs();
        drawAmb();
        drawWeather();
        drawXpOrbs();
        drawEnemies();
        drawBossFlash();
        drawLightningStrikes();
        drawWeapons();
        drawPlayer();
        drawParticles();
        drawImpacts();
        drawFloatTexts();
        drawVignette(dt);
        drawLvlFlash();
        drawStreak();
        drawCombo();
        drawHUD();
        drawMinimap();
        drawMobileControls();
        drawFPS();
        if(gameState==='paused')  drawPaused();
        if(gameState==='upgrade') drawUpgradeScreen();
    }

    }catch(err){
        // Log but never crash — just reset canvas state and continue
        console.error('[DarkSurvivor]', err.message||err, err.stack?.split('\n')[1]||'');
        ctx.globalAlpha=1;
        ctx.shadowBlur=0;
        ctx.globalCompositeOperation='source-over';
        ctx.setTransform(1,0,0,1,0,0);
        ctx.lineWidth=1;
        // DO NOT draw red overlay — it caused the "red screen on death" bug
    }
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop); // ← initial call — starts the game loop
