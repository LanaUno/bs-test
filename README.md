# bs-test
# bs-test
### Prepare and test

##### 1. Install Node version 20.15.0
##### 2. NPM version 10.7.0
##### 3. Clone repository 
```
git clone https://github.com/LanaUno/bs-test.git
```
##### 4. Go to the folder bs-test: 
```
cd ./bs-test
```
##### 5. To install all dependencies use "npm install"

##### 6. Repo has 3 config files. One - wdio.cong.js -  let run tests localy. In this case Android studio should be installed and open with running device into it that is going to be tested. Other configs let run tests on Browserstack app:
- wdio.bs-gp3.conf.js - for Google Pixel 3 with android version 9.0
- wdio.bs-op9.conf.js - for OnePlus 9 with android version 11.0

##### 7. To run tests on 'Google Pixel 3' type in "powershell" terminal:
```
npm run bs-gp3
```
##### 8. To run tests on 'OnePlus 9' type in "powershell" terminal:
```
npm run bs-op9
```
##### 9. To run separate specs please use next scripts: 
###### for bs-gp3 config
```
npx wdio run ./wdio.bs-gp3.conf.js --spec signup.e2e.js
```
###### for bs-op9 config
```
npx wdio run ./wdio.bs-op9.conf.js --spec signup.e2e.js
```