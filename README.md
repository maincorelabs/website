# Maincore Website

The official website for maincore.ro, a Ruby on Rails development company. Built with Jekyll, featuring a modern design with dark/light theme support and dynamic content management.

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/light theme switching
- 📝 Blog with Markdown content
- 💼 Careers section with job listings
- 🔄 Dynamic content management
- 📱 Mobile-first approach

## Tech Stack

- Jekyll 4.3.4
- Vanilla JavaScript
- Vanilla CSS

## Getting Started

### Prerequisites

- Ruby >= 2.7.0
- Bundler

### Installation

1. Clone the repository
```bash
git clone https://github.com/maincorelabs/website.git
cd website
```

2. Install dependencies
```bash
bundle install
```

3. Start the development server
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## Directory Structure

```
.
├── _includes/          # Reusable components
├── _layouts/           # Page layouts
├── _posts/            # Blog posts
├── _jobs/             # Job listings
├── assets/
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Image assets
├── _config.yml        # Jekyll configuration
└── pages/            # Static pages
```

## Content Management

### Blog Posts

Add new blog posts in the `_posts` directory following the naming convention:
```
YYYY-MM-DD-title.md
```

### Job Listings

Add new job listings in the `_jobs` directory with the required front matter:
```yaml
---
layout: job
title: "Position Title"
location: "Remote"
job_type: "Full-time"
---
```

## License

Copyright © 2024 MAINCORE S.R.L. All rights reserved.
