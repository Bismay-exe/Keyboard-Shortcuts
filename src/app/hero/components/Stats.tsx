interface Props {
  count: number;
  os: string;
}

export default function Stats({ count, os }: Props) {
  return (
    <div className="flex gap-4 my-3">
      <div className="bg-white/5 px-3 py-2 rounded-lg text-center">
        <span className="text-xl font-bold">{count}</span>
        <small className="block text-xs text-gray-400">shortcuts</small>
      </div>
      <div className="bg-white/5 px-3 py-2 rounded-lg text-center">
        <span className="text-xl font-bold">{os === "all" ? "All" : os}</span>
        <small className="block text-xs text-gray-400">OS</small>
      </div>
    </div>
  );
}
