# performance-monitor
a scalable machine performance monitoring solution for networks using Node.js

# demo: https://performance-monitor-0.herokuapp.com/

**Backend**: Node.js with cluster modules for scalability. Listens to performance data from NodeCliet using socket.io. Build from my repo: https://github.com/amanaligit/performance-monitor-server

**NodeClient**: A client program that sends the client computer's heartbeat with its performance data to the server using socket.io

**reactClient**: A simple reactJS UI to observe the performance data of all machines connected

**Redis** is used for fast data-sharing between different node clusters.

**MongoDB** is used to persist the machine data.

# install:
1. from /server run npm/yarn install then npm start
2. from /nodeClient run npm/yarn install then  node index.js
3. go to localhost:8181 on browser.

