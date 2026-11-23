// schema.js - Los schema-databestand voor Just Overbeek (Leiden & Rotterdam 2027)
// Versie: 2.0 (Rustige 24-weken opbouw + Week 1 aangepast op maandag 7.5 km & zondag wedstrijd)
const SCHEMA_VERSION = "2026-11-23-v2";

// Standaard al gelogde run(s) bij een frisse start (jouw maandag middagrun van vandaag)
const INITIAL_LOGGED_RUNS = [
  {
    id: 1732362900000,
    date: "2026-11-23",
    km: 7.50,
    timeFormatted: "38:49",
    totalSeconds: 2329,
    paceFormatted: "5:10 /km",
    intensity: "hard",
    type: "Tempo",
    note: "Maandag middagrun (5:10/km, cadans 156 spm), warmgedraaid op hometrainer"
  }
];

// LEIDEN MARATHON: 9 MEI 2027 (24 WEKEN VANAF MAANDAG 23 NOV 2026)
// Geleidelijke, kuitvriendelijke opbouw: Week 4 zit op 10 km herstel (piek in blok 1 = 12 km in week 3)
const LEIDEN_CLEAN_PLAN = [
  {
    id: 1, title: "Week 1: Rustige Start & Wedstrijdweek", dateRange: "23 Nov - 29 Nov 2026", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Maandag", title: "Ontspannen Duurloop (Cadans 168+)", type: "run", km: 7.5, originalKm: 7.5, pace: "5:35 /km", note: "Gelopen in 38:49 (5:10/km) na hometrainer", status: "completed" },
      { day: "Woensdag", title: "Wielrennen Herstelrit", type: "bike", km: 30, originalKm: 30, time: "60 min", pace: "28 km/u", note: "Aerobe motor zonder botsing", status: "planned" },
      { day: "Donderdag", title: "Rustige Duurloop", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Iets langer omdat zondag wedstrijd is", status: "planned" },
      { day: "Zondag", title: "Hockeywedstrijd (Geen 11 km loop)", type: "hockey", km: 0, originalKm: 0, note: "Vervangt de lange duurloop i.v.m. herstel", status: "planned" }
    ]
  },
  {
    id: 2, title: "Week 2: Kuit-Adaptatie Opbouwen", dateRange: "30 Nov - 6 Dec 2026", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Korte Techniekloop: 6x 400m Vlot", type: "run", km: 7.5, originalKm: 7.5, pace: "4:50 /km", note: "Focus op lichte, snelle pas (168+ spm)", status: "planned" },
      { day: "Woensdag", title: "Wielrennen Duur", type: "bike", km: 30, originalKm: 30, time: "60 min", pace: "28 km/u", note: "Benen losdraaien", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duurloop", type: "run", km: 8.0, originalKm: 8.0, pace: "5:35 /km", note: "Kuiten ontspannen houden", status: "planned" },
      { day: "Zondag", title: "Zondagduurloop: 10.5 km", type: "run", km: 10.5, originalKm: 10.5, pace: "5:40 /km", note: "Praattempo Zone 2", status: "planned" }
    ]
  },
  {
    id: 3, title: "Week 3: Rustig Doorbouwen naar 12 km", dateRange: "7 Dec - 13 Dec 2026", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Marathontempo Blok: 3x 1.5km", type: "run", km: 8.0, originalKm: 8.0, pace: "4:58 /km", note: "90 sec wandelpauze", status: "planned" },
      { day: "Woensdag", title: "Wielrennen Los", type: "bike", km: 30, originalKm: 30, time: "60 min", pace: "27 km/u", note: "Herstel zonder impact", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duurloop", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Ontspannen", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 12 km", type: "run", km: 12.0, originalKm: 12.0, pace: "5:35 /km", note: "Geen eindsprint forceren", status: "planned" }
    ]
  },
  {
    id: 4, title: "Week 4: Herstelweek (Cutback)", dateRange: "14 Dec - 20 Dec 2026", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Korte Tempoprikkel", type: "run", km: 7.0, originalKm: 7.0, pace: "4:55 /km", note: "Scherpte houden, niet forceren", status: "planned" },
      { day: "Donderdag", title: "Licht Duurloopje", type: "run", km: 7.0, originalKm: 7.0, pace: "5:40 /km", note: "Pees- en spierherstel", status: "planned" },
      { day: "Zondag", title: "Herstelduurloop: 10 km", type: "run", km: 10.0, originalKm: 10.0, pace: "5:40 /km", note: "Supercompensatie voor blok 2", status: "planned" }
    ]
  },
  {
    id: 5, title: "Week 5: Kerstweek -> 13.5 km", dateRange: "21 Dec - 27 Dec 2026", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "4x 1.5km MP Blokken", type: "run", km: 8.5, originalKm: 8.5, pace: "4:55 /km", note: "Ritme vasthouden", status: "planned" },
      { day: "Donderdag", title: "Tussenduurloop", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Vlot en constant", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 13.5 km", type: "run", km: 13.5, originalKm: 13.5, pace: "5:35 /km", note: "Vetverbranding", status: "planned" }
    ]
  },
  {
    id: 6, title: "Week 6: Oud & Nieuw -> 15 km", dateRange: "28 Dec - 3 Jan 2027", phase: 1, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Progressieloop 9 km", type: "run", km: 9.0, originalKm: 9.0, pace: "5:25 -> 4:55 /km", note: "Laatste 3 km op marathontempo", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duur", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Soepel", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 15 km", type: "run", km: 15.0, originalKm: 15.0, pace: "5:35 /km", note: "Eerste keer sportgel testen", status: "planned" }
    ]
  },
  {
    id: 7, title: "Week 7: Opbouw naar 16.5 km", dateRange: "4 Jan - 10 Jan 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "5x 1km Drempel", type: "run", km: 9.5, originalKm: 9.5, pace: "4:35 /km", note: "200m dribbelpauze", status: "planned" },
      { day: "Donderdag", title: "Basislus", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Rustig tempo", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 16.5 km", type: "run", km: 16.5, originalKm: 16.5, pace: "5:35 /km", note: "Kuiten ontspannen houden", status: "planned" }
    ]
  },
  {
    id: 8, title: "Week 8: Cutback Herstelweek", dateRange: "11 Jan - 17 Jan 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Vlotte 8 km", type: "run", km: 8.0, originalKm: 8.0, pace: "5:05 /km", note: "Kort en energiek", status: "planned" },
      { day: "Woensdag", title: "Wielrennen Los", type: "bike", km: 35, originalKm: 35, time: "70 min", pace: "28 km/u", note: "Benen los", status: "planned" },
      { day: "Zondag", title: "Herstel Duurloop: 13 km", type: "run", km: 13.0, originalKm: 13.0, pace: "5:40 /km", note: "Supercompensatie", status: "planned" }
    ]
  },
  {
    id: 9, title: "Week 9: Doorbouwen naar 18.5 km", dateRange: "18 Jan - 24 Jan 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "3x 2.5km MP Blokken", type: "run", km: 10.5, originalKm: 10.5, pace: "4:55 /km", note: "Marathontempo gevoel", status: "planned" },
      { day: "Donderdag", title: "Herstelloop", type: "run", km: 8.5, originalKm: 8.5, pace: "5:40 /km", note: "Kuiten ontspannen", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 18.5 km", type: "run", km: 18.5, originalKm: 18.5, pace: "5:35 /km", note: "Drinken & gels oefenen", status: "planned" }
    ]
  },
  {
    id: 10, title: "Week 10: De Halve Marathon (21.1 km)", dateRange: "25 Jan - 31 Jan 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Piramideloop (1-2-3-2-1 km)", type: "run", km: 11.0, originalKm: 11.0, pace: "4:40 - 4:55 /km", note: "Intensieve prikkel", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duur", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Constant ritme", status: "planned" },
      { day: "Zondag", title: "Halve Marathon Duurloop: 21.1 km", type: "run", km: 21.1, originalKm: 21.1, pace: "5:35 /km", note: "Grote mijlpaal!", status: "planned" }
    ]
  },
  {
    id: 11, title: "Week 11: Opbouw naar 23 km", dateRange: "1 Feb - 7 Feb 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "2x 4km MP Blokken", type: "run", km: 11.5, originalKm: 11.5, pace: "4:58 /km", note: "Marathonspecifiek", status: "planned" },
      { day: "Donderdag", title: "Losloopronde", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Ontspannen", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 23 km", type: "run", km: 23.0, originalKm: 23.0, pace: "5:35 /km", note: "Vetverbranding op de proef", status: "planned" }
    ]
  },
  {
    id: 12, title: "Week 12: Cutback Herstelweek", dateRange: "8 Feb - 14 Feb 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Rustig Loslopen", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Herstel van 23k", status: "planned" },
      { day: "Donderdag", title: "Wielrennen Duur", type: "bike", km: 35, originalKm: 35, time: "70 min", pace: "28 km/u", note: "Losse benen", status: "planned" },
      { day: "Zondag", title: "Gecontroleerde Duurloop: 16 km", type: "run", km: 16.0, originalKm: 16.0, pace: "5:35 /km", note: "Vorm vasthouden", status: "planned" }
    ]
  },
  {
    id: 13, title: "Week 13: De 25 km Barrière", dateRange: "15 Feb - 21 Feb 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "6x 1km Drempel", type: "run", km: 11.0, originalKm: 11.0, pace: "4:30 /km", note: "VO2max", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duur", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Sparen voor zondag", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 25 km", type: "run", km: 25.0, originalKm: 25.0, pace: "5:35 /km", note: "Tijd op je voeten", status: "planned" }
    ]
  },
  {
    id: 14, title: "Week 14: Doorbouwen naar 27.5 km", dateRange: "22 Feb - 28 Feb 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "4x 2km MP Blokken", type: "run", km: 12.0, originalKm: 12.0, pace: "4:55 /km", note: "Strak ritme", status: "planned" },
      { day: "Donderdag", title: "Basislus", type: "run", km: 9.0, originalKm: 9.0, pace: "5:35 /km", note: "Zone 2", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 27.5 km", type: "run", km: 27.5, originalKm: 27.5, pace: "5:35 /km", note: "Groene Hart simulatie", status: "planned" }
    ]
  },
  {
    id: 15, title: "Week 15: Eerste Dertiger (30 km)", dateRange: "1 Mar - 7 Mar 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "11 km met 6 km op 4:55 /km", type: "run", km: 11.0, originalKm: 11.0, pace: "4:55 /km", note: "Voelt natuurlijk", status: "planned" },
      { day: "Donderdag", title: "Lichte Duurloop", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Ontspannen", status: "planned" },
      { day: "Zondag", title: "Lange Duurloop: 30 km", type: "run", km: 30.0, originalKm: 30.0, pace: "5:35 /km", note: "3 gels + sportdrank testen", status: "planned" }
    ]
  },
  {
    id: 16, title: "Week 16: Cutback Herstelweek", dateRange: "8 Mar - 14 Mar 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Rustig Loslopen", type: "run", km: 8.0, originalKm: 8.0, pace: "5:35 /km", note: "Herstel na 30 km", status: "planned" },
      { day: "Donderdag", title: "Wielrennen Los", type: "bike", km: 30, originalKm: 30, time: "60 min", pace: "27 km/u", note: "Cardio", status: "planned" },
      { day: "Zondag", title: "Gecontroleerde 18 km", type: "run", km: 18.0, originalKm: 18.0, pace: "5:30 /km", note: "Vorm vasthouden", status: "planned" }
    ]
  },
  {
    id: 17, title: "Week 17: Marathonsnelheid Test (26 km)", dateRange: "15 Mar - 21 Mar 2027", phase: 2, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "3x 3km op MP", type: "run", km: 12.0, originalKm: 12.0, pace: "4:55 /km", note: "Wedstrijdritme", status: "planned" },
      { day: "Donderdag", title: "Rustig Rondje", type: "run", km: 8.5, originalKm: 8.5, pace: "5:35 /km", note: "Ontspannen", status: "planned" },
      { day: "Zondag", title: "Duurloop met MP Finish: 26 km", type: "run", km: 26.0, originalKm: 26.0, pace: "21k @ 5:35 + 5k @ 4:58", note: "Simulatie", status: "planned" }
    ]
  },
  {
    id: 18, title: "Week 18: DE KROONDUURLOOP: 32 KM", dateRange: "22 Mar - 28 Mar 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Korte Prikkels", type: "run", km: 8.5, originalKm: 8.5, pace: "4:50 /km", note: "Energie sparen", status: "planned" },
      { day: "Donderdag", title: "Loslooprondje", type: "run", km: 7.5, originalKm: 7.5, pace: "5:35 /km", note: "Losse benen", status: "planned" },
      { day: "Zondag", title: "DE KROONDUURLOOP: 32 KM", type: "run", km: 32.0, originalKm: 32.0, pace: "5:35 /km", note: "Piekduurloop!", status: "planned" }
    ]
  },
  {
    id: 19, title: "Week 19: Herstel & MP-Ritme", dateRange: "29 Mar - 4 Apr 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Rustig Loslopen", type: "run", km: 8.0, originalKm: 8.0, pace: "5:35 /km", note: "Herstel van 32k", status: "planned" },
      { day: "Donderdag", title: "Zone 2 Duur", type: "run", km: 8.5, originalKm: 8.5, pace: "5:30 /km", note: "Soepel", status: "planned" },
      { day: "Zondag", title: "Gecontroleerde 22 km", type: "run", km: 22.0, originalKm: 22.0, pace: "5:30 /km", note: "Vorm vasthouden", status: "planned" }
    ]
  },
  {
    id: 20, title: "Week 20: Laatste Lange Duurloop (28 km)", dateRange: "5 Apr - 11 Apr 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "4x 2km op MP", type: "run", km: 11.5, originalKm: 11.5, pace: "4:55 /km", note: "Sterk en rechtop lopen", status: "planned" },
      { day: "Donderdag", title: "Loslooprondje", type: "run", km: 8.0, originalKm: 8.0, pace: "5:35 /km", note: "Soepel", status: "planned" },
      { day: "Zondag", title: "Laatste Zware Duurloop: 28 km", type: "run", km: 28.0, originalKm: 28.0, pace: "5:35 /km", note: "Definitieve cheque", status: "planned" }
    ]
  },
  {
    id: 21, title: "Week 21: Taper Week 1 (-25% Volume)", dateRange: "12 Apr - 18 Apr 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "8 km met 4 km op MP", type: "run", km: 8.0, originalKm: 8.0, pace: "4:55 /km", note: "Scherpte houden", status: "planned" },
      { day: "Donderdag", title: "Kort Loslopen", type: "run", km: 6.0, originalKm: 6.0, pace: "5:35 /km", note: "Geen zware benen", status: "planned" },
      { day: "Zondag", title: "Taper Duurloop: 18 km", type: "run", km: 18.0, originalKm: 18.0, pace: "5:30 /km", note: "Voelt heerlijk licht!", status: "planned" }
    ]
  },
  {
    id: 22, title: "Week 22: Taper Week 2 (-45% Volume)", dateRange: "19 Apr - 25 Apr 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Korte Prikkels: 3x 1km", type: "run", km: 6.5, originalKm: 6.5, pace: "4:50 /km", note: "Spanning op de benen", status: "planned" },
      { day: "Donderdag", title: "Koffierondje 5 km", type: "run", km: 5.0, originalKm: 5.0, pace: "5:35 /km", note: "Heel relaxed", status: "planned" },
      { day: "Zondag", title: "Korte Zondagloop: 13 km", type: "run", km: 13.0, originalKm: 13.0, pace: "5:30 /km", note: "Energie opsparen", status: "planned" }
    ]
  },
  {
    id: 23, title: "Week 23: Taper Week 3 (-65% Volume)", dateRange: "26 Apr - 2 Mei 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "5 km met 3 Steigerungs", type: "run", km: 5.0, originalKm: 5.0, pace: "4:55 /km", note: "Snelheid voelen", status: "planned" },
      { day: "Donderdag", title: "Koffierondje 4 km", type: "run", km: 4.0, originalKm: 4.0, pace: "5:40 /km", note: "Bloedsomloop", status: "planned" },
      { day: "Zondag", title: "Kort Testloopje: 8 km", type: "run", km: 8.0, originalKm: 8.0, pace: "5:20 /km", note: "Carboloaden voorbereiden", status: "planned" }
    ]
  },
  {
    id: 24, title: "Week 24: RACE WEEK LEIDEN! 🏁", dateRange: "3 Mei - 9 Mei 2027", phase: 3, isOffWeek: false,
    workouts: [
      { day: "Dinsdag", title: "Shakeout Run", type: "run", km: 4.0, originalKm: 4.0, pace: "5:30 met 3x 100m MP", note: "Zenuwen loslopen", status: "planned" },
      { day: "Donderdag", title: "Spieractivatie 3 km", type: "run", km: 3.0, originalKm: 3.0, pace: "5:40 /km", note: "15 min losjes bewegen", status: "planned" },
      { day: "Vrijdag", title: "Rust & Koolhydraten laden", type: "other", km: 0, originalKm: 0, note: "Pasta, pannenkoeken, sportdrank", status: "planned" },
      { day: "Zaterdag", title: "Rust & Kleding klaarleggen", type: "other", km: 0, originalKm: 0, note: "Vroeg slapen!", status: "planned" },
      { day: "Zondag 9 Mei", title: "LEIDEN MARATHON 🏛️", type: "race", km: 42.2, originalKm: 42.2, pace: "4:58 /km doel", note: "Finish op de Vismarkt! Sub-3:30!", status: "planned" }
    ]
  }
];

