[![Maintainability](https://api.codeclimate.com/v1/badges/903620390381de1be9c0/maintainability)](https://codeclimate.com/github/woaouh/gallery/maintainability) [![CI](https://github.com/woaouh/gallery/workflows/CI/badge.svg)](https://github.com/woaouh/gallery/actions) [![Netlify Status](https://api.netlify.com/api/v1/badges/6a421f4d-0098-4af2-b338-4e460aac9983/deploy-status)](https://app.netlify.com/sites/zealous-minsky-ae133a/deploys)

# Test task for Front end developer from Avito

_To run the project locally:_

```
$ make install
$ make start
```

## Project implementation

This project as a test task has been implemented by me and reviewed by Front end community from the internet.

The project has only one page with thumbnail images fetched from DB.

You can click on any image and a modal window will be opened.

In the modal window are three blocks: image, form and comments list. In the image block high resolution image will be fetched and showed to the user. Comments are hardcoded, because there are no comments in DB. You can create a new comment and get 204 Response. New comments are not saved, because of the DB.

## Links

- [Test task](https://github.com/avito-tech/safedeal-frontend-trainee)
- [Live project](https://zealous-minsky-ae133a.netlify.app)
