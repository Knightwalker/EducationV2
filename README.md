## I. Description

This public repo is a collection of all my completed labs & exercises for my software engineering education.

1. frontendmasters.com
   - [Complete Intro to React, v8](https://github.com/Knightwalker/EducationV2/tree/main/frontendmasters.com/complete-intro-to-react-v8) - Completed on Feb 2023
   - [React Performance](https://github.com/Knightwalker/EducationV2/tree/main/frontendmasters.com/aws-for-front-end-engineers-v2) - Completed on Mar 2023
   - [AWS For Front-End Engineers, v2](https://github.com/Knightwalker/EducationV2/tree/main/frontendmasters.com/aws-for-front-end-engineers-v2) - Completed on Mar 2023
   - [Full Stack for Front-End Engineers, v3](https://github.com/Knightwalker/EducationV2/tree/main/frontendmasters.com/full-stack-for-front-end-engineers-v3) - Completed on May 2023

## II. Directory Structure

The repository has the following directory structure. 

```
EducationV2/
├── [website_name]/ (Directory for each website. Should be a domain name + tld, e.g. frontendmasters.com)
│   ├── [teacher_name]/ (Directory for each teacher. Should be a hyphen delimited string)
│   │   ├── course/ (Directory for a single course)
│   │   │   ├── projects/ (Contains all projects for a single course)
│   │   │   ├── resources/ (Contains all resources for a single course)
```

## III. Contributing

### III.1. Commit Message Format

The `<type>` and `<summary>` fields are mandatory.

#### III.1.1 Commit Message Syntax

```
<type>: <short summary>
  │            │
  │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │
  │
  │
  │
  │
  │
  │
  └─⫸ Commit Type: materials
```

#### III.1.2. Type

Must be one of the following:

- **materials**: Updates to the learning materials
- **docs**: Documentation only changes
- **exercise**: For when I complete a lab & exercise. For example `exercise: completes "web authentication apis" at frontendmasters.com`
- **fs**: File system changes for when I do CRUD operations on files and folders. For example `fs: renames files & folders at root directory`
