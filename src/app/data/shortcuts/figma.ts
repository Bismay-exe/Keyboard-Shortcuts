import { Shortcut } from "./types";

export const FIGMA_SHORTCUTS: Shortcut[] = [
  /* ============== GENERAL ============== */
  {os:'figma',category:'General',title:'Quick Actions',combo:['Ctrl','/'],desc:'Search commands'},
  {os:'figma',category:'General',title:'Show/Hide UI',combo:['Ctrl','.'],desc:'Toggle UI panels'},
  {os:'figma',category:'General',title:'Copy Properties',combo:['Alt','Ctrl','C'],desc:'Copy style properties'},
  {os:'figma',category:'General',title:'Paste Properties',combo:['Alt','Ctrl','V'],desc:'Paste style properties'},

  /* ============== TOOLS ============== */
  {os:'figma',category:'Tools',title:'Move Tool',combo:['V'],desc:'Select/move objects'},
  {os:'figma',category:'Tools',title:'Frame Tool',combo:['F'],desc:'Create frame'},
  {os:'figma',category:'Tools',title:'Text Tool',combo:['T'],desc:'Create text'},
  {os:'figma',category:'Tools',title:'Pen Tool',combo:['P'],desc:'Draw vector paths'},
  {os:'figma',category:'Tools',title:'Rectangle Tool',combo:['R'],desc:'Create rectangle'},
  {os:'figma',category:'Tools',title:'Ellipse Tool',combo:['O'],desc:'Create circle/ellipse'},
  {os:'figma',category:'Tools',title:'Line Tool',combo:['L'],desc:'Draw a line'},
  {os:'figma',category:'Tools',title:'Hand Tool',combo:['Space'],desc:'Pan canvas'},

  /* ============== EDITING ============== */
  {os:'figma',category:'Editing',title:'Duplicate',combo:['Ctrl','D'],desc:'Duplicate object'},
  {os:'figma',category:'Editing',title:'Group Selection',combo:['Ctrl','G'],desc:'Group objects'},
  {os:'figma',category:'Editing',title:'Ungroup',combo:['Ctrl','Shift','G'],desc:'Ungroup objects'},
  {os:'figma',category:'Editing',title:'Bring Forward',combo:['Ctrl',']'],desc:'Bring layer forward'},
  {os:'figma',category:'Editing',title:'Send Backward',combo:['Ctrl','['],desc:'Send layer backward'},
  {os:'figma',category:'Editing',title:'Bring to Front',combo:['Ctrl','Shift',']'],desc:'Bring to top'},
  {os:'figma',category:'Editing',title:'Send to Back',combo:['Ctrl','Shift','['],desc:'Send to back'},
  {os:'figma',category:'Editing',title:'Scale Tool',combo:['K'],desc:'Scale objects'},
  {os:'figma',category:'Editing',title:'Outline Stroke',combo:['Shift','Ctrl','O'],desc:'Convert stroke to path'},
  {os:'figma',category:'Editing',title:'Flatten Selection',combo:['Ctrl','E'],desc:'Flatten layers'},

  /* ============== TEXT ============== */
  {os:'figma',category:'Text',title:'Bold',combo:['Ctrl','B'],desc:'Bold text'},
  {os:'figma',category:'Text',title:'Italic',combo:['Ctrl','I'],desc:'Italic text'},
  {os:'figma',category:'Text',title:'Underline',combo:['Ctrl','U'],desc:'Underline text'},
  {os:'figma',category:'Text',title:'Increase Font Size',combo:['Ctrl','Shift','>'],desc:'Increase font size'},
  {os:'figma',category:'Text',title:'Decrease Font Size',combo:['Ctrl','Shift','<'],desc:'Decrease font size'},

  /* ============== ALIGN / DISTRIBUTE ============== */
  {os:'figma',category:'Align',title:'Align Left',combo:['Alt','A'],desc:'Align objects to left'},
  {os:'figma',category:'Align',title:'Align Right',combo:['Alt','D'],desc:'Align objects to right'},
  {os:'figma',category:'Align',title:'Align Top',combo:['Alt','W'],desc:'Align objects to top'},
  {os:'figma',category:'Align',title:'Align Bottom',combo:['Alt','S'],desc:'Align objects to bottom'},
  {os:'figma',category:'Align',title:'Align Horizontal Center',combo:['Alt','H'],desc:'Center horizontally'},
  {os:'figma',category:'Align',title:'Align Vertical Center',combo:['Alt','V'],desc:'Center vertically'},

  /* ============== VIEW / ZOOM ============== */
  {os:'figma',category:'View',title:'Zoom In',combo:['Ctrl','+'],desc:'Zoom canvas in'},
  {os:'figma',category:'View',title:'Zoom Out',combo:['Ctrl','-'],desc:'Zoom canvas out'},
  {os:'figma',category:'View',title:'Zoom to Fit',combo:['Shift','1'],desc:'Fit selection to view'},
  {os:'figma',category:'View',title:'Actual Size',combo:['1'],desc:'View at 100%'},

  /* ============== LAYOUT / CONSTRAINTS ============== */
  {os:'figma',category:'Layout',title:'Toggle Layout Grid',combo:['Ctrl','Shift','4'],desc:'Show/hide layout grid'},
  {os:'figma',category:'Layout',title:'Set Constraints',combo:['Shift','A'],desc:'Auto layout wrap'},
  {os:'figma',category:'Layout',title:'Add Auto Layout',combo:['Shift','A'],desc:'Apply auto-layout'},
  {os:'figma',category:'Layout',title:'Detach Instance',combo:['Ctrl','Alt','B'],desc:'Convert instance to layer'}
];
