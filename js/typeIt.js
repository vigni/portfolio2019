new TypeIt('#subtitle', {
    speed: 50
  })
  .type('Bienvenue sur mon portfolio')
  .pause(500)
  .options({speed: 200})
  .delete(17)
  .options({speed: 50})
  .pause(500)
  .type('dans mon univers.')
  .go();