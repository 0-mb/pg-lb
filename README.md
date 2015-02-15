# pg-lb

#### pg wrapper for load balancing reads in single or clustered nodejs environments

## Features

1. Connection Pooling
2. Replication
3. Load Balancing
4. Failover Handling
5. Single app cluster using pg-lb to load balance multiple pg connections
6. Multiple load balanced app clusters using pg-lb to load balance multiple pg connections

### Run tests

Follow docker procudures in [Docker Notes.md](Docker Notes.md) for setting up test servers first.

````
npm test
````