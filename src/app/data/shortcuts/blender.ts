import { Shortcut } from "./types";

export const BLENDER_SHORTCUTS: Shortcut[] = [
  /* ========== VIEW / NAVIGATION ========== */
  { os:"blender", category:"View", title:"Orbit", combo:["MMB"], desc:"Rotate view" },
  { os:"blender", category:"View", title:"Pan", combo:["Shift","MMB"], desc:"Pan view" },
  { os:"blender", category:"View", title:"Zoom", combo:["Ctrl","MMB"], desc:"Zoom in/out" },
  { os:"blender", category:"View", title:"Zoom Selected", combo:["Numpad ."], desc:"Focus selected" },
  { os:"blender", category:"View", title:"Front View", combo:["Numpad 1"], desc:"Front orthographic" },
  { os:"blender", category:"View", title:"Top View", combo:["Numpad 7"], desc:"Top orthographic" },
  { os:"blender", category:"View", title:"Side View", combo:["Numpad 3"], desc:"Right orthographic" },
  { os:"blender", category:"View", title:"Perspective/Orthographic", combo:["Numpad 5"], desc:"Toggle camera mode" },
  { os:"blender", category:"View", title:"Camera View", combo:["Numpad 0"], desc:"Toggle camera view" },

  /* ========== SELECTION ========== */
  { os:"blender", category:"Select", title:"Select", combo:["LMB"], desc:"Select element" },
  { os:"blender", category:"Select", title:"Box Select", combo:["B"], desc:"Draw select area" },
  { os:"blender", category:"Select", title:"Circle Select", combo:["C"], desc:"Brush selection" },
  { os:"blender", category:"Select", title:"Lasso Select", combo:["Ctrl","LMB"], desc:"Freeform selection" },
  { os:"blender", category:"Select", title:"Invert Selection", combo:["Ctrl","I"], desc:"Invert current selection" },
  { os:"blender", category:"Select", title:"Select Linked", combo:["Ctrl","L"], desc:"Select connected mesh" },

  /* ========== TRANSFORM ========== */
  { os:"blender", category:"Transform", title:"Move", combo:["G"], desc:"Grab / move" },
  { os:"blender", category:"Transform", title:"Rotate", combo:["R"], desc:"Rotate object" },
  { os:"blender", category:"Transform", title:"Scale", combo:["S"], desc:"Scale object" },
  { os:"blender", category:"Transform", title:"Constraint X", combo:["X"], desc:"Lock axis to X" },
  { os:"blender", category:"Transform", title:"Constraint Y", combo:["Y"], desc:"Lock axis to Y" },
  { os:"blender", category:"Transform", title:"Constraint Z", combo:["Z"], desc:"Lock axis to Z" },
  { os:"blender", category:"Transform", title:"Proportional Editing Toggle", combo:["O"], desc:"Enable soft selection" },
  { os:"blender", category:"Transform", title:"Reset Transform", combo:["Alt","G/R/S"], desc:"Clear location/rotation/scale" },

  /* ========== OBJECT MODE ========== */
  { os:"blender", category:"Object", title:"Duplicate", combo:["Shift","D"], desc:"Duplicate object" },
  { os:"blender", category:"Object", title:"Delete Object", combo:["X"], desc:"Delete selection" },
  { os:"blender", category:"Object", title:"Apply Transform", combo:["Ctrl","A"], desc:"Apply transforms" },
  { os:"blender", category:"Object", title:"Join Objects", combo:["Ctrl","J"], desc:"Merge objects" },
  { os:"blender", category:"Object", title:"Separate Selection", combo:["P"], desc:"Split mesh into new object" },
  { os:"blender", category:"Object", title:"Shade Smooth", combo:["Right-Click","Shade Smooth"], desc:"Smooth shading" },
  { os:"blender", category:"Object", title:"Parent", combo:["Ctrl","P"], desc:"Parent objects" },
  { os:"blender", category:"Object", title:"Unparent", combo:["Alt","P"], desc:"Remove parent" },

  /* ========== EDIT / MODELING ========== */
  { os:"blender", category:"Mesh", title:"Edit Mode", combo:["Tab"], desc:"Toggle edit mode" },
  { os:"blender", category:"Mesh", title:"Extrude", combo:["E"], desc:"Extrude geometry" },
  { os:"blender", category:"Mesh", title:"Inset", combo:["I"], desc:"Inset faces" },
  { os:"blender", category:"Mesh", title:"Bevel", combo:["Ctrl","B"], desc:"Bevel edges/verts" },
  { os:"blender", category:"Mesh", title:"Loop Cut", combo:["Ctrl","R"], desc:"Add edge loop" },
  { os:"blender", category:"Mesh", title:"Knife Tool", combo:["K"], desc:"Cut manual edges" },
  { os:"blender", category:"Mesh", title:"Merge Vertices", combo:["M"], desc:"Merge selection" },
  { os:"blender", category:"Mesh", title:"Separate Mesh", combo:["P"], desc:"Split selection" },
  { os:"blender", category:"Mesh", title:"Subdivision Smooth", combo:["Ctrl","1/2/3"], desc:"Subdivision levels" },

  /* ========== SCULPT MODE ========== */
  { os:"blender", category:"Sculpt", title:"Sculpt Mode", combo:["Ctrl","Tab"], desc:"Switch to sculpt menu" },
  { os:"blender", category:"Sculpt", title:"Increase Brush Size", combo:["F"], desc:"Resize brush" },
  { os:"blender", category:"Sculpt", title:"Increase Strength", combo:["Shift","F"], desc:"Adjust brush strength" },
  { os:"blender", category:"Sculpt", title:"Mask Brush", combo:["M"], desc:"Mask sculpt area" },
  { os:"blender", category:"Sculpt", title:"Invert Mask", combo:["Ctrl","I"], desc:"Invert mask selection" },

  /* ========== UV EDITING ========== */
  { os:"blender", category:"UV", title:"Mark Seam", combo:["Ctrl","E","Mark Seam"], desc:"Define UV seam" },
  { os:"blender", category:"UV", title:"Unwrap", combo:["U"], desc:"UV unwrap" },

  /* ========== ANIMATION ========== */
  { os:"blender", category:"Animation", title:"Set Keyframe", combo:["I"], desc:"Insert keyframe" },
  { os:"blender", category:"Animation", title:"Delete Keyframe", combo:["Alt","I"], desc:"Remove keyframe" },
  { os:"blender", category:"Animation", title:"Play/Pause", combo:["Space"], desc:"Start animation" },
  { os:"blender", category:"Animation", title:"Timeline Start", combo:["Shift","Left Arrow"], desc:"Jump to start" },
  { os:"blender", category:"Animation", title:"Timeline End", combo:["Shift","Right Arrow"], desc:"Jump to end" },

  /* ========== RENDERING ========== */
  { os:"blender", category:"Render", title:"Render Image", combo:["F12"], desc:"Render still" },
  { os:"blender", category:"Render", title:"Render Animation", combo:["Ctrl","F12"], desc:"Render sequence" },
  { os:"blender", category:"Render", title:"Cancel Render", combo:["Esc"], desc:"Stop render" },

  /* ========== MISC ========== */
  { os:"blender", category:"General", title:"Search Tools", combo:["F3"], desc:"Search menu" },
  { os:"blender", category:"General", title:"Preferences", combo:["Ctrl","Alt","U"], desc:"Open preferences" },
  { os:"blender", category:"General", title:"Fullscreen Area", combo:["Ctrl","Space"], desc:"Max workspace" },
  { os:"blender", category:"General", title:"Quick Save", combo:["Ctrl","S"], desc:"Save file" },
];
