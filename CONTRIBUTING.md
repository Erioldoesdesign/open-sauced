# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

Some thoughts to help you contribute to this project

## Recommended Communication Style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Setup

```sh
$ git clone https://github.com/open-sauced/open-sauced
$ cd open-sauced
$ npm install
```

## Building

```sh
$ npm run build
```

## Testing

```sh
# the tests will run in watch mode by default
$ npm run test
```

## Pull Requests

### _We actively welcome your pull requests, however linking your work to an existing issue is preferred._

1. Fork the repo and create your branch from `master`.
1. Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-modbile-render
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required. 
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is the best place to announce your intentions to work on things.

*note for maintainers: All pull requests need a label to assist automation. See the [template](https://github.com/open-sauced/open-sauced/blob/master/.github/release-drafter.yml) to guide which labels to use.*

## Issues

If you plan to contribute a change based on an open issue, please assign yourself by commenting on the following word `.take`. Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues.

If you would like to contribute to the project for the first time, please consider joining checking the [bug](https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) or [good first issue](https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labels. 

Also, all questions are welcomed.

### Triage Team

The Triage team is inspired by [expressjs/express](https://github.com/expressjs/express/blob/master/Triager-Guide.md). This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: [TRIAGE_GUIDE.md](/add-triage-doc/TRIAGE_GUIDE.md)

> **There are no minimum requirements to become a member of the Triage Team.**

For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in [this discussion.](https://github.com/open-sauced/open-sauced/discussions/638) 

## Community

Got Questions? Join the conversation in our 'chat room' on [Discord](https://discord.gg/gZMKK5q).

## Coding Tips
- Ask questions if you are stuck. 
- Use [CSS variables](https://github.com/open-sauced/open-sauced/blob/master/src/styles/variables.js)
- Always use [rel="noreferrer" on all target="_blank" links](https://web.dev/external-anchors-use-rel-noopener/). 

## Design, Product Management and other contributions
Open Sauced has not historically had much attention in the way of non-code contribution but we welcome contributions of design, product management and any other kinds of contributions that you can offer the project.
The best way to do this is to take a look at the (main open sauced project] (https://github.com/open-sauced/open-sauced) and the [open sauced website] (https://opensauced.pizza/) and think about what you would like to improve and then 'raise an issue' or talk to us on our 'chat room' on [Discord](https://discord.gg/gZMKK5q)


## License

By contributing to the Open Sauced project, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
