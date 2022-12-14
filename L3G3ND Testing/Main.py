import discord
from discord import app_commands
from discord.ext import commands
import requests
import json
import asyncio
import os

client = commands.Bot(command_prefix="!", intents=discord.Intents.all())

@client.event
async def on_ready():
    await client.tree.sync()



@client.tree.command(name="ice", description="Ice and Fire mod updates")
async def command(ctx):
    headers = {
        'authorization': 'Mzk0NTM0NzI5MTY2MDk0MzM5.GjWs7j.LDqPmf-LUle3DItTVOU6kaRb3YVyZZk9tc4E3c'
    }
    r = requests.get(f'https://discord.com/api/v9/channels/297892719202926603/messages?limit=1', headers=headers)
    jsonn = json.loads(r.text)
    for value in jsonn:
        print(value['content'])
    channel = ctx.channel
    await channel.send(value['content'])
    



async def main():
    async with client:
        await client.start("MTA1MjMxODIwNjAzNzA4MjIwNA.GoJgHM.LRyBzooAXyctCWd_YGynUf7whkqzpFGDAVtELY")

asyncio.run(main())