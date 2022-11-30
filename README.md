# **WulfCraftOrigins**
*The official private repo of WulfCraft Origins.*

## **Main Goal**
The goal is to develop an optimized Minecraft application that is able to run at player expectations during game play hours. 

The server will automatically run during a query or ping sent by someone trying to join the fake server. This will activate the instance to run our Minecraft program with auto scaling configuration among the following EC2 configuration:
  
- Low End | c5a.large | 2C/4GB | $58.21
- Medium End | m5zn.large | 2C/8GB | $122.60
- High End | m5zn.xlarge | 4C/16GB | $243.12

All specs above are assuming the instances run at 100% monthly utilization with a 20GB SSD. We plan to run the server during active hours, which we predict will be 6 hours a day on average.

When the server is no longer in use or does not detect an active player, it will wait 30 minutes before shutting down and creating a backup. This process will then repeat the query/ping CloudWatch process.

## *More on this later...*

## **Mods** 
<details>
<summary> Click to view complete list of mods. </summary>
<br>

### **Abnormals Delight**
https://www.curseforge.com/minecraft/mc-mods/abnormals-delight

### **Additional Banners**
https://www.curseforge.com/minecraft/mc-mods/additional-banners

### **Additional Lanterns**
https://www.curseforge.com/minecraft/mc-mods/additional-lanterns

### **AI Improvements**
https://www.curseforge.com/minecraft/mc-mods/ai-improvements

### **Alex's Mobs**
https://www.curseforge.com/minecraft/mc-mods/alexs-mobs

### **AmbientSounds 5**
https://www.curseforge.com/minecraft/mc-mods/ambientsounds

### **AppleSkin**
https://www.curseforge.com/minecraft/mc-mods/appleskin

### **Aquaculture 2**
https://www.curseforge.com/minecraft/mc-mods/aquaculture

### **Architectury API**
https://www.curseforge.com/minecraft/mc-mods/architectury-api

### **Artifacts**
https://www.curseforge.com/minecraft/mc-mods/artifacts

### **AttributeFix**
https://www.curseforge.com/minecraft/mc-mods/attributefix

### **AutoRegLib**
https://www.curseforge.com/minecraft/mc-mods/autoreglib

### **Bag of Yurting**
https://www.curseforge.com/minecraft/mc-mods/bag-of-yurting

### **Balm**
https://www.curseforge.com/minecraft/mc-mods/balm

### **Bed Benefits**
https://www.curseforge.com/minecraft/mc-mods/bed-benefits

### **Better Advancements**
https://www.curseforge.com/minecraft/mc-mods/better-advancements

### **Better Animals Plus**
https://www.curseforge.com/minecraft/mc-mods/betteranimalsplus

### **Better Animations Collection**
https://www.curseforge.com/minecraft/mc-mods/better-animations-collection

### **Better Compatibility Checker**
https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker

### **BetterF3**
https://www.curseforge.com/minecraft/mc-mods/betterf3

### **Blue Skies**
https://www.curseforge.com/minecraft/mc-mods/blue-skies

### **Blueprint**
https://www.curseforge.com/minecraft/mc-mods/blueprint

### **Bookshelf**
https://www.curseforge.com/minecraft/mc-mods/bookshelf

### **Builders Crafts & Additions**
https://www.curseforge.com/minecraft/mc-mods/buildersaddition

### **Building Gadgets**
https://www.curseforge.com/minecraft/mc-mods/building-gadgets

### **Canary**
https://www.curseforge.com/minecraft/mc-mods/canary

### **Chat Heads**
https://www.curseforge.com/minecraft/mc-mods/chat-heads

### **ChocoCraft**
https://www.curseforge.com/minecraft/mc-mods/chococraft

### **Chunky**
https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge

### **Citadel**
https://www.curseforge.com/minecraft/mc-mods/citadel

### **Client Tweaks**
https://www.curseforge.com/minecraft/mc-mods/client-tweaks

### **Cloth Config API**
https://www.curseforge.com/minecraft/mc-mods/cloth-config

### **Clumps**
https://www.curseforge.com/minecraft/mc-mods/clumps

### **Code Chicken Lib**
https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8

