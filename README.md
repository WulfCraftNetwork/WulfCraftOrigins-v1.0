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