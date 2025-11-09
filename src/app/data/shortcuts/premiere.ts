import { Shortcut } from "./types";

export const PREMIERE_SHORTCUTS: Shortcut[] = [
  /* ========= TIMELINE / PLAYBACK ========= */
  { os:"premiere", category:"Timeline", title:"Play / Pause", combo:["Space"], desc:"Play / stop playback" },
  { os:"premiere", category:"Timeline", title:"Stop & Return Head", combo:["Shift","Space"], desc:"Stop & return to playhead start" },
  { os:"premiere", category:"Timeline", title:"Step Forward", combo:["Right Arrow"], desc:"Move frame forward" },
  { os:"premiere", category:"Timeline", title:"Step Backward", combo:["Left Arrow"], desc:"Move frame backward" },
  { os:"premiere", category:"Timeline", title:"Ripple Delete", combo:["Shift","Delete"], desc:"Delete clip & close gap" },

  /* ========= EDITING ========= */
  { os:"premiere", category:"Editing", title:"Cut Tool", combo:["C"], desc:"Select razor tool" },
  { os:"premiere", category:"Editing", title:"Selection Tool", combo:["V"], desc:"Standard selection cursor" },
  { os:"premiere", category:"Editing", title:"Ripple Trim Next", combo:["Q"], desc:"Shortcut to trim previous clip edge" },
  { os:"premiere", category:"Editing", title:"Ripple Trim Previous", combo:["W"], desc:"Shortcut to trim next clip edge" },
  { os:"premiere", category:"Editing", title:"Add Edit", combo:["Ctrl","K"], desc:"Split clip at playhead" },

  /* ========= MEDIA / SEQUENCE ========= */
  { os:"premiere", category:"Media", title:"New Sequence", combo:["Ctrl","N"], desc:"Create new sequence" },
  { os:"premiere", category:"Media", title:"Import", combo:["Ctrl","I"], desc:"Import media" },
  { os:"premiere", category:"Media", title:"Export Media", combo:["Ctrl","M"], desc:"Open export window" },

  /* ========= MARKERS ========= */
  { os:"premiere", category:"Markers", title:"Add Marker", combo:["M"], desc:"Drop timeline marker" },
  { os:"premiere", category:"Markers", title:"Clear Markers", combo:["Alt","M"], desc:"Remove markers" },

  /* ========= AUDIO ========= */
  { os:"premiere", category:"Audio", title:"Audio Gain", combo:["G"], desc:"Adjust gain" },
  { os:"premiere", category:"Audio", title:"Mute Audio Track", combo:["Shift","S"], desc:"Toggle solo/mute track" },

  /* ========= QUALITY OF LIFE ========= */
  { os:"premiere", category:"General", title:"Undo", combo:["Ctrl","Z"], desc:"Undo action" },
  { os:"premiere", category:"General", title:"Redo", combo:["Ctrl","Shift","Z"], desc:"Redo action" },
  { os:"premiere", category:"General", title:"Save", combo:["Ctrl","S"], desc:"Quick save" },
];
