import { Shortcut } from "./types";

export const TERMINAL_ADVANCED_SHORTCUTS: Shortcut[] = [
  /* ===== ZSH / SHELL POWER ===== */
  { os:"terminal", category:"Zsh", title:"Autocomplete", combo:["Tab"], desc:"Smart complete" },
  { os:"terminal", category:"Zsh", title:"Expand alias", combo:["Ctrl","Alt","E"], desc:"Expand alias without executing" },

  /* ===== FZF ===== */
  { os:"terminal", category:"fzf", title:"Search files", combo:["Ctrl","T"], desc:"Fuzzy search files" },
  { os:"terminal", category:"fzf", title:"Search command history", combo:["Ctrl","R"], desc:"Fuzzy search history" },

  /* ===== NVIM ===== */
  { os:"terminal", category:"nvim", title:"Normal mode", combo:["Esc"], desc:"Exit insert mode" },
  { os:"terminal", category:"nvim", title:"Save", combo:[":w"], desc:"Write file" },
  { os:"terminal", category:"nvim", title:"Quit", combo:[":q"], desc:"Quit" },
  { os:"terminal", category:"nvim", title:"Save & quit", combo:[":wq"], desc:"Write + quit" },
  { os:"terminal", category:"nvim", title:"Search", combo:["/"], desc:"Search forward" },
  { os:"terminal", category:"nvim", title:"Visual mode", combo:["V"], desc:"Line select" },

  /* ===== TMUX ===== */
  { os:"terminal", category:"tmux", title:"Prefix", combo:["Ctrl","B"], desc:"Enter tmux command prefix" },
  { os:"terminal", category:"tmux", title:"New pane horizontal", combo:["Ctrl","B","\""], desc:"Split horizontally" },
  { os:"terminal", category:"tmux", title:"New pane vertical", combo:["Ctrl","B","%"], desc:"Split vertically" },
  { os:"terminal", category:"tmux", title:"Next pane", combo:["Ctrl","B","Arrow"], desc:"Move between panes" },
  { os:"terminal", category:"tmux", title:"Kill pane", combo:["Ctrl","B","X"], desc:"Close pane" },
  { os:"terminal", category:"tmux", title:"Detach", combo:["Ctrl","B","D"], desc:"Detach session" },
];
