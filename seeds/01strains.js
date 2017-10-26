exports.seed = (knex, Promise) => {
  return knex("strains")
    .del()
    .then(() => {
      return knex("strains").insert([
        {
          id: 1,
          image: "../images/airborneg13.jpg",
          name: "Airborne G-13",
          class: "Hybrid, Indica Dominant",
          effects: "Relax & Relief",
          description:
            "With a hint of sage & lemon, this relaxing strain tastes just like it smells. The rumored government strain “G-13” crossed with Northern Lights #2 create an enjoyable indica dominant strain."
        },
        {
          id: 2,
          image: "../images/aliendawg.jpg",
          name: "Alien Dawg",
          class: "Indica",
          effects: "Amplify & Relax",
          description:
            "Alien Dawg is a cross between Chem Dawg and Alien OG. With a sour and pungent odor that stings the nostril. Alien Dawg has a light, bitter taste and presents wonderful mind and body effects. Origin: Chemdawg x Alien OG"
        },
        {
          id: 3,
          image: "../images/bluedream.jpg",
          name: "Blue Dream",
          class: "Sativa",
          effects: "Amplify & Relief",
          description:
            "Good Chemistry’s award-winning strain, Blue Dream, is a sweet, smooth, smoke and may promote creativity. Known for it’s strength and length of high, Blue Dream’s lineage may balance full body relief with cerebral stimulation. Origin: DJ Short Blueberry x Haze"
        }
      ])
    })
}