// ROTTERDAM: 11 APRIL 2027 (20 WEKEN VANAF 23 NOV 2026)
function generateRotterdamCleanPlan() {
  const base = JSON.parse(JSON.stringify(LEIDEN_CLEAN_PLAN));
  const part1 = base.slice(0, 16);
  const part2 = base.slice(20, 24).map((w, idx) => {
    w.id = 17 + idx;
    if (w.id === 17) { w.title = "Week 17: Taper Week 1 (-25%)"; w.dateRange = "15 Mar - 21 Mar 2027"; }
    if (w.id === 18) { w.title = "Week 18: Taper Week 2 (-45%)"; w.dateRange = "22 Mar - 28 Mar 2027"; }
    if (w.id === 19) { w.title = "Week 19: Taper Week 3 (-65%)"; w.dateRange = "29 Mar - 4 Apr 2027"; }
    if (w.id === 20) {
      w.title = "Week 20: RACE WEEK ROTTERDAM! 🏁";
      w.dateRange = "5 Apr - 11 Apr 2027";
      const rWo = w.workouts.find(x => x.type === 'race');
      if (rWo) {
        rWo.day = "Zondag 11 April";
        rWo.title = "NN MARATHON ROTTERDAM";
        rWo.note = "Finish op de Coolsingel! Sub-3:30!";
      }
    }
    return w;
  });
  return [...part1, ...part2];
}
