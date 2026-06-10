export default function WhatIBuild() {
  return (
    <section className="pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Featured Systems
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Building products that solve
          real-world problems.
        </h2>

        <div className="grid gap-8 mt-16">

          {/* RepoMind */}
          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              RepoMind
            </h3>

            <p className="mt-4 text-zinc-400 max-w-3xl">
              AI-powered repository intelligence platform that transforms
              GitHub repositories into searchable knowledge bases using
              semantic search, dependency graph analysis, architecture
              generation, and AI-assisted code review.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="border border-zinc-700 rounded-full px-3 py-1">
                FastAPI
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                React
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Qdrant
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                AI Code Review
              </span>
            </div>
          </div>

          {/* FieldLens */}
          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              FieldLens
            </h3>

            <p className="mt-4 text-zinc-400 max-w-3xl">
              Telecom field verification platform combining workflow
              automation, WhatsApp-based technician operations,
              computer vision validation, and backend orchestration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="border border-zinc-700 rounded-full px-3 py-1">
                FastAPI
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                MongoDB
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Twilio
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Computer Vision
              </span>
            </div>
          </div>

          {/* NetScope */}
          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              NetScope Pro
            </h3>

            <p className="mt-4 text-zinc-400 max-w-3xl">
              Real-time network monitoring and traffic analysis platform
              featuring packet inspection, protocol analytics,
              automated threat detection, and traffic visibility.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Python
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Scapy
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Packet Analysis
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Threat Detection
              </span>
            </div>
          </div>

          {/* Missing Fit */}
          <div className="border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              The Missing Fit
            </h3>

            <p className="mt-4 text-zinc-400 max-w-3xl">
              Full-stack rental platform built using Django, Supabase,
              and Cloudinary, focused on inventory management,
              rental workflows, and production-ready operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Django
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Supabase
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Cloudinary
              </span>

              <span className="border border-zinc-700 rounded-full px-3 py-1">
                Full Stack
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}