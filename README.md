<p align="center">
    <img src="https://raw.githubusercontent.com/bednar/launch-lagoon/HEAD/logo.png" alt="Launch-Lagoon Logo" width="150px">
</p>

# Launch-Lagoon

Welcome to the Launch-Lagoon repository, your go-to solution for crafting outstanding landing pages for mobile apps. Blending modern aesthetics with functionality, this template is designed to captivate your audience and elevate your app's online presence.

## Introduction

Launch-Lagoon is more than just a landing page template - it's a gateway to showcasing your mobile app's unique features and functionalities. Crafted with precision and care, this template is tailored to meet the needs of app developers and marketers who aim for nothing less than perfection.

## Features

- **Responsive Design**: Ensures your landing page looks stunning on all devices, from desktops to smartphones.
- **Gatsby.js Framework**: Leverages the power of Gatsby.js for fast, efficient, and high-performing web experiences.
- **Tailwind CSS Integration**: Utilizes the utility-first CSS framework for designing sleek, custom interfaces with ease.
- **HyperUI Components**: Utilizing HyperUI, a comprehensive library of Tailwind CSS components, to provide a wide range of beautifully designed, fully customizable UI components to speed up your development process.
- **SEO Optimized**: Built with the best SEO practices in mind to help your website rank higher and get noticed.
- **Easy to Customize**: Simple and straightforward customization options to reflect your app's branding and style.

## Technologies Used

- **Gatsby.js**: A modern web framework for React, offering lightning-fast performance and powerful features.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs without leaving your HTML.
- **HyperUI**: A rich Tailwind CSS component library, offering a variety of pre-designed components for quick and easy implementation in your projects.
- **React**: A JavaScript library for building user interfaces, known for its efficiency and flexibility.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for developing scalable network applications.

## Getting Started

To get started with Launch-Lagoon:

1. Clone the repository:
   ```
   git clone https://github.com/bednar/launch-lagoon.git
   ```
2. Navigate to the project directory:
   ```
   cd launch-lagoon
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   gatsby develop
   ```
5. Build the project for production:
   ```
   gatsby build
   ```

## Template Configuration

This template can be easily customized through the `src/data/config.yaml` file, 
allowing you to tailor fundamental aspects of your landing page's look and content. 
Additionally, you can specify the content of your "Privacy Policy" 
and "Terms and Conditions" through Markdown files.

### Config.yaml File

The `config.yaml` file contains the following settings:

- `companyName`: The name of your company. This name is used in the footer of the landing page.
- `appName`: The name of your app. This name is used in the header and as the title of the pages.
- `appDescription`: A brief description of your app. This description is utilized in SEO HTML meta tags to provide search engines with a clear summary of your app.
- `appKeywords`: A list of keywords associated with your app. These keywords are used in SEO HTML meta tags to help improve your app's search engine ranking.
- `primaryColor`: The primary color of the theme. This color is used in the header and other elements. The color should be from the Tailwind CSS color palette.

Additionally, you can specify promotional links to your app in both the App Store and Play Store:

- `appStoreLink`: The URL of your app in the App Store, used for promotion.
- `playStoreLink`: The URL of your app in the Play Store, also used for promotion.

#### Configuration Example

```yaml
# The name of the company, it is used in the footer.
companyName: "My Company"

# The name of the app, used in the header and the title of the pages.
appName: "My App"

# SEO settings
# A brief description of your app for SEO HTML meta tags.
appDescription: "My App is a mobile app that does something cool."
# A list of keywords for SEO HTML meta tags.
appKeywords: "app, cool, mobile, something"

# Promotional links
# The URL of the app in the App Store, used in the promotion.
appStoreLink: "https://apps.apple.com/us/app/my-app/id1234567890"
# The URL of the app in the Play Store, used in the promotion.
playStoreLink: "https://play.google.com/store/apps/details?id=com.mycompany.myapp"

# Primary color of the theme, used in the header and some other elements,
# should be from the Tailwind CSS color palette.
primaryColor: "rose-400"
```
### Privacy Policy and Terms and Conditions

To customize the "Privacy Policy" and "Terms and Conditions" content:

1. Edit the Markdown files located at:
   - `src/data/content/privacy-policy.md` for Privacy Policy
   - `src/data/content/terms-and-conditions.md` for Terms and Conditions

These files will be processed and displayed on their respective pages on your site. 
You can use Markdown formatting to style the content as needed.

### Promotion Section

In addition to configuring your app's basic details, you can also customize a special "Promotion Section" to highlight key features or special offers related to your app. This section can be tailored to catch the user's eye and promote your app effectively.

To customize the "Promotion Section":

1. Edit the Markdown file located at:
   - `src/data/content/promotion.md`

This file allows you to add detailed promotional content, which will be prominently displayed on your landing page. 
You can utilize Markdown formatting to include text, links, images, and other elements to create an engaging promotional section.

The "Promotion Section" is an excellent way to provide potential users with compelling reasons to download your app, 
showcase limited-time offers, or highlight unique features that set your app apart from the competition.

#### Example of Promotion Markdown Content

```markdown
---
title: "Special Launch Offer!"
---

For a limited time, download **My App** and receive an exclusive in-app bonus!

Don't miss out on this incredible opportunity to enhance your experience with **My App**. Offer valid until end of month.
```

### App Screenshot Configuration

To visually showcase your app's features or user interface directly on your landing page, 
you can specify a screenshot of your application. This helps to give potential users 
a glimpse of what to expect from your app before they decide to download it.

#### Customizing the App Screenshot

The template is designed to display an app screenshot, which can be easily customized by replacing the default image file:

- `src/images/app-screenshot.png`

To update the app screenshot, simply replace the `app-screenshot.png` file with your desired image. 
Ensure that your new screenshot is named `app-screenshot.png` and is located in the `src/images/` directory.

#### Image Recommendations

For the best visual impact, we recommend using a high-quality PNG image of your app's most engaging screen. 
Consider the following guidelines for your screenshot:

- **Resolution**: Aim for a clear and high-resolution image that is not blurry when scaled.
- **Aspect Ratio**: The image should maintain a reasonable aspect ratio that fits well within the design of the landing page without requiring excessive scaling.
- **Content**: Choose a screenshot that effectively communicates the core functionality or unique features of your app.

## Contributing

Contributions to enhance Launch-Lagoon are warmly welcomed. Whether it's bug fixes, feature additions, or improvements in documentation, your help is much appreciated.

## License

[MIT License](LICENSE)

---

Embark on your journey to a stunning web presence with Launch-Lagoon - where functionality meets beauty, and your app takes center stage.
