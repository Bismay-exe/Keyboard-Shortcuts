import { Shortcut } from "./types";

export const MAC_SHORTCUTS: Shortcut[] = [
  /* ================= TEXT ================= */
  {os:'macos',category:'Text',title:'Copy',combo:['⌘','C'],desc:'Copy selected text'},
  {os:'macos',category:'Text',title:'Paste',combo:['⌘','V'],desc:'Paste clipboard contents'},
  {os:'macos',category:'Text',title:'Cut',combo:['⌘','X'],desc:'Cut selected text'},
  {os:'macos',category:'Text',title:'Select All',combo:['⌘','A'],desc:'Select all content'},
  {os:'macos',category:'Text',title:'Undo',combo:['⌘','Z'],desc:'Undo last action'},
  {os:'macos',category:'Text',title:'Redo',combo:['⌘','Shift','Z'],desc:'Redo last undone action'},
  {os:'macos',category:'Text',title:'Bold',combo:['⌘','B'],desc:'Bold text'},
  {os:'macos',category:'Text',title:'Italic',combo:['⌘','I'],desc:'Italic text'},
  {os:'macos',category:'Text',title:'Underline',combo:['⌘','U'],desc:'Underline text'},
  {os:'macos',category:'Text',title:'Strikethrough',combo:['⌘','Shift','X'],desc:'Strikethrough text'},
  {os:'macos',category:'Text',title:'Superscript',combo:['⌘','Control','+'],desc:'Superscript'},
  {os:'macos',category:'Text',title:'Subscript',combo:['⌘','Control','-'],desc:'Subscript'},
  {os:'macos',category:'Text',title:'Insert hyperlink',combo:['⌘','K'],desc:'Insert link'},

  /* ================= WINDOW ================= */
  {os:'macos',category:'Window',title:'Switch apps',combo:['⌘','Tab'],desc:'Cycle apps'},
  {os:'macos',category:'Window',title:'Switch apps backwards',combo:['⌘','Shift','Tab'],desc:'Cycle apps backward'},
  {os:'macos',category:'Window',title:'Minimize window',combo:['⌘','M'],desc:'Minimize current window'},
  {os:'macos',category:'Window',title:'Close window',combo:['⌘','W'],desc:'Close current window/tab'},
  {os:'macos',category:'Window',title:'Close all windows',combo:['⌘','Option','W'],desc:'Close all windows'},
  {os:'macos',category:'Window',title:'Full screen',combo:['⌘','Ctrl','F'],desc:'Enter full screen'},
  {os:'macos',category:'Window',title:'Hide current app',combo:['⌘','H'],desc:'Hide current app'},
  {os:'macos',category:'Window',title:'Hide others',combo:['⌘','Option','H'],desc:'Hide other apps'},

  /* ================= SYSTEM ================= */
  {os:'macos',category:'System',title:'Force Quit',combo:['⌘','Option','Esc'],desc:'Force quit applications'},
  {os:'macos',category:'System',title:'Spotlight Search',combo:['⌘','Space'],desc:'Open Spotlight'},
  {os:'macos',category:'System',title:'Lock screen',combo:['Control','⌘','Q'],desc:'Lock the Mac'},
  {os:'macos',category:'System',title:'Preferences / Settings',combo:['⌘',','],desc:'Open app settings'},

  /* ================= SCREENSHOTS ================= */
  {os:'macos',category:'Screenshots',title:'Full screenshot',combo:['⌘','Shift','3'],desc:'Capture full screen'},
  {os:'macos',category:'Screenshots',title:'Select area screenshot',combo:['⌘','Shift','4'],desc:'Select region'},
  {os:'macos',category:'Screenshots',title:'Screenshot window',combo:['⌘','Shift','4','Space'],desc:'Capture window'},

  /* ================= VIRTUAL DESKTOP ================= */
  {os:'macos',category:'Virtual Desktop',title:'Mission Control',combo:['Control','Up'],desc:'Open Mission Control'},
  {os:'macos',category:'Virtual Desktop',title:'Switch desktop',combo:['Control','Left/Right'],desc:'Switch between desktops'},

  /* ================= BROWSER ================= */
  {os:'macos',category:'Browser',title:'New tab',combo:['⌘','T'],desc:'Open new tab'},
  {os:'macos',category:'Browser',title:'Close tab',combo:['⌘','W'],desc:'Close current tab'},
  {os:'macos',category:'Browser',title:'Reopen closed tab',combo:['⌘','Shift','T'],desc:'Reopen last closed tab'},
  {os:'macos',category:'Browser',title:'Find page',combo:['⌘','F'],desc:'Search on page'},
  {os:'macos',category:'Browser',title:'Bookmark page',combo:['⌘','D'],desc:'Bookmark page'},
  {os:'macos',category:'Browser',title:'Toggle bookmarks bar',combo:['⌘','Shift','B'],desc:'Show/hide bar'},
  {os:'macos',category:'Browser',title:'Next tab',combo:['⌘','Option','Right'],desc:'Next browser tab'},
  {os:'macos',category:'Browser',title:'Previous tab',combo:['⌘','Option','Left'],desc:'Previous browser tab'},

  /* ================= PRODUCTIVITY ================= */
  {os:'macos',category:'Productivity',title:'Save',combo:['⌘','S'],desc:'Save document'},
  {os:'macos',category:'Productivity',title:'Print',combo:['⌘','P'],desc:'Print document'},
  {os:'macos',category:'Productivity',title:'New file',combo:['⌘','N'],desc:'New file or document'},

  /* ================= MULTIMEDIA ================= */
  {os:'macos',category:'Multimedia',title:'Mute',combo:['F10'],desc:'Mute volume'},
  {os:'macos',category:'Multimedia',title:'Volume down',combo:['F11'],desc:'Decrease volume'},
  {os:'macos',category:'Multimedia',title:'Volume up',combo:['F12'],desc:'Increase volume'},

  /* ================= EDITOR ================= */
  {os:'macos',category:'Editor',title:'Command palette',combo:['⌘','Shift','P'],desc:'Open command palette'},
  {os:'macos',category:'Editor',title:'Open file',combo:['⌘','P'],desc:'Quick open file'},
  {os:'macos',category:'Editor',title:'Multi-cursor add',combo:['⌘','Click'],desc:'Add cursor'},
  {os:'macos',category:'Editor',title:'Select all matches',combo:['⌘','Shift','L'],desc:'Select all matches'},
  {os:'macos',category:'Editor',title:'Move line up',combo:['Option','Up'],desc:'Move line up'},
  {os:'macos',category:'Editor',title:'Move line down',combo:['Option','Down'],desc:'Move line down'},
  {os:'macos',category:'Editor',title:'Search everywhere',combo:['Shift','Shift'],desc:'Global search'},
  {os:'macos',category:'Editor',title:'Recent files',combo:['⌘','E'],desc:'Open recent files'}
];
