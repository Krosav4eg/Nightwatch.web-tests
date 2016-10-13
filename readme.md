# e2e tests for skynet

### Install

yarn install
npm run selenium-install
npm run selenium-start (only for local)

### Config
Need create file to ./config/auth.js
```javascript
module.exports = {
    login: 'xxx',
    pass: 'xxx',
};
```

Need configurate url env for test in file nightwatch.json (test_settings.default.launch_url):
```javascript
launch_url: "http://localhost:8080"
```

### Run tests
```javascript
npm test
```

### Reports xUnit:
After run we can parse reports from directory `./reports`