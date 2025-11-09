import { Shortcut } from "./types";

export const AFTEREFFECTS_SHORTCUTS: Shortcut[] = [
  /* ========= WORKSPACE / TIMELINE ========= */
  { os:"aftereffects", category:"Timeline", title:"Play / Preview", combo:["Space"], desc:"Preview composition" },
  { os:"aftereffects", category:"Timeline", title:"Go to Start", combo:["Home"], desc:"Jump to start of timeline" },
  { os:"aftereffects", category:"Timeline", title:"Go to End", combo:["End"], desc:"Jump to end of timeline" },
  { os:"aftereffects", category:"Timeline", title:"Add Marker", combo:["*"], desc:"Add comp marker" },

  /* ========= TRANSFORM ========= */
  { os:"aftereffects", category:"Transform", title:"Position", combo:["P"], desc:"Show position property" },
  { os:"aftereffects", category:"Transform", title:"Scale", combo:["S"], desc:"Show scale" },
  { os:"aftereffects", category:"Transform", title:"Rotation", combo:["R"], desc:"Show rotation" },
  { os:"aftereffects", category:"Transform", title:"Opacity", combo:["T"], desc:"Show opacity" },
  { os:"aftereffects", category:"Transform", title:"All Transform", combo:["U"], desc:"Show animated properties" },

  /* ========= KEYFRAMES ========= */
  { os:"aftereffects", category:"Keyframing", title:"Add Keyframe", combo:["Alt","Shift","Property Click"], desc:"Set keyframe" },
  { os:"aftereffects", category:"Keyframing", title:"Ease In", combo:["F9"], desc:"Smooth incoming keyframe" },
  { os:"aftereffects", category:"Keyframing", title:"Easy Ease", combo:["F9"], desc:"Auto ease keyframe" },
  { os:"aftereffects", category:"Keyframing", title:"Jump to Next Keyframe", combo:["]"], desc:"Move to next keyframe" },
  { os:"aftereffects", category:"Keyframing", title:"Jump to Prev Keyframe", combo:["["], desc:"Move to previous keyframe" },

  /* ========= LAYER CONTROL ========= */
  { os:"aftereffects", category:"Layers", title:"Duplicate Layer", combo:["Ctrl","D"], desc:"Duplicate selected layer" },
  { os:"aftereffects", category:"Layers", title:"Pre-compose", combo:["Ctrl","Shift","C"], desc:"Group into composition" },
  { os:"aftereffects", category:"Layers", title:"Hide Layer", combo:["Shy Toggle"], desc:"Hide layer in timeline view" },

  /* ========= GENERAL ========= */
  { os:"aftereffects", category:"General", title:"Save", combo:["Ctrl","S"], desc:"Save project" },
  { os:"aftereffects", category:"General", title:"Undo", combo:["Ctrl","Z"], desc:"Undo" },
  { os:"aftereffects", category:"General", title:"Redo", combo:["Ctrl","Shift","Z"], desc:"Redo" },
];