### **Collective**
https://www.curseforge.com/minecraft/mc-mods/collective

### **Coloured Tooltips**
https://www.curseforge.com/minecraft/mc-mods/coloured-tooltips

### **Configured**
https://www.curseforge.com/minecraft/mc-mods/configured

### **Controlling**
https://www.curseforge.com/minecraft/mc-mods/controlling

### **Cooking for Blockheads**
https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads

### **CoroUtil**
https://www.curseforge.com/minecraft/mc-mods/coroutil

### **Crafting Tweaks**
https://www.curseforge.com/minecraft/mc-mods/crafting-tweaks

### **CraftTweaker**
https://www.curseforge.com/minecraft/mc-mods/crafttweaker

### **Crash Utilities**
https://www.curseforge.com/minecraft/mc-mods/crash-utilities

### **CreativeCore**
https://www.curseforge.com/minecraft/mc-mods/creativecore

### **Creatures and Beasts**
https://www.curseforge.com/minecraft/mc-mods/creatures-and-beasts

### **Creeper Overhaul**
https://www.curseforge.com/minecraft/mc-mods/creeper-overhaul

### **Croptopia**
https://www.curseforge.com/minecraft/mc-mods/croptopia

### **Cucumber Library**
https://www.curseforge.com/minecraft/mc-mods/cucumber

### **Curios API**
https://www.curseforge.com/minecraft/mc-mods/curios

### **Cyclic**
https://www.curseforge.com/minecraft/mc-mods/cyclic

### **Damage Tilt**
https://www.curseforge.com/minecraft/mc-mods/damage-tilt

### **Dark Paintings**
https://www.curseforge.com/minecraft/mc-mods/dark-paintings

### **Dark Utilities**
https://www.curseforge.com/minecraft/mc-mods/dark-utilities

### **Decorative Blocks**
https://www.curseforge.com/minecraft/mc-mods/decorative-blocks/

### **Default Options**
https://www.curseforge.com/minecraft/mc-mods/default-options

### **DeLogger**
https://www.curseforge.com/minecraft/mc-mods/delogger

### **Ding**
https://www.curseforge.com/minecraft/mc-mods/ding

### **DivineRPG**
https://www.curseforge.com/minecraft/mc-mods/official-divinerpg

### **Domum Ornamentum**
https://www.curseforge.com/minecraft/mc-mods/domum-ornamentum

### **Dungeon Crawl**
https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl

### **Dungeons Plus**
https://www.curseforge.com/minecraft/mc-mods/dungeons-plus

### **Dynamic View**
https://www.curseforge.com/minecraft/mc-mods/dynamic-view

### **Earth Mobs**
https://www.curseforge.com/minecraft/mc-mods/earth-mobs

### **Easy Magic**
https://www.curseforge.com/minecraft/mc-mods/easy-magic

### **Emojiful**
https://www.curseforge.com/minecraft/mc-mods/emojiful

### **Enchantment Descriptions**
https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions

### **Ender Crop**
https://www.curseforge.com/minecraft/mc-mods/ender-crop

### **Ender Storage**
https://www.curseforge.com/minecraft/mc-mods/ender-storage-1-8

### **EnderTanks**
https://www.curseforge.com/minecraft/mc-mods/endertanks

### **End Remastered**
https://www.curseforge.com/minecraft/mc-mods/endremastered

### **Enhanced Celestials**
https://www.curseforge.com/minecraft/mc-mods/enhanced-celestials

### **EnhancedVisuals**
https://www.curseforge.com/minecraft/mc-mods/enhancedvisuals

### **Entity Culling**
https://www.curseforge.com/minecraft/mc-mods/entityculling

### **Every Compat**
https://www.curseforge.com/minecraft/mc-mods/every-compat

### **Extreme sound muffler**
https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler

### **FancyMenu**
https://www.curseforge.com/minecraft/mc-mods/fancymenu-forge

### **Farmer's Delight**
https://www.curseforge.com/minecraft/mc-mods/farmers-delight

### **Farming for Blockheads**
https://www.curseforge.com/minecraft/mc-mods/farming-for-blockheads

