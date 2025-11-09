import type { Shortcut } from "./types";

import { WINDOWS_SHORTCUTS } from "./windows";
import { MAC_SHORTCUTS } from "./mac";
import { LINUX_SHORTCUTS } from "./linux";

import { VSCODE_SHORTCUTS } from "./vscode";
import { CHROME_SHORTCUTS } from "./chrome";
import { FIGMA_SHORTCUTS } from "./figma";
import { GIT_SHORTCUTS } from "./git";
import { PHOTOSHOP_SHORTCUTS } from "./photoshop";
import { PREMIERE_SHORTCUTS } from "./premiere";
import { AFTEREFFECTS_SHORTCUTS } from "./aftereffects";
import { BLENDER_SHORTCUTS } from "./blender";
import { TERMINAL_SHORTCUTS } from "./terminal";
import { TERMINAL_ADVANCED_SHORTCUTS } from "./terminal_advanced";

export const SHORTCUTS: Shortcut[] = [
  ...WINDOWS_SHORTCUTS,
  ...MAC_SHORTCUTS,
  ...LINUX_SHORTCUTS,
  ...VSCODE_SHORTCUTS,
  ...CHROME_SHORTCUTS,
  ...FIGMA_SHORTCUTS,
  ...GIT_SHORTCUTS,
  ...PHOTOSHOP_SHORTCUTS,
  ...PREMIERE_SHORTCUTS,
  ...AFTEREFFECTS_SHORTCUTS,
  ...BLENDER_SHORTCUTS,
  ...TERMINAL_SHORTCUTS,
  ...TERMINAL_ADVANCED_SHORTCUTS,
];
