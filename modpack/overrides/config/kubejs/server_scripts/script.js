// priority: 0


let blacklistedItems = ['divinerpg:bedrock_axe', 'divinerpg:bedrock_pickaxe', 'divinerpg:bedrock_shovel', 'divinerpg:bedrock_maul', 'divinerpg:bedrock_helmet', 'divinerpg:bedrock_chestplate', 'divinerpg:bedrock_leggings', 'divinerpg:bedrock_boots', 'divinerpg:halite_shockaxe']

let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}

let blackListCheck = (itemToTest, e, player) => {
  if (!itemToTest) return
  let id = itemToTest.id
  if (!blacklistedItems.includes(`${id}`)) return

  if (player && player.isPlayer()) {
    player.tell(['Item ', Component.yellow(id), ' has been ', Component.red('removed'), '.\nReason: ', Component.red('BlackListed'), ' Item'])
  }

  itemToTest.count = 0
  e.cancel()
}

ItemEvents.pickedUp(e => blackListCheck(e.item, e, e.player))
ItemEvents.dropped(e => blackListCheck(e.item, e, e.player))
ItemEvents.crafted(e => blackListCheck(e.item, e, e.player))
ItemEvents.smelted(e => blackListCheck(e.item, e, e.player))
ItemEvents.entityInteracted(e => blackListCheck(e.item, e, e.player))
BlockEvents.placed(e => blackListCheck(e.item, e, e.player))
BlockEvents.leftClicked(e => blackListCheck(e.item, e, e.player))
BlockEvents.rightClicked(e => blackListCheck(e.item, e, e.player))

ServerEvents.recipes(e => {
  removeRecipeByID(e, blacklistedItems)
  removeRecipeByOutput(e, blacklistedItems)
})