### **Farsight**
https://www.curseforge.com/minecraft/mc-mods/farsight

### **Fast Leaf Decay**
https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay

### **Fastload**
https://www.curseforge.com/minecraft/mc-mods/fastload

### **FastSuite**
https://www.curseforge.com/minecraft/mc-mods/fastsuite

### **FastWorkbench**
https://www.curseforge.com/minecraft/mc-mods/fastworkbench

### **ForgeEndertech**
https://www.curseforge.com/minecraft/mc-mods/forgeendertech

### **FPS Reducer**
https://www.curseforge.com/minecraft/mc-mods/fps-reducer

### **Game Menu Mod Option**
https://www.curseforge.com/minecraft/mc-mods/gamemenumodoption

### **GeckoLib**
https://www.curseforge.com/minecraft/mc-mods/geckolib

### **Glassential**
https://www.curseforge.com/minecraft/mc-mods/glassential

### **Globin Traders**
https://www.curseforge.com/minecraft/mc-mods/goblin-traders

### **GraveStone Mod**
https://www.curseforge.com/minecraft/mc-mods/gravestone-mod

### **Guard Villagers**
https://www.curseforge.com/minecraft/mc-mods/guard-villagers

### **Hunter Illager**
https://www.curseforge.com/minecraft/mc-mods/hunterillager

### **Iceberg**
https://www.curseforge.com/minecraft/mc-mods/iceberg

### **Illagers Wear Armor**
https://www.curseforge.com/minecraft/mc-mods/illagers-wear-armor

### **Infernal Expansion**
https://www.curseforge.com/minecraft/mc-mods/infernal-expansion

### **Infernal Mobs**
https://www.curseforge.com/minecraft/mc-mods/atomicstrykers-infernal-mobs

### **InsaneLib**
https://www.curseforge.com/minecraft/mc-mods/insanelib

### **Inventory HUD+**
https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge

### **Iron Chests**
https://www.curseforge.com/minecraft/mc-mods/iron-chests

### **Iron Furnaces**
https://www.curseforge.com/minecraft/mc-mods/iron-furnaces

### **It's the little things**
https://www.curseforge.com/minecraft/mc-mods/its-the-little-things

### **It Shall Not Tick**
https://www.curseforge.com/minecraft/mc-mods/it-shall-not-tick

### **Jade**
https://www.curseforge.com/minecraft/mc-mods/jade

### **JourneyMap**
https://www.curseforge.com/minecraft/mc-mods/journeymap

### **JourneyMap Integration**
https://www.curseforge.com/minecraft/mc-mods/journeymap-integration

### **Just Enough Effect Descriptions**
https://www.curseforge.com/minecraft/mc-mods/just-enough-effect-descriptions-jeed

### **Just Enough Items**
https://www.curseforge.com/minecraft/mc-mods/jei

### **Just Enough Professions**
https://www.curseforge.com/minecraft/mc-mods/just-enough-professions-jep

### **Just Enough Resources**
https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer

### **Just Mob Heads**
https://www.curseforge.com/minecraft/mc-mods/just-mob-heads

### **Just Player Heads**
https://www.curseforge.com/minecraft/mc-mods/just-player-heads

### **Just Zoom**
https://www.curseforge.com/minecraft/mc-mods/just-zoom-forge

### **Kiwi**
https://www.curseforge.com/minecraft/mc-mods/kiwi

### **Konkrete**
https://www.curseforge.com/minecraft/mc-mods/konkrete

### **KubeJS**
https://www.curseforge.com/minecraft/mc-mods/kubejs

### **Large Ore Deposits**
https://www.curseforge.com/minecraft/mc-mods/large-ore-deposits

### **Login Protection**
https://www.curseforge.com/minecraft/mc-mods/login-protection

### **Macaw's Bridges**
https://www.curseforge.com/minecraft/mc-mods/macaws-bridges

### **Macaw's Doors**
https://www.curseforge.com/minecraft/mc-mods/macaws-doors

### **Macaw's Fences and Walls**
https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls

### **Macaw's Furniture**
https://www.curseforge.com/minecraft/mc-mods/macaws-furniture

