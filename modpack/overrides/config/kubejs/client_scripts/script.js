// priority: 0
let blacklistedItems = ['divinerpg:bedrock_axe', 'divinerpg:bedrock_pickaxe', 'divinerpg:bedrock_shovel', 'divinerpg:bedrock_maul', 'divinerpg:bedrock_helmet', 'divinerpg:bedrock_chestplate', 'divinerpg:bedrock_leggings', 'divinerpg:bedrock_boots', 'divinerpg:bedrock_leggings', 'divinerpg:bedrock_boots', 'divinerpg:halite_shockaxe']

JEIEvents.hideItems(e => {
    e.hide(blacklistedItems)
  })