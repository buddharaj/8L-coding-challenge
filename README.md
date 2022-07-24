## Startup

First install package dependencies via:

```
npm i
```

## Testing

The application uses the [Mocha](https://mochajs.org/) framework for testing. All tests should sit inside the /test folder. To run tests, use:

```
npm test
```

## Questions

A) How might your design differ if the list of specialties was expected to never change? What if changes 
frequently?
 --- use any caching (Radis cache) if list is fixed. 
 --- add listner to db change event and update the cache 

B) How might you extend your solution to process tens of millions of elements in the list of IDs? The list of 
specialities? Both?
  --- store in database and then retrieval would have been just a query away
  --- other approach is hashing technique

C) Currently this code only runs via unit tests. How might we run an operation like this in production, at 
scale?
--- using CLI => for example to run function cleanUp; use below command
 ```
 npx run-func problems/problem1.js cleanedUp "987-23" => this will output 98723
 ```