### **Macaw's Lights**
https://www.curseforge.com/minecraft/mc-mods/macaws-lights-and-lamps

### **Macaw's Roofs**
https://www.curseforge.com/minecraft/mc-mods/macaws-roofs

### **Macaw's Trapdoors**
https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors

### **Moog's Voyager Structures**
https://www.curseforge.com/minecraft/mc-mods/moogs-voyager-structures

### **Moonlight Lib**
https://www.curseforge.com/minecraft/mc-mods/selene

### **More Babies**
https://www.curseforge.com/minecraft/mc-mods/more-babies

### **More Buckets**
https://www.curseforge.com/minecraft/mc-mods/more-buckets

### **More Dragon Eggs**
https://www.curseforge.com/minecraft/mc-mods/more-dragon-eggs

### **More Villagers**
https://www.curseforge.com/minecraft/mc-mods/more-villagers

### **Mouse Tweaks**
https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks

### **MrCrayfish's Furniture Mod**
https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod

### **My Server Is Compatible**
https://www.curseforge.com/minecraft/mc-mods/my-server-is-compatible

### **Mystical Agriculture**
https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture

### **Naturalist**
https://www.curseforge.com/minecraft/mc-mods/naturalist

### **Nature's Compass**
https://www.curseforge.com/minecraft/mc-mods/natures-compass

### **Neko's Enchanted Books**
https://www.curseforge.com/minecraft/mc-mods/nekos-enchanted-books

### **NetherPortalFix**
https://www.curseforge.com/minecraft/mc-mods/netherportalfix

### **No Chat Reports**
https://www.curseforge.com/minecraft/mc-mods/no-chat-reports

### **Oh The Biomes You'll Go**
https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go

### **OpenBlocks Elevator**
https://www.curseforge.com/minecraft/mc-mods/openblocks-elevator

### **Paintings ++**
https://www.curseforge.com/minecraft/mc-mods/paintings

### **Patchouli**
https://www.curseforge.com/minecraft/mc-mods/patchouli

### **Paxi**
https://www.curseforge.com/minecraft/mc-mods/paxi

### **Pick Up Notifier**
https://www.curseforge.com/minecraft/mc-mods/pick-up-notifier

### **Pig Pen Cipher**
https://www.curseforge.com/minecraft/mc-mods/pig-pen-cipher

### **Placebo**
https://www.curseforge.com/minecraft/mc-mods/placebo

### **Platforms**
https://www.curseforge.com/minecraft/mc-mods/platforms

### **Pluto**
https://www.curseforge.com/minecraft/mc-mods/pluto

### **Polymorph**
https://www.curseforge.com/minecraft/mc-mods/polymorph

### **Progressive Bosses**
https://www.curseforge.com/minecraft/mc-mods/progressive-bosses

### **Project MMO**
https://www.curseforge.com/minecraft/mc-mods/project-mmo

### **Puzzles Lib**
https://www.curseforge.com/minecraft/mc-mods/puzzles-lib

### **Quark**
https://www.curseforge.com/minecraft/mc-mods/quark

### **Quark Oddities**
https://www.curseforge.com/minecraft/mc-mods/quark-oddities

### **Reliquary Reincarnations**
https://www.curseforge.com/minecraft/mc-mods/reliquary-v1-3

### **Repurposed Structures**
https://www.curseforge.com/minecraft/mc-mods/repurposed-structures

### **Rhino**
https://www.curseforge.com/minecraft/mc-mods/rhino

### **Rubidium**
https://www.curseforge.com/minecraft/mc-mods/rubidium

### **Runelic**
https://www.curseforge.com/minecraft/mc-mods/runelic

### **Saturn**
https://www.curseforge.com/minecraft/mc-mods/saturn

### **Savage & Ravage**
https://www.curseforge.com/minecraft/mc-mods/savage-and-ravage

### **Scaling Health**
https://www.curseforge.com/minecraft/mc-mods/scaling-health

### **Scuba Gear**
https://www.curseforge.com/minecraft/mc-mods/scuba-gear

### **Serene Seasons**
https://www.curseforge.com/minecraft/mc-mods/serene-seasons

