# Basic Information
Our tool is available in the following GitHub Page: [Plain Language Checker website](https://yichiang.github.io/plain-language-checker).

# Introduction

In 2022, 1 in 4 adults (26%) in the United States considered themselves living with at least one disability according to the Centers for Disease Control and Prevention (CDC). Of those 26%, **10.9% live with cognitive disability**.

People with cognitive impairments may find it difficult to read and understand important documents that are not written in plain language. These difficulties may have serious consequences like impact on healthcare access.

# Related Work

There are some existing tools like:

- [Readable](https://readable.com/pro/) but you need to **pay** to use it.
- [Hemingway](https://hemingwayapp.com/) is a free editor, but it's **aimed at readability**.
- [Grammarly](https://www.grammarly.com/plans) has a free version but with limited functionality. Only the **premium** version includes the comprehension checker.

Because it's costly to build and maintain, companies don't want to offer it for free.

There are other tools aimed at text readability. These include:

- [Automatic Readability Checker](https://readabilityformulas.com/free-readability-formula-tests.php) from ReadabilityFormulas.com
- [The up-goer five text editor](https://splasho.com/upgoer5/#) by Theo Sanderson
- [Grammarly readability score](https://www.grammarly.com/blog/readability-scores/)

# Methodology

We created a simple website. The users can enter their article or text. Our software will run a list of checkers and validators based on [PlainLanguage.Gov](https://www.plainlanguage.gov/). For this website, we choose ReactJS to build the front-end and store our code in a [public GitHub repository](https://github.com/yichiang/plain-language-checker). It allows the public to modify and contribute to the code. We also choose a free GitHub Page to host the website. Therefore, it encourages everyone to clone our repository, and set up their GitHub page for free.

Although we did not have the opportunity to interact with people with disabilities directly, we found multiple first person accounts from people with and without disabilities regarding plain language. One of our teammates had lived with someone who has Autism for 4 years. Based on their experience, it was really important to speak in plain language. If the text is too complicated it can cause people to feel confused or bad about themselves. Using plain language helps people feel included.

The plain language checker will first clean up the input text. This involves doing things like replacing multiple line breaks with just one and replacing tabs with spaces. Then, the input text is split into paragraphs and each paragraph is split into sentences. Each sentence is then processed by multiple functions that check different plain language guidelines. These functions will generate feedback items that will form the report. The feedback items in the report are grouped by sentence and are reported in the following order: issues, suggestions and kudos.

# Disability Justice Perspective

We found the following first person accounts:

- [Connect with Plain Language](https://www.youtube.com/watch?v=UlpUxa6EngY)
- [Plain Language Writing — An Essential Part Of Accessibility](https://www.forbes.com/sites/andrewpulrang/2020/10/22/plain-language-writing---an-essential-part-of-accessibility/?sh=68cb06b87935)
    - "Plain language is important. It helps everyone understand and participate in the conversation" from Liz Weintraub.
- [The right to understand by Sandra Fisher Martins](https://www.youtube.com/watch?v=tP2y0vU7EG8)
- [Demand to Understand: How Plain Language Makes Life Simpler, by Deborah Bosley](https://www.youtube.com/watch?v=OXcLwlZOE1s)

# Learnings and future work

The following are "nice to have" work items that we weren't able to get done due to time constraints:

- Add [detection of positive language](https://github.com/yichiang/plain-language-checker/issues/19)
- Add [detection for hidden verbs](https://github.com/yichiang/plain-language-checker/issues/12)
- Add [detection of redundant words](https://github.com/yichiang/plain-language-checker/issues/17)

Another thing that could be improved is the ability to filter the report. For example, if you only wanted to see issues, or just suggestions. In addition, another feature would be to filter to a particular type of feedback. For example, if you wanted to see only the complex words detected. This would be especially useful for larger reports. Furthermore, it would also be nice to have the option to fix some of those problems automatically, with a "fix" button for each feedback item.

Additionally, it would be useful to be able to configure the hardcoded thresholds, like how many words does it take for the checker to consider a sentence long, or how many sentences is a long paragraph, or the ratio of examples or transition words to paragraphs. Finally, it would be useful to extend this tool to other languages beyond English.

# How you made your app accessible

The app was made simple on purpose, with only the title, a text box for input and a "Submit" button. The report is very simple as well and lists the feedback items found. The specific comments are listed first and then the general comments. We use bold to highlight the important parts of the report and also have text for the links that form the feedback items.

In order to verify the accessibility of the website, we used the following automated tools:

- [Web Accessibility Evaluation Tool by WebAIM](https://wave.webaim.org/report#/https://yichiang.github.io/plain-language-checker/%23/).
- Chrome's extension from [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US&utm_term=axe%20browser%20extension&utm_campaign=Search%20-%20axe%20DevTools%20-%20Checker&utm_source=adwords&utm_medium=ppc&hsa_src=g&hsa_ad=626089536234&hsa_tgt=kwd-942809056982&hsa_mt=e&hsa_ver=3&hsa_acc=7854167720&hsa_kw=axe%20browser%20extension&hsa_grp=142979637091&hsa_cam=17378411167&hsa_net=adwords&gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPJQa-i2a48Fotz0fFQlcJ6t_yRBdSWJ2TFfpsjHCvGnn7QE27ZpH4QaAtrKEALw_wcB).

None of these reported any errors. In addition, we conducted manual testing using a screen reader and keyboard navigation. We didn't find any issues during our testing.

# Credits
- Syllable Open Source Project [Syllable NPM Info](https://www.npmjs.com/package/syllable)

- Passive Open Source Project [Passive - GitHub Info](https://github.com/btford/passive-voice/blob/master/passive.js)

# How to get started
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).