new TypeIt('#subtitle', {
    speed: 50
  })
  .pause(2500)
  .type('Bienvenue sur mon portfolio')
  .pause(300)
  .options({speed: 200})
  .delete(17)
  .options({speed: 50})
  .pause(500)
  .type('dans mon univers.')
  .go();