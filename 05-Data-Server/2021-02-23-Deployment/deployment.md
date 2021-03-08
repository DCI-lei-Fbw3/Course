# Deploying to Production

### Key Concepts

- Whenever you take your code to a public facing IP address, this version of your software 
is called **Production**. Not the software itself, but the environment where you put the software.

- The software will almost always behave differently on a public IP than on localhost. 

- Because of a clear difference between development and production environments, developers
generally break the process of deployment into several steps. This process of taking your code
from a local development to live development environments, before production, is called staging. 

- Infrastructure: is the phyical hardware that runs the compute power needed to excute your
program.

- Commercial infrastructure can be of different types, there are 2 I would like focus on.
    1. IaaS (Instrastructure as a Service):
    - IaaS is just purely the raw infrastructure (compute, memory, OS, netowrk) needed by consumers, and then the developers accessing IaaS need to set up the environment the way they want. (Involves lots of configuration). Generally, IaaS is really cheap and super easy to scale. 
    Some examples:
    - AWS (started out as IaaS)
    - Microsoft Azure (started out as IaaS)
    - GCP (Google Cloud Platform)
    - Telekom
    - Digital Ocean


    2. PaaS (Platform as a Service):
    - PaaS is a more developer-friendly aprroach where the providers give you a pre-configured platform to deploy your program to. PaaS is usually cheap (but not as cheap as IaaS), scales very easily without anything needed from your end. PaaS usually comes with everything configured (security, OS, third-integrations, templates, domain/DNS)
    Some examples:
    - Vercel (serverless platform)
    - Heroku
    - OpeNode
    - Firebase (Google)

### Our first deployment-OpeNode
- OpeNode: is PaaS, built on top of Docker (https://www.docker.com). 
- Its super to deploy your code there.
- It was originally meant for Nodejs environments only, but now they offer environment for different languages/frameworks.
- opeNode has a very easy to use CLI.

***Preparation***

1. Change any passwords, URLS (mongoDb), or anything "secret/private" into .env variables. You can also st environment variables from the OpeNode dashboard.
2. Set the port of your express app to "80". 

````javascript
//For example

app.listen(80);
//OR
app.listen (process.env.PORT)
````

### To-Dos
- Prepare your express app for deployment 
- Deploy your express-mongoose CRUD/AUTH app to OpeNode
- Test deploment with CLI
- Read the docs
- Play around

Taimur's deployed code: https://fbw3.eu.openode.io
