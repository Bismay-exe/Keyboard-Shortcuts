import { Shortcut } from "./types";

export const GIT_SHORTCUTS: Shortcut[] = [
  /* ===== BASICS ===== */
  { os:"git", category:"Basics", title:"Status", combo:["git","status"], desc:"Show repo state" },
  { os:"git", category:"Basics", title:"Diff staged vs working", combo:["git","diff"], desc:"Show changes" },
  { os:"git", category:"Basics", title:"Stage all", combo:["git","add","."], desc:"Stage everything" },
  { os:"git", category:"Basics", title:"Commit", combo:["git","commit","-m"], desc:"Commit with message" },

  /* ===== BRANCHING ===== */
  { os:"git", category:"Branch", title:"List branches", combo:["git","branch"], desc:"See branches" },
  { os:"git", category:"Branch", title:"Switch branch", combo:["git","switch","<name>"], desc:"Change branches" },
  { os:"git", category:"Branch", title:"New branch", combo:["git","checkout","-b"], desc:"Create new branch" },

  /* ===== STASH / RECOVERY ===== */
  { os:"git", category:"Stash", title:"Stash changes", combo:["git","stash"], desc:"Save working state" },
  { os:"git", category:"Stash", title:"Apply stash", combo:["git","stash","apply"], desc:"Reapply stash" },
  { os:"git", category:"Stash", title:"List stashes", combo:["git","stash","list"], desc:"Show stash stack" },

  /* ===== REWRITING / FIXING ===== */
  { os:"git", category:"Fixup", title:"Amend last commit", combo:["git","commit","--amend"], desc:"Fix last commit" },
  { os:"git", category:"Fixup", title:"Unstage file", combo:["git","restore","--staged","<file>"], desc:"Move file back to working" },

  /* ===== REBASE / CLEAN HISTORY ===== */
  { os:"git", category:"Rebase", title:"Interactive rebase", combo:["git","rebase","-i","HEAD~N"], desc:"Edit commit history" },
  { os:"git", category:"Rebase", title:"Continue rebase", combo:["git","rebase","--continue"], desc:"Continue rebase" },
  { os:"git", category:"Rebase", title:"Abort rebase", combo:["git","rebase","--abort"], desc:"Cancel rebase" },

  /* ===== REMOTE / PUSH ===== */
  { os:"git", category:"Remote", title:"Check remotes", combo:["git","remote","-v"], desc:"See remotes" },
  { os:"git", category:"Remote", title:"Push", combo:["git","push"], desc:"Upload changes" },
  { os:"git", category:"Remote", title:"Pull", combo:["git","pull"], desc:"Download changes" },
  { os:"git", category:"Remote", title:"Pull rebase", combo:["git","pull","--rebase"], desc:"Rebase on pull" },
];
