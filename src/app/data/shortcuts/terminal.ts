import { Shortcut } from "./types";

export const TERMINAL_SHORTCUTS: Shortcut[] = [
  /* ============== NAVIGATION / CURSOR ============== */
  { os:"terminal", category:"Navigation", title:"Move cursor start", combo:["Ctrl","A"], desc:"Jump to beginning of line" },
  { os:"terminal", category:"Navigation", title:"Move cursor end", combo:["Ctrl","E"], desc:"Jump to end of line" },
  { os:"terminal", category:"Navigation", title:"Previous word", combo:["Alt","B"], desc:"Move cursor one word back" },
  { os:"terminal", category:"Navigation", title:"Next word", combo:["Alt","F"], desc:"Move cursor one word forward" },
  { os:"terminal", category:"Navigation", title:"Clear screen (keep buffer)", combo:["Ctrl","L"], desc:"Redraw terminal without losing history" },

  /* ============== EDITING ============== */
  { os:"terminal", category:"Editing", title:"Delete from cursor to start", combo:["Ctrl","U"], desc:"Kill text before cursor" },
  { os:"terminal", category:"Editing", title:"Delete from cursor to end", combo:["Ctrl","K"], desc:"Kill text after cursor" },
  { os:"terminal", category:"Editing", title:"Delete previous word", combo:["Ctrl","W"], desc:"Remove word before cursor" },
  { os:"terminal", category:"Editing", title:"Delete character", combo:["Ctrl","D"], desc:"Delete under cursor (EOF if empty line)" },
  { os:"terminal", category:"Editing", title:"Yank (paste)", combo:["Ctrl","Y"], desc:"Paste last killed text" },
  { os:"terminal", category:"Editing", title:"Transpose characters", combo:["Ctrl","T"], desc:"Swap last two characters" },

  /* ============== HISTORY ============== */
  { os:"terminal", category:"History", title:"Search history", combo:["Ctrl","R"], desc:"Reverse incremental search" },
  { os:"terminal", category:"History", title:"Next match", combo:["Ctrl","S"], desc:"Forward search history" },
  { os:"terminal", category:"History", title:"Cancel search / exit", combo:["Ctrl","G"], desc:"Exit history search mode" },
  { os:"terminal", category:"History", title:"Previous command", combo:["Up"], desc:"Cycle history backward" },
  { os:"terminal", category:"History", title:"Next command", combo:["Down"], desc:"Cycle history forward" },

  /* ============== CONTROL / PROCESS ============== */
  { os:"terminal", category:"Process", title:"Interrupt/Terminate", combo:["Ctrl","C"], desc:"Send SIGINT to stop command" },
  { os:"terminal", category:"Process", title:"Suspend process", combo:["Ctrl","Z"], desc:"Send process to background" },
  { os:"terminal", category:"Process", title:"Resume background job", combo:["fg"], desc:"Bring job to foreground" },
  { os:"terminal", category:"Process", title:"Run job in background", combo:["bg"], desc:"Resume job in background" },
  { os:"terminal", category:"Process", title:"List jobs", combo:["jobs"], desc:"Show suspended/background tasks" },
  { os:"terminal", category:"Process", title:"Kill process", combo:["kill","PID"], desc:"Terminate process by ID" },

  /* ============== MISC POWER KEYS ============== */
  { os:"terminal", category:"Utility", title:"Open editor", combo:["Ctrl","X","Ctrl","E"], desc:"Open full editor for long commands" },
  { os:"terminal", category:"Utility", title:"Clear buffer completely", combo:["reset"], desc:"Hard reset terminal buffer" },
  { os:"terminal", category:"Utility", title:"Exit shell", combo:["Ctrl","D"], desc:"Logout / exit shell" },
  { os:"terminal", category:"Utility", title:"Cancel command", combo:["Ctrl","C"], desc:"Abort current command" },

  /* ============== TMUX (POWER USERS) ============== */
  { os:"terminal", category:"Tmux", title:"Prefix Key", combo:["Ctrl","B"], desc:"Activate tmux command mode" },
  { os:"terminal", category:"Tmux", title:"New window", combo:["Ctrl","B","C"], desc:"Create tmux window" },
  { os:"terminal", category:"Tmux", title:"Next window", combo:["Ctrl","B","N"], desc:"Go to next window" },
  { os:"terminal", category:"Tmux", title:"Previous window", combo:["Ctrl","B","P"], desc:"Go to previous window" },
  { os:"terminal", category:"Tmux", title:"Split pane vertical", combo:["Ctrl","B","%"], desc:"Vertical split" },
  { os:"terminal", category:"Tmux", title:"Split pane horizontal", combo:["Ctrl","B","\""], desc:"Horizontal split" },
  { os:"terminal", category:"Tmux", title:"Close pane", combo:["Ctrl","B","X"], desc:"Kill pane" },
];
