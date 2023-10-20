# Welcome to the Mongol-API Image Service Documentation

Welcome to the documentation for the Mongol-API Image Service, a powerful tool designed to help you efficiently retrieve and serve images for Mongol-API REST and Mongol-API GraphQL services. In this guide, we'll walk you through how to make the most of this service.

## How It Works

The Mongol-API Image Service simplifies the process of image retrieval. It scans the public folder and retrieves images based on their file paths. Here's how it works:

To retrieve an image located at `public/images/clothes/deel.jpg`, use the following API endpoint:

```bash

GET /api/images/folderName/imageName.imagetype

```

## GET /api/images/folderName/imageName.imagetype

```bash

https://image-service-kappa.vercel.app/api/images/clothes/deel.jpg

```

## Adding New Images

Incorporating new images into your Mongol-API services is a breeze. Just place the image in its designated folder within the public directory, and it will automatically become accessible.

## Deployment to Production

To roll out your changes to the production environment, follow these simple steps:

1. Create a pull request that includes the new images.
2. Once your pull request is approved, the changes will be deployed to the production server.
3. Congratulations! You can now use the newly added images in your services.

By following these steps, you'll efficiently manage and integrate images into your Mongol-API services, ensuring a seamless workflow.

Enjoy using the Mongol-API Image Service!

---

Feel free to customize this README to match your specific project's branding and any additional information you'd like to provide. Enjoy using the Mongol-API Image Service!
