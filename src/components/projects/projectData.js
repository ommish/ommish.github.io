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
    basics:
      "A web application for D&D players and DMs to manage their campaign notes together.",
    tools: [
      "Typescript",
      "NodeJS+Express",
      "React+Redux",
      "Google Cloud Storage",
      "Postgres",
    ],
    live: "https://www.atventure.io",
    github: null,
  },
  "Board Games": {
    basics:
      "Web implementations of board games that my family enjoys playing together.",
    tools: [
      "Typescript",
      "NodeJS+Express",
      "WebSocket",
      "React+Redux",
      "TailwindCSS",
    ],
    live: "https://ommigames.herokuapp.com",
    github: "https://github.com/ommish/games",
  },
  "Character Sheets": {
    basics:
      "Adds helpful little things on top of the traditional D&D character sheet format like tooltips, a status effect section, remaining uses, and fun custom backgrounds for each character.",
    tools: ["Typescript", "React"],
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
    live: "http://www.ommish.com/dungeon-hop",
    github: "https://www.github.com/ommish/dungeon-hop",
  },
  "Data Structures": {
    basics:
      "A collection of visualizations depicting how various data structures can be searched and/or manipulated.",
    tools: ["Javascript", "React", "GIPHY API"],
    live: "http://www.ommish.com/data-structures-and-search",
    github: "https://www.github.com/ommish/data-structures-and-search",
  },
};
