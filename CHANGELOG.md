# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/nabby27/main-fns/compare/v1.4.0...HEAD)

### Added

### Changed

- **object module:** implementation [lodash](https://lodash.com/) to own implementation
- 4 spaces to indent instead of 2
- change [Makefile](./Makefile)

### Deprecated

### Removed

### Fixed

- badge on [README](./README.md)

### Security

## [v1.4.0](https://github.com/nabby27/main-fns/releases/tag/v1.4.0) - 2021-02-07

### Added

- **object module**
- **object module:** clone function
- **object module:** isEqual function
- [lodash](https://lodash.com/) dependence

### Changed

- Show functions grouped by modules in [documentation](https://nabby27.github.io/main-fns/)

## [v1.3.0](https://github.com/nabby27/main-fns/releases/tag/v1.3.0) - 2021-01-18

### Added

- **date module:** relativeTime function
- **date module:** Locale type

### Changed

- Update [README](./README.md)
- Update [documentation](https://nabby27.github.io/main-fns/)

## [v1.2.0](https://github.com/nabby27/main-fns/releases/tag/v1.2.0) - 2021-01-15

### Added

- new DateStringFormat yyyy/MM/dd
- new DateStringFormat dd/MM/yyyy

### Changed

- **date module:** implementation [date-fns](https://date-fns.org/) to own implementation
- Choose issue template
- Update [documentation](https://nabby27.github.io/main-fns/)
- Separate workflows for CI

### Removed

- [date-fns](https://date-fns.org/) dependence

## [v1.1.0](https://github.com/nabby27/main-fns/releases/tag/v1.1.0) - 2021-01-10

### Added

- **array module:** examples on JSDoc
- **date module:** examples on JSDoc
- **date module:** endOfDay with optional date (by defualt is current date)
- **date module:** startOfDay with optional date (by defualt is current date)
- **math module:** examples on JSDoc
- **string module:** examples on JSDoc
- **string module:** pascalCase function

### Changed

- Update [README](./README.md)
- Update [CONTRIBUTING](./.github/CONTRIBUTING.md)
- Update [HOW_TO_DEVELOP](./.github/HOW_TO_DEVELOP.md)
- Update [ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE.md)
- Update [PULL_REQUEST_TEMPLATE](./.github/PULL_REQUEST_TEMPLATE.md)
- **string module:** implementation [voca](https://vocajs.com/) to own implementation

### Removed

- voca dependence

## [v1.0.0](https://github.com/nabby27/main-fns/releases/tag/v1.0.0) - 2021-01-03

### Changed

- **date module:** setEndTime to endOfDay (why? By having the name 'set' it implied that there was some side effect)
- **date module:** setInitTime to startOfDay (why? By having the name 'set' it implied that there was some side effect)
- **array module:** divide functions to import only function on use
- **date module:** divide functions to import only function on use
- **math module:** divide functions to import only function on use
- **string module:** divide functions to import only function on use
- **array module:** implementation [lodas](https://github.com/lodash/lodash) to own implementation
- ES2015 to ESNext

## [v0.3.1](https://github.com/nabby27/main-fns/releases/tag/v0.3.1) - 2021-01-02

### Added

- Free side effect on package.json

## [v0.3.0](https://github.com/nabby27/main-fns/releases/tag/v0.3.0) - 2021-01-02

### Added

- **string module**
- **string module:** camelCase function
- **string module:** capitalize function
- **string module:** firstLetters function
- **string module:** kebabCase function
- **string module:** lastLetters function
- **string module:** lowerCase function
- **string module:** snakeCase function
- **string module:** titleCase function
- **string module:** upperCase function

### Changed

- Update [documentation](https://nabby27.github.io/main-fns/)

### Removed

- Unnecessary dependencies

## [v0.2.1](https://github.com/nabby27/main-fns/releases/tag/v0.2.1) - 2021-01-02

### Changed

- Update [documentation](https://nabby27.github.io/main-fns/)

## [v0.2.0](https://github.com/nabby27/main-fns/releases/tag/v0.2.0) - 2021-01-02

### Added

- **math module:** mean function
- **math module:** median function
- **math module:** mode function
- **math module:** multiply function
- **array module:** orderBy function

### Changed

- **math module:** implementation [compute.io](https://github.com/compute-io/compute.io) to own implementation
- Update [documentation](https://nabby27.github.io/main-fns/)

### Removed

- Unit test folder

## [v0.1.2](https://github.com/nabby27/main-fns/releases/tag/v0.1.2) - 2020-12-30

### Added

- **math module:** max function
- **math module:** sum function

### Changed

- **math module:** implementation [math.js](https://github.com/josdejong/mathjs) to [compute.io](https://github.com/compute-io/compute.io)

## [v0.1.1](https://github.com/nabby27/main-fns/releases/tag/v0.1.1) - 2020-12-29

### Added

- **math module:** module
- **math module:** min function

### Removed

- build to cjs

### Fixed

- Unused vars on eslint interfaces

## [v0.1.0](https://github.com/nabby27/main-fns/releases/tag/v0.1.0) - 2020-12-29

### Added

- Build project to esm (e.s. modules) and cjs (commonjs)
- [Codecov](https://codecov.io/gh/nabby27/main-fns)
- **array module:** module
- **array module:** first function
- **array module:** last function
- **array module:** reverse function

### Changed

- Update [README](./README.md)
- Update [documentation](https://nabby27.github.io/main-fns/)

## [v0.0.14](https://github.com/nabby27/main-fns/releases/tag/v0.0.14) - 2020-12-24

### Fixed

- Deploy build and deploy project on npm

## [v0.0.13](https://github.com/nabby27/main-fns/releases/tag/v0.0.13) - 2020-12-24

### Changed

- Update [README](./README.md)
- Update [documentation](https://nabby27.github.io/main-fns/)

## [0.0.12](https://github.com/nabby27/main-fns/releases/tag/v0.0.12) - 2020-12-23

### Added

- Pull request template
- Issue template
- Contributing page
- Code of conduct page

### Changed

- Update [README](./README.md)
- Update [documentation](https://nabby27.github.io/main-fns/)

## [0.0.11](https://github.com/nabby27/main-fns/releases/tag/v0.0.11) - 2020-12-21

### Added

- Git on docker container

## [0.0.10](https://github.com/nabby27/main-fns/releases/tag/v0.0.10) - 2020-12-21

### Changed

- Update dev dependencies
- Update [README](./README.md)
- Update [documentation](https://nabby27.github.io/main-fns/)

### Fixed

- Run test on pull request

## [0.0.9](https://github.com/nabby27/main-fns/releases/tag/v0.0.9) - 2020-12-21

### Changed

- Update [documentation](https://nabby27.github.io/main-fns/)
- Update [README](./README.md)
- Update dev dependencies

### Fixed

- Run test on npm update version
- Eslint commands

## [0.0.8](https://github.com/nabby27/main-fns/releases/tag/v0.0.8) - 2020-12-21

### Changed

- Update [documentation](https://nabby27.github.io/main-fns/)
- Update make commands to develop

### Removed

- Unnecessary dev dependencies

## [0.0.7](https://github.com/nabby27/main-fns/releases/tag/v0.0.7) - 2020-12-21

### Added

- [LICENSE](./LICENSE) file

### Changed

- Github Actions workflow to deploy
- Update [README](./README.md)

## [0.0.6](https://github.com/nabby27/main-fns/releases/tag/v0.0.6) - 2020-12-20

### Added

- Tags
- Deploy on npm when change version

## [0.0.5](https://github.com/nabby27/main-fns/releases/tag/v0.0.5) - 2020-12-20

### Removed

- moment dependence

## [0.0.4](https://github.com/nabby27/main-fns/releases/tag/v0.0.4) - 2020-12-20

### Changed

- Update [documentation](https://nabby27.github.io/main-fns/)
- Update dependencies

## [0.0.3](https://github.com/nabby27/main-fns/releases/tag/v0.0.3) - 2020-12-20

### Changed

- Dates implementation with date-fns

## [0.0.2](https://github.com/nabby27/main-fns/releases/tag/v0.0.2) - 2020-12-20

### Added

- Some dates functions to test with moment
- JSDoc to documentation on Github Pages
- Implement all test
- CI with Github Actions

### Changed

- Rename project

## [0.0.1](https://github.com/nabby27/main-fns/releases/tag/v0.0.1) - 2020-12-17

### Added

- Create base project with:
  - TypeScript
  - Eslint
  - Jest
  - Docker Compose
  - Make
- Some dates functions to test with moment
- JSDoc to documentation on Github Pages
- Implement all test
- CI with Github Actions