### **ShetiPhianCore**
https://www.curseforge.com/minecraft/mc-mods/shetiphiancore

### **Shutup Experimental Settings!**
https://www.curseforge.com/minecraft/mc-mods/shutup-experimental-settings

### **Silent Lib**
https://www.curseforge.com/minecraft/mc-mods/silent-lib

### **Simple Discord Rich Presence**
https://www.curseforge.com/minecraft/mc-mods/simple-discord-rich-presence

### **Simple Voice Chat**
https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat

### **Smooth Boot**
https://www.curseforge.com/minecraft/mc-mods/smooth-boot-reloaded

### **Smooth Chunks**
https://www.curseforge.com/minecraft/mc-mods/smooth-chunks

### **Snow! Real Magic!**
https://www.curseforge.com/minecraft/mc-mods/snow-real-magic

### **Spice of Life: Carrot Edition**
https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition

### **Sophisticated Backpacks**
https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks

### **Sophisticated Core**
https://www.curseforge.com/minecraft/mc-mods/sophisticated-core

### **Stalwart Dungeons**
https://www.curseforge.com/minecraft/mc-mods/stalwart-dungeons

### **Starlight**
https://www.curseforge.com/minecraft/mc-mods/starlight-forge

### **Structory**
https://www.curseforge.com/minecraft/mc-mods/structory

### **Structure Gel API**
https://www.curseforge.com/minecraft/mc-mods/structure-gel-api

### **SuperMartijn642's Core Lib**
https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib

### **Supplementaries**
https://www.curseforge.com/minecraft/mc-mods/supplementaries

### **SwingThroughGrass**
https://www.curseforge.com/minecraft/mc-mods/swingthroughgrass

### **TerraBlender**
https://www.curseforge.com/minecraft/mc-mods/terrablender

### **Terralith**
https://www.curseforge.com/minecraft/mc-mods/terralith

### **TexTrue's Rubidium Options**
https://www.curseforge.com/minecraft/mc-mods/textrues-rubidium-options

### **The Graveyard**
https://www.curseforge.com/minecraft/mc-mods/the-graveyard-forge

### **The Twilight Forest**
https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest

### **Tips**
https://www.curseforge.com/minecraft/mc-mods/tips

### **Toast Control**
https://www.curseforge.com/minecraft/mc-mods/toast-control

### **Tower's of the Wild: Additions**
https://www.curseforge.com/minecraft/mc-mods/towers-of-the-wild-additions

### **Tough As Nails**
https://www.curseforge.com/minecraft/mc-mods/tough-as-nails

### **Towns and Towers**
https://www.curseforge.com/minecraft/mc-mods/towns-and-towers

### **Transparent**
https://www.curseforge.com/minecraft/mc-mods/transparent

### **Traveler's Titles**
https://www.curseforge.com/minecraft/mc-mods/travelers-titles

### **Villager Names**
https://www.curseforge.com/minecraft/mc-mods/villager-names

### **Visual Workbench**
https://www.curseforge.com/minecraft/mc-mods/visual-workbench

### **Waystones**
https://www.curseforge.com/minecraft/mc-mods/waystones

### **When Dungeons Arise**
https://www.curseforge.com/minecraft/mc-mods/when-dungeons-arise

### **XP Tome**
https://www.curseforge.com/minecraft/mc-mods/xp-tome

### **YUNG's API**
https://www.curseforge.com/minecraft/mc-mods/yungs-api

### **YUNG's Better Desert Temples**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-desert-temples

### **YUNG's Better Dungeons**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons

### **YUNG's Better Mineshafts**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge

### **YUNG's Better Ocean Monuments**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments

### **YUNG's Better Strongholds**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-strongholds

### **YUNG's Better Witch Huts**
https://www.curseforge.com/minecraft/mc-mods/yungs-better-witch-huts

### **YUNG's Bridges**
https://www.curseforge.com/minecraft/mc-mods/yungs-bridges

### **YUNG's Extras**
https://www.curseforge.com/minecraft/mc-mods/yungs-extras

### **Zombie Awareness**
https://www.curseforge.com/minecraft/mc-mods/zombie-awareness
</details>