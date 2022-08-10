import atventure from "./atventure.png";
import omninote from "./omninote.png";
import trie from "./trie.gif";
import dungeonhop from "./dungeonhop.png";
import characters from "./characters.png";
import games from "./games.png";

export const PROJECTS = [
  "@venture",
  "Board Games",
  "Character Sheets",
  "Data Structures",
  "Omninote",
  "Dungeon Hop",
];

export const IMAGES_BY_PROJECT = {
  "@venture": atventure,
  "Board Games": games,
  "Character Sheets": characters,
  Omninote: omninote,
  "Data Structures": trie,
  "Dungeon Hop": dungeonhop,
};

export const DESCRIPTIONS_BY_PROJECT = {
  "@venture": {
    basics: "For D&D players and DMs to manage their campaign notes together.",
    tools: [
      "Typescript",
      "NodeJS+Express",
      "React+Redux",
      "Google Cloud Storage",
      "Postgres",
    ],
    features:
      "Features full-text search through notes and sessions, role-based access control, special DM capabilities, ability to reference notes from other notes and sessions, and a world-map location tracker.",
    live: "https://atventure.ommish.com",
    github: null,
  },
  "Board Games": {
    basics: "Board games that my family enjoys playing together.",
    tools: [
      "Typescript",
      "NodeJS+Express",
      "WebSocket",
      "React+Redux",
      "i18next",
      "TailwindCSS",
    ],
    features:
      "Implements popular multi-player board games as online games using WebSockets. Playable in English and Japanese.",
    live: "http://games.ommish.com",
    github: "https://github.com/ommish/games",
  },
  "Character Sheets": {
    basics: "My personal take on the official D&D character sheet.",
    tools: ["Typescript", "React"],
    features:
      "Features include a status effect tracker, a remaining uses tracker, additional notes for many specs that are added as tooltips to keep the display clutter-free, calculation of ability score modifiers, saves, and skills, and template generation to easily add a skeleton for new characters.",
    live: null,
    github: null,
  },
  Omninote: {
    basics:
      "A single-page application inspired by Evernote for organizing notes under notebooks, tags, and locations.",
    tools: [
      "Ruby on Rails",
      "React+Redux",
      "Amazon Web Services (S3)",
      "Google Maps API",
      "React Quill",
    ],
    live: "https://omninote.herokuapp.com",
    github: "https://www.github.com/ommish/omninote",
  },
  "Dungeon Hop": {
    basics:
      "A side scrolling browser game inspired by a minigame in Kirby 64: The Crystal Shards.",
    tools: ["Javascript", "HTML5 Canvas", "Google Firebase"],
    live: "https://www.ommish.com/dungeon-hop",
    github: "https://www.github.com/ommish/dungeon-hop",
  },
  "Data Structures": {
    basics:
      "A collection of visualizations depicting how various data structures can be searched and/or manipulated.",
    tools: ["Javascript", "React", "GIPHY API"],
    live: "https://www.ommish.com/data-structures-and-search",
    github: "https://www.github.com/ommish/data-structures-and-search",
  },
};
