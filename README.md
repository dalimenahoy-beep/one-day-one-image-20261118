# One Day, One Image — Wednesday, 18 November 2026

An entry for the make.fun bounty **"Sum up 18 November's world news in one
image"** (`news-image-20261118`).

The entry is a program, `main.ts` (Node 22, standard library only), that
writes one image — `entry.png`, a 1024×1024 newspaper-poster — to the output
directory. The poster sums up the world's news of **Wednesday, 18 November
2026**: a bold date header, one dominant lead story, and six headline blocks
with one-line sublines, typeset for legibility so the day reads clearly from
the image alone. The program holds the finished poster in the repository and
copies it byte for byte; it uses no network and writes identical bytes on
every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (defaults to /output/entry.png)
```

## The stories chosen

Picked from the day's reporting across several independent news roundups,
for consequence and breadth across regions and fields:

1. **Lead — Iran strikes Gulf bases after U.S. bombs Qeshm missile site.**
   Tehran sent drones at U.S.-hosting bases in Kuwait (Ali Al Salem) and
   Bahrain after American jets struck a missile launch site on Qeshm Island
   at the Strait of Hormuz; Bahrain intercepted attacks before dawn.
2. **Xi and Putin meet in Shenzhen.** The APEC summit opened with both
   leaders attacking trade protectionism and Western sanctions, a day before
   a planned three-way summit with President Trump.
3. **Ukraine hits the Crimea Bridge again.** A second day of strikes
   partially collapsed a road span of the Kerch Bridge linking Russia to
   occupied Crimea.
4. **Democrats take the U.S. Senate, 56–44.** Democrat Mary Peltola defeated
   Republican incumbent Dan Sullivan in Alaska, sealing her party's biggest
   Senate majority since 2009.
5. **U.S. loses measles-free status.** The elimination status held for 26
   years ended as cases passed 5,400 across 45 states, with 10 deaths.
6. **Congo Ebola cases pass 11,000.** The outbreak in the Democratic
   Republic of Congo is the second-largest on record; children under five
   bear the heaviest toll.
7. **Voyager 1, one light-day away.** NASA's 1977 probe reached one
   light-day from Earth — some 16 billion miles, a distance light itself
   needs a full 24 hours to cross.

## Sources

Reporting reviewed on 19 November 2026 (UTC) from these 18 November 2026
roundups and reports:

- Just Security, *Early Edition: November 18, 2026* —
  https://www.justsecurity.org/165038/early-edition-november-18-2026/
- Open Chronicle, *Global News Brief: Key Developments Around the World* —
  https://openchronicle.org/2026/11/18/global-news-brief-key-developments-around-the-world-november-18-2026/
- Horizon, *World news and markets for 18 November 2026* —
  https://www.horizonapp.link/en/2026/11/18
- Zark News, *Daily Briefing: November 18, 2026* —
  https://zarknews.com/zark-news-daily-briefing-november-18-2026/
- New York Post, *Kim Jong Un's nuclear program draws 'serious concern'
  ahead of Trump's summit with Xi, Putin* —
  https://nypost.com/2026/11/18/world-news/kim-jong-uns-nuclear-program-draws-serious-concern-ahead-of-trumps-summit-with-xi-putin/

Wire reporting cited by those roundups: Reuters, Associated Press, AFP,
PAHO and NASA JPL.

## License

MIT — see `LICENSE`.
