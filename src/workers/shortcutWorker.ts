// src/workers/shortcutWorker.ts
export type Command = {
  label: string;
  action?: () => void;
};

interface WorkerState {
  history: string[];
}

const state: WorkerState = {
  history: [],
};

function scoreHistory(label: string) {
  let s = 0;
  for (const h of state.history) {
    if (label.toLowerCase().includes(h.toLowerCase())) s += 2;
    if (h.toLowerCase().includes(label.toLowerCase())) s += 1;
  }
  return s;
}

// @ts-ignore isolated worker scope
self.onmessage = (e: MessageEvent) => {
  const { type, payload } = e.data;

  if (type === "record") {
    state.history.push(payload);
    if (state.history.length > 50) state.history.shift(); // trim oldest
    return;
  }

  if (type === "suggest") {
    const { query, commands } = payload as { query: string; commands: Command[] };

    const q = query.toLowerCase();
    const results = commands
      .map((c) => {
        let s = scoreHistory(c.label);

        // fuzzy bonus
        for (let char of q) {
          if (c.label.toLowerCase().includes(char)) s += 1;
        }

        return { ...c, _score: s };
      })
      .sort((a, b) => b._score - a._score);

    // @ts-ignore worker context
    self.postMessage(results);
  }
};
