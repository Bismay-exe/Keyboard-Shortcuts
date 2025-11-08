import { Shortcut } from "./types";

export const VSCODE_SHORTCUTS: Shortcut[] = [
  /* ================= BASIC ================= */
  {os:'vscode',category:'Basic',title:'Command Palette',combo:['Ctrl','Shift','P'],desc:'Show command palette'},
  {os:'vscode',category:'Basic',title:'Open File',combo:['Ctrl','P'],desc:'Quick open file'},
  {os:'vscode',category:'Basic',title:'New File',combo:['Ctrl','N'],desc:'Create new file'},
  {os:'vscode',category:'Basic',title:'Save',combo:['Ctrl','S'],desc:'Save file'},
  {os:'vscode',category:'Basic',title:'Save All',combo:['Ctrl','K','S'],desc:'Save all files'},
  {os:'vscode',category:'Basic',title:'Close File',combo:['Ctrl','W'],desc:'Close active editor'},
  {os:'vscode',category:'Basic',title:'Reopen Closed File',combo:['Ctrl','Shift','T'],desc:'Reopen last closed editor'},
  
  /* ================= NAVIGATION ================= */
  {os:'vscode',category:'Navigation',title:'Search Files',combo:['Ctrl','P'],desc:'Go to file'},
  {os:'vscode',category:'Navigation',title:'Search in Project',combo:['Ctrl','Shift','F'],desc:'Search across files'},
  {os:'vscode',category:'Navigation',title:'Go to Line',combo:['Ctrl','G'],desc:'Jump to line'},
  {os:'vscode',category:'Navigation',title:'Go to Symbol',combo:['Ctrl','Shift','O'],desc:'Navigate to symbol in file'},
  {os:'vscode',category:'Navigation',title:'Peek Definition',combo:['Alt','F12'],desc:'Inline view definition'},
  {os:'vscode',category:'Navigation',title:'Go to Definition',combo:['F12'],desc:'Jump to definition'},
  {os:'vscode',category:'Navigation',title:'Go Back',combo:['Alt','Left'],desc:'Back in cursor history'},
  {os:'vscode',category:'Navigation',title:'Go Forward',combo:['Alt','Right'],desc:'Forward in cursor history'},

  /* ================= EDITING ================= */
  {os:'vscode',category:'Editing',title:'Cut Line',combo:['Ctrl','X'],desc:'Cut entire line if nothing selected'},
  {os:'vscode',category:'Editing',title:'Copy Line',combo:['Ctrl','C'],desc:'Copy entire line if nothing selected'},
  {os:'vscode',category:'Editing',title:'Move Line Up',combo:['Alt','Up'],desc:'Move line up'},
  {os:'vscode',category:'Editing',title:'Move Line Down',combo:['Alt','Down'],desc:'Move line down'},
  {os:'vscode',category:'Editing',title:'Duplicate Line',combo:['Shift','Alt','Down'],desc:'Duplicate line'},
  {os:'vscode',category:'Editing',title:'Delete Line',combo:['Ctrl','Shift','K'],desc:'Delete line'},
  {os:'vscode',category:'Editing',title:'Select All Occurrences',combo:['Ctrl','Shift','L'],desc:'Select all matching text'},
  {os:'vscode',category:'Editing',title:'Add Cursor',combo:['Ctrl','Click'],desc:'Add cursor on click'},
  {os:'vscode',category:'Editing',title:'Add Cursor Below',combo:['Ctrl','Alt','Down'],desc:'Add cursor below'},
  {os:'vscode',category:'Editing',title:'Add Cursor Above',combo:['Ctrl','Alt','Up'],desc:'Add cursor above'},
  {os:'vscode',category:'Editing',title:'Multi-cursor Select Word',combo:['Ctrl','D'],desc:'Select next matching word'},

  /* ================= CODE ACTIONS ================= */
  {os:'vscode',category:'Code',title:'Format Document',combo:['Shift','Alt','F'],desc:'Auto-format file'},
  {os:'vscode',category:'Code',title:'Quick Fix',combo:['Ctrl','.',],desc:'Show code actions'},
  {os:'vscode',category:'Code',title:'Comment Line',combo:['Ctrl','/'],desc:'Toggle line comment'},
  {os:'vscode',category:'Code',title:'Block Comment',combo:['Shift','Alt','A'],desc:'Toggle block comment'},

  /* ================= TERMINAL ================= */
  {os:'vscode',category:'Terminal',title:'Toggle Terminal',combo:['Ctrl','`'],desc:'Open/close terminal'},
  {os:'vscode',category:'Terminal',title:'New Terminal',combo:['Ctrl','Shift','`'],desc:'Create new terminal'},
  {os:'vscode',category:'Terminal',title:'Kill Terminal',combo:['Ctrl','Shift','X'],desc:'Kill active terminal'},

  /* ================= TABS ================= */
  {os:'vscode',category:'Tabs',title:'Next Tab',combo:['Ctrl','Tab'],desc:'Switch to next tab'},
  {os:'vscode',category:'Tabs',title:'Previous Tab',combo:['Ctrl','Shift','Tab'],desc:'Switch to previous tab'},
  {os:'vscode',category:'Tabs',title:'Split Editor',combo:['Ctrl','\\'],desc:'Split editor horizontally'},

  /* ================= DEBUGGING ================= */
  {os:'vscode',category:'Debug',title:'Start Debugging',combo:['F5'],desc:'Run debugger'},
  {os:'vscode',category:'Debug',title:'Step Over',combo:['F10'],desc:'Step over code'},
  {os:'vscode',category:'Debug',title:'Step Into',combo:['F11'],desc:'Step into function'},
  {os:'vscode',category:'Debug',title:'Step Out',combo:['Shift','F11'],desc:'Step out of function'},
];
