export default function SystemMap() {
  return (
    <div className="relative h-[500px] w-full flex items-center justify-center">

      <div className="absolute text-xl font-semibold">
        Shivam
      </div>

      <div className="absolute top-10 left-20 border border-zinc-700 rounded-xl px-4 py-2">
        RepoMind
      </div>

      <div className="absolute top-20 right-10 border border-zinc-700 rounded-xl px-4 py-2">
        FieldLens
      </div>

      <div className="absolute bottom-24 left-10 border border-zinc-700 rounded-xl px-4 py-2">
        NetScope
      </div>

      <div className="absolute bottom-16 right-20 border border-zinc-700 rounded-xl px-4 py-2">
        Resume Forge
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-zinc-700 rounded-xl px-4 py-2">
        Missing Fit
      </div>

    </div>
  );
}