import SystemMap from "./SystemMap";

export default function Hero() {
    return (
        <section className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-8 w-full">

                <div className="max-w-4xl">

                    {/* LEFT SIDE */}
                    <div>
                        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm">
                            AI Systems Engineer
                        </p>

                        <h1 className="mt-6 text-7xl md:text-8xl font-bold">
                            Shivam
                            <br />
                            Rathod
                        </h1>

                        <p className="mt-8 text-xl text-zinc-400 max-w-xl leading-relaxed">
                            Building intelligent systems,
                            automation platforms,
                            and developer tools that solve
                            real-world workflows.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <button className="px-6 py-3 rounded-xl bg-white text-black font-medium">
                                Explore Systems
                            </button>

                            <button className="px-6 py-3 rounded-xl border border-zinc-700">
                                Resume
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8">

                            <div>
                                <p className="text-3xl font-bold">5+</p>
                                <p className="text-zinc-500">Freelance Projects</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold">14★</p>
                                <p className="text-zinc-500">GitHub Stars</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold">650+</p>
                                <p className="text-zinc-500">DSA Problems</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold">2026</p>
                                <p className="text-zinc-500">Building AI Systems</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}