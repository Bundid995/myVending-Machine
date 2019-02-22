I GEAR GEEK : Vending Machine Problem 
===

Please follow these conditions before code!
- Unlimited products. 
- Unlimited changes. 
- User can insert only coin : 1 baht, 2 baht, 5 baht and 10 baht. 
- API calling for get product listing. 
- Design User Interface (UI) of vending machine based on good user experience (UX). 
- Focus on good [code quality](https://medium.com/@mkt_43322/why-is-code-quality-such-a-big-deal-for-developers-91bdace85d44).
  - Readability, consistency — how easy it is to read and understand sections of the code; this includes code clarity, simplicity, and documentation.
  - Predictability, reliability, and robustness — software behavior should be predictable, and not prone to hidden bugs.
  - Maintainability and extensibility — fixing, updating and improving software should be as simple as possible, not inherently complex.
- Do you have any idea? Let's make more cool features. (Bonus point)

**Example**  

|   | Story | Insert | Total | Selected | Got item? | Change |
|---|-------|------------------|------------|-----------|----------|------------|
| 1 |User insert 10 baht and 5 baht coins and select Pepsi Max|10, 5|15|Pepsi Max|true|-|
| 2 |User insert 10 baht, 5 baht, 2 baht and 1 baht coins and select Pepsi Max|10, 5, 2, 1|18|Pepsi Max|true|2, 1|
| 3 |User insert 10 baht and 2 baht coins and select Pepsi Max but can't select it because user don't have enough money|10, 2|12|Pepsi Max|false|-|
| 4 |User insert 10 baht and 2 baht coins and select Coke Vanilla (S) but can't select it because this product isn't available|10, 2|12|Coke Vanilla (S)|false|-|
| 6 |User insert 10 baht (2 coins) and 2 baht (1 coin) but user would like to refund|10, 10, 2|22|-|false|10, 10, 2|


Product listing
---

| API | Endpoint | Method |
|-----|----------|--------|
|Product listing|http://www.mocky.io/v2/5c4982d83200004b000b588c|GET|

Acceptance agreement
---

1. Fork this github project.
2. Open `issue` feature in your repository (Options > Features > Checked on Issues) [#Reference](https://softwareengineering.stackexchange.com/questions/179468/forking-a-repo-on-github-but-allowing-new-issues-on-the-fork)
3. Put your code in `exercise` folder.
4. Publish your project on hosting, cloud or something that we can play it :)

Any question?
---
Open your issue from this link below

https://github.com/nitipatl/problem-vending-machine/issues
