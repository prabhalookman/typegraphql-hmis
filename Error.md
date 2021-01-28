# Error 1 : Cannot find module 'graphql'
Require stack:
- E:\Prabha\Local\BenAwad\typegraphql-hmis\node_modules\apollo-server-errors\dist\index.js

## Solution :
1. removed npm uninstall --save graphql(graphql 15.1.1)
2. installed 14.1.1
3. (node:2952) UnhandledPromiseRejectionWarning: Error: Looks like you use an incorrect version of the 'graphql' package: "14.1.1". Please ensure that you have installed a version that meets TypeGraphQL's requirement: "^15.3.0"
4. installed graphql@^15.3.0