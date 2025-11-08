import { Shortcut } from "./types";

export const BLENDER_SHORTCUTS: Shortcut[] = [
  /* ===== VIEWPORT ===== */
  { os:"blender", category:"View", title:"Orbit", combo:["Middle-Click"], desc:"Rotate around scene" },
  { os:"blender", category:"View", title:"Pan", combo:["Shift","Middle-Click"], desc:"Pan view" },
  { os:"blender", category:"View", title:"Zoom", combo:["Ctrl","Middle-Click"], desc:"Zoom in/out" },
  { os:"blender", category:"View", title:"Focus object", combo:["Numpad ."], desc:"Frame selected object" },

  /* ===== SELECT ===== */
  { os:"blender", category:"Select", title:"Select", combo:["Left-Click"], desc:"Select element" },
  { os:"blender", category:"Select", title:"Box select", combo:["B"], desc:"Draw selection box" },
  { os:"blender", category:"Select", title:"Invert selection", combo:["Ctrl","I"], desc:"Invert selection" },

  /* ===== TRANSFORM ===== */
  { os:"blender", category:"Transform", title:"Move", combo:["G"], desc:"Grab / move" },
  { os:"blender", category:"Transform", title:"Rotate", combo:["R"], desc:"Rotate" },
  { os:"blender", category:"Transform", title:"Scale", combo:["S"], desc:"Scale" },
  { os:"blender", category:"Transform", title:"Constraint X", combo:["X"], desc:"Lock transform to X" },
  { os:"blender", category:"Transform", title:"Constraint Y", combo:["Y"], desc:"Lock transform to Y" },
  { os:"blender", category:"Transform", title:"Constraint Z", combo:["Z"], desc:"Lock transform to Z" },
  { os:"blender", category:"Transform", title:"Cancel transform", combo:["Right-Click / Esc"], desc:"Cancel transform" },

  /* ===== MESH / EDITING ===== */
  { os:"blender", category:"Mesh", title:"Edit mode", combo:["Tab"], desc:"Toggle edit/object mode" },
  { os:"blender", category:"Mesh", title:"Extrude", combo:["E"], desc:"Extrude selection" },
  { os:"blender", category:"Mesh", title:"Loop cut", combo:["Ctrl","R"], desc:"Add loop cut" },
  { os:"blender", category:"Mesh", title:"Merge", combo:["M"], desc:"Merge vertices" },
  { os:"blender", category:"Mesh", title:"Subdivide", combo:["Right-Click","Subdivide"], desc:"Subdivide faces" },

  /* ===== OBJECT ===== */
  { os:"blender", category:"Object", title:"Duplicate", combo:["Shift","D"], desc:"Duplicate selected" },
  { os:"blender", category:"Object", title:"Delete", combo:["X"], desc:"Delete selected" },
  { os:"blender", category:"Object", title:"Apply transform", combo:["Ctrl","A"], desc:"Freeze transform values" },
];
