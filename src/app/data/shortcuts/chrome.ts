import { Shortcut } from "./types";

export const CHROME_SHORTCUTS: Shortcut[] = [
  /* ========== TABS ========== */
  { os:"browser", category:"Tabs", title:"New tab", combo:["Ctrl","T"], desc:"Open new tab" },
  { os:"browser", category:"Tabs", title:"Reopen closed tab", combo:["Ctrl","Shift","T"], desc:"Restore last closed tab" },
  { os:"browser", category:"Tabs", title:"Close tab", combo:["Ctrl","W"], desc:"Close current tab" },
  { os:"browser", category:"Tabs", title:"Close window", combo:["Ctrl","Shift","W"], desc:"Close entire window" },
  { os:"browser", category:"Tabs", title:"Next tab", combo:["Ctrl","Tab"], desc:"Switch to next tab" },
  { os:"browser", category:"Tabs", title:"Previous tab", combo:["Ctrl","Shift","Tab"], desc:"Switch to previous tab" },
  { os:"browser", category:"Tabs", title:"Open link in new tab", combo:["Ctrl","Enter"], desc:"Open URL in new tab" },
  { os:"browser", category:"Tabs", title:"Switch to specific tab", combo:["Ctrl","1–8"], desc:"Jump to tab index" },
  { os:"browser", category:"Tabs", title:"Last tab", combo:["Ctrl","9"], desc:"Go to last tab" },
  { os:"browser", category:"Tabs", title:"New window", combo:["Ctrl","N"], desc:"Open new window" },
  { os:"browser", category:"Tabs", title:"New incognito window", combo:["Ctrl","Shift","N"], desc:"Incognito mode" },

  /* ========== NAVIGATION ========== */
  { os:"browser", category:"Navigation", title:"Back", combo:["Alt","Left"], desc:"Back navigation" },
  { os:"browser", category:"Navigation", title:"Forward", combo:["Alt","Right"], desc:"Forward navigation" },
  { os:"browser", category:"Navigation", title:"Reload", combo:["Ctrl","R"], desc:"Reload page" },
  { os:"browser", category:"Navigation", title:"Hard reload ignoring cache", combo:["Ctrl","Shift","R"], desc:"Force reload without cache" },
  { os:"browser", category:"Navigation", title:"Home", combo:["Alt","Home"], desc:"Go to homepage" },
  { os:"browser", category:"Navigation", title:"Stop loading", combo:["Esc"], desc:"Stop page load" },

  /* ========== SEARCH / ADDRESS BAR ========== */
  { os:"browser", category:"Search", title:"Focus address bar", combo:["Ctrl","L"], desc:"Jump to address bar" },
  { os:"browser", category:"Search", title:"Open search in new tab", combo:["Alt","Enter"], desc:"Search typed text in new tab" },
  { os:"browser", category:"Search", title:"Find on page", combo:["Ctrl","F"], desc:"Search within page" },
  { os:"browser", category:"Search", title:"Next match", combo:["Enter"], desc:"Next find result" },
  { os:"browser", category:"Search", title:"Previous match", combo:["Shift","Enter"], desc:"Previous find result" },

  /* ========== UI / PANELS ========== */
  { os:"browser", category:"UI", title:"Downloads", combo:["Ctrl","J"], desc:"Open downloads" },
  { os:"browser", category:"UI", title:"History", combo:["Ctrl","H"], desc:"Open history" },
  { os:"browser", category:"UI", title:"Bookmarks bar toggle", combo:["Ctrl","Shift","B"], desc:"Show/hide bookmarks bar" },
  { os:"browser", category:"UI", title:"Bookmark page", combo:["Ctrl","D"], desc:"Bookmark current tab" },
  { os:"browser", category:"UI", title:"Extensions page", combo:["Ctrl","Shift","E"], desc:"Open extensions (Chrome)" },

  /* ========== ZOOM / VIEW ========== */
  { os:"browser", category:"Zoom", title:"Zoom in", combo:["Ctrl","+"], desc:"Increase zoom level" },
  { os:"browser", category:"Zoom", title:"Zoom out", combo:["Ctrl","-"], desc:"Decrease zoom level" },
  { os:"browser", category:"Zoom", title:"Reset zoom", combo:["Ctrl","0"], desc:"Reset zoom" },
  { os:"browser", category:"Zoom", title:"Fullscreen", combo:["F11"], desc:"Toggle fullscreen" },

  /* ========== DEVTOOLS / POWER ========== */
  { os:"browser", category:"DevTools", title:"Open DevTools", combo:["Ctrl","Shift","I"], desc:"Open developer tools" },
  { os:"browser", category:"DevTools", title:"Console", combo:["Ctrl","Shift","J"], desc:"Open JS console" },
  { os:"browser", category:"DevTools", title:"Inspect element", combo:["Ctrl","Shift","C"], desc:"Enable inspect mode" },
  { os:"browser", category:"DevTools", title:"View source", combo:["Ctrl","U"], desc:"Open page source" },
];
