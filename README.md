yarn init -y
yarn add apollo-server-express express graphql reflect-metadata type-graphql

npm install -D @types/express @types/graphql @types/node nodemon ts-node typescript

TypeGraphQL
https://www.youtube.com/playlist?list=PLN3n1USn4xlma1bBu3Tloe4NyYn9Ko8Gs

https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjQtdHYzczFnSjhzeDhIOUV2ZWo3VmUxVjQ4Z3xBQ3Jtc0trT2h4X2lQWHYtd2ZJR3hIUFNyVXRGLVRsTm9ZRWRCRTBnLTJtZlgwZGloSkRoNmN6UnFuZm5Fb1o1NFBvZmlIVmgxUDVuVWZRaWdWYlBNTzdNZFJuc0EtcGxzOEtSaHZOcjFyZXZxb2dRREN6aEEwaw&q=https%3A%2F%2Fgithub.com%2Fbenawad%2Ftype-graphql-series%2Ftree%2F0_setup


benawad/type-graphql-series : 
https://github.com/benawad/type-graphql-series/tree/0_setup

TypeGraphQL Setup
https://www.youtube.com/watch?v=8yZImm2A1KE

Bootstrapping - TypeGraphQL 1.1.1
https://typegraphql.com/docs/bootstrap.html


npm install --save pg typeorm bcryptjs
npm install --save-D @types/bcryptjs

https://typeorm.io/#/using-ormconfig

https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools

createdb -h localhost -p 5432 -U postgres typegraph

Watch changes
=============
npm i ts-node-dev --save-dev

changed from 
"start":"nodemon --exec ts-node src/index.ts"
To
"start":"ts-node-dev --respawn src/index.ts"

added esModuleInterop : true
change allowSyntheticDefaultImports : true

npm i class-validator --save

chrome://inspect/#devices