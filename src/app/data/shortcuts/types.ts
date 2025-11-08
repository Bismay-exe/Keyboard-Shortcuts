export type ShortcutOS =
  | "windows"
  | "macos"
  | "linux"
  | "browser"
  | "figma"
  | "photoshop"
  | "vscode"
  | "terminal"
  | "terminal-advanced"
  | "git"
  | "blender";

export interface Shortcut {
  os: ShortcutOS;
  category: string;
  title: string;
  combo: string[];
  desc: string;
}
