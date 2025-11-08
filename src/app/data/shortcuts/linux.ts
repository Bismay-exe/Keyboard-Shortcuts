import { Shortcut } from "./types";

export const LINUX_SHORTCUTS: Shortcut[] = [
  /* ================= TEXT ================= */
  {os:'linux',category:'Text',title:'Copy',combo:['Ctrl','C'],desc:'Copy selected text (terminal: Ctrl+Shift+C)'},
  {os:'linux',category:'Text',title:'Paste',combo:['Ctrl','V'],desc:'Paste text (terminal: Ctrl+Shift+V)'},
  {os:'linux',category:'Text',title:'Cut',combo:['Ctrl','X'],desc:'Cut selected text'},
  {os:'linux',category:'Text',title:'Select All',combo:['Ctrl','A'],desc:'Select everything'},
  {os:'linux',category:'Text',title:'Undo',combo:['Ctrl','Z'],desc:'Undo last action'},
  {os:'linux',category:'Text',title:'Redo',combo:['Ctrl','Shift','Z'],desc:'Redo last undone action'},
  {os:'linux',category:'Text',title:'Find',combo:['Ctrl','F'],desc:'Find text'},
  {os:'linux',category:'Text',title:'Replace',combo:['Ctrl','H'],desc:'Find and replace'},
  {os:'linux',category:'Text',title:'Bold',combo:['Ctrl','B'],desc:'Bold text'},
  {os:'linux',category:'Text',title:'Italic',combo:['Ctrl','I'],desc:'Italic text'},
  {os:'linux',category:'Text',title:'Underline',combo:['Ctrl','U'],desc:'Underline text'},

  /* ================= WINDOW ================= */
  {os:'linux',category:'Window',title:'Switch windows',combo:['Alt','Tab'],desc:'Cycle running windows'},
  {os:'linux',category:'Window',title:'Minimize window',combo:['Ctrl','Super','Down'],desc:'Minimize active window'},
  {os:'linux',category:'Window',title:'Maximize window',combo:['Ctrl','Super','Up'],desc:'Maximize active window'},
  {os:'linux',category:'Window',title:'Snap left',combo:['Super','Left'],desc:'Snap window left'},
  {os:'linux',category:'Window',title:'Snap right',combo:['Super','Right'],desc:'Snap window right'},
  {os:'linux',category:'Window',title:'Close window',combo:['Alt','F4'],desc:'Close active window'},

  /* ================= SYSTEM ================= */
  {os:'linux',category:'System',title:'Open Terminal',combo:['Ctrl','Alt','T'],desc:'Open terminal'},
  {os:'linux',category:'System',title:'Run Command',combo:['Alt','F2'],desc:'Run command dialog'},
  {os:'linux',category:'System',title:'Lock Screen',combo:['Ctrl','Super','L'],desc:'Lock screen'},

  /* ================= SCREENSHOTS ================= */
  {os:'linux',category:'Screenshots',title:'Full screenshot',combo:['PrtSc'],desc:'Capture entire screen'},
  {os:'linux',category:'Screenshots',title:'Select area',combo:['Shift','PrtSc'],desc:'Select region to screenshot'},
  {os:'linux',category:'Screenshots',title:'Active window',combo:['Alt','PrtSc'],desc:'Capture active window'},

  /* ================= TERMINAL ================= */
  {os:'linux',category:'Terminal',title:'Cancel command',combo:['Ctrl','C'],desc:'Stop running command'},
  {os:'linux',category:'Terminal',title:'Suspend process',combo:['Ctrl','Z'],desc:'Background running process'},
  {os:'linux',category:'Terminal',title:'Delete line left',combo:['Ctrl','U'],desc:'Delete to beginning of line'},
  {os:'linux',category:'Terminal',title:'Delete line right',combo:['Ctrl','K'],desc:'Delete to end of line'},
  {os:'linux',category:'Terminal',title:'Reverse search history',combo:['Ctrl','R'],desc:'Search commands history'},

  /* ================= VIRTUAL DESKTOP ================= */
  {os:'linux',category:'Virtual Desktop',title:'Open Workspace View',combo:['Super','S'],desc:'Show workspaces'},
  {os:'linux',category:'Virtual Desktop',title:'Switch workspace',combo:['Ctrl','Alt','Left/Right'],desc:'Change virtual desktop'},
  {os:'linux',category:'Virtual Desktop',title:'Move window workspace',combo:['Ctrl','Alt','Shift','Left/Right'],desc:'Send window to another workspace'},

  /* ================= FILE MANAGER ================= */
  {os:'linux',category:'File Manager',title:'Split view',combo:['F3'],desc:'Split file manager view'},
  {os:'linux',category:'File Manager',title:'Refresh',combo:['F5'],desc:'Refresh window'},
  {os:'linux',category:'File Manager',title:'Rename',combo:['F2'],desc:'Rename selected item'},
  {os:'linux',category:'File Manager',title:'Delete',combo:['Delete'],desc:'Delete selected file'},
  {os:'linux',category:'File Manager',title:'Properties',combo:['Alt','Enter'],desc:'Open file properties'},

  /* ================= BROWSER ================= */
  {os:'linux',category:'Browser',title:'New tab',combo:['Ctrl','T'],desc:'Open new tab'},
  {os:'linux',category:'Browser',title:'Close tab',combo:['Ctrl','W'],desc:'Close current tab'},
  {os:'linux',category:'Browser',title:'Reopen closed tab',combo:['Ctrl','Shift','T'],desc:'Reopen last tab'},
  {os:'linux',category:'Browser',title:'Find on page',combo:['Ctrl','F'],desc:'Search webpage'},
  {os:'linux',category:'Browser',title:'Refresh',combo:['Ctrl','R'],desc:'Reload page'},
  {os:'linux',category:'Browser',title:'Hard reload',combo:['Ctrl','Shift','R'],desc:'Force reload (no cache)'},
  {os:'linux',category:'Browser',title:'Next tab',combo:['Ctrl','Tab'],desc:'Switch to next tab'},
  {os:'linux',category:'Browser',title:'Previous tab',combo:['Ctrl','Shift','Tab'],desc:'Back one tab'},
  {os:'linux',category:'Browser',title:'Zoom in',combo:['Ctrl','+'],desc:'Zoom in'},
  {os:'linux',category:'Browser',title:'Zoom out',combo:['Ctrl','-'],desc:'Zoom out'},
  {os:'linux',category:'Browser',title:'Reset zoom',combo:['Ctrl','0'],desc:'Reset zoom'},

  /* ================= PRODUCTIVITY ================= */
  {os:'linux',category:'Productivity',title:'Save',combo:['Ctrl','S'],desc:'Save file'},
  {os:'linux',category:'Productivity',title:'Print',combo:['Ctrl','P'],desc:'Print document'},
  {os:'linux',category:'Productivity',title:'New document',combo:['Ctrl','N'],desc:'New file'},

  /* ================= MULTIMEDIA ================= */
  {os:'linux',category:'Multimedia',title:'Mute audio',combo:['Ctrl','Alt','M'],desc:'Mute sound'},
  {os:'linux',category:'Multimedia',title:'Volume up',combo:['Ctrl','Alt','Up'],desc:'Raise volume'},
  {os:'linux',category:'Multimedia',title:'Volume down',combo:['Ctrl','Alt','Down'],desc:'Lower volume'},
];